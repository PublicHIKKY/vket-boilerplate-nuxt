import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import type { WritableComputedRef } from 'vue'
import {
  COOKIE_KEY,
  detectLocale,
  useLocale,
} from '#base/app/composables/useLocale'

const { cookieValue, requestHeaders, setLocaleMock } = vi.hoisted(() => ({
  cookieValue: { value: null as string | null },
  requestHeaders: { value: {} as Record<string, string | undefined> },
  setLocaleMock: vi.fn(),
}))

vi.mock('nuxt/app', async importOriginal => ({
  ...await importOriginal<typeof import('nuxt/app')>(),
  useRequestHeaders: vi.fn(() => requestHeaders.value),
}))

vi.mock('#base/app/utils/storage-control', async importOriginal => ({
  ...await importOriginal<typeof import('#base/app/utils/storage-control')>(),
  getSingleCookieValue: vi.fn((key: string) => {
    expect(key).toBe(COOKIE_KEY)
    return cookieValue.value
  }),
}))

vi.mock('vue-i18n', () => ({
  createI18n: vi.fn(() => ({ global: {}, mode: 'composition' })),
  useI18n: vi.fn(() => ({
    locale: ref('ja') as WritableComputedRef<string>,
  })),
}))

vi.mock('@vee-validate/i18n', () => ({
  setLocale: setLocaleMock,
}))

beforeEach(() => {
  cookieValue.value = null
  requestHeaders.value = {}
  setLocaleMock.mockClear()
})

afterEach(() => {
  vi.unstubAllGlobals()
})

const setBrowserLanguage = (language: string) => {
  vi.stubGlobal('navigator', { language })
}

describe('getDefaultLanguage', () => {
  it.each([
    ['ja', 'fr-FR', 'ja'],
    ['en', 'ja-JP', 'en'],
    [null, 'ja-JP', 'ja'],
    [null, 'en-US', 'en'],
    [null, 'fr-FR', 'ja'],
    [null, '', 'ja'],
  ] as const)('cookie=%s browser=%s returns %s', (cookie, browser, expected) => {
    cookieValue.value = cookie
    setBrowserLanguage(browser)

    expect(useLocale().getDefaultLanguage()).toBe(expected)
  })

  it('reads the first request language without affecting the client result', () => {
    requestHeaders.value = { 'accept-language': 'en-US,en;q=0.9' }
    setBrowserLanguage('ja-JP')

    expect(useLocale().getDefaultLanguage()).toBe('ja')
  })

  it('falls back to Japanese when navigator is unavailable', () => {
    vi.stubGlobal('navigator', undefined)

    expect(useLocale().getDefaultLanguage()).toBe('ja')
  })
})

describe('detectLocale', () => {
  it.each([
    [{ isServer: true, isClient: false, requestLanguage: 'en-US' }, 'en-US'],
    [{ isServer: true, isClient: false }, 'ja'],
    [{ isServer: false, isClient: true, browserLanguage: 'en-US' }, 'en-US'],
    [{ isServer: false, isClient: true }, 'ja'],
    [{ isServer: false, isClient: false }, 'ja'],
  ] as const)('detects a locale from %o', (context, expected) => {
    expect(detectLocale(context)).toBe(expected)
  })
})

it('changes both validation and i18n locales', () => {
  const locale = useLocale()

  locale.changeLocale('en')

  expect(setLocaleMock).toHaveBeenCalledWith('en')
  expect(locale.localePath('')).toBe('/en')
  expect(locale.localePath('/path')).toBe('/en/path')
})

it('keeps Japanese paths unprefixed', () => {
  const locale = useLocale()
  expect(locale.localePath('')).toBe('')
  expect(locale.localePath('/path')).toBe('/path')
})
