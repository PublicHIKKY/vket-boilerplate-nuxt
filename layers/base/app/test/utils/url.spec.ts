import {
  getArrayRouteQuery,
  getBooleanRouteQuery,
  getDateRouteQuery,
  getEnumRouteQuery,
  getNumberRouteQuery,
  getRouteQueries,
  getStringRouteQuery,
  requireNumberRouteQuery,
  requireRouteQuery,
} from '#base/app/utils/url'
import { describe, expect, it, vi } from 'vitest'

type Query = Parameters<typeof getNumberRouteQuery>[0]

const query = (value: Record<string, string | null | (string | null)[] | undefined>): Query => value as Query

describe('url.ts', () => {
  it('数値クエリを単一値・配列・未指定から取得する', () => {
    expect(getNumberRouteQuery(query({}), 'page')).toBeUndefined()
    expect(getNumberRouteQuery(query({ page: '12' }), 'page')).toBe(12)
    expect(getNumberRouteQuery(query({ page: ['3', '4'] }), 'page')).toBe(3)
    expect(getNumberRouteQuery(query({ page: [] }), 'page')).toBeUndefined()
    expect(() => getNumberRouteQuery(query({ page: 'not-a-number' }), 'page')).toThrow(
      'query \'page\' is neither a number nor undefined: not-a-number',
    )
  })

  it('必須文字列クエリを取得し、代替値と型エラーを扱う', () => {
    const getAltValue = vi.fn(() => 'fallback')
    expect(requireRouteQuery(query({ id: 'actual' }), 'id', getAltValue, 'invalid')).toBe('actual')
    expect(getAltValue).not.toHaveBeenCalled()
    expect(requireRouteQuery(query({}), 'id', getAltValue, 'invalid')).toBe('fallback')
    expect(getAltValue).toHaveBeenCalledOnce()
    expect(() => requireRouteQuery(query({ id: ['a', 'b'] }), 'id', getAltValue, 'invalid')).toThrow('invalid')
  })

  it('必須数値クエリを変換し、文字列型と数値変換のエラーを区別する', () => {
    expect(requireNumberRouteQuery(query({ count: '7' }), 'count', () => '1', 'invalid')).toBe(7)
    expect(requireNumberRouteQuery(query({}), 'count', () => '9', 'invalid')).toBe(9)
    expect(() => requireNumberRouteQuery(query({ count: ['7'] }), 'count', () => '1', 'invalid')).toThrow('invalid')
    expect(() => requireNumberRouteQuery(query({ count: 'x' }), 'count', () => '1', 'invalid', 'not number')).toThrow('not number')
  })

  it('文字列・boolean・配列クエリの全入力形を扱う', () => {
    expect(getStringRouteQuery(query({}), 'value')).toBeUndefined()
    expect(getStringRouteQuery(query({ value: 'a' }), 'value')).toBe('a')
    expect(getStringRouteQuery(query({ value: ['a', 'b'] }), 'value')).toBe('a')
    expect(getStringRouteQuery(query({ value: [] }), 'value')).toBeUndefined()
    expect(getStringRouteQuery(query({ value: null }), 'value')).toBeUndefined()

    expect(getBooleanRouteQuery(query({}), 'flag')).toBeUndefined()
    expect(getBooleanRouteQuery(query({ flag: [] }), 'flag')).toBeUndefined()
    expect(getBooleanRouteQuery(query({ flag: null }), 'flag')).toBeUndefined()
    for (const value of ['true', '1', 'yes', 'on', 'TRUE']) {
      expect(getBooleanRouteQuery(query({ flag: value }), 'flag')).toBe(true)
    }
    expect(getBooleanRouteQuery(query({ flag: ['false'] }), 'flag')).toBe(false)

    expect(getArrayRouteQuery(query({}), 'tags')).toEqual([])
    expect(getArrayRouteQuery(query({ tags: ['a', null, 'b'] }), 'tags')).toEqual(['a', 'b'])
    expect(getArrayRouteQuery(query({ tags: 'a' }), 'tags')).toEqual(['a'])
    expect(getArrayRouteQuery(query({ tags: '' }), 'tags')).toEqual([])
    expect(getArrayRouteQuery(query({ tags: null }), 'tags')).toEqual([])
  })

  it('日付クエリを検証する', () => {
    expect(getDateRouteQuery(query({}), 'at')).toBeUndefined()
    expect(getDateRouteQuery(query({ at: [] }), 'at')).toBeUndefined()
    expect(getDateRouteQuery(query({ at: null }), 'at')).toBeUndefined()
    expect(getDateRouteQuery(query({ at: ['2024-01-02', '2025-01-01'] }), 'at')).toEqual(new Date('2024-01-02'))
    expect(() => getDateRouteQuery(query({ at: 'invalid' }), 'at')).toThrow('query \'at\' is not a valid date: invalid')
  })

  it('列挙クエリを検証する', () => {
    const allowed = ['draft', 'published'] as const
    expect(getEnumRouteQuery(query({}), 'state', allowed)).toBeUndefined()
    expect(getEnumRouteQuery(query({ state: [] }), 'state', allowed)).toBeUndefined()
    expect(getEnumRouteQuery(query({ state: null }), 'state', allowed)).toBeUndefined()
    expect(getEnumRouteQuery(query({ state: ['draft'] }), 'state', allowed)).toBe('draft')
    expect(() => getEnumRouteQuery(query({ state: 'archived' }), 'state', allowed)).toThrow(
      'query \'state\' must be one of [draft, published], but got: archived',
    )
  })

  it('schemaに従って複数の型を一度に変換する', () => {
    type Parsed = {
      name: string
      page: number
      enabled: boolean
      tags: string[]
      at: Date
      state: 'draft' | 'published'
      omitted: string
    }
    const result = getRouteQueries<Parsed>(
      query({ name: 'sample', page: '2', enabled: 'yes', tags: ['a', 'b'], at: '2024-01-02', state: 'published' }),
      {
        name: { type: 'string', required: true },
        page: { type: 'number' },
        enabled: { type: 'boolean' },
        tags: { type: 'array' },
        at: { type: 'date' },
        state: { type: 'enum', allowedValues: ['draft', 'published'] },
        omitted: { type: 'string' },
      },
    )

    expect(result).toEqual({
      name: 'sample',
      page: 2,
      enabled: true,
      tags: ['a', 'b'],
      at: new Date('2024-01-02'),
      state: 'published',
    })
  })

  it('任意項目の変換エラーを無視し、必須項目のエラーを再送出する', () => {
    expect(getRouteQueries(query({ page: 'invalid' }), { page: { type: 'number' } })).toEqual({})
    expect(getRouteQueries(query({ state: 'draft' }), { state: { type: 'enum' } })).toEqual({})
    expect(() => getRouteQueries(query({}), { name: { type: 'string', required: true } })).toThrow(
      'required query parameter \'name\' is missing',
    )
    expect(() => getRouteQueries(query({ state: 'draft' }), { state: { type: 'enum', required: true } })).toThrow(
      'enum type requires allowedValues for key: state',
    )
    expect(() => getRouteQueries(query({ value: 'x' }), {
      value: { type: 'unsupported', required: true },
    } as never)).toThrow('unknown query type: unsupported')
  })
})
