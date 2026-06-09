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
            "北椋太 / Web Engineer。株式会社 CARTA HOLDINGS でゲームメディアやポイントサービスの開発に、企画から実装、運用まで一気通貫で携わるフルサイクルエンジニア。AI 活用やハッカソンへの参加・運営にも取り組んでいる。",
        },
        {
          key: "keywords",
          name: "keywords",
          content:
            "北椋太,KITA Ryota,Web Engineer,フルサイクル,CARTA HOLDINGS,ポートフォリオ,AI 活用,Claude Code,Devin,ハッカソン",
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
            "北椋太 / Web Engineer。株式会社 CARTA HOLDINGS でゲームメディアやポイントサービスの開発に、企画から実装、運用まで一気通貫で携わるフルサイクルエンジニア。",
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
