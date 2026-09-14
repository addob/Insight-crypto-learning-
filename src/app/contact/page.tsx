const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "clarity@insightcryptolearning.com";
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "447957458795";
const WHATSAPP_DISPLAY = process.env.NEXT_PUBLIC_WHATSAPP_DISPLAY || "07957 458795";

export default function ContactPage() {
  return (
    <div className="container-page max-w-2xl py-16">
      <h1 className="text-3xl font-extrabold">Get in touch</h1>
      <p className="mt-3 text-muted">
        Questions about the course, a payment, or your account? We usually
        reply within one business day.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <a href={`mailto:${CONTACT_EMAIL}`} className="card p-6 transition hover:border-gold">
          <div className="mb-3 text-2xl">✉️</div>
          <p className="font-semibold">Email</p>
          <p className="mt-1 break-all text-sm text-muted">{CONTACT_EMAIL}</p>
        </a>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="card p-6 transition hover:border-gold"
        >
          <div className="mb-3 text-2xl">💬</div>
          <p className="font-semibold">WhatsApp</p>
          <p className="mt-1 text-sm text-muted">{WHATSAPP_DISPLAY}</p>
        </a>
      </div>

      <div className="card mt-8 p-6 text-sm text-muted">
        <p>
          <strong className="text-white">Insight Crypto Learning</strong>
          <br />
          insightcryptolearning.com
        </p>
        <p className="mt-3">
          This course provides general education about the cryptocurrency
          industry and is not financial, investment, or tax advice. See our{" "}
          <a href="/legal/disclaimer" className="text-gold hover:underline">
            Risk Disclaimer
          </a>{" "}
          for details.
        </p>
      </div>
    </div>
  );
}
