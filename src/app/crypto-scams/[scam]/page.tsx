import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { scams, getScam } from "@/data/scams";
import { getCourseDay } from "@/data/curriculum";
import { glossary } from "@/data/glossary";
import { dayUrlSlug } from "@/lib/slug";

export function generateStaticParams() {
  return scams.map((s) => ({ scam: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { scam: string };
}): Promise<Metadata> {
  const entry = getScam(params.scam);
  if (!entry) return {};
  return {
    title: `${entry.name} | Crypto Scams List — Insight Crypto Learning`,
    description: entry.shortDescription,
    alternates: { canonical: `/crypto-scams/${entry.slug}` },
  };
}

export default function ScamDetailPage({ params }: { params: { scam: string } }) {
  const entry = getScam(params.scam);
  if (!entry) notFound();

  const relatedDays = entry.relatedDays
    .map((day) => {
      const courseDay = getCourseDay(day);
      return courseDay
        ? { day, title: courseDay.title, href: `/course/${dayUrlSlug(day, courseDay.title)}` }
        : null;
    })
    .filter((d): d is { day: number; title: string; href: string } => d !== null);

  const relatedTerms = entry.relatedGlossaryTerms
    .map((slug) => glossary.find((g) => g.slug === slug))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: entry.name,
    description: entry.shortDescription,
    author: { "@type": "Organization", name: "Insight Crypto Learning Team" },
    publisher: { "@type": "Organization", name: "Insight Crypto Learning" },
  };

  return (
    <div className="container-page max-w-3xl py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link href="/crypto-scams" className="text-sm text-muted hover:text-white">
        ← Crypto Scams List
      </Link>

      <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl">{entry.name}</h1>
      <p className="mt-5 text-lg text-muted">{entry.shortDescription}</p>

      <div className="mt-8">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gold">
          How scammers do this
        </h2>
        <article className="space-y-4 text-[15px] leading-relaxed text-white/90">
          {entry.howItWorks.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </article>
      </div>

      <div className="card mt-8 border-danger/40 bg-danger/5 p-6">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-danger">
          Warning signs
        </h2>
        <ul className="space-y-2 text-sm">
          {entry.warningSigns.map((w, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-danger">•</span>
              <span>{w}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="card mt-6 p-6">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gold">
          How to protect yourself
        </h2>
        <ul className="space-y-2 text-sm">
          {entry.protectYourself.map((p, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-mint">•</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>

      {(relatedDays.length > 0 || relatedTerms.length > 0) && (
        <div className="card mt-6 p-6">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gold">
            Go deeper
          </h2>
          <ul className="space-y-2 text-sm">
            {relatedDays.map((d) => (
              <li key={d.href}>
                <Link href={d.href} className="text-gold hover:underline">
                  Day {d.day}: {d.title}
                </Link>
              </li>
            ))}
            {relatedTerms.map((t) => (
              <li key={t.slug}>
                <Link href={`/crypto-glossary/${t.slug}`} className="text-gold hover:underline">
                  Glossary: {t.term}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="card mt-8 flex flex-col items-start gap-4 border-gold/50 p-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold">Want the full 60-day course?</p>
          <p className="mt-1 text-sm text-muted">
            Days 1 and 2 are free to try — no card required.
          </p>
        </div>
        <Link href="/signup" className="btn-primary whitespace-nowrap">
          Start free
        </Link>
      </div>
    </div>
  );
}
