import { FetchOptions } from 'ofetch'
import type { Method } from '#base/app/utils/default-api'
import { defaultApi } from '#base/app/utils/default-api'

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

export const vketSsoApi = {
  get: async (path: string, fetchOptions: FetchOptions = {}) => {
    fetchOptions = {
      ...await defaultFetchOptions(),
      ...fetchOptions,
    }
    return defaultApi.get(path, fetchOptions)
  },
  post: async (path: string, fetchOptions: FetchOptions = {}) => {
    fetchOptions = {
      ...await defaultFetchOptions(),
      ...fetchOptions,
    }
    return defaultApi.post(path, fetchOptions)
  },
  put: async (path: string, fetchOptions: FetchOptions = {}) => {
    fetchOptions = {
      ...await defaultFetchOptions(),
      ...fetchOptions,
    }
    return defaultApi.put(path, fetchOptions)
  },
  patch: async (path: string, fetchOptions: FetchOptions = {}) => {
    fetchOptions = {
      ...await defaultFetchOptions(),
      ...fetchOptions,
    }
    return defaultApi.patch(path, fetchOptions)
  },
  delete: async (path: string, fetchOptions: FetchOptions = {}) => {
    fetchOptions = {
      ...await defaultFetchOptions(),
      ...fetchOptions,
    }
    return defaultApi.delete(path, fetchOptions)
  },
} as const

export default (
  method: Method,
  path: string,
  fetchOptions: FetchOptions = {},
) => {
  switch (method) {
    case 'GET':
    case 'get':
      return vketSsoApi.get(path, fetchOptions)
    case 'POST':
    case 'post':
      return vketSsoApi.post(path, fetchOptions)
    case 'PUT':
    case 'put':
      return vketSsoApi.put(path, fetchOptions)
    case 'PATCH':
    case 'patch':
      return vketSsoApi.patch(path, fetchOptions)
    case 'DELETE':
    case 'delete':
      return vketSsoApi.delete(path, fetchOptions)
    default:
      return vketSsoApi.get(path, fetchOptions)
  }
}
