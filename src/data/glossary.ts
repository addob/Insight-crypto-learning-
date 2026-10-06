export interface GlossaryEntry {
  slug: string;
  term: string;
  shortDefinition: string;
  body: string[];
  relatedDays: number[];
}

export const glossary: GlossaryEntry[] = [
  {
    slug: "bitcoin",
    term: "Bitcoin",
    shortDefinition:
      "The first and largest cryptocurrency, created in 2009 as decentralised, peer-to-peer digital money with a fixed total supply.",
    body: [
      "Bitcoin (BTC) is the original cryptocurrency, launched in 2009 by the pseudonymous Satoshi Nakamoto. It introduced the first working combination of a public, decentralised blockchain and a consensus mechanism (proof of work) that let strangers agree on a shared transaction history without a bank or government in the middle.",
      "Bitcoin's monetary policy is deliberately simple and slow to change: a hard cap of 21 million coins, a fixed and predictable issuance schedule, and a network that prioritises security and stability over flexibility. That's a large part of why many people treat it primarily as a form of digital, scarce money rather than a general-purpose computing platform.",
    ],
    relatedDays: [4, 22, 23, 26],
  },
  {
    slug: "blockchain",
    term: "Blockchain",
    shortDefinition:
      "A shared, append-only digital ledger, copied across many independent computers instead of stored in one central place.",
    body: [
      "A blockchain is a record of transactions grouped into \"blocks\", each cryptographically linked to the one before it, forming a chain. Thousands of independent computers (nodes) hold a copy of this ledger and follow shared rules to agree on what's valid, which is what makes the history extremely difficult to tamper with after the fact.",
      "The key idea isn't the word \"blockchain\" itself, but what it enables: a group of people who don't know or trust each other can still maintain an accurate, shared record of who owns what, without relying on a single company or institution to keep the books honestly.",
    ],
    relatedDays: [2, 6],
  },
  {
    slug: "altcoin",
    term: "Altcoin",
    shortDefinition:
      "Any cryptocurrency other than Bitcoin — short for \"alternative coin\".",
    body: [
      "\"Altcoin\" is a loose catch-all term for any cryptocurrency that isn't Bitcoin — from large, established networks like Ethereum, to thousands of smaller, less proven projects. The term says nothing about quality or legitimacy on its own; it's purely a category based on not being Bitcoin.",
      "Because the altcoin category spans everything from major infrastructure projects to speculative tokens with little real usage, treating \"altcoin\" as a single investment class is a common beginner mistake. Each project needs to be evaluated on its own merits.",
    ],
    relatedDays: [4, 5],
  },
  {
    slug: "token",
    term: "Token",
    shortDefinition:
      "A cryptoasset built on top of an existing blockchain, rather than having its own independent network.",
    body: [
      "A token is a digital asset created using the rules of another blockchain's programming environment — most commonly Ethereum's ERC-20 standard — rather than running on its own dedicated network the way Bitcoin or Ethereum's native coin does. This makes tokens relatively cheap and standardised to create.",
      "Tokens can represent all sorts of things: a currency-like asset, a share of voting rights in a project (governance), access to a service, or a claim on a real-world or digital asset. The word \"token\" describes how the asset was built, not what it's meant to represent.",
    ],
    relatedDays: [33],
  },
  {
    slug: "coin",
    term: "Coin",
    shortDefinition:
      "A cryptoasset that's native to its own independent blockchain, such as Bitcoin (BTC) or Ether (ETH).",
    body: [
      "A coin is the native cryptoasset of its own blockchain — it's used to pay transaction fees and secure the network that it runs on. Bitcoin (on the Bitcoin network) and Ether (on Ethereum) are both coins in this sense.",
      "This is the usual distinction drawn between a \"coin\" and a \"token\": a coin has its own underlying blockchain, while a token is built on top of someone else's. In everyday conversation people often use the two words interchangeably, but the distinction is useful once you're reading technical material.",
    ],
    relatedDays: [4, 5],
  },
  {
    slug: "wallet",
    term: "Wallet",
    shortDefinition:
      "Software or hardware that stores your private keys and lets you authorise transactions — it doesn't actually hold your coins.",
    body: [
      "A crypto wallet doesn't store your coins the way a physical wallet stores cash. Your cryptoassets exist as entries on the blockchain itself; what a wallet actually holds is the private key that proves you control a particular address and lets you sign (authorise) transactions from it.",
      "Wallets are broadly split into \"hot\" wallets (connected to the internet, convenient but more exposed) and \"cold\" wallets (kept offline, usually on a dedicated hardware device, far more resistant to remote attacks). Which you use — and for how much — is one of the most important practical security decisions a new crypto user makes.",
    ],
    relatedDays: [8, 10, 11],
  },
  {
    slug: "private-key",
    term: "Private Key",
    shortDefinition:
      "A secret piece of data that proves ownership of a wallet address and is required to authorise any transaction from it.",
    body: [
      "A private key is a large, randomly generated secret number that mathematically corresponds to a public wallet address. Whoever holds the private key can sign transactions from that address — effectively, whoever holds it controls the funds, regardless of who originally set the wallet up.",
      "Private keys are almost never handled directly by users; instead they're generated and protected by wallet software, and backed up via a seed phrase. Anyone who obtains your private key or seed phrase can move your funds, and no legitimate service will ever ask you to share either.",
    ],
    relatedDays: [9],
  },
  {
    slug: "seed-phrase",
    term: "Seed Phrase",
    shortDefinition:
      "A list of (usually 12 or 24) words generated when you set up a wallet, which can restore full access to its funds.",
    body: [
      "A seed phrase (also called a recovery phrase) is a human-readable backup of your wallet's private keys, generated once when the wallet is first created. Anyone who has it can recreate your wallet and move everything it controls, on any device, with no further verification needed.",
      "The standard advice is to write a seed phrase down on paper (or stamp it in metal) and store it offline, never typed into a phone, computer, cloud note, or sent in a message. Treat it exactly like a physical key to a safe — because functionally, that's what it is.",
    ],
    relatedDays: [9, 11],
  },
  {
    slug: "gas-fee",
    term: "Gas Fee",
    shortDefinition:
      "The transaction fee paid to a blockchain network (most commonly Ethereum) to have a transaction processed.",
    body: [
      "On networks like Ethereum, \"gas\" is the unit used to measure the computational work a transaction requires, and the gas fee is what you pay — in the network's native currency — to get that transaction included in a block. More complex transactions (like interacting with a smart contract) typically cost more gas than a simple transfer.",
      "Gas fees rise and fall with network demand: when lots of people are transacting at once, fees go up, because block space is limited and users are effectively bidding for inclusion. This is one reason scaling solutions like Layer 2 networks exist.",
    ],
    relatedDays: [30],
  },
  {
    slug: "slippage",
    term: "Slippage",
    shortDefinition:
      "The difference between a trade's expected price and the price it actually executes at, common on decentralised exchanges.",
    body: [
      "Slippage happens when the price you actually get for a trade differs from the price you expected when you submitted it — usually because the market (or a liquidity pool's balance) moved between the moment you placed the order and the moment it executed.",
      "On decentralised exchanges using automated market makers, larger trades relative to a pool's size cause more slippage, since the trade itself shifts the pool's pricing. Most DEX interfaces let you set a maximum acceptable slippage; setting it too high leaves you open to a worse-than-expected price, while setting it too low can cause transactions to fail during volatile periods.",
    ],
    relatedDays: [16, 37],
  },
  {
    slug: "liquidity",
    term: "Liquidity",
    shortDefinition:
      "How easily an asset can be bought or sold without significantly moving its price.",
    body: [
      "Liquidity describes how readily an asset can be traded at a stable, predictable price. A highly liquid market has many buyers and sellers and deep order books (or large liquidity pools), so even sizeable trades don't move the price much. A thin, illiquid market can see large price swings from relatively small trades.",
      "In decentralised finance specifically, \"liquidity\" often refers to the funds locked in a liquidity pool, which other users trade against. Liquidity is one of the most important practical factors to understand before trading any asset, especially smaller or newer tokens.",
    ],
    relatedDays: [38],
  },
  {
    slug: "market-cap",
    term: "Market Cap",
    shortDefinition:
      "A cryptoasset's circulating supply multiplied by its current price — a common (but imperfect) size metric.",
    body: [
      "Market capitalisation (market cap) is calculated as current price multiplied by circulating supply, giving a rough sense of an asset's total market size. It's widely used to rank and compare cryptoassets, similar to how it's used for public companies.",
      "Market cap has real limitations worth knowing: it can be manipulated by projects with low liquidity, and it doesn't tell you anything about how much real trading volume, usage, or liquidity actually backs that number. A large market cap on paper doesn't automatically mean you could sell a large position without moving the price significantly.",
    ],
    relatedDays: [21],
  },
  {
    slug: "smart-contract",
    term: "Smart Contract",
    shortDefinition:
      "Self-executing code deployed on a blockchain, which runs automatically and exactly as written when its conditions are met.",
    body: [
      "A smart contract is a program stored and executed on a blockchain. Once deployed, it runs exactly as written — there's no customer support team that can override it, and (on most networks) its code can't be quietly changed afterward. This is what powers decentralised exchanges, lending platforms, NFT marketplaces, and most of DeFi.",
      "\"Smart contract\" is a slightly misleading name: it's not legally smart and not a contract in the traditional sense, it's simply code that executes automatically. That also means bugs or oversights in the code are real risks — a contract will faithfully execute a mistake just as reliably as it executes the intended logic, which is why independent audits matter.",
    ],
    relatedDays: [31],
  },
  {
    slug: "dapp",
    term: "dApp",
    shortDefinition:
      "A \"decentralised application\" — a front end that connects to smart contracts on a blockchain instead of a private company's servers.",
    body: [
      "A dApp (decentralised application) typically looks like an ordinary website or app, but instead of talking to a private company's backend servers, its core logic runs on smart contracts deployed on a public blockchain. The front end you see in your browser is just an interface to that on-chain logic.",
      "This distinction matters for security: a convincing-looking front end can still connect to a malicious or fake contract, so verifying you're interacting with the genuine, audited contract behind a dApp is a real and important step, not a formality.",
    ],
    relatedDays: [32],
  },
  {
    slug: "defi",
    term: "DeFi",
    shortDefinition:
      "\"Decentralised finance\" — financial services (trading, lending, borrowing) built from smart contracts instead of banks or brokers.",
    body: [
      "DeFi (decentralised finance) refers to financial applications — exchanges, lending markets, savings products, derivatives — built on public blockchains using smart contracts, rather than run by a bank, broker, or other centralised institution. In principle, anyone with a wallet and an internet connection can access them directly.",
      "DeFi removes some traditional middlemen, but it introduces its own specific risks: smart contract bugs, no customer support or chargebacks, exposure to extreme volatility, and products that can be far more complex than they first appear. It's genuinely useful technology, not automatically a safer or more profitable alternative to traditional finance.",
    ],
    relatedDays: [36],
  },
  {
    slug: "dex",
    term: "DEX",
    shortDefinition:
      "A \"decentralised exchange\" — a trading platform run by smart contracts, where you trade directly from your own wallet.",
    body: [
      "A DEX (decentralised exchange) lets users trade cryptoassets directly from their own wallets, using smart contracts instead of a centralised company holding custody of funds. Many DEXs use an automated market maker model, pricing trades against a liquidity pool rather than matching individual buy and sell orders.",
      "Because there's no central operator vetting what's listed, a DEX typically has little to no screening of the assets available to trade — which means genuine due diligence on any specific token is entirely down to the user.",
    ],
    relatedDays: [16, 37],
  },
  {
    slug: "cex",
    term: "CEX",
    shortDefinition:
      "A \"centralised exchange\" — a company-run platform (like a regulated broker) that holds your funds and matches trades on your behalf.",
    body: [
      "A CEX (centralised exchange) is a company that operates a trading platform, typically requiring identity verification (KYC), and holding custody of users' funds within its own systems unless and until they're withdrawn to a personal wallet. This is usually the simplest on-ramp for buying cryptoassets with traditional currency.",
      "Using a CEX means trusting that company to keep your funds secure and to let you withdraw them when you want to — history has shown that trust isn't always well placed, which is why many experienced users move larger holdings into their own wallet rather than leaving them on an exchange long-term.",
    ],
    relatedDays: [15, 18],
  },
  {
    slug: "stablecoin",
    term: "Stablecoin",
    shortDefinition:
      "A cryptoasset designed to hold a stable value, usually pegged 1:1 to a currency like the US dollar.",
    body: [
      "A stablecoin is a cryptoasset engineered to maintain a steady value, most commonly pegged to the US dollar. They're widely used within crypto markets as a way to hold value or move funds without constantly converting back to traditional currency.",
      "Not all stablecoins maintain their peg the same way — some are backed by cash and cash-equivalent reserves, others by other cryptoassets, and others by algorithmic mechanisms. \"Stable\" describes the design goal, not a guarantee; several stablecoins have lost their peg in the past, so understanding how a specific one is backed matters.",
    ],
    relatedDays: [42],
  },
  {
    slug: "nft",
    term: "NFT",
    shortDefinition:
      "A \"non-fungible token\" — a unique, verifiably one-of-a-kind digital token, often used to represent ownership of a specific item.",
    body: [
      "An NFT (non-fungible token) is a token that's unique and not interchangeable with another token of the same kind — unlike a coin, where any one unit is identical in value to any other. NFTs are commonly used to represent ownership of digital art, collectibles, or increasingly, claims on other assets or access rights.",
      "It's important to understand exactly what an NFT verifies: typically, that you own a specific token on the blockchain, which may (or may not) have reliable rights attached to the thing it's meant to represent. The token and the underlying asset it claims to represent are two separate things worth verifying independently.",
    ],
    relatedDays: [43],
  },
  {
    slug: "dao",
    term: "DAO",
    shortDefinition:
      "A \"decentralised autonomous organisation\" — a group coordinated by rules encoded in smart contracts and member voting, rather than a traditional management structure.",
    body: [
      "A DAO (decentralised autonomous organisation) is a group whose rules and decision-making are encoded in smart contracts, with members typically voting using governance tokens rather than following a traditional corporate hierarchy. Proposals, treasury spending, and protocol changes are often decided this way.",
      "In practice, DAO governance can still be concentrated — a small number of large token holders can carry disproportionate voting power — so \"decentralised\" describes the mechanism, not a guarantee that influence is evenly spread.",
    ],
    relatedDays: [46],
  },
  {
    slug: "oracle",
    term: "Oracle",
    shortDefinition:
      "A service that feeds real-world data (like prices) onto a blockchain, which smart contracts can't access on their own.",
    body: [
      "Blockchains are isolated systems by design — a smart contract can't independently check a stock price, a sports result, or the weather. An oracle is a service that brings that outside data onto the blockchain in a way smart contracts can use, most commonly price feeds for DeFi applications.",
      "Because so much of DeFi relies on accurate price data (for lending, liquidations, and trading), oracle reliability is a genuine security concern — a manipulated or faulty oracle feed has been the root cause of real exploits in the past.",
    ],
    relatedDays: [31, 41],
  },
  {
    slug: "layer-2",
    term: "Layer 2",
    shortDefinition:
      "A network built on top of a base blockchain (like Ethereum) to process transactions faster and more cheaply.",
    body: [
      "A Layer 2 (L2) network processes transactions separately from its underlying base blockchain (Layer 1), then periodically settles a summary back to that base layer — inheriting much of its security while offering faster, cheaper transactions. Rollups are the most common Layer 2 design in use today.",
      "Moving funds between a Layer 1 network and a Layer 2 (or between two Layer 2s) generally requires a bridge, which is a higher-stakes step than an ordinary transaction and worth treating with extra caution.",
    ],
    relatedDays: [35],
  },
  {
    slug: "blockchain-bridge",
    term: "Blockchain Bridge",
    shortDefinition:
      "A tool or protocol that lets assets or data move between two otherwise separate blockchain networks.",
    body: [
      "Different blockchains are generally separate systems that can't natively talk to each other. A bridge is a protocol that lets assets move between them — typically by locking an asset on the original chain and issuing a representative version on the destination chain.",
      "Bridges have historically been a common target for major exploits, since they often hold large amounts of locked value and add real technical complexity on top of the underlying chains. Using a well-established, audited bridge — and understanding that you're trusting an additional piece of infrastructure — matters more here than for an ordinary same-chain transaction.",
    ],
    relatedDays: [35],
  },
  {
    slug: "tokenomics",
    term: "Tokenomics",
    shortDefinition:
      "The economic design of a cryptoasset: its total supply, distribution, issuance schedule, and the incentives built around it.",
    body: [
      "Tokenomics (token economics) describes how a token's supply and incentives are designed: how many tokens exist or will ever exist, how they're distributed (to the team, investors, the community), how new tokens are issued over time, and what the token is actually needed for within its project.",
      "Understanding a project's tokenomics is a core part of research before relying on or holding any token — a large allocation to the founding team with little lock-up, for example, is a very different risk profile from a token distributed broadly with long vesting schedules.",
    ],
    relatedDays: [33],
  },
  {
    slug: "rug-pull",
    term: "Rug Pull",
    shortDefinition:
      "A scam where a project's creators abruptly withdraw funds or abandon the project, leaving other holders with worthless tokens.",
    body: [
      "A rug pull is a type of exit scam where a project's team drains its liquidity pool, sells a large pre-allocated token holding, or simply disappears, leaving everyone else holding a token that's collapsed in value or become untradeable. It's one of the most common ways newcomers lose money in crypto.",
      "Warning signs include anonymous teams with no verifiable track record, locked liquidity that isn't actually verifiable on-chain, unrealistic promised returns, and aggressive hype with little real substance behind it — none of these guarantee a scam, but they're all reasons to dig deeper before putting in money.",
    ],
    relatedDays: [12],
  },
  {
    slug: "airdrop",
    term: "Airdrop",
    shortDefinition:
      "A free distribution of tokens to a group of wallet addresses, often used to bootstrap a new project's community.",
    body: [
      "An airdrop is when a project distributes free tokens to a set of wallet addresses — often people who already used an earlier version of the product, held a related asset, or met some other criteria. Legitimate airdrops are a genuine marketing and community-building tool.",
      "Airdrops are also a very common scam vector: fake \"claim your airdrop\" sites trick people into connecting their wallet and approving a malicious transaction, or into entering their seed phrase directly. A genuine airdrop never requires your seed phrase, and claim links are always worth verifying independently before connecting a wallet.",
    ],
    relatedDays: [12, 33],
  },
  {
    slug: "validator",
    term: "Validator",
    shortDefinition:
      "A participant that checks and confirms transactions on a proof-of-stake blockchain, in return for a reward.",
    body: [
      "On a proof-of-stake network, validators are responsible for proposing and verifying new blocks of transactions. To participate, a validator locks up (stakes) a quantity of the network's native asset as a financial commitment to honest behaviour, and earns rewards for doing the job correctly.",
      "Validators who act dishonestly or fail to perform reliably can have part of their staked funds destroyed, a penalty known as slashing — this economic incentive is what's meant to keep the network secure without needing a central authority.",
    ],
    relatedDays: [22, 34],
  },
  {
    slug: "staking",
    term: "Staking",
    shortDefinition:
      "Locking up cryptoassets to help secure a proof-of-stake network, in return for rewards.",
    body: [
      "Staking means committing (locking up) a quantity of a cryptoasset to support a proof-of-stake network's operation, directly as a validator or indirectly by delegating to one. In return, stakers typically earn a share of network rewards, roughly analogous to earning interest.",
      "Staking isn't risk-free: staked funds are often subject to lock-up periods, the asset's price can still move significantly while it's locked, and delegating to a poorly run or dishonest validator can result in penalties. \"Staking opportunities\" promising unusually high, guaranteed returns are also a common scam pattern worth treating with real scepticism.",
    ],
    relatedDays: [34, 39],
  },
  {
    slug: "mining",
    term: "Mining",
    shortDefinition:
      "The process of validating transactions and securing a proof-of-work blockchain (like Bitcoin) using computational power.",
    body: [
      "Mining is how proof-of-work blockchains like Bitcoin validate transactions and add new blocks: miners compete to solve a computationally expensive puzzle, and the winner adds the next block and receives a reward. This process is also what issues new coins into circulation on networks like Bitcoin.",
      "Mining requires real hardware and electricity, and profitability depends on equipment costs, electricity prices, and network-wide competition. Investment pitches that offer \"guaranteed\" mining returns with no verifiable hardware or operation behind them are a common scam pattern.",
    ],
    relatedDays: [22],
  },
  {
    slug: "fomo",
    term: "FOMO",
    shortDefinition:
      "\"Fear of missing out\" — the emotional pressure to buy during a rapid price rise, often leading to poorly timed decisions.",
    body: [
      "FOMO (fear of missing out) describes the emotional pull to jump into a trade because a price is rising quickly and it feels like an opportunity is disappearing. It's one of the most common and costly psychological traps in volatile markets, often leading people to buy near short-term peaks without proper research.",
      "Recognising FOMO as a specific, nameable feeling — rather than a neutral signal to act on — is a genuinely useful practical skill; having a pre-decided plan or rule for yourself before the pressure hits is far more reliable than trying to reason calmly in the moment.",
    ],
    relatedDays: [56],
  },
  {
    slug: "fud",
    term: "FUD",
    shortDefinition:
      "\"Fear, uncertainty and doubt\" — negative sentiment or information (genuine or manufactured) that pressures people to sell.",
    body: [
      "FUD (fear, uncertainty, and doubt) refers to negative news, rumours, or sentiment that pushes people toward panic-selling. It can be entirely legitimate (real bad news genuinely warrants concern) or deliberately manufactured to manipulate a market — the term itself doesn't tell you which.",
      "The practical skill isn't dismissing all FUD as noise, or believing all of it outright — it's the same habit that helps against FOMO: slow down, verify the underlying claim independently, and avoid reacting purely to the emotional pressure of the moment.",
    ],
    relatedDays: [56],
  },
  {
    slug: "rwa",
    term: "RWA (Real-World Asset)",
    shortDefinition:
      "A physical or traditional financial asset (like property or bonds) represented as a token on a blockchain.",
    body: [
      "RWA (real-world asset) tokenisation means representing something that exists outside crypto — property, bonds, commodities, invoices — as a token on a blockchain. The goal is usually to make an otherwise illiquid or hard-to-divide asset easier to trade, transfer, or use within crypto systems.",
      "The token itself is only ever as reliable as the legal and custodial arrangement backing it: owning a token that claims to represent a real-world asset is not automatically the same as owning the asset itself, and verifying that underlying arrangement is a genuinely important (and often overlooked) due diligence step.",
    ],
    relatedDays: [33],
  },
];

export function getGlossaryEntry(slug: string): GlossaryEntry | undefined {
  return glossary.find((g) => g.slug === slug);
}
