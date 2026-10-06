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
  {
    slug: "how-to-spot-a-crypto-scam",
    category: "crypto-security",
    title: "How to Spot a Crypto Scam",
    description:
      "The warning signs that show up across almost every crypto scam, and a simple framework for pausing before you lose money.",
    publishedAt: "2026-10-06",
    author: "Insight Crypto Learning Team",
    body: [
      "Crypto scams take dozens of different forms, but most of them share the same small set of warning signs underneath. Learning to recognise the pattern matters far more than memorising every specific scam you'll ever encounter, because new variations appear constantly while the underlying tactics barely change.",
      "Urgency is the first and most reliable flag. Scammers want you acting before you think — a price \"about to explode\", a slot that's \"about to close\", an account that will be \"permanently locked\" unless you act now. Genuine opportunities and genuine problems can almost always wait long enough for you to verify them independently.",
      "Guaranteed returns are the second. No legitimate investment — crypto or otherwise — can promise a fixed, guaranteed profit. Markets carry real risk; anyone claiming otherwise is either lying or doesn't understand what they're offering, and neither is someone you should be sending money to.",
      "Unsolicited contact is the third. A message from a stranger on Telegram, Discord, or social media offering trading help, a \"guaranteed\" signal group, or an investment opportunity is overwhelmingly more likely to be a scam than a genuine opportunity — legitimate opportunities rarely need to cold-message strangers to find participants.",
      "And the request itself is often the clearest tell of all: being asked to send crypto first to \"unlock\" a larger return, being asked for your seed phrase to \"verify\" your wallet, or being asked to download unfamiliar software to \"claim\" something. None of these are things any legitimate platform, project, or support team will ever genuinely need from you.",
      "The practical habit worth building is simple: when something feels exciting or urgent, treat that feeling itself as a signal to slow down, not speed up. Verify independently, through a channel you found yourself — never one that was handed to you — before you act.",
    ],
    relatedLinks: [
      { label: "Day 12: Common Crypto Scams & How to Spot Them", href: "/course/day-12-common-crypto-scams-how-to-spot-them" },
      { label: "10 Common Crypto Scams", href: "/blog/crypto-security/10-common-crypto-scams" },
      { label: "Crypto Security Guide", href: "/crypto-security" },
    ],
  },
  {
    slug: "10-common-crypto-scams",
    category: "crypto-security",
    title: "10 Common Crypto Scams",
    description:
      "A field guide to the scam patterns newcomers run into most often, from fake giveaways to pig-butchering schemes.",
    publishedAt: "2026-10-06",
    author: "Insight Crypto Learning Team",
    body: [
      "Most crypto scams fall into a handful of recognisable categories. Knowing the names and mechanics of the common ones makes it much easier to spot a new example, even dressed up differently.",
      "Phishing sites and fake apps impersonate a real wallet, exchange, or project to trick you into entering your seed phrase or approving a malicious transaction. Fake giveaways promise to \"double\" any crypto sent to a given address, often impersonating a celebrity or official account. Rug pulls happen when a project's creators drain its liquidity or abandon it entirely, leaving holders with a worthless token.",
      "Pig-butchering scams build a long-term relationship, often romantic or friendly, over weeks or months, before introducing a fake \"investment platform\" and encouraging increasingly large deposits. Fake exchanges and trading platforms show convincing but entirely fabricated balances and profits, right up until you try to withdraw. Impersonation scams pose as customer support, a well-known figure, or a project's official team member to extract funds or credentials directly.",
      "Ponzi and high-yield investment schemes pay early participants using money from new participants, collapsing once recruitment slows — a structure that eventually fails by mathematical necessity, however convincing it looks in the early stages. Fake mining or staking platforms promise fixed daily returns from hardware or validators that typically don't exist. SIM-swap attacks hijack your phone number to intercept two-factor authentication codes and take over linked accounts. And pump-and-dump groups coordinate buying a low-value token to inflate its price, then sell into the resulting rally, leaving later buyers holding the loss.",
      "None of these require sophisticated technical knowledge to avoid — they rely on urgency, trust, and emotion, not on you misunderstanding the technology. Recognising the pattern, and slowing down whenever you notice one, is most of the defence.",
    ],
    relatedLinks: [
      { label: "How to Spot a Crypto Scam", href: "/blog/crypto-security/how-to-spot-a-crypto-scam" },
      { label: "What Is a Rug Pull?", href: "/blog/crypto-security/what-is-a-rug-pull" },
      { label: "Day 12: Common Crypto Scams & How to Spot Them", href: "/course/day-12-common-crypto-scams-how-to-spot-them" },
    ],
  },
  {
    slug: "what-is-a-rug-pull",
    category: "crypto-security",
    title: "What Is a Rug Pull?",
    description:
      "How rug pulls actually work, the difference between a hard rug and a slow rug, and the warning signs that show up before the funds disappear.",
    publishedAt: "2026-10-06",
    author: "Insight Crypto Learning Team",
    body: [
      "A rug pull is when a crypto project's creators abruptly withdraw funds, abandon development, or otherwise exit with investors' money, leaving a token that's collapsed in value or become untradeable. The name comes from the idiom \"pulling the rug out\" — the floor disappears with no warning.",
      "There are two broad patterns. A hard rug pull happens fast and deliberately: the team drains the project's liquidity pool in a single transaction, or uses a hidden function in the token's contract to mint and sell an enormous new supply, crashing the price to near zero within minutes. A slow rug pull is subtler — the team quietly stops development, stops engaging with the community, and sells off their own holdings gradually, so the token fades away rather than collapsing instantly.",
      "Certain warning signs show up before most rug pulls, though none of them guarantee one is coming. An anonymous team with no verifiable track record is a real risk factor, not a neutral detail. Liquidity that isn't genuinely locked (or where the \"lock\" can't be independently verified on-chain) leaves the door open for an instant hard rug. A token contract with functions that let the owner mint unlimited new supply, or pause other holders' ability to sell, hands the team a technical ability to rug regardless of their stated intentions. And aggressive hype with very little substantive product behind it is a pattern worth real scepticism.",
      "Before putting money into a new or small-cap token, it's worth doing the boring checks: look up the contract address on a block explorer, check whether liquidity is actually locked and for how long, see whether the contract has been independently audited, and search for the team's identity and track record outside the project's own marketing. None of this is foolproof, but it catches a meaningful share of the worst cases.",
    ],
    relatedLinks: [
      { label: "Glossary: Rug Pull", href: "/crypto-glossary/rug-pull" },
      { label: "How to Check a Crypto Contract Address", href: "/blog/crypto-security/how-to-check-a-crypto-contract-address" },
      { label: "How to Research a New Crypto Project", href: "/blog/crypto-security/how-to-research-a-new-crypto-project" },
    ],
  },
  {
    slug: "how-crypto-phishing-works",
    category: "crypto-security",
    title: "How Crypto Phishing Works",
    description:
      "The specific mechanics behind crypto phishing attacks — fake sites, malicious approvals, and clipboard hijacking — and how to defend against each.",
    publishedAt: "2026-10-06",
    author: "Insight Crypto Learning Team",
    body: [
      "Phishing in crypto works the same way it does everywhere else — tricking you into handing over something sensitive by impersonating something trustworthy — but the specific techniques are worth understanding, because the damage is instant and irreversible once it happens.",
      "The most direct version is a fake wallet or exchange login page, often reached through a sponsored search ad or a link in a direct message, built to look identical to the real thing. Entering your seed phrase or password there sends it straight to the attacker. The defence is simple but easy to forget under pressure: never type your seed phrase into any website, ever, under any circumstances — no legitimate wallet interface ever asks for it.",
      "A more modern and more dangerous version is the malicious approval request. Instead of asking for your seed phrase directly, a fake dApp prompts your wallet to sign a transaction that looks routine but actually grants the attacker's contract permission to move tokens from your wallet — sometimes immediately, sometimes at a later date the attacker chooses. This is why reading what a transaction is actually requesting, not just clicking \"confirm\" out of habit, matters every single time, not just the first time.",
      "Clipboard hijacking malware is another variant: software quietly monitors your clipboard, and when it detects you've copied a wallet address, silently swaps it for the attacker's address before you paste it. Always double-check the full destination address after pasting it, especially for larger transfers.",
      "And a simpler but still effective tactic is fake customer support — accounts that reply to your public complaint on social media offering to \"help\", then move the conversation to direct messages and ask for your seed phrase or remote access to your device. Genuine support teams for reputable platforms don't operate this way, and never need your seed phrase to help with an account issue.",
    ],
    relatedLinks: [
      { label: "Day 13: Phishing, Fake Apps & Social Engineering", href: "/course/day-13-phishing-fake-apps-social-engineering" },
      { label: "How to Avoid Fake Crypto Websites", href: "/blog/crypto-security/how-to-avoid-fake-crypto-websites" },
      { label: "How to Protect Your Seed Phrase", href: "/blog/crypto-security/how-to-protect-your-seed-phrase" },
    ],
  },
  {
    slug: "how-to-protect-your-seed-phrase",
    category: "crypto-security",
    title: "How to Protect Your Seed Phrase",
    description:
      "Practical, concrete steps for storing your wallet's seed phrase safely — and the common mistakes that undo all of them.",
    publishedAt: "2026-10-06",
    author: "Insight Crypto Learning Team",
    body: [
      "Your seed phrase — the list of words generated when you set up a wallet — can restore full access to everything that wallet holds, on any device, with no further verification needed. Protecting it properly isn't optional extra caution; it's the single most important security habit in crypto.",
      "Start with where it should never go. Never type it into a website or app, including a wallet's own interface after initial setup — a genuine wallet only asks for it once, during creation or recovery. Never store it in a cloud note, email, messaging app, or photo — all of these can be breached remotely, often without you ever knowing. Never share it with anyone claiming to be customer support; no legitimate platform's support staff need it to help you.",
      "The standard, low-tech approach is still the most reliable for most people: write it on paper, by hand, and store that paper somewhere secure and private — not somewhere obviously labelled \"crypto\" or \"passwords\". Some people go further and stamp it into metal, which survives fire and water damage that paper doesn't. Whichever method you use, consider keeping a second copy in a separate physical location, in case of fire, flood, or theft at the first.",
      "For larger holdings, it's worth knowing that more advanced setups exist. A multisignature (multisig) wallet requires several separate keys to authorise a transaction, so no single compromised seed phrase is enough on its own. Shamir's Secret Sharing splits a single seed into multiple fragments, requiring a minimum number of them to reconstruct the original. These add real complexity, so they're generally worth the effort only once the amount at risk justifies it.",
      "Whatever method you choose, the test is the same: could someone who found this seed phrase move your funds? If the honest answer is yes, the storage isn't secure enough yet, regardless of how careful you otherwise feel.",
    ],
    relatedLinks: [
      { label: "Glossary: Seed Phrase", href: "/crypto-glossary/seed-phrase" },
      { label: "Day 9: Private Keys & Seed Phrases", href: "/course/day-9-private-keys-seed-phrases" },
      { label: "How Do Crypto Wallets Work?", href: "/blog/crypto-guides/how-do-crypto-wallets-work" },
    ],
  },
  {
    slug: "how-to-check-a-crypto-contract-address",
    category: "crypto-security",
    title: "How to Check a Crypto Contract Address",
    description:
      "How to verify you're interacting with a genuine token or contract, not a convincing fake with a similar name or address.",
    publishedAt: "2026-10-06",
    author: "Insight Crypto Learning Team",
    body: [
      "Anyone can create a token with any name and symbol they like — including one that copies a popular, legitimate project exactly. The only reliable way to know you're holding or trading the genuine article is to verify the contract address itself, not just the name shown in an app or search result.",
      "Start at the source: the project's own official website, documentation, or verified social media account should publish its real contract address. Copy it from there directly, rather than trusting whatever a wallet's search function or a third-party site surfaces first — fake tokens routinely copy a real project's name, logo, and symbol exactly.",
      "A block explorer (the tool for the relevant network — for example Etherscan for Ethereum) lets you look up that address directly and see whether the contract is \"verified\", meaning its source code has been published and matches what's actually deployed. An unverified contract isn't automatically a scam, but it does mean you can't independently inspect what it actually does, which is a meaningfully higher-risk position to be in.",
      "Watch out for address poisoning too: scammers sometimes create a wallet address that looks similar to one you've transacted with before — matching the first and last few characters, which is often all people glance at — then send a tiny, unsolicited transaction from it, hoping you'll copy it from your transaction history by mistake later. Always verify a full address character by character for any transaction that matters, not just the start and end.",
      "Checking a contract address takes a couple of minutes. Losing funds to a fake token takes seconds and is permanent. The asymmetry is the entire argument for making this a habit, not an occasional precaution.",
    ],
    relatedLinks: [
      { label: "What Is a Rug Pull?", href: "/blog/crypto-security/what-is-a-rug-pull" },
      { label: "Day 12: Common Crypto Scams & How to Spot Them", href: "/course/day-12-common-crypto-scams-how-to-spot-them" },
      { label: "Crypto Security Guide", href: "/crypto-security" },
    ],
  },
  {
    slug: "how-to-research-a-new-crypto-project",
    category: "crypto-security",
    title: "How to Research a New Crypto Project",
    description:
      "A practical due-diligence framework for evaluating a crypto project critically, before you put any money into it.",
    publishedAt: "2026-10-06",
    author: "Insight Crypto Learning Team",
    body: [
      "Most harm done to newcomers in crypto doesn't come from sophisticated attacks — it comes from putting money into a project without doing the basic checks first. Genuine research takes longer than reading a few social media posts, but it's not complicated once you know what to actually look for.",
      "Start with the team. Are real people, with names and verifiable track records, publicly associated with the project? An anonymous team isn't automatically disqualifying — some legitimate projects have anonymous founders — but it does remove a layer of accountability, and should raise the bar for everything else you check.",
      "Read the actual documentation, not just the marketing. A legitimate project can usually explain, in reasonably specific terms, what problem it solves and how. Vague language, excessive buzzwords, and documentation that reads more like a sales pitch than a technical explanation are worth noticing.",
      "Check the tokenomics: how many tokens exist, how they're distributed, and whether the team holds a large share with little or no lock-up period — a structure that lets them sell into early demand regardless of the project's long-term success. Look for independent smart contract audits, and read enough of the summary to understand what was actually tested, rather than just noting that an audit exists.",
      "Be careful how you weigh community size and social proof. A large, enthusiastic community doesn't verify a project — it can be bought, and even when genuine, enthusiasm isn't evidence of technical or financial soundness. Treat hype as something to investigate further, not as a substitute for your own research.",
      "None of these checks guarantee a project is legitimate. But doing them consistently, and walking away when the answers are evasive or missing entirely, filters out a significant share of the projects that go on to fail or turn out to be scams.",
    ],
    relatedLinks: [
      { label: "What Is a Rug Pull?", href: "/blog/crypto-security/what-is-a-rug-pull" },
      { label: "How to Check a Crypto Contract Address", href: "/blog/crypto-security/how-to-check-a-crypto-contract-address" },
      { label: "Crypto Security Guide", href: "/crypto-security" },
    ],
  },
  {
    slug: "how-to-avoid-fake-crypto-websites",
    category: "crypto-security",
    title: "How to Avoid Fake Crypto Websites",
    description:
      "Practical habits for making sure you're on the genuine wallet, exchange, or project website — not a convincing lookalike.",
    publishedAt: "2026-10-06",
    author: "Insight Crypto Learning Team",
    body: [
      "Fake crypto websites — convincing copies of real wallets, exchanges, and project pages — are one of the most common ways people lose funds, precisely because they don't require tricking the technology, only the person looking at the screen.",
      "The single most reliable habit is to never rely on a search engine or a link in a message to reach a site that touches your funds. Search ads are routinely bought by scammers impersonating popular platforms, sometimes ranking above the genuine result. Instead, bookmark the official URLs you use regularly once you've verified them, and navigate from those bookmarks every time.",
      "When you do need to find a new site, verify it through multiple independent sources — the project's official, verified social media accounts, cross-checked against each other — rather than trusting a single link someone sent you. Read the URL carefully, character by character: typosquatting (a near-identical domain with one letter swapped, added, or a different extension) is extremely common and easy to miss at a glance.",
      "A padlock icon or \"https\" in the address bar means the connection is encrypted — it does not mean the site is legitimate. Scam sites can and do have valid security certificates; this check tells you nothing about who actually owns the site.",
      "Finally, treat any site that asks you to connect your wallet or enter your seed phrase as higher stakes than ordinary browsing. If anything feels slightly off — an unfamiliar design, a permission request that seems broader than it should be, pressure to act quickly — stop and verify independently before continuing, even if it means missing a time-limited offer. A missed opportunity costs you nothing; a connected wallet to a malicious site can cost you everything in it.",
    ],
    relatedLinks: [
      { label: "How Crypto Phishing Works", href: "/blog/crypto-security/how-crypto-phishing-works" },
      { label: "Day 13: Phishing, Fake Apps & Social Engineering", href: "/course/day-13-phishing-fake-apps-social-engineering" },
      { label: "Crypto Security Guide", href: "/crypto-security" },
    ],
  },
  {
    slug: "what-is-the-clarity-act-supposed-to-solve",
    category: "crypto-regulation",
    title: "What Is the CLARITY Act Supposed to Solve?",
    description:
      "The problem the US CLARITY Act is trying to fix — unclear regulatory jurisdiction over digital assets — and where the bill actually stands.",
    publishedAt: "2026-10-06",
    updatedAt: "2026-10-06",
    author: "Insight Crypto Learning Team",
    body: [
      "The CLARITY Act — formally the Digital Asset Market Clarity Act — is a piece of United States legislation, not UK law. It's worth understanding anyway, because so much of the crypto industry (major exchanges, issuers, and infrastructure providers) operates in or is shaped by the US market, and because the specific problem it's trying to solve shows up, in different forms, in most countries that haven't yet settled how to regulate digital assets.",
      "That problem, in plain terms: for years, nobody — including the industry itself — has had a reliable answer to \"which US regulator actually has authority over this token, and what rules apply to it?\" The Securities and Exchange Commission (SEC) has generally treated most digital assets as securities, applying a legal test built decades ago for things like company shares. Critics, across the industry and in Congress, argue that test fits awkwardly onto decentralised networks, and that the result has been \"regulation by enforcement\" — the SEC suing exchanges and projects after the fact, rather than setting out clear rules in advance that a business could actually follow.",
      "The CLARITY Act's core fix is to draw a clearer jurisdictional line. It proposes a defined category of \"digital commodity\" for tokens built on sufficiently decentralised networks, placing them under the Commodity Futures Trading Commission (CFTC) — the regulator that already oversees commodities like oil and wheat — rather than the SEC's securities regime. It sets out a test for when a token has \"matured\" from an early, centrally-controlled fundraising stage into a genuinely decentralised network no longer meaningfully controlled by one team. And it lays out registration, disclosure, and customer-protection requirements for the exchanges, brokers, and custodians that handle these assets — addressing gaps that became painfully visible when FTX collapsed in 2022, such as keeping customer funds properly segregated from a platform's own.",
      "The ambition behind it is straightforward: give US-based crypto businesses enough legal certainty to operate domestically instead of relocating offshore, let institutional investors participate with clearer compliance obligations, and give ordinary users baseline consumer protections that are currently patched together unevenly, platform by platform.",
      "As of 6 October 2026, the CLARITY Act is not yet law. It passed the House of Representatives in July 2025 with bipartisan support (294–134), and cleared the Senate Banking Committee in May 2026. But a Senate procedural vote to advance the bill failed on 15 September 2026, falling short — 49 to 50 — of the 60 votes needed, with opposition cutting across party lines. Negotiations are continuing over several disputed points, including ethics provisions, stablecoin-related yield rules, and anti-money-laundering requirements. Its final shape, and whether it passes at all, could still change substantially.",
      "Because this is moving legislation, treat the status above as a snapshot, not a permanent fact. For the current text and status, the authoritative source is Congress's own bill tracker at congress.gov, not this page or any single news article.",
    ],
    relatedLinks: [
      { label: "Crypto Regulation", href: "/crypto-regulation" },
      { label: "Day 57: Crypto Regulation: UK & FCA Overview", href: "/course/day-57-crypto-regulation-uk-fca-overview" },
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
