import Link from "next/link";
import type { Metadata } from "next";
import { getCourseDay } from "@/data/curriculum";
import { dayUrlSlug } from "@/lib/slug";

export const metadata: Metadata = {
  title: "Crypto Regulation Explained | Cryptocurrency Laws & Rules",
  description:
    "Learn how cryptocurrency regulation works, including UK FCA rules, KYC requirements, crypto tax basics, and why regulation varies by country.",
  alternates: { canonical: "/crypto-regulation" },
};

const day17 = getCourseDay(17)!;
const day55 = getCourseDay(55)!;
const day57 = getCourseDay(57)!;
const day58 = getCourseDay(58)!;
const day59 = getCourseDay(59)!;

const day17Href = `/course/${dayUrlSlug(17, day17.title)}`;
const day55Href = `/course/${dayUrlSlug(55, day55.title)}`;
const day57Href = `/course/${dayUrlSlug(57, day57.title)}`;
const day58Href = `/course/${dayUrlSlug(58, day58.title)}`;
const day59Href = `/course/${dayUrlSlug(59, day59.title)}`;

const faqs = [
  {
    q: "Is crypto regulated the same way everywhere?",
    a: "No. Regulation varies enormously by country — some treat crypto assets similarly to other financial instruments, some have outright restrictions, and many are still building their frameworks. Always check the rules for your own jurisdiction rather than assuming one country's approach applies globally.",
  },
  {
    q: "Why do exchanges ask for my ID?",
    a: "This is KYC (Know Your Customer) — a legal requirement in most regulated jurisdictions aimed at preventing money laundering and fraud. Reputable exchanges that serve customers in regulated markets are generally required to verify identity before allowing deposits, withdrawals, or trading.",
  },
  {
    q: "Do I have to pay tax on crypto?",
    a: "In many countries, yes — disposing of crypto (selling, swapping, or spending it) can trigger a taxable event. Exact rates, allowances, and reporting thresholds change over time and depend on your circumstances, so this page deliberately avoids quoting specific figures. Check current official guidance (in the UK, gov.uk/HMRC) or speak to a qualified tax professional.",
  },
  {
    q: "Is this page financial or tax advice?",
    a: "No. This is general educational information about how crypto regulation tends to work. It is not financial, investment, legal, or tax advice, and it should not be relied on for your specific situation — see our Risk Disclaimer.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function CryptoRegulationPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-b from-panel to-ink">
        <div className="container-page py-16">
          <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
            Crypto basics &middot; Regulation &amp; tax
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl">
            Cryptocurrency Regulation
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-muted">
            A plain-English guide to how and why crypto is regulated, what
            KYC checks actually do, a UK-focused look at the FCA and crypto
            tax basics, and where regulation is heading next with stablecoins
            and central bank digital currencies.
          </p>
        </div>
      </section>

      <div className="container-page max-w-3xl py-16">
        {/* Disclaimer */}
        <div className="card border-gold/40 bg-gold/10 p-5">
          <p className="text-sm font-semibold text-gold">
            Not legal or tax advice
          </p>
          <p className="mt-2 text-sm text-muted">
            This page is general educational information, not legal,
            financial, or tax advice. Crypto regulation changes frequently
            and varies by country, so nothing here should be treated as
            exact or current for your situation. For UK tax specifics,
            always check the latest guidance at{" "}
            <a
              href="https://www.gov.uk/topic/business-tax/capital-gains-tax"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              gov.uk / HMRC
            </a>{" "}
            or speak to a qualified professional before making decisions. See
            also our{" "}
            <Link href="/legal/disclaimer" className="text-gold hover:underline">
              Risk Disclaimer
            </Link>
            .
          </p>
        </div>

        <div className="prose-sm mt-10 space-y-8 text-sm leading-relaxed text-white/90">
          <section>
            <h2 className="mb-3 text-2xl font-extrabold text-white">
              Why does crypto regulation exist?
            </h2>
            <p>
              Cryptocurrency started as a largely unregulated, permissionless
              space, and in many ways it still has far less oversight than
              traditional banking or stock markets. But as more ordinary
              people began buying, holding, and trading crypto, governments
              and financial regulators around the world started paying
              closer attention — and gradually introducing rules.
            </p>
            <p className="mt-3">
              Broadly, regulators are trying to achieve a few things at once:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>
                <strong>Consumer protection</strong> — reducing the chances of
                ordinary people losing money to scams, collapsed exchanges,
                or misleading marketing.
              </li>
              <li>
                <strong>Anti-money-laundering (AML)</strong> — making it
                harder to use crypto to move illicit funds, finance crime, or
                evade sanctions.
              </li>
              <li>
                <strong>Market integrity</strong> — trying to curb
                manipulation, fraud, and conflicts of interest at exchanges
                and other crypto businesses.
              </li>
              <li>
                <strong>Financial stability</strong> — keeping an eye on
                whether crypto activity (especially stablecoins) could pose
                wider risks to the financial system if something goes wrong.
              </li>
            </ul>
            <p className="mt-3">
              None of this means crypto is "safe" just because some
              regulation exists. Regulation reduces certain risks — it
              doesn't eliminate volatility, and it doesn't guarantee you
              won't lose money. For a broader look at the risks involved,
              see our{" "}
              <Link href="/crypto-security/" className="text-gold hover:underline">
                crypto security guide
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-extrabold text-white">
              Regulation varies a lot by country
            </h2>
            <p>
              There is no single global "crypto law." Each country (and
              sometimes each region within a country) has taken its own
              approach, and these approaches can differ dramatically:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>
                Some countries treat certain crypto assets similarly to
                existing financial products and regulate exchanges much like
                other financial firms.
              </li>
              <li>
                Some have introduced crypto-specific licensing regimes for
                exchanges and other service providers.
              </li>
              <li>
                Some restrict or ban particular crypto activities entirely.
              </li>
              <li>
                Many are still actively developing their frameworks, meaning
                the rules you read about today may not be the rules in force
                next year.
              </li>
            </ul>
            <p className="mt-3">
              This matters practically: an exchange, a type of token, or a
              particular activity that's permitted in one country may be
              restricted in another. Don't assume that because something is
              legal where you are, it's legal everywhere — or vice versa.
              Day {day57.day} of the course,{" "}
              <Link href={day57Href} className="text-gold hover:underline">
                {day57.title}
              </Link>
              , goes into more detail on how a specific national framework
              (the UK's) actually works in practice, as one example of how
              these systems are built.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-extrabold text-white">
              What is KYC, and why do exchanges ask for ID?
            </h2>
            <p>
              KYC stands for <strong>Know Your Customer</strong>. It's the
              process exchanges and other regulated crypto businesses use to
              verify who you are before letting you deposit, trade, or
              withdraw funds — typically by asking for a photo ID, proof of
              address, and sometimes a selfie or video check.
            </p>
            <p className="mt-3">
              KYC exists primarily to support anti-money-laundering rules.
              Regulated financial businesses, including many crypto
              exchanges, are generally required by law to know who their
              customers are, monitor for suspicious activity, and report it
              where necessary. This isn't unique to crypto — banks have done
              the same thing for decades — but it can feel unfamiliar to
              newcomers who associate crypto with anonymity.
            </p>
            <p className="mt-3">
              In practice, if a crypto platform operating in a regulated
              market never asks you for any identification at all, that's
              worth treating as a red flag rather than a convenience. We
              cover this in detail, including how to tell a properly
              regulated exchange from one that isn't, in Day {day17.day}:{" "}
              <Link href={day17Href} className="text-gold hover:underline">
                {day17.title}
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-extrabold text-white">
              The UK approach: the FCA and crypto
            </h2>
            <p>
              In the UK, the <strong>Financial Conduct Authority (FCA)</strong>{" "}
              is the main regulator involved in crypto oversight. Historically,
              its role has focused heavily on anti-money-laundering
              registration for crypto businesses and on restricting the
              marketing of certain high-risk crypto products to retail
              consumers, alongside wider work on regulating stablecoins and
              crypto activities more broadly as the framework develops.
            </p>
            <p className="mt-3">
              Importantly, FCA registration or regulation of a crypto firm is
              not the same as a guarantee of safety. It generally means the
              firm has met certain conduct and AML obligations — it does not
              mean your money is protected the way it would be at a bank, and
              it does not mean the underlying crypto assets themselves are
              "approved" or risk-free in any sense.
            </p>
            <p className="mt-3">
              Because the UK's crypto regulatory framework is still actively
              evolving, the specifics of what's required, who is covered, and
              how enforcement works can change. Day {day57.day},{" "}
              <Link href={day57Href} className="text-gold hover:underline">
                {day57.title}
              </Link>
              , walks through this in more depth as part of the full course.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-extrabold text-white">
              Crypto tax basics (UK): capital gains, in general terms
            </h2>
            <p>
              In the UK, HMRC generally treats disposing of a crypto asset —
              which can include selling it for currency, swapping it for a
              different crypto asset, spending it, or giving it away — as a
              potential capital gains event. In plain terms: if you dispose
              of crypto for more than you acquired it for, that gain can be
              taxable; if you dispose of it for less, that can potentially be
              used to offset other gains.
            </p>
            <p className="mt-3">
              <strong>
                We're deliberately not quoting specific tax rates, tax-free
                allowances, or reporting thresholds on this page
              </strong>{" "}
              — these are set by HMRC, reviewed regularly, and can change from
              one tax year to the next. Any specific number we wrote today
              could easily be out of date by the time you read this. Instead:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>
                Keep good records of every disposal — what you acquired,
                when, for how much, and what you disposed of it for.
              </li>
              <li>
                Check the current rules directly on gov.uk / HMRC's own
                guidance before filing anything, as of the time of writing.
              </li>
              <li>
                If your situation is non-trivial (trading frequently, mixing
                personal and business activity, receiving crypto as income,
                etc.), talk to a qualified accountant or tax adviser rather
                than relying on general guides like this one.
              </li>
            </ul>
            <p className="mt-3">
              This topic gets a full, dedicated walkthrough in Day{" "}
              {day55.day} of the course:{" "}
              <Link href={day55Href} className="text-gold hover:underline">
                {day55.title}
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-extrabold text-white">
              Outside the UK: tax and regulation differ too
            </h2>
            <p>
              If you're based outside the UK, the general shape of the
              problem is similar but the specific rules will be different —
              and sometimes very different. Some countries tax crypto gains
              similarly to other investments, some have entirely separate
              frameworks for digital assets, and some are still clarifying
              their position. The only safe assumption is that you need to
              check the rules for your own country (and sometimes your own
              region) directly with the relevant tax authority or a local
              professional, rather than assuming UK rules — or any other
              country's rules — apply to you.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-extrabold text-white">
              Emerging areas: stablecoins and CBDCs
            </h2>
            <p>
              Two areas are getting a growing amount of regulatory attention
              as the crypto industry matures:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>
                <strong>Stablecoins</strong> — crypto assets designed to track
                the value of a currency like the US dollar or British pound.
                Because stablecoins are increasingly used for payments and as
                a bridge between crypto and traditional finance, regulators
                in multiple countries are working on rules covering how
                they're backed, audited, and overseen.
              </li>
              <li>
                <strong>Central Bank Digital Currencies (CBDCs)</strong> —
                digital forms of a country's own currency, issued directly by
                its central bank rather than by a private company. A CBDC is
                a fundamentally different thing from decentralised
                cryptocurrencies like Bitcoin, even though it's sometimes
                discussed in the same conversations.
              </li>
            </ul>
            <p className="mt-3">
              Both areas are moving targets, with different countries at very
              different stages of exploring, piloting, or implementing their
              own approaches. We cover CBDCs specifically in Day {day58.day}:{" "}
              <Link href={day58Href} className="text-gold hover:underline">
                {day58.title}
              </Link>
              , and look at where regulation and the wider industry might be
              heading next in Day {day59.day}:{" "}
              <Link href={day59Href} className="text-gold hover:underline">
                {day59.title}
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-extrabold text-white">
              The practical takeaway
            </h2>
            <p>
              Crypto regulation is a genuinely moving target: it varies by
              country, it's actively evolving even within a single country
              like the UK, and specific figures — tax rates, allowances,
              thresholds, deadlines — change over time. Treat any single
              article, including this one, as a starting point for
              understanding the shape of the system, not as a substitute for
              checking current official guidance or speaking to a
              professional before you act. For a wider look at protecting
              yourself in crypto more generally, see our{" "}
              <Link href="/crypto-security/" className="text-gold hover:underline">
                crypto security guide
              </Link>
              , and for how we handle risk and advice across the whole site,
              see our{" "}
              <Link href="/legal/disclaimer" className="text-gold hover:underline">
                Risk Disclaimer
              </Link>
              .
            </p>
          </section>
        </div>

        {/* Continue learning */}
        <div className="card mt-12 p-6">
          <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-gold">
            Continue learning
          </p>
          <h2 className="text-2xl font-extrabold text-white">
            Go deeper with the full 60-day course
          </h2>
          <p className="mt-3 text-muted">
            This page only scratches the surface. The full course covers
            regulation, tax, and the wider crypto landscape day by day,
            including:
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href={day17Href} className="text-gold hover:underline">
                Day {day17.day}: {day17.title}
              </Link>
            </li>
            <li>
              <Link href={day55Href} className="text-gold hover:underline">
                Day {day55.day}: {day55.title}
              </Link>
            </li>
            <li>
              <Link href={day57Href} className="text-gold hover:underline">
                Day {day57.day}: {day57.title}
              </Link>
            </li>
            <li>
              <Link href={day58Href} className="text-gold hover:underline">
                Day {day58.day}: {day58.title}
              </Link>
            </li>
            <li>
              <Link href={day59Href} className="text-gold hover:underline">
                Day {day59.day}: {day59.title}
              </Link>
            </li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/signup" className="btn-primary">
              Start free — Days 1 &amp; 2
            </Link>
            <Link href="/pricing" className="btn-secondary">
              See pricing
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <section className="mt-16">
          <h2 className="mb-6 text-center text-3xl font-extrabold">
            Frequently asked questions
          </h2>
          <div className="mx-auto space-y-4">
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
    </div>
  );
}
