export default defineNuxtConfig({
  app: {
    head: {
      title: "Nuxt Image Example",
    },
  },
  modules: ["@nuxt/image"],
  image: {
    domains: ["images.pexels.com"],
  },
});
