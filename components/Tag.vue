<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const name = props.name;
</script>
<template>
  <a>{{ name }}</a>
</template>
<style lang="scss" scoped>
a {
  margin: 0.2em;
  padding: 0.4em 0.8em;
  line-height: 1;
  color: #252;
  background-color: #fff8;
  border: 1px solid #252;
  border-radius: 3em;
}

a:before {
  content: "#";
}
</style>
