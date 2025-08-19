import path from 'path'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import { defineConfig } from 'vitest/config'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  plugins: [
    Vue(),
    {
      name: 'mock-svg-icons',
      transform(_, id) {
        if (id.includes('~icons/')) {
          return 'export default { name: "MockIcon", template: "<svg><path /></svg>", props: ["class"] }';
        }
      },
    },
    AutoImport({
      exclude: ['/test/', '/test-e2e/'],
      include: [/\.[tj]s?$/, /\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
      imports: [
        'vue',
        'vue-i18n',
        {
          '#app': [
            /*
             * NOTE: 自動生成される.nuxt/imports.d.tsから手動移植 https://tech.andpad.co.jp/entry/2023/03/16/100000
             * export { // .nuxt/imports.d.ts 参照
             */
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
    svgLoader({
      defaultImport: 'component', // 'component', 'url', 'raw'
      svgo: false,
    }),
    Icons({
      autoInstall: true,
      compiler: 'vue3',
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      include: ['app/**/*.{vue,ts}'],
      exclude: [
        'app/plugins/**',
        'app/middleware/**',
        'app/layouts/**',
        'app/test/**'
      ],
    },
    setupFiles: ['./app/test/setup.ts'],
  },
  resolve: {
    alias: {
      '#base': path.resolve(__dirname),
      '#main': path.resolve(__dirname, '../main'),
      '#app': path.resolve(__dirname, '../../node_modules/nuxt/dist/app'),
      '#i18n': path.resolve(
        __dirname,
        '../../node_modules/@nuxtjs/i18n/dist/runtime/composables',
      ),
      '#imports': path.resolve(__dirname, 'app/test/mocks/imports.ts'),
      '@@/public/images/no-image.png': '/images/no-image.png',
    },
  },
})
