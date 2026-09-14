import { NextResponse } from "next/server";
import { z } from "zod";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getCourseDay } from "@/data/curriculum";
import { canAccessDay, isPassingScore, scoreToPercent, TOTAL_DAYS } from "@/lib/access";

const submitSchema = z.object({
  day: z.number().int().min(1).max(TOTAL_DAYS),
  answers: z.array(z.number().int().min(0).max(3)),
});

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ error: "Please log in first." }, { status: 401 });
  }

  const body = await req.json().catch(() => null);
  const parsed = submitSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }
  const { day, answers } = parsed.data;

  const courseDay = getCourseDay(day);
  if (!courseDay) {
    return NextResponse.json({ error: "Day not found." }, { status: 404 });
  }
  if (answers.length !== courseDay.quiz.length) {
    return NextResponse.json({ error: "Answer count does not match the quiz." }, { status: 400 });
  }

  const userId = (session.user as { id: string }).id;
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { progress: true },
  });
  if (!user) {
    return NextResponse.json({ error: "User not found." }, { status: 404 });
  }

  if (!canAccessDay(day, user, user.progress)) {
    return NextResponse.json(
      { error: "You don't have access to this day yet." },
      { status: 403 }
    );
  }

  let correctCount = 0;
  const results = courseDay.quiz.map((q, i) => {
    const isCorrect = answers[i] === q.correct;
    if (isCorrect) correctCount++;
    return { correct: isCorrect, correctAnswer: q.correct };
  });

  const percent = scoreToPercent(correctCount, courseDay.quiz.length);
  const passed = isPassingScore(percent);

  const existing = user.progress.find((p) => p.day === day);
  const bestScore = Math.max(percent, existing?.bestScore ?? 0);
  const alreadyPassed = existing?.passed ?? false;

  await prisma.progress.upsert({
    where: { userId_day: { userId, day } },
    create: {
      userId,
      day,
      attempts: 1,
      bestScore: percent,
      passed,
      passedAt: passed ? new Date() : null,
    },
    update: {
      attempts: { increment: 1 },
      bestScore,
      passed: alreadyPassed || passed,
      passedAt: alreadyPassed ? existing?.passedAt : passed ? new Date() : undefined,
    },
  });

  return NextResponse.json({
    percent,
    passed,
    correctCount,
    total: courseDay.quiz.length,
    results,
  });
}
