import Link from "next/link";
import type { Metadata } from "next";
import { dayUrlSlug } from "@/lib/slug";
import { getCourseDay } from "@/data/curriculum";

export const metadata: Metadata = {
  title: "Crypto for Beginners | Learn Cryptocurrency From Scratch",
  description:
    "New to crypto? Learn Bitcoin, blockchain, wallets, cryptocurrency, DeFi, NFTs, security and more with simple beginner-friendly guides.",
  alternates: { canonical: "/crypto-for-beginners" },
};

function dayHref(day: number): string {
  const d = getCourseDay(day);
  return `/course/${dayUrlSlug(day, d!.title)}`;
}

const day1 = dayHref(1);
const day2 = dayHref(2);
const day4 = dayHref(4);
const day5 = dayHref(5);
const day6 = dayHref(6);
const day8 = dayHref(8);
const day15 = dayHref(15);
const day18 = dayHref(18);

export default function CryptoForBeginnersPage() {
  return (
    <div className="container-page max-w-3xl py-16">
      <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
        Beginner&rsquo;s guide
      </span>
      <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl">
        Cryptocurrency for Beginners
      </h1>
      <p className="mt-5 text-lg text-muted">
        Cryptocurrency can feel like a wall of jargon — blockchains, wallets,
        gas fees, exchanges, seed phrases. This guide strips all of that back
        to plain English, so you understand what crypto actually is, how it
        works, and how to take your first careful steps, before you decide
        whether it&rsquo;s something you want to use at all.
      </p>

      <div className="prose-sm mt-10 space-y-10 text-sm leading-relaxed text-white/90">
        <section>
          <h2 className="text-2xl font-extrabold text-white">
            What is money, and why does crypto exist?
          </h2>
          <p className="mt-3">
            Before you can make sense of cryptocurrency, it helps to ask a
            more basic question: what is money, really? Throughout history,
            societies have used all sorts of things as money — shells, salt,
            precious metals, and eventually paper notes and bank balances.
            What makes something work as money usually comes down to a
            handful of properties: people need to trust it, it has to be
            reasonably easy to exchange, it should be hard to counterfeit, and
            it needs to hold its value well enough that people are willing to
            accept it.
          </p>
          <p className="mt-3">
            Today, most of the money in the world isn&rsquo;t physical cash at
            all — it&rsquo;s entries in bank databases, moved around by banks
            and payment networks that sit in the middle of every transaction.
            That system works well for most people most of the time, but it
            also means you&rsquo;re relying on those institutions to keep
            accurate records, stay solvent, and let your transaction through.
          </p>
          <p className="mt-3">
            Cryptocurrency was created to explore a different idea: can a
            group of computers, spread across the world and owned by no single
            company or government, keep a shared, trustworthy record of who
            owns what, without needing a bank in the middle? That question —
            and the technology built to answer it — is where crypto comes
            from. We cover this origin story properly, including the
            problem crypto was originally designed to solve, in{" "}
            <Link href={day1} className="text-gold hover:underline">
              Day 1: What Is Money, and Why Does Crypto Exist?
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold text-white">
            How does blockchain actually work?
          </h2>
          <p className="mt-3">
            A blockchain is, at its core, a shared ledger — a list of
            transactions — that is copied across thousands of independent
            computers (often called &ldquo;nodes&rdquo;) instead of being
            stored in one central place. New transactions are grouped together
            into &ldquo;blocks,&rdquo; and each new block is linked
            cryptographically to the one before it, forming a chain. That
            link is what makes the history very difficult to tamper with: to
            change an old transaction, you&rsquo;d have to redo the links for
            every block that came after it, on a majority of the network,
            all at once.
          </p>
          <p className="mt-3">
            Rather than trusting one company to keep the books honestly, the
            network relies on rules and incentives: computers compete or
            cooperate to validate new transactions according to the same
            agreed-upon rules, and are rewarded for doing so correctly. This
            is sometimes called a &ldquo;consensus mechanism,&rdquo; and
            different cryptoassets use different versions of it. You don&rsquo;t
            need to memorise the cryptography to use crypto sensibly, but
            understanding this big idea — a shared, append-only record,
            maintained by many independent parties — is the key that unlocks
            almost everything else. We walk through this in much more detail,
            with diagrams and examples, in{" "}
            <Link href={day2} className="text-gold hover:underline">
              Day 2: What Is Blockchain? The Big Idea
            </Link>
            , and in{" "}
            <Link href={day6} className="text-gold hover:underline">
              Day 6: How a Crypto Transaction Actually Works
            </Link>
            , which follows a single transaction from start to finish.
          </p>
          <p className="mt-3">
            If you want a deeper, dedicated walkthrough of blockchain
            concepts beyond this beginner overview, see our{" "}
            <Link href="/blockchain" className="text-gold hover:underline">
              blockchain explained hub
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold text-white">
            Bitcoin vs Ethereum: what&rsquo;s the difference?
          </h2>
          <p className="mt-3">
            Bitcoin and Ethereum are the two cryptoassets you&rsquo;ll hear
            about most often, and beginners often assume they&rsquo;re
            basically the same thing with different names. They&rsquo;re not.
          </p>
          <p className="mt-3">
            Bitcoin was designed primarily as a form of digital money — a way
            to send value directly between people without a bank, with a
            fixed, predictable issuance schedule. Its rules are deliberately
            simple and very slow to change, which is part of the point: many
            people value Bitcoin precisely because its monetary policy is
            stable and hard to alter.
          </p>
          <p className="mt-3">
            Ethereum was built with a broader goal: rather than only moving
            value, it lets developers run small programs — called
            &ldquo;smart contracts&rdquo; — directly on the blockchain. Those
            programs are what power things like decentralised exchanges,
            lending platforms, and NFT marketplaces. Ethereum&rsquo;s own
            cryptoasset, ether (ETH), is used to pay the network&rsquo;s
            transaction ("gas") fees and to secure the network. In short:
            Bitcoin is largely optimised to be sound digital money; Ethereum
            is a general-purpose platform for building applications, with its
            own cryptoasset along the way. For a full breakdown of each, see{" "}
            <Link href={day4} className="text-gold hover:underline">
              Day 4: What Is Bitcoin?
            </Link>{" "}
            and{" "}
            <Link href={day5} className="text-gold hover:underline">
              Day 5: What Is Ethereum?
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold text-white">
            Wallets: how you actually hold crypto
          </h2>
          <p className="mt-3">
            This is where most beginners get confused, so it&rsquo;s worth
            being precise: a crypto &ldquo;wallet&rdquo; doesn&rsquo;t really
            store your coins the way a physical wallet stores cash. Your
            cryptoassets live on the blockchain itself. What a wallet actually
            holds is the private key — a secret piece of information that
            proves you control a particular address on that blockchain and
            lets you authorise transactions from it.
          </p>
          <p className="mt-3">
            Wallets broadly split into two categories. A &ldquo;hot&rdquo;
            wallet is connected to the internet — typically an app on your
            phone or a browser extension — which is convenient for everyday
            use but has a larger attack surface. A &ldquo;cold&rdquo; wallet
            keeps your private keys offline, usually on a dedicated hardware
            device, which is far more resistant to remote hacking, at the
            cost of being slightly less convenient to use day-to-day. Most
            people end up using a mix: a hot wallet for smaller, everyday
            amounts, and cold storage for anything they want to keep safe for
            the long term.
          </p>
          <p className="mt-3">
            Whichever you use, the single most important habit to build early
            is protecting your seed phrase — the list of words generated when
            you set up a wallet, which can restore full access to your funds.
            Anyone who sees that phrase can take everything the wallet holds,
            and nobody legitimate will ever need to ask you for it. We go into
            this properly, including practical setup steps, in{" "}
            <Link href={day8} className="text-gold hover:underline">
              Day 8: Hot Wallets vs Cold Wallets
            </Link>
            . For a broader look at staying safe more generally, visit our{" "}
            <Link href="/crypto-security" className="text-gold hover:underline">
              crypto security hub
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold text-white">
            How to buy your first crypto safely
          </h2>
          <p className="mt-3">
            For most beginners, the simplest and safest way in is a reputable
            centralised exchange (CEX) — a regulated platform that lets you
            exchange pounds for cryptoassets, in a similar way to using an
            online broker. You create an account, complete identity
            verification, deposit funds, and place an order. The exchange
            holds your crypto for you in its own systems unless and until you
            move it to a wallet you control.
          </p>
          <p className="mt-3">
            A few habits make this much safer in practice: use a strong,
            unique password and enable two-factor authentication on the
            exchange account; double-check the exact website address before
            logging in, since look-alike phishing sites are common; start
            with a small amount while you learn how everything works; and
            understand that moving funds off an exchange into your own wallet
            means you take on responsibility for keeping your keys safe. We
            cover exchanges and the full step-by-step buying process in{" "}
            <Link href={day15} className="text-gold hover:underline">
              Day 15: Centralised Exchanges (CEX) Explained
            </Link>{" "}
            and{" "}
            <Link href={day18} className="text-gold hover:underline">
              Day 18: Buying Your First Crypto, Step by Step
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold text-white">
            Common beginner mistakes and risks to avoid
          </h2>
          <p className="mt-3">
            Cryptoasset markets carry real risks, and a lot of the harm done
            to newcomers comes from a small set of avoidable mistakes rather
            than bad luck. Watch out for these in particular:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <span className="font-semibold text-white">
                Chasing hype instead of understanding what you&rsquo;re
                buying.
              </span>{" "}
              If you can&rsquo;t explain in a sentence what a project actually
              does, that&rsquo;s a sign to learn more before putting money in.
            </li>
            <li>
              <span className="font-semibold text-white">
                Storing your seed phrase digitally or sharing it with anyone.
              </span>{" "}
              Screenshots, cloud notes, and messages can all be compromised;
              treat your seed phrase like a physical key, never typed
              anywhere online.
            </li>
            <li>
              <span className="font-semibold text-white">
                Falling for urgency and &ldquo;guaranteed returns.&rdquo;
              </span>{" "}
              Scammers rely on pressure and promises of certain profit; no
              legitimate opportunity works that way.
            </li>
            <li>
              <span className="font-semibold text-white">
                Approving wallet transactions you don&rsquo;t understand.
              </span>{" "}
              Always read what a transaction is actually asking permission to
              do before you sign it.
            </li>
            <li>
              <span className="font-semibold text-white">
                Putting in more than you can afford to lose.
              </span>{" "}
              Cryptoasset prices can move sharply in both directions, and
              past performance says nothing reliable about the future.
            </li>
          </ul>
          <p className="mt-4 text-xs text-muted">
            Educational content only — not financial advice. Nothing on this
            page should be read as a recommendation to buy, sell, or hold any
            particular cryptoasset.
          </p>
        </section>

        <section className="card p-6">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gold">
            Continue learning
          </p>
          <h2 className="text-2xl font-extrabold text-white">
            Ready to go deeper, one day at a time?
          </h2>
          <p className="mt-3 text-muted">
            This guide only scratches the surface. The full 60-day course
            builds on these same ideas step by step, with a short daily
            lesson and a quiz to check you&rsquo;ve actually understood it
            before moving on.
          </p>
          <ul className="mt-4 space-y-1 text-sm">
            <li>
              &bull;{" "}
              <Link href={day1} className="text-gold hover:underline">
                Day 1 &mdash; What Is Money, and Why Does Crypto Exist?
              </Link>
            </li>
            <li>
              &bull;{" "}
              <Link href={day2} className="text-gold hover:underline">
                Day 2 &mdash; What Is Blockchain? The Big Idea
              </Link>
            </li>
            <li>
              &bull;{" "}
              <Link href={day8} className="text-gold hover:underline">
                Day 8 &mdash; Hot Wallets vs Cold Wallets
              </Link>
            </li>
            <li>
              &bull;{" "}
              <Link href={day18} className="text-gold hover:underline">
                Day 18 &mdash; Buying Your First Crypto, Step by Step
              </Link>
            </li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/signup" className="btn-primary">
              Start free &mdash; Days 1 &amp; 2
            </Link>
            <Link href="/pricing" className="btn-secondary">
              See pricing
            </Link>
          </div>
          <p className="mt-4 text-sm text-muted">
            &pound;5/month or a one-off &pound;50 &middot; No card needed to
            preview Days 1&ndash;2
          </p>
        </section>
      </div>
    </div>
  );
}
