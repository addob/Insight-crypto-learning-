export interface QuizQuestion {
  q: string;
  options: [string, string, string, string];
  correct: 0 | 1 | 2 | 3;
  explain?: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
}

export interface CourseDay {
  day: number;
  week: number;
  title: string;
  summary: string;
  lesson: string[]; // paragraphs
  keyPoints: string[];
  /** Optional glossary of terms introduced in this day's lesson. */
  terms?: GlossaryTerm[];
  /** Optional worked/practical exercise, rendered as its own section. */
  exercise?: { title: string; body: string[] };
  /** Optional standalone security callout for this day. */
  securityNote?: { title: string; body: string[] };
  /** Optional ungraded reflection/homework prompts shown after the quiz. */
  homework?: string[];
  quiz: QuizQuestion[]; // exactly 10 questions, pass = 9/10 (90%)
}
