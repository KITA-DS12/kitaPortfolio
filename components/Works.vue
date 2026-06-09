<template>
  <section id="works" class="section">
    <div class="container">
      <h2 class="section-title">業務での主な取り組み</h2>

      <article class="work">
        <h3 class="work-title">
          海外向けゲーム DB サービスの企画から運用まで
          <span class="meta">新卒 1 年目 後半</span>
        </h3>
        <p>
          新規事業として展開する海外向けゲーム攻略サイトの中で、特定タイトル
          の本リリースに合わせた DB サービスを立ち上げる必要があった。社内で
          ゲーム攻略サイト自体は扱っていたものの、DB サービスとして特化した
          事例はなかったため、最低限必要な機能の輪郭と、競合に対して勝ち筋を
          出せるラインを掴むために、競合の DB サービスを複数調査するところ
          から着手した。
        </p>
        <p>
          スケジュールがゲームの本リリース日に引っ張られていたため、「品質を
          一定保ちながら、捨てるべきものを早く捨てる」を方針として置き、
          MVP の段階では管理画面を実装しない、汎用化は段階的に行う、といった
          判断を進めた。
        </p>
        <ul>
          <li>
            競合調査、企画、要件定義、デザイン、技術選定、実装、リリースまで
            主導
          </li>
          <li>
            短いスケジュールでも追加タイトルの実装コストが膨らまないよう、
            一覧ページのコンポーネントを早期に汎用化するリファクタリングを
            実施
          </li>
          <li>
            モバイル中心の UI を設計（ファーストビューにカード一覧、検索結果
            の総数を常時表示してフィルタの変動を可視化、関連リンクとの導線
            整理）
          </li>
          <li>
            短い時間で対応できる改善は即対応、それ以上はタスク化、という
            ルールを運用して並行作業を止めない仕組みを取った
          </li>
        </ul>
        <p>
          リリース後、後続タイトルを追加するときの実装コストが下がり、サイト
          全体のセッションの一定割合を担う規模に成長した。
        </p>
        <p class="stack">
          使った技術: Remix / Tailwind CSS / Google Apps Script /
          Cloud Run / CloudFront
        </p>
      </article>

      <article class="work">
        <h3 class="work-title">
          認証基盤の改修
          <span class="meta">新卒 2 年目 前半</span>
        </h3>
        <p>
          社内の各サービスで利用している SSO で、ログイン時にユーザーが複数
          サイトに連続でリダイレクトされ、体験を損ねていた。今後の機能追加で
          ログイン機会が増えることを見越して、リダイレクトをなくす方針で
          改修を担当した。
        </p>
        <p>
          認証周りの前提知識がほとんどない状態からのスタートだったため、
          OIDC・OAuth 2.0・Firebase Authentication の仕様と、既存実装が
          何をしているかを解きほぐすところから始めた。リダイレクトを
          なくすには、現状のフローのどこにリダイレクトが入っていて、
          何を担保するために存在しているかを把握する必要があった。
        </p>
        <ul>
          <li>認証フローを標準仕様に近づける形で再設計し、ユーザー体験を改善</li>
          <li>複数環境で安全に運用できる設計に整理</li>
          <li>
            SSO の対象外のドメインでもログイン機能は引き続き提供できるよう、
            影響範囲を整理
          </li>
        </ul>
        <p>
          リダイレクトによる体験悪化を改善しつつ、独自実装を剥がして標準
          寄りの設計に近づけることができた。
        </p>
        <p class="stack">
          使った技術: TypeScript / Node.js / Vue / OIDC /
          Firebase Authentication
        </p>
      </article>

      <article class="work">
        <h3 class="work-title">
          チームでの AI 活用の主導
          <span class="meta">新卒 2 年目 前半〜</span>
        </h3>
        <p>
          社内の開発リソースが限られる中で、AI を最大限活用していく方針が
          立てられ、その推進を担当することになった。当初はメンバー各自が
          個別にツールを試す段階で、知見が個人に閉じている状態だった。
        </p>
        <p>
          Devin の検証では「タスクの一部を任せて時間とコストを削減できる」
          ことを確認できたものの、「ツールを入れただけでは AI 活用は進まない」
          ことが見えてきた。AI が生成したコードのレビュー待ちが新たな
          ボトルネックになる、活用度合いがメンバーによって差が出る、そもそも
          「何のために AI を使うのか」が曖昧、といった課題が並行で発生して
          いたため、ツール単体ではなく、開発プロセス全体を見直して「どこに
          ボトルネックがあって、そこに AI を当てるとどうなるか」を考える
          方向へ軸を移した。
        </p>
        <ul>
          <li>
            Claude Code, Devin, Windsurf, Codex,
            Gemini CLI, Cline（Roo Code）, Cursor などを比較・検証し、毎日
            の夕会でチーム共有
          </li>
          <li>AI 関連の最新情報のキャッチアップと知見共有を継続</li>
          <li>
            業務フローを FigJam で可視化し、ボトルネック特定 → 改善案ブレスト
            → 効果コスト評価 → 優先順位付け、というサイクルをチームに導入
          </li>
          <li>
            ライターから寄せられる定型業務を Devin で自動 PR 作成するフロー
            へ置き換え、エンジニアはレビューとマージに集中できる体制を構築
          </li>
          <li>
            タスク管理を Asana から GitHub Projects へ移行（AI Agent から
            扱いやすい場所に情報を集約する目的）
          </li>
          <li>
            見積もり精度を上げるため、稼働時間あたりのストーリーポイント
            消化率を計測し、チームの体感とのギャップを可視化。達成可能な
            範囲でタスクを取れる状態にした
          </li>
        </ul>
        <p>
          「AI を使う」の前にチームの開発プロセスを整える必要があるという
          気づきが、進め方を大きく変えた。
        </p>
        <p class="stack">
          関わった道具: Claude Code / Devin / Windsurf/
          Codex / Gemini CLI / Cline（Roo Code）/ Cursor / GitHub Projects /
          FigJam
        </p>
      </article>

      <article class="work">
        <h3 class="work-title">
          ポイントサービスの立ち上げ
          <span class="meta">新卒 2 年目〜 3 年目 前半</span>
        </h3>
        <p>
          社内の主要事業の収益基盤の多角化を目的に、ポイントサービスの
          導入を決定。社内知見が少ない領域からの立ち上げとなったため、
          要件定義と設計から主導した。
        </p>
        <p>
          最初は「何を作ればいいか」がチームの誰にも見えていない状態で、
          競合のポイントサービスを複数調査することと、グループ会社の運用
          担当者へのヒアリングで「実運用で何が大事か」「会計や不正対策で
          気をつけることは何か」などを掴み、要件定義に落とすところから
          始めた。
        </p>
        <p>
          DB 設計についても、初期は状態遷移を素直にテーブルへ落とした設計
          だったが、ポイントは事実のログとして消さずに積み上げるべきだと
          いう観点が抜けていた。社内外の壁打ちを経て、「状態」中心の設計
          から「事実」中心の設計へ切り替えることになった。
        </p>
        <ul>
          <li>
            競合調査、グループ会社のポイント運用担当者へのヒアリング、
            外部の DB 設計に詳しい有識者への壁打ちを経て、要件と DB 設計を
            完成
          </li>
          <li>
            状態テーブル中心の設計から、イベントを積み上げるイミュータブル
            設計へ切り替え
            <ul>
              <li>UPDATE / DELETE を封印し、SELECT + INSERT で残高を再計算可能に</li>
              <li>
                パフォーマンス担保のため、残高はキャッシュテーブルとして
                別途保持
              </li>
              <li>
                後から「いつ、何が起きたか」を追えるよう、付与・減算・承認
                ・失効などの事実を全てレコードとして残す
              </li>
            </ul>
          </li>
          <li>
            ASP・案件・成果イベントなど、成果管理まわりも将来の拡張を見据
            えてマスタデータを分離
          </li>
          <li>
            SEO 対策や他プロジェクトの差し込み対応で複数回の中断を挟みながら、
            リリースに向けた基盤を構築
          </li>
        </ul>
        <p>
          擬似金銭領域の難しさは「後から辻褄が合わなくなったときに追えないと
          致命的になる」点にあるという理解を得たことが、設計判断に強く影響
          した。
        </p>
        <p class="stack">
          使った技術: Go (Gin) / TypeScript / React / MUI / PostgreSQL /
          Firebase Authentication / Casbin / OpenAPI / Terraform /
          Google Cloud / Docker
        </p>
      </article>

      <article class="work">
        <h3 class="work-title">
          退会機能の横断実装
          <span class="meta">新卒 3 年目 前半</span>
        </h3>
        <p>
          複数のサービスにまたがる退会処理を、認証基盤を起点として各
          サービスに伝達する仕組みを設計・実装した。
        </p>
        <p>
          最大のポイントは、個人情報の取り扱いとサービス間の整合性をどう
          設計するかだった。退会後はユーザー画面から即座に消す必要がある
          一方、ポイントの取引履歴や監査用のデータは一定期間残す必要が
          ある。データ種別ごとに保持・削除方針を整理し、サービスごとに
          処理内容を定義した。
        </p>
        <ul>
          <li>
            認証基盤に退会 UI を実装し、OIDC フローを経由して退会処理を実行
          </li>
          <li>認証基盤と複数サービス間の通知の送信・受信を、それぞれ実装</li>
          <li>
            受信側では匿名化、ポイント失効、サブスクリプション解約など、
            サービス特有の処理を実行
          </li>
          <li>
            リリース順序を厳密に設計し、通知が届いた時点で必ず受信側が
            処理できる状態を担保
          </li>
          <li>通知失敗時にリカバリ可能な運用設計を整備</li>
        </ul>
        <p class="stack">
          使った技術: TypeScript / Go / OIDC / Firebase Authentication /
          Google Cloud / PostgreSQL
        </p>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
.work {
  padding: 2rem 0;

  & + .work {
    border-top: 1px solid var(--color-border);
  }
}

.work-title {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.75rem;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.meta {
  font-size: 0.8rem;
  color: var(--color-muted);
  font-weight: 400;
}

.stack {
  margin-top: 1rem;
  padding-top: 0.75rem;
  border-top: 1px dashed var(--color-border);
  font-size: 0.85rem;
  color: var(--color-muted);
}

ul {
  margin-bottom: 1rem;

  ul {
    margin-top: 0.25rem;
    margin-bottom: 0.5rem;
  }
}
</style>
