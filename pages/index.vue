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
      <nuxt-link to="/profile">
        <span>▶︎ Explore my profile</span>
      </nuxt-link>
    </div>
    <div class="spacer" />
    <img src="/code-and-music.png" alt="Code and Music with white background" />
  </div>
</template>
<style lang="scss" scoped>
.container {
  text-align: center;
  color: #333;
}

.text {
  font-size: 1.5rem;
  font-weight: bold;
}

.profile-link {
  font-size: 1.2rem;

  a {
    text-decoration: none;
  }

  span {
    color: #272;
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
