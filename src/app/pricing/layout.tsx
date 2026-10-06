import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — £5/month or £50 Lifetime | Insight Crypto Learning",
  description:
    "Simple, honest pricing for the 60-day crypto course: £5 a month, cancel anytime, or a one-off £50 payment for ongoing access. Preview Days 1-2 free.",
  alternates: { canonical: "/pricing" },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
