import { z } from 'zod'

/**
 * @property name - The name of the API endpoint.
 * @property path - The path to the OpenAPI specification file.
 * @property output - The output file path for the generated code.
 */
export const endpointSchema = z.object({
  name: z.string(),
  path: z.string(),
  output: z.string(),
})
export type Endpoint = z.infer<typeof endpointSchema>

/**
 * @property endpoints - The list of API endpoints.
 * @property prettierConfig - The path to the Prettier configuration file.
 * @property template - The path to the template file.
 */
export const configSchema = z.object({
  endpoints: endpointSchema.array(),
  prettierConfig: z.string(),
  template: z.string(),
})
export type Config = z.infer<typeof configSchema>
