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
  ],
  image: {
    provider: 'netlify',
    netlify: {
      baseURl: 'https://heroic-mandazi-8e8b17.netlify.app/'
    }
  }
})
