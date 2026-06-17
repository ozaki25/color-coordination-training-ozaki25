import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import { withPwa } from "@vite-pwa/vitepress";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";
import cjkFriendly from "markdown-it-cjk-friendly";

export default withPwa(
  withMermaid(
    defineConfig({
      title: "色彩検定 UC 級 学習コンテンツ",
      description: "色彩検定 UC 級（色のユニバーサルデザイン級）の合格を目指す学習コンテンツ。全6章28レッスン、図解とドリルで段階的に学べます。",
      lang: "ja",
      lastUpdated: true,
      cleanUrls: true,
      head: [
        ["link", { rel: "icon", href: "/favicon.ico", sizes: "48x48" }],
        ["link", { rel: "icon", href: "/logo.svg", type: "image/svg+xml" }],
        ["link", { rel: "apple-touch-icon", href: "/apple-touch-icon-180x180.png" }],
        ["meta", { name: "robots", content: "noindex, nofollow" }],
        ["meta", { name: "googlebot", content: "noindex, nofollow" }],
        ["meta", { name: "theme-color", content: "#c2185b" }],
        ["meta", { name: "author", content: "ozaki25" }],
        ["meta", { property: "og:type", content: "website" }],
        ["meta", { property: "og:locale", content: "ja_JP" }],
        ["meta", { property: "og:site_name", content: "色彩検定 UC 級 学習コンテンツ" }],
        ["meta", { property: "og:title", content: "色彩検定 UC 級 学習コンテンツ" }],
        ["meta", { property: "og:description", content: "色彩検定 UC 級（色のユニバーサルデザイン級）の合格を目指す学習コンテンツ。全6章28レッスン、図解とドリルで段階的に学べます。" }],
        ["meta", { property: "og:image", content: "/ogp.png" }],
        ["meta", { name: "twitter:card", content: "summary_large_image" }],
        ["meta", { name: "twitter:title", content: "色彩検定 UC 級 学習コンテンツ" }],
        ["meta", { name: "twitter:description", content: "色彩検定 UC 級（色のユニバーサルデザイン級）の合格を目指す学習コンテンツ。28レッスン+ドリル付き。" }],
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
        // HTMLラベル(デフォルト)を使い、CJK文字の高さ計算はブラウザに委ねる。
        // SVG textで描く `htmlLabels: false` では `\n` を超える折り返しが
        // rect の高さに反映されず最終行が切れることがあるため、custom.cssで
        // foreignObject の overflow を visible にして補完する。
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
          { text: "ドリル", link: "/quiz/" },
        ],
        sidebar: {
          "/lessons/": [
            {
              text: "ナビゲーション",
              items: [
                { text: "ホーム", link: "/" },
                { text: "ドリル", link: "/quiz/" },
              ],
            },
            {
              text: "第1章 色のユニバーサルデザイン",
              collapsed: false,
              items: [
                { text: "lesson01: ユニバーサルデザインとは何か", link: "/lessons/lesson01/" },
                { text: "lesson02: 色のユニバーサルデザイン", link: "/lessons/lesson02/" },
                { text: "lesson03: 視覚情報にかかわるUD", link: "/lessons/lesson03/" },
              ],
            },
            {
              text: "第2章 色が見えるしくみ",
              collapsed: true,
              items: [
                { text: "lesson04: 色とは・光とは", link: "/lessons/lesson04/" },
                { text: "lesson05: 光源色・物体色・分光反射率", link: "/lessons/lesson05/" },
                { text: "lesson06: 眼の構造", link: "/lessons/lesson06/" },
                { text: "lesson07: 錐体と桿体", link: "/lessons/lesson07/" },
                { text: "lesson08: 色覚説と色覚の多様性", link: "/lessons/lesson08/" },
              ],
            },
            {
              text: "第3章 色の表し方",
              collapsed: true,
              items: [
                { text: "lesson09: 色の三属性", link: "/lessons/lesson09/" },
                { text: "lesson10: マンセル表色系", link: "/lessons/lesson10/" },
                { text: "lesson11: PCCS（色相とトーン）", link: "/lessons/lesson11/" },
                { text: "lesson12: 色名", link: "/lessons/lesson12/" },
              ],
            },
            {
              text: "第4章 色覚のタイプによる色の見え方",
              collapsed: true,
              items: [
                { text: "lesson13: 色覚の分類", link: "/lessons/lesson13/" },
                { text: "lesson14: P型（1型）の見え方", link: "/lessons/lesson14/" },
                { text: "lesson15: D型（2型）の見え方", link: "/lessons/lesson15/" },
                { text: "lesson16: 混同色線", link: "/lessons/lesson16/" },
                { text: "lesson17: 色の誤認", link: "/lessons/lesson17/" },
                { text: "lesson18: 色覚の遺伝", link: "/lessons/lesson18/" },
                { text: "lesson19: 色覚検査法", link: "/lessons/lesson19/" },
                { text: "lesson20: 不都合を感じる日常事例", link: "/lessons/lesson20/" },
              ],
            },
            {
              text: "第5章 高齢者の見え方",
              collapsed: true,
              items: [
                { text: "lesson21: 加齢による視機能の変化", link: "/lessons/lesson21/" },
                { text: "lesson22: 高齢者の見え方の特徴", link: "/lessons/lesson22/" },
                { text: "lesson23: 加齢にともなう眼疾病", link: "/lessons/lesson23/" },
                { text: "lesson24: 高齢者・ロービジョンへの配慮", link: "/lessons/lesson24/" },
              ],
            },
            {
              text: "第6章 色のUDの進め方",
              collapsed: true,
              items: [
                { text: "lesson25: 色の機能的役割", link: "/lessons/lesson25/" },
                { text: "lesson26: 色のUDを進める手順", link: "/lessons/lesson26/" },
                { text: "lesson27: チェックの方法", link: "/lessons/lesson27/" },
                { text: "lesson28: 設計と修正のポイント", link: "/lessons/lesson28/" },
              ],
            },
          ],
          "/quiz/": [
            {
              text: "ナビゲーション",
              items: [
                { text: "ホーム", link: "/" },
                { text: "レッスン", link: "/lessons/lesson01/" },
              ],
            },
            {
              text: "ドリル",
              link: "/quiz/",
              items: [
                { text: "一覧", link: "/quiz/" },
                { text: "1章 色のユニバーサルデザイン", link: "/quiz/chapter1/" },
                { text: "2章 色が見えるしくみ", link: "/quiz/chapter2/" },
                { text: "3章 色の表し方", link: "/quiz/chapter3/" },
                { text: "4章 色覚のタイプによる色の見え方", link: "/quiz/chapter4/" },
                { text: "5章 高齢者の見え方", link: "/quiz/chapter5/" },
                { text: "6章 色のUDの進め方", link: "/quiz/chapter6/" },
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
          // HTML を precache から除外（CacheFirst で古い HTML が返り続けるのを防ぐ）
          globPatterns: ["**/*.{js,css,woff2,png,svg,ico,webp,json}"],
          // 図版（/diagrams/）は precache しない。差し替え後も古い画像が
          // 返り続けるのを防ぎ、下の runtimeCaching で最新を取りに行く。
          globIgnores: ["**/diagrams/**"],
          navigateFallback: null,
          runtimeCaching: [
            {
              // ページ遷移（HTML）は NetworkFirst で常に最新を取りに行く
              urlPattern: ({ request }) => request.mode === "navigate",
              handler: "NetworkFirst",
              options: {
                cacheName: "uc-html",
                networkTimeoutSeconds: 5,
                expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 * 7 },
                cacheableResponse: { statuses: [0, 200] },
              },
            },
            {
              // 図版は StaleWhileRevalidate（即表示＋裏で最新に更新）
              urlPattern: ({ url }) => url.pathname.startsWith("/diagrams/"),
              handler: "StaleWhileRevalidate",
              options: {
                cacheName: "uc-diagrams",
                expiration: { maxEntries: 60, maxAgeSeconds: 60 * 60 * 24 * 30 },
                cacheableResponse: { statuses: [0, 200] },
              },
            },
          ],
        },
      },
    }),
  ),
);
