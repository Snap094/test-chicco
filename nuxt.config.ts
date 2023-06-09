// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: '/test-chicco/',
        pageTransition: { name: 'page', mode: 'out-in' },
        layoutTransition: { name: 'layout', mode: 'out-in' }
    },
    css: ["~/assets/styles/style.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "~/assets/styles/variables.scss";@import "~/assets/styles/mixins.scss";@import "~/assets/styles/typography.scss";',
                },
            },
        },
    },
})
