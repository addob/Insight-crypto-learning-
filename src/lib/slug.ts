function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/'/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** SEO-friendly URL slug for a course day, e.g. "day-1-what-is-money". */
export function dayUrlSlug(day: number, title: string): string {
  return `day-${day}-${slugify(title)}`;
}

/** Extracts the day number from a "day-N[-anything]" URL slug, or null if invalid. */
export function parseDaySlug(slug: string): number | null {
  const match = /^day-(\d+)(?:-.*)?$/.exec(slug);
  if (!match) return null;
  const day = Number(match[1]);
  return Number.isInteger(day) && day > 0 ? day : null;
}
