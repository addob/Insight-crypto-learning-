import Link from "next/link";

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "clarity@insightcryptolearning.com";
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "447957458795";
const WHATSAPP_DISPLAY = process.env.NEXT_PUBLIC_WHATSAPP_DISPLAY || "07957 458795";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-panel">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2 text-lg font-bold">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gold text-ink">
              ₿
            </span>
            Insight Crypto Learning
          </div>
          <p className="text-sm text-muted">
            A plain-English, 60-day course that takes complete newcomers from
            &ldquo;what is a blockchain?&rdquo; to confidently understanding
            the crypto industry — one day, and one quiz, at a time.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">
            Course
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/#curriculum" className="hover:text-gold">Curriculum</Link></li>
            <li><Link href="/pricing" className="hover:text-gold">Pricing</Link></li>
            <li><Link href="/login" className="hover:text-gold">Student login</Link></li>
            <li><Link href="/signup" className="hover:text-gold">Create account</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">
            Contact
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-gold">
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                WhatsApp: {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li><Link href="/contact" className="hover:text-gold">Contact form</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">
            Legal
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/legal/terms" className="hover:text-gold">Terms of Service</Link></li>
            <li><Link href="/legal/privacy" className="hover:text-gold">Privacy Policy</Link></li>
            <li><Link href="/legal/disclaimer" className="hover:text-gold">Risk Disclaimer</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Insight Crypto Learning. All
            rights reserved. insightcryptolearning.com
          </p>
          <p className="max-w-xl md:text-right">
            Educational content only — not financial advice. Cryptoasset
            prices can be highly volatile; only invest what you can afford to
            lose.
          </p>
        </div>
      </div>
    </footer>
  );
}
