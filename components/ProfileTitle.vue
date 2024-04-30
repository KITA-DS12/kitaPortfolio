<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <h1 class="title">-　{{ title }}　-</h1>
</template>
<style lang="scss" scoped>
.title {
  font-size: 1rem;
  font-weight: bold;
  margin: 20px 0;
  color: #3c765c;
}
</style>
