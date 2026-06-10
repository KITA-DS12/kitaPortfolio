<script setup lang="ts">
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "北椋太",
  alternateName: "KITA Ryota",
  url: "https://xn--djr.net/",
  image: "https://xn--djr.net/images/icon.jpg",
  jobTitle: "Web Engineer",
  worksFor: {
    "@type": "Organization",
    name: "株式会社 CARTA HOLDINGS",
    url: "https://cartaholdings.co.jp/",
  },
  sameAs: [
    "https://github.com/KITA-DS12",
    "https://x.com/rkita_12",
    "https://note.com/rkita_12",
    "https://qiita.com/kita_ds12",
    "https://zenn.dev/rkita_12",
  ],
};

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(personJsonLd),
    },
  ],
});
</script>

<template>
  <div class="container">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
