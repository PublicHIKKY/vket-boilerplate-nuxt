import { WritableDeep } from 'type-fest'

/**
 * 不変的もしくは可変的オブジェクトを、可変的なオブジェクトにクローンします。
 * JSON.stringify()を使うため、JSON.stringify()がサポートしていないオブジェクトのクローンはできません。
 *
 * ```typescript
 * writableClone(x) // JSON.parse(JSON.stringify(x))
 * ```
 *
 * `(T | undefined)[]`型について、**型安全ではありません**。
 * `(T | undefined)[]`を含む値を**渡さないでください**。
 * NaN・Infinityについても同様です。
 *
 * ```typescript
 * const xs: (number | undefined)[] = [undefined]
 * const ys: (number | undefined)[] = writableClone(xs)
 * const y: number | undefined = ys[0] // null
 * ```
 */
export const writableClone = <T>(object: T): WritableDeep<T> => {
  return JSON.parse(JSON.stringify(object)) as WritableDeep<T>
}
