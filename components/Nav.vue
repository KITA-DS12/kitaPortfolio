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
  <div>
    <header class="header_wrapper">
      <div class="header_logo_wrapper">
        <nuxt-link to="/">
          <img src="~/public/logo-wide.png" alt="Logo" />
        </nuxt-link>
      </div>
      <div class="header_btn_block_wrapper">
        <button class="hamburger" v-if="!activeMenu" @click="clickMenu">
          <img src="~/public/parts/hamburger-btn.svg" alt="Menu" />
        </button>
        <transition name="menu">
          <div class="menu" v-show="activeMenu">
            <ul>
              <li>
                <div>
                  <button class="close_btn" @click="clickMenu">
                    <img src="~/public/parts/close-btn.svg" alt="Menu" />
                  </button>
                </div>
              </li>
              <li
                @click="clickMenu"
                :class="{ 'current-page': isCurrentPage('/') }"
              >
                <nuxt-link to="/">
                  <div class="nav_tab_container">
                    <span class="title">HOME</span>
                    <span class="sub_title">ホーム</span>
                  </div>
                </nuxt-link>
              </li>
              <li
                @click="clickMenu"
                :class="{ 'current-page': isCurrentPage('/profile') }"
              >
                <nuxt-link to="/profile">
                  <div class="nav_tab_container">
                    <span class="title">PROFILE</span>
                    <span class="sub_title">プロフィール</span>
                  </div>
                </nuxt-link>
              </li>
              <li
                @click="clickMenu"
                :class="{ 'current-page': isCurrentPage('/skills') }"
              >
                <nuxt-link to="/skills">
                  <div class="nav_tab_container">
                    <span class="title">SKILLS</span>
                    <span class="sub_title">スキル</span>
                  </div>
                </nuxt-link>
              </li>
              <li
                @click="clickMenu"
                :class="{ 'current-page': isCurrentPage('/works') }"
              >
                <nuxt-link to="/works">
                  <div class="nav_tab_container">
                    <span class="title">WORKS</span>
                    <span class="sub_title">制作物</span>
                  </div>
                </nuxt-link>
              </li>
              <li
                @click="clickMenu"
                :class="{ 'current-page': isCurrentPage('/awards') }"
              >
                <nuxt-link to="/awards">
                  <div class="nav_tab_container">
                    <span class="title">AWARDS</span>
                    <span class="sub_title">受賞歴</span>
                  </div>
                </nuxt-link>
              </li>
              <li
                @click="clickMenu"
                :class="{ 'current-page': isCurrentPage('/blog') }"
              >
                <nuxt-link to="/blog">
                  <div class="nav_tab_container">
                    <span class="title">BLOG</span>
                    <span class="sub_title">ブログ</span>
                  </div>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </header>
    <div class="header_fixed_height_div"></div>
  </div>
</template>
<style lang="scss" scoped>
@mixin disable_default_button_style {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
}

.header_wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 64px;
  padding-top: 16px;
  vertical-align: middle;
  width: 100%;
  background-color: #fffd;
  z-index: 998;
  position: fixed;
  top: 0;
  left: 0;
}

.header_logo_wrapper {
  padding: 0 1rem;

  img {
    width: 15%;
  }
}

.hamburger {
  @include disable_default_button_style;

  position: absolute;
  top: 2.5rem;
  right: 2.5rem;
}

.menu {
  background: #000d;
  z-index: 999;
  width: 100%;
  height: 100%;
  padding: 2rem 1rem;
  position: fixed;
  top: 0;
  right: 0;

  .close_btn {
    @include disable_default_button_style;

    position: absolute;
    top: 2rem;
    right: 2rem;
  }

  li {
    list-style: none;
    line-height: 1;

    &.current-page {
      .title {
        color: #009688;
      }

      .sub_title {
        color: #009688;
      }
    }
  }

  ul {
    margin: 1rem;
    padding: 0;
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
      font-size: 2rem;
      font-weight: bold;
      color: #fff;
    }

    .sub_title {
      font-size: 1.2rem;
      font-weight: lighter;
      color: #ddd;
      margin-top: 0.3rem;
      margin-bottom: 2rem;
    }

    &:hover {
      .title,
      .sub_title {
        color: #009688;
      }
    }
  }
}

.header_fixed_height_div {
  height: 80px;
}
</style>
