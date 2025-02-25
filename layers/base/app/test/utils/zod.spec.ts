import { fc, test } from '@fast-check/vitest'
import { z } from 'zod'
import { ensureValueOf, getMax, isValueOf, makeRecursiveSchema } from '#base/app/utils/zod'

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
