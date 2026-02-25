import { defineNuxtConfig } from 'nuxt/config'
import path from 'path'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
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

type NuxtConfigInput = Parameters<typeof defineNuxtConfig>[0]
type NuxtVitePluginOption = NonNullable<
  NonNullable<NonNullable<NuxtConfigInput>['vite']>['plugins']
>[number]

const NUXT_ENV_OUTPUT_ENV = readEnvType(process.env)
const runtimeConfig = getRuntimeConfigOfEnvType(
  NUXT_ENV_OUTPUT_ENV,
  process.env,
)
const cssUrls = [`./app/assets/styles/style.scss`]
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
  ogImageUrl: `${process.env.NUXT_PUBLIC_URL}/images/ogp.jpg`,
  ogUrl: runtimeConfig.public.url,
  twitterSite: 'https://x.com/',
  twitterCreator: 'https://x.com/',
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: path.resolve(__dirname, '../base'),
  modules: [
    'unplugin-icons/nuxt',
    '@nuxtjs/google-fonts',
  ],
  ssr: isSsr,
  imports: {
    dirs: [
      'utils/types/**',
      '../main/app/components/**',
      '../main/app/composables/**',
    ],
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
    '#base': path.resolve(__dirname, '../base'),
    '#main': path.resolve(__dirname, '../main'),
    '~': path.resolve(__dirname, '../main/app'),
    '@': path.resolve(__dirname, '../main/app'),
    '#derived-main': __dirname,
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
  vite: {
    plugins: [
      Icons({
        customCollections: {
          // 'hikky-icons': FileSystemIconLoader(path.resolve(__dirname, '../main/app/assets/icons/hikky')),
          'sns-icons': FileSystemIconLoader(path.resolve(__dirname, '../main/app/assets/icons/sns')),
        },
        iconCustomizer(collection, _icon, props) {
          // customize all icons in this collection
          if (
            collection === 'hikky-icons'
            || collection === 'sns-icons'
            || collection === 'ri'
          ) {
            props.width = '1em'
            props.height = '1em'
          }
        },
      }) as unknown as NuxtVitePluginOption,
      Components({
        dts: false,
        resolvers: [
          IconsResolver({
            customCollections: ['hikky-icons', 'sns-icons'],
          }),
        ],
      }) as unknown as NuxtVitePluginOption,
    ],
  },
  typescript: {
    typeCheck: checkTypeCheckOnBuild,
  },
  debug: process.env.VITEST === 'true' ? false : enableDebug,

  googleFonts: {
    families: {
      'Noto+Sans+JP': [100, 300, 400, 500, 700, 900],
    },
    display: 'swap',
  },
  i18n: nuxtI18nOptions,
})
