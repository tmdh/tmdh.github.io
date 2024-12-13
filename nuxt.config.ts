// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxt/image'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2024-12-13',
  image: {
    dir: 'assets/images'
  }
})