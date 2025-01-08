import exampleRepository from '#base/app/repositories/exampleRepository'
import type { Method } from '#base/app/utils/default-api'

export type Repository = {
  [key in Method]?: { [key: string]: unknown }
}

export type Repositories = {
  [key: string]: Repository
}

export const defaultRepositories = {
  example: exampleRepository,
} as const satisfies Repositories

export type DefaultRepositoryKey = keyof typeof defaultRepositories

export const defaultRepositoryFactory = {
  get: <K extends keyof typeof defaultRepositories>(name: K) =>
    defaultRepositories[name],
}
