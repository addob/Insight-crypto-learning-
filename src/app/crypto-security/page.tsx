import Link from "next/link";
import type { Metadata } from "next";
import { dayUrlSlug } from "@/lib/slug";
import { getCourseDay } from "@/data/curriculum";

export const metadata: Metadata = {
  title: "Crypto Security Guide | How to Protect Your Cryptocurrency",
  description:
    "Learn how to protect your cryptocurrency with practical guides on wallet security, scam prevention, private keys, 2FA and common crypto risks.",
  alternates: { canonical: "/crypto-security" },
};

function dayHref(day: number): string {
  const d = getCourseDay(day);
  return d ? `/course/${dayUrlSlug(day, d.title)}` : "/course";
}

export default function CryptoSecurityPage() {
  const day8 = dayHref(8);
  const day9 = dayHref(9);
  const day10 = dayHref(10);
  const day11 = dayHref(11);
  const day12 = dayHref(12);
  const day13 = dayHref(13);

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-b from-panel to-ink">
        <div className="container-page py-16">
          <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
            Crypto Security
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl">
            Crypto Security: Protecting Your Digital Assets
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            Cryptocurrency puts you in direct control of your own money — which
            also means you&apos;re in direct control of keeping it safe. This
            guide walks through the basics every crypto user should
            understand: how self-custody works, the most common ways people
            get scammed, and a practical checklist you can start using today.
          </p>
        </div>
      </section>

      <div className="container-page max-w-3xl py-16">
        <div className="space-y-12 text-sm leading-relaxed text-white/90 md:text-base">
          {/* Why different */}
          <section>
            <h2 className="mb-3 text-3xl font-extrabold text-white">
              Why crypto security is different from banking
            </h2>
            <p>
              When you use a bank, the bank holds your money and takes on most
              of the security burden. If your card details are stolen, you can
              usually call the bank, freeze the card, and reverse a fraudulent
              charge. There&apos;s a customer service team, a dispute process,
              and often a regulatory scheme standing behind you.
            </p>
            <p className="mt-3">
              Cryptocurrency generally doesn&apos;t work that way. Most crypto
              is built around{" "}
              <strong className="text-white">self-custody</strong>: you (or
              your wallet software) hold the keys that control your funds
              directly, without a bank sitting in the middle. That&apos;s a
              powerful feature — nobody can freeze your account or block a
              transaction without your authorisation — but it also means
              there is usually no chargeback, no fraud department, and no
              &ldquo;undo&rdquo; button. If funds are sent to the wrong
              address, or a scammer gets access to your keys, the transaction
              is typically final.
            </p>
            <p className="mt-3">
              That single fact — <em>you are your own security department</em>{" "}
              — is the reason crypto security deserves real attention, even if
              you&apos;re just getting started. It isn&apos;t a reason to be
              afraid of crypto; it&apos;s a reason to understand a handful of
              core concepts before you move meaningful money.
            </p>
          </section>

          {/* Private keys */}
          <section>
            <h2 className="mb-3 text-3xl font-extrabold text-white">
              Private keys and seed phrases, in plain English
            </h2>
            <p>
              Every crypto wallet is built on a cryptographic key pair: a
              public key (which is effectively your address — safe to share so
              people can send you funds) and a{" "}
              <strong className="text-white">private key</strong> (which
              proves ownership and authorises outgoing transactions — never
              safe to share). Most modern wallets generate a human-readable
              backup of that private key material called a{" "}
              <strong className="text-white">seed phrase</strong> or recovery
              phrase: typically 12 or 24 ordinary-looking words.
            </p>
            <p className="mt-3">
              Whoever has your seed phrase has your funds — full stop. It
              doesn&apos;t matter whether they got it by looking over your
              shoulder, finding a photo of it, or asking for it in a
              convincing-sounding support message. There is no legitimate
              reason any exchange, wallet provider, or &ldquo;support
              agent&rdquo; will ever need your seed phrase. If something asks
              for it, that is the request itself telling you it&apos;s a scam.
            </p>
            <p className="mt-3">
              We cover this in depth, including exactly how to generate and
              store a seed phrase safely, in{" "}
              <Link href={day9} className="text-gold hover:underline">
                Day 9: Private Keys &amp; Seed Phrases
              </Link>
              .
            </p>
          </section>

          {/* Hot vs cold */}
          <section>
            <h2 className="mb-3 text-3xl font-extrabold text-white">
              Hot wallets vs. cold wallets
            </h2>
            <p>
              A <strong className="text-white">hot wallet</strong> is any
              wallet connected to the internet — a mobile app, a browser
              extension, or funds held on an exchange. Hot wallets are
              convenient for everyday use and smaller amounts, but their
              internet connection is also what makes them reachable by remote
              attackers, malware, and phishing pages.
            </p>
            <p className="mt-3">
              A <strong className="text-white">cold wallet</strong> keeps your
              private keys on a device that never touches the internet, most
              commonly a dedicated hardware wallet. Transactions are signed on
              the offline device and only the signed result goes online. Cold
              storage is generally considered the safer option for larger
              amounts or long-term holdings, at the cost of a little extra
              friction to use.
            </p>
            <p className="mt-3">
              A common and sensible approach is to split the two: a small hot
              wallet balance for day-to-day use, and the bulk of your holdings
              in cold storage. We compare the trade-offs properly in{" "}
              <Link href={day8} className="text-gold hover:underline">
                Day 8: Hot Wallets vs Cold Wallets
              </Link>{" "}
              and walk through the full range of wallet types — software,
              hardware and paper — in{" "}
              <Link href={day10} className="text-gold hover:underline">
                Day 10: Types of Wallets (Software, Hardware, Paper)
              </Link>
              . If you haven&apos;t set up a wallet yet,{" "}
              <Link href={day11} className="text-gold hover:underline">
                Day 11: Setting Up Your First Wallet Safely
              </Link>{" "}
              walks through doing it correctly from the start.
            </p>
          </section>

          {/* Scams */}
          <section>
            <h2 className="mb-3 text-3xl font-extrabold text-white">
              Common scam patterns to recognise
            </h2>
            <p>
              Crypto scams are extremely common, and they tend to follow a
              fairly small number of recurring patterns. Learning to recognise
              the pattern matters more than memorising any specific example,
              because scammers constantly change the details.
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>
                <strong className="text-white">Phishing.</strong> A fake
                website, email, or message designed to look like a real
                exchange or wallet, aiming to trick you into entering your
                password, 2FA code, or seed phrase.
              </li>
              <li>
                <strong className="text-white">Fake apps.</strong> Counterfeit
                wallet or exchange apps, sometimes even appearing in official
                app stores, that either steal credentials or generate a seed
                phrase the scammer already controls.
              </li>
              <li>
                <strong className="text-white">Impersonation.</strong>{" "}
                Someone posing as support staff, a well-known figure, or even
                a friend whose account was compromised, reaching out
                unprompted to &ldquo;help&rdquo; you.
              </li>
              <li>
                <strong className="text-white">
                  &ldquo;Guaranteed returns.&rdquo;
                </strong>{" "}
                Any pitch promising fixed, risk-free, or unusually high returns
                on crypto is a red flag. Markets don&apos;t work that way, and
                legitimate investments never guarantee profit.
              </li>
              <li>
                <strong className="text-white">Rug pulls.</strong> A project
                or token that builds hype, attracts investment, and then has
                its creators disappear with the funds, often by draining
                liquidity or abandoning the project entirely.
              </li>
            </ul>
            <p className="mt-3">
              Almost every variant of these shares a common thread: urgency
              and trust manipulation. Scammers want you to act fast, before
              you&apos;ve had time to verify anything. We go through real
              examples of each pattern, and how to spot them in the wild, in{" "}
              <Link href={day12} className="text-gold hover:underline">
                Day 12: Common Crypto Scams &amp; How to Spot Them
              </Link>{" "}
              and{" "}
              <Link href={day13} className="text-gold hover:underline">
                Day 13: Phishing, Fake Apps &amp; Social Engineering
              </Link>
              .
            </p>
          </section>

          {/* Checklist */}
          <section>
            <h2 className="mb-3 text-3xl font-extrabold text-white">
              A practical beginner security checklist
            </h2>
            <p>None of this requires technical expertise. A short list of habits covers most of the real-world risk:</p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>
                Use a strong, unique password for every exchange and wallet
                account — ideally generated and stored in a password manager,
                never reused across sites.
              </li>
              <li>
                Turn on two-factor authentication (2FA) everywhere it&apos;s
                offered, preferably with an authenticator app rather than SMS.
              </li>
              <li>
                Never type your seed phrase into a website, app, chat message,
                or email, for any reason, ever. Legitimate services do not ask
                for it.
              </li>
              <li>
                Independently verify URLs and apps rather than trusting a
                search ad or a link in a message — type the address yourself
                or use a bookmark you created previously.
              </li>
              <li>
                Treat urgency as a warning sign. &ldquo;Act now or lose your
                funds,&rdquo; &ldquo;limited-time offer,&rdquo; and
                &ldquo;verify your account immediately&rdquo; are classic
                pressure tactics designed to short-circuit careful thinking.
              </li>
              <li>
                Keep larger holdings in cold storage, and only keep in a hot
                wallet what you&apos;re comfortable actively using.
              </li>
            </ul>
            <p className="mt-3">
              A good general rule: don&apos;t assume something is legitimate
              just because someone tells you it is — verify it yourself
              through a channel you trust, independently of whatever
              contacted you.
            </p>
          </section>

          {/* Disclaimer */}
          <section>
            <p className="text-sm text-muted">
              This page is educational content and general good practice, not
              a guarantee of security or a substitute for your own judgement.
              No set of habits can eliminate risk entirely, and this is not
              financial or investment advice.
            </p>
          </section>

          {/* Continue learning */}
          <section className="card p-6">
            <h2 className="mb-3 text-2xl font-extrabold text-white">
              Continue learning
            </h2>
            <p className="text-muted">
              This guide only scratches the surface. The full course covers
              wallets, scams, and security in much more depth, alongside
              everything else you need to use crypto confidently. You might
              also want to read our guides on{" "}
              <Link href="/crypto-for-beginners" className="text-gold hover:underline">
                crypto for beginners
              </Link>{" "}
              and{" "}
              <Link href="/blockchain" className="text-gold hover:underline">
                how blockchain works
              </Link>
              .
            </p>
            <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-muted">
              <li>
                <Link href={day9} className="text-gold hover:underline">
                  Day 9: Private Keys &amp; Seed Phrases
                </Link>
              </li>
              <li>
                <Link href={day11} className="text-gold hover:underline">
                  Day 11: Setting Up Your First Wallet Safely
                </Link>
              </li>
              <li>
                <Link href={day12} className="text-gold hover:underline">
                  Day 12: Common Crypto Scams &amp; How to Spot Them
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
          </section>
        </div>
      </div>
    </div>
  );
}
