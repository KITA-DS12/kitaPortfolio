<template>
  <footer class="site-footer">
    <div class="inner container">
      <p class="copy">© {{ year }} KITA Ryota</p>
      <ul class="links">
        <li>
          <a href="https://github.com/KITA-DS12" target="_blank" rel="noopener">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://x.com/rkita_12" target="_blank" rel="noopener">X</a>
        </li>
        <li>
          <a href="https://note.com/rkita_12" target="_blank" rel="noopener">
            note
          </a>
        </li>
        <li>
          <a href="https://qiita.com/kita_ds12" target="_blank" rel="noopener">
            Qiita
          </a>
        </li>
        <li>
          <a href="https://zenn.dev/rkita_12" target="_blank" rel="noopener">
            Zenn
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<style scoped lang="scss">
.site-footer {
  margin-top: 4rem;
  padding: 2rem 0;
  border-top: 1px solid var(--color-border);
  color: var(--color-muted);
  font-size: 0.85rem;
}

.inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
}

.copy {
  margin: 0;
}

.links {
  display: flex;
  gap: 1.25rem;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin: 0;
  }

  a {
    color: var(--color-muted);

    &:hover {
      color: var(--color-accent);
    }
  }
}
</style>
