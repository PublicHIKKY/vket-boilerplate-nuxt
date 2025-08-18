import { describe, expect, it, vi } from 'vitest'
import {
  makeErrorMessage,
  extractErrorMessage,
  isErrorMessage,
  CommonErrors,
  createHttpErrorMessage,
  TypedError,
  createSuccess,
  createError,
  safeAsync,
  safeSync,
} from '#base/app/models/error-message'

describe('error-message', () => {
  describe('makeErrorMessage', () => {
    it('文字列をErrorMessage型に変換できる', () => {
      const message = 'テストエラー'
      const errorMessage = makeErrorMessage(message)

      expect(typeof errorMessage).toBe('string')
      expect(errorMessage).toBe(message)
    })

    it('空文字列も変換できる', () => {
      const message = ''
      const errorMessage = makeErrorMessage(message)

      expect(errorMessage).toBe('')
    })
  })

  describe('extractErrorMessage', () => {
    it('ErrorMessage型から文字列を抽出できる', () => {
      const originalMessage = 'テストエラー'
      const errorMessage = makeErrorMessage(originalMessage)
      const extracted = extractErrorMessage(errorMessage)

      expect(extracted).toBe(originalMessage)
      expect(typeof extracted).toBe('string')
    })
  })

  describe('isErrorMessage', () => {
    it('文字列の場合はtrueを返す', () => {
      expect(isErrorMessage('エラーメッセージ')).toBe(true)
      expect(isErrorMessage('')).toBe(true)
    })

    it('文字列以外の場合はfalseを返す', () => {
      expect(isErrorMessage(123)).toBe(false)
      expect(isErrorMessage(null)).toBe(false)
      expect(isErrorMessage(undefined)).toBe(false)
      expect(isErrorMessage({})).toBe(false)
      expect(isErrorMessage([])).toBe(false)
      expect(isErrorMessage(true)).toBe(false)
    })
  })

  describe('CommonErrors', () => {
    it('定義済みのエラーメッセージが正しく設定されている', () => {
      expect(extractErrorMessage(CommonErrors.UNAUTHORIZED)).toBe('認証が必要です')
      expect(extractErrorMessage(CommonErrors.FORBIDDEN)).toBe('アクセス権限がありません')
      expect(extractErrorMessage(CommonErrors.NOT_FOUND)).toBe('リソースが見つかりません')
      expect(extractErrorMessage(CommonErrors.VALIDATION_ERROR)).toBe('入力値が正しくありません')
      expect(extractErrorMessage(CommonErrors.NETWORK_ERROR)).toBe('ネットワークエラーが発生しました')
      expect(extractErrorMessage(CommonErrors.SERVER_ERROR)).toBe('サーバーエラーが発生しました')
      expect(extractErrorMessage(CommonErrors.TIMEOUT)).toBe('タイムアウトしました')
      expect(extractErrorMessage(CommonErrors.UNKNOWN)).toBe('不明なエラーが発生しました')
    })
  })

  describe('createHttpErrorMessage', () => {
    it('400の場合は適切なメッセージを返す', () => {
      const errorMessage = createHttpErrorMessage(400)
      expect(extractErrorMessage(errorMessage)).toBe('リクエストが正しくありません')
    })

    it('401の場合はCommonErrors.UNAUTHORIZEDを返す', () => {
      const errorMessage = createHttpErrorMessage(401)
      expect(extractErrorMessage(errorMessage)).toBe(extractErrorMessage(CommonErrors.UNAUTHORIZED))
    })

    it('403の場合はCommonErrors.FORBIDDENを返す', () => {
      const errorMessage = createHttpErrorMessage(403)
      expect(extractErrorMessage(errorMessage)).toBe(extractErrorMessage(CommonErrors.FORBIDDEN))
    })

    it('404の場合はCommonErrors.NOT_FOUNDを返す', () => {
      const errorMessage = createHttpErrorMessage(404)
      expect(extractErrorMessage(errorMessage)).toBe(extractErrorMessage(CommonErrors.NOT_FOUND))
    })

    it('408の場合はCommonErrors.TIMEOUTを返す', () => {
      const errorMessage = createHttpErrorMessage(408)
      expect(extractErrorMessage(errorMessage)).toBe(extractErrorMessage(CommonErrors.TIMEOUT))
    })

    it('422の場合はCommonErrors.VALIDATION_ERRORを返す', () => {
      const errorMessage = createHttpErrorMessage(422)
      expect(extractErrorMessage(errorMessage)).toBe(extractErrorMessage(CommonErrors.VALIDATION_ERROR))
    })

    it('500の場合はCommonErrors.SERVER_ERRORを返す', () => {
      const errorMessage = createHttpErrorMessage(500)
      expect(extractErrorMessage(errorMessage)).toBe(extractErrorMessage(CommonErrors.SERVER_ERROR))
    })

    it('502,503,504の場合は一時的利用不可メッセージを返す', () => {
      const expected = 'サーバーが一時的に利用できません'

      expect(extractErrorMessage(createHttpErrorMessage(502))).toBe(expected)
      expect(extractErrorMessage(createHttpErrorMessage(503))).toBe(expected)
      expect(extractErrorMessage(createHttpErrorMessage(504))).toBe(expected)
    })

    it('未定義のステータスコードの場合はデフォルトメッセージを返す', () => {
      const errorMessage = createHttpErrorMessage(999)
      expect(extractErrorMessage(errorMessage)).toBe('HTTPエラー (999)')
    })
  })

  describe('TypedError', () => {
    it('基本的なエラーを作成できる', () => {
      const errorMessage = makeErrorMessage('テストエラー')
      const error = new TypedError(errorMessage)

      expect(error.name).toBe('TypedError')
      expect(error.message).toBe('テストエラー')
      expect(error.errorMessage).toBe(errorMessage)
      expect(error instanceof Error).toBe(true)
    })

    it('オプション付きでエラーを作成できる', () => {
      const errorMessage = makeErrorMessage('テストエラー')
      const options = {
        code: 'TEST_ERROR',
        statusCode: 400,
        details: { field: 'value' },
        cause: new Error('原因エラー'),
      }
      const error = new TypedError(errorMessage, options)

      expect(error.code).toBe('TEST_ERROR')
      expect(error.statusCode).toBe(400)
      expect(error.details).toEqual({ field: 'value' })
      expect(error.cause).toBeInstanceOf(Error)
    })

    it('オプションなしでもエラーを作成できる', () => {
      const errorMessage = makeErrorMessage('シンプルエラー')
      const error = new TypedError(errorMessage)

      expect(error.code).toBeUndefined()
      expect(error.statusCode).toBeUndefined()
      expect(error.details).toBeUndefined()
      expect(error.cause).toBeUndefined()
    })
  })

  describe('createSuccess', () => {
    it('成功結果を作成できる', () => {
      const data = { id: 1, name: 'test' }
      const result = createSuccess(data)

      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toBe(data)
      }
    })

    it('nullやundefinedも成功結果として扱える', () => {
      const nullResult = createSuccess(null)
      const undefinedResult = createSuccess(undefined)

      expect(nullResult.success).toBe(true)
      if (nullResult.success) {
        expect(nullResult.data).toBe(null)
      }
      expect(undefinedResult.success).toBe(true)
      if (undefinedResult.success) {
        expect(undefinedResult.data).toBe(undefined)
      }
    })
  })

  describe('createError', () => {
    it('エラー結果を作成できる', () => {
      const errorMessage = makeErrorMessage('テストエラー')
      const result = createError(errorMessage)

      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error).toBe(errorMessage)
      }
    })
  })

  describe('safeAsync', () => {
    it('成功した場合は成功結果を返す', async () => {
      const mockFn = vi.fn().mockResolvedValue('成功データ')

      const result = await safeAsync(mockFn)

      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toBe('成功データ')
      }
      expect(mockFn).toHaveBeenCalledOnce()
    })

    it('エラーが発生した場合はエラー結果を返す', async () => {
      const mockFn = vi.fn().mockRejectedValue(new Error('テストエラー'))

      const result = await safeAsync(mockFn)

      expect(result.success).toBe(false)
      if (!result.success) {
        expect(extractErrorMessage(result.error)).toBe('予期しないエラーが発生しました')
      }
    })

    it('カスタムエラーマッパーを使用できる', async () => {
      const mockFn = vi.fn().mockRejectedValue(new Error('元のエラー'))
      const errorMapper = vi.fn().mockReturnValue(makeErrorMessage('カスタムエラー'))

      const result = await safeAsync(mockFn, errorMapper)

      expect(result.success).toBe(false)
      if (!result.success) {
        expect(extractErrorMessage(result.error)).toBe('カスタムエラー')
      }
      expect(errorMapper).toHaveBeenCalledWith(expect.any(Error))
    })
  })

  describe('safeSync', () => {
    it('成功した場合は成功結果を返す', () => {
      const mockFn = vi.fn().mockReturnValue('成功データ')

      const result = safeSync(mockFn)

      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toBe('成功データ')
      }
      expect(mockFn).toHaveBeenCalledOnce()
    })

    it('エラーが発生した場合はエラー結果を返す', () => {
      const mockFn = vi.fn().mockImplementation(() => {
        throw new Error('テストエラー')
      })

      const result = safeSync(mockFn)

      expect(result.success).toBe(false)
      if (!result.success) {
        expect(extractErrorMessage(result.error)).toBe('予期しないエラーが発生しました')
      }
    })

    it('カスタムエラーマッパーを使用できる', () => {
      const mockFn = vi.fn().mockImplementation(() => {
        throw new Error('元のエラー')
      })
      const errorMapper = vi.fn().mockReturnValue(makeErrorMessage('カスタムエラー'))

      const result = safeSync(mockFn, errorMapper)

      expect(result.success).toBe(false)
      if (!result.success) {
        expect(extractErrorMessage(result.error)).toBe('カスタムエラー')
      }
      expect(errorMapper).toHaveBeenCalledWith(expect.any(Error))
    })
  })
})
