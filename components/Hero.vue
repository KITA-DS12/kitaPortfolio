<template>
  <section class="hero">
    <div class="container">
      <h1 class="name">北椋太</h1>
      <p class="tagline">
        Web Engineer / フルサイクルで企画から実装、運用まで
      </p>
      <p class="intro">
        2001 年生まれ、愛知県出身。CARTA HOLDINGS でゲームメディアや
        ポイントサービスの開発を、企画から実装、運用まで一気通貫で担当して
        いる。最近はチームでの AI 活用にも力を入れている。
      </p>
      <p class="intro">
        趣味は絵を描くことと、邦ロックを聴くこと。イラスト制作や Live2D
        でのモデリングをしたり、休日にはライブやフェスに足を運んだり、
        楽器を触ったりしている。
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  padding: 4rem 0 3rem;
}

.name {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  letter-spacing: 0.02em;
}

.tagline {
  font-size: 1rem;
  color: var(--color-muted);
  margin-bottom: 1.5rem;
}

.intro {
  font-size: 1rem;
  line-height: var(--line-height-body);
  max-width: 640px;
  margin: 0;
}
</style>
