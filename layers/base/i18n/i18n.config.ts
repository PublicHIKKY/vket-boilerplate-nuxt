// note: i18n by nuxt-i18n i18nの不具合があればこのファイルから参照する
// ref: https://v8.i18n.nuxtjs.org/
import type { NuxtI18nOptions } from '@nuxtjs/i18n/dist/module'
import Cookies from 'universal-cookie'
import en from './locales/en.json'
import ja from './locales/ja.json'

const cookie = new Cookies()
const jaLanguage = 'ja'
const enLanguage = 'en'
const cookieKey = 'VUEI18N_MANUAL_LOCALE'
const isBrowserLanguageJa = process.client
  ? navigator?.language?.startsWith(jaLanguage)
  : false
const isBrowserLanguageEn = process.client
  ? navigator?.language?.startsWith(enLanguage)
  : false
const defaultLanguageFromCookie = process.client
  ? cookie.get(cookieKey) ?? null
  : ''
const defaultLanguage
  = defaultLanguageFromCookie === jaLanguage
    ? jaLanguage
    : defaultLanguageFromCookie === enLanguage
      ? enLanguage
      : isBrowserLanguageJa
        ? jaLanguage
        : isBrowserLanguageEn
          ? enLanguage
          : jaLanguage

// settings for nuxt-i18n v9~
export const nuxtI18nOptions: NuxtI18nOptions = {
  strategy: 'prefix_and_default',
  locales: [
    {
      code: jaLanguage,
      language: 'ja-JP',
      file: 'ja.json',
      isCatchallLocale: true,
    },
    {
      code: enLanguage,
      language: 'en-US',
      file: 'en.json',
    },
  ],
  defaultLocale: defaultLanguage,
  customRoutes: 'config',
  pages: {
    api: false,
    server: false,
  },
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
    redirectOn: 'root', // recommended
    alwaysRedirect: true,
    cookieCrossOrigin: true,
    fallbackLocale: defaultLanguage,
  },
  vueI18n: './i18n/i18n.config.ts',
}

export default {
  legacy: false,
  locale: defaultLanguage,
  messages: {
    ja,
    en,
  },
}
