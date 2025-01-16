import exampleRepository from '#base/app/repositories/exampleRepository'
import type { Method as DefaultMethods } from '#base/app/utils/default-api'

/**
 * The parent type for each method of `'get' | 'post' | 'put' | 'delete'` in each repository
 */
export type ApiAccess = (...args: unknown[]) => Promise<unknown>

/**
 * For use when creating `#main/app/utils/factory.ts`.
 * See [[DefaultRepository]] for usage.
 */
export type MakeRepository<Methods extends string | symbol> = {
  [key in Methods]?: Record<string, ApiAccess>
}

/**
 * NOTE:.
 * Naming of "DefaultRepository" because it is the repository type of default-factory.
 * The name is like "default type of some repository", but it is not intended.
 */
export type DefaultRepository = MakeRepository<DefaultMethods>
export type DefaultRepositories = Record<string, DefaultRepository>

export const defaultRepositories = {
  example: exampleRepository,
} as const satisfies DefaultRepositories

export type DefaultRepositoryKey = keyof typeof defaultRepositories

export const defaultRepositoryFactory = {
  get: <K extends keyof typeof defaultRepositories>(name: K) =>
    defaultRepositories[name],
}
