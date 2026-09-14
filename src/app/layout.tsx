import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Insight Crypto Learning — 60-Day Crypto Course for Newcomers",
  description:
    "A structured 60-day course that takes complete newcomers into the crypto industry, with daily lessons and quizzes. £5/month or a one-off £50 lifetime payment.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://insightcryptolearning.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-ink font-sans text-white antialiased">
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
