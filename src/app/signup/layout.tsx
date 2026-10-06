import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Your Free Account | Insight Crypto Learning",
  description:
    "Create a free account and preview Days 1-2 of the Insight Crypto Learning 60-day crypto course — no card required.",
  alternates: { canonical: "/signup" },
};

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return children;
}
