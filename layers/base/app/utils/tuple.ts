/**
 * readonlyなタプル型で、要素がundefinedやnullを含む場合に、indexOfなどのメソッドを使えるようにする関数。
 * コンフィグなどの静的なデータを扱う際に使う。
 * ```ts
 * const xs: readonly ['x', 'y', 'z'] = /* ... * /
 * const x: string | null = /* ... * /
 * const index = tupleWideningDo(xs, x, (xs, x) => xs.indexOf(x))
 * ```
 */
export const tupleWideningDo = <T>(
  xs: readonly (string | undefined | null)[],
  x: string | undefined | null,
  f: (
    xs: readonly (string | undefined | null)[],
    x: string | undefined | null
  ) => T,
) => f(xs, x)
