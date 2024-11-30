import exampleRepository from '#base/app/repositories/exampleRepository'

export type Methods = 'get' | 'post' | 'put' | 'delete' | 'patch'

export type Repository = {
  [key in Methods]?: { [key: string]: unknown }
}

export type Repositories = {
  [key: string]: Repository
}

export const repositories = {
  example: exampleRepository,
} as const satisfies Repositories

export type RepositoryKey = keyof typeof repositories

export const repositoryFactory = {
  get: <K extends keyof typeof repositories>(name: K) => repositories[name],
}
