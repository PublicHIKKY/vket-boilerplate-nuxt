/**
 * Nuxt3 FWにおける API composables。
 *
 * @packageDocumentation
 */

import { useFetch, UseFetchOptions } from 'nuxt/app'
import type { FetchOptions } from 'ofetch'
import { ref } from 'vue'
import {
  defaultRepositoryFactory,
  DefaultRepositoryKey,
} from '#base/app/utils/default-factory'

export const defaultFetcher = (
  path: string,
  options: UseFetchOptions<FetchOptions>,
) => {
  return useFetch(path, options)
}

const _getRepo = <K extends DefaultRepositoryKey>(endpoint: K) => {
  return defaultRepositoryFactory.get(endpoint)
}

export default function useDefaultApi<K extends DefaultRepositoryKey>(
  endpoint: K,
) {
  const repository = ref(_getRepo(endpoint))
  return {
    repository,
  }
}
