import { setLocale } from '@vee-validate/i18n'
import { useRequestHeaders } from 'nuxt/app'
import type { InjectionKey } from 'vue'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { getSingleCookieValue } from '#base/app/utils/storage-control'

export const COOKIE_KEY = 'VUEI18N_MANUAL_LOCALE'
export const JA = 'ja'
export const EN = 'en'
export type Lang = typeof JA | typeof EN

export const useLocale = () => {
  const i18n = useI18n()

  /**
   * デフォルトの言語を取得。
   */
  const getDefaultLanguage = () => {
    const reqLocale = useRequestHeaders(['accept-language'])[
      'accept-language'
    ]?.split(',')[0]
    const locale = ref(
      process.server && reqLocale
        ? reqLocale // サーバーサイドでの判定
        : process.client && navigator.language
          ? navigator.language // クライアントでの判定
          : JA,
    )

    const isBrowserLanguageJa = locale.value.startsWith(JA)
    const isBrowserLanguageEn = locale.value.startsWith(EN)
    const defaultLanguageFromCookie = getSingleCookieValue(COOKIE_KEY)
    return defaultLanguageFromCookie === JA
      ? JA
      : defaultLanguageFromCookie === EN
        ? EN
        : isBrowserLanguageJa
          ? JA
          : isBrowserLanguageEn
            ? EN
            : JA
  }

  const changeLocale = (target: 'ja' | 'en') => {
    setLocale(target)
    i18n.locale.value = target
  }

  /**
   * 現在のi18n localeに基づいてlocale固有のパスを返却します。
   * @param to - '/'から始まる宛先パス
   * @returns '/'から始まるパス
   */
  const localePath = (to: string) =>
    i18n.locale.value === JA ? to : `/${i18n.locale.value}${to}`

  return {
    getDefaultLanguage,
    changeLocale,
    localePath,
  }
}

export type LocaleComposable = ReturnType<typeof useLocale>

export const localeInjectionKey: InjectionKey<LocaleComposable>
  = Symbol('locale')
