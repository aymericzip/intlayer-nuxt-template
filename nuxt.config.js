import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    lazy: true,
    langDir: "locales",
    locales: [
      {
        code: "en",
        files: ["locales/en/about.json", "locales/en/home.json"],
      },
      {
        code: "fr",
        files: ["locales/fr/about.json", "locales/fr/home.json"],
      },
      {
        code: "es",
        files: ["locales/es/about.json", "locales/es/home.json"],
      },
    ],
  },
});
