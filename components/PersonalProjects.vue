<template>
  <section id="personal" class="section">
    <div class="container">
      <h2 class="section-title">趣味開発</h2>
      <p class="lead">業務以外でも、趣味として自分の好きなテーマで Web アプリを継続的に作っている。ハッカソンでチームと作ったものも含む。</p>

      <article class="project">
        <h3 class="project-title">
          <span>Decision Loop</span>
          <span class="project-links">
            <a class="project-link" href="https://decision-loop-web.azurewebsites.net/" target="_blank" rel="noopener" aria-label="Decision Loop のサイトを開く">
              <svg class="project-link-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3zM5 5h6v2H7v10h10v-4h2v6H5V5z"/></svg>
            </a>
            <a class="project-link" href="https://github.com/muds-ms-hackathon/microsoft-agent-hackathon-2026" target="_blank" rel="noopener" aria-label="Decision Loop の GitHub リポジトリを開く">
              <svg class="project-link-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.19-3.07-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.8 1.19 1.82 1.19 3.07 0 4.4-2.69 5.36-5.25 5.65.41.35.78 1.05.78 2.12v3.14c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>
            </a>
          </span>
        </h3>
        <p class="project-summary">定例会議を次に進めるための AI エージェント（Microsoft Agent Hackathon 2026 / チーム開発）</p>
        <img
          class="project-image"
          src="/images/decision-loop.png"
          alt="Decision Loop の「意思決定の文脈グラフ」画面のスクリーンショット。会議ノードから決定・タスク・未決・次回議題のノードが線でつながって表示されている"
          loading="lazy"
        />
        <p>会議ログから「決定事項・タスク・未決事項・曖昧箇所」を抽出し、前回 → 今回 → 次回の会議をまたいで状態を運ぶことで、会議をまたいだ継続的な進捗を実現する AI エージェント。目玉機能の「意思決定の文脈グラフ」では、どの決定からどのタスクが発生し、何が未解決のまま残っているかを 1 枚のグラフで可視化できる。AI が候補と根拠を提示し、人間が確定するヒューマンインザループ設計で、自律性と信頼性を両立している。</p>
        <p class="stack">使った技術: Vite / React / TypeScript / Hono / FastAPI / Python / Semantic Kernel / Azure OpenAI / Azure Service Bus / PostgreSQL / Prisma / Docker / OIDC</p>
      </article>

      <article class="project">
        <h3 class="project-title">
          <span>ツルリン</span>
          <span class="project-links">
            <a class="project-link" href="https://tsururin.mu-k.net/#how" target="_blank" rel="noopener" aria-label="ツルリンのサイトを開く">
              <svg class="project-link-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3zM5 5h6v2H7v10h10v-4h2v6H5V5z"/></svg>
            </a>
            <a class="project-link" href="https://github.com/KITA-DS12/tsururin" target="_blank" rel="noopener" aria-label="ツルリンの GitHub リポジトリを開く">
              <svg class="project-link-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.19-3.07-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.8 1.19 1.82 1.19 3.07 0 4.4-2.69 5.36-5.25 5.65.41.35.78 1.05.78 2.12v3.14c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>
            </a>
          </span>
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
          <span class="project-links">
            <a class="project-link" href="https://otopi.app" target="_blank" rel="noopener" aria-label="Otopi のサイトを開く">
              <svg class="project-link-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3zM5 5h6v2H7v10h10v-4h2v6H5V5z"/></svg>
            </a>
            <a class="project-link" href="https://github.com/KITA-DS12/otopi" target="_blank" rel="noopener" aria-label="Otopi の GitHub リポジトリを開く">
              <svg class="project-link-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.19-3.07-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.8 1.19 1.82 1.19 3.07 0 4.4-2.69 5.36-5.25 5.65.41.35.78 1.05.78 2.12v3.14c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>
            </a>
          </span>
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
          <span class="project-links">
            <a class="project-link" href="https://otopost.app" target="_blank" rel="noopener" aria-label="おとぽすとのサイトを開く">
              <svg class="project-link-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3zM5 5h6v2H7v10h10v-4h2v6H5V5z"/></svg>
            </a>
            <a class="project-link" href="https://github.com/KITA-DS12/otopos" target="_blank" rel="noopener" aria-label="おとぽすとの GitHub リポジトリを開く">
              <svg class="project-link-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.19-3.07-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.8 1.19 1.82 1.19 3.07 0 4.4-2.69 5.36-5.25 5.65.41.35.78 1.05.78 2.12v3.14c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>
            </a>
          </span>
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
          <span class="project-links">
            <a class="project-link" href="https://yojislots.com" target="_blank" rel="noopener" aria-label="2026 四字熟語スロットのサイトを開く">
              <svg class="project-link-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3zM5 5h6v2H7v10h10v-4h2v6H5V5z"/></svg>
            </a>
            <a class="project-link" href="https://github.com/KITA-DS12/2026-slot-challenge" target="_blank" rel="noopener" aria-label="2026 四字熟語スロットの GitHub リポジトリを開く">
              <svg class="project-link-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.19-3.07-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.8 1.19 1.82 1.19 3.07 0 4.4-2.69 5.36-5.25 5.65.41.35.78 1.05.78 2.12v3.14c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>
            </a>
          </span>
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
          <span class="project-links">
            <a class="project-link" href="https://github.com/KITA-DS12/antfloor" target="_blank" rel="noopener" aria-label="AntFloor の GitHub リポジトリを開く">
              <svg class="project-link-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.19-3.07-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.8 1.19 1.82 1.19 3.07 0 4.4-2.69 5.36-5.25 5.65.41.35.78 1.05.78 2.12v3.14c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>
            </a>
          </span>
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
          <span class="project-links">
            <a class="project-link" href="https://github.com/KITA-DS12/mucri" target="_blank" rel="noopener" aria-label="mucri の GitHub リポジトリを開く">
              <svg class="project-link-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.19-3.07-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.8 1.19 1.82 1.19 3.07 0 4.4-2.69 5.36-5.25 5.65.41.35.78 1.05.78 2.12v3.14c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>
            </a>
          </span>
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

.project-links {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.project-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 6px;
  color: var(--color-muted);
  transition: color 0.15s ease, background-color 0.15s ease;

  &:hover,
  &:focus-visible {
    color: var(--color-text);
    background-color: var(--color-code-bg);
  }
}

.project-link-icon {
  width: 1.1rem;
  height: 1.1rem;
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
