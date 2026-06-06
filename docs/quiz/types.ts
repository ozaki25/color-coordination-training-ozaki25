export type ChapterId = 1 | 2 | 3 | 4 | 5 | 6;

export type Difficulty = "easy" | "normal" | "hard";

export type Quiz = {
  id: string;
  lesson: string;
  difficulty: Difficulty;
  question: string;
  choices: [string, string, string, string];
  answer: 0 | 1 | 2 | 3;
  explanation: string;
};

export const STORAGE_KEY = "quiz-answers";
export const STREAK_KEY = "quiz-streak-dates";

export type StoredAnswer = { correct: boolean; ts: number; selectedIndex?: number | null };
export type StoredAnswers = Record<string, StoredAnswer>;

export type ChapterMeta = {
  id: ChapterId;
  title: string;
  lessonRange: [string, string];
};

export const chapters: ChapterMeta[] = [
  { id: 1, title: "色のユニバーサルデザイン", lessonRange: ["lesson01", "lesson03"] },
  { id: 2, title: "色が見えるしくみ", lessonRange: ["lesson04", "lesson08"] },
  { id: 3, title: "色の表し方", lessonRange: ["lesson09", "lesson12"] },
  { id: 4, title: "色覚のタイプによる色の見え方", lessonRange: ["lesson13", "lesson20"] },
  { id: 5, title: "高齢者の見え方", lessonRange: ["lesson21", "lesson24"] },
  { id: 6, title: "色のUDの進め方", lessonRange: ["lesson25", "lesson28"] },
];
