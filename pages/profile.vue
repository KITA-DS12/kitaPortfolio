<template>
  <div class="container">
    <img class="profile-image" src="/public/my-face.png" alt="My face" />
    <div class="description">
      <ProfileTitle title="about" />
      <p><b>北 椋太 / Ryota KITA</b></p>
      <div class="content">
        <p>
          2001年生まれ、愛知県出身。
          <br />
          東京都在住のソフトウェアエンジニア。
          <br />
          主にWebアプリの開発(領域問わず)を行う。
        </p>
      </div>

      <hr />

      <ProfileTitle title="interest" />
      <p><b>💻 Computer Scienc</b></p>
      <div class="content">
        <p>
          特にプログラミング言語そのものや、
          <br />
          アルゴリズム(特に群知能)に興味を持つ。
        </p>
      </div>
      <p><b>🎨 Illustration</b></p>
      <div class="content">
        <p>
          キャラクターデザインやイラスト制作を行う。
          <br />
          主にデジタルイラストを描くことが多い。
        </p>
      </div>
      <p><b>🎸 Music</b></p>
      <div class="content">
        <p>
          邦ロックやHIPHOP、ボカロ、アイドルなど、ジャンルを問わず好む。
          <br />
          また、趣味程度にアコースティックギターやエレキベースを演奏する。
        </p>
      </div>
      <p><b>🎮 Game</b></p>
      <div class="content">
        <p>RPGやFPS、シミュレーションなど、幅広いジャンルのゲームを好む。</p>
      </div>
      <p><b>📚 Anime & Manga</b></p>
      <div class="content">
        <p>少年漫画やダークファンタジーを特に好む。</p>
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
  padding-left: 1.5rem;
}
</style>
