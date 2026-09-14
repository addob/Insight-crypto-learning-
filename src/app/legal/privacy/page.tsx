export default function PrivacyPage() {
  return (
    <div className="container-page max-w-3xl py-16">
      <h1 className="text-3xl font-extrabold">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted">Last updated: 14 September 2026</p>

      <div className="prose-sm mt-8 space-y-6 text-sm leading-relaxed text-white/90">
        <p>
          This Privacy Policy explains how Insight Crypto Learning
          (&ldquo;we&rdquo;, &ldquo;us&rdquo;) collects and uses your
          personal data when you use insightcryptolearning.com, in line with
          UK GDPR and the Data Protection Act 2018.
        </p>

        <section>
          <h2 className="mb-2 text-lg font-bold text-white">1. What we collect</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>Account details: name, email address, and a securely hashed password.</li>
            <li>Course progress: which days you&rsquo;ve completed, quiz scores, and attempt counts.</li>
            <li>Billing information: handled directly by Stripe, our payment processor — we do not store your card details on our own servers.</li>
            <li>Basic technical data such as browser type and general usage, for security and site reliability.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-white">2. How we use it</h2>
          <p>
            We use your data to provide and improve the course, manage your
            account and billing, communicate important updates, and respond
            to support requests. We do not sell your personal data.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-white">3. Legal basis</h2>
          <p>
            We process your data on the basis of contract (to deliver the
            course you&rsquo;ve purchased), legitimate interest (site
            security and improvement), and consent where applicable (e.g.
            optional marketing communications).
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-white">4. Third parties</h2>
          <p>
            We use Stripe to process payments and may use hosting and
            database providers to run the Service. These providers process
            data only as necessary to deliver their service to us.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-white">5. Data retention</h2>
          <p>
            We retain account and progress data for as long as your account
            is active, and for a reasonable period afterward for legal and
            accounting purposes, after which it is deleted or anonymised.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-white">6. Your rights</h2>
          <p>
            Under UK GDPR you have the right to access, correct, delete, or
            export your personal data, and to object to certain processing.
            To exercise these rights, contact
            clarity@insightcryptolearning.com. You also have the right to
            complain to the Information Commissioner&rsquo;s Office (ICO).
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-white">7. Security</h2>
          <p>
            Passwords are stored using industry-standard hashing. We take
            reasonable technical and organisational measures to protect your
            data, though no online service can guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-white">8. Contact</h2>
          <p>
            Questions about this policy can be sent to
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
