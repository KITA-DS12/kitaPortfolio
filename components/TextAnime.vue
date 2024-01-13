<script setup lang="ts">
const props = defineProps({
  text: {
    type: Array<string[]>,
    required: true,
  },
});
const text = props.text;
</script>
<template>
  <div class="TextAnime">
    <span v-for="(line, i) in text" :key="i">
      <span v-for="(char, j) in line" :key="j" class="item">
        {{ char }}
      </span>
      <br />
    </span>
  </div>
</template>
<style scoped>
.TextAnime {
  font-weight: bold;
}

.item {
  animation: appear 1.5s ease-in-out forwards;
}

@keyframes appear {
  0% {
    opacity: 0;
    transform: translateY(2rem);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
