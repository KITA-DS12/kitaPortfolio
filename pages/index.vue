<template>
  <div class="container">
    <div class="spacer" />
    <div class="text">
      <TextAnime :text="[`Hello World !`, `I'm KITA Ryota.`, `A Web Developer.`]" />
    </div>
    <div class="spacer" />
    <div class="profile-link">
      <a href="/profile">▶︎ Profile</a>
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
  font-size: 2rem;
  font-weight: bold;
}

.profile-link {
  font-size: 1.5rem;

  a {
    color: #050;
    text-decoration: none;
  }
}

.spacer {
  height: 2rem;
}

img {
  width: 60%;
}
</style>
