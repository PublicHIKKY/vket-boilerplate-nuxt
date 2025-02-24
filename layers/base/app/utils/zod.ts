import { DeepReadonly } from 'vue'
import {
  z,
  ZodFirstPartyTypeKind,
  ZodStringDef,
  ZodType,
  ZodTypeDef,
  ZodUnionDef,
} from 'zod'

export function isValueOf<T>(x: ZodType<T, ZodTypeDef>, y: unknown): y is T {
  return x.safeParse(y).success
}

export function ensureValueOf<T>(
  x: ZodType<T, ZodTypeDef>,
  y: unknown,
): asserts y is T {
  x.parse(y)
}

export function requireValueOf<T>(x: ZodType<T, ZodTypeDef>, y: unknown): T {
  return x.parse(y)
}

// const language = { 0: 'ja', 1: 'en'} as const みたいなオブジェクトのValueのunion型をzodでつかえるようにするメソッド
export function objectToValueArray<T>(obj: { [key: number]: T }): [T, ...T[]] {
  const first = obj[0]
  if (first === undefined) {
    throw new Error('objectToValueArray: obj[0] is undefined.')
  }

  //  z.enumは空でない配列を期待するので、それを回避するために
  return [
    first,
    ...Object.values(obj)
      .slice(1)
      .map(v => v),
  ]
}

/**
 * 雑多に整数値を表す。
 */
export const integral = z.number().or(z.string())

/** z.infer した結果に readonly を付けるためのヘルパー。渡した objectSchema 以上の検証はしない */
export const makeSchemaReadOnly = <T>(objectSchema: ZodType<T, ZodTypeDef>) =>
  z.custom<Readonly<T>>(x => objectSchema.safeParse(x).success)

/** z.infer した結果に再帰的に readonly を付けるためのヘルパー。渡した objectSchema 以上の検証はしない */
export const makeSchemaDeepReadOnly = <T>(
  objectSchema: ZodType<T, ZodTypeDef>,
) => z.custom<DeepReadonly<T>>(x => objectSchema.safeParse(x).success)

/**
 * maxバリデーションの数値を取得
 *
 * ```typescript
 * getMax(z.string().max(30)._def) // 30
 *
 * // .max()の指定がないスキーマ
 * getMax(z.string()._def) // undefined
 * ```
 */
export const getMax = (def: ZodTypeDef | undefined): number | undefined => {
  if (!def) return undefined

  const zodTypeDefSchema = z.object({
    errorMap: z.unknown().optional(),
    description: z.string().optional(),
    typeName: z.string(),
  })
  const zodStringDefSchema = z.custom<ZodStringDef>((x: unknown) => {
    const result = zodTypeDefSchema.safeParse(x)
    if (!result.success) return false
    return result.data.typeName === String(ZodFirstPartyTypeKind.ZodString)
  })
  const zodUnionDefSchema = z.custom<ZodUnionDef>((x: unknown) => {
    const result = zodTypeDefSchema.safeParse(x)
    if (!result.success) return false
    return result.data.typeName === String(ZodFirstPartyTypeKind.ZodUnion)
  })
  const tryGetValue = (x: object | undefined): number | undefined => {
    const result = z.object({ value: z.number() }).safeParse(x)
    return result.success ? result.data.value : undefined
  }

  const resultUnion = zodUnionDefSchema.safeParse(def)
  if (resultUnion.success)
    return resultUnion.data.options
      .map(({ _def }) => getMax(_def))
      .find((n: number | undefined) => n)

  const resultString = zodStringDefSchema.safeParse(def)
  if (resultString.success)
    return tryGetValue(
      resultString.data.checks.find(({ kind }) => kind === 'max'),
    )

  return undefined
}

/**
 * @see {@link Self}
 * 意図的にexportしていない。
 * Self型に具体的にアクセスされたくないため。
 */
const selfKey = Symbol()

/**
 * 疑似的に自己参照を表現するための型。
 * （これ自体は自己参照ではない。示しているだけ。）
 */
export type Self = { [selfKey]: string }

/**
 * Tの中のSelfをTT[0]で置き換える。
 * ```ts
 * type T = ReplaceSelf<{ a: { b: Self } }, [number]> // { a: { b: number } }
 * ```
 */
/*
 * TTが直接型を受け取るのではなく、1次元タプルとして受け取るのは、TypeScriptの再帰型を許すためです。
 * ```ts
 * type F<_> = number
 * type X = F<X> // これはTypeScriptではできない
 * type X = F<[X]> // これはTypeScriptではできる
 * ```
 */
type ReplaceSelf<T, TT extends [unknown]> = T extends Self
  ? TT[0]
  : T extends Record<string, unknown>
    ? { [K in keyof T]: ReplaceSelf<T[K], TT> }
    : T

/**
 * 再帰的なスキーマを作成する。
 * https://zenn.dev/odiak/articles/0b963664a4f8cd
 *
 * @example
 * ```ts
 * const treeSchema = makeRecursiveSchema((self) =>
 *   z.union([
 *     z.object({ type: z.literal('leaf'), value: z.string() }),
 *     z.object({ type: z.literal('branch'), children: self.array() })
 *   ])
 * )
 * ```
 *
 * さらなる使い方はテストを見てください。
 */
export function makeRecursiveSchema<T>(
  builder: (self: ZodType<Self>) => ZodType<T>,
) {
  /*
   * type Item = {
   *   name: string
   *   addtionalItems: Self[]
   * }
   * みたいなやつを
   * type Item = {
   *   name: string
   *   addtionalItems: Item[]
   * }
   * みたいなやつに置き換えている。
   * つまり疑似的な再帰型（T）を、実際の再帰型（R）に変換している。
   */
  type R = ReplaceSelf<T, [R]>

  // 疑似的な再帰型スキーマビルダー（builder）を、実際の再帰型スキーマビルダー（builder_）に変換している。
  const builder_ = builder as (self: ZodType<R>) => ZodType<T>

  // 再帰をぶん回して
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rec = (): ZodType<R> => builder_(z.lazy(rec)) as any
  return rec()
}
