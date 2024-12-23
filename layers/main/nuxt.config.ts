import path from 'path'
import { defineNuxtConfig } from 'nuxt/config'
import { readEnvType } from './config/models/EnvType'
import { getRuntimeConfigOfEnvType } from './config/runtimeConfig'

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
          hid: 'description',
          name: 'description',
          content: meta.description,
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: meta.siteName,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: meta.ogUrl,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: meta.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: meta.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: meta.ogImageUrl,
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: meta.twitterSite,
        },
        {
          hid: 'twitter:creator',
          name: 'twitter:creator',
          content: meta.twitterCreator,
        },
      ],
    },
  },
  css: cssUrls,
  runtimeConfig,
  rootDir: __dirname,
  srcDir: `${srcDir}/`,
  alias: {
    '#base': path.resolve(__dirname, '../base'),
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
    includeWorkspace: true,
  },
  debug: enableDebug,
})
