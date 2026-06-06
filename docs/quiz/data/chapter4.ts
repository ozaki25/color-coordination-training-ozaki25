import type { Quiz } from "../types";

export const chapter4: Quiz[] = [
  {
    id: "q301",
    lesson: "lesson12",
    difficulty: "easy",
    question: "日本人男性で色覚特性がある人の割合に最も近いのはどれですか。",
    choices: ["約0.2%（500人に1人）", "約5%（20人に1人）", "約15%", "約30%"],
    answer: 1,
    explanation:
      "色覚特性のある人は男性で約5%、つまり20人に1人とされています。約0.2%（500人に1人）は女性の割合です。",
  },
  {
    id: "q302",
    lesson: "lesson12",
    difficulty: "normal",
    question: "先天性の色覚特性の中で、最も人数が多いタイプはどれですか。",
    choices: ["T型（3型）", "A型", "P型（1型）", "D型（2型）"],
    answer: 3,
    explanation:
      "D型（2型）が約3.5%で最も多く、P型（1型）は約1.5%です。T型（3型）は非常にまれ、A型もまれなため、最多はD型です。",
  },
  {
    id: "q303",
    lesson: "lesson12",
    difficulty: "easy",
    question: "一般的な色覚を持つタイプを表す記号はどれですか。",
    choices: ["C型", "P型", "D型", "T型"],
    answer: 0,
    explanation:
      "一般的な色覚はC型（Common）と呼ばれます。P型・D型・T型はそれぞれ錐体の異常による色覚特性のタイプを表します。",
  },
  {
    id: "q304",
    lesson: "lesson13",
    difficulty: "normal",
    question: "P型（1型）色覚で異常がある錐体はどれですか。",
    choices: ["S錐体", "M錐体", "L錐体", "桿体"],
    answer: 2,
    explanation:
      "P型（1型）はL錐体（長波長＝赤系に感度をもつ錐体）の異常です。M錐体の異常はD型、S錐体の異常はT型です。桿体は明暗を担い色覚特性とは別です。",
  },
  {
    id: "q305",
    lesson: "lesson13",
    difficulty: "hard",
    question: "P型（1型）の見え方の特徴として正しいものはどれですか。",
    choices: [
      "青みが極端に明るく見える",
      "赤みが暗く弱く見え、赤と黒などが混同しやすい",
      "黄色だけが見えなくなる",
      "すべての色が灰色に見える",
    ],
    answer: 1,
    explanation:
      "P型はL錐体の異常により赤みが暗く弱く感じられ、赤と緑・赤と茶・赤と黒などが混同しやすくなります。すべてが灰色に見えるわけではありません。",
  },
  {
    id: "q306",
    lesson: "lesson14",
    difficulty: "normal",
    question: "D型（2型）色覚で異常がある錐体はどれですか。",
    choices: ["L錐体", "S錐体", "M錐体", "桿体"],
    answer: 2,
    explanation:
      "D型（2型）はM錐体（中波長＝緑系に感度をもつ錐体）の異常です。L錐体の異常はP型、S錐体の異常はT型です。",
  },
  {
    id: "q307",
    lesson: "lesson14",
    difficulty: "easy",
    question:
      "D型（2型）の人が混同しやすい色の組み合わせとして適切なものはどれですか。",
    choices: ["赤と緑、緑と茶", "青と白", "黒と白", "黄と紫だけ"],
    answer: 0,
    explanation:
      "D型はM錐体の異常により赤と緑、緑と茶などが混同しやすくなります。青と白や黒と白は明度差が大きく区別しやすいため誤りです。",
  },
  {
    id: "q308",
    lesson: "lesson15",
    difficulty: "hard",
    question: "色度図上の「混同色線」が表しているものはどれですか。",
    choices: [
      "明るさが等しい色を結んだ線",
      "補色どうしを結んだ線",
      "色温度が等しい色を結んだ線",
      "同じ色に見えてしまう色を結んだ直線",
    ],
    answer: 3,
    explanation:
      "混同色線は色度図上で同じ色に見えてしまう色どうしを結んだ直線です。同じ線上の色は色相では区別しにくいですが、明度差があれば識別できる場合があります。",
  },
  {
    id: "q309",
    lesson: "lesson15",
    difficulty: "normal",
    question: "T型（3型）の人が区別しにくい色の組み合わせはどれですか。",
    choices: ["赤と緑", "白と黒", "青と黄", "赤と黒"],
    answer: 2,
    explanation:
      "T型（3型）はS錐体の異常で混同色線が青方向に収束し、青と黄の区別が困難になります。赤と緑の区別が困難なのはP型・D型です。",
  },
  {
    id: "q310",
    lesson: "lesson16",
    difficulty: "easy",
    question:
      "色覚特性のある人の見え方について、最も適切な説明はどれですか。",
    choices: [
      "特定の色の組み合わせが区別しにくい",
      "色がまったく見えていない",
      "明るさが判断できない",
      "白黒だけで世界が見えている",
    ],
    answer: 0,
    explanation:
      "色覚特性は色が「見えていない」のではなく、特定の色の組み合わせが「区別しにくい」状態です。信号機やグラフの赤緑、地図の色分けなどで困りごとが生じます。",
  },
];
