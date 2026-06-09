<template>
  <section id="personal" class="section">
    <div class="container">
      <h2 class="section-title">個人開発</h2>
      <p class="lead">
        業務以外でも、自分の好きなテーマで Web アプリを継続的に作っている。
      </p>

      <article class="project">
        <h3 class="project-title">
          Otopi
          <a
            class="project-url"
            href="https://otopi.app"
            target="_blank"
            rel="noopener"
          >
            otopi.app
          </a>
        </h3>
        <p class="project-summary">音楽好きのためのプロフィールアプリ</p>
        <p>
          好きな曲・アルバムを壁一面に並べて音楽プロフィールを作るサービス。
          Weekly Picks（今週のお気に入り 5 曲）、Stocks（気になった曲の保存）、
          Follow（音楽好き同士のつながり）の機能を提供している。
        </p>
        <p class="stack">
          使った技術: Next.js / TypeScript / Tailwind CSS / Zustand /
          TanStack Query / Framer Motion /
          Firebase (Firestore / Authentication / Storage) /
          iTunes Search API / Google Cloud Run / Sentry / Storybook
        </p>
      </article>

      <article class="project">
        <h3 class="project-title">
          おとぽすと
          <a
            class="project-url"
            href="https://otopost.app"
            target="_blank"
            rel="noopener"
          >
            otopost.app
          </a>
        </h3>
        <p class="project-summary">
          音楽の布教をテーマにした匿名投稿サービス
        </p>
        <p>
          質問箱のように箱の URL を SNS でシェアすると、受け取った側が
          iTunes API で曲を検索して匿名で投稿できる。届いた楽曲は
          Apple Music Preview で 30 秒試聴できる。
        </p>
        <p class="stack">
          使った技術: Next.js / TypeScript / Tailwind CSS / Firebase /
          Upstash Redis (Rate limit) / Apple Music Preview API + iTunes API
        </p>
      </article>

      <article class="project">
        <h3 class="project-title">
          2026 四字熟語スロット
          <a
            class="project-url"
            href="https://yojislots.com"
            target="_blank"
            rel="noopener"
          >
            yojislots.com
          </a>
        </h3>
        <p class="project-summary">
          四字熟語で新年の運試しができるスロット
        </p>
        <p>
          4 リール漢字スロット。30 種以上の四字熟語と「二零二六」のジャック
          ポット、当たり時の花火演出、動的 OGP 画像生成によるシェア最適化を
          実装したネタアプリ。
        </p>
        <p class="stack">
          使った技術: Next.js / TypeScript / Tailwind CSS / @vercel/og /
          Google Cloud Run
        </p>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
.lead {
  margin-bottom: 2rem;
  color: var(--color-muted);
}

.project {
  padding: 1.5rem 0;

  & + .project {
    border-top: 1px solid var(--color-border);
  }
}

.project-title {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.75rem;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.project-url {
  font-size: 0.85rem;
  font-weight: 400;
}

.project-summary {
  color: var(--color-muted);
  margin-bottom: 0.75rem;
}

.stack {
  margin-top: 1rem;
  padding-top: 0.75rem;
  border-top: 1px dashed var(--color-border);
  font-size: 0.85rem;
  color: var(--color-muted);
}
</style>
