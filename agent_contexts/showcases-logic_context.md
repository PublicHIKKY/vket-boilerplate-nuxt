This file is a merged representation of a subset of the codebase, containing specifically included files, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of a subset of the repository's contents that is considered the most important context.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Only files matching these patterns are included: layers/showcases/app/utils/**/*, layers/showcases/app/composables/**/*, layers/showcases/app/models/**/*, layers/showcases/app/repositories/**/*
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
layers/
  showcases/
    app/
      composables/
        useApi.ts
      models/
        json.ts
        todo.ts
      utils/
        api.ts
        factory.ts
        i18n.ts
```

# Files

## File: layers/showcases/app/composables/useApi.ts
````typescript
/**
 * Nuxt3 FWにおける API composables。
 *
 * @packageDocumentation
 */

import type { UseFetchOptions } from 'nuxt/app'
import { useFetch } from 'nuxt/app'
import type { FetchOptions } from 'ofetch'
import { ref } from 'vue'
import type { RepositoryKey } from '#showcases/app/utils/factory'
import { repositoryFactory } from '#showcases/app/utils/factory'

export const fetcher = (
  path: string,
  options: UseFetchOptions<FetchOptions>,
) => {
  return useFetch(path, options)
}

const _getRepo = <K extends RepositoryKey>(endpoint: K) => {
  return repositoryFactory.get(endpoint)
}

export default function useApi<K extends RepositoryKey>(endpoint: K) {
  const repository = ref(_getRepo(endpoint))
  return {
    repository,
  }
}
````

## File: layers/showcases/app/models/json.ts
````typescript
/**
 * @group For Developers
 * @category Type Definitions
 * @module Json
 * @reference https://zod.dev/?id=json-type
 */

import { z } from 'zod/v3'

const literalSchema = z.union([z.string(), z.number(), z.boolean(), z.null()])
type Literal = z.infer<typeof literalSchema>
type JsonType = Literal | { [key: string]: JsonType } | JsonType[]
export const jsonSchema: z.ZodType<JsonType> = z.lazy(() =>
  z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]),
)
export type Json = z.infer<typeof jsonSchema>
````

## File: layers/showcases/app/models/todo.ts
````typescript
import { z } from 'zod/v3'
import { integral } from '#base/app/utils/zod'

export const todoSchema = z.object({
  userId: integral, // NOTE: バックエンドの仕様が不安定な場合は、integralで型を広く持っておこう
  id: integral,
  title: z.string(),
  completed: z.boolean(),
})

export type Todo = z.infer<typeof todoSchema>
````

## File: layers/showcases/app/utils/api.ts
````typescript
import type { FetchOptions } from 'ofetch'
import type { Method } from '#base/app/utils/default-api'
import { defaultApi } from '#base/app/utils/default-api'

export type { Method }

export default (
  method: Method,
  path: string,
  fetchOptions: FetchOptions = {},
) => {
  switch (method) {
    case 'GET':
    case 'get':
      return defaultApi.get(path, fetchOptions)
    case 'POST':
    case 'post':
      return defaultApi.post(path, fetchOptions)
    case 'PUT':
    case 'put':
      return defaultApi.put(path, fetchOptions)
    case 'PATCH':
    case 'patch':
      return defaultApi.patch(path, fetchOptions)
    case 'DELETE':
    case 'delete':
      return defaultApi.delete(path, fetchOptions)
    default:
      return defaultApi.get(path, fetchOptions)
  }
}
````

## File: layers/showcases/app/utils/factory.ts
````typescript
import { type MakeRepository, defaultRepositories } from '#base/app/utils/default-factory'
import type { Method } from '#showcases/app/utils/api'

export type Repository = MakeRepository<Method>
export type Repositories = Record<string, Repository>

export const repositories = {
  ...defaultRepositories,
  // Add non-default repositories here
} as const satisfies Repositories

export type RepositoryKey = keyof typeof repositories

export const repositoryFactory = {
  get: <K extends keyof typeof repositories>(name: K) => repositories[name],
}
````

## File: layers/showcases/app/utils/i18n.ts
````typescript
import type { Composer, UseI18nOptions, VueMessageType } from 'vue-i18n'

/**
 * 引数未指定にすると、普通に`const i18n = useI18n()`とすると入ってくる型になる。
 * 型引数の使い方については、そのままuseI18nの型引数の指定方法を参照のこと。
 */
export type UseI18nReturnType<Options extends UseI18nOptions = UseI18nOptions>
  = Composer<
    NonNullable<Options['messages']>,
    NonNullable<Options['datetimeFormats']>,
    NonNullable<Options['numberFormats']>,
    Options['locale'] extends unknown ? string : Options['locale']
  >

/**
 * @example
 * ```ts
 * import { useI18n } from 'vue-i18n'
 * const i18n = useI18n() // messagesは `{ [locale]: { list: ['a', 'b', 'c'] } }` とする
 * const list = getI18nArray(i18n, 'list') // ['a', 'b', 'c']
 * ```
 */
export const getI18nArray = (i18n: UseI18nReturnType, key: string): string[] =>
  Object.entries<VueMessageType>(i18n.tm(key)).map(([, term]) => i18n.rt(term))
````
