import type { FetchOptions } from 'ofetch'
import { api as base } from '#base/app/utils/api'

const defaultFetchOptions = async (): Promise<FetchOptions> => {
  const authVketSso = useAuthVketSso()
  const token = await authVketSso.getTokenOrRefresh()
  if (token !== null && typeof token !== 'string') raiseError('not string ssoDomain')
  const headers = getRestrictedRecord({
    Accept: 'application/json',
    Authorization: token ? `Bearer ${token}` : undefined,
  })
  return {
    headers,
    onResponseError: (ctx) => {
      if (ctx.response.status === 401) {
        authVketSso.isAuthError.value = true
      }
    },
  }
}

export const api = {
  get: async (path: string, fetchOptions: FetchOptions = {}) => {
    fetchOptions = {
      ...await defaultFetchOptions(),
      ...fetchOptions,
    }
    return base.get(path, fetchOptions)
  },
  post: async (path: string, fetchOptions: FetchOptions = {}) => {
    fetchOptions = {
      ...await defaultFetchOptions(),
      ...fetchOptions,
    }
    return base.post(path, fetchOptions)
  },
  put: async (path: string, fetchOptions: FetchOptions = {}) => {
    fetchOptions = {
      ...await defaultFetchOptions(),
      ...fetchOptions,
    }
    return base.put(path, fetchOptions)
  },
  patch: async (path: string, fetchOptions: FetchOptions = {}) => {
    fetchOptions = {
      ...await defaultFetchOptions(),
      ...fetchOptions,
    }
    return base.patch(path, fetchOptions)
  },
  delete: async (path: string, fetchOptions: FetchOptions = {}) => {
    fetchOptions = {
      ...await defaultFetchOptions(),
      ...fetchOptions,
    }
    return base.delete(path, fetchOptions)
  },
} as const
