import { describe, expect, it } from 'vitest'
import { z } from 'zod/v3'
import {
  statusSchema,
  pagingSchema,
  makeResponseSchema,
  isFetchError,
  fetchErrorSchema,
  ensureAsyncDataOf,
  requireAsyncDataOf,
  type ResponseStatus,
  type Paging,
} from '#base/app/utils/response'

describe('response.ts', () => {
  describe('statusSchema', () => {
    it('okステータスを正しく検証する', () => {
      const result = statusSchema.safeParse('ok')
      expect(result.success).toBe(true)
      expect(result.data).toBe('ok')
    })

    it('ngステータスを正しく検証する', () => {
      const result = statusSchema.safeParse('ng')
      expect(result.success).toBe(true)
      expect(result.data).toBe('ng')
    })

    it('無効なステータスを拒否する', () => {
      const result = statusSchema.safeParse('invalid')
      expect(result.success).toBe(false)
    })

    it('文字列以外を拒否する', () => {
      expect(statusSchema.safeParse(123).success).toBe(false)
      expect(statusSchema.safeParse(null).success).toBe(false)
      expect(statusSchema.safeParse(undefined).success).toBe(false)
    })
  })

  describe('pagingSchema', () => {
    it('正しいページング情報を検証する', () => {
      const validPaging = {
        limit: 10,
        offset: 0,
        total: 100,
      }
      const result = pagingSchema.safeParse(validPaging)
      expect(result.success).toBe(true)
      expect(result.data).toEqual(validPaging)
    })

    it('必須フィールドが不足している場合エラーを返す', () => {
      expect(pagingSchema.safeParse({ limit: 10, offset: 0 }).success).toBe(false)
      expect(pagingSchema.safeParse({ limit: 10, total: 100 }).success).toBe(false)
      expect(pagingSchema.safeParse({ offset: 0, total: 100 }).success).toBe(false)
    })

    it('数値以外の値を拒否する', () => {
      const invalidPaging = {
        limit: '10',
        offset: 0,
        total: 100,
      }
      expect(pagingSchema.safeParse(invalidPaging).success).toBe(false)
    })

    it('空オブジェクトを拒否する', () => {
      expect(pagingSchema.safeParse({}).success).toBe(false)
    })
  })

  describe('makeResponseSchema', () => {
    it('基本的なレスポンススキーマを作成する', () => {
      const schema = makeResponseSchema({
        data: z.string(),
        message: z.string(),
      })

      const validResponse = {
        status: 'ok',
        data: 'test data',
        message: 'success',
      }

      const result = schema.safeParse(validResponse)
      expect(result.success).toBe(true)
      expect(result.data).toEqual(validResponse)
    })

    it('statusフィールドが必須である', () => {
      const schema = makeResponseSchema({
        data: z.string(),
      })

      const invalidResponse = {
        data: 'test data',
        // status missing
      }

      expect(schema.safeParse(invalidResponse).success).toBe(false)
    })

    it('複雑なスキーマオブジェクトを処理する', () => {
      const schema = makeResponseSchema({
        users: z.array(z.object({
          id: z.number(),
          name: z.string(),
        })),
        paging: pagingSchema,
      })

      const validResponse = {
        status: 'ok',
        users: [
          { id: 1, name: 'Alice' },
          { id: 2, name: 'Bob' },
        ],
        paging: {
          limit: 10,
          offset: 0,
          total: 2,
        },
      }

      const result = schema.safeParse(validResponse)
      expect(result.success).toBe(true)
    })

    it('空のスキーマオブジェクトでも動作する', () => {
      const schema = makeResponseSchema({})

      const validResponse = {
        status: 'ng',
      }

      const result = schema.safeParse(validResponse)
      expect(result.success).toBe(true)
      expect(result.data).toEqual(validResponse)
    })
  })

  describe('isFetchError', () => {
    it('FetchErrorオブジェクトを正しく識別する', () => {
      const fetchError = {
        name: 'FetchError',
        message: 'Network error',
        cause: 'Connection failed',
      }

      expect(isFetchError(fetchError)).toBe(true)
    })

    it('FetchError以外のErrorオブジェクトを拒否する', () => {
      const normalError = {
        name: 'Error',
        message: 'Normal error',
      }

      expect(isFetchError(normalError)).toBe(false)
    })

    it('nameプロパティがないオブジェクトを拒否する', () => {
      const obj = {
        message: 'No name property',
      }

      expect(isFetchError(obj)).toBe(false)
    })

    it('プリミティブ値を拒否する', () => {
      expect(isFetchError('string')).toBe(false)
      expect(isFetchError(123)).toBe(false)
      expect(isFetchError(null)).toBe(false)
      expect(isFetchError(undefined)).toBe(false)
    })

    it('空オブジェクトを拒否する', () => {
      expect(isFetchError({})).toBe(false)
    })
  })

  describe('fetchErrorSchema', () => {
    it('有効なFetchErrorを検証する', () => {
      const fetchError = {
        name: 'FetchError',
        message: 'Network error',
      }

      const result = fetchErrorSchema.safeParse(fetchError)
      expect(result.success).toBe(true)
      expect(result.data).toEqual(fetchError)
    })

    it('無効なオブジェクトを拒否する', () => {
      const invalidError = {
        name: 'Error',
        message: 'Not a fetch error',
      }

      expect(fetchErrorSchema.safeParse(invalidError).success).toBe(false)
    })
  })

  describe('ensureAsyncDataOf', () => {
    const testSchema = z.object({
      id: z.number(),
      name: z.string(),
    })

    it('有効なAsyncDataオブジェクトを検証する', () => {
      const validAsyncData = {
        data: {
          value: { id: 1, name: 'test' },
        },
        error: {
          value: null,
        },
      }

      expect(() => {
        ensureAsyncDataOf(testSchema, validAsyncData)
      }).not.toThrow()
    })

    it('nullのdataを許可する', () => {
      const asyncDataWithNullData = {
        data: {
          value: null,
        },
        error: {
          value: null,
        },
      }

      expect(() => {
        ensureAsyncDataOf(testSchema, asyncDataWithNullData)
      }).not.toThrow()
    })

    it('有効なFetchErrorを許可する', () => {
      const asyncDataWithError = {
        data: {
          value: null,
        },
        error: {
          value: {
            name: 'FetchError',
            message: 'Network error',
          },
        },
      }

      expect(() => {
        ensureAsyncDataOf(testSchema, asyncDataWithError)
      }).not.toThrow()
    })

    it('プリミティブ値を拒否する', () => {
      expect(() => {
        ensureAsyncDataOf(testSchema, 'string')
      }).toThrow('Expected object with data and error properties')

      expect(() => {
        ensureAsyncDataOf(testSchema, 123)
      }).toThrow('Expected object with data and error properties')

      expect(() => {
        ensureAsyncDataOf(testSchema, null)
      }).toThrow('Expected object with data and error properties')
    })

    it('dataプロパティがないオブジェクトを拒否する', () => {
      const invalidObject = {
        error: { value: null },
      }

      expect(() => {
        ensureAsyncDataOf(testSchema, invalidObject)
      }).toThrow('Expected object with data and error properties')
    })

    it('errorプロパティがないオブジェクトを拒否する', () => {
      const invalidObject = {
        data: { value: { id: 1, name: 'test' } },
      }

      expect(() => {
        ensureAsyncDataOf(testSchema, invalidObject)
      }).toThrow('Expected object with data and error properties')
    })

    it('無効なdataスキーマを拒否する', () => {
      const invalidAsyncData = {
        data: {
          value: { id: 'invalid', name: 'test' }, // idが文字列（数値であるべき）
        },
        error: {
          value: null,
        },
      }

      expect(() => {
        ensureAsyncDataOf(testSchema, invalidAsyncData)
      }).toThrow()
    })

    it('無効なerrorオブジェクトを拒否する', () => {
      const invalidAsyncData = {
        data: {
          value: null,
        },
        error: {
          value: {
            name: 'Error', // FetchErrorでない
            message: 'Invalid error',
          },
        },
      }

      expect(() => {
        ensureAsyncDataOf(testSchema, invalidAsyncData)
      }).toThrow()
    })
  })

  describe('requireAsyncDataOf', () => {
    const testSchema = z.object({
      id: z.number(),
      name: z.string(),
    })

    it('有効なAsyncDataオブジェクトを返す', () => {
      const validAsyncData = {
        data: {
          value: { id: 1, name: 'test' },
        },
        error: {
          value: null,
        },
      }

      const result = requireAsyncDataOf(testSchema, validAsyncData)
      expect(result).toBe(validAsyncData)
    })

    it('無効なオブジェクトで例外を投げる', () => {
      const invalidAsyncData = {
        data: {
          value: { id: 'invalid', name: 'test' },
        },
        error: {
          value: null,
        },
      }

      expect(() => {
        return requireAsyncDataOf(testSchema, invalidAsyncData)
      }).toThrow()
    })

    it('プリミティブ値で例外を投げる', () => {
      expect(() => {
        return requireAsyncDataOf(testSchema, 'string')
      }).toThrow('Expected object with data and error properties')
    })
  })

  describe('型定義', () => {
    it('ResponseStatus型が正しく推論される', () => {
      const okStatus: ResponseStatus = 'ok'
      const ngStatus: ResponseStatus = 'ng'

      expect(okStatus).toBe('ok')
      expect(ngStatus).toBe('ng')
    })

    it('Paging型が正しく推論される', () => {
      const paging: Paging = {
        limit: 10,
        offset: 0,
        total: 100,
      }

      expect(paging.limit).toBe(10)
      expect(paging.offset).toBe(0)
      expect(paging.total).toBe(100)
    })
  })
})
