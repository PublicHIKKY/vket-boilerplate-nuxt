/**
 * apiの抽象化。 ofetch 準拠
 *
 * @packageDocumentation
 */

import camelcaseKeys from 'camelcase-keys'
import type { FetchOptions } from 'ofetch'
import { $fetch as _oFetchApi } from 'ofetch' // not nuxt
import snakecaseKeys from 'snakecase-keys'
import { raiseError } from '#base/app/utils/error'
import { requireRuntimeConfig } from '#base/app/plugins/runtimeConfig'
import { pluginFetchApi } from '#base/app/plugins/fetch' // nuxt

type Method =
  | 'GET'
  | 'HEAD'
  | 'PATCH'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'get'
  | 'head'
  | 'patch'
  | 'post'
  | 'put'
  | 'delete'
  | 'connect'
  | 'options'
  | 'trace'

/**
 * @definication 使用するAPIの定義
 */
const defaultFetchOptions: FetchOptions = {
  retry: 2,
  // headers: {},
  onRequest: (ctx) => {
    if (
      !ctx.options.body
      || typeof ctx.options.body !== 'object'
      // FormDataをsnakecaseKeysに突っ込むと空Objectになるので、append時、snakecaseにしておく
      || ctx.options.body instanceof FormData
    )
      // [todo] ここのasを直すとsnakecaseKeysの型が合わなくなるので、要検討
      return
    ctx.options.body = snakecaseKeys(
      ctx.options.body as Record<string, unknown>,
      { deep: true },
    )
  },
  // onRequestError: async (ctx) => {},
  onResponse: async (ctx) => {
    if (!ctx.response._data || typeof ctx.response._data !== 'object') return
    ctx.response._data = await camelcaseKeys(ctx.response._data, { deep: true })
  },
  // onResponseError: async (ctx) => {},
}

const apiFetchFunction = (
  method: Method,
  _path: string,
  _options?: Omit<FetchOptions, 'method'>,
) => {
  // デフォルトのAPI(ofetch)
  const _DEFAULT_FETCH_API = pluginFetchApi().fetchApi || _oFetchApi
  // NOTE: useFetchはラップしないことにし$fetchを使うようにする。方針が変わった場合は修正する
  const FETCH_API = _DEFAULT_FETCH_API
  return (path = _path, opts = _options) => {
    const options = { ...opts, method }
    return FETCH_API(path, options)
  }
}

// HACK: 即時関数で返したい...
export const api = {
  get: (path: string, fetchOptions: FetchOptions = {}) => {
    const methodOptions: FetchOptions = {
      baseURL:
        fetchOptions.baseURL
        ?? requireRuntimeConfig().public?.baseUrl
        ?? raiseError('Missing config baseUrl'),
    }
    const options = {
      ...defaultFetchOptions,
      ...methodOptions,
      ...fetchOptions,
    }
    return apiFetchFunction('GET', path, options)()
  },
  post: (path: string, fetchOptions: FetchOptions = {}) => {
    const methodOptions: FetchOptions = {
      baseURL:
        fetchOptions.baseURL
        ?? requireRuntimeConfig().public?.baseUrl
        ?? raiseError('Missing config baseUrl'),
    }
    const options = {
      ...defaultFetchOptions,
      ...methodOptions,
      ...fetchOptions,
    }
    return apiFetchFunction('POST', path, options)()
  },
  put: (path: string, fetchOptions: FetchOptions = {}) => {
    const methodOptions: FetchOptions = {
      baseURL:
        fetchOptions.baseURL
        ?? requireRuntimeConfig().public?.baseUrl
        ?? raiseError('Missing config baseUrl'),
    }
    const options = {
      ...defaultFetchOptions,
      ...methodOptions,
      ...fetchOptions,
    }
    return apiFetchFunction('PUT', path, options)()
  },
  patch: (path: string, fetchOptions: FetchOptions = {}) => {
    const methodOptions: FetchOptions = {
      baseURL:
        fetchOptions.baseURL
        ?? requireRuntimeConfig().public?.baseUrl
        ?? raiseError('Missing config baseUrl'),
    }
    const options = {
      ...defaultFetchOptions,
      ...methodOptions,
      ...fetchOptions,
    }
    return apiFetchFunction('PATCH', path, options)()
  },
  delete: (path: string, fetchOptions: FetchOptions = {}) => {
    const methodOptions: FetchOptions = {
      baseURL:
        fetchOptions.baseURL
        ?? requireRuntimeConfig().public?.baseUrl
        ?? raiseError('Missing config baseUrl'),
    }
    const options = {
      ...defaultFetchOptions,
      ...methodOptions,
      ...fetchOptions,
    }
    return apiFetchFunction('DELETE', path, options)()
  },
} as const
