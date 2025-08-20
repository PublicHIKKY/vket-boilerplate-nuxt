import type { useFetch } from 'nuxt/dist/app/composables/fetch'
import type { FetchError } from 'ofetch'
import { z, ZodType, ZodTypeDef } from 'zod/v3'

export const statusSchema = z.union([z.literal('ok'), z.literal('ng')])

export const pagingSchema = z.object({
  limit: z.number(),
  offset: z.number(),
  total: z.number(),
})

export type ResponseStatus = z.infer<typeof statusSchema>
export type Paging = z.infer<typeof pagingSchema>

export const makeResponseSchema = <
  T extends Record<string, z.ZodType<unknown>>,
>(
  schemaObject: T,
) => z.object({ status: statusSchema }).extend(schemaObject)

export type AsyncDataResponse<T> = ReturnType<
  typeof useFetch<T, FetchError<unknown> | null>
>

export function isFetchError(x: unknown): x is FetchError<unknown> {
  return (
    typeof x === 'object'
    && !!x
    && 'name' in x
    && (x as { name: string }).name === 'FetchError'
  )
}
export const fetchErrorSchema = z.custom(isFetchError)

export function ensureAsyncDataOf<T>(
  responseSchema: ZodType<T, ZodTypeDef>,
  y: unknown,
): asserts y is AsyncDataResponse<T> {
  // 型ガードでオブジェクトかチェック
  if (typeof y !== 'object' || y === null) {
    throw new Error('Expected object with data and error properties')
  }

  const obj = y as Record<string, unknown>
  if (typeof obj.data !== 'object' || obj.data === null
    || typeof obj.error !== 'object' || obj.error === null) {
    throw new Error('Expected object with data and error properties')
  }

  const data = obj.data as Record<string, unknown>
  const error = obj.error as Record<string, unknown>
  // デバッグの便利のため型のどこが不整合になっているか情報を上げたいのでparse直接使用
  responseSchema.nullable().parse(data.value)
  fetchErrorSchema.nullable().parse(error.value)
}
export function requireAsyncDataOf<T>(
  x: ZodType<T, ZodTypeDef>,
  y: unknown,
): AsyncDataResponse<T> {
  ensureAsyncDataOf(x, y)
  return y
}
