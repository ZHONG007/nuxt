//import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
// export default defineNuxtConfig({
//     meta: {
//         title: 'Vitesse Nuxt 3',
//         link: [
//             { rel: "stylesheet", type: "text/css", href: "https://cdn.jsdelivr.net/npm/@quasar/extras/material-icons/material-icons.css", },
//             { rel: "stylesheet", type: "text/css", href: "https://cdn.jsdelivr.net/npm/quasar@2/dist/quasar.prod.css", },
//         ],
//         script: [
//             {
//                 src: "https://cdn.jsdelivr.net/npm/quasar@2/dist/quasar.umd.prod.js"
//             }
//         ],
//     },
// })

// export default defineNuxtConfig({
//     plugins: [{ src: '@/plugins/element-plus', ssr: false }],
//     css: [
//         'element-plus/dist/index.css'
//     ],
// })
 import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    css: [
        'primevue/resources/themes/saga-blue/theme.css',
        'primevue/resources/primevue.css',
        'primeicons/primeicons.css', 
        '~/assets/scss/main.scss'
        
    ],
    build: {
        transpile: [
            'vant',
            'primevue'
        ],
    },
})
