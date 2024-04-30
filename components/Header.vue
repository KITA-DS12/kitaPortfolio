<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

const activeMenu = ref(false);
const clickMenu = () => {
  activeMenu.value = !activeMenu.value;
};

const route = useRoute();
const isCurrentPage = (path: string) => {
  return route.path === path;
};
</script>
<template>
  <div class="menu">
    <ul>
      <li @click="clickMenu" :class="{ 'current-page': isCurrentPage('/profile') }">
        <nuxt-link to="/profile">
          <div class="nav_tab_container">
            <span class="title">PROFILE</span>
          </div>
        </nuxt-link>
      </li>
      <li @click="clickMenu" :class="{ 'current-page': isCurrentPage('/skills') }">
        <nuxt-link to="/skills">
          <div class="nav_tab_container">
            <span class="title">SKILLS</span>
          </div>
        </nuxt-link>
      </li>
      <li @click="clickMenu" :class="{ 'current-page': isCurrentPage('/works') }">
        <nuxt-link to="/works">
          <div class="nav_tab_container">
            <span class="title">WORKS</span>
          </div>
        </nuxt-link>
      </li>
      <li @click="clickMenu" :class="{ 'current-page': isCurrentPage('/awards') }">
        <nuxt-link to="/awards">
          <div class="nav_tab_container">
            <span class="title">AWARDS</span>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<style scoped lang="scss">
.menu {
  width: 100%;
  padding: 25px 0;

  @media (max-width: 767px) {
    display: none;
  }

  li {
    margin: 0 10px;
    line-height: 1;

    &.current-page {
      .title {
        color: #3c765c;
      }
    }
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  .nav_tab_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    .title {
      font-size: 1.2rem;
      font-weight: bold;
      color: #888;
    }

    &:hover {
      .title {
        color: #3c765c;
      }
    }
  }
}
</style>
