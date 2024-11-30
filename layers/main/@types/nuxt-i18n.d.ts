import type { NuxtI18nInstance } from '@nuxtjs/i18n'

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $i18n: NuxtI18nInstance
  }
}
