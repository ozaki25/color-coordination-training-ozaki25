#!/usr/bin/env node
// CLAUDE.md の執筆ルールのうち、機械的に検出できるものを検査する。
// textlint（日本語の校正）とは別レイヤーで、「用語の統一」「AI生成感のある
// 文体」「見出しのスタイル」「禁止記法」など本プロジェクト固有の規約を守る。
//
// 使い方: node scripts/style-check.mjs   （違反があれば exit 1）
// 例外を許可したい行には行内に `style-ok` を含むコメントを置く:
//   ... 「色盲」「色弱」はかつての呼称です。<!-- style-ok: 歴史的呼称の説明 -->
//
// 検査はコードフェンス（``` ）とフロントマター（先頭の --- ... ---）を除外する。
// Mermaid だけは <br> 検出のため中身も見る。

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const DOCS_DIR = join(ROOT, "docs");

// --- 検査ルール定義 -------------------------------------------------
// scope:
//   "prose"   … 地の文（コードフェンス内は除外）
//   "heading" … 見出し行 / admonition タイトル
//   "mermaid" … ```mermaid フェンスの中身
const RULES = [
  {
    id: "forbidden-term",
    scope: "prose",
    test: (line) => /色盲|色弱|弱視/.test(line),
    message:
      "禁止用語です。色覚タイプは「色覚特性／色覚の多様性」、視覚状態は「ロービジョン」を使ってください（歴史的呼称の説明など正当な場合は行末に <!-- style-ok --> を付けて許可）。",
  },
  {
    id: "ai-poetic",
    scope: "prose",
    test: (line) =>
      /なぜでしょうか|でしょうか。それは|の正体です|がその答えです|に答えがあります/.test(line),
    message:
      "AI生成感のある詩的な語り口です。問いかけ+即答やドラマチックな締めは、平叙文・具体的な記述に直してください。",
  },
  {
    id: "talkative-heading",
    scope: "heading",
    test: (text) => /(しよう|しましょう|してみよう|してみましょう|してみる|みましょう)$/.test(text),
    message:
      "話しかけ調の見出しです。見出しは体言止め・名詞句にしてください（「〜しよう」「〜してみる」は使わない）。",
  },
  {
    id: "em-dash",
    scope: "prose",
    test: (line) => /——/.test(line),
    message:
      "本文に em dash（——）を使わないでください（文を分けるかカッコを使う。タイトルの「タイトル — サブタイトル」区切りのみ例外）。",
  },
  {
    id: "hr-separator",
    scope: "prose",
    test: (line) => /^---+$/.test(line.trim()),
    message:
      "セクション区切りに水平線（---）を使わないでください。見出し自体が区切りになります。",
  },
  {
    id: "official-text-claim",
    scope: "prose",
    test: (line) => /公式テキスト.{0,8}(対応|準拠)/.test(line),
    message:
      "「公式テキストに対応／準拠」とは書かないでください（裏付けが取れていないため）。公式の用語をそのまま使う表現に。",
  },
  {
    id: "mermaid-br",
    scope: "mermaid",
    test: (line) => /<br\s*\/?>/.test(line),
    message:
      "Mermaid のラベル内改行は \\n を使ってください（<br/> は使わない）。",
  },
];

// --- Markdown ファイルを再帰収集 -----------------------------------
function collectMarkdown(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) {
      if (name === "node_modules" || name === ".vitepress" || name === "dist")
        continue;
      out.push(...collectMarkdown(p));
    } else if (name.endsWith(".md")) {
      out.push(p);
    }
  }
  return out;
}

// 見出し行 / admonition タイトルから比較対象のテキストを取り出す
function headingText(line) {
  let m = line.match(/^#{1,6}\s+(.*?)\s*$/);
  if (m) return m[1];
  m = line.match(/^:::\s*(?:tip|info|warning|danger|details)\s+(.*?)\s*$/);
  if (m) return m[1];
  return null;
}

const problems = [];

for (const file of collectMarkdown(DOCS_DIR)) {
  const rel = relative(ROOT, file);
  const lines = readFileSync(file, "utf8").split("\n");

  let inFence = false;
  let fenceLang = "";
  let inFrontmatter = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const lineNo = i + 1;

    // フロントマター（ファイル先頭の --- ... ---）
    if (i === 0 && line.trim() === "---") {
      inFrontmatter = true;
      continue;
    }
    if (inFrontmatter) {
      if (line.trim() === "---") inFrontmatter = false;
      continue;
    }

    // コードフェンス開閉
    const fenceMatch = line.match(/^```(\w*)/);
    if (fenceMatch) {
      if (!inFence) {
        inFence = true;
        fenceLang = fenceMatch[1];
      } else {
        inFence = false;
        fenceLang = "";
      }
      continue;
    }

    // 行内 style-ok で除外
    if (line.includes("style-ok")) continue;

    const isHeading = headingText(line) !== null;

    for (const rule of RULES) {
      if (rule.scope === "mermaid") {
        if (inFence && fenceLang === "mermaid" && rule.test(line)) {
          problems.push({ rel, lineNo, rule, line });
        }
        continue;
      }
      if (inFence) continue; // prose/heading はコード内をスキップ
      if (rule.scope === "heading") {
        if (isHeading && rule.test(headingText(line))) {
          problems.push({ rel, lineNo, rule, line });
        }
      } else {
        // prose
        if (rule.test(line)) {
          problems.push({ rel, lineNo, rule, line });
        }
      }
    }
  }
}

console.log("=== Style check (CLAUDE.md ルール) ===");
if (problems.length === 0) {
  console.log("✓ 違反は見つかりませんでした。");
  process.exit(0);
}

const byRule = {};
for (const p of problems) (byRule[p.rule.id] ||= []).push(p);

for (const [id, list] of Object.entries(byRule)) {
  console.log(`\n✗ [${id}] ${list[0].rule.message}`);
  for (const p of list) {
    console.log(`    ${p.rel}:${p.lineNo}  ${p.line.trim().slice(0, 80)}`);
  }
}
console.log(`\n${problems.length} 件の違反。修正するか、正当な場合は行末に <!-- style-ok: 理由 --> を付けてください。`);
process.exit(1);
