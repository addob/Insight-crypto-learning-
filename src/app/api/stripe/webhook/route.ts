import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { getStripe, getSubscriptionPeriodEnd } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";

/** Statuses under which the subscriber should NOT have active access. */
const INACTIVE_SUBSCRIPTION_STATUSES: Stripe.Subscription.Status[] = [
  "canceled",
  "incomplete_expired",
  "unpaid",
];

async function syncSubscriptionAccess(subscription: Stripe.Subscription) {
  const userId = subscription.metadata?.userId;
  if (!userId) return;

  const revoke = INACTIVE_SUBSCRIPTION_STATUSES.includes(subscription.status);

  await prisma.user.update({
    where: { id: userId },
    data: {
      plan: "monthly",
      stripeSubId: subscription.id,
      accessUntil: revoke ? new Date() : getSubscriptionPeriodEnd(subscription),
    },
  });
}

async function fulfilCheckoutSession(stripe: Stripe, checkoutSession: Stripe.Checkout.Session) {
  const userId = checkoutSession.metadata?.userId;
  const plan = checkoutSession.metadata?.plan;
  if (!userId) return;

  if (plan === "onetime") {
    await prisma.user.update({
      where: { id: userId },
      data: { hasLifetime: true, plan: "onetime" },
    });
  } else if (plan === "monthly" && checkoutSession.subscription) {
    const subscription = await stripe.subscriptions.retrieve(
      checkoutSession.subscription as string
    );
    await syncSubscriptionAccess(subscription);
  }
}

export async function POST(req: Request) {
  const stripe = getStripe();
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!stripe || !webhookSecret) {
    return NextResponse.json({ error: "Stripe not configured" }, { status: 503 });
  }

  const signature = req.headers.get("stripe-signature");
  const payload = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(payload, signature ?? "", webhookSecret);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Invalid signature";
    return NextResponse.json({ error: `Webhook signature verification failed: ${message}` }, { status: 400 });
  }

  switch (event.type) {
    // Fulfil on synchronous success. For delayed-notification payment
    // methods, `completed` can fire while `payment_status` is still
    // "unpaid" — fulfilment for those happens on async_payment_succeeded
    // instead, so we don't grant access for a payment that may still fail.
    case "checkout.session.completed": {
      const checkoutSession = event.data.object as Stripe.Checkout.Session;
      if (checkoutSession.payment_status === "unpaid") break;
      await fulfilCheckoutSession(stripe, checkoutSession);
      break;
    }

    // Delayed-notification payment method (e.g. bank debit) has now
    // actually cleared — fulfil here since `completed` deliberately
    // skipped it above.
    case "checkout.session.async_payment_succeeded": {
      const checkoutSession = event.data.object as Stripe.Checkout.Session;
      await fulfilCheckoutSession(stripe, checkoutSession);
      break;
    }

    // Delayed-notification payment ultimately failed. No access was
    // granted (we never fulfilled on the unpaid `completed` event), so
    // there's nothing to revoke — handled explicitly rather than falling
    // through to `default` so this isn't silently dropped.
    case "checkout.session.async_payment_failed":
      break;

    case "invoice.paid": {
      const invoice = event.data.object as Stripe.Invoice;
      const subscriptionRef = invoice.parent?.subscription_details?.subscription;
      if (!subscriptionRef) break;

      const subscriptionId =
        typeof subscriptionRef === "string" ? subscriptionRef : subscriptionRef.id;
      const subscription = await stripe.subscriptions.retrieve(subscriptionId);
      await syncSubscriptionAccess(subscription);
      break;
    }

    // A renewal failed. Stripe will automatically retry per the
    // subscription's dunning configuration; we deliberately don't revoke
    // access here — `accessUntil` was only ever extended by a *successful*
    // invoice.paid, so it will naturally lapse if retries keep failing.
    // Handled explicitly (rather than via `default`) as a hook for adding
    // a "payment failed, please update your card" email later.
    case "invoice.payment_failed":
      break;

    // Catches plan changes, reactivations, and status transitions
    // (e.g. trialing -> active, or -> past_due/unpaid) that aren't
    // necessarily accompanied by an invoice event.
    case "customer.subscription.updated": {
      const subscription = event.data.object as Stripe.Subscription;
      await syncSubscriptionAccess(subscription);
      break;
    }

    case "customer.subscription.deleted": {
      const subscription = event.data.object as Stripe.Subscription;
      const userId = subscription.metadata?.userId;
      if (!userId) break;

      await prisma.user.update({
        where: { id: userId },
        data: { accessUntil: new Date() },
      });
      break;
    }

    default:
      break;
  }

  return NextResponse.json({ received: true });
}
