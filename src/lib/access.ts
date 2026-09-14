import type { User, Progress } from "@prisma/client";

export const TOTAL_DAYS = 60;
export const PASS_THRESHOLD_PERCENT = 90;

/** Whether a user currently has paid access to the course. */
export function hasActiveAccess(user: Pick<User, "hasLifetime" | "accessUntil">): boolean {
  if (user.hasLifetime) return true;
  if (user.accessUntil && new Date(user.accessUntil).getTime() > Date.now()) return true;
  return false;
}

/**
 * Day 1 is always unlocked (once the student has access). Day N (N>1) is
 * unlocked only once Day N-1 has been passed at >= 90%.
 */
export function computeUnlockedDay(progress: Pick<Progress, "day" | "passed">[]): number {
  const passedDays = new Set(progress.filter((p) => p.passed).map((p) => p.day));
  let unlocked = 1;
  for (let day = 1; day <= TOTAL_DAYS; day++) {
    if (passedDays.has(day)) {
      unlocked = Math.min(day + 1, TOTAL_DAYS);
    } else {
      break;
    }
  }
  return unlocked;
}

/** Day 1 is always a free preview. Every other day requires active paid access
 *  AND having unlocked that far via passed quizzes. */
export function canAccessDay(
  day: number,
  user: Pick<User, "hasLifetime" | "accessUntil">,
  progress: Pick<Progress, "day" | "passed">[]
): boolean {
  if (day === 1) return true;
  if (!hasActiveAccess(user)) return false;
  return day <= computeUnlockedDay(progress);
}

export function scoreToPercent(correct: number, total: number): number {
  if (total <= 0) return 0;
  return Math.round((correct / total) * 100);
}

export function isPassingScore(percent: number): boolean {
  return percent >= PASS_THRESHOLD_PERCENT;
}
