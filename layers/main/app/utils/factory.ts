import { defaultRepositories } from '#base/app/utils/default-factory'

export const repositories = {
  ...defaultRepositories,
} as const satisfies Repositories

export type RepositoryKey = keyof typeof repositories

export const repositoryFactory = {
  get: <K extends keyof typeof repositories>(name: K) => repositories[name],
}
