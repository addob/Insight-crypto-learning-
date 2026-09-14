import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getStripe, isStripeConfigured } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ error: "Please log in first." }, { status: 401 });
  }

  if (!isStripeConfigured()) {
    return NextResponse.json(
      {
        error:
          "Payments are not yet configured on this site. Please check back soon, or contact us to enrol manually.",
      },
      { status: 503 }
    );
  }

  const body = await req.json().catch(() => ({}));
  const plan = body?.plan === "onetime" ? "onetime" : "monthly";

  const stripe = getStripe()!;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const userId = (session.user as { id: string }).id;
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) {
    return NextResponse.json({ error: "User not found." }, { status: 404 });
  }

  let customerId = user.stripeCustomerId ?? undefined;
  if (!customerId) {
    const customer = await stripe.customers.create({
      email: user.email,
      name: user.name,
      metadata: { userId: user.id },
    });
    customerId = customer.id;
    await prisma.user.update({
      where: { id: user.id },
      data: { stripeCustomerId: customerId },
    });
  }

  const priceId =
    plan === "onetime" ? process.env.STRIPE_PRICE_ONETIME : process.env.STRIPE_PRICE_MONTHLY;

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: plan === "onetime" ? "payment" : "subscription",
    customer: customerId,
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${siteUrl}/dashboard?checkout=success`,
    cancel_url: `${siteUrl}/pricing?checkout=cancelled`,
    metadata: { userId: user.id, plan },
    subscription_data:
      plan === "monthly" ? { metadata: { userId: user.id, plan } } : undefined,
  });

  return NextResponse.json({ url: checkoutSession.url });
}
