// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  modules: [],
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
      link: [
        { rel: "canonical", href: "https://xn--djr.net/" },
      ],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          key: "description",
          name: "description",
          content:
            "北椋太 / Web Engineer。株式会社 CARTA HOLDINGS でゲームメディアやポイントサービスの開発に、企画から実装、運用まで一気通貫で携わるフルサイクルエンジニア。AI 活用やハッカソンへの参加・運営にも取り組んでいる。",
        },
        {
          key: "og:site_name",
          property: "og:site_name",
          content: "北椋太 / KITA Ryota",
        },
        { key: "og:type", property: "og:type", content: "website" },
        { key: "og:url", property: "og:url", content: "https://xn--djr.net/" },
        {
          key: "og:title",
          property: "og:title",
          content: "北椋太 / KITA Ryota",
        },
        {
          key: "og:description",
          property: "og:description",
          content:
            "北椋太 / Web Engineer。株式会社 CARTA HOLDINGS でゲームメディアやポイントサービスの開発に、企画から実装、運用まで一気通貫で携わるフルサイクルエンジニア。",
        },
        {
          key: "og:locale",
          property: "og:locale",
          content: "ja_JP",
        },
        {
          key: "og:image",
          property: "og:image",
          content: "https://xn--djr.net/images/icon.jpg",
        },
        {
          key: "og:image:width",
          property: "og:image:width",
          content: "400",
        },
        {
          key: "og:image:height",
          property: "og:image:height",
          content: "400",
        },
        {
          key: "og:image:alt",
          property: "og:image:alt",
          content: "北椋太 / KITA Ryota のプロフィールアイコン",
        },
        {
          key: "twitter:card",
          name: "twitter:card",
          content: "summary",
        },
        {
          key: "twitter:site",
          name: "twitter:site",
          content: "@rkita_12",
        },
        {
          key: "twitter:creator",
          name: "twitter:creator",
          content: "@rkita_12",
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: "北椋太 / KITA Ryota",
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content:
            "北椋太 / Web Engineer。株式会社 CARTA HOLDINGS でゲームメディアやポイントサービスの開発に、企画から実装、運用まで一気通貫で携わるフルサイクルエンジニア。",
        },
        {
          key: "twitter:image",
          name: "twitter:image",
          content: "https://xn--djr.net/images/icon.jpg",
        },
      ],
    },
  },
});
