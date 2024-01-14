// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content"],
  css: ["@/assets/styles/font.css"],
  components: [
    {
      path: "~/components",
    },
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: "ja",
        prefix: "og: http://ogp.me/ns#",
      },
      title: "北椋太 / KITA Ryota",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "武蔵野大学データサイエンス学部出身のWebエンジニア、北椋太のポートフォリオサイト。ハッカソンの参加及び運営・メンター経験を活かし、Web開発プロジェクトに携わる。",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Webエンジニア,データサイエンス,武蔵野大学,ハッカソン,開発,プログラミング,テクノロジ,IT",
        },
        { hid: "og:site_name", property: "og:site_name", content: "サイト名" },
        { hid: "og:type", property: "og:type", content: "website" },
        { hid: "og:url", property: "og:url", content: "https://北.jp" },
        {
          hid: "og:title",
          property: "og:title",
          content: "北椋太 / KITA Ryota",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "武蔵野大学データサイエンス学部出身のWebエンジニア、北椋太のポートフォリオサイト。ハッカソンの参加及び運営・メンター経験を活かし、Web開発プロジェクトに携わる。",
        },
        {
          hid: "og:locale",
          property: "og:locale",
          content: "ja_JP",
        },
      ],
    },
  },
});
