import Link from "next/link";
import { courseDays, WEEK_TITLES } from "@/data/curriculum";

interface Props {
  unlockedDay: number;
  hasAccess: boolean;
  passedDays: Set<number>;
  linkPrefix?: string; // "/course" for logged-in dashboard, undefined for public preview
}

export default function CourseRoadmap({ unlockedDay, hasAccess, passedDays, linkPrefix = "/course" }: Props) {
  const weeks = Array.from(new Set(courseDays.map((d) => d.week))).sort((a, b) => a - b);

  return (
    <div className="space-y-10">
      {weeks.map((week) => (
        <div key={week}>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gold">
            Week {week} · {WEEK_TITLES[week]}
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {courseDays
              .filter((d) => d.week === week)
              .map((d) => {
                const passed = passedDays.has(d.day);
                const accessible = d.day === 1 || (hasAccess && d.day <= unlockedDay);
                const isNext = d.day === unlockedDay && !passed;

                const cardClasses = [
                  "card flex items-start gap-3 p-4 transition",
                  accessible ? "hover:border-gold" : "opacity-60",
                ].join(" ");

                const content = (
                  <>
                    <div
                      className={[
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                        passed
                          ? "bg-mint text-ink"
                          : accessible
                          ? "bg-gold text-ink"
                          : "bg-panel2 text-muted",
                      ].join(" ")}
                    >
                      {passed ? "✓" : accessible ? d.day : "🔒"}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted">
                        Day {d.day}
                        {isNext && <span className="ml-2 text-gold">· Up next</span>}
                      </p>
                      <p className="truncate text-sm font-medium">{d.title}</p>
                    </div>
                  </>
                );

                if (!accessible) {
                  return (
                    <div key={d.day} className={cardClasses}>
                      {content}
                    </div>
                  );
                }

                return (
                  <Link key={d.day} href={`${linkPrefix}/${d.day}`} className={cardClasses}>
                    {content}
                  </Link>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
}
