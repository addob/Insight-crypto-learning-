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
- **Prisma** + SQLite in dev (swap to Postgres for production — see below)
- **Stripe Checkout** for both the subscription and one-off plan

## Getting started (local development)

```bash
npm install
cp .env.example .env   # then fill in real values (Stripe keys optional at first)
npx prisma db push     # creates prisma/dev.db
npm run dev            # http://localhost:3000
```

A `.env` with safe local defaults is already included so the site runs
immediately without Stripe configured — the pricing page will show a
friendly "payments not yet configured" message until you add Stripe keys.

### Validating the course content

```bash
npx tsx scripts/validate-curriculum.ts
```

Checks that all 60 days exist in order, each has 10 well-formed quiz
questions, 4 unique options, and a valid correct-answer index.

## Going live: what you need to configure

### 1. Stripe (payments)

1. Create a [Stripe](https://dashboard.stripe.com) account and switch to
   **live mode** when ready.
2. Create two Products in the Stripe Dashboard:
   - "Insight Crypto Learning — Monthly" — recurring price, **£5.00/month**
   - "Insight Crypto Learning — Lifetime" — one-time price, **£50.00**
3. Copy the two **Price IDs** into `STRIPE_PRICE_MONTHLY` and
   `STRIPE_PRICE_ONETIME`.
4. Copy your **Secret key** into `STRIPE_SECRET_KEY`.
5. Add a webhook endpoint pointing at
   `https://insightcryptolearning.com/api/stripe/webhook`, subscribed to:
   `checkout.session.completed`, `invoice.paid`,
   `customer.subscription.deleted`. Copy the signing secret into
   `STRIPE_WEBHOOK_SECRET`.

Without these, the site still runs — the "Enrol now" buttons simply show a
message that payments aren't configured yet.

### 2. Database (production)

SQLite is used for local development only. For a real deployment (e.g.
Vercel), provision a Postgres database (Neon, Supabase, Vercel Postgres all
work) and:

1. In `prisma/schema.prisma`, change `provider = "sqlite"` to
   `provider = "postgresql"`.
2. Set `DATABASE_URL` to your Postgres connection string.
3. Run `npx prisma db push` (or `prisma migrate deploy` in CI) against it.

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

### 4. Email sending (optional next step)

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
