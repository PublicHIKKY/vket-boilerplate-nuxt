import { fc, test } from '@fast-check/vitest'
import { z } from 'zod'
import { ensureValueOf, getMax, isValueOf } from '#base/app/utils/zod'

describe('isValueOf', () => {
  test('returns true if schema parses successfully', () => {
    const schema = z.object({
      a: z.number(),
    })
    const value = {
      a: 42,
    }
    expect(isValueOf(schema, value)).toEqual(true)
  })

  test('returns false if schema failed to parse', () => {
    const schema = z.object({
      a: z.number().negative(),
    })
    const value = {
      a: 42,
    }
    expect(isValueOf(schema, value)).toEqual(false)
  })
})

describe('ensureValueOf', () => {
  test('throws an error if schema failed to parse', () => {
    const schema = z.object({
      a: z.number().negative(),
    })
    const value = {
      a: 42,
    }
    expect(() => ensureValueOf(schema, value)).toThrow()
  })
})

describe('getMax', () => {
  test.prop([fc.nat()])(
    'takes the num of z.string().max(num) from the _def',
    (n) => {
      expect(getMax(z.string().max(n)._def)).toBe(n)
    },
  )

  test('takes nothing from the zod schema does not have .max(num)', () => {
    expect(getMax(z.string()._def)).toBeUndefined()
  })
})
