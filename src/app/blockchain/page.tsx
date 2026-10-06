import Link from "next/link";
import type { Metadata } from "next";
import { dayUrlSlug } from "@/lib/slug";
import { getCourseDay } from "@/data/curriculum";

export const metadata: Metadata = {
  title: "Blockchain Explained | Learn Blockchain Technology",
  description:
    "Learn how blockchain technology works, how blocks and transactions are connected, and why blockchains matter for cryptocurrency, in plain English.",
  alternates: { canonical: "/blockchain" },
};

const day = (n: number) => {
  const d = getCourseDay(n)!;
  return { href: `/course/${dayUrlSlug(n, d.title)}`, title: d.title };
};

const day2 = day(2);
const day3 = day(3);
const day6 = day(6);
const day22 = day(22);
const day29 = day(29);
const day31 = day(31);
const day34 = day(34);
const day35 = day(35);

const faqs = [
  {
    q: "Is a blockchain the same thing as Bitcoin?",
    a: "No. Bitcoin is one application built on top of a blockchain. A blockchain is the underlying record-keeping technology — many different cryptocurrencies and other systems use their own blockchains for different purposes.",
  },
  {
    q: "Is everything on a blockchain automatically trustworthy?",
    a: "No. A blockchain can reliably show that a transaction happened and hasn't been altered since, but it can't verify that the information someone fed into it was true in the first place. 'Immutable' means hard to change, not automatically correct.",
  },
  {
    q: "Are blockchain transactions anonymous?",
    a: "Usually not fully. Most public blockchains are pseudonymous: your wallet address is public, but it isn't automatically linked to your real name. With enough analysis, addresses can often be linked to real identities.",
  },
  {
    q: "Do I need to understand the maths to use crypto safely?",
    a: "No. Understanding the big picture — what a ledger is, why decentralisation matters, and the difference between a wallet and an exchange — is far more useful day to day than the underlying cryptography.",
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

export default function BlockchainPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-b from-panel to-ink">
        <div className="container-page py-16 md:py-20">
          <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
            Blockchain basics
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl">
            Blockchain Technology Explained
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            &ldquo;Blockchain&rdquo; gets thrown around constantly, but the
            idea underneath it is simple once it's explained properly. This
            guide walks through what a blockchain actually is, how it stays
            trustworthy without a central authority, and where the
            misconceptions creep in — in plain English, with no assumed
            background.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/signup" className="btn-primary">
              Start free — Days 1 &amp; 2
            </Link>
            <Link href="/pricing" className="btn-secondary">
              See pricing
            </Link>
          </div>
        </div>
      </section>

      <div className="container-page max-w-3xl py-16">
        <div className="space-y-12 text-base leading-relaxed text-white/90">
          {/* What is a blockchain */}
          <section>
            <h2 className="mb-3 text-3xl font-extrabold">
              What is a blockchain, really?
            </h2>
            <p>
              At its core, a blockchain is a shared record book — usually
              called a <strong>ledger</strong> — that keeps a list of
              entries (most often transactions) in order. What makes it
              different from an ordinary spreadsheet or database is that an
              identical copy of this ledger is stored on thousands of
              separate computers around the world, called{" "}
              <strong>nodes</strong>, instead of on one company's server.
            </p>
            <p className="mt-4">
              New entries are bundled together into groups called{" "}
              <strong>blocks</strong>. Each block is checked by the network,
              added to the end of the ledger, and then linked to the block
              before it using a bit of cryptographic fingerprinting — which
              is where the name &ldquo;blockchain&rdquo; comes from: a chain
              of blocks, each one referring back to the last. If you want
              the full walkthrough of this idea from first principles,{" "}
              <Link href={day2.href} className="text-gold hover:underline">
                {day2.title}
              </Link>{" "}
              covers it step by step.
            </p>
            <p className="mt-4">
              Once a block is added and enough later blocks are built on top
              of it, going back and quietly changing an old entry would mean
              redoing all the work for every block after it, on a majority of
              the computers holding a copy — at the same time, faster than
              everyone else is adding new blocks. For a well-established
              network, that's extremely impractical, which is why blockchain
              records are described as <strong>append-only</strong>: you can
              add to them, but changing history is deliberately made very
              difficult.
            </p>
          </section>

          {/* Decentralisation */}
          <section>
            <h2 className="mb-3 text-3xl font-extrabold">
              Why decentralisation matters
            </h2>
            <p>
              A normal database — the kind a bank or a social media company
              runs — has one owner. That owner can read every entry, change
              any entry, and decide who else is allowed to see or write to
              it. You trust the system because you trust the company
              running it, its internal controls, and the regulations it
              operates under.
            </p>
            <p className="mt-4">
              A public blockchain flips that model. Instead of one owner,
              copies of the ledger are spread across many independent
              participants, and the rules for adding a new block are
              enforced by software and agreed-upon procedures rather than by
              a single gatekeeper. This is called{" "}
              <strong>decentralisation</strong>. No single node gets to
              unilaterally rewrite the ledger; a new block is only accepted
              if it follows the network's rules and enough of the network
              agrees it's valid.
            </p>
            <p className="mt-4">
              This doesn't mean no one is in charge of anything, or that
              decentralised systems are automatically better than
              centralised ones — it's a trade-off. You gain resilience (there
              is no single point of failure or single party who can freeze
              or reverse things unilaterally) and censorship-resistance, but
              you lose the convenience of a central authority who can fix
              mistakes, reverse fraud, or quickly change the rules.{" "}
              <Link href={day3.href} className="text-gold hover:underline">
                {day3.title}
              </Link>{" "}
              goes into much more depth on what decentralisation does and
              doesn't guarantee.
            </p>
          </section>

          {/* Blocks, transactions, mining/validation */}
          <section>
            <h2 className="mb-3 text-3xl font-extrabold">
              How blocks, transactions and validation fit together
            </h2>
            <p>
              When you send cryptocurrency, you're broadcasting a
              transaction to the network: a message saying, in effect,
              &ldquo;move this amount from this address to that
              address.&rdquo; That message gets picked up by nodes, checked
              against the rules (do you actually have the funds? is the
              transaction properly signed?), and, if valid, placed into a
              pool of transactions waiting to be included in the next block.{" "}
              <Link href={day6.href} className="text-gold hover:underline">
                {day6.title}
              </Link>{" "}
              traces one of these transactions from start to finish.
            </p>
            <p className="mt-4">
              Someone then has to actually build the next block and get the
              rest of the network to accept it. Different blockchains use
              different mechanisms to decide who gets to do this and to stop
              people from spamming the network with fake or conflicting
              blocks. The two most common approaches are proof of work and
              proof of stake, covered below.
            </p>
            <p className="mt-4">
              Whichever mechanism is used, the result is the same shape: a
              new block of transactions gets proposed, the network checks it
              against the rules, and once accepted it's added to the chain
              and distributed to every node, which updates its own copy of
              the ledger to match.
            </p>
          </section>

          {/* PoW vs PoS */}
          <section>
            <h2 className="mb-3 text-3xl font-extrabold">
              Proof of work vs proof of stake
            </h2>
            <p>
              <strong>Proof of work</strong> is the mechanism Bitcoin uses.
              Participants called <strong>miners</strong> compete to solve a
              computational puzzle that takes real-world energy and
              specialised hardware to solve, but is easy for everyone else
              to check once it's solved. Whoever solves it first gets to
              propose the next block. This makes attacking the network
              expensive in a very tangible way — you'd need to out-compute a
              huge, globally distributed set of other miners. The mechanics
              of this, and why it's deliberately costly, are explained in{" "}
              <Link href={day22.href} className="text-gold hover:underline">
                {day22.title}
              </Link>
              .
            </p>
            <p className="mt-4">
              <strong>Proof of stake</strong>, used by Ethereum and many
              other networks, replaces computational competition with
              economic commitment. Participants called{" "}
              <strong>validators</strong> lock up (&ldquo;stake&rdquo;) some
              of the network's own cryptocurrency as collateral. Validators
              are chosen to propose and confirm blocks, and if they act
              dishonestly — for example by approving conflicting
              transactions — some or all of their staked funds can be
              destroyed, a process usually called{" "}
              <strong>slashing</strong>. Instead of burning electricity,
              proof of stake relies on the threat of losing staked value as
              its deterrent.{" "}
              <Link href={day34.href} className="text-gold hover:underline">
                {day34.title}
              </Link>{" "}
              covers Ethereum's own move from one model to the other.
            </p>
            <p className="mt-4">
              Neither approach is simply &ldquo;better&rdquo; in every
              respect — they make different trade-offs around energy use,
              hardware requirements, and how the underlying token's
              economics work. Both aim to achieve the same thing: making it
              expensive or risky to cheat, and cheap to tell the truth.
            </p>
          </section>

          {/* Smart contracts */}
          <section>
            <h2 className="mb-3 text-3xl font-extrabold">
              Smart contracts: programs that live on the chain
            </h2>
            <p>
              Some blockchains, most notably Ethereum, go beyond simply
              recording &ldquo;who sent what to whom.&rdquo; They can also
              run small programs called <strong>smart contracts</strong>:
              code that is stored on the blockchain itself and executes
              automatically when certain conditions are met, with the result
              recorded on the ledger just like a transaction. Despite the
              name, a smart contract isn't a legal contract — it's simply
              software that runs in a predictable, shared environment that
              every node agrees on, often called a{" "}
              <strong>virtual machine</strong>.{" "}
              <Link href={day29.href} className="text-gold hover:underline">
                {day29.title}
              </Link>{" "}
              explains that shared execution environment in detail, and{" "}
              <Link href={day31.href} className="text-gold hover:underline">
                {day31.title}
              </Link>{" "}
              breaks down exactly what a smart contract is and what it can
              and can't do.
            </p>
            <p className="mt-4">
              Smart contracts are what make things like decentralised
              lending, token swaps, and automated agreements possible without
              a company sitting in the middle processing every request.
              They also inherit the same honesty problem as any other
              software: a smart contract does exactly what its code says,
              not necessarily what its authors intended, which is why bugs
              in widely-used contracts have caused real financial losses in
              the past.
            </p>
            <p className="mt-4">
              Because many blockchains can only handle a limited number of
              transactions directly, a family of technologies called{" "}
              <strong>layer 2 solutions</strong> has grown up to process
              transactions more cheaply off the main chain while still
              relying on it for final security — see{" "}
              <Link href={day35.href} className="text-gold hover:underline">
                {day35.title}
              </Link>{" "}
              for how that works.
            </p>
          </section>

          {/* Misconceptions */}
          <section>
            <h2 className="mb-3 text-3xl font-extrabold">
              Common misconceptions worth clearing up
            </h2>
            <p>
              A few ideas about blockchain get repeated so often that they're
              worth addressing directly:
            </p>
            <ul className="mt-4 list-disc space-y-3 pl-6">
              <li>
                <strong>&ldquo;It's on the blockchain, so it must be
                true.&rdquo;</strong> A blockchain can guarantee that a
                record hasn't been tampered with since it was written. It
                can't guarantee that the information was accurate or honest
                when it was first entered. Garbage in, immutable garbage
                out.
              </li>
              <li>
                <strong>&ldquo;Blockchain means anonymous.&rdquo;</strong>{" "}
                Most public blockchains are pseudonymous, not anonymous —
                addresses are public and permanently linked to their
                transaction history, which can sometimes be traced back to a
                real identity through exchanges, patterns, or other data.
              </li>
              <li>
                <strong>&ldquo;Immutable means infallible.&rdquo;</strong>{" "}
                A transaction being irreversible is not the same as it being
                correct. If you send funds to the wrong address or approve a
                malicious smart contract, the blockchain will faithfully and
                permanently record that mistake too.
              </li>
              <li>
                <strong>&ldquo;Decentralised means no one is in
                control.&rdquo;</strong> Many networks still have influential
                developers, large holders, or concentrated mining or
                staking power. Decentralisation is a spectrum, not a single
                guaranteed state.
              </li>
              <li>
                <strong>&ldquo;Blockchain is a get-rich-quick
                technology.&rdquo;</strong> Blockchain is a way of keeping
                records without a central authority. It says nothing about
                whether any particular token, project, or trading strategy
                built on top of it is a good idea — that's a separate
                question entirely, and not one this page or our course
                answers for you.
              </li>
            </ul>
          </section>

          {/* Continue learning */}
          <section className="card p-6">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-mint">
              Continue learning
            </p>
            <h2 className="mb-4 text-2xl font-extrabold">
              Go deeper, one day at a time
            </h2>
            <p className="mb-5 text-muted">
              Everything above is covered in far more depth — with examples
              and a quiz to check you've actually understood it — across
              these days of the full course:
            </p>
            <ul className="grid gap-2 text-sm sm:grid-cols-2">
              <li>
                <Link href={day2.href} className="text-gold hover:underline">
                  Day 2 &middot; {day2.title}
                </Link>
              </li>
              <li>
                <Link href={day3.href} className="text-gold hover:underline">
                  Day 3 &middot; {day3.title}
                </Link>
              </li>
              <li>
                <Link href={day6.href} className="text-gold hover:underline">
                  Day 6 &middot; {day6.title}
                </Link>
              </li>
              <li>
                <Link href={day22.href} className="text-gold hover:underline">
                  Day 22 &middot; {day22.title}
                </Link>
              </li>
              <li>
                <Link href={day29.href} className="text-gold hover:underline">
                  Day 29 &middot; {day29.title}
                </Link>
              </li>
              <li>
                <Link href={day31.href} className="text-gold hover:underline">
                  Day 31 &middot; {day31.title}
                </Link>
              </li>
              <li>
                <Link href={day34.href} className="text-gold hover:underline">
                  Day 34 &middot; {day34.title}
                </Link>
              </li>
              <li>
                <Link href={day35.href} className="text-gold hover:underline">
                  Day 35 &middot; {day35.title}
                </Link>
              </li>
            </ul>
            <p className="mt-6 text-sm text-muted">
              Want the bigger picture first? See how blockchain fits
              alongside wallets, exchanges and coins in{" "}
              <Link href="/crypto-for-beginners" className="text-gold hover:underline">
                Crypto for Beginners
              </Link>
              , or see how smart contracts power lending, borrowing and
              trading without a middleman in{" "}
              <Link href="/defi" className="text-gold hover:underline">
                our DeFi guide
              </Link>
              .
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/signup" className="btn-primary">
                Start free — Days 1 &amp; 2
              </Link>
              <Link href="/pricing" className="btn-secondary">
                See pricing
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="mb-6 text-3xl font-extrabold">
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <details key={f.q} className="card group p-5">
                  <summary className="cursor-pointer list-none font-semibold marker:content-none">
                    <span className="flex items-center justify-between">
                      {f.q}
                      <span className="text-gold transition group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
