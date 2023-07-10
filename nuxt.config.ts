// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', 'nuxt-swiper'],
  googleFonts: {
    families: {
      Ubuntu: [400, 500, 700],
      'Ubuntu Mono': [400, 700]
    }
  },
})
