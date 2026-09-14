export default function DisclaimerPage() {
  return (
    <div className="container-page max-w-3xl py-16">
      <h1 className="text-3xl font-extrabold">Risk Disclaimer</h1>
      <p className="mt-2 text-sm text-muted">Last updated: 14 September 2026</p>

      <div className="prose-sm mt-8 space-y-6 text-sm leading-relaxed text-white/90">
        <section>
          <h2 className="mb-2 text-lg font-bold text-white">Educational content only</h2>
          <p>
            Insight Crypto Learning provides general educational content about
            the cryptocurrency industry, including how blockchains work,
            wallet security, exchanges, DeFi, NFTs, and related topics.
            Nothing on this website or within the course constitutes
            financial, investment, legal, or tax advice, and should not be
            relied upon as such.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-white">Not a recommendation</h2>
          <p>
            No content on this site should be interpreted as a
            recommendation to buy, sell, or hold any particular
            cryptocurrency or other asset. Any decision to buy, sell, or hold
            any cryptoasset is made entirely at your own discretion and risk.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-white">Cryptoassets are high risk</h2>
          <p>
            Cryptoasset prices can be extremely volatile and may fall as well
            as rise. You may lose some or all of the money you invest.
            Cryptoassets are largely unregulated in the UK, and funds held on
            most crypto platforms typically do not benefit from Financial
            Services Compensation Scheme (FSCS) protection. Past performance
            is not a reliable indicator of future results.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-white">Only invest what you can afford to lose</h2>
          <p>
            You should never invest money you cannot afford to lose, and
            should carefully consider your own financial situation before
            engaging with cryptoassets. If you are unsure, seek independent
            financial advice from a qualified, FCA-regulated adviser.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-white">Tax</h2>
          <p>
            Any tax-related content in this course is general orientation
            only, is not personalised tax advice, and may not reflect the
            most current HMRC rules. Consult HMRC guidance or a qualified
            accountant regarding your specific circumstances.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-white">Security</h2>
          <p>
            While this course teaches security best practices, we cannot
            guarantee the security of any wallet, exchange, or platform you
            choose to use. You are responsible for safeguarding your own
            private keys, seed phrases, and account credentials.
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
