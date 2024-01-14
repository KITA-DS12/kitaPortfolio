<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
  tags: {
    type: Array<string>,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

const name = props.name;
const imgPath = `/logo/${props.img}.png`;
const level = props.level;
const tags = props.tags;
</script>
<template>
  <div class="card">
    <div class="img-container">
      <img :src="imgPath" :alt="name" />
    </div>
    <p>{{ name }}</p>
    <StarRating :value="level" />
    <div class="tags">
      <Tag v-for="tag in tags" :name="tag" :key="tag" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  width: 65vw;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 1.5rem;
  background-color: rgba(240, 240, 234, 0.5);
  backdrop-filter: blur(10px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  p {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 1rem;
  }

  .img-container {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  img {
    max-width: 80%;
    max-height: 80%;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-top: 1rem;
  }
}
</style>
