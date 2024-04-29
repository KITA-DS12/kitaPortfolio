<template>
  <div class="container">
    <img class="profile-image" src="/public/my-face.png" alt="My face" />
    <div class="description">
      <p>
        <b>名前 :</b>
        <br />
        <b>北 椋太 (きた りょうた)</b>
      </p>
      <p>
        2001年生まれ、愛知県出身。
        <br />
        東京都在住の<b>ソフトウェアエンジニア</b>。
      </p>
      <hr />
      <p>
        <b>趣味 :</b>
        <br />
        🎮 <b>ゲーム</b> / 🎨 <b>イラスト</b> / 🎸 <b>ベース</b>
      </p>
      <hr />
      <p>
        <b>経歴 :</b>
        <br />
        2020年4月、<b>武蔵野大学データサイエンス学部</b>に入学し、
        <br />
        言語処理や進化計算アルゴリズムについて研究を行う。
      </p>
      <p>
        在学中に、勉強会を主催し、企画・運営および講師を務める。
        <br />
        また、学部内のエンジニア団体<b>MUENT</b>を立ち上げ、代表を務める。
      </p>
      <p>
        Yahoo!JAPAN主催の「Hack U」や サポーターズ主催の「技育CAMP」など、
        <br />
        様々な<b>学生ハッカソン</b>に参加し、多くの賞を受賞。
        <br />
        2023年からは、<b>技育プロジェクト</b>のメンターとしてイベント運営に参加。
      </p>
      <p>
        2024年4月には、<b>株式会社CARTA HOLDINGS</b>に入社予定。
        <br />
        2023年5月から内定者インターンとして開発の実務経験を積んでいる。
      </p>
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
  font-size: 0.75rem;
}
</style>
