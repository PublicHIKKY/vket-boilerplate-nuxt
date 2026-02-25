/**
 * Nuxt3 FWにおける API composables。
 *
 * @packageDocumentation
 */

import type { UseFetchOptions } from 'nuxt/app'
import { useFetch } from 'nuxt/app'
import type { FetchOptions } from 'ofetch'
import { ref } from 'vue'
import type { RepositoryKey } from '#derived-main/app/utils/factory'
import { repositoryFactory } from '#derived-main/app/utils/factory'

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
