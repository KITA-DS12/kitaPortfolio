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
  description: {
    type: Array<string>,
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
    <div class="top-section">
      <div class="img-container">
        <div class="img-content">
          <img :src="imgPath" :alt="name" />
        </div>
      </div>
      <div class="info">
        <p>{{ name }}</p>
        <div v-if="level > 0">
          <StarRating :value="level" />
        </div>
      </div>
    </div>
    <div class="details">
      <div class="description">
        <p v-for="text in description" :key="text">
          {{ text }}
        </p>
      </div>
      <div class="tags">
        <Tag v-for="tag in tags" :key="tag" :name="tag" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  width: 50vw;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 1.5rem;
  background-color: #fff8;
  backdrop-filter: blur(10px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .top-section {
    display: flex;
    align-items: center;
    width: 100%;

    .img-container {
      flex-basis: 25%;
      display: flex;
      justify-content: flex-end;

      .img-content {
        width: 60px;
        height: 60px;
        border-radius: 25%;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        padding: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

        img {
          width: 50px;
          height: 50px;
          object-fit: cover;
        }
      }
    }

    .info {
      flex-basis: 75%;
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        font-size: 1.2rem;
        font-weight: bold;
        margin-top: 1rem;
      }
    }
  }

  .details {
    margin-top: 0.8rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-size: 1rem;
      margin-bottom: 0.4rem;
    }

    hr {
      border: none;
      height: 1px;
      width: 50%;
      background-color: #333;
    }

    .description {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      p {
        font-size: 0.8rem;
        line-height: 1rem;
      }
    }

    .tags {
      font-size: 0.8rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 5px;
      margin-top: 0.8rem;
    }
  }
}
</style>
