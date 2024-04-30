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
      <p>
        2020年4月、武蔵野大学データサイエンス学部に入学し、
        <br />
        言語処理や進化計算アルゴリズムについて研究を行う。
      </p>
      <p>
        在学中に、勉強会を主催し、企画・運営および講師を務める。
        <br />
        また、学部内のエンジニア団体MUENTを立ち上げ、代表を務める。
      </p>
      <p>
        Yahoo!JAPAN主催の「Hack U」や サポーターズ主催の「技育CAMP」など、
        <br />
        様々な学生ハッカソンに参加し、多くの賞を受賞。
        <br />
        2023年からは、技育プロジェクトのメンターとしてイベント運営に参加。
      </p>
      <p>
        2024年4月には、株式会社CARTA HOLDINGSに入社予定。
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
  font-size: 0.85rem;
  color: #333;
}
</style>
