# Insight Crypto Learning

A 60-day, quiz-gated crypto education course for complete newcomers, built
for **insightcryptolearning.com**.

- One lesson + one 10-question quiz per day, for 60 days
- Students need **90% (9/10)** on a day's quiz to unlock the next day
- Student accounts (email + password) with a progress dashboard
- Payments via Stripe: **£5/month** subscription or a **one-off £50** payment
- Day 1 is a free preview; Days 2–60 require an active paid plan
- Contact: clarity@insightcryptolearning.com · WhatsApp 07957 458795

## Tech stack

- **Next.js 14** (App Router) + TypeScript + Tailwind CSS
- **NextAuth** (credentials provider, JWT sessions) for student login
- **Prisma** + **Postgres** (both dev and prod — see below for provisioning)
- **Stripe Checkout** for both the subscription and one-off plan

## Getting started (local development)

Needs a Postgres database — SQLite isn't used anywhere in this project
because it doesn't survive Vercel's serverless filesystem. Easiest option
for local dev: a free [Neon](https://neon.tech) or
[Supabase](https://supabase.com) project takes under a minute to create and
gives you a `DATABASE_URL` immediately; a local Postgres via Docker works
too.

```bash
npm install
cp .env.example .env   # then fill in DATABASE_URL (Stripe keys optional at first)
npx prisma db push     # creates the User/Progress tables
npm run dev            # http://localhost:3000
```

Without Stripe keys configured, the site still runs fully — the pricing
page just shows a friendly "payments not yet configured" message.

### Validating the course content

```bash
npx tsx scripts/validate-curriculum.ts
```

Checks that all 60 days exist in order, each has 10 well-formed quiz
questions, 4 unique options, and a valid correct-answer index.

## Going live: what you need to configure

### 1. Stripe (payments)

1. Create a [Stripe](https://dashboard.stripe.com) account. Build and test
   everything in **test mode** first (test-mode keys start `sk_test_...` /
   `rk_test_...`); switch to live mode only when you're ready to take real
   payments.
2. Create two Products in the Stripe Dashboard (each product must be
   separate — don't put two prices for two different plans on one product,
   or Checkout/invoices won't be able to tell them apart):
   - "Insight Crypto Learning — Monthly" — recurring price, **£5.00/month**
   - "Insight Crypto Learning — Lifetime" — one-time price, **£50.00**
3. Copy the two **Price IDs** into `STRIPE_PRICE_MONTHLY` and
   `STRIPE_PRICE_ONETIME`.
4. Create a **restricted API key** (Developers → API keys → Create
   restricted key) scoped to only what this app needs — Checkout Sessions,
   Customers, Subscriptions, Billing Portal, and Webhooks, all write access;
   everything else off. Use this (`rk_...`) as `STRIPE_SECRET_KEY` instead
   of the full account secret key (`sk_...`) — a leaked restricted key can
   do far less damage. Store it in your host's secrets vault (see below),
   never committed to source control.
5. Add a webhook endpoint pointing at
   `https://insightcryptolearning.com/api/stripe/webhook`, subscribed to:
   `checkout.session.completed`, `checkout.session.async_payment_succeeded`,
   `checkout.session.async_payment_failed`, `invoice.paid`,
   `invoice.payment_failed`, `customer.subscription.updated`, and
   `customer.subscription.deleted`. Copy the signing secret into
   `STRIPE_WEBHOOK_SECRET`.
6. Enable the **Customer Portal** (Settings → Billing → Customer portal) so
   the "Manage billing" button on the student dashboard works — it lets
   subscribers cancel, update their card, and see invoices without you
   building that UI.

Without these, the site still runs — the "Enrol now" buttons simply show a
message that payments aren't configured yet.

**Secrets storage:** don't leave live keys sitting only in `.env` on a
server. On Vercel, mark them as
[sensitive environment variables](https://vercel.com/docs/environment-variables/sensitive-environment-variables)
so they're write-only in the dashboard; on AWS/GCP/Azure, use Secrets
Manager / Secret Manager / Key Vault instead of plain env vars where
possible.

**Tax:** this is a recurring UK subscription business, so once you have
real customers you'll likely need to charge VAT (UK/EU) or local sales tax
depending on where students are. Stripe Tax can calculate and collect this
automatically inside Checkout (`automatic_tax: { enabled: true }`), but it
only starts collecting once you've added an active tax registration for
each relevant jurisdiction in the Dashboard — enabling the flag alone
collects nothing and fails silently. This isn't wired up yet; see
[Collect taxes for recurring payments](https://docs.stripe.com/billing/taxes/collect-taxes.md)
before launch.

### 2. Database (production)

Provision a Postgres database for production the same way as local dev —
Neon, Supabase, and Vercel's own Postgres marketplace integration all work
and take a couple of minutes. Point `DATABASE_URL` at it and run
`npx prisma db push` (or `prisma migrate deploy` in CI) against it once
before first use — Vercel's build step does not do this automatically.

### 3. Domain & environment variables

Set these in your hosting provider (e.g. Vercel project settings) and point
`insightcryptolearning.com` at the deployment:

| Variable | Purpose |
|---|---|
| `DATABASE_URL` | Postgres connection string |
| `NEXTAUTH_SECRET` | Random secret — generate with `openssl rand -base64 32` |
| `NEXTAUTH_URL` | `https://insightcryptolearning.com` |
| `STRIPE_SECRET_KEY` / `STRIPE_WEBHOOK_SECRET` | From Stripe |
| `STRIPE_PRICE_MONTHLY` / `STRIPE_PRICE_ONETIME` | From Stripe |
| `NEXT_PUBLIC_SITE_URL` | `https://insightcryptolearning.com` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | `clarity@insightcryptolearning.com` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `447957458795` (international format, no `+`) |

### 4. Deploying to Vercel

1. Go to [vercel.com](https://vercel.com), sign in, and **Add New → Project**,
   then import the `addob/Insight-crypto-learning-` GitHub repo.
2. Under **Storage**, add a Postgres database (Vercel's Neon/Supabase
   marketplace integration is the fastest path) — this sets `DATABASE_URL`
   for you automatically.
3. In **Settings → Environment Variables**, add the rest of the table
   above. Generate a fresh `NEXTAUTH_SECRET` for production — don't reuse
   a value from local `.env`.
4. Deploy. Once it's live, set `NEXTAUTH_URL` and `NEXT_PUBLIC_SITE_URL` to
   the real deployment URL (or your custom domain once attached) and
   redeploy — these can't be known before the first deploy gives you a URL.
5. Run `npx prisma db push` once against the production `DATABASE_URL`
   (from your own machine, with it set in your shell) to create the tables.
6. Only now can the Stripe webhook be registered — it needs a real,
   internet-reachable URL. Go back to Stripe (Developers → Webhooks →
   Add endpoint), point it at `https://<your-domain>/api/stripe/webhook`
   with the events listed above, and add the resulting signing secret as
   `STRIPE_WEBHOOK_SECRET` in Vercel, then redeploy once more.
7. Point your domain's DNS at Vercel (Settings → Domains →
   `insightcryptolearning.com`) when ready.

### 5. Email sending (optional next step)

There's currently no transactional email (welcome emails, password reset).
If you want these, the cleanest addition is a provider like Resend or
Postmark plumbed into `src/lib/auth.ts` and the signup route.

## Project structure

```
src/
  app/                  Pages & API routes (App Router)
    course/[day]/       Daily lesson + quiz page
    dashboard/          Student progress dashboard
    api/quiz/submit/    Grades a quiz, updates progress, unlocks next day
    api/stripe/         Checkout session creation + webhook handler
  components/           Navbar, Footer, CourseRoadmap, QuizForm, etc.
  data/days/week1..9.ts The 60 days of lesson + quiz content
  data/curriculum.ts    Merges all weeks, exposes getCourseDay()
  lib/access.ts         Access & unlock-gating logic (90% pass rule)
  lib/auth.ts           NextAuth config
  lib/stripe.ts         Stripe client helper
prisma/schema.prisma    User + Progress models
```

## Notes on the course content

All 60 lessons and 600 quiz questions were purpose-written for this course,
covering: blockchain fundamentals, wallet security, exchanges, Bitcoin,
Ethereum & smart contracts, DeFi, NFTs & Web3, trading psychology & risk
management, and UK-specific regulation/tax orientation. It's educational
content, not financial advice — see `/legal/disclaimer`.
