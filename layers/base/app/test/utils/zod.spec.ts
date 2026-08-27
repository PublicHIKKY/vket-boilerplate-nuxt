import { fc, test } from '@fast-check/vitest'
import { describe, expect } from 'vitest'
import { z } from 'zod/v3'
import {
  ensureValueOf,
  getMax,
  integral,
  isValueOf,
  makeRecursiveSchema,
  makeSchemaDeepReadOnly,
  makeSchemaReadOnly,
  objectToValueArray,
  requireValueOf,
} from '#base/app/utils/zod'

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
  test('returns normally if schema parses successfully', () => {
    expect(() => ensureValueOf(z.string(), 'valid')).not.toThrow()
  })

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

describe('requireValueOf', () => {
  test('returns parsed values and throws validation errors', () => {
    expect(requireValueOf(z.coerce.number(), '42')).toBe(42)
    expect(() => requireValueOf(z.number(), '42')).toThrow()
  })
})

describe('objectToValueArray', () => {
  test('converts numeric-keyed constants while preserving order', () => {
    expect(objectToValueArray({ 0: 'ja', 1: 'en', 2: 'fr' })).toEqual(['ja', 'en', 'fr'])
  })

  test('rejects objects without index zero', () => {
    expect(() => objectToValueArray({ 1: 'en' })).toThrow('objectToValueArray: obj[0] is undefined.')
  })
})

describe('schema helpers', () => {
  const schema = z.object({ nested: z.object({ value: z.number() }) })

  test('accept readonly/deep-readonly compatible values using the source schema', () => {
    const value = { nested: { value: 1 } }
    expect(makeSchemaReadOnly(schema).safeParse(value).success).toBe(true)
    expect(makeSchemaDeepReadOnly(schema).safeParse(value).success).toBe(true)
    expect(makeSchemaReadOnly(schema).safeParse({ nested: { value: 'x' } }).success).toBe(false)
    expect(makeSchemaDeepReadOnly(schema).safeParse({ nested: null }).success).toBe(false)
  })

  test('integral accepts numbers and strings only', () => {
    expect(integral.safeParse(1).success).toBe(true)
    expect(integral.safeParse('1').success).toBe(true)
    expect(integral.safeParse(false).success).toBe(false)
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

  test('takes a max constraint recursively from a union', () => {
    expect(getMax(z.union([z.number(), z.string().max(8)])._def)).toBe(8)
  })

  test('returns undefined for absent or unrelated definitions and malformed checks', () => {
    expect(getMax(undefined)).toBeUndefined()
    expect(getMax(z.number()._def)).toBeUndefined()
    expect(getMax({ typeName: 'ZodString', checks: [{ kind: 'max' }] } as never)).toBeUndefined()
    expect(getMax({ typeName: 123 } as never)).toBeUndefined()
  })
})

describe('makeRecursiveSchema', () => {
  test('can make a recursive schema and the schema can validate values recursively', () => {
    const treeSchema = makeRecursiveSchema(self =>
      z.union([
        z.object({ type: z.literal('leaf'), value: z.string() }),
        z.object({ type: z.literal('branch'), children: self.array() }),
      ]),
    )

    // treeSchemaは再帰構造のうち **一階層** だけバリデーションできる
    const x: unknown = {
      type: 'branch',
      children: [{ type: 'leaf', value: 'foo' }],
    }
    const tree = treeSchema.parse(x)
    if (tree.type !== 'branch') {
      throw new Error('Expected a branch, but got a leaf.')
    }
    /*
     * treeSchemaは一階層だけしかバリデーションできないので、yはSelf型になる
     * Self型は実質Record<never, unknown>な型。@/utils/zodがselfKeyをexportしていないため
     */
    const y = tree.children[0] ?? raiseError('Fatal error')

    // さらに階層を深堀したい場合は、再パースする必要がある
    const subTree = treeSchema.parse(y)
    if (subTree.type !== 'leaf') {
      throw new Error('Expected a leaf, but got a branch.')
    }
    expect(subTree.value).toBe('foo')
  })
})
