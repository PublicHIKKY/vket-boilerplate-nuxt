import { test, expect, vi, beforeEach, afterEach } from 'vitest'
import { ref } from 'vue'
import type { WritableComputedRef } from 'vue'
import { useLocale } from '#base/app/composables/useLocale'

let globalLocale: string | null = null

vi.mock('nuxt/app', async (importOriginal) => {
  const actual = await importOriginal<typeof import('nuxt/app')>()
  return {
    ...actual,
    useRequestHeaders: vi.fn(() => 'ja'),
  }
})

vi.mock('vue-i18n', () => ({
  createI18n: vi.fn(() => ({ global: {}, mode: 'composition' })),
  useI18n: vi.fn(() => ({
    locale: ref('ja') as WritableComputedRef<string>,
  })),
}))

vi.mock('@vee-validate/i18n', () => ({
  setLocale: vi.fn((locale: string) => {
    globalLocale = locale
  }),
}))

beforeEach(() => {
  globalLocale = null
})

afterEach(() => {
  vi.restoreAllMocks()
  globalLocale = null
})

test('getDefaultLanguage', () => {
  const locale = useLocale()
  const result = locale.getDefaultLanguage()
  expect(result).oneOf(['ja', 'en'])
})

test('changeLocale', () => {
  const locale = useLocale()
  locale.changeLocale('en')
  expect(globalLocale).toBe('en')
})

test('localPath', () => {
  const locale = useLocale()

  expect(locale.localePath('')).toBe('')
  expect(locale.localePath('/path')).toBe('/path')

  locale.changeLocale('en')
  expect(locale.localePath('')).toBe('/en')
  expect(locale.localePath('/path')).toBe('/en/path')
})
