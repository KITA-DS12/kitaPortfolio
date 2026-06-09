<template>
  <section id="contact" class="section">
    <div class="container">
      <h2 class="section-title">各種リンク</h2>
      <ul class="links">
        <li v-for="link in links" :key="link.url">
          <span class="label">{{ link.label }}</span>
          <a :href="link.url" target="_blank" rel="noopener">{{ link.handle }}</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
type Link = {
  label: string;
  handle: string;
  url: string;
};

const links: Link[] = [
  {
    label: "GitHub",
    handle: "@KITA-DS12",
    url: "https://github.com/KITA-DS12",
  },
  {
    label: "X",
    handle: "@rkita_12",
    url: "https://x.com/rkita_12",
  },
  {
    label: "note",
    handle: "@rkita_12",
    url: "https://note.com/rkita_12",
  },
  {
    label: "Qiita",
    handle: "@kita_ds12",
    url: "https://qiita.com/kita_ds12",
  },
  {
    label: "Zenn",
    handle: "@rkita_12",
    url: "https://zenn.dev/rkita_12",
  },
];
</script>

<style scoped lang="scss">
.links {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    gap: 1.5rem;
    padding: 0.75rem 0;
    align-items: baseline;

    & + li {
      border-top: 1px solid var(--color-border);
    }
  }
}

.label {
  flex: 0 0 80px;
  font-size: 0.9rem;
  color: var(--color-muted);
}
</style>
