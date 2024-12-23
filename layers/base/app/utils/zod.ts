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
