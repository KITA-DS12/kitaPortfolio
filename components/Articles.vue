<template>
  <section id="output" class="section">
    <div class="container">
      <h2 class="section-title">公開している記事</h2>
      <ul class="articles">
        <li v-for="article in articles" :key="article.url" class="article">
          <a :href="article.url" target="_blank" rel="noopener">
            {{ article.title }}
          </a>
          <div class="meta">
            <time :datetime="article.date">{{ article.date }}</time>
            <span class="dot">·</span>
            <span class="source">{{ article.source }}</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
type Article = {
  date: string;
  title: string;
  source: string;
  url: string;
};

const articles: Article[] = [
  {
    date: "2026-06-01",
    title:
      "議事録 AI では、会議は前に進まない。前回→今回→次回をつなぐ Decision Loop を作った",
    source: "Zenn",
    url: "https://zenn.dev/ichigoe/articles/39ed922d19c9bb",
  },
  {
    date: "2025-12-20",
    title: "ハッカソンにおける技術の「外側」",
    source: "note",
    url: "https://note.com/rkita_12/n/ndaa6c199c713",
  },
  {
    date: "2025-12-08",
    title:
      "AI 活用を目指したら、泥臭い「開発プロセスの見直し」が必要になった話",
    source: "CARTA Tech Blog",
    url: "https://techblog.cartaholdings.co.jp/entry/ai-agent-process-improvement",
  },
  {
    date: "2025-06-28",
    title: "Web 開発入門講座 - シンプル投稿アプリで学ぶ基本概念",
    source: "GitHub",
    url: "https://github.com/KITA-DS12/web-app-simple/blob/main/lecture-materials.md",
  },
  {
    date: "2025-04-25",
    title: "生成 AI 時代に問われるのは「評価する力」",
    source: "note",
    url: "https://note.com/rkita_12/n/n32eb1035d0ce",
  },
  {
    date: "2025-03-25",
    title: "プロンプト駆動開発、始めました。",
    source: "CARTA Tech Blog",
    url: "https://techblog.cartaholdings.co.jp/entry/prompt-driven-development",
  },
  {
    date: "2025-03-04",
    title: "技育博に参加したら学生のレベルに圧倒された話",
    source: "CARTA Tech Blog",
    url: "https://techblog.cartaholdings.co.jp/entry/geekhaku2024-sponsor-report",
  },
  {
    date: "2022-05-25",
    title: "Python 基礎文法まとめ",
    source: "Qiita",
    url: "https://qiita.com/kita_ds12/items/84552d41a8aad36d5519",
  },
];
</script>

<style scoped lang="scss">
.articles {
  list-style: none;
  padding: 0;
  margin: 0;
}

.article {
  padding: 1rem 0;

  & + .article {
    border-top: 1px solid var(--color-border);
  }

  a {
    display: block;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.25rem;
  }
}

.meta {
  font-size: 0.8rem;
  color: var(--color-muted);

  .dot {
    margin: 0 0.5rem;
  }
}
</style>
