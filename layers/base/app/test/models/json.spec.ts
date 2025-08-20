import { describe, expect, it } from 'vitest'
import { jsonSchema, type Json } from '#base/app/models/json'

describe('json', () => {
  describe('jsonSchema - プリミティブ値', () => {
    it('文字列を受け入れる', () => {
      const result = jsonSchema.safeParse('test string')
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toBe('test string')
      }
    })

    it('空文字列を受け入れる', () => {
      const result = jsonSchema.safeParse('')
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toBe('')
      }
    })

    it('数値を受け入れる', () => {
      const result = jsonSchema.safeParse(42)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toBe(42)
      }
    })

    it('ゼロを受け入れる', () => {
      const result = jsonSchema.safeParse(0)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toBe(0)
      }
    })

    it('負の数値を受け入れる', () => {
      const result = jsonSchema.safeParse(-123)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toBe(-123)
      }
    })

    it('小数点を受け入れる', () => {
      const result = jsonSchema.safeParse(3.14)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toBe(3.14)
      }
    })

    it('真偽値trueを受け入れる', () => {
      const result = jsonSchema.safeParse(true)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toBe(true)
      }
    })

    it('真偽値falseを受け入れる', () => {
      const result = jsonSchema.safeParse(false)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toBe(false)
      }
    })

    it('nullを受け入れる', () => {
      const result = jsonSchema.safeParse(null)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toBe(null)
      }
    })
  })

  describe('jsonSchema - オブジェクト', () => {
    it('空のオブジェクトを受け入れる', () => {
      const result = jsonSchema.safeParse({})
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toEqual({})
      }
    })

    it('シンプルなオブジェクトを受け入れる', () => {
      const obj = { name: 'test', age: 25 }
      const result = jsonSchema.safeParse(obj)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toEqual(obj)
      }
    })

    it('すべてのプリミティブ型を含むオブジェクトを受け入れる', () => {
      const obj = {
        str: 'string',
        num: 42,
        bool: true,
        nil: null,
      }
      const result = jsonSchema.safeParse(obj)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toEqual(obj)
      }
    })

    it('ネストしたオブジェクトを受け入れる', () => {
      const obj = {
        user: {
          profile: {
            name: 'John',
            age: 30,
          },
          settings: {
            theme: 'dark',
            notifications: true,
          },
        },
      }
      const result = jsonSchema.safeParse(obj)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toEqual(obj)
      }
    })
  })

  describe('jsonSchema - 配列', () => {
    it('空の配列を受け入れる', () => {
      const result = jsonSchema.safeParse([])
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toEqual([])
      }
    })

    it('プリミティブ値の配列を受け入れる', () => {
      const arr = [1, 2, 3]
      const result = jsonSchema.safeParse(arr)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toEqual(arr)
      }
    })

    it('混合型の配列を受け入れる', () => {
      const arr = ['string', 42, true, null]
      const result = jsonSchema.safeParse(arr)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toEqual(arr)
      }
    })

    it('オブジェクトを含む配列を受け入れる', () => {
      const arr = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
      ]
      const result = jsonSchema.safeParse(arr)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toEqual(arr)
      }
    })

    it('ネストした配列を受け入れる', () => {
      const arr = [
        [1, 2, 3],
        ['a', 'b', 'c'],
        [true, false, null],
      ]
      const result = jsonSchema.safeParse(arr)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toEqual(arr)
      }
    })
  })

  describe('jsonSchema - 複合構造', () => {
    it('配列とオブジェクトの複合構造を受け入れる', () => {
      const data = {
        users: [
          {
            id: 1,
            name: 'Alice',
            tags: ['admin', 'active'],
            metadata: {
              created: '2023-01-01',
              lastLogin: null,
            },
          },
          {
            id: 2,
            name: 'Bob',
            tags: ['user'],
            metadata: {
              created: '2023-01-02',
              lastLogin: '2023-12-01',
            },
          },
        ],
        pagination: {
          total: 2,
          page: 1,
          hasNext: false,
        },
      }
      const result = jsonSchema.safeParse(data)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toEqual(data)
      }
    })

    it('深くネストした構造を受け入れる', () => {
      const data = {
        level1: {
          level2: {
            level3: {
              level4: {
                value: 'deep',
              },
            },
          },
        },
      }
      const result = jsonSchema.safeParse(data)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toEqual(data)
      }
    })
  })

  describe('jsonSchema - 無効な値', () => {
    it('undefinedを拒否する', () => {
      const result = jsonSchema.safeParse(undefined)
      expect(result.success).toBe(false)
    })

    it('Symbolを拒否する', () => {
      const result = jsonSchema.safeParse(Symbol('test'))
      expect(result.success).toBe(false)
    })

    it('関数を拒否する', () => {
      const result = jsonSchema.safeParse(() => {})
      expect(result.success).toBe(false)
    })

    it('Dateオブジェクトを拒否する', () => {
      const result = jsonSchema.safeParse(new Date())
      expect(result.success).toBe(false)
    })

    it('undefinedを含むオブジェクトを拒否する', () => {
      const result = jsonSchema.safeParse({ key: undefined })
      expect(result.success).toBe(false)
    })

    it('関数を含むオブジェクトを拒否する', () => {
      const result = jsonSchema.safeParse({ func: () => {} })
      expect(result.success).toBe(false)
    })

    it('undefinedを含む配列を拒否する', () => {
      const result = jsonSchema.safeParse([1, undefined, 3])
      expect(result.success).toBe(false)
    })
  })

  describe('Json型', () => {
    it('Json型の変数に有効なJSON値を代入できる', () => {
      // TypeScriptの型チェック用のテスト
      const validJson1: Json = 'string'
      const validJson2: Json = 42
      const validJson3: Json = true
      const validJson4: Json = null
      const validJson5: Json = { key: 'value' }
      const validJson6: Json = [1, 2, 3]
      const validJson7: Json = {
        nested: {
          array: [
            { id: 1, active: true },
            { id: 2, active: false },
          ],
        },
      }

      // 実際の値をバリデーションにかけてテスト
      expect(jsonSchema.safeParse(validJson1).success).toBe(true)
      expect(jsonSchema.safeParse(validJson2).success).toBe(true)
      expect(jsonSchema.safeParse(validJson3).success).toBe(true)
      expect(jsonSchema.safeParse(validJson4).success).toBe(true)
      expect(jsonSchema.safeParse(validJson5).success).toBe(true)
      expect(jsonSchema.safeParse(validJson6).success).toBe(true)
      expect(jsonSchema.safeParse(validJson7).success).toBe(true)
    })
  })

  describe('実際のJSONデータでのテスト', () => {
    it('API レスポンス形式のデータを受け入れる', () => {
      const apiResponse = {
        status: 'success',
        data: {
          id: 12345,
          name: 'Test User',
          email: 'test@example.com',
          isActive: true,
          profile: {
            age: 25,
            location: 'Tokyo',
            preferences: ['music', 'sports', 'reading'],
          },
          lastLogin: null,
        },
        metadata: {
          timestamp: '2023-12-01T10:00:00Z',
          version: '1.0.0',
        },
      }

      const result = jsonSchema.safeParse(apiResponse)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toEqual(apiResponse)
      }
    })

    it('設定ファイル形式のデータを受け入れる', () => {
      const config = {
        app: {
          name: 'MyApp',
          version: '2.1.0',
          debug: false,
        },
        database: {
          host: 'localhost',
          port: 5432,
          ssl: true,
          credentials: null,
        },
        features: ['auth', 'analytics', 'notifications'],
        thresholds: {
          memory: 0.8,
          cpu: 0.9,
          disk: 0.95,
        },
      }

      const result = jsonSchema.safeParse(config)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data).toEqual(config)
      }
    })
  })
})
