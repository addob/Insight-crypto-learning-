export interface BlogCategoryDef {
  slug: string;
  label: string;
  description: string;
}

export const BLOG_CATEGORIES: BlogCategoryDef[] = [
  {
    slug: "crypto-guides",
    label: "Crypto Guides",
    description: "Evergreen explainers covering the fundamentals: Bitcoin, blockchain, wallets, DeFi, and more.",
  },
  {
    slug: "crypto-security",
    label: "Crypto Security",
    description: "Practical guides on spotting scams, protecting your funds, and researching projects safely.",
  },
  {
    slug: "crypto-regulation",
    label: "Crypto Regulation",
    description: "How cryptocurrency is regulated, and what changes in the law actually mean for you.",
  },
  {
    slug: "crypto-news",
    label: "Crypto News",
    description: "What's happening in crypto, explained in plain English — not just headlines.",
  },
];

export function getBlogCategory(slug: string): BlogCategoryDef | undefined {
  return BLOG_CATEGORIES.find((c) => c.slug === slug);
}

export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  description: string;
  /** ISO 8601 date, e.g. "2026-01-15" */
  publishedAt: string;
  /** Set (and keep current) for any post whose accuracy is time- or
   *  jurisdiction-sensitive, e.g. regulation or tax content. */
  updatedAt?: string;
  author: string;
  body: string[];
}

// No posts yet — add entries here as they're written. The listing,
// category, and individual post pages are all fully wired up and will pick
// up new entries automatically on the next build.
export const blogPosts: BlogPost[] = [];

export function getBlogPost(category: string, slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.category === category && p.slug === slug);
}

export function postsInCategory(category: string): BlogPost[] {
  return sortedBlogPosts().filter((p) => p.category === category);
}

export function sortedBlogPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}
