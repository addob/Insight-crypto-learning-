import Link from "next/link";
import { courseDays, WEEK_TITLES } from "@/data/curriculum";
import { TOTAL_DAYS } from "@/lib/access";

const weeks = Array.from(new Set(courseDays.map((d) => d.week))).sort((a, b) => a - b);

const faqs = [
  {
    q: "I've never touched crypto before — is this really for me?",
    a: "Yes. The course assumes zero prior knowledge. Day 1 starts with 'what is money?' and builds up gradually, one concept at a time, over 60 days.",
  },
  {
    q: "How does the 90% quiz requirement work?",
    a: "Every day ends with a 10-question quiz. You need 9 or more correct (90%) to unlock the next day. If you don't pass, you can review the lesson and retake the quiz as many times as you like.",
  },
  {
    q: "What's the difference between the monthly and one-off plans?",
    a: "The monthly plan is £5/month, cancel anytime. The one-off plan is a single £50 payment for ongoing access without a recurring charge. Both unlock the same 60-day course.",
  },
  {
    q: "Can I try before I pay?",
    a: "Yes — create a free account and Day 1 is open to preview, including its quiz, before you decide to enrol.",
  },
  {
    q: "Is this financial advice?",
    a: "No. This is an educational course about how crypto works and how to use it more safely. It is not financial, investment, or tax advice — see our Risk Disclaimer for details.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-b from-panel to-ink">
        <div className="container-page grid gap-10 py-20 md:grid-cols-2 md:items-center">
          <div>
            <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
              60 days · Daily lessons · Daily quizzes
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl">
              Go from crypto newcomer to confident, careful investor in 60 days
            </h1>
            <p className="mt-5 text-lg text-muted">
              A structured, plain-English course covering blockchain
              fundamentals, wallet security, exchanges, Bitcoin, Ethereum,
              DeFi, NFTs, and risk management — with a quiz every single day
              to prove you've actually learned it before you move on.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/signup" className="btn-primary">
                Start Day 1 free
              </Link>
              <Link href="/pricing" className="btn-secondary">
                See pricing
              </Link>
            </div>
            <p className="mt-4 text-sm text-muted">
              £5/month or a one-off £50 &middot; No card needed to preview Day 1
            </p>
          </div>

          <div className="card p-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-gold">
              How it works
            </p>
            <ol className="space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-ink">1</span>
                <span>Read a focused daily lesson (10 minutes or less).</span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-ink">2</span>
                <span>Take a 10-question quiz on that day's material.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-ink">3</span>
                <span>Score 90%+ to unlock the next day. Below that? Review and retake.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-ink">4</span>
                <span>Repeat for 60 days and finish with real, tested understanding.</span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-border">
        <div className="container-page grid grid-cols-2 gap-6 py-10 text-center text-sm text-muted md:grid-cols-4">
          <div>
            <p className="text-2xl font-extrabold text-white">{TOTAL_DAYS}</p>
            days of structured lessons
          </div>
          <div>
            <p className="text-2xl font-extrabold text-white">{TOTAL_DAYS * 10}</p>
            quiz questions in total
          </div>
          <div>
            <p className="text-2xl font-extrabold text-white">90%</p>
            required to progress
          </div>
          <div>
            <p className="text-2xl font-extrabold text-white">£5</p>
            per month, or £50 once
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="container-page py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold">The full 60-day curriculum</h2>
          <p className="mt-3 text-muted">
            Nine themed weeks, building from absolute basics to real-world
            risk management and where the industry is heading.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {weeks.map((week) => {
            const days = courseDays.filter((d) => d.week === week);
            return (
              <div key={week} className="card p-5">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gold">
                  Week {week} &middot; Days {days[0].day}&ndash;{days[days.length - 1].day}
                </p>
                <h3 className="mb-3 text-lg font-bold">{WEEK_TITLES[week]}</h3>
                <ul className="space-y-1 text-sm text-muted">
                  {days.slice(0, 3).map((d) => (
                    <li key={d.day}>&bull; {d.title}</li>
                  ))}
                  {days.length > 3 && <li>&bull; +{days.length - 3} more</li>}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link href="/signup" className="btn-primary">
            Start learning today
          </Link>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="border-y border-border bg-panel">
        <div className="container-page py-16 text-center">
          <h2 className="text-3xl font-extrabold">Enrol for less than a coffee a week</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            £5 a month, cancel anytime — or pay £50 once and you're set.
            Either way, you get every one of the 60 days, all 600 quiz
            questions, and your own progress dashboard.
          </p>
          <Link href="/pricing" className="btn-primary mt-8 inline-block">
            View pricing
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page py-20">
        <h2 className="mb-10 text-center text-3xl font-extrabold">Frequently asked questions</h2>
        <div className="mx-auto max-w-2xl space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="card group p-5">
              <summary className="cursor-pointer list-none font-semibold marker:content-none">
                <span className="flex items-center justify-between">
                  {f.q}
                  <span className="text-gold transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
