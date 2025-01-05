/// <reference types="vitest" />
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'
import Vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { fileURLToPath } from 'url'
import svgLoader from 'vite-svg-loader'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [
    Vue(),
    AutoImport({
      exclude: ['/test/', '/test-e2e/'],
      include: [/\.[tj]s?$/, /\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
      imports: [
        'vue',
        'vue-i18n',
        {
          '#app': [
            // NOTE: 自動生成される.nuxt/imports.d.tsから手動移植 https://tech.andpad.co.jp/entry/2023/03/16/100000
            // export { // .nuxt/imports.d.ts 参照
            'useAsyncData',
            'useLazyAsyncData',
            'useNuxtData',
            'refreshNuxtData',
            'clearNuxtData',
            'defineNuxtComponent',
            'useNuxtApp',
            'defineNuxtPlugin',
            'definePayloadPlugin',
            'reloadNuxtApp',
            'useRuntimeConfig',
            'useState',
            'clearNuxtState',
            'useFetch',
            'useLazyFetch',
            'useCookie',
            'useRequestHeaders',
            'useRequestEvent',
            'useRequestFetch',
            'useRequestURL',
            'setResponseStatus',
            'setPageLayout',
            'prerenderRoutes',
            'onNuxtReady',
            'useRouter',
            'useRoute',
            'defineNuxtRouteMiddleware',
            'navigateTo',
            'abortNavigation',
            'addRouteMiddleware',
            'showError',
            'clearError',
            'isNuxtError',
            'useError',
            'createError',
            'defineNuxtLink',
            'useAppConfig',
            'updateAppConfig',
            'defineAppConfig',
            'preloadComponents',
            'preloadRouteComponents',
            'prefetchComponents',
            'loadPayload',
            'preloadPayload',
            'isPrerendered',
            'getAppManifest',
            'getRouteRules',
            'definePayloadReducer',
            'definePayloadReviver',
            'requestIdleCallback',
            'cancelIdleCallback',
            'onBeforeRouteLeave',
            'onBeforeRouteUpdate',
            //  } from '#app'; // .nuxt/imports.d.ts 参照
          ],
          '#i18n': [
            'useRouteBaseName',
            'useLocalePath',
            'useLocaleRoute',
            'useSwitchLocalePath',
            'useLocaleHead',
            'useBrowserLocale',
            'useCookieLocale',
            'defineI18nRoute',
            'defineI18nLocale',
            'defineI18nConfig',
          ],
        },
      ],
      dirs: ['app/composables', 'app/utils/**'],
      dts: './@types/auto-imports.d.ts',
    }),
    Components({
      dirs: ['app/components'],
      dts: './@types/components.d.ts',
    }),
    VueI18nVitePlugin({
      include: [
        path.resolve(
          path.dirname(fileURLToPath(import.meta.url)),
          './i18n/locales/*.json'
        ),
      ],
      defaultSFCLang: 'yaml',
      runtimeOnly: false,
    }),
    svgLoader({
      defaultImport: 'component', // 'component', 'url', 'raw'
      svgo: false,
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      include: ['app/**/*.{vue,ts}'],
    },
  },
  resolve: {
    alias: {
      '#base': path.resolve(__dirname),
      '#main': path.resolve(__dirname, '../main'),
      '#app': path.resolve(__dirname, '../../node_modules/nuxt/dist/app'),
      '#i18n': path.resolve(
        __dirname,
        '../../node_modules/@nuxtjs/i18n/dist/runtime/composables'
      ),
    },
  },
})
