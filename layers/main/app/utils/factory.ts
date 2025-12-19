import { type MakeRepository, defaultRepositories } from '#base/app/utils/default-factory'
import { Method } from '@/utils/api'
import authRepository from '@/repositories/authRepository'

export type Repository = MakeRepository<Method>
export type Repositories = Record<string, Repository>

export const repositories = {
  ...defaultRepositories,
  auth: authRepository,
} as const satisfies Repositories

export type RepositoryKey = keyof typeof repositories

export const repositoryFactory = {
  get: <K extends keyof typeof repositories>(name: K) => repositories[name],
}
