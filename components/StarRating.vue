<script setup lang="ts">
import { ref, defineProps } from "vue";

const props = defineProps({
  value: {
    type: Number,
    required: true,
  },
});

const rating = ref(props.value);
</script>
<template>
  <div class="star-rating">
    <Star v-for="index in 5" :key="index" :active="index <= rating" />
  </div>
</template>
<style lang="scss" scoped>
.star-rating {
  display: flex;
  align-items: center;
}
</style>
