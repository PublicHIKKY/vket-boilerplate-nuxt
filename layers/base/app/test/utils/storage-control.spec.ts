import { CookieGetOptions, CookieSetOptions } from 'universal-cookie'
import {
  getLocalStorageValue,
  getSessionStorageValue,
  getSingleCookieValue,
  removeLocalStorageValue,
  removeSessionStorageValue,
  removeSingleCookieValue,
  setLocalStorageValue,
  setSessionStorageValue,
  setSingleCookieValue,
} from '#base/app/utils/storage-control'

describe('cookie control test', () => {
  it('cookie set and get', () => {
    const key: string = 'testKeyNameSetAndGet'
    const value: string | null = 'testValueSetAndGet'
    // NOTE: 下記optionsの個別の値はvueuseの機能なので、OSS側個別の値はテストしない。必要であればOSSのテストを書くべき
    const setOptions: CookieSetOptions = {}
    const getOptions: CookieGetOptions = {}

    // NOTE: cookieをセットしてゲットすることでテストする
    setSingleCookieValue(key, value, setOptions)
    expect(getSingleCookieValue(key, getOptions)).toMatch(value)
  })

  it('non-existent key on retrieval', () => {
    const key: string = 'testKeyNameNonExistent'
    // NOTE: 存在しないkeyを取得しようとしてnullになるかテスト
    expect(getSingleCookieValue(key)).toBe(null)
  })

  it('cookie set and get no options', () => {
    const key: string = 'testKeyNameNoOption'
    const value: string | null = 'testValueNoOption'
    const setOptions: CookieSetOptions = {}
    setSingleCookieValue(key, value, setOptions)
    expect(getSingleCookieValue(key)).toMatch(value)
  })

  it('set an empty key', () => {
    const keyEmpty: string = ''
    const value: string | null = 'testValueEmptyKeySet'
    const setOptions: CookieSetOptions = {}
    // NOTE: cookieをセットする時にkeyが無いを空でエラーを再現できるが、エラーで止まる
    expect(() =>
      setSingleCookieValue(keyEmpty, value, setOptions),
    ).toThrowError('set cookie key is falsy')
  })

  it('empty key on retrieval', () => {
    const key: string = 'testKeyNameEmptyKeyGet'
    const keyEmpty: string = ''
    const value: string | null = 'testValueEmptyKeyGet'
    const setOptions: CookieSetOptions = {}
    const getOptions: CookieGetOptions = {}
    // NOTE: cookieを通常通りセットして、ゲット時に空のkeyでnullになるかテストする
    setSingleCookieValue(key, value, setOptions)
    expect(getSingleCookieValue(keyEmpty, getOptions)).toBe(null)
  })

  it('delete', () => {
    const key: string = 'testKeyNameDelete'
    const value: string | null = 'testValueDelete'
    const setOptions: CookieSetOptions = {}
    const getOptions: CookieGetOptions = {}
    setSingleCookieValue(key, value, setOptions)
    removeSingleCookieValue(key, setOptions)
    expect(getSingleCookieValue(key, getOptions)).toBe(null)
  })
})

describe('local storage control test', () => {
  it('local storage set and get', () => {
    const key: string = 'testKeyNameSetAndGet'
    const value: string | null = 'testValueSetAndGet'
    setLocalStorageValue(key, value)
    expect(getLocalStorageValue(key)).toMatch(value)
  })

  it('non-existent key on retrieval', () => {
    const key: string = 'testKeyNameNonExistent'
    expect(getLocalStorageValue(key)).toBe(null)
  })

  it('delete', () => {
    const key: string = 'testKeyNameDelete'
    const value: string | null = 'testValueDelete'
    // NOTE: セット後にデリート成功していたら、存在しないkeyを取得しようとしてnullになっているはずテスト
    setLocalStorageValue(key, value)
    removeLocalStorageValue(key)
    expect(getLocalStorageValue(key)).toBe(null)
  })
})

describe('session storage control test', () => {
  it('session storage set and get', () => {
    const key: string = 'testKeyNameSetAndGet'
    const value: string | null = 'testValueSetAndGet'
    setSessionStorageValue(key, value)
    expect(getSessionStorageValue(key)).toMatch(value)
  })

  it('non-existent key on retrieval', () => {
    const key: string = 'testKeyNameNonExistent'
    expect(getSessionStorageValue(key)).toBe(null)
  })

  it('delete', () => {
    const key: string = 'testKeyNameDelete'
    const value: string | null = 'testValueDelete'
    setSessionStorageValue(key, value)
    removeSessionStorageValue(key)
    expect(getSessionStorageValue(key)).toBe(null)
  })
})
