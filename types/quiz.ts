export type QuizDifficulty = 'basic' | 'intermediate' | 'advanced';

export interface QuizQuestion {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    difficulty: QuizDifficulty;
}

export interface QuizResult {
    score: number;
    totalQuestions: number;
    percentage: number;
    passed: boolean;
    timeTakenSeconds: number;
    answers: {
        questionId: string;
        selected: number;
        correct: boolean;
    }[];
}
