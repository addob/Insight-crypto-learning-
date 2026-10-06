import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { BLOG_CATEGORIES, getBlogCategory, postsInCategory } from "@/data/blog";

export function generateStaticParams() {
  return BLOG_CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
  const category = getBlogCategory(params.category);
  if (!category) return {};
  return {
    title: `${category.label} | Insight Crypto Learning Blog`,
    description: category.description,
    alternates: { canonical: `/blog/${category.slug}` },
  };
}

export default function BlogCategoryPage({ params }: { params: { category: string } }) {
  const category = getBlogCategory(params.category);
  if (!category) notFound();
  const posts = postsInCategory(category.slug);

  return (
    <div className="container-page max-w-3xl py-16">
      <div className="flex items-center gap-2 text-sm text-muted">
        <Link href="/blog" className="hover:text-white">
          Blog
        </Link>
        <span>/</span>
        <span>{category.label}</span>
      </div>

      <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl">{category.label}</h1>
      <p className="mt-5 text-lg text-muted">{category.description}</p>

      <div className="mt-10">
        {posts.length === 0 ? (
          <div className="card p-6 text-sm text-muted">
            No posts in this category yet &mdash; check back soon.
          </div>
        ) : (
          <div className="space-y-3">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${category.slug}/${p.slug}`}
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

      <div className="mt-10">
        <Link href="/blog" className="text-sm text-gold hover:underline">
          ← All blog categories
        </Link>
      </div>
    </div>
  );
}
