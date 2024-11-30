import { writableClone } from '#base/app/utils/object'

describe('writableClone', () => {
  test('copies usual values', () => {
    const x = { a: 42 } as const
    const y = writableClone(x)
    y.a = 42 // 代入可能になっている
    expect(y).toStrictEqual(x)
  })

  test('breaks type safety if copying unusual values', () => {
    const xs: undefined[] = [undefined]
    const ys: undefined[] = writableClone(xs)
    const y: undefined = ys[0]
    expect(y).toBe(null) // undefined型の変数にnullが入っている

    // その他、nullになるもの。
    expect(writableClone([NaN])).not.toStrictEqual([NaN])
    expect(writableClone([Infinity])).not.toStrictEqual([Infinity])
  })
})
