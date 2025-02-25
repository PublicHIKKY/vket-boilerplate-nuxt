import { defineNuxtRouteMiddleware, navigateTo, useNuxtApp } from 'nuxt/app'
import { Composer, VueI18n } from 'vue-i18n'
import {
  getSingleCookieValue,
  setSingleCookieValue,
} from '../utils/storage-control'

const jaLanguage = 'ja'
const enLanguage = 'en'
const cookieKey = 'VUEI18N_MANUAL_LOCALE'

// i18用の管理を行う
export default defineNuxtRouteMiddleware((to, _from) => {
  if (import.meta.server) return
  const globalI18n = useNuxtApp().$i18n as VueI18n | Composer
  const cookieLanguage = getSingleCookieValue(cookieKey) || null
  const toFullPath = to?.fullPath.endsWith('/')
    ? to.fullPath
    : `${to.fullPath}/`
  // note: localeはComputedRefであるはず。stringならこの処理は不具合につながるからスキップ
  if (typeof globalI18n.locale === 'string') return
  if (!cookieLanguage) {
    if (toFullPath.includes(`/${enLanguage}/`)) {
      if (globalI18n.locale.value === enLanguage) {
        setSingleCookieValue(cookieKey, enLanguage)
      }
      if (globalI18n.locale.value === jaLanguage) {
        setSingleCookieValue(cookieKey, jaLanguage)
        return navigateTo(toFullPath.replace(`/${enLanguage}/`, '/'))
      }
    } else {
      if (globalI18n.locale.value === jaLanguage) {
        setSingleCookieValue(cookieKey, jaLanguage)
      }
      if (globalI18n.locale.value === enLanguage) {
        setSingleCookieValue(cookieKey, enLanguage)
        const path = `/${enLanguage}${to.path}/`.replace('//', '/')
        return navigateTo(path)
      }
    }
    // pathにlocaleが含まれるかのみで判定。i18nとcookieの両方を確認して言語設定に齟齬がないように調整する。リダイレクトはさせない。
  } else {
    if (toFullPath.includes(`/${enLanguage}/`)) {
      if (globalI18n.locale.value !== enLanguage) {
        globalI18n.locale.value = enLanguage
      }
      if (cookieLanguage !== enLanguage) {
        setSingleCookieValue(cookieKey, enLanguage)
      }
      return
    }
    // locale pathが設定されていない場合は、jaとして扱う
    if (globalI18n.locale.value !== jaLanguage) {
      globalI18n.locale.value = jaLanguage
    }
    if (cookieLanguage !== jaLanguage) {
      setSingleCookieValue(cookieKey, jaLanguage)
    }
  }
})
