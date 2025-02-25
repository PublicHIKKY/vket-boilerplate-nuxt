import { type MakeRepository, defaultRepositories } from '#base/app/utils/default-factory'
import { Method } from '@/utils/api'

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
