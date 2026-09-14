export default function TermsPage() {
  return (
    <div className="container-page max-w-3xl py-16">
      <h1 className="text-3xl font-extrabold">Terms of Service</h1>
      <p className="mt-2 text-sm text-muted">Last updated: 14 September 2026</p>

      <div className="prose-sm mt-8 space-y-6 text-sm leading-relaxed text-white/90">
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the
          Insight Crypto Learning website and 60-day course (the
          &ldquo;Service&rdquo;), operated at insightcryptolearning.com. By
          creating an account or purchasing access, you agree to these Terms.
        </p>

        <section>
          <h2 className="mb-2 text-lg font-bold text-white">1. The Service</h2>
          <p>
            Insight Crypto Learning provides a structured, 60-day educational
            course about the cryptocurrency industry, delivered as daily
            lessons with accompanying quizzes. Access to each day is unlocked
            progressively upon passing the previous day&rsquo;s quiz at 90% or
            higher, subject to an active paid plan.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-white">2. Accounts</h2>
          <p>
            You must provide accurate information when creating an account
            and are responsible for keeping your login credentials secure. You
            must be at least 18 years old to purchase a paid plan.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-white">3. Plans &amp; Payment</h2>
          <p>
            We offer a monthly subscription (billed recurringly until
            cancelled) and a one-off lifetime-access payment. Prices are shown
            in GBP inclusive of any applicable taxes unless stated otherwise.
            Payments are processed securely by Stripe; we do not store your
            card details.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-white">4. Cancellation &amp; Refunds</h2>
          <p>
            You may cancel your monthly subscription at any time from your
            account; cancellation takes effect at the end of the current
            billing period, and no further payments will be taken. For
            specific refund requests, please contact us at the email address
            in our Contact page and we will consider each request on its
            individual merits, consistent with applicable consumer law.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-white">5. Acceptable Use</h2>
          <p>
            You agree not to share your account credentials, attempt to
            circumvent the quiz-gating system, scrape or redistribute course
            content, or use the Service for any unlawful purpose.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-white">6. No Financial Advice</h2>
          <p>
            The Service is educational only. Nothing in the course
            constitutes financial, investment, legal, or tax advice. See our{" "}
            <a href="/legal/disclaimer" className="text-gold hover:underline">
              Risk Disclaimer
            </a>{" "}
            for further detail.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-white">7. Intellectual Property</h2>
          <p>
            All course content is owned by Insight Crypto Learning and
            licensed to you for personal, non-commercial use only while your
            plan is active.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-white">8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Insight Crypto Learning is
            not liable for any financial losses arising from decisions you
            make based on course content, including any cryptocurrency
            purchases, investments, or trades.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-white">9. Changes</h2>
          <p>
            We may update these Terms from time to time; continued use of the
            Service after changes take effect constitutes acceptance of the
            revised Terms.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-white">10. Contact</h2>
          <p>
            Questions about these Terms can be sent to
            clarity@insightcryptolearning.com.
          </p>
        </section>

        <p className="text-xs text-muted">
          This is a general template and should be reviewed by a qualified
          solicitor before relying on it for a live commercial service.
        </p>
      </div>
    </div>
  );
}
