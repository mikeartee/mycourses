import { describe, it, expect } from 'vitest';
import { gradeQuiz } from './quiz';
import type { Quiz } from './content';

const quiz: Quiz = {
  title: 'T',
  passingScore: 70,
  questions: [
    {
      id: 'q1',
      type: 'MULTIPLE_CHOICE',
      question: 'single',
      answers: [
        { id: 'a', text: 'A', correct: true },
        { id: 'b', text: 'B', correct: false },
      ],
      feedback: 'fb1',
    },
    {
      id: 'q2',
      type: 'MULTIPLE_RESPONSE',
      question: 'multi',
      answers: [
        { id: 'a', text: 'A', correct: true },
        { id: 'b', text: 'B', correct: true },
        { id: 'c', text: 'C', correct: false },
      ],
    },
    {
      id: 'q3',
      type: 'MULTIPLE_CHOICE',
      question: 'single2',
      answers: [
        { id: 'a', text: 'A', correct: true },
        { id: 'b', text: 'B', correct: false },
      ],
    },
  ],
};

describe('gradeQuiz', () => {
  it('scores a perfect run as 100 and passed', () => {
    const r = gradeQuiz(quiz, { q1: ['a'], q2: ['a', 'b'], q3: ['a'] });
    expect(r.correctCount).toBe(3);
    expect(r.score).toBe(100);
    expect(r.passed).toBe(true);
  });

  it('marks multi-response wrong when only partially selected', () => {
    const r = gradeQuiz(quiz, { q1: ['a'], q2: ['a'], q3: ['a'] });
    const q2 = r.results.find((x) => x.id === 'q2')!;
    expect(q2.correct).toBe(false);
    expect(r.correctCount).toBe(2);
  });

  it('marks multi-response wrong when an extra wrong answer is included', () => {
    const r = gradeQuiz(quiz, { q1: ['a'], q2: ['a', 'b', 'c'], q3: ['a'] });
    expect(r.results.find((x) => x.id === 'q2')!.correct).toBe(false);
  });

  it('fails below the passing score and reports the score', () => {
    const r = gradeQuiz(quiz, { q1: ['b'], q2: ['c'], q3: ['b'] });
    expect(r.correctCount).toBe(0);
    expect(r.score).toBe(0);
    expect(r.passed).toBe(false);
  });

  it('treats an unanswered question as incorrect', () => {
    const r = gradeQuiz(quiz, { q1: ['a'] });
    expect(r.results.find((x) => x.id === 'q2')!.correct).toBe(false);
    expect(r.results.find((x) => x.id === 'q3')!.correct).toBe(false);
  });

  it('carries feedback through to results', () => {
    const r = gradeQuiz(quiz, { q1: ['a'] });
    expect(r.results.find((x) => x.id === 'q1')!.feedback).toBe('fb1');
  });
});
