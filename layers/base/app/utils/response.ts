import type { useFetch } from 'nuxt/dist/app/composables/fetch'
import type { FetchError } from 'ofetch'
import { z, ZodType, ZodTypeDef } from 'zod'

export const statusSchema = z.union([z.literal('ok'), z.literal('ng')])

export const pagingSchema = z.object({
  limit: z.number(),
  offset: z.number(),
  total: z.number(),
})

export type ResponseStatus = z.infer<typeof statusSchema>

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  y: any,
): asserts y is AsyncDataResponse<T> {
  // デバッグの便利のため型のどこが不整合になっているか情報を上げたいのでparse直接使用
  responseSchema.nullable().parse(y.data.value)
  fetchErrorSchema.nullable().parse(y.error.value)
}
export function requireAsyncDataOf<T>(
  x: ZodType<T, ZodTypeDef>,
  y: unknown,
): AsyncDataResponse<T> {
  ensureAsyncDataOf(x, y)
  return y
}
