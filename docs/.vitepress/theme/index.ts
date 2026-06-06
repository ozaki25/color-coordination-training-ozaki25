import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import { useRoute } from "vitepress";
import { enhanceAppWithTabs } from "vitepress-plugin-tabs/client";
import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from "@vercel/speed-insights";
import type { EnhanceAppContext, Theme } from "vitepress";
import QuizCard from "./components/QuizCard.vue";
import QuizPage from "./components/QuizPage.vue";
import QuizTop from "./components/QuizTop.vue";
import QuizReview from "./components/QuizReview.vue";
import LessonComplete from "./components/LessonComplete.vue";
import LessonProgress from "./components/LessonProgress.vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  Layout() {
    const route = useRoute();
    return h(DefaultTheme.Layout, null, {
      "doc-after": () => h(LessonComplete, { key: route.path }),
    });
  },
  enhanceApp({ app }: EnhanceAppContext) {
    enhanceAppWithTabs(app);
    app.component("QuizCard", QuizCard);
    app.component("QuizPage", QuizPage);
    app.component("QuizTop", QuizTop);
    app.component("QuizReview", QuizReview);
    app.component("LessonProgress", LessonProgress);
    app.component("LessonComplete", LessonComplete);
    if (typeof window !== "undefined") {
      try {
        inject();
        injectSpeedInsights();
      } catch {
        // analytics の失敗でサイト全体を壊さない
      }
    }
  },
} satisfies Theme;
