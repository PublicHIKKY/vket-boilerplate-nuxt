export type Endpoint = {
  /**
   * The name of the API endpoint.
   */
  name: string
  /**
   * The path to the OpenAPI specification file.
   */
  path: string
  /**
   * The output file path for the generated code.
   */
  output: string
}

export type Config = {
  /**
   * The list of API endpoints.
   */
  endpoints: Endpoint[]
  /**
   * The path to the Prettier configuration file.
   */
  prettierConfig: string
  /**
   * The path to the template file.
   */
  template: string
}
