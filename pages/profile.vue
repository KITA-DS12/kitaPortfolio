<template>
  <div class="container">
    <img class="profile-image" src="/public/my-face.png" alt="My face" />
    <div class="description">
      <ProfileTitle title="名前" />
      <p>北 椋太 (きた りょうた)</p>
      <p>
        2001年生まれ、愛知県出身。
        <br />
        東京都在住のソフトウェアエンジニア。
      </p>

      <hr />

      <ProfileTitle title="趣味" />
      <p>🎮 ゲーム / 🎨 イラスト / 🎸 ベース</p>

      <hr />

      <ProfileTitle title="経歴" />

      <p><b>2017年4月〜2020年3月 :</b></p>
      <div class="content">
        <p>
          中部大学第一高等学校 機械電気システム科 に入学。
          <br />
          愛知県高等学校職業教育技術認定事業グランプリを受賞。
        </p>
      </div>

      <p><b>2020年4月〜2024年3月 :</b></p>
      <div class="content">
        <p>
          武蔵野大学 データサイエンス学部 に入学。
          <br />
          言語処理や進化計算アルゴリズムについての研究を行う。
        </p>
        <p>
          Yahoo!JAPAN主催の「Hack U」や サポーターズ主催の「技育CAMP」など、
          <br />
          さまざまな学生ハッカソンに参加し、最優秀賞をはじめとする数々の賞を受賞。
        </p>
        <p>
          在学中、勉強会を主催し、企画・運営および講師を務める。
          <br />
          また、学部内のエンジニア団体MUENTを立ち上げ、代表を務める。
        </p>
      </div>

      <p><b>2023年4月〜 :</b></p>
      <div class="content">
        <p>技育プロジェクトのメンターとしてイベント運営に携わる。</p>
      </div>

      <p><b>2023年5月〜2024年3月 :</b></p>
      <div class="content">
        <p>
          インターンにて、アドテクノロジー事業やゲームメディア事業に携わる。
        </p>
      </div>

      <p><b>2024年4月〜 :</b></p>
      <div class="content">
        <p>
          株式会社CARTA HOLDINGS に入社。
          <br />
          株式会社Lighthouse Studio にて、ゲームメディア事業に携わる。
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-image {
  width: 25vw;
  height: 25vw;
  border-radius: 10%;
}

.description {
  padding-top: 1rem;
  width: 58vw;
  font-size: 0.85rem;
  color: #333;
}

.content {
  padding-left: 1rem;
}
</style>
