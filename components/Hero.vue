<template>
  <section class="hero">
    <div class="container">
      <h1 class="name">北椋太</h1>
      <p class="tagline">
        Web Engineer / フルサイクルで企画から実装、運用まで
      </p>
      <p class="intro">
        企画から運用まで関わるのが好きで、CARTA HOLDINGS でゲームメディアや
        ポイントサービスの開発を担当しています。最近は AI 活用にも力を入れて
        います。
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
