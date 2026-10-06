import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getCourseDay, WEEK_TITLES } from "@/data/curriculum";
import { glossary } from "@/data/glossary";
import { canAccessDay, TOTAL_DAYS } from "@/lib/access";
import { dayUrlSlug, parseDaySlug } from "@/lib/slug";
import QuizForm from "@/components/QuizForm";
import Breadcrumbs from "@/components/Breadcrumbs";

/** Best-effort match against the glossary so a term already written for a
 *  lesson can also link to its full glossary entry — no guessing beyond an
 *  exact (case-insensitive) name match, so a non-match just renders plain. */
function glossaryHrefFor(termName: string): string | null {
  const norm = termName.trim().toLowerCase();
  const entry = glossary.find((g) => g.term.toLowerCase() === norm);
  return entry ? `/crypto-glossary/${entry.slug}` : null;
}

function resolveDay(slug: string) {
  const day = parseDaySlug(slug);
  if (!day || day < 1 || day > TOTAL_DAYS) return null;
  const courseDay = getCourseDay(day);
  if (!courseDay) return null;
  return { day, courseDay };
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const resolved = resolveDay(params.slug);
  if (!resolved) return {};
  const { day, courseDay } = resolved;
  const canonical = `/course/${dayUrlSlug(day, courseDay.title)}`;
  return {
    title: `${courseDay.title} | Day ${day} of ${TOTAL_DAYS} — Insight Crypto Learning`,
    description: courseDay.summary,
    alternates: { canonical },
    openGraph: {
      title: courseDay.title,
      description: courseDay.summary,
      url: canonical,
    },
  };
}

export default async function CourseDayPage({ params }: { params: { slug: string } }) {
  const resolved = resolveDay(params.slug);
  if (!resolved) notFound();
  const { day, courseDay } = resolved;

  const session = await getServerSession(authOptions);
  const sessionUserId = session?.user ? (session.user as { id: string }).id : null;
  const user = sessionUserId
    ? await prisma.user.findUnique({ where: { id: sessionUserId }, include: { progress: true } })
    : null;

  const accessible = Boolean(user) && canAccessDay(day, user!, user!.progress);
  const prevHref = day > 1 ? `/course/${dayUrlSlug(day - 1, getCourseDay(day - 1)!.title)}` : null;
  const nextHref =
    day < TOTAL_DAYS ? `/course/${dayUrlSlug(day + 1, getCourseDay(day + 1)!.title)}` : null;

  if (!accessible) {
    return (
      <DayTeaser
        day={day}
        courseDay={courseDay}
        loggedIn={Boolean(user)}
        prevHref={prevHref}
        nextHref={nextHref}
      />
    );
  }

  const progress = user!.progress.find((p) => p.day === day);
  const quizForClient = courseDay.quiz.map((q) => ({ q: q.q, options: q.options }));
  const nextUnlocked = progress?.passed;

  return (
    <div className="container-page max-w-3xl py-12">
      <div className="mb-2 flex items-center justify-between text-sm text-muted">
        <Link href="/dashboard" className="hover:text-white">
          ← Dashboard
        </Link>
      </div>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "60-Day Course", href: "/#curriculum" },
          { label: `Week ${courseDay.week}: ${WEEK_TITLES[courseDay.week]}` },
          { label: `Day ${day} of ${TOTAL_DAYS}` },
        ]}
      />

      <h1 className="text-3xl font-extrabold">{courseDay.title}</h1>
      <p className="mt-2 text-muted">{courseDay.summary}</p>

      <article className="mt-8 space-y-4 text-[15px] leading-relaxed text-white/90">
        {courseDay.lesson.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </article>

      <div className="card mt-8 p-6">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gold">
          Key points
        </h2>
        <ul className="space-y-2 text-sm">
          {courseDay.keyPoints.map((k, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-mint">•</span>
              <span>{k}</span>
            </li>
          ))}
        </ul>
      </div>

      {courseDay.terms && courseDay.terms.length > 0 && (
        <div className="card mt-6 p-6">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gold">
            Terms you should know
          </h2>
          <dl className="space-y-3 text-sm">
            {courseDay.terms.map((t, i) => {
              const glossaryHref = glossaryHrefFor(t.term);
              return (
                <div key={i}>
                  <dt className="font-semibold">
                    {glossaryHref ? (
                      <Link href={glossaryHref} className="text-gold hover:underline">
                        {t.term}
                      </Link>
                    ) : (
                      t.term
                    )}
                  </dt>
                  <dd className="text-muted">{t.definition}</dd>
                </div>
              );
            })}
          </dl>
        </div>
      )}

      {courseDay.exercise && (
        <div className="card mt-6 p-6">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gold">
            Try it yourself: {courseDay.exercise.title}
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-white/90">
            {courseDay.exercise.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      )}

      {courseDay.securityNote && (
        <div className="card mt-6 border-danger/40 bg-danger/5 p-6">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-danger">
            Security note: {courseDay.securityNote.title}
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-white/90">
            {courseDay.securityNote.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      )}

      <div className="mt-12">
        <h2 className="mb-1 text-xl font-bold">Day {day} knowledge check</h2>
        <p className="mb-6 text-sm text-muted">
          Score 90% or higher (9 out of 10) to unlock Day {Math.min(day + 1, TOTAL_DAYS)}.
          {progress && progress.attempts > 0 && (
            <span className="ml-1">
              Best score so far: {progress.bestScore}% ({progress.attempts} attempt
              {progress.attempts === 1 ? "" : "s"}).
            </span>
          )}
        </p>
        <QuizForm day={day} questions={quizForClient} alreadyPassed={Boolean(progress?.passed)} />
      </div>

      {courseDay.homework && courseDay.homework.length > 0 && (
        <div className="card mt-12 p-6">
          <h2 className="mb-1 text-sm font-semibold uppercase tracking-wide text-gold">
            Homework (optional, not graded)
          </h2>
          <p className="mb-4 text-sm text-muted">
            These reflection tasks aren&apos;t marked and don&apos;t affect your progress — they&apos;re
            here to help the lesson stick. Write your answers wherever suits you.
          </p>
          <ol className="list-decimal space-y-3 pl-5 text-sm text-white/90">
            {courseDay.homework.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ol>
        </div>
      )}

      <div className="mt-12 flex items-center justify-between border-t border-border pt-6 text-sm">
        {prevHref ? (
          <Link href={prevHref} className="text-muted hover:text-white">
            ← Day {day - 1}
          </Link>
        ) : (
          <span />
        )}
        {nextHref && nextUnlocked && (
          <Link href={nextHref} className="text-gold hover:underline">
            Day {day + 1} →
          </Link>
        )}
      </div>
    </div>
  );
}

/**
 * Crawlable, unauthenticated-safe preview shown for any day a visitor can't
 * yet open — a locked-out logged-in subscriber and an anonymous search
 * visitor both land here. Only the day's existing public summary/key points
 * are shown; the full lesson, terms, exercises and quiz stay behind access.
 */
function DayTeaser({
  day,
  courseDay,
  loggedIn,
  prevHref,
  nextHref,
}: {
  day: number;
  courseDay: NonNullable<ReturnType<typeof getCourseDay>>;
  loggedIn: boolean;
  prevHref: string | null;
  nextHref: string | null;
}) {
  const isFreeDay = day <= 2;
  const cta = !loggedIn
    ? {
        href: "/signup",
        label: isFreeDay ? "Create a free account to read this lesson" : "Sign up to get started",
      }
    : isFreeDay
      ? { href: `/course/${dayUrlSlug(day - 1, getCourseDay(day - 1)?.title ?? "")}`, label: `Pass Day ${day - 1}'s quiz to unlock this day` }
      : { href: "/pricing", label: "Subscribe to unlock this day" };

  return (
    <div className="container-page max-w-3xl py-12">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "60-Day Course", href: "/#curriculum" },
          { label: `Week ${courseDay.week}: ${WEEK_TITLES[courseDay.week]}` },
          { label: `Day ${day} of ${TOTAL_DAYS}` },
        ]}
      />

      {isFreeDay && (
        <span className="mb-3 inline-block rounded-full border border-mint/40 bg-mint/10 px-3 py-1 text-xs font-semibold text-mint">
          Free preview day
        </span>
      )}

      <h1 className="text-3xl font-extrabold">{courseDay.title}</h1>
      <p className="mt-2 text-muted">{courseDay.summary}</p>

      <div className="card mt-8 p-6">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gold">
          What you&rsquo;ll learn
        </h2>
        <ul className="space-y-2 text-sm">
          {courseDay.keyPoints.map((k, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-mint">•</span>
              <span>{k}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="card mt-8 flex flex-col items-start gap-4 border-gold/50 p-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold">
            {isFreeDay
              ? "Days 1 and 2 are free to try — no card required."
              : "Full lesson and quiz for subscribers."}
          </p>
          <p className="mt-1 text-sm text-muted">
            {isFreeDay
              ? "Create a free account to read the full lesson and take the quiz."
              : "£5/month or a one-off £50 unlocks all 60 days."}
          </p>
        </div>
        <Link href={cta.href} className="btn-primary whitespace-nowrap">
          {cta.label}
        </Link>
      </div>

      <div className="mt-12 flex items-center justify-between border-t border-border pt-6 text-sm">
        {prevHref ? (
          <Link href={prevHref} className="text-muted hover:text-white">
            ← Day {day - 1}
          </Link>
        ) : (
          <span />
        )}
        {nextHref && (
          <Link href={nextHref} className="text-gold hover:underline">
            Day {day + 1} →
          </Link>
        )}
      </div>
    </div>
  );
}
