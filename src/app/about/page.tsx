import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Insight Crypto Learning",
  description:
    "Insight Crypto Learning exists to protect newcomers from crypto scams through honest, practical education. Learn who we are and why we do this.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="container-page max-w-3xl py-16">
      <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
        About us
      </span>
      <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl">
        About Insight Crypto Learning
      </h1>

      <div className="mt-10 space-y-10 text-[15px] leading-relaxed text-white/90">
        <section>
          <h2 className="text-2xl font-extrabold text-white">Why We Exist</h2>
          <p className="mt-3">
            We started Insight Crypto Learning for one reason: to protect
            people entering cryptocurrency from losing their money to scams.
          </p>
          <p className="mt-3">
            The truth is uncomfortable, so we&rsquo;ll say it plainly. For
            every developer who launches a legitimate crypto project, there
            are five or more who are only looking to lure people into a false
            sense of security and take their funds. Some play the short game
            — a quick rug pull, a fake presale, a phishing link. Others play
            the long game — building trust for months before disappearing
            with everything.
          </p>
          <p className="mt-3">
            We&rsquo;ve watched too many newcomers lose their savings because
            they believed they were talking to someone reputable, or because
            they were certain they&rsquo;d found the next Bitcoin.
          </p>
          <p className="mt-3 font-semibold text-white">
            We&rsquo;re here to make sure that doesn&rsquo;t happen to you.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold text-white">Who We Are</h2>
          <p className="mt-3">
            We&rsquo;re a team based in London with over 10 years of
            experience in the cryptocurrency industry.
          </p>
          <p className="mt-3">
            We are not millionaires. We&rsquo;re not influencers. We
            don&rsquo;t have a coin to sell you, and we&rsquo;re not here to
            pump anyone&rsquo;s bags.
          </p>
          <p className="mt-3">
            We&rsquo;re a group of people who have made money in crypto —
            and made mistakes. We&rsquo;ve been through bull markets and
            crashes, seen projects succeed and watched others collapse under
            the weight of their own lies. That experience is exactly what we
            want to pass on.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold text-white">
            What Frustrates Us
          </h2>
          <p className="mt-3">Every week, we hear the same stories.</p>
          <p className="mt-3">
            Someone&rsquo;s parent lost their retirement savings to a fake
            investment platform. Someone&rsquo;s friend sent crypto to a
            &ldquo;trader&rdquo; on Telegram who promised 10x returns.
            Someone spent months researching a token, felt confident, and
            woke up to a dead project and an empty wallet.
          </p>
          <p className="mt-3">
            These aren&rsquo;t stupid people. They&rsquo;re people who were
            given bad information, or no information at all, in an industry
            built on noise.
          </p>
          <p className="mt-3 font-semibold text-white">
            That&rsquo;s what drives us.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold text-white">What We Do</h2>
          <p className="mt-3">
            We guide newcomers down a clear, transparent path of crypto
            education.
          </p>
          <p className="mt-3">
            You&rsquo;ve probably already tried to learn this on your own.
            YouTube, X, TikTok, Instagram, Telegram — the information is out
            there. But it comes with noise, distractions, and an endless
            supply of people whose only goal is to sell you something.
          </p>
          <p className="mt-3">We cut through that. We teach you:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>How to recognise scams before they cost you money</li>
            <li>How to protect your funds and your personal information</li>
            <li>How to research a project critically, not emotionally</li>
            <li>How the industry actually works — the good, the bad, and the ugly</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold text-white">
            What We&rsquo;re Honest About
          </h2>
          <p className="mt-3">
            We don&rsquo;t know everything, and we won&rsquo;t pretend to.
          </p>
          <p className="mt-3">
            We can&rsquo;t predict prices. Nobody can. If someone tells you
            they can, walk away.
          </p>
          <p className="mt-3">
            We can&rsquo;t guarantee profits. Crypto is volatile and risky.
            Our goal isn&rsquo;t to make you rich — it&rsquo;s to stop you
            being robbed.
          </p>
          <p className="mt-3">
            We have our own biases and limits. We&rsquo;ve made mistakes in
            this industry, and we&rsquo;ll share them where it helps you
            avoid the same ones.
          </p>
          <p className="mt-3">
            We&rsquo;re not financial advisors. We&rsquo;re educators. What
            you do with what you learn is your decision.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold text-white">Our Promise</h2>
          <p className="mt-3">
            We will always be transparent with you about what we know, what
            we don&rsquo;t know, and why we&rsquo;re telling you something.
          </p>
          <p className="mt-3">No hype. No false promises. No hidden agenda.</p>
          <p className="mt-3 font-semibold text-white">
            Just honest guidance from people who&rsquo;ve been where you are.
          </p>
          <p className="mt-5 text-sm text-muted">
            Follow us on{" "}
            <a
              href="https://www.facebook.com/share/1EgtUkEoMY/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              Facebook
            </a>{" "}
            or{" "}
            <a
              href="https://x.com/cryptobudhat3ch?s=11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              X
            </a>
            .
          </p>
        </section>

        <section className="card p-6">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gold">
            Start learning
          </p>
          <h2 className="text-2xl font-extrabold text-white">
            Ready to see how it works?
          </h2>
          <p className="mt-3 text-muted">
            Try Days 1 and 2 of the course for free — no card required — and
            see for yourself before you decide whether to enrol.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/signup" className="btn-primary">
              Start free &mdash; Days 1 &amp; 2
            </Link>
            <Link href="/crypto-security" className="btn-secondary">
              Read our security guide
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
