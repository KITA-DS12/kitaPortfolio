<script setup lang="ts">
import { ref, defineProps } from "vue";

const props = defineProps({
  active: {
    type: Boolean,
    required: true,
  },
});

const isActive = ref(props.active);
</script>
<template>
  <span class="star">
    {{ isActive ? "★" : "☆" }}
  </span>
</template>
<style lang="scss" scoped>
.star {
  color: #2a2;
}
</style>
