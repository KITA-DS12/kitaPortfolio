<template>
  <section id="personal" class="section">
    <div class="container">
      <h2 class="section-title">個人開発</h2>
      <p class="lead">業務以外でも、自分の好きなテーマで Web アプリを継続的に作っている。</p>

      <article class="project">
        <h3 class="project-title">
          <span>ツルリン</span>
          <a class="project-url" href="https://tsururin.mu-k.net/#how" target="_blank" rel="noopener">tsururin.mu-k.net/#how</a>
        </h3>
        <p class="project-summary">氷上スライドパズル挑戦状</p>
        <img
          class="project-image"
          src="/images/tsururin.png"
          alt="ツルリンのプロモ画像（ペンギンが氷の盤面を滑ってゴールに止まる様子）"
          loading="lazy"
        />
        <p>スワイプした方向に何かにぶつかるまで滑り続け、ゴールに「ぴったり停止」させるパズル。毎日 0 時に全員共通の 1 問が出るデイリーモード、新タイルが順番に登場する全 50 ステージ、自作問題を URL だけで配れて作者の手数と勝負する挑戦状モードを備えている。</p>
        <p class="stack">使った技術: HTML / CSS / JavaScript（バニラ）/ AWS S3 / CloudFront / Route 53</p>
      </article>

      <article class="project">
        <h3 class="project-title">
          <span>Otopi</span>
          <a class="project-url" href="https://otopi.app" target="_blank" rel="noopener">otopi.app</a>
        </h3>
        <p class="project-summary">音楽好きのためのプロフィールアプリ</p>
        <img
          class="project-image"
          src="/images/otopi.png"
          alt="Otopi のランディングページのスクリーンショット"
          loading="lazy"
        />
        <p>好きな曲・アルバムを壁一面に並べて音楽プロフィールを作るサービス。Weekly Picks（今週のお気に入り 5 曲）、Stocks（気になった曲の保存）、Follow（音楽好き同士のつながり）の機能を提供している。</p>
        <p class="stack">使った技術: Next.js / TypeScript / Tailwind CSS / Zustand / TanStack Query / Framer Motion / Firebase (Firestore / Authentication / Storage) / iTunes Search API / Google Cloud Run / Sentry / Storybook</p>
      </article>

      <article class="project">
        <h3 class="project-title">
          <span>おとぽすと</span>
          <a class="project-url" href="https://otopost.app" target="_blank" rel="noopener">otopost.app</a>
        </h3>
        <p class="project-summary">音楽の布教をテーマにした匿名投稿サービス</p>
        <img
          class="project-image"
          src="/images/otopost.png"
          alt="おとぽすとの投稿画面のスクリーンショット"
          loading="lazy"
        />
        <p>質問箱のように箱の URL を SNS でシェアすると、受け取った側が iTunes API で曲を検索して匿名で投稿できる。届いた楽曲は Apple Music Preview で 30 秒試聴できる。</p>
        <p class="stack">使った技術: Next.js / TypeScript / Tailwind CSS / Firebase / Upstash Redis (Rate limit) / Apple Music Preview API + iTunes API</p>
      </article>

      <article class="project">
        <h3 class="project-title">
          <span>2026 四字熟語スロット</span>
          <a class="project-url" href="https://yojislots.com" target="_blank" rel="noopener">yojislots.com</a>
        </h3>
        <p class="project-summary">四字熟語で新年の運試しができるスロット</p>
        <img
          class="project-image"
          src="/images/yojislots.png"
          alt="2026 四字熟語スロットのプレイ画面のスクリーンショット"
          loading="lazy"
        />
        <p>4 リール漢字スロット。30 種以上の四字熟語と「二零二六」のジャックポット、当たり時の花火演出、動的 OGP 画像生成によるシェア最適化を実装したネタアプリ。</p>
        <p class="stack">使った技術: Next.js / TypeScript / Tailwind CSS / @vercel/og / Google Cloud Run</p>
      </article>

      <article class="project">
        <h3 class="project-title">
          <span>AntFloor</span>
          <a class="project-url" href="https://github.com/KITA-DS12/antfloor" target="_blank" rel="noopener">github.com/KITA-DS12/antfloor</a>
        </h3>
        <p class="project-summary">アントコロニー最適化による飲食店フロア改善シミュレータ</p>
        <img
          class="project-image"
          src="/images/antfloor.png"
          alt="AntFloor のシミュレーション画面のスクリーンショット"
          loading="lazy"
        />
        <p>ACO（Ant Colony Optimization）のフェロモン堆積・蒸発・確率的経路選択を使って、飲食店フロアの動線効率と混雑を可視化する Web アプリ。グリッドでフロアを編集し、エージェントを走らせると効率・混雑のヒートマップと推奨ルートが描画され、停止すると蓄積データから改善案が自動生成される。</p>
        <p class="stack">使った技術: Next.js / React / TypeScript / Tailwind CSS / Canvas 2D</p>
      </article>

      <article class="project">
        <h3 class="project-title">
          <span>mucri</span>
          <span class="project-url muted">URL 非公開</span>
        </h3>
        <p class="project-summary">同じ大学の学生同士で作業通話をするためのアプリ</p>
        <img
          class="project-image"
          src="/images/mucri.png"
          alt="mucri のスペース内チャット・通話画面のスクリーンショット"
          loading="lazy"
        />
        <p>スペースを作って、フレンドとチャットや通話ができるアプリ。在学中の学生が、お互いに集まらなくても一緒に作業時間を共有できることを意図して作った。</p>
        <p class="stack">使った技術: Remix / React / TypeScript / Tailwind CSS / Firebase / SkyWay SDK</p>
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

.project-image {
  display: block;
  width: 100%;
  max-height: 360px;
  object-fit: contain;
  background-color: var(--color-code-bg);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  margin: 1rem 0;
}

.stack {
  margin-top: 1rem;
  padding-top: 0.75rem;
  border-top: 1px dashed var(--color-border);
  font-size: 0.85rem;
  color: var(--color-muted);
}
</style>
