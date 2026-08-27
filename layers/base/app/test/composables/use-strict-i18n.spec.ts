import { beforeEach, describe, expect, it, vi } from 'vitest'
import {
  I18nTKeyMissingError,
  useStrictI18n,
} from '#base/app/composables/use-strict-i18n'

const { mockUseI18n } = vi.hoisted(() => ({
  mockUseI18n: vi.fn(),
}))

vi.mock('vue-i18n', async importOriginal => ({
  ...await importOriginal<typeof import('vue-i18n')>(),
  useI18n: mockUseI18n,
}))

describe('useStrictI18n', () => {
  beforeEach(() => {
    mockUseI18n.mockReset()
  })

  it('preserves options and returns the useI18n result', () => {
    const i18n = { t: vi.fn(), locale: { value: 'ja' } }
    mockUseI18n.mockReturnValue(i18n)

    const result = useStrictI18n({ locale: 'ja', fallbackLocale: 'en' })

    expect(result).toBe(i18n)
    expect(mockUseI18n).toHaveBeenCalledWith({
      locale: 'ja',
      fallbackLocale: 'en',
      missing: expect.any(Function),
    })
  })

  it('supports omitted options and throws a descriptive missing-key error', () => {
    useStrictI18n()
    const options = mockUseI18n.mock.calls[0]?.[0]

    expect(() => options.missing('en', 'missing.key')).toThrow(
      new I18nTKeyMissingError('key \'missing.key\' is not found in locale \'en\''),
    )
  })
})
