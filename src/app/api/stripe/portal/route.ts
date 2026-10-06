import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getStripe, isStripeConfigured } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";

/**
 * Creates a Stripe Billing Portal session so subscribers can self-serve
 * manage or cancel their plan, update their payment method, and view
 * invoices — per Stripe's guidance to use the Customer Portal rather than
 * building this UI ourselves.
 */
export async function POST() {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ error: "Please log in first." }, { status: 401 });
  }

  if (!isStripeConfigured()) {
    return NextResponse.json({ error: "Payments are not yet configured on this site." }, { status: 503 });
  }

  const userId = (session.user as { id: string }).id;
  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (!user?.stripeCustomerId) {
    return NextResponse.json(
      { error: "No billing account found for this user yet." },
      { status: 404 }
    );
  }

  const stripe = getStripe()!;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  try {
    const portalSession = await stripe.billingPortal.sessions.create({
      customer: user.stripeCustomerId,
      return_url: `${siteUrl}/dashboard`,
    });
    return NextResponse.json({ url: portalSession.url });
  } catch (err) {
    // A customer ID saved while the integration was in test mode won't
    // exist once the key switches to live mode (test and live keep
    // entirely separate customer data) — there's no billing account to
    // manage until they start a new checkout.
    console.error("[stripe:portal]", err);
    return NextResponse.json(
      { error: "No billing account found for this user yet." },
      { status: 404 }
    );
  }
}
