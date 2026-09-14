"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";

const links = [
  { href: "/#curriculum", label: "Curriculum" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-ink/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold text-ink">
            ₿
          </span>
          <span>
            Insight <span className="text-gold">Crypto</span> Learning
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-muted hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {status === "authenticated" ? (
            <>
              <Link href="/dashboard" className="text-sm text-muted hover:text-white">
                Dashboard
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="btn-secondary text-sm"
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-sm text-muted hover:text-white">
                Log in
              </Link>
              <Link href="/pricing" className="btn-primary text-sm">
                Enrol now
              </Link>
            </>
          )}
        </div>

        <button
          className="text-2xl md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="border-t border-border md:hidden">
          <div className="container-page flex flex-col gap-3 py-4">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-muted">
                {l.label}
              </Link>
            ))}
            {status === "authenticated" ? (
              <>
                <Link href="/dashboard" onClick={() => setOpen(false)} className="text-white">
                  Dashboard
                </Link>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="btn-secondary text-left text-sm"
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link href="/login" onClick={() => setOpen(false)} className="text-white">
                  Log in
                </Link>
                <Link href="/pricing" onClick={() => setOpen(false)} className="btn-primary text-center">
                  Enrol now
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
