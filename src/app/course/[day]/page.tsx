import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getCourseDay } from "@/data/curriculum";
import { canAccessDay, TOTAL_DAYS } from "@/lib/access";
import QuizForm from "@/components/QuizForm";

export default async function CourseDayPage({ params }: { params: { day: string } }) {
  const day = Number(params.day);
  if (!Number.isInteger(day) || day < 1 || day > TOTAL_DAYS) {
    notFound();
  }

  const courseDay = getCourseDay(day);
  if (!courseDay) {
    notFound();
  }

  const session = await getServerSession(authOptions);
  if (!session?.user) {
    redirect(`/login?callbackUrl=/course/${day}`);
  }

  const userId = (session.user as { id: string }).id;
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { progress: true },
  });
  if (!user) {
    redirect(`/login?callbackUrl=/course/${day}`);
  }

  const accessible = canAccessDay(day, user, user.progress);

  if (!accessible) {
    return (
      <div className="container-page flex min-h-[60vh] items-center justify-center py-16">
        <div className="card max-w-md p-8 text-center">
          <div className="mb-4 text-4xl">🔒</div>
          <h1 className="mb-2 text-xl font-bold">Day {day} is locked</h1>
          <p className="mb-6 text-sm text-muted">
            {day === 1
              ? "Something went wrong loading the free preview day. Please try again."
              : "Pass the previous day's quiz at 90% or higher, and make sure your plan is active, to unlock this day."}
          </p>
          <div className="flex justify-center gap-3">
            <Link href="/dashboard" className="btn-secondary">
              Back to dashboard
            </Link>
            <Link href="/pricing" className="btn-primary">
              View plans
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const progress = user.progress.find((p) => p.day === day);
  const quizForClient = courseDay.quiz.map((q) => ({ q: q.q, options: q.options }));

  const prevHref = day > 1 ? `/course/${day - 1}` : null;
  const nextUnlocked = progress?.passed;
  const nextHref = day < TOTAL_DAYS ? `/course/${day + 1}` : null;

  return (
    <div className="container-page max-w-3xl py-12">
      <div className="mb-8 flex items-center justify-between text-sm text-muted">
        <Link href="/dashboard" className="hover:text-white">
          ← Dashboard
        </Link>
        <span>
          Day {day} of {TOTAL_DAYS} · Week {courseDay.week}
        </span>
      </div>

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
            {courseDay.terms.map((t, i) => (
              <div key={i}>
                <dt className="font-semibold">{t.term}</dt>
                <dd className="text-muted">{t.definition}</dd>
              </div>
            ))}
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
