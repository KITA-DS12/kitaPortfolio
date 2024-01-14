<script setup lang="ts">
import { defineProps } from "vue";

type Details = {
  category: string;
  tags: string[];
};

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
  details: {
    type: Array<Details>,
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
const details = props.details;
</script>
<template>
  <div class="card">
    <div class="img-container">
      <img :src="imgPath" :alt="name" />
    </div>
    <p>{{ name }}</p>
    <StarRating :value="level" />
    <div class="details" v-for="detail in details" :key="detail.category">
      <p>{{ detail.category }}</p>
      <hr />
      <div class="tags">
        <Tag v-for="tag in detail.tags" :key="tag" :name="tag" />
      </div>
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

  .details {
    margin-top: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-size: 1.2rem;
      margin-bottom: 0.4rem;
    }

    hr {
      border: none;
      height: 1px;
      width: 50%;
      background-color: #333;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 5px;
      margin-top: 0.8rem;
    }
  }
}
</style>
