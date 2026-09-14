export interface QuizQuestion {
  q: string;
  options: [string, string, string, string];
  correct: 0 | 1 | 2 | 3;
  explain?: string;
}

export interface CourseDay {
  day: number;
  week: number;
  title: string;
  summary: string;
  lesson: string[]; // paragraphs
  keyPoints: string[];
  quiz: QuizQuestion[]; // exactly 10 questions, pass = 9/10 (90%)
}
