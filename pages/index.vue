<script setup lang="ts">
definePageMeta({
  layout: "home",
});
</script>
<template>
  <div class="container">
    <div class="spacer" />
    <div class="text">
      <TextAnime :text="[`Hi, I am KITA Ryota.`, `Web Developer & Creator`]" />
    </div>
    <div class="spacer" />
    <div class="profile-link">
      <a href="/profile">▶︎ Explore my profile</a>
    </div>
    <div class="spacer" />
    <img src="/code-and-music.png" alt="Code and Music with white background" />
  </div>
</template>
<style lang="scss" scoped>
.container {
  text-align: center;
  font-family: monospace;
  color: #333;
}

.text {
  font-size: 1.5rem;
  font-weight: bold;
}

.profile-link {
  font-size: 1.2rem;

  a {
    color: #272;
    text-decoration: none;
  }
}

.spacer {
  height: 2.5rem;
}

img {
  width: 60%;
  max-width: 600px;
}
</style>
