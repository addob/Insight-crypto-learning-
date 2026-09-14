"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const features = [
  "All 60 days of structured lessons",
  "A 10-question quiz at the end of every day",
  "Progress gated at 90% — you actually learn it, not just click through",
  "Student dashboard tracking your progress across all 60 days",
  "Lifetime access to course updates while your plan is active",
];

export default function PricingPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [loadingPlan, setLoadingPlan] = useState<"monthly" | "onetime" | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout(plan: "monthly" | "onetime") {
    setError(null);

    if (!session?.user) {
      router.push("/signup");
      return;
    }

    setLoadingPlan(plan);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong starting checkout.");
        setLoadingPlan(null);
        return;
      }

      window.location.href = data.url;
    } catch {
      setError("Something went wrong starting checkout. Please try again.");
      setLoadingPlan(null);
    }
  }

  return (
    <div className="container-page py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-extrabold">Simple, honest pricing</h1>
        <p className="mt-4 text-muted">
          Two ways to enrol in the full 60-day course. No hidden fees, cancel
          your monthly plan anytime.
        </p>
      </div>

      {error && (
        <p className="mx-auto mt-6 max-w-md rounded-md border border-danger/40 bg-danger/10 px-4 py-3 text-center text-sm text-danger">
          {error}
        </p>
      )}

      <div className="mx-auto mt-12 grid max-w-3xl gap-6 md:grid-cols-2">
        <div className="card flex flex-col p-8">
          <h2 className="text-lg font-semibold text-muted">Monthly</h2>
          <p className="mt-2 text-4xl font-extrabold">
            £5<span className="text-lg font-medium text-muted">/month</span>
          </p>
          <p className="mt-2 text-sm text-muted">Cancel anytime. No contract.</p>
          <ul className="mt-6 flex-1 space-y-3 text-sm">
            {features.map((f) => (
              <li key={f} className="flex gap-2">
                <span className="text-mint">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={() => handleCheckout("monthly")}
            disabled={loadingPlan !== null}
            className="btn-secondary mt-8 w-full text-center"
          >
            {loadingPlan === "monthly" ? "Redirecting…" : "Start monthly plan"}
          </button>
        </div>

        <div className="card relative flex flex-col border-gold p-8">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3 py-1 text-xs font-bold text-ink">
            BEST VALUE
          </span>
          <h2 className="text-lg font-semibold text-muted">One-off payment</h2>
          <p className="mt-2 text-4xl font-extrabold">£50</p>
          <p className="mt-2 text-sm text-muted">Pay once, keep access. No recurring charge.</p>
          <ul className="mt-6 flex-1 space-y-3 text-sm">
            {features.map((f) => (
              <li key={f} className="flex gap-2">
                <span className="text-mint">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={() => handleCheckout("onetime")}
            disabled={loadingPlan !== null}
            className="btn-primary mt-8 w-full text-center"
          >
            {loadingPlan === "onetime" ? "Redirecting…" : "Pay once, £50"}
          </button>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-2xl text-center text-sm text-muted">
        <p>
          Prefer to ask a question first? Message us on{" "}
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "447957458795"}`}
            className="text-gold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>{" "}
          or{" "}
          <Link href="/contact" className="text-gold hover:underline">
            get in touch
          </Link>
          .
        </p>
        <p className="mt-3">
          Not sure yet?{" "}
          <Link href="/signup" className="text-gold hover:underline">
            Create a free account
          </Link>{" "}
          and preview Day 1 before you pay.
        </p>
      </div>
    </div>
  );
}
