// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  extends: ['@nuxt3-monorepo-study/ui'],
  runtimeConfig: {
    public: {
      publicApiBase: process.env.NUXT_PUBLIC_API_BASE
    }
  }
});
