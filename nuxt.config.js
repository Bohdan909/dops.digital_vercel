import StylelintWebpackPlugin from 'stylelint-webpack-plugin'

export default {
  mode: 'universal',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'dops.digital_2.0',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-16x16.png',
        sizes: '16x16'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-32x32.png',
        sizes: '32x32'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [{
    src: '~/assets/scss/main.scss',
    lang: 'scss'
  }],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~plugins/main',
    { src: '~plugins/vimeo-player', ssr: false },
    { src: '~plugins/vue-secure-html', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/moment'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'vue-social-sharing/nuxt',
    '@nuxtjs/markdownit',
    ['nuxt-lazy-load', {
      directiveOnly: true
    }]
  ],

  styleResources: {
    scss: [
      '@/assets/scss/utils/vars.scss',
      '@/assets/scss/utils/mixins.scss'
    ]
  },

  server: {
    port: 8000
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    vendor: ['vue-vimeo-player'],
    extend (config) {
      config.plugins.push(
        new StylelintWebpackPlugin({
          syntax: 'scss'
        })
      )
    }
  },

  env: {
    // baseUrl: process.env.BASE_URL || "https://dops.digital",
    baseUrl: process.env.BASE_URL || 'http://localhost:8000',

    strapiBaseUri: process.env.API_URL || 'http://localhost:1337'
    // strapiBaseUri: 'https://admin.dops.pro'
  },

  loading: {
    color: '#171b1c',
    height: '3px',
    duration: 500
  },

  transition: {
    name: 'fade-page',
    mode: 'out-in'
  },

  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true
  }
}
