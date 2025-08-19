/**
 * @group For Developers
 * @category Type Definitions
 * @module Json
 * @reference https://zod.dev/?id=json-type
 */

import { z } from 'zod'

const literalSchema = z.union([z.string(), z.number(), z.boolean(), z.null()])
type Literal = z.infer<typeof literalSchema>
type JsonType = Literal | { [key: string]: JsonType } | JsonType[]
export const jsonSchema: z.ZodType<JsonType> = z.lazy(() =>
  z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]),
)
export type Json = z.infer<typeof jsonSchema>
