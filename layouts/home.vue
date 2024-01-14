<template>
  <main>
    <Nav />
    <slot />
    <Footer />
  </main>
</template>
<style lang="scss" scoped>
main {
  font-family: "KiyosunaSans", "Helvetica Neue", "Helvetica", "Hiragino Sans",
    "Hiragino Kaku Gothic ProN", "Arial", "Yu Gothic", "Meiryo", sans-serif;
  background-color: #f0f0ea;
}
</style>
