import Link from "next/link";
import type { Metadata } from "next";
import { glossary } from "@/data/glossary";

export const metadata: Metadata = {
  title: "Crypto Glossary | Cryptocurrency & Blockchain Terms Explained",
  description:
    "Understand cryptocurrency and blockchain terminology with simple explanations of Bitcoin, wallets, DeFi, NFTs, tokenomics, smart contracts and more.",
  alternates: { canonical: "/crypto-glossary" },
};

const sorted = [...glossary].sort((a, b) => a.term.localeCompare(b.term));

export default function CryptoGlossaryPage() {
  return (
    <div className="container-page max-w-3xl py-16">
      <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
        Glossary
      </span>
      <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl">
        The Insight Crypto Glossary
      </h1>
      <p className="mt-5 text-lg text-muted">
        Plain-English definitions for the cryptocurrency and blockchain terms
        you&rsquo;ll run into most often — from the basics, like wallets and
        private keys, through to DeFi and NFT-specific jargon.
      </p>

      <div className="mt-10 grid gap-3 sm:grid-cols-2">
        {sorted.map((g) => (
          <Link
            key={g.slug}
            href={`/crypto-glossary/${g.slug}`}
            className="card p-4 transition hover:border-gold"
          >
            <p className="font-semibold text-white">{g.term}</p>
            <p className="mt-1 text-sm text-muted">{g.shortDefinition}</p>
          </Link>
        ))}
      </div>

      <div className="card mt-12 p-6">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gold">
          Want the full picture?
        </p>
        <h2 className="text-2xl font-extrabold text-white">
          These terms make a lot more sense in context
        </h2>
        <p className="mt-3 text-muted">
          The 60-day course builds these ideas up gradually, one day at a
          time, with a quiz to check you&rsquo;ve actually understood each
          one before moving on.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link href="/signup" className="btn-primary">
            Start free &mdash; Days 1 &amp; 2
          </Link>
          <Link href="/pricing" className="btn-secondary">
            See pricing
          </Link>
        </div>
      </div>
    </div>
  );
}
