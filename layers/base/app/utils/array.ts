import { raiseError } from '#base/app/utils/error'

/**
 * `start`から`stop`までの範囲の、数値の配列を生成します。
 *
 * ```ts
 * range(1, 5) // [1, 2, 3, 4, 5]
 * range(1, 5, 2) // [1, 3, 5]
 * range(5, 1, -1) // [5, 4, 3, 2, 1]
 * ```
 */
export const range = (start: number, stop: number, step = 1) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step)

/**
 * 配列を逆順にします。
 * `Array.prototype.reverse`は元の配列を書き換えてしまうので、それだと面倒なときに使います。
 *
 * ```ts
 * reversed([1, 2, 3, 4, 5]) // [5, 4, 3, 2, 1]
 * ```
 */
export const reversed = <T>(array: T[]): T[] => [...array].reverse()

/**
 * 配列に値を追加または削除します。
 * 同じ値が入っていた時、両方とも削除します。
 *
 * ```ts
 * toggleList(['a', 'b'], 'a') // ['b']
 * toggleList(['b'], 'a') // ['b', 'a']
 * toggleList(['a', 'b', 'a'], 'a') // ['b']
 * ```
 */
export const toggleList = <T>(list: T[], item: T): T[] =>
  list.includes(item)
    ? list.filter(listItem => listItem !== item)
    : [...list, item]

/**
 * 2つの配列を合体します。
 * 2つの配列の長さが異なる場合、短い方に合わせます。
 *
 * ```typescript
 * zip([1,2,3], [2,3,4,5]) // [[1,2], [2,3], [3,4]]
 * ```
 */
export const zip = <T, U>(xs: T[], ys: U[]): Readonly<[T, U]>[] => {
  const length = xs.length >= ys.length ? ys.length : xs.length
  return range(0, length - 1).map(
    (_, i) =>
      [xs[i] ?? raiseError('Invalid'), ys[i] ?? raiseError('Invalid')] as const,
  )
}

/**
 * JSON.stringify()を利用して、配列が同じ値かを確認します。
 *
 * JSON.stringify()を利用できない値を渡した場合は、例外が出る可能性があります。
 */
export const equal = <T>(xs: T[], ys: T[]): boolean => {
  return JSON.stringify(xs) === JSON.stringify(ys)
}
