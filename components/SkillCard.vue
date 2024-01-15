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
  others: {
    type: Boolean,
    default: false,
  },
});

const name = props.name;
const imgPath = `/logo/${props.img}.png`;
const level = props.level;
const details = props.details;

const expanded = ref(false);

const toggleExpand = () => {
  expanded.value = !expanded.value;
};
</script>
<template>
  <div class="card" :class="{ 'is-expanded': expanded, 'not-others': !others }">
    <div class="img-container">
      <img :src="imgPath" :alt="name" />
    </div>
    <p>{{ name }}</p>
    <div v-if="level > 0">
      <StarRating :value="level" />
    </div>
    <div class="details" v-for="detail in details" :key="detail.category">
      <div v-if="!others">
        <p>{{ detail.category }}</p>
        <hr />
      </div>
      <div class="tags">
        <Tag v-for="tag in detail.tags" :key="tag" :name="tag" />
      </div>
    </div>
    <div class="spacer" />
    <button v-if="!others" class="expand-button" @click="toggleExpand">
      {{ expanded ? "▲ 閉じる" : "▼ 続きを読む" }}
    </button>
  </div>
</template>
<style lang="scss" scoped>
.card {
  width: 65vw;
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

  p {
    font-size: 1.4rem;
    font-weight: bold;
    margin-top: 1rem;
  }

  .img-container {
    width: 80px;
    height: 80px;
    border-radius: 25%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    padding: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
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

    .tags {
      font-size: 0.8rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 5px;
      margin-top: 0.8rem;
    }
  }

  .spacer {
    height: 3rem;
  }

  .expand-button {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    background-color: #333e;
    color: #fff;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #666e;
      transform: translateX(-50%) translateY(-5px);
    }
  }
}

.card.not-others {
  max-height: 35vh;
  overflow: hidden;

  &.is-expanded {
    max-height: none;
  }

  position: relative;
}
</style>
