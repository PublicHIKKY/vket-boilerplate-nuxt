/**
 * Nuxt3 FWにおける API composables。
 *
 * @packageDocumentation
 */

import { useFetch, UseFetchOptions } from 'nuxt/app'
import type { FetchOptions } from 'ofetch'
import { ref } from 'vue'
import { repositoryFactory, RepositoryKey } from '#base/app/utils/factory'

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
