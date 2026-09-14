import Stripe from "stripe";

let stripeClient: Stripe | null = null;

// Keep in sync with the Stripe API version this integration was built and
// tested against. Bump deliberately, not automatically.
const STRIPE_API_VERSION = "2026-08-26.dahlia" satisfies Stripe.LatestApiVersion;

export function getStripe(): Stripe | null {
  // Strip anything that isn't a valid Stripe-key character. A stray
  // embedded newline/space from copy-pasting the value into a dashboard
  // field (not just leading/trailing — .trim() alone wasn't enough) makes
  // Node's http module reject the Authorization header outright with
  // ERR_INVALID_CHAR, before any request is attempted — surfacing
  // confusingly as a StripeConnectionError with no real network attempt
  // ever made, rather than an obviously-key-related error. Real Stripe
  // keys are always [A-Za-z0-9_], so this is safe.
  const key = process.env.STRIPE_SECRET_KEY?.replace(/[^A-Za-z0-9_]/g, "");
  if (!key) return null;
  if (!stripeClient) {
    stripeClient = new Stripe(key, {
      apiVersion: STRIPE_API_VERSION,
      // Stripe's SDK defaults to a fetch-based HTTP client, which has been
      // observed to fail immediately with "connection error" in some
      // serverless bundling setups (Vercel/Next.js included) despite no
      // real network issue. Forcing the classic Node https client avoids
      // this — see https://github.com/stripe/stripe-node/issues/2286.
      httpClient: Stripe.createNodeHttpClient(),
    });
  }
  return stripeClient;
}

export const isStripeConfigured = () =>
  Boolean(
    process.env.STRIPE_SECRET_KEY &&
      process.env.STRIPE_PRICE_MONTHLY &&
      process.env.STRIPE_PRICE_ONETIME
  );

/**
 * As of newer Stripe API versions, `current_period_end` lives on each
 * subscription item (not the subscription itself), since a subscription can
 * hold multiple prices with independent billing cycles. This integration
 * only ever attaches a single price per subscription, so take the latest
 * period end across items.
 */
export function getSubscriptionPeriodEnd(subscription: Stripe.Subscription): Date {
  const ends = subscription.items.data.map((item) => item.current_period_end);
  return new Date(Math.max(...ends) * 1000);
}

/**
 * Stripe recommends tagging Checkout Sessions with `integration_identifier`
 * (a stable label + an 8-letter random suffix) so sessions from this
 * integration are identifiable and comparable in the Dashboard.
 */
export function checkoutIntegrationIdentifier(label: string): string {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let suffix = "";
  for (let i = 0; i < 8; i++) {
    suffix += letters[Math.floor(Math.random() * letters.length)];
  }
  return `${label}-${suffix}`;
}
