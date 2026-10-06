import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Login | Insight Crypto Learning",
  description: "Log in to your Insight Crypto Learning account to continue your 60-day crypto course.",
  alternates: { canonical: "/login" },
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children;
}
