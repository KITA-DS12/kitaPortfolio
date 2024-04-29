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
  color: #3C765C;
  background-color: #fff8;
  border: 1px solid #3C765C;
  border-radius: 3em;
}

a:before {
  content: "#";
}
</style>
