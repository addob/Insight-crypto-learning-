import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts, getBlogCategory, getBlogPost } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ category: p.category, slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { category: string; slug: string };
}): Promise<Metadata> {
  const post = getBlogPost(params.category, params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Insight Crypto Learning Blog`,
    description: post.description,
    alternates: { canonical: `/blog/${post.category}/${post.slug}` },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const category = getBlogCategory(params.category);
  const post = getBlogPost(params.category, params.slug);
  if (!category || !post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: "Insight Crypto Learning" },
  };

  return (
    <div className="container-page max-w-3xl py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
        <Link href="/blog" className="hover:text-white">
          Blog
        </Link>
        <span>/</span>
        <Link href={`/blog/${category.slug}`} className="hover:text-white">
          {category.label}
        </Link>
      </div>

      <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl">{post.title}</h1>
      <p className="mt-3 text-sm text-muted">
        {new Date(post.publishedAt).toLocaleDateString("en-GB", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
        {post.updatedAt && post.updatedAt !== post.publishedAt && (
          <>
            {" "}
            &middot; Updated{" "}
            {new Date(post.updatedAt).toLocaleDateString("en-GB", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </>
        )}
        {" "}&middot; {post.author}
      </p>

      <article className="mt-8 space-y-4 text-[15px] leading-relaxed text-white/90">
        {post.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </article>

      {post.relatedLinks && post.relatedLinks.length > 0 && (
        <div className="card mt-8 p-6">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gold">
            Go deeper
          </h2>
          <ul className="space-y-2 text-sm">
            {post.relatedLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-gold hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

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

      <div className="mt-8">
        <Link href={`/blog/${category.slug}`} className="text-sm text-gold hover:underline">
          ← More in {category.label}
        </Link>
      </div>
    </div>
  );
}
