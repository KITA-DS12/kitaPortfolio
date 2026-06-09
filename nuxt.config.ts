// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content"],
  css: ["@/assets/styles/global.scss"],
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
          key: "description",
          name: "description",
          content:
            "武蔵野大学データサイエンス学部出身のWebエンジニア、北椋太のポートフォリオサイト。ハッカソンの参加及び運営・メンター経験を活かし、Web開発プロジェクトに携わる。",
        },
        {
          key: "keywords",
          name: "keywords",
          content:
            "Webエンジニア,データサイエンス,武蔵野大学,ハッカソン,開発,プログラミング,テクノロジ,IT",
        },
        {
          key: "og:site_name",
          property: "og:site_name",
          content: "北椋太 / KITA Ryota",
        },
        { key: "og:type", property: "og:type", content: "website" },
        { key: "og:url", property: "og:url", content: "https://北.net" },
        {
          key: "og:title",
          property: "og:title",
          content: "北椋太 / KITA Ryota",
        },
        {
          key: "og:description",
          property: "og:description",
          content:
            "武蔵野大学データサイエンス学部出身のWebエンジニア、北椋太のポートフォリオサイト。ハッカソンの参加及び運営・メンター経験を活かし、Web開発プロジェクトに携わる。",
        },
        {
          key: "og:locale",
          property: "og:locale",
          content: "ja_JP",
        },
      ],
    },
  },
});
