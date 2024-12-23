// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-12-23",

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    sharedPrerenderData: false,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateUtils: true,
    relativeWatchPaths: true,
    defaults: {
      useAsyncData: {
        deep: true,
      },
    },
  },

  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false,
    },
  },

  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/color-mode",
  ],

  colorMode: {
    classSuffix: "",
    preference: "light",
    fallback: "light",
  },

  css: [
    "@/assets/style.css", // Ensure Tailwind CSS is included
  ],

  image: {
    domains: ["https://cdn.dummyjson.com"],
  },

  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
});
