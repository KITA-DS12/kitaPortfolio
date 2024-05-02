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
        </p>
      </div>

      <hr />

      <ProfileTitle title="link" />
      <p>
        <b>SNS</b>
      </p>
      <div class="content">
        <p>
          X : <a href="https://twitter.com/dhs_1212">@dhs_1212</a>
          <br />
          Instagram :
          <a href="https://www.instagram.com/ryota.hs13">ryota.hs13</a>
          <br />
          GitHub : <a href="https://github.com/KITA-DS12">KITA-DS12</a> (旧 :
          <a href="https://github.com/RyotaKITA-12">RyotaKITA-12</a>)
          <br />
          Qiita : <a href="https://qiita.com/kita_ds12">@kita_ds12</a>
        </p>
      </div>

      <hr />

      <ProfileTitle title="tech" />
      <p><b>Programming</b></p>
      <div class="content">
        <p>
          高校(工業科)でC言語を学び、プログラミングに興味を持つ。
          <br />
          大学ではPythonを用いたデータ分析や機械学習を学ぶ。
          <br />
          1〜2年次には、Pythonの公式ドキュメントを通読していた。
          <br />
          3年次からは、Webアプリの開発を通してJS/TSやGoを学ぶ。
        </p>
      </div>
      <p><b>Develop</b></p>
      <div class="content">
        <p>主にWebアプリケーションの開発を行う。</p>
        <p>
          <b>【よく使う技術 (詳細は<a href="/skills">SKILLS</a>で) 】</b>
        </p>

        <div class="sub-content">
          <p><b>Frontend</b></p>
          <div class="sub-content">
            <p>
              - Nuxt.js (Vue.js) + TypeScript
              <br />
              - Next.js (React) + TypeScript
            </p>
          </div>
          <p><b>Backend</b></p>
          <div class="sub-content">
            <p>
              - Python ( FastAPI，Flask，Django, Streamlit )
              <br />
              - Go ( net/http，Gin，Fiber)
              <br />
              - Node.js ( Express.js )
            </p>
          </div>
          <p><b>Infrastructure</b></p>
          <div class="sub-content">
            <p>
              - Amazon Web Services
              <br />
              - Google Cloud Platform
              <br />
              - Terraform
            </p>
          </div>
        </div>
        <p>
          その他にSwiftを用いたiOSアプリの開発や、
          <br />
          Unityを用いたゲーム開発も経験あり。
        </p>
      </div>
      <p><b>Editor</b></p>
      <div class="content">
        <p>
          vi / Vim / Neovim を愛している。
          <br />
          VSCode を開いても内部のターミナルでVimを使ってしまう。
          <br />
          元々は盆栽(vimrc)をしていたが、最近はAstroNvimを一部カスタムして使用。
        </p>
      </div>

      <hr />

      <ProfileTitle title="interest" />
      <p><b>💻 Computer Science</b></p>
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

      <hr />

      <ProfileTitle title="device" />
      <p><b>💻 Computer</b></p>
      <div class="content">
        <p><b>MacBook Pro (16-inch, 2019)</b></p>
        <div class="sub-content">
          <p>
            Intel Core i9 (2.3GHz/8コア)
            <br />
            32GB (DDR4-2666)
            <br />
            AMD Radeon Pro 5500M 8GB
          </p>
        </div>
        <p><b>GALLERIA RM7C-R47</b></p>
        <div class="sub-content">
          <p>
            Intel Core i7-14700F (2.1GHz-5.3GHz/20コア/28スレッド)
            <br />
            32GB (DDR4-3200)
            <br />
            NVIDIA GeForce RTX 4070 12GB GDDR6X
          </p>
        </div>
      </div>
      <p><b>⌨️ Keyboard</b></p>
      <div class="content">
        <p><b>Moonlander Mark I</b></p>
        <div class="sub-content">
          <p>Dark Matter / Blank / Cherry MX Red</p>
        </div>
      </div>
      <p><b>🖱 Mouse</b></p>
      <div class="content">
        <p><b>ERGO M575 Wireless Trackball Mouse M575S</b></p>
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

.sub-content {
  margin-top: -0.5rem;
  padding-left: 1rem;
}

a {
  color: #3c765c;
}
</style>
