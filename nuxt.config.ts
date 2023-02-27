// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      imagesUrl: process.env.IMAGES_URL || ''
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
  ]
})
