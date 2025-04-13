import { defineNuxtConfig } from 'nuxt/config'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import eslintPlugin from 'vite-plugin-eslint2'
import svgLoader from 'vite-svg-loader'
import { readEnvType } from './config/models/EnvType'
import { getRuntimeConfigOfEnvType } from './config/runtimeConfig'
import { nuxtI18nOptions } from './i18n/i18n.config'

const cssUrls = [`./app/assets/styles/style.scss`]
const srcDir = 'app'

/**
 * Nuxt Config
 * @ref https://nuxt.com/docs/api/configuration/nuxt-config
 */
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/eslint',
    '@vueuse/nuxt',
    'unplugin-icons/nuxt',
    '@nuxtjs/robots',
  ],
  imports: {
    dirs: ['utils/types/**'],
    global: false,
  },
  devtools: { enabled: true },
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1',
      charset: 'utf-8',
      meta: [
        { property: 'og:type', content: 'website' },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'note:card',
          content: 'summary_large_image',
        },
      ],
      noscript: [{ innerHTML: 'JavaScript is required' }],
    },
  },
  css: cssUrls,
  runtimeConfig: getRuntimeConfigOfEnvType(
    readEnvType(process.env),
    process.env,
  ),
  rootDir: __dirname,
  srcDir: `${srcDir}/`,
  alias: {
    '#base': __dirname,
  },
  ignore: [
    '.output',
    '**/test/*.{js,ts,jsx,tsx}',
    '**/*.{spec,test}.{js,ts,jsx,tsx}',
    '**/-*.*',
  ],
  compatibilityDate: '2024-04-03',
  vite: {
    build: {
      emptyOutDir: true,
    },
    plugins: [
      eslintPlugin(),
      svgLoader({
        defaultImport: 'component', // 'component', 'url', 'raw'
        svgo: false,
      }),
      Icons({
        customCollections: {
          'hikky-icons': FileSystemIconLoader(`${srcDir}/assets/icons/hikky`),
          'sns-icons': FileSystemIconLoader(`${srcDir}/assets/icons/sns`),
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
      }),
      Components({
        dts: false,
        resolvers: [
          IconsResolver({
            customCollections: ['hikky-icons', 'sns-icons'],
          }),
        ],
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        verbatimModuleSyntax: false,
      },
    },
  },
  eslint: {
    checker: true,
    config: {
      stylistic: {
        semi: false,
        indent: 2,
        quotes: 'single',
        braceStyle: '1tbs',
      },
    },
  },
  i18n: nuxtI18nOptions,
})
