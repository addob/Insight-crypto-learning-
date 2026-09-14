import { courseDays } from "../src/data/curriculum";

let errors: string[] = [];

if (courseDays.length !== 60) {
  errors.push(`Expected 60 days, found ${courseDays.length}`);
}

const seenDays = new Set<number>();
courseDays.forEach((d, idx) => {
  const label = `Day ${d.day} ("${d.title}")`;

  if (d.day !== idx + 1) {
    errors.push(`${label}: expected day number ${idx + 1} but got ${d.day}`);
  }
  if (seenDays.has(d.day)) {
    errors.push(`${label}: duplicate day number`);
  }
  seenDays.add(d.day);

  if (!d.title || d.title.trim().length === 0) errors.push(`${label}: missing title`);
  if (!d.lesson || d.lesson.length < 2) errors.push(`${label}: lesson should have multiple paragraphs`);
  if (!d.keyPoints || d.keyPoints.length < 3) errors.push(`${label}: expected at least 3 key points`);

  if (!d.quiz || d.quiz.length !== 10) {
    errors.push(`${label}: expected exactly 10 quiz questions, found ${d.quiz?.length}`);
  } else {
    d.quiz.forEach((q, qi) => {
      if (!q.q || q.q.trim().length === 0) {
        errors.push(`${label} Q${qi + 1}: missing question text`);
      }
      if (!q.options || q.options.length !== 4) {
        errors.push(`${label} Q${qi + 1}: expected exactly 4 options`);
      }
      if (typeof q.correct !== "number" || q.correct < 0 || q.correct > 3) {
        errors.push(`${label} Q${qi + 1}: correct index must be 0-3`);
      }
      const uniqueOptions = new Set(q.options?.map((o) => o.trim().toLowerCase()));
      if (q.options && uniqueOptions.size !== q.options.length) {
        errors.push(`${label} Q${qi + 1}: duplicate options detected`);
      }
    });
  }
});

if (errors.length > 0) {
  console.error(`\n❌ Curriculum validation FAILED with ${errors.length} issue(s):\n`);
  errors.forEach((e) => console.error(" - " + e));
  process.exit(1);
} else {
  console.log(`\n✅ Curriculum validation passed: 60 days, 600 quiz questions, all well-formed.\n`);
}
