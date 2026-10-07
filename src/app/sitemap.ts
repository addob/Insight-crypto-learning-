import type { MetadataRoute } from "next";
import { courseDays } from "@/data/curriculum";
import { glossary } from "@/data/glossary";
import { scams } from "@/data/scams";
import { BLOG_CATEGORIES, blogPosts } from "@/data/blog";
import { dayUrlSlug } from "@/lib/slug";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://insightcryptolearning.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/pricing`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/about`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${siteUrl}/crypto-for-beginners`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/crypto-security`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/blockchain`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/defi`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/crypto-regulation`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/crypto-glossary`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/crypto-scams`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteUrl}/signup`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/contact`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/legal/terms`, changeFrequency: "yearly", priority: 0.1 },
    { url: `${siteUrl}/legal/privacy`, changeFrequency: "yearly", priority: 0.1 },
    { url: `${siteUrl}/legal/disclaimer`, changeFrequency: "yearly", priority: 0.1 },
  ];

  const dayPages: MetadataRoute.Sitemap = courseDays.map((d) => ({
    url: `${siteUrl}/course/${dayUrlSlug(d.day, d.title)}`,
    changeFrequency: "monthly",
    priority: d.day <= 2 ? 0.8 : 0.5,
  }));

  const glossaryPages: MetadataRoute.Sitemap = glossary.map((g) => ({
    url: `${siteUrl}/crypto-glossary/${g.slug}`,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  const scamPages: MetadataRoute.Sitemap = scams.map((s) => ({
    url: `${siteUrl}/crypto-scams/${s.slug}`,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const blogCategoryPages: MetadataRoute.Sitemap = BLOG_CATEGORIES.map((c) => ({
    url: `${siteUrl}/blog/${c.slug}`,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const blogPostPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${siteUrl}/blog/${p.category}/${p.slug}`,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [
    ...staticPages,
    ...dayPages,
    ...glossaryPages,
    ...scamPages,
    ...blogCategoryPages,
    ...blogPostPages,
  ];
}
