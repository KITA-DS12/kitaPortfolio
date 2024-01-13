<template>
  <div class="container">
    <div class="spacer" />
    <div class="text">
      <TextAnime :text="[`Hello World !`, `I'm KITA Ryota.`]" />
    </div>
    <div class="spacer" />
    <img src="/code-and-music.png" alt="Code and Music with white background" />
  </div>
</template>
<style scoped>
.container {
  text-align: center;
  font-family: monospace;
  color: #333;
}

.text {
  font-size: 2rem;
  font-weight: bold;
}

.spacer {
  height: 3rem;
}

img {
  width: 60%;
}
</style>
