import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { glossary, getGlossaryEntry } from "@/data/glossary";
import { getCourseDay } from "@/data/curriculum";
import { dayUrlSlug } from "@/lib/slug";

export function generateStaticParams() {
  return glossary.map((g) => ({ term: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { term: string };
}): Promise<Metadata> {
  const entry = getGlossaryEntry(params.term);
  if (!entry) return {};
  return {
    title: `${entry.term} | Crypto Glossary — Insight Crypto Learning`,
    description: entry.shortDefinition,
    alternates: { canonical: `/crypto-glossary/${entry.slug}` },
  };
}

export default function GlossaryTermPage({ params }: { params: { term: string } }) {
  const entry = getGlossaryEntry(params.term);
  if (!entry) notFound();

  const relatedDays = entry.relatedDays
    .map((day) => {
      const courseDay = getCourseDay(day);
      return courseDay ? { day, title: courseDay.title, href: `/course/${dayUrlSlug(day, courseDay.title)}` } : null;
    })
    .filter((d): d is { day: number; title: string; href: string } => d !== null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: entry.term,
    description: entry.shortDefinition,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "The Insight Crypto Glossary",
      url: "https://insightcryptolearning.com/crypto-glossary",
    },
  };

  return (
    <div className="container-page max-w-3xl py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link href="/crypto-glossary" className="text-sm text-muted hover:text-white">
        ← Crypto Glossary
      </Link>

      <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl">{entry.term}</h1>
      <p className="mt-5 text-lg text-muted">{entry.shortDefinition}</p>

      <article className="mt-8 space-y-4 text-[15px] leading-relaxed text-white/90">
        {entry.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </article>

      {relatedDays.length > 0 && (
        <div className="card mt-8 p-6">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gold">
            Go deeper in the course
          </h2>
          <ul className="space-y-2 text-sm">
            {relatedDays.map((d) => (
              <li key={d.day}>
                <Link href={d.href} className="text-gold hover:underline">
                  Day {d.day}: {d.title}
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
