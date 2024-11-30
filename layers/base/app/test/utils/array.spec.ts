import { fc, test } from '@fast-check/vitest'
import { equal, range, reversed, toggleList, zip } from '#base/app/utils/array'

describe('equal', () => {
  test('returns true when lhs and rhs equals', () => {
    expect(equal([1, 2, 3], [1, 2, 3])).toBe(true)
  })

  test('returns falsed when lhs and rhs does not equal', () => {
    expect(equal([1, 2, 3], [2, 3, 4])).toBe(false)
  })
})

describe('range', () => {
  test('numbers array (negative steps)', () => {
    expect(range(20, 10, -1)).toEqual([
      20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10,
    ])
    expect(range(1, 10, 2)).toEqual([1, 3, 5, 7, 9])
  })

  test('numbers array (positive steps)', () => {
    expect(range(1, 12)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    expect(range(10, 20, 1)).toEqual([
      10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ])
  })

  test('negative area', () => {
    expect(range(-10, 0)).toEqual([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0])
    expect(range(-10, -8)).toEqual([-10, -9, -8])
  })

  test('(max, min)', () => {
    expect(range(1, -10)).toEqual([])
  })
})

describe('reversed', () => {
  test('array reversed', () => {
    expect(reversed(range(1, 5))).toEqual([5, 4, 3, 2, 1])
  })

  test('original array is not modified', () => {
    const original = range(1, 5)
    expect(reversed(original)).toEqual([5, 4, 3, 2, 1])
    expect(original).toEqual([1, 2, 3, 4, 5])
  })

  test.prop([fc.array(fc.anything())])('do nothing if apply twice', (xs) => {
    return equal(reversed(reversed(xs)), xs)
  })
})

describe('toggleList', () => {
  test('toggle off', () => {
    const original = range(1, 5)
    expect(toggleList(original, 2)).toEqual([1, 3, 4, 5])
    expect(original).toEqual([1, 2, 3, 4, 5])
  })

  test('toggle off removes all item', () => {
    expect(toggleList([1, 2, 3, 3, 3], 3)).toEqual([1, 2])
  })

  test('toggle on', () => {
    expect(toggleList(range(1, 4), 5)).toEqual([1, 2, 3, 4, 5])
  })
})

describe('zip', () => {
  test('makes the zip array', () => {
    expect(zip([1, 2, 3], [2, 3, 4, 5, 6])).toEqual([
      [1, 2],
      [2, 3],
      [3, 4],
    ])
  })

  test.prop([fc.integer({ min: 0, max: 2 }), fc.integer({ min: 0, max: 2 })])(
    'skips ys\'s larger elements if xs.length < ys.length',
    (x, y) => {
      fc.pre(x <= y)

      const xs = range(0, x)
      const ys = range(0, y)

      return (
        zip(xs, ys).length === xs.length && zip(ys, xs).length === xs.length
      )
    },
  )
})
