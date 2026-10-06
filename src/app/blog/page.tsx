import Link from "next/link";
import type { Metadata } from "next";
import { BLOG_CATEGORIES, sortedBlogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog | Insight Crypto Learning",
  description:
    "Plain-English crypto guides, security tips, and regulation explainers from Insight Crypto Learning.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const posts = sortedBlogPosts();

  return (
    <div className="container-page max-w-3xl py-16">
      <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
        Blog
      </span>
      <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl">
        Insight Crypto Learning Blog
      </h1>
      <p className="mt-5 text-lg text-muted">
        Plain-English guides, security tips, and regulation explainers —
        written to help you understand crypto, not just skim headlines.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {BLOG_CATEGORIES.map((c) => (
          <Link key={c.slug} href={`/blog/${c.slug}`} className="card p-5 transition hover:border-gold">
            <p className="font-semibold text-white">{c.label}</p>
            <p className="mt-1 text-sm text-muted">{c.description}</p>
          </Link>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-xl font-bold">Latest posts</h2>
        {posts.length === 0 ? (
          <div className="card p-6 text-sm text-muted">
            Nothing published yet &mdash; check back soon, or browse a category
            above to see what&rsquo;s planned.
          </div>
        ) : (
          <div className="space-y-3">
            {posts.map((p) => (
              <Link
                key={`${p.category}/${p.slug}`}
                href={`/blog/${p.category}/${p.slug}`}
                className="card block p-4 transition hover:border-gold"
              >
                <p className="text-xs text-muted">
                  {new Date(p.publishedAt).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="mt-1 font-semibold text-white">{p.title}</p>
                <p className="mt-1 text-sm text-muted">{p.description}</p>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="card mt-12 p-6">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gold">
          Want structured learning instead?
        </p>
        <h2 className="text-2xl font-extrabold text-white">
          Continue your crypto education with the 60-day course
        </h2>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link href="/signup" className="btn-primary">
            Start free &mdash; Days 1 &amp; 2
          </Link>
          <Link href="/pricing" className="btn-secondary">
            See pricing
          </Link>
        </div>
      </div>
    </div>
  );
}
