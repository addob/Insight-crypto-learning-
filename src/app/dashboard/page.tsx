import { redirect } from "next/navigation";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { computeUnlockedDay, hasActiveAccess, TOTAL_DAYS } from "@/lib/access";
import CourseRoadmap from "@/components/CourseRoadmap";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    redirect("/login?callbackUrl=/dashboard");
  }

  const userId = (session.user as { id: string }).id;
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { progress: true },
  });

  if (!user) {
    redirect("/login?callbackUrl=/dashboard");
  }

  const access = hasActiveAccess(user);
  const unlockedDay = computeUnlockedDay(user.progress);
  const passedDays = new Set(user.progress.filter((p) => p.passed).map((p) => p.day));
  const daysPassed = passedDays.size;
  const progressPercent = Math.round((daysPassed / TOTAL_DAYS) * 100);

  return (
    <div className="container-page py-12">
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm text-muted">Welcome back,</p>
          <h1 className="text-3xl font-extrabold">{user.name}</h1>
        </div>
        <div className="card w-full max-w-sm p-5">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-muted">Course progress</span>
            <span className="font-semibold">{daysPassed} / {TOTAL_DAYS} days</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-panel2">
            <div
              className="h-full rounded-full bg-gold"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {!access && (
        <div className="card mb-10 flex flex-col items-start gap-4 border-gold/50 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold">
              You&rsquo;re on the free preview — Day 1 only.
            </p>
            <p className="mt-1 text-sm text-muted">
              Enrol for £5/month or a one-off £50 to unlock all 60 days.
            </p>
          </div>
          <Link href="/pricing" className="btn-primary whitespace-nowrap">
            View plans
          </Link>
        </div>
      )}

      <h2 className="mb-6 text-xl font-bold">Your 60-day roadmap</h2>
      <CourseRoadmap unlockedDay={unlockedDay} hasAccess={access} passedDays={passedDays} />
    </div>
  );
}
