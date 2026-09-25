// @vitest-environment ./app/test/composables/node-with-element-environment.ts

import { expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { useLocale } from '#base/app/composables/useLocale'

vi.mock('nuxt/app', async importOriginal => ({
  ...await importOriginal<typeof import('nuxt/app')>(),
  useRequestHeaders: vi.fn(() => ({
    'accept-language': 'en-US,en;q=0.9',
  })),
}))

vi.mock('#base/app/utils/storage-control', async importOriginal => ({
  ...await importOriginal<typeof import('#base/app/utils/storage-control')>(),
  getSingleCookieValue: vi.fn(() => null),
}))

vi.mock('vue-i18n', () => ({
  createI18n: vi.fn(() => ({ global: {}, mode: 'composition' })),
  useI18n: vi.fn(() => ({ locale: ref('ja') })),
}))

vi.mock('@vee-validate/i18n', () => ({ setLocale: vi.fn() }))

it('uses the request language during server rendering', () => {
  expect(useLocale().getDefaultLanguage()).toBe('en')
})
