import { z } from 'zod'
import { todoSchema } from '#base/app/models/todo'
import { requireRuntimeConfig } from '#base/app/plugins/runtimeConfig'
import defaultApi from '#base/app/utils/default-api'
import { raiseError } from '#base/app/utils/error'
import { requireValueOf } from '#base/app/utils/zod'

const statusSchema = z.literal('ok').or(z.literal('ng'))

export const getExampleResponseSchema = z.object({
  status: statusSchema,
  data: z.object({
    todos: z.array(todoSchema),
  }),
})
export type GetExampleResponse = z.infer<typeof getExampleResponseSchema>

export default {
  get: {
    async getExample() {
      const prefix
        = requireRuntimeConfig().public?.apiPrefix ?? raiseError('getExample()')
      const response = await defaultApi('get', `${prefix}/example`)
      return requireValueOf(getExampleResponseSchema, response)
    },
  } as const,
}
