<template>
  <section class="section">
    <div class="container">
      <h2 class="section-title">経歴</h2>
      <div class="history-grid">
        <div class="photo-wrap">
          <img
            class="photo"
            src="/images/profile.jpg"
            alt="北椋太のポートレート"
            width="240"
            height="320"
            loading="lazy"
          />
        </div>
        <ul class="timeline">
          <li>
            <time>2017</time>
            <span>中部大学第一高等学校 機械電気システム科 入学</span>
          </li>
          <li>
            <time>2020</time>
            <span>武蔵野大学 データサイエンス学部 入学</span>
          </li>
          <li>
            <time>2024</time>
            <span>
              武蔵野大学 データサイエンス学部 卒業<br />
              株式会社 CARTA HOLDINGS 入社
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.history-grid {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 2rem;
  align-items: start;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

.photo-wrap {
  @media (max-width: 640px) {
    text-align: center;
  }
}

.photo {
  width: 240px;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  display: block;

  @media (max-width: 640px) {
    width: 200px;
    margin: 0 auto;
  }
}

.timeline {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    padding: 0.75rem 0;
    display: flex;
    gap: 1rem;
    align-items: baseline;

    & + li {
      border-top: 1px solid var(--color-border);
    }
  }

  time {
    flex: 0 0 64px;
    font-variant-numeric: tabular-nums;
    color: var(--color-muted);
    font-size: 0.9rem;
  }
}
</style>
