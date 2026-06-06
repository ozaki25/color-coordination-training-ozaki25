# 色彩検定 UC 級 学習コンテンツ

[![CI](https://github.com/ozaki25/color-coordination-test-training-ozaki25/actions/workflows/build.yml/badge.svg)](https://github.com/ozaki25/color-coordination-test-training-ozaki25/actions/workflows/build.yml)

色彩検定 UC 級（色のユニバーサルデザイン級）の合格を目指す学習コンテンツです。

公益社団法人 色彩検定協会（AFT）の公式テキスト（2022 改訂版）の全 7 章に対応し、1 レッスン 1 トピックで段階的に学べるように構成しています。

## コンテンツ

- **27 レッスン**: 公式テキスト全 7 章をカバー（1 レッスン 15 分程度）
- **112 問のドリル**: 章別出題・ランダム・復習に対応。回答履歴をブラウザに保存
- **10 種類の図版**: 可視光スペクトル・色相環・分光感度曲線など、色そのものを示す SVG 図解
- **学習進捗管理**: レッスンの読了状況をブラウザに記録し、達成度を可視化

## 技術スタック

- [VitePress](https://vitepress.dev/) + PWA（`@vite-pwa/vitepress`）
- [Mermaid](https://mermaid.js.org/)（`vitepress-plugin-mermaid`）— 図解
- vitepress-plugin-tabs — タブ表示
- textlint（`preset-ja-technical-writing`）— 日本語文章の校正
- Vue 3 — ドリル・進捗管理のカスタムコンポーネント
- Vercel Analytics / Speed Insights
- GitHub Actions — `main` と PR でビルド・lint・ドリル検証

## クイックスタート

```bash
npm install
npm run docs:dev   # 開発サーバー http://localhost:5173
```

## 主なコマンド

```bash
npm run docs:dev       # ローカル開発サーバー
npm run docs:build     # 本番ビルド
npm run docs:lint      # textlint で日本語を校正
npm run quiz:validate  # ドリルデータの検証
npm run pwa:icons      # logo.svg から PWA アイコンを生成
```

## ディレクトリ構成

```
docs/
  index.md                     トップページ
  introduction/index.md        はじめに（試験概要・学習の進め方）
  lessons/lessonNN/index.md    各レッスン（lesson01〜lesson27）
  quiz/                        ドリル（4 択問題）
    types.ts                   型定義・章メタ情報
    data/chapterN.ts           章ごとの問題データ
    chapterN/index.md          章別ドリルページ
    random/ random-5/ random-10/ review/   ランダム・復習ページ
  public/diagrams/             SVG 図版
  .vitepress/
    config.mts                 サイト設定（nav・サイドバー・PWA・SEO）
    theme/                     カスタムテーマ・Vue コンポーネント
scripts/quiz-validate.mjs      ドリルデータの検証スクリプト
```

## 章とレッスンの対応

| 章 | テーマ | レッスン |
|----|--------|----------|
| 1 | 色のUDの考え方 | lesson01〜03 |
| 2 | 色が見えるしくみ | lesson04〜07 |
| 3 | 色の表し方 | lesson08〜11 |
| 4 | 色覚の多様性 | lesson12〜16 |
| 5 | 高齢者の見え方 | lesson17〜19 |
| 6 | 色のUD配色の実践 | lesson20〜23 |
| 7 | 色のUDの進め方 | lesson24〜27 |

## レッスン・ドリルの追加方法

詳細は [`CLAUDE.md`](./CLAUDE.md) を参照してください。執筆スタイル・用語統一ルール（「色覚特性」「P型（1型）」など）・統計値の標準値・図版作成のガイドラインが記載されています。

## デプロイ

- main ブランチへの push で Vercel が自動デプロイします
- 公開先: https://color-coordination-test-training-ozaki25.vercel.app

## 参考にしたリポジトリ

同じ仕組みで作られた学習コンテンツ:

- [web-front-training-ozaki25](https://github.com/ozaki25/web-front-training-ozaki25)
- [web-front-handson-ozaki25](https://github.com/ozaki25/web-front-handson-ozaki25)
