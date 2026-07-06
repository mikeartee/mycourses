import type { Quiz } from './content';

export interface QuizResponses {
  [questionId: string]: string[];
}

export interface QuestionResult {
  id: string;
  correct: boolean;
  feedback?: string;
}

export interface QuizResult {
  total: number;
  correctCount: number;
  score: number;
  passed: boolean;
  results: QuestionResult[];
}

/**
 * Grade a quiz against a set of responses. Pure function — no DOM, no IO.
 * A question is correct only when the chosen answer id set exactly matches
 * the correct answer id set (works for both single- and multi-select).
 */
export function gradeQuiz(quiz: Quiz, responses: QuizResponses): QuizResult {
  const results: QuestionResult[] = quiz.questions.map((q) => {
    const correctIds = q.answers
      .filter((a) => a.correct)
      .map((a) => a.id)
      .sort();
    const chosen = (responses[q.id] ?? []).slice().sort();
    const correct =
      correctIds.length > 0 &&
      correctIds.length === chosen.length &&
      correctIds.every((id, i) => id === chosen[i]);
    return { id: q.id, correct, feedback: q.feedback };
  });

  const total = quiz.questions.length;
  const correctCount = results.filter((r) => r.correct).length;
  const score = total === 0 ? 0 : Math.round((correctCount / total) * 100);
  const passed = score >= (quiz.passingScore ?? 0);

  return { total, correctCount, score, passed, results };
}
