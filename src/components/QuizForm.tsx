"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface ClientQuestion {
  q: string;
  options: [string, string, string, string];
}

interface SubmitResult {
  percent: number;
  passed: boolean;
  correctCount: number;
  total: number;
  results: { correct: boolean; correctAnswer: number }[];
}

export default function QuizForm({
  day,
  questions,
  alreadyPassed,
}: {
  day: number;
  questions: ClientQuestion[];
  alreadyPassed: boolean;
}) {
  const router = useRouter();
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );
  const [result, setResult] = useState<SubmitResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [started, setStarted] = useState(alreadyPassed ? false : true);

  const allAnswered = answers.every((a) => a !== null);

  function selectAnswer(qIndex: number, optionIndex: number) {
    if (result) return;
    setAnswers((prev) => {
      const next = [...prev];
      next[qIndex] = optionIndex;
      return next;
    });
  }

  async function handleSubmit() {
    if (!allAnswered) return;
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/quiz/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ day, answers }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Could not submit your quiz. Please try again.");
        setSubmitting(false);
        return;
      }

      setResult(data);
      router.refresh();
    } catch {
      setError("Could not submit your quiz. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function retake() {
    setAnswers(Array(questions.length).fill(null));
    setResult(null);
    setStarted(true);
  }

  if (alreadyPassed && !started) {
    return (
      <div className="card flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-mint">✓ You&rsquo;ve already passed this day&rsquo;s quiz.</p>
          <p className="mt-1 text-sm text-muted">You can retake it any time to refresh your memory.</p>
        </div>
        <button onClick={retake} className="btn-secondary whitespace-nowrap">
          Retake quiz
        </button>
      </div>
    );
  }

  if (result) {
    return (
      <div className="card p-6">
        <div className="mb-6 text-center">
          <p className="text-5xl font-extrabold" style={{ color: result.passed ? "#3ddc97" : "#f2555a" }}>
            {result.percent}%
          </p>
          <p className="mt-2 text-muted">
            {result.correctCount} / {result.total} correct
          </p>
          {result.passed ? (
            <p className="mt-4 font-semibold text-mint">
              🎉 You passed! The next day is now unlocked.
            </p>
          ) : (
            <p className="mt-4 font-semibold text-danger">
              You need 90% to pass. Review the lesson above and try again.
            </p>
          )}
        </div>

        <div className="space-y-4">
          {questions.map((q, i) => {
            const r = result.results[i];
            const chosen = answers[i];
            return (
              <div key={i} className={`rounded-lg border p-4 ${r.correct ? "border-mint/30" : "border-danger/30"}`}>
                <p className="mb-2 text-sm font-medium">
                  {i + 1}. {q.q}
                </p>
                <p className="text-xs text-muted">
                  Your answer: {chosen !== null ? q.options[chosen] : "—"}{" "}
                  {r.correct ? "✓" : `✗ (correct: ${q.options[r.correctAnswer]})`}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button onClick={retake} className="btn-secondary">
            Retake quiz
          </button>
          {!result.passed && (
            <Link href="/dashboard" className="btn-secondary">
              Back to dashboard
            </Link>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {questions.map((q, qi) => (
        <div key={qi} className="card p-5">
          <p className="mb-3 text-sm font-medium">
            {qi + 1}. {q.q}
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {q.options.map((opt, oi) => {
              const selected = answers[qi] === oi;
              return (
                <button
                  key={oi}
                  type="button"
                  onClick={() => selectAnswer(qi, oi)}
                  className={`rounded-md border px-3 py-2 text-left text-sm transition ${
                    selected
                      ? "border-gold bg-gold/10 text-white"
                      : "border-border text-muted hover:border-white/30"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {error && (
        <p className="rounded-md border border-danger/40 bg-danger/10 px-3 py-2 text-sm text-danger">
          {error}
        </p>
      )}

      <button
        onClick={handleSubmit}
        disabled={!allAnswered || submitting}
        className="btn-primary w-full text-center disabled:cursor-not-allowed disabled:opacity-50"
      >
        {submitting ? "Submitting…" : allAnswered ? "Submit quiz" : `Answer all ${questions.length} questions to submit`}
      </button>
    </div>
  );
}
