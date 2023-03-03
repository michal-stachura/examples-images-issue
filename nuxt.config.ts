// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {},
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
  ],
  image: {
    provider: 'netlify',
    netlify: {
      baseURl: process.env.IMAGES_URL
    }
  }
})
