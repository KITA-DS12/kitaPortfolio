<template>
  <section class="section">
    <div class="container">
      <h2 class="section-title">学生時代</h2>

      <h3 class="sub-title">
        高校
        <span class="meta">中部大学第一高等学校 機械電気システム科</span>
      </h3>
      <p>
        電気・電子・情報分野について学ぶ。在学中には 20 個以上の資格・検定
        を取得し、愛知県高等学校職業教育技術認定事業グランプリを受賞した。
      </p>

      <h3 class="sub-title">
        大学
        <span class="meta">武蔵野大学 データサイエンス学部</span>
      </h3>
      <p>
        データやメディアコンテンツの分析・活用手法と、それを用いた社会
        課題の解決に取り組む。その中で、自然言語処理・言語処理系・群知能
        についての研究を行った。
      </p>

      <h4 class="topic">研究テーマ</h4>
      <ul>
        <li>
          <strong>自然言語処理:</strong> Twitter 上のコロナウイルスに関する
          投稿の分析や、文章中の特有表現に着目した意見抽出方式の提案
        </li>
        <li>
          <strong>言語処理系:</strong> ソースコードの構文木表現から構造類似性
          を用いて自動で関数を生成する手法の提案
        </li>
        <li>
          <strong>群知能:</strong> カッコウ探索を用いた抽象画のレコメンド
          手法の提案、およびアントコロニー最適化法を用いた麻雀の行動選択
          アルゴリズムの提案
        </li>
      </ul>

      <h4 class="topic">その他の活動</h4>
      <ul>
        <li>学部内のエンジニア団体「MUENT」を立ち上げ、代表を務めた</li>
        <li>
          学内で勉強会を主催し、企画・運営および講師を担当。プログラミング
          の基礎、Web アプリケーション開発、コンピュータサイエンスに関する
          講座を開催した
        </li>
      </ul>

      <h3 class="sub-title">ハッカソン</h3>
      <p>
        大学 2 年から学生時代を通じて約 20 回参加。Web 開発の経験がほぼ
        ゼロの状態（API という用語すら知らない）から、ハッカソンを学習の
        アウトプットの場として活用しながら開発を学んできた。
      </p>
      <p>
        技育 CAMP や Open Hack U などのハッカソンで、最優秀賞 3 件、
        副大賞 2 件、優秀賞 2 件、企業賞 5 件、努力賞 5 件などを受賞した。
      </p>
      <p>
        特に印象に残っているのは 2023 年 2 月の技育 CAMP vol.11 最優秀賞。
        参加を重ねる中で「技術力以外にもチーム開発で意識すべきこと」が
        見えてきていたタイミングで、バックエンド・フロントエンド・インフラ
        を一通り浅くは理解できていたため、PdM / PjM 役を取り、タスク
        割り当てや初心者の学習・実装支援を担うバランサー的な立ち回りで、
        即席チームながら初めての最優秀賞を取った。このときの経験は
        <a
          href="https://note.com/rkita_12/n/ndaa6c199c713"
          target="_blank"
          rel="noopener"
        >note の記事</a>にまとめている。
      </p>
      <p>
        運営側でも大学 4 年から関わり、サポーターズの技育 CAMP での技術
        メンター・運営サポートを担当。社会人になってからも継続している。
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.sub-title {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.75rem;
  font-size: 1.05rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
}

.meta {
  font-size: 0.85rem;
  color: var(--color-muted);
  font-weight: 400;
}

.topic {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-muted);
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}
</style>
