import Link from "next/link";
import type { Metadata } from "next";
import { dayUrlSlug } from "@/lib/slug";
import { getCourseDay } from "@/data/curriculum";

export const metadata: Metadata = {
  title: "DeFi Explained | Decentralised Finance for Beginners",
  description:
    "Learn what DeFi (decentralised finance) is, how decentralised exchanges, lending, staking and stablecoins work, and the risks to understand first.",
  alternates: { canonical: "/defi" },
};

function dayHref(day: number): string {
  const d = getCourseDay(day)!;
  return `/course/${dayUrlSlug(day, d.title)}`;
}

const day16 = getCourseDay(16)!;
const day36 = getCourseDay(36)!;
const day37 = getCourseDay(37)!;
const day38 = getCourseDay(38)!;
const day39 = getCourseDay(39)!;
const day40 = getCourseDay(40)!;
const day41 = getCourseDay(41)!;
const day42 = getCourseDay(42)!;

const continueLearningDays = [day36, day37, day38, day39, day41, day42];

export default function DefiPage() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-b from-panel to-ink">
        <div className="container-page py-16">
          <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
            DeFi &middot; Decentralised Finance
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl">
            Decentralised Finance (DeFi)
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            DeFi is the umbrella term for financial services — trading,
            lending, borrowing, saving and earning yield — rebuilt on public
            blockchains using software instead of banks, brokers or
            exchanges. This guide explains what that actually means in
            practice, how the main building blocks work, and the specific
            risks worth understanding before you touch any of it.
          </p>
        </div>
      </section>

      <div className="container-page max-w-3xl py-16">
        <div className="space-y-12 text-sm leading-relaxed text-white/90">
          {/* What is DeFi */}
          <section>
            <h2 className="mb-3 text-3xl font-extrabold text-white">
              What DeFi Actually Means
            </h2>
            <p>
              &ldquo;DeFi&rdquo; is short for decentralised finance. Instead
              of a bank holding your money and deciding whether to lend it
              out, or a centralised exchange holding your crypto and matching
              your trades internally, DeFi protocols use self-executing code
              called smart contracts, running on a public blockchain such as
              Ethereum, to do the same jobs. Our{" "}
              <Link href={dayHref(36)} className="text-gold hover:underline">
                {day36.title}
              </Link>{" "}
              lesson covers this foundational idea in more depth.
            </p>
            <p className="mt-4">
              With a bank, you trust an institution: it keeps records, it
              decides who can borrow, and it can freeze an account or reverse
              a transaction. With a DeFi protocol, the rules are written into
              code that anyone can inspect, and transactions settle directly
              between wallets with no company sitting in the middle holding
              your funds. That removes a certain kind of institutional risk
              (a bank going bust with your deposits, for example) but it
              introduces a different kind of risk entirely — one rooted in
              code, incentives and the absence of anyone to call when
              something goes wrong. We come back to that in detail below.
            </p>
            <p className="mt-4">
              It&rsquo;s worth being precise about what DeFi is not. It is
              not a specific coin, a specific app, or a guaranteed way to
              earn money. It&rsquo;s a category of financial infrastructure —
              and like any infrastructure, some of it is well built and
              heavily used, and some of it is fragile, untested or
              deliberately designed to separate you from your funds.
            </p>
          </section>

          {/* DEXs and AMMs */}
          <section>
            <h2 className="mb-3 text-3xl font-extrabold text-white">
              Decentralised Exchanges and Automated Market Makers
            </h2>
            <p>
              A decentralised exchange, or DEX, lets you swap one token for
              another directly from your own wallet, without creating an
              account or handing custody of your assets to a company. Our{" "}
              <Link href={dayHref(16)} className="text-gold hover:underline">
                {day16.title}
              </Link>{" "}
              lesson introduces the idea, and{" "}
              <Link href={dayHref(37)} className="text-gold hover:underline">
                {day37.title}
              </Link>{" "}
              goes further into how prices are actually set.
            </p>
            <p className="mt-4">
              Most DEXs don&rsquo;t use an order book of buyers and sellers
              the way a traditional exchange does. Instead they use an
              automated market maker, or AMM: a smart contract holding a pool
              of two tokens, which prices trades using a formula based on the
              ratio of tokens currently sitting in the pool. As you buy one
              token from the pool, there&rsquo;s less of it left and more of
              the other, so the formula pushes the price up — the same basic
              supply-and-demand logic as a normal market, just calculated
              mechanically rather than matched against other people&rsquo;s
              orders. The practical effect is that large trades move the
              price more than small ones (known as slippage), and this is
              handled entirely by code, with no human market maker involved.
            </p>
          </section>

          {/* Liquidity pools */}
          <section>
            <h2 className="mb-3 text-3xl font-extrabold text-white">
              Liquidity Pools and Impermanent Loss
            </h2>
            <p>
              The tokens sitting inside an AMM don&rsquo;t appear from
              nowhere — they&rsquo;re deposited by ordinary users called
              liquidity providers, who contribute an equal value of two
              tokens to a pool in exchange for a small share of the trading
              fees everyone else generates by swapping through it. Our{" "}
              <Link href={dayHref(38)} className="text-gold hover:underline">
                {day38.title}
              </Link>{" "}
              lesson walks through this mechanism and has you estimate the
              numbers yourself on paper.
            </p>
            <p className="mt-4">
              The specific risk worth understanding here is{" "}
              <strong>impermanent loss</strong>. Because an AMM automatically
              rebalances a pool&rsquo;s two tokens as their relative price
              moves, a liquidity provider&rsquo;s share ends up holding more
              of whichever token fell in value and less of whichever token
              rose, compared with simply holding both tokens separately. If
              the two tokens&rsquo; prices drift apart significantly, the
              value of your pooled position can end up lower than if you had
              just held the tokens in a wallet and done nothing — even before
              counting any fees earned. The loss is called
              &ldquo;impermanent&rdquo; because it only becomes permanent if
              you withdraw while prices are still out of line; but trading
              fees have to be enough to outweigh it, and that isn&rsquo;t
              guaranteed.
            </p>
          </section>

          {/* Staking */}
          <section>
            <h2 className="mb-3 text-3xl font-extrabold text-white">
              Staking
            </h2>
            <p>
              On Proof of Stake blockchains, staking means locking up tokens
              to help validate transactions and secure the network, in
              return for a share of newly issued tokens or transaction fees.
              It&rsquo;s a core piece of how networks like Ethereum run day
              to day, not a DeFi product in itself, but the two are closely
              linked because many DeFi protocols build staking-style products
              on top of it. Our{" "}
              <Link href={dayHref(39)} className="text-gold hover:underline">
                {day39.title}
              </Link>{" "}
              lesson compares the main ways ordinary users can stake.
            </p>
            <p className="mt-4">
              Staking isn&rsquo;t risk-free. Depending on the method, your
              tokens may be locked for a period and unable to be sold during
              a price drop, the underlying protocol can be penalised
              (&ldquo;slashed&rdquo;) for misbehaviour by whoever operates
              the validator on your behalf, and third-party staking services
              introduce the same kind of counterparty trust you were trying
              to avoid by going on-chain in the first place.
            </p>
          </section>

          {/* Lending & borrowing */}
          <section>
            <h2 className="mb-3 text-3xl font-extrabold text-white">
              Lending and Borrowing in DeFi
            </h2>
            <p>
              DeFi lending protocols let one person deposit crypto to earn
              interest while another borrows against collateral, with the
              smart contract handling matching, interest calculation and
              repayment automatically rather than a bank&rsquo;s credit
              department. Our{" "}
              <Link href={dayHref(41)} className="text-gold hover:underline">
                {day41.title}
              </Link>{" "}
              lesson walks through a liquidation step by step.
            </p>
            <p className="mt-4">
              Because there&rsquo;s no credit check or ability to chase
              someone for repayment, DeFi loans are almost always
              over-collateralised: you deposit crypto worth more than you
              borrow. If the value of your collateral falls too close to the
              value of your loan, the protocol automatically sells
              (&ldquo;liquidates&rdquo;) some or all of it to protect
              lenders — often with a penalty — and it does this without
              warning, negotiation or any grace period, because there is no
              person on the other end to ask for one. Borrowing against
              volatile collateral in a falling market is one of the more
              mechanically predictable ways people lose money in DeFi.
            </p>
            <p className="mt-4">
              A related practice, yield farming, means actively moving funds
              between lending markets, liquidity pools and other protocols to
              chase the best available return. Our{" "}
              <Link href={dayHref(40)} className="text-gold hover:underline">
                {day40.title}
              </Link>{" "}
              lesson looks at why an advertised yield number needs
              interrogating rather than taking at face value — a high return
              is compensation for a specific risk somewhere in the system,
              not free money.
            </p>
          </section>

          {/* Stablecoins */}
          <section>
            <h2 className="mb-3 text-3xl font-extrabold text-white">
              Stablecoins
            </h2>
            <p>
              Almost every DeFi activity above needs a reliable unit of
              account — something that doesn&rsquo;t swing in value the way
              Bitcoin or Ethereum can from one day to the next. That&rsquo;s
              the role stablecoins play: tokens designed to track the value
              of a reference asset, usually the US dollar, through one of a
              few mechanisms, from holding real cash and short-term
              government debt in reserve, to being over-collateralised by
              other crypto assets, to purely algorithmic approaches with no
              reserve backing at all. Our{" "}
              <Link href={dayHref(42)} className="text-gold hover:underline">
                {day42.title}
              </Link>{" "}
              lesson has you classify real stablecoins by how they&rsquo;re
              actually backed.
            </p>
            <p className="mt-4">
              &ldquo;Stable&rdquo; describes an intention, not a guarantee.
              The backing mechanism matters enormously: a stablecoin backed
              one-for-one by audited cash reserves and one backed
              algorithmically by a second, more volatile token carry very
              different failure modes, even though both might display the
              same price most of the time.
            </p>
          </section>

          {/* Risks */}
          <section>
            <h2 className="mb-3 text-3xl font-extrabold text-white">
              The Risks Specific to DeFi
            </h2>
            <p>
              It&rsquo;s easy to wave at &ldquo;crypto is risky&rdquo; in
              general terms. DeFi carries a more specific set of mechanical
              risks worth naming directly:
            </p>
            <ul className="mt-4 list-disc space-y-3 pl-5">
              <li>
                <strong>Smart contract bugs.</strong> A DeFi protocol is
                software, and software can contain errors. A flaw in a
                contract&rsquo;s code can let an attacker drain a pool or
                market entirely, and because blockchain transactions are
                generally irreversible, there&rsquo;s no process to simply
                undo it afterwards.
              </li>
              <li>
                <strong>Impermanent loss.</strong> As explained above,
                supplying liquidity to an AMM pool can leave you worse off
                than simply holding the two tokens separately, if their
                prices move apart from each other by enough.
              </li>
              <li>
                <strong>Rug pulls.</strong> Some projects are set up
                deliberately so the people who created them can withdraw all
                the pooled funds, or mint and dump huge amounts of a token,
                leaving everyone else holding something close to worthless.
                A new, unaudited protocol with an anonymous team is a
                materially different proposition from an established one.
              </li>
              <li>
                <strong>Over-leveraged and liquidation risk.</strong>{" "}
                Borrowing against volatile collateral, or using products that
                amplify exposure, means a price move that would be
                uncomfortable if you simply held the asset can be enough to
                have your position automatically and irreversibly liquidated.
              </li>
              <li>
                <strong>No customer support and no chargebacks.</strong>{" "}
                There is no institution to call if you send funds to the
                wrong address, approve a malicious contract, or get caught
                out by a bug or a scam. Transactions on a public blockchain
                are final by design; that finality is a feature when things
                go right and has no safety net when they don&rsquo;t.
              </li>
            </ul>
            <p className="mt-4">
              None of this means DeFi has no genuine utility — permissionless
              access to financial tools, composability between protocols,
              and transparent, auditable rules are real and useful
              properties. It means the risks are different in kind from
              traditional finance, not simply &ldquo;more&rdquo; of the same
              risk, and they&rsquo;re worth understanding mechanically rather
              than treating as a vague warning label. For the security
              practices that reduce your exposure to several of these risks
              — wallet hygiene, spotting phishing, and evaluating a
              protocol before you trust it with funds — see our{" "}
              <Link href="/crypto-security" className="text-gold hover:underline">
                crypto security guide
              </Link>
              . And if you&rsquo;re still getting comfortable with how
              blockchains work underneath all of this, our{" "}
              <Link href="/blockchain" className="text-gold hover:underline">
                blockchain basics guide
              </Link>{" "}
              is a good place to start first.
            </p>
          </section>

          {/* Continue learning */}
          <section>
            <h2 className="mb-3 text-3xl font-extrabold text-white">
              Continue Learning
            </h2>
            <p>
              This page only scratches the surface. The DeFi week of our
              60-day course covers each of these topics properly, with a
              quiz at the end of every lesson to check you&rsquo;ve actually
              understood it.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {continueLearningDays.map((d) => (
                <Link
                  key={d.day}
                  href={dayHref(d.day)}
                  className="card block p-4 text-sm hover:border-gold/60"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                    Day {d.day}
                  </p>
                  <p className="mt-1 font-semibold text-white">{d.title}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="card p-6 text-center">
            <h2 className="text-2xl font-extrabold text-white">
              Learn DeFi Properly, One Day at a Time
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted">
              The full 60-day course builds up to DeFi gradually, from
              blockchain fundamentals through wallets, exchanges and
              Ethereum, before dedicating a whole week to decentralised
              finance in detail — with a 10-question quiz on every lesson.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
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
