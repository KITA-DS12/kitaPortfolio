<template>
  <div class="site">
    <Header />
    <main class="main">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.main {
  padding-top: 2rem;
}
</style>
