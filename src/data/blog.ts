export interface BlogCategoryDef {
  slug: string;
  label: string;
  description: string;
}

export const BLOG_CATEGORIES: BlogCategoryDef[] = [
  {
    slug: "crypto-guides",
    label: "Crypto Guides",
    description: "Evergreen explainers covering the fundamentals: Bitcoin, blockchain, wallets, DeFi, and more.",
  },
  {
    slug: "crypto-security",
    label: "Crypto Security",
    description: "Practical guides on spotting scams, protecting your funds, and researching projects safely.",
  },
  {
    slug: "crypto-regulation",
    label: "Crypto Regulation",
    description: "How cryptocurrency is regulated, and what changes in the law actually mean for you.",
  },
  {
    slug: "crypto-news",
    label: "Crypto News",
    description: "What's happening in crypto, explained in plain English — not just headlines.",
  },
];

export function getBlogCategory(slug: string): BlogCategoryDef | undefined {
  return BLOG_CATEGORIES.find((c) => c.slug === slug);
}

export interface RelatedLink {
  label: string;
  href: string;
}

export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  description: string;
  /** ISO 8601 date, e.g. "2026-01-15" */
  publishedAt: string;
  /** Set (and keep current) for any post whose accuracy is time- or
   *  jurisdiction-sensitive, e.g. regulation or tax content. */
  updatedAt?: string;
  author: string;
  body: string[];
  relatedLinks?: RelatedLink[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-bitcoin",
    category: "crypto-guides",
    title: "What Is Bitcoin?",
    description:
      "A plain-English explainer on what Bitcoin actually is, how it works, and why it's different from the money you're used to.",
    publishedAt: "2026-10-06",
    author: "Insight Crypto Learning Team",
    body: [
      "Bitcoin is the first cryptocurrency, launched in January 2009 by a pseudonymous creator (or group) using the name Satoshi Nakamoto. At its core, it's a system for sending and receiving digital money directly between people, without a bank, payment processor, or government sitting in the middle.",
      "What makes that possible is a public, shared ledger called a blockchain. Every Bitcoin transaction ever made is recorded on it, and thousands of independent computers around the world (nodes) each hold a copy. Instead of trusting one institution to keep accurate books, the network relies on a process called mining: computers compete to validate new transactions and add them to the chain, and are rewarded with newly issued bitcoin for doing so correctly.",
      "That issuance isn't unlimited. Bitcoin's rules cap the total supply at 21 million coins, with the rate of new issuance cut in half roughly every four years (an event called \"the halving\"). This fixed, predictable, and very hard-to-change monetary policy is a big part of why many people treat Bitcoin as a form of \"digital scarcity\" — sometimes nicknamed digital gold — rather than just another payment app.",
      "It's worth being clear about what Bitcoin isn't. It isn't anonymous (every transaction is permanently visible on the public ledger, just not directly tied to your name). It isn't risk-free (its price has moved sharply in both directions throughout its history). And owning it isn't automatically the same as understanding it — holding bitcoin safely means understanding wallets, private keys, and the fact that a lost seed phrase means permanently lost funds, with no customer support line to call.",
      "If you're new to Bitcoin, the honest starting point is treating it as a genuinely new kind of asset with its own risks and responsibilities, not a faster version of your bank account. Understanding how it actually works — not just the price chart — is the difference between using it carefully and being an easy target.",
    ],
    relatedLinks: [
      { label: "Glossary: Bitcoin", href: "/crypto-glossary/bitcoin" },
      { label: "Day 4: What Is Bitcoin?", href: "/course/day-4-what-is-bitcoin" },
      { label: "Crypto for Beginners", href: "/crypto-for-beginners" },
    ],
  },
  {
    slug: "how-does-blockchain-work",
    category: "crypto-guides",
    title: "How Does Blockchain Work?",
    description:
      "How a blockchain actually stores and secures data, explained without the jargon — nodes, blocks, and consensus in plain English.",
    publishedAt: "2026-10-06",
    author: "Insight Crypto Learning Team",
    body: [
      "Strip away the hype, and a blockchain is a fairly simple idea: a shared record of transactions, copied across thousands of independent computers instead of stored on one company's server. Each new batch of transactions is grouped into a \"block\", and each block is cryptographically linked to the one before it — hence the name.",
      "That link is the important part. Because each block depends on the exact contents of the one before it, changing an old transaction would require redoing every block that came after it, on a majority of the network, simultaneously. In practice, on an established network, that's not realistic — which is what makes the history so difficult to quietly rewrite.",
      "But a shared ledger alone doesn't solve the hardest problem: how do thousands of strangers, who don't trust each other, agree on what the \"correct\" version of that ledger actually is? That's the job of a consensus mechanism. Bitcoin uses proof of work, where computers compete to solve a computationally expensive puzzle to earn the right to add the next block. Many newer networks, including Ethereum, use proof of stake instead, where validators lock up (stake) the network's own asset as a financial commitment to behaving honestly, and can lose it if they don't.",
      "Here's the part worth correcting early: \"it's on the blockchain\" doesn't automatically mean something is trustworthy, anonymous, or safe. A blockchain can only guarantee that a recorded transaction happened and hasn't been altered — it says nothing about whether the thing you're interacting with (a token, a smart contract, a project) is legitimate. That judgement is still entirely down to you.",
      "Understanding this one idea — a shared, tamper-resistant record maintained by many independent parties, with no central authority required — is genuinely the key that unlocks almost everything else in crypto, from how Bitcoin works to how DeFi protocols operate.",
    ],
    relatedLinks: [
      { label: "Glossary: Blockchain", href: "/crypto-glossary/blockchain" },
      { label: "Day 2: What Is Blockchain? The Big Idea", href: "/course/day-2-what-is-blockchain-the-big-idea" },
      { label: "Blockchain Explained", href: "/blockchain" },
    ],
  },
  {
    slug: "how-do-crypto-wallets-work",
    category: "crypto-guides",
    title: "How Do Crypto Wallets Work?",
    description:
      "What a crypto wallet actually stores, the difference between hot and cold storage, and why your seed phrase matters more than your password.",
    publishedAt: "2026-10-06",
    author: "Insight Crypto Learning Team",
    body: [
      "A crypto \"wallet\" is one of the most misleading names in the entire industry. It doesn't store your coins the way a physical wallet stores cash. Your cryptoassets exist as entries on the blockchain itself; what a wallet actually holds is your private key — a secret piece of data that proves you control a specific address and lets you authorise transactions from it.",
      "This distinction matters because it reframes the whole security question. You're not protecting \"coins\" from theft in the traditional sense — you're protecting a secret that grants control. Anyone who obtains your private key, or the seed phrase that backs it up, can move everything that address holds, instantly and irreversibly, with no bank to call and no chargeback process.",
      "Wallets broadly fall into two camps. A hot wallet is connected to the internet — an app on your phone, a browser extension — which is convenient for everyday use but has a larger attack surface, since it's reachable remotely. A cold wallet keeps your private keys offline entirely, typically on a dedicated hardware device, making it far more resistant to remote hacking at the cost of being slightly less convenient. Most experienced users split their holdings: a hot wallet for small, everyday amounts, and cold storage for anything they want to keep safe long term.",
      "There's also a distinction worth knowing between custodial and non-custodial wallets. When you hold crypto on an exchange, the exchange controls the private keys on your behalf — convenient, but it means you're trusting that company to keep your funds safe and to let you withdraw when you want to. A non-custodial wallet puts you in direct control of your own keys, with the independence (and full responsibility) that comes with it. Neither is universally \"better\" — they're different trade-offs between convenience and control.",
      "Whichever setup you use, one habit matters more than any other: protect your seed phrase. Write it down, store it offline, and never type it into a website, app, or message — no legitimate service will ever ask you for it. Losing it, or having it stolen, is the single most common way people lose everything in their wallet.",
    ],
    relatedLinks: [
      { label: "Glossary: Wallet", href: "/crypto-glossary/wallet" },
      { label: "Glossary: Seed Phrase", href: "/crypto-glossary/seed-phrase" },
      { label: "Day 8: Hot Wallets vs Cold Wallets", href: "/course/day-8-hot-wallets-vs-cold-wallets" },
      { label: "Crypto Security Guide", href: "/crypto-security" },
    ],
  },
  {
    slug: "what-is-defi",
    category: "crypto-guides",
    title: "What Is DeFi?",
    description:
      "DeFi (decentralised finance) explained: how it replaces banks and brokers with code, and the specific risks that come with that trade-off.",
    publishedAt: "2026-10-06",
    author: "Insight Crypto Learning Team",
    body: [
      "DeFi, short for decentralised finance, refers to financial services — trading, lending, borrowing, earning yield — built from smart contracts on a public blockchain, rather than run by a bank, broker, or other centralised institution. In principle, anyone with a wallet and an internet connection can access them directly, without opening an account or asking permission.",
      "The core building block is the smart contract: code deployed on a blockchain that runs automatically and exactly as written. A decentralised exchange, for example, uses smart contracts to let people trade directly from their own wallets, often pricing trades against a shared liquidity pool rather than matching individual buyers and sellers the way a traditional exchange does. Lending protocols work similarly — smart contracts hold collateral and manage loans according to fixed, transparent rules.",
      "It's genuinely useful technology, and it removes some traditional middlemen. But removing a middleman doesn't remove risk — it just changes its shape. DeFi has its own specific failure modes: a bug in a smart contract's code can be exploited exactly as reliably as its intended logic executes; there's no customer support line or chargeback if something goes wrong; and products can be far more complex, and far more leveraged, than they first appear.",
      "A few DeFi-specific terms are worth knowing before you use any of it. Impermanent loss is the risk of providing liquidity to a pool and ending up with less value than if you'd simply held the assets separately. Liquidation is what happens when a borrowed position's collateral falls below a required threshold and gets automatically sold off. And a rug pull is when a project's creators drain the funds and disappear — a risk that's higher in DeFi precisely because so little gatekeeping exists.",
      "None of this makes DeFi something to avoid outright — it makes it something to understand before you use it. Start small, read what you're actually signing before you approve a transaction, and treat any \"guaranteed yield\" claim with real scepticism.",
    ],
    relatedLinks: [
      { label: "Glossary: DeFi", href: "/crypto-glossary/defi" },
      { label: "Day 36: What Is DeFi?", href: "/course/day-36-what-is-defi" },
      { label: "DeFi Explained", href: "/defi" },
    ],
  },
  {
    slug: "what-are-stablecoins",
    category: "crypto-guides",
    title: "What Are Stablecoins?",
    description:
      "How stablecoins are designed to hold a steady value, the different ways they're backed, and why \"stable\" is a goal, not a guarantee.",
    publishedAt: "2026-10-06",
    author: "Insight Crypto Learning Team",
    body: [
      "Most cryptoassets are known for one thing above all else: volatility. A stablecoin is a deliberate exception — a cryptoasset engineered to hold a steady value, almost always pegged to a traditional currency like the US dollar, so that one unit is intended to always be worth close to one dollar.",
      "Stablecoins exist to solve a practical problem. Cryptoasset prices can move sharply within hours, which makes them awkward for everyday use as a medium of exchange, or as a stable place to park funds between trades. A stablecoin lets people move value around crypto markets, or send money across borders, without constantly converting back to traditional currency and without the price risk of holding a volatile asset.",
      "Not all stablecoins maintain their peg the same way, and the difference matters. Fiat-backed stablecoins hold reserves of cash and cash-equivalent assets, roughly equal to the number of coins in circulation. Crypto-backed stablecoins are collateralised by other cryptoassets, usually over-collateralised to absorb price swings. Algorithmic stablecoins try to maintain their peg through code and market incentives rather than holding reserves directly — a model that has proven considerably more fragile in practice, with several algorithmic stablecoins losing their peg entirely in the past.",
      "\"Stable\" describes the design goal, not a guarantee. Before relying on any specific stablecoin, it's worth understanding how it's actually backed, who holds the reserves (if any), and how that backing is verified — the same due-diligence habit that applies to any other cryptoasset.",
    ],
    relatedLinks: [
      { label: "Glossary: Stablecoin", href: "/crypto-glossary/stablecoin" },
      { label: "Day 42: Stablecoins Explained", href: "/course/day-42-stablecoins-explained" },
      { label: "DeFi Explained", href: "/defi" },
    ],
  },
  {
    slug: "what-is-tokenisation",
    category: "crypto-guides",
    title: "What Is Tokenisation?",
    description:
      "What it actually means to \"tokenise\" an asset, how it differs from simply owning a cryptocurrency, and why the legal backing matters more than the token.",
    publishedAt: "2026-10-06",
    author: "Insight Crypto Learning Team",
    body: [
      "Tokenisation means representing ownership of, or a claim on, something as a token on a blockchain. That something can be almost anything: a share of property, a bond, a piece of art, a loyalty point, or a purely digital collectible. The token itself is usually created using an existing blockchain's standard (most commonly one of Ethereum's token standards), rather than requiring an entirely new network.",
      "It helps to separate two different ideas that get blurred together. A cryptocurrency like Bitcoin or Ether is a native asset of its own network, with no external \"real world\" object behind it. A tokenised asset, by contrast, is a digital representation of something that exists (or is meant to exist) outside the blockchain — a real-world asset, in industry shorthand. The appeal is straightforward: tokenisation can make an otherwise illiquid or hard-to-divide asset, like a building, easier to trade, transfer, or split into smaller ownership stakes.",
      "Here's the part that's genuinely important and often skipped over: owning a token that claims to represent an asset is not automatically the same as owning that asset. The token is only as reliable as the legal and custodial arrangement standing behind it. If there's no enforceable legal structure connecting the token to the underlying asset, the token may ultimately prove to be a claim on nothing. Verifying that arrangement — not just checking that the token exists on-chain — is the real due-diligence step.",
      "Tokenisation is a genuinely promising use of blockchain technology, and interest in it has grown substantially as both crypto-native platforms and traditional financial institutions experiment with it. But as with most of crypto, the technology solves the easy part (representing a claim digitally); the hard part — making that claim legally and practically enforceable — still depends entirely on the people and institutions behind it.",
    ],
    relatedLinks: [
      { label: "Glossary: Token", href: "/crypto-glossary/token" },
      { label: "Glossary: RWA (Real-World Asset)", href: "/crypto-glossary/rwa" },
      { label: "Day 33: ERC-20 Tokens Explained", href: "/course/day-33-erc-20-tokens-explained" },
    ],
  },
];

export function getBlogPost(category: string, slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.category === category && p.slug === slug);
}

export function postsInCategory(category: string): BlogPost[] {
  return sortedBlogPosts().filter((p) => p.category === category);
}

export function sortedBlogPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}
