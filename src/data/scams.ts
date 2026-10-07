export interface ScamEntry {
  slug: string;
  name: string;
  shortDescription: string;
  howItWorks: string[];
  warningSigns: string[];
  protectYourself: string[];
  relatedDays: number[];
  relatedGlossaryTerms: string[];
}

export const scams: ScamEntry[] = [
  {
    slug: "phishing",
    name: "Phishing Scams",
    shortDescription:
      "Fake websites, apps or messages built to look like a genuine wallet or exchange, designed to steal your seed phrase or login details.",
    howItWorks: [
      "Scammers build a near-perfect copy of a real wallet or exchange login page, then drive traffic to it through sponsored search ads, phishing emails, or direct messages on Telegram, Discord or X claiming there's an urgent account issue to resolve.",
      "The fake page asks you to \"verify\" your account by entering your seed phrase, private key, or login credentials. The moment you do, that information is sent directly to the scammer, who uses it immediately — often within seconds — to drain the real wallet or account before you've even noticed anything wrong.",
      "A more targeted version impersonates a specific person: a \"support agent\" replying to your public complaint on social media, or a message that appears to come from a project's official account (achieved by creating a lookalike username with a similar handle and profile picture).",
    ],
    warningSigns: [
      "Any page asking you to type your seed phrase or private key to \"verify\", \"sync\", or \"restore\" a wallet",
      "A URL that's almost right but not quite (a different domain extension, an extra letter, a hyphen that shouldn't be there)",
      "Urgent language: \"your account will be suspended\", \"act within 24 hours\"",
      "A \"support agent\" who contacts you first, rather than you contacting official support",
    ],
    protectYourself: [
      "Never type your seed phrase into any website or app, ever, for any reason",
      "Bookmark the official URLs you use and navigate from those bookmarks, rather than clicking search results or links in messages",
      "Verify a project's official channels by cross-checking multiple independent sources, not a single link someone sent you",
    ],
    relatedDays: [13],
    relatedGlossaryTerms: ["seed-phrase", "private-key"],
  },
  {
    slug: "rug-pulls",
    name: "Rug Pulls",
    shortDescription:
      "A project's creators abruptly drain the funds or abandon development, leaving the token worthless.",
    howItWorks: [
      "A team launches a token, often with aggressive marketing and a promising roadmap, and builds a liquidity pool so people can trade it. Once enough money has flowed in, the team executes the rug pull in one of two ways.",
      "A hard rug pull happens instantly: the team drains the liquidity pool directly, or uses a hidden function built into the token's own smart contract (sometimes called a \"mint\" or \"backdoor\" function) to create a massive new supply of tokens and sell it all at once, crashing the price to near zero within minutes.",
      "A slow rug pull is quieter: the team simply stops building, stops communicating, and sells their own large pre-allocated holding gradually over weeks, so the token's value fades away rather than collapsing instantly — making it harder to pin down exactly when the scam happened.",
    ],
    warningSigns: [
      "An anonymous team with no verifiable track record outside the project",
      "Liquidity that isn't genuinely locked, or where the lock can't be independently verified on-chain",
      "A contract with functions that let the owner mint unlimited supply or block other holders from selling",
      "Heavy hype and marketing with very little real product or documentation behind it",
    ],
    protectYourself: [
      "Check the contract address on a block explorer and see whether liquidity is actually locked, and for how long",
      "Look for an independent smart contract audit, and read enough of it to see what was actually tested",
      "Research the team's real identity and track record outside the project's own marketing",
    ],
    relatedDays: [12],
    relatedGlossaryTerms: ["rug-pull", "liquidity"],
  },
  {
    slug: "pig-butchering",
    name: "Pig Butchering Scams",
    shortDescription:
      "A scammer builds a long romantic or friendly relationship over weeks or months before introducing a fake investment platform.",
    howItWorks: [
      "The name comes from the idea of \"fattening up\" a victim before the final move. A scammer makes contact, often through a dating app, a wrong-number text, or social media, and invests real time and effort building trust — sometimes over months — before money ever comes up.",
      "Once trust is established, they introduce a cryptocurrency \"opportunity\": usually a slick-looking trading platform or app that shows impressive, steadily growing returns. Early small withdrawals are often allowed to work, specifically to build confidence before larger deposits are requested.",
      "Eventually the victim is encouraged to deposit increasingly large sums — sometimes their life savings. When they try to withdraw a significant amount, the platform invents fees, taxes, or account \"verification\" requirements that demand even more money before release — and the funds are never actually returned.",
    ],
    warningSigns: [
      "A new online relationship that moves to discussing investments relatively quickly",
      "A trading platform or app you can't find independently verified, outside of what the contact showed you",
      "Consistently positive, suspiciously smooth-looking returns with no normal ups and downs",
      "A request for an additional payment before you're allowed to withdraw your own funds",
    ],
    protectYourself: [
      "Treat any investment suggestion from an online-only relationship with serious scepticism, however genuine the relationship feels",
      "Independently verify any trading platform through sources you find yourself, not ones given to you",
      "Never pay an additional fee to \"unlock\" a withdrawal — that request is itself the scam",
    ],
    relatedDays: [12],
    relatedGlossaryTerms: [],
  },
  {
    slug: "fake-giveaways",
    name: "Fake Giveaways",
    shortDescription:
      "Scams promising to double or multiply any crypto sent to a given address, often impersonating a celebrity or official account.",
    howItWorks: [
      "Scammers create accounts that closely mimic a well-known figure or company — matching the name, photo, and even buying fake followers to look credible — and post or comment claiming a limited-time giveaway: \"send 0.1 ETH, get 0.2 ETH back\".",
      "These often appear as replies under a genuine celebrity's real post (so they ride on that post's real visibility), or are pushed through a hijacked, previously legitimate social media account that's been compromised and repurposed for the scam.",
      "There is no giveaway. Any crypto sent to the listed address is simply gone — the \"double your crypto\" promise is never fulfilled, and the scam typically disappears or pivots to a new account once reported.",
    ],
    warningSigns: [
      "Any promise to send back more crypto than you send in",
      "A celebrity or company suddenly running an unannounced crypto giveaway",
      "An account with a slightly altered username or recently changed profile, despite an old-looking post history",
    ],
    protectYourself: [
      "No legitimate giveaway ever requires you to send crypto first to receive more back",
      "Check an account's verification status and post history for sudden, out-of-character changes",
      "If in doubt, check the figure's or company's official website directly, rather than trusting the social post itself",
    ],
    relatedDays: [12],
    relatedGlossaryTerms: ["airdrop"],
  },
  {
    slug: "ponzi-and-hyip",
    name: "Ponzi & High-Yield Investment Schemes",
    shortDescription:
      "Platforms promising fixed, unrealistically high daily or weekly returns, paid using money from newer investors rather than real profit.",
    howItWorks: [
      "A platform advertises a fixed, guaranteed return — for example \"2% daily\" — that sounds modest day to day but is mathematically impossible to sustain through genuine investment returns over any meaningful period.",
      "Early investors really do get paid, which is the entire mechanism that keeps the scheme alive: those payouts are funded directly by money coming in from newer investors, not by any underlying trading or business activity.",
      "The scheme continues only as long as new money keeps flowing in faster than it's paid out. Once recruitment slows, or the organisers simply decide to stop, payouts stop and the platform disappears, often overnight.",
    ],
    warningSigns: [
      "A fixed, guaranteed daily or weekly return, regardless of market conditions",
      "Heavy emphasis on recruiting new investors, sometimes with a formal referral/commission structure",
      "Vague or non-existent explanation of how the platform actually generates its returns",
    ],
    protectYourself: [
      "Treat any \"guaranteed\" fixed return as an immediate red flag — genuine investments carry genuine, variable risk",
      "Be suspicious of any platform that rewards you more for recruiting others than for the investment itself",
      "Ask specifically how returns are generated, and walk away if the answer is vague or evasive",
    ],
    relatedDays: [12],
    relatedGlossaryTerms: [],
  },
  {
    slug: "fake-exchanges",
    name: "Fake Exchanges & Trading Platforms",
    shortDescription:
      "Convincing but entirely fabricated trading platforms that show fake balances and profits — until you try to withdraw.",
    howItWorks: [
      "Scammers build a professional-looking trading platform or app, complete with real-time-seeming price charts, account balances, and trade history — all of it fabricated rather than connected to any real market or exchange.",
      "Victims are encouraged to deposit funds and watch their \"balance\" grow, often through a combination of a genuinely well-built interface and direct encouragement from a scammer posing as a broker or account manager.",
      "When a victim tries to withdraw, the platform either stalls indefinitely, invents a fee or tax that must be paid first, or simply becomes unreachable — the deposited funds were never actually invested anywhere and are already gone.",
    ],
    warningSigns: [
      "A trading platform you can't find mentioned anywhere independent of the person who introduced you to it",
      "An account balance that only ever goes up, with no normal market volatility",
      "Withdrawal requests that are met with new fees, taxes, or \"verification\" requirements",
    ],
    protectYourself: [
      "Only use exchanges with an established, independently verifiable reputation",
      "Test any new platform with a small deposit and a real withdrawal before committing more",
      "Be especially cautious of any platform recommended to you personally by someone you only know online",
    ],
    relatedDays: [15, 18],
    relatedGlossaryTerms: ["cex"],
  },
  {
    slug: "pump-and-dump",
    name: "Pump-and-Dump Schemes",
    shortDescription:
      "A coordinated group artificially inflates a low-value token's price, then sells into the rally, leaving later buyers holding the loss.",
    howItWorks: [
      "A group — sometimes organised through a private messaging channel — quietly accumulates a cheap, low-liquidity token, then simultaneously begins promoting it heavily across social media, forums, and messaging groups, often with claims of insider information or an imminent breakthrough.",
      "The coordinated buying and hype drive the price up rapidly, creating visible momentum that attracts outside buyers who fear missing out on the rise, buying in without knowing the rally was manufactured.",
      "Once the price peaks, the organising group sells (\"dumps\") their holdings into that outside demand, collapsing the price. The outside buyers who bought during the hype are left holding a token that's now worth a fraction of what they paid.",
    ],
    warningSigns: [
      "A low-value, low-liquidity token suddenly surging in price with no clear underlying news",
      "Coordinated, near-identical hype messages appearing across multiple channels at once",
      "Claims of \"guaranteed\" gains or insider information about an upcoming price move",
    ],
    protectYourself: [
      "Be sceptical of any token experiencing a sudden, unexplained price surge driven mainly by social media chatter",
      "Research a token's liquidity and holder distribution before buying into a rally",
      "Remember that by the time hype reaches you, the people who started it are often already positioned to sell",
    ],
    relatedDays: [50, 51],
    relatedGlossaryTerms: ["liquidity"],
  },
  {
    slug: "sim-swapping",
    name: "SIM Swapping",
    shortDescription:
      "An attacker hijacks your phone number to intercept two-factor authentication codes and take over your accounts.",
    howItWorks: [
      "An attacker gathers personal details about you — often through earlier data breaches, phishing, or social engineering — then contacts your mobile carrier impersonating you, claiming your phone was lost or stolen, and requests your number be transferred to a new SIM card they control.",
      "Once the swap succeeds, your real phone loses service entirely, and the attacker's device starts receiving your calls and texts — including any SMS-based two-factor authentication codes for your email, exchange accounts, or wallet apps.",
      "With those codes, the attacker resets passwords and takes over linked accounts one by one, often moving quickly to drain exchange balances or wallets before the victim even realises their phone has stopped working.",
    ],
    warningSigns: [
      "Your phone suddenly loses all signal or service with no clear explanation",
      "Unexpected \"password reset\" or \"login\" notifications on accounts you didn't try to access",
      "Being contacted by your mobile carrier about a SIM change you didn't request",
    ],
    protectYourself: [
      "Use an authenticator app or hardware security key instead of SMS for two-factor authentication wherever possible",
      "Add a PIN or extra verification requirement for SIM changes directly with your mobile carrier",
      "Avoid publicly sharing personal details (full name, date of birth, address) that could be used to impersonate you",
    ],
    relatedDays: [12, 13],
    relatedGlossaryTerms: [],
  },
  {
    slug: "fake-mining-and-staking",
    name: "Fake Mining & Staking Platforms",
    shortDescription:
      "Platforms promising fixed, guaranteed returns from mining or staking hardware and services that don't actually exist.",
    howItWorks: [
      "A platform advertises \"cloud mining\" or \"staking\" services, offering to run mining hardware or validator infrastructure on your behalf in exchange for an upfront payment, with promised fixed daily or weekly returns.",
      "In reality, there's often no actual hardware or validator infrastructure behind the platform at all — the dashboard showing your \"earnings\" is simply a number the operators control, not a reflection of any real mining or staking activity.",
      "Early payouts (if any occur) are usually funded the same way a Ponzi scheme works, from other users' deposits, until the operators stop paying out entirely and disappear with the remaining funds.",
    ],
    warningSigns: [
      "A fixed, guaranteed return advertised for mining or staking — genuine mining and staking returns vary with network conditions",
      "No verifiable evidence of real hardware, data centres, or validator operations behind the platform",
      "Pressure to deposit more to \"upgrade\" your plan or unlock higher returns",
    ],
    protectYourself: [
      "Understand that genuine mining and staking returns vary and are never contractually guaranteed",
      "Research whether a mining or staking provider has verifiable, named infrastructure and operating history",
      "Be wary of any platform that primarily grows through referral incentives rather than real operations",
    ],
    relatedDays: [22, 34, 39],
    relatedGlossaryTerms: ["mining", "staking", "validator"],
  },
  {
    slug: "fake-icos-and-presales",
    name: "Fake ICOs & Token Presales",
    shortDescription:
      "Fraudulent token launches that raise funds for a project that's never actually built, or that's designed to be abandoned.",
    howItWorks: [
      "A project publishes a polished website, whitepaper, and roadmap describing an ambitious product, then opens a presale or initial coin offering (ICO) inviting early investors to buy tokens before public launch, often at a discounted price with promises of huge future gains.",
      "Funds raised during the presale go directly to the project's own wallet, with little to no independent escrow or oversight. Some fraudulent ICOs never had any intention of building the described product at all.",
      "After the raise, the team either disappears outright, or launches a token that quietly becomes worthless through inactivity, leaving presale investors with nothing to show for their contribution.",
    ],
    warningSigns: [
      "A whitepaper that's heavy on buzzwords and projected returns but light on genuine technical detail",
      "No escrow or independent custody of raised funds — everything goes straight to a team-controlled wallet",
      "An anonymous or unverifiable team with no prior track record",
    ],
    protectYourself: [
      "Read the whitepaper critically for genuine technical substance, not just ambition and marketing language",
      "Check whether raised funds are held in any form of escrow or multi-signature arrangement rather than a single wallet",
      "Research the team's identity and any previous projects they've shipped",
    ],
    relatedDays: [19, 33],
    relatedGlossaryTerms: ["tokenomics"],
  },
  {
    slug: "clipboard-hijacking",
    name: "Clipboard Hijacking Malware",
    shortDescription:
      "Malware that silently swaps a copied wallet address for the attacker's own address before you paste it.",
    howItWorks: [
      "Malware installed on a device (often bundled with pirated software, a fake wallet app, or a malicious browser extension) runs quietly in the background, monitoring the clipboard for anything that looks like a cryptocurrency wallet address.",
      "When you copy a wallet address — intending to paste it as the destination for a transfer — the malware detects the pattern and silently replaces it with an address the attacker controls, all within a fraction of a second.",
      "If you don't double-check the pasted address carefully before confirming the transaction, funds are sent directly to the attacker instead of the intended recipient, with no way to reverse it once confirmed.",
    ],
    warningSigns: [
      "A pasted wallet address that looks slightly different from the one you copied, especially in the middle characters",
      "Unexpected or unfamiliar software installed around the same time strange transfers start happening",
    ],
    protectYourself: [
      "Always verify the full destination address character by character after pasting, not just the first and last few",
      "Keep devices used for crypto free of pirated software and unnecessary browser extensions",
      "Consider using a hardware wallet, which typically displays the destination address on its own separate screen for verification",
    ],
    relatedDays: [11],
    relatedGlossaryTerms: ["wallet"],
  },
  {
    slug: "fake-customer-support",
    name: "Fake Customer Support Scams",
    shortDescription:
      "Scammers posing as official support staff, often reached by replying to a public complaint, to extract credentials or remote access.",
    howItWorks: [
      "A user posts publicly (on social media or a forum) about a problem with an exchange or wallet. A scammer monitoring for exactly these posts replies quickly, posing as official support and offering to help — often using an account styled to look like the real company.",
      "The \"support agent\" moves the conversation to direct messages, then asks for account credentials, a seed phrase, or remote access to the victim's device, framing it as necessary to diagnose or fix the issue.",
      "Once they have what they need, they drain the account or wallet directly. Some variants instead talk the victim through making a transaction themselves, disguised as a \"test\" or \"verification\" transfer.",
    ],
    warningSigns: [
      "A support reply that comes to you first, rather than you contacting support through official channels",
      "Any request for your seed phrase, password, or remote access to \"help\" with an issue",
      "Being asked to move the conversation off the original public platform and into direct messages",
    ],
    protectYourself: [
      "Only contact support through a company's official website or verified app, never through a reply to your own post",
      "No genuine support team will ever ask for your seed phrase, full password, or remote device access",
      "If a transaction is requested as part of \"verification\", treat that as confirmation it's a scam",
    ],
    relatedDays: [12, 13],
    relatedGlossaryTerms: [],
  },
  {
    slug: "malicious-wallet-apps",
    name: "Malicious Wallet Apps & Browser Extensions",
    shortDescription:
      "Fake wallet apps or browser extensions, sometimes listed in official app stores, built to steal funds or seed phrases on setup.",
    howItWorks: [
      "A scammer publishes a fake wallet app or browser extension, often copying a popular real wallet's name, icon, and description closely enough to be mistaken for the genuine product in a search result.",
      "Some versions simply steal the seed phrase you enter during setup. Others function as a real wallet on the surface but contain hidden code that quietly redirects transactions, or that waits until a meaningful balance has been deposited before draining it.",
      "Because the app often looks and behaves like a legitimate wallet at first, victims may not realise anything is wrong until funds are already gone.",
    ],
    warningSigns: [
      "An app with very few reviews, a recently created developer account, or reviews that look generic or purchased",
      "An app or extension found via search or an ad, rather than a link from the wallet's own official website",
      "Any wallet app or extension requesting your seed phrase during what should be a simple setup step, with no further explanation",
    ],
    protectYourself: [
      "Only download a wallet app or extension from the link posted on that wallet's own official website",
      "Double-check the developer name and review history before installing, not just the app icon and title",
      "Start with a small test amount in any new wallet before moving significant funds into it",
    ],
    relatedDays: [10, 11],
    relatedGlossaryTerms: ["wallet"],
  },
  {
    slug: "address-poisoning",
    name: "Address Poisoning",
    shortDescription:
      "Scammers send a tiny unsolicited transaction from a lookalike address, hoping you'll copy it from your history by mistake later.",
    howItWorks: [
      "An attacker generates a wallet address that closely resembles one you've genuinely transacted with before — typically matching the first and last several characters, since many people only glance at those when verifying an address.",
      "They send a small, unsolicited transaction (sometimes for a trivial or even zero amount) from that lookalike address to your wallet, which causes it to appear in your transaction history alongside your real, legitimate contacts.",
      "Later, when you intend to send funds to your real contact, you accidentally copy the attacker's lookalike address from your history instead of the correct one, and send your funds directly to the scammer.",
    ],
    warningSigns: [
      "An unexpected, unsolicited small transaction appearing in your wallet history from an unfamiliar source",
      "Two very similar-looking addresses in your recent transaction history",
    ],
    protectYourself: [
      "Always verify a full destination address character by character before confirming a transaction, not just the start and end",
      "Use your own saved address book or verified contacts rather than copying from transaction history",
      "Treat any unexpected incoming transaction with suspicion rather than assuming it's benign",
    ],
    relatedDays: [11, 23],
    relatedGlossaryTerms: [],
  },
  {
    slug: "fake-airdrops",
    name: "Fake Airdrops",
    shortDescription:
      "Fraudulent \"claim your free tokens\" campaigns designed to trick you into connecting your wallet to a malicious site or approving a harmful transaction.",
    howItWorks: [
      "Scammers announce a fake token airdrop, often impersonating a real, popular project, and direct people to a \"claim\" website that looks legitimate but is entirely under the scammer's control.",
      "The site prompts you to connect your wallet and sign a transaction to \"claim\" the free tokens. Instead of granting you tokens, the transaction actually grants the scammer's contract permission to move assets out of your wallet — sometimes immediately, sometimes at a later time of their choosing.",
      "Some variants skip the technical approach entirely and simply ask you to enter your seed phrase directly to \"verify eligibility\", which is an even more direct route to losing everything in the wallet.",
    ],
    warningSigns: [
      "An airdrop announcement you can't verify through the real project's own official channels",
      "A claim page asking for your seed phrase to \"verify\" eligibility",
      "A wallet connection request followed by a transaction approval that doesn't clearly explain what it's granting",
    ],
    protectYourself: [
      "Verify any airdrop announcement directly through the project's own official website and verified social accounts",
      "Read exactly what a transaction is requesting permission to do before approving it, never approve blindly",
      "A genuine airdrop never requires your seed phrase to claim",
    ],
    relatedDays: [12],
    relatedGlossaryTerms: ["airdrop"],
  },
  {
    slug: "fake-trading-bots",
    name: "Fake Trading Bots",
    shortDescription:
      "Software or services claiming an \"AI\" or automated bot can guarantee consistent trading profits, used to collect deposits that are never actually traded.",
    howItWorks: [
      "A platform or individual advertises an automated trading bot — often described with buzzwords like \"AI-powered\" or \"arbitrage\" — that supposedly generates consistent profits with little or no effort required from you.",
      "You're asked to deposit funds into an account or wallet the operator controls, so the bot can \"trade\" on your behalf. A dashboard typically shows steadily growing paper profits, entirely disconnected from any real trading activity.",
      "As with fake exchanges, withdrawal requests are met with delays, new fees, or simply go unanswered — the deposited funds were never actually being traded and are effectively gone from the moment they were deposited.",
    ],
    warningSigns: [
      "Guaranteed or near-guaranteed consistent profits from automated trading, regardless of market conditions",
      "A requirement to deposit funds into an account the operator controls, rather than trading from your own wallet or exchange account",
      "Little to no transparent, verifiable track record of the bot's actual performance",
    ],
    protectYourself: [
      "Be deeply sceptical of any trading bot claiming consistent, guaranteed returns — genuine trading carries genuine risk",
      "Never deposit funds into an account you don't personally control for \"automated\" trading",
      "Look for independently verifiable performance history, not just numbers shown on the platform's own dashboard",
    ],
    relatedDays: [28, 49],
    relatedGlossaryTerms: [],
  },
  {
    slug: "crypto-job-scams",
    name: "Crypto Job & Recruitment Scams",
    shortDescription:
      "Fake job offers in the crypto industry that require an upfront \"training\" payment or ask you to move crypto as part of the role.",
    howItWorks: [
      "Scammers post attractive remote job listings — often for roles like \"crypto trader\", \"liquidity manager\", or \"customer support\" — on job boards or messaging apps, offering high pay for minimal apparent qualifications.",
      "After a brief, often informal interview, the \"employer\" asks for an upfront payment for training materials, software, or equipment, or asks the new \"employee\" to use their own funds to demonstrate a trading or transfer task as part of onboarding.",
      "Any payment made is simply taken, and any crypto moved as part of a \"task\" goes straight to the scammer. The job itself never materialises beyond this initial request.",
    ],
    warningSigns: [
      "A job offer with unusually high pay for the apparent effort or qualifications required",
      "A requirement to pay for training, equipment, or software before starting",
      "Being asked to move your own crypto as part of an onboarding \"task\" or \"test\"",
    ],
    protectYourself: [
      "A legitimate employer never asks a new hire to pay for their own training or job before starting",
      "Research the company independently, including looking for other reports of the same job listing",
      "Never move your own crypto as part of any job-related task or test",
    ],
    relatedDays: [12],
    relatedGlossaryTerms: [],
  },
  {
    slug: "impersonation-scams",
    name: "Impersonation Scams",
    shortDescription:
      "Scammers posing as a project's official team, a well-known figure, or a trusted contact to extract funds or credentials directly.",
    howItWorks: [
      "An attacker creates an account closely mimicking a real person or project's official identity — matching the name, photo, and writing style — sometimes going as far as compromising a genuine account to use it directly.",
      "They reach out directly, often with a believable, context-specific reason: a project \"team member\" offering early access, a \"friend\" urgently needing help, or an official account announcing a time-limited opportunity.",
      "The interaction is steered toward either a direct payment, a request for sensitive information, or a malicious link — all relying on the borrowed credibility of whoever's being impersonated to lower the victim's guard.",
    ],
    warningSigns: [
      "Unexpected direct contact from someone claiming to be an official team member or a known contact",
      "A sense of urgency combined with a request for money, credentials, or a click on an unfamiliar link",
      "Small inconsistencies in how someone communicates compared to how they normally would",
    ],
    protectYourself: [
      "Verify unexpected contact through a separate, independently confirmed channel before acting on it",
      "Be especially cautious of urgency paired with a financial request, even from someone who appears to be who they claim",
      "Remember that a compromised real account is just as capable of impersonation as a fake one",
    ],
    relatedDays: [12, 13],
    relatedGlossaryTerms: [],
  },
];

export function getScam(slug: string): ScamEntry | undefined {
  return scams.find((s) => s.slug === slug);
}
