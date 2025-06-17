import path from 'path'
import { defineNuxtConfig } from 'nuxt/config'
import { readEnvType } from './config/models/EnvType'
import { getRuntimeConfigOfEnvType } from './config/runtimeConfig'
import { nuxtI18nOptions } from './i18n/i18n.config'

type MetaInfo = {
  title: string
  description: string
  robots: string
  siteName: string
  ogImageUrl: string
  ogUrl: string
  twitterSite: string
  twitterCreator: string
}

const NUXT_ENV_OUTPUT_ENV = readEnvType(process.env)
const runtimeConfig = getRuntimeConfigOfEnvType(
  NUXT_ENV_OUTPUT_ENV,
  process.env,
)
const cssUrls = [`@/assets/styles/style.scss`]
const srcDir = 'app'
const isSsr = false
const checkTypeCheckOnBuild = true
const needAnalyze = NUXT_ENV_OUTPUT_ENV === 'local'
const needSourcemap = NUXT_ENV_OUTPUT_ENV !== 'production'
const enableDebug = NUXT_ENV_OUTPUT_ENV === 'local'

const meta: MetaInfo = {
  title: '',
  description: '',
  robots: NUXT_ENV_OUTPUT_ENV === 'production' ? 'all' : 'none',
  siteName: '',
  ogImageUrl: `${runtimeConfig.public.url}/images/ogp.jpg`,
  ogUrl: runtimeConfig.public.url,
  twitterSite: '',
  twitterCreator: '',
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: path.resolve(__dirname, '../base'),
  modules: [
    '@nuxtjs/google-fonts',
  ],
  ssr: isSsr,

  imports: {
    dirs: ['utils/types/**'],
    global: false,
  },

  app: {
    head: {
      meta: [
        { name: 'robots', content: meta.robots },
        {
          name: 'description',
          content: meta.description,
        },
        {
          property: 'og:site_name',
          content: meta.siteName,
        },
        {
          property: 'og:url',
          content: meta.ogUrl,
        },
        {
          property: 'og:title',
          content: meta.title,
        },
        {
          property: 'og:description',
          content: meta.description,
        },
        {
          property: 'og:image',
          content: meta.ogImageUrl,
        },
        {
          name: 'twitter:site',
          content: meta.twitterSite,
        },
        {
          name: 'twitter:creator',
          content: meta.twitterCreator,
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: `${runtimeConfig.public.url}/favicon.ico`,
        },
      ],
    },
  },

  css: cssUrls,
  runtimeConfig,
  dir: {
    public: path.resolve(__dirname, './public'),
  },
  rootDir: __dirname,
  srcDir: `${srcDir}/`,

  alias: {
    '#main': __dirname,
    '@': path.resolve(__dirname, './app'),
  },

  ignore: [
    '.output',
    '**/test/*.{js,ts,jsx,tsx}',
    '**/*.{spec,test}.{js,ts,jsx,tsx}',
    '**/-*.*',
  ],

  build: {
    analyze: needAnalyze,
  },

  sourcemap: {
    server: needSourcemap,
    client: needSourcemap,
  },

  compatibilityDate: '2024-04-03',

  typescript: {
    typeCheck: checkTypeCheckOnBuild,
  },

  debug: enableDebug,

  googleFonts: {
    families: {
      'Noto+Sans+JP': [100, 300, 400, 500, 700, 900],
    },
    display: 'swap',
  },

  i18n: nuxtI18nOptions,
})
