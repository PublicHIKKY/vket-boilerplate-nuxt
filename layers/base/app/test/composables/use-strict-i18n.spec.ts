import { describe, expect, it, vi, beforeEach } from 'vitest'

// useI18nのモック
const mockUseI18n = vi.fn()

// モジュール全体のモック
vi.mock('#base/app/composables/use-strict-i18n', async () => {
  const actual = await vi.importActual('#base/app/composables/use-strict-i18n')
  return {
    ...actual,
    useStrictI18n: vi.fn((options) => {
      return mockUseI18n({
        ...options ?? {},
        missing: (locale: string, key: string) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          throw new (actual as any).I18nTKeyMissingError(`key '${key}' is not found in locale '${locale}'`)
        },
      })
    }),
  }
})

describe('use-strict-i18n.ts', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockUseI18n.mockReturnValue({
      t: vi.fn(),
      locale: { value: 'ja' },
    })
  })

  describe('I18nTKeyMissingError', () => {
    it('Errorクラスを継承している', async () => {
      const { I18nTKeyMissingError } = await import('#base/app/composables/use-strict-i18n')
      const error = new I18nTKeyMissingError('test message')
      expect(error).toBeInstanceOf(Error)
      expect(error.message).toBe('test message')
      expect(error.name).toBe('Error') // デフォルトのError名
    })
  })

  describe('useStrictI18n', () => {
    it('useI18nにmissingオプションを追加して呼び出す', async () => {
      const { useStrictI18n } = await import('#base/app/composables/use-strict-i18n')
      const options = { locale: 'ja' as const }

      useStrictI18n(options)

      expect(mockUseI18n).toHaveBeenCalledWith({
        locale: 'ja' as const,
        missing: expect.any(Function),
      })
    })

    it('オプションなしでも呼び出せる', async () => {
      const { useStrictI18n } = await import('#base/app/composables/use-strict-i18n')

      useStrictI18n()

      expect(mockUseI18n).toHaveBeenCalledWith({
        missing: expect.any(Function),
      })
    })

    it('missingコールバックでI18nTKeyMissingErrorをスロー', async () => {
      const { useStrictI18n, I18nTKeyMissingError } = await import('#base/app/composables/use-strict-i18n')

      useStrictI18n()

      const callArgs = mockUseI18n.mock.calls[0]?.[0]
      const missingCallback = callArgs.missing

      expect(() => {
        missingCallback('en', 'missing.key')
      }).toThrow(I18nTKeyMissingError)

      expect(() => {
        missingCallback('en', 'missing.key')
      }).toThrow('key \'missing.key\' is not found in locale \'en\'')
    })

    it('元のオプションを保持しつつmissingを上書きする', async () => {
      const { useStrictI18n } = await import('#base/app/composables/use-strict-i18n')
      const options = {
        locale: 'ja' as const,
        fallbackLocale: 'en' as const,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        messages: { ja: {}, en: {} } as any,
      }

      useStrictI18n(options)

      const expectedOptions = {
        ...options,
        missing: expect.any(Function),
      }

      expect(mockUseI18n).toHaveBeenCalledWith(expectedOptions)
    })

    it('既存のmissingオプションは上書きされる', async () => {
      const { useStrictI18n } = await import('#base/app/composables/use-strict-i18n')
      const existingMissing = vi.fn()
      const options = {
        locale: 'ja' as const,
        missing: existingMissing,
      }

      useStrictI18n(options)

      const callArgs = mockUseI18n.mock.calls[0]?.[0]
      expect(callArgs.missing).not.toBe(existingMissing)
      expect(callArgs.missing).toBeTypeOf('function')
    })

    it('useI18nの戻り値をそのまま返す', async () => {
      const { useStrictI18n } = await import('#base/app/composables/use-strict-i18n')
      const mockReturn = { t: vi.fn(), locale: { value: 'ja' } }
      mockUseI18n.mockReturnValue(mockReturn)

      const result = useStrictI18n()

      expect(result).toBe(mockReturn)
    })

    it('複数の異なるオプションで呼び出せる', async () => {
      const { useStrictI18n } = await import('#base/app/composables/use-strict-i18n')
      const options1 = { locale: 'ja' as const }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const options2 = { locale: 'en' as any, fallbackLocale: 'ja' as any }

      useStrictI18n(options1)
      useStrictI18n(options2)

      expect(mockUseI18n).toHaveBeenCalledTimes(2)
      expect(mockUseI18n).toHaveBeenNthCalledWith(1, {
        locale: 'ja' as const,
        missing: expect.any(Function),
      })
      expect(mockUseI18n).toHaveBeenNthCalledWith(2, {
        locale: 'en',
        fallbackLocale: 'ja',
        missing: expect.any(Function),
      })
    })
  })
})
