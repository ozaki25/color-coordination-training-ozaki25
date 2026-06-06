import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import { withPwa } from "@vite-pwa/vitepress";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";
import cjkFriendly from "markdown-it-cjk-friendly";

export default withPwa(
  withMermaid(
    defineConfig({
      title: "色彩検定 UC 級 学習コンテンツ",
      description: "色彩検定 UC 級（色のユニバーサルデザイン級）の合格を目指す学習コンテンツ。公式テキスト全7章に対応した27レッスン、112問のドリル、図解で段階的に学べます。",
      lang: "ja",
      lastUpdated: true,
      cleanUrls: true,
      sitemap: {
        hostname: "https://color-coordination-test-training-ozaki25.vercel.app",
      },
      head: [
        ["meta", { name: "theme-color", content: "#c2185b" }],
        ["meta", { name: "author", content: "ozaki25" }],
        ["meta", { property: "og:type", content: "website" }],
        ["meta", { property: "og:locale", content: "ja_JP" }],
        ["meta", { property: "og:site_name", content: "色彩検定 UC 級 学習コンテンツ" }],
        ["meta", { property: "og:title", content: "色彩検定 UC 級 学習コンテンツ" }],
        ["meta", { property: "og:description", content: "色彩検定 UC 級（色のユニバーサルデザイン級）の合格を目指す学習コンテンツ。公式テキスト全7章に対応した27レッスン、112問のドリル、図解で段階的に学べます。" }],
        ["meta", { property: "og:image", content: "/ogp.png" }],
        ["meta", { name: "twitter:card", content: "summary_large_image" }],
        ["meta", { name: "twitter:title", content: "色彩検定 UC 級 学習コンテンツ" }],
        ["meta", { name: "twitter:description", content: "色彩検定 UC 級（色のユニバーサルデザイン級）の合格を目指す学習コンテンツ。27レッスン+112問のドリル付き。" }],
        ["meta", { name: "twitter:image", content: "/ogp.png" }],
      ],
      mermaid: {
        theme: "default",
        themeVariables: {
          primaryColor: "#fce4ec",
          primaryTextColor: "#1e293b",
          primaryBorderColor: "#c2185b",
          lineColor: "#475569",
          fontFamily: "sans-serif",
        },
      },
      markdown: {
        config(md) {
          md.use(tabsMarkdownPlugin);
          // 日本語の太字（**…**）で、閉じ ** の直前が全角閉じ括弧（）」など）の
          // 場合に強調が描画されない CJK flanking 問題を解消する。
          md.use(cjkFriendly);
        },
      },
      themeConfig: {
        nav: [
          { text: "ホーム", link: "/" },
          { text: "学習プラン", link: "/study-plan/" },
          { text: "ドリル", link: "/quiz/" },
        ],
        sidebar: {
          "/lessons/": [
            {
              text: "第1章 色のユニバーサルデザインの考え方",
              collapsed: false,
              items: [
                { text: "lesson01: ユニバーサルデザインとは何か", link: "/lessons/lesson01/" },
                { text: "lesson02: 色のユニバーサルデザイン（色のUD）とは", link: "/lessons/lesson02/" },
                { text: "lesson03: 色の機能的役割と情緒的役割", link: "/lessons/lesson03/" },
              ],
            },
            {
              text: "第2章 色が見えるしくみ",
              collapsed: true,
              items: [
                { text: "lesson04: 光と可視光線", link: "/lessons/lesson04/" },
                { text: "lesson05: 眼の構造", link: "/lessons/lesson05/" },
                { text: "lesson06: 錐体と桿体", link: "/lessons/lesson06/" },
                { text: "lesson07: 3色型色覚のしくみ", link: "/lessons/lesson07/" },
              ],
            },
            {
              text: "第3章 色の表し方",
              collapsed: true,
              items: [
                { text: "lesson08: 色の三属性", link: "/lessons/lesson08/" },
                { text: "lesson09: 有彩色と無彩色", link: "/lessons/lesson09/" },
                { text: "lesson10: マンセル表色系", link: "/lessons/lesson10/" },
                { text: "lesson11: PCCS（日本色研配色体系）", link: "/lessons/lesson11/" },
              ],
            },
            {
              text: "第4章 色覚の多様性",
              collapsed: true,
              items: [
                { text: "lesson12: 色覚の多様性", link: "/lessons/lesson12/" },
                { text: "lesson13: P型色覚（1型色覚）の見え方", link: "/lessons/lesson13/" },
                { text: "lesson14: D型色覚（2型色覚）の見え方", link: "/lessons/lesson14/" },
                { text: "lesson15: 混同色線の読み方", link: "/lessons/lesson15/" },
                { text: "lesson16: 色覚特性者が日常で感じる困りごと", link: "/lessons/lesson16/" },
              ],
            },
            {
              text: "第5章 高齢者の見え方",
              collapsed: true,
              items: [
                { text: "lesson17: 加齢による視機能の変化", link: "/lessons/lesson17/" },
                { text: "lesson18: 水晶体の黄変と青系色の見えにくさ", link: "/lessons/lesson18/" },
                { text: "lesson19: グレアと白内障", link: "/lessons/lesson19/" },
              ],
            },
            {
              text: "第6章 色のUD配色の実践",
              collapsed: true,
              items: [
                { text: "lesson20: 色のUD配色の基本方針", link: "/lessons/lesson20/" },
                { text: "lesson21: 明度差・色相差・彩度差による視認性向上", link: "/lessons/lesson21/" },
                { text: "lesson22: 色以外の情報付加", link: "/lessons/lesson22/" },
                { text: "lesson23: 身の回りの配色事例", link: "/lessons/lesson23/" },
              ],
            },
            {
              text: "第7章 色のUDの進め方",
              collapsed: true,
              items: [
                { text: "lesson24: 色のUD設計のプロセス", link: "/lessons/lesson24/" },
                { text: "lesson25: シミュレーションツールと確認方法", link: "/lessons/lesson25/" },
                { text: "lesson26: 配色の修正・改善方法", link: "/lessons/lesson26/" },
                { text: "lesson27: まとめ・試験直前チェックリスト", link: "/lessons/lesson27/" },
              ],
            },
          ],
          "/quiz/": [
            {
              text: "ドリル",
              link: "/quiz/",
              items: [
                { text: "一覧", link: "/quiz/" },
                { text: "1章 色のUDの考え方", link: "/quiz/chapter1/" },
                { text: "2章 色が見えるしくみ", link: "/quiz/chapter2/" },
                { text: "3章 色の表し方", link: "/quiz/chapter3/" },
                { text: "4章 色覚の多様性", link: "/quiz/chapter4/" },
                { text: "5章 高齢者の見え方", link: "/quiz/chapter5/" },
                { text: "6章 色のUD配色の実践", link: "/quiz/chapter6/" },
                { text: "7章 色のUDの進め方", link: "/quiz/chapter7/" },
                { text: "ランダム 5 問", link: "/quiz/random-5/" },
                { text: "ランダム 10 問", link: "/quiz/random-10/" },
                { text: "ランダム出題（全問）", link: "/quiz/random/" },
                { text: "間違えた問題を復習", link: "/quiz/review/" },
              ],
            },
          ],
        },
        outline: {
          label: "目次",
        },
        docFooter: {
          prev: "前のレッスン",
          next: "次のレッスン",
        },
        search: {
          provider: "local",
          options: {
            translations: {
              button: { buttonText: "検索" },
              modal: {
                noResultsText: "見つかりませんでした",
                resetButtonTitle: "リセット",
              },
            },
          },
        },
      },
      pwa: {
        registerType: "autoUpdate",
        manifest: {
          name: "色彩検定 UC 級 学習コンテンツ",
          short_name: "UC級",
          description: "色彩検定 UC 級の学習コンテンツ",
          theme_color: "#c2185b",
          background_color: "#ffffff",
          lang: "ja",
          display: "standalone",
          start_url: "/",
          icons: [
            { src: "pwa-64x64.png", sizes: "64x64", type: "image/png" },
            { src: "pwa-192x192.png", sizes: "192x192", type: "image/png" },
            { src: "pwa-512x512.png", sizes: "512x512", type: "image/png" },
            {
              src: "maskable-icon-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "maskable",
            },
          ],
        },
        workbox: {
          maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
          globPatterns: ["**/*.{js,css,html,woff2,png,svg,ico,webp,json}"],
        },
      },
    }),
  ),
);
