import exampleRepository from '#base/app/repositories/exampleRepository'
import type { Method } from '#base/app/utils/default-api'

/**
 * @import { Repository } from '#base/app/utils/factory'
 */

/**
 * NOTE:
 * [[Repository]]と区別するためにDefaultRepositoryとしている。
 * 何かのリポジトリのデフォルト型のようなネーミングだが、それは意図していない。
 */
export type DefaultRepository = {
  [key in Method]?: { [key: string]: unknown }
}

export type DefaultRepositories = {
  [key: string]: DefaultRepository
}

export const defaultRepositories = {
  example: exampleRepository,
} as const satisfies DefaultRepositories

export type DefaultRepositoryKey = keyof typeof defaultRepositories

export const defaultRepositoryFactory = {
  get: <K extends keyof typeof defaultRepositories>(name: K) =>
    defaultRepositories[name],
}
