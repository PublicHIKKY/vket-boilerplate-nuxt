import Cookies, { CookieGetOptions, CookieSetOptions } from 'universal-cookie'
import { addDateTime } from './date-control'

const cookie = new Cookies()
const setCookieDefaultSettings: CookieSetOptions = {
  expires: addDateTime(30, 'day', new Date()),
  path: '/',
  secure: true,
}

/**
 * @desc cookieの特定の値を返す
 * @param {string} key
 * @param {CookieGetOptions} options
 * @return {unknown}
 */
export const getSingleCookieValue = (
  key: string,
  options: CookieGetOptions | null = null,
): string | null => {
  if (!key) return null
  if (options === null) {
    return cookie.get(key) ?? null
  }
  return cookie.get(key, options) ?? null
}

/**
 * @desc cookieに特定のkey,valueを格納する
 * @param {string} key
 * @param {string} value
 * @param {CookieSetOptions} options
 */
export const setSingleCookieValue = (
  key: string,
  value: string,
  options: CookieSetOptions = setCookieDefaultSettings,
) => {
  if (key) {
    return cookie.set(key, value, options)
  }
  throw new Error('set cookie key is falsy')
}

/**
 * @desc cookieの特定の値を削除
 * @param {string} key
 * @param {CookieSetOptions} options
 */
export const removeSingleCookieValue = (
  key: string,
  options: CookieSetOptions = setCookieDefaultSettings,
) => {
  if (key) {
    return cookie.remove(key, options)
  }
  throw new Error('remove cookie key is falsy')
}

/**
 * @desc local storageの特定の値を返す
 * @param {string} key
 * @return {string | null}
 */
export const getLocalStorageValue = (key: string) => {
  return localStorage.getItem(key)
}

/**
 * @desc local storageに特定のkey,valueを格納する
 * @param {string} key
 * @param {string} value
 */
export const setLocalStorageValue = (key: string, value: string) => {
  localStorage.setItem(key, value)
}

/**
 * @desc local storageの特定のkeyを削除する
 * @param {string} key
 */
export const removeLocalStorageValue = (key: string) => {
  localStorage.removeItem(key)
}

/**
 * @desc session storageの特定の値を返す
 * @param {string} key
 * @return {string | null}
 */
export const getSessionStorageValue = (key: string) => {
  return sessionStorage.getItem(key)
}

/**
 * @desc session storageに特定のkey,valueを格納する
 * @param {string} key
 * @param {string} value
 */
export const setSessionStorageValue = (key: string, value: string) => {
  sessionStorage.setItem(key, value)
}

/**
 * @desc session storageの特定のkeyを削除する
 * @param {string} key
 */
export const removeSessionStorageValue = (key: string) => {
  sessionStorage.removeItem(key)
}
