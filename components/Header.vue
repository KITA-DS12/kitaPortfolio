<template>
  <header class="site-header">
    <div class="inner container">
      <nuxt-link to="/" class="site-name">KITA Ryota</nuxt-link>
      <nav class="nav">
        <a href="#works">仕事</a>
        <a href="#personal">個人開発</a>
        <a href="#output">記事</a>
        <a href="#contact">連絡先</a>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: rgba(250, 250, 248, 0.85);
  backdrop-filter: saturate(180%) blur(10px);
  border-bottom: 1px solid var(--color-border);
}

.inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
}

.site-name {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-text);
  text-decoration: none;

  &:hover {
    text-decoration: none;
    color: var(--color-accent);
  }
}

.nav {
  display: flex;
  gap: 1.25rem;

  a {
    font-size: 0.85rem;
    color: var(--color-muted);
    text-decoration: none;

    &:hover {
      color: var(--color-accent);
    }
  }

  @media (max-width: 640px) {
    display: none;
  }
}
</style>
