import Link from "next/link";
import type { Metadata } from "next";
import { scams } from "@/data/scams";

export const metadata: Metadata = {
  title: "Crypto Scams List | Types of Crypto Scams Explained",
  description:
    "A free, detailed guide to the most common crypto scams — exactly how scammers carry each one out, the warning signs, and how to protect yourself.",
  alternates: { canonical: "/crypto-scams" },
};

const sorted = [...scams].sort((a, b) => a.name.localeCompare(b.name));

export default function CryptoScamsPage() {
  return (
    <div className="container-page max-w-3xl py-16">
      <span className="inline-block rounded-full border border-danger/40 bg-danger/10 px-3 py-1 text-xs font-semibold text-danger">
        Free resource
      </span>
      <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl">
        Crypto Scams: Types &amp; How They Work
      </h1>
      <p className="mt-5 text-lg text-muted">
        {scams.length} common crypto scams, explained in detail: exactly how
        scammers carry each one out, the warning signs to watch for, and how
        to protect yourself. Free to read, no account required.
      </p>

      <div className="mt-10 grid gap-3 sm:grid-cols-2">
        {sorted.map((s) => (
          <Link
            key={s.slug}
            href={`/crypto-scams/${s.slug}`}
            className="card p-4 transition hover:border-gold"
          >
            <p className="font-semibold text-white">{s.name}</p>
            <p className="mt-1 text-sm text-muted">{s.shortDescription}</p>
          </Link>
        ))}
      </div>

      <div className="card mt-12 p-6">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gold">
          Want structured learning instead?
        </p>
        <h2 className="text-2xl font-extrabold text-white">
          Recognising scams is one skill — the full course covers the rest
        </h2>
        <p className="mt-3 text-muted">
          Days 1 and 2 are free to try, no card required, and the course
          builds on these same security fundamentals throughout.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link href="/signup" className="btn-primary">
            Start free &mdash; Days 1 &amp; 2
          </Link>
          <Link href="/crypto-security" className="btn-secondary">
            Read our security guide
          </Link>
        </div>
      </div>
    </div>
  );
}
