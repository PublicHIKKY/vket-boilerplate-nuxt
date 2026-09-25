import { describe, it, expect, vi } from 'vitest'
import type { NitroFetchRequest } from 'nitropack'
import api, { defaultApi } from '#base/app/utils/default-api'
import { requireRuntimeConfig } from '#base/app/plugins/runtimeConfig'
import { pluginFetchApi } from '#base/app/plugins/fetch'

// NOTE: src/utils/default-api.tsのテストとして当該ファイルがimportしているファイルからの変数「requireRuntimeConfig」をモックする。
vi.mock('#base/app/plugins/runtimeConfig', () => {
  return {
    default: vi.fn(() => ({})),
    requireRuntimeConfig: vi.fn(() => {
      // NOTE: default-api.tsのテストとしてrequireRuntimeConfigが{public.baseUrl}としてダミーURLを返すだけの処理を行うようにモックする
      return {
        public: {
          baseUrl: '/test-api',
        },
      }
    }),
  }
})

// NOTE: 本テストにおいて実際にAPI叩くわけではなく、useFetchをすげ替えたいのでダミーとなるmock作成
vi.mock('#base/app/plugins/fetch', () => {
  return {
    default: vi.fn(() => ({})),
    pluginFetchApi: vi.fn((path: string, options: NitroFetchRequest) => {
      return { path, options }
    }),
  }
})

// NOTE: 本テストにおいて実際にAPI叩くわけではなく、useFetchをすげ替えたいのでダミーとなるmock作成
vi.mock('ofetch', () => {
  return {
    $fetch: vi.fn((path: string, options: NitroFetchRequest) => {
      return { path, options }
    }),
  }
})

describe('api', () => {
  // NOTE: default-api.getの返却値のテストとして、引数のpathやfetchOptionを入力して、返却値として期待するexpectObjと同等かテストする。その際、onRequestとonResponseは複雑化するので、空オブジェクトで省略としてtoMatchObjectで合格するか検査する。
  it('get', () => {
    const expectObj = {
      options: {
        baseURL: '/test-api',
        method: 'GET',
        onRequest: {},
        onResponse: {},
        retry: 2,
      },
      path: '/example',
    }
    const path = '/example'
    const fetchOptions = {}
    expect(api('get', path, fetchOptions)).toMatchObject(expectObj)
  })
  it('post', () => {
    // NOET: 以下getと同様にテストする。methodはgetではなく、相送信methodに準じた値に変化するので注意
    const expectObj = {
      options: {
        baseURL: '/test-api',
        method: 'POST',
        onRequest: {},
        onResponse: {},
        retry: 2,
      },
      path: '/example',
    }
    const path = '/example'
    const fetchOptions = {}
    expect(api('post', path, fetchOptions)).toMatchObject(expectObj)
  })
  it('put', () => {
    const expectObj = {
      options: {
        baseURL: '/test-api',
        method: 'PUT',
        onRequest: {},
        onResponse: {},
        retry: 2,
      },
      path: '/example',
    }
    const path = '/example'
    const fetchOptions = {}
    expect(api('put', path, fetchOptions)).toMatchObject(expectObj)
  })
  it('patch', () => {
    const expectObj = {
      options: {
        baseURL: '/test-api',
        method: 'PATCH',
        onRequest: {},
        onResponse: {},
        retry: 2,
      },
      path: '/example',
    }
    const path = '/example'
    const fetchOptions = {}
    expect(api('patch', path, fetchOptions)).toMatchObject(expectObj)
  })
  it('delete', () => {
    const expectObj = {
      options: {
        baseURL: '/test-api',
        method: 'DELETE',
        onRequest: {},
        onResponse: {},
        retry: 2,
      },
      path: '/example',
    }
    const path = '/example'
    const fetchOptions = {}
    expect(api('delete', path, fetchOptions)).toMatchObject(expectObj)
  })

  it.each([
    ['GET', 'GET'],
    ['POST', 'POST'],
    ['PUT', 'PUT'],
    ['PATCH', 'PATCH'],
    ['DELETE', 'DELETE'],
  ] as const)('dispatches uppercase %s', (method, expected) => {
    expect(api(method, '/uppercase')).toMatchObject({
      path: '/uppercase',
      options: { method: expected },
    })
  })

  it('falls back to GET for methods without a dedicated helper', () => {
    expect(api('HEAD', '/fallback')).toMatchObject({
      path: '/fallback',
      options: { method: 'GET' },
    })
  })

  it.each([
    ['get', defaultApi.get],
    ['post', defaultApi.post],
    ['put', defaultApi.put],
    ['patch', defaultApi.patch],
    ['delete', defaultApi.delete],
  ] as const)('%s prefers an explicit baseURL and rejects a missing configured baseURL', (_name, request) => {
    expect(request('/explicit', { baseURL: '/explicit-api' })).toMatchObject({
      options: { baseURL: '/explicit-api' },
    })

    vi.mocked(requireRuntimeConfig).mockReturnValueOnce({ public: {} } as ReturnType<typeof requireRuntimeConfig>)
    expect(() => request('/missing')).toThrow('Missing config baseUrl')
  })

  it('uses a plugin fetch implementation when available', () => {
    const fetchApi = vi.fn((path: string, options: unknown) => ({ path, options, source: 'plugin' }))
    vi.mocked(pluginFetchApi).mockReturnValueOnce({ fetchApi } as never)
    expect(defaultApi.get('/plugin')).toMatchObject({ source: 'plugin', path: '/plugin' })
    expect(fetchApi).toHaveBeenCalledOnce()
  })

  it('snake-cases object request bodies but leaves unsupported bodies unchanged', () => {
    type RequestContext = { options: { body?: unknown } }
    const result = defaultApi.post('/hooks') as unknown as {
      options: { onRequest: (context: RequestContext) => void }
    }
    const onRequest = result.options.onRequest

    const absent: RequestContext = { options: {} }
    const primitive: RequestContext = { options: { body: 'value' } }
    const formData: RequestContext = { options: { body: new FormData() } }
    const object: RequestContext = { options: { body: { camelCase: 1, nestedValue: { innerKey: 2 } } } }
    onRequest(absent)
    onRequest(primitive)
    onRequest(formData)
    onRequest(object)

    expect(absent.options.body).toBeUndefined()
    expect(primitive.options.body).toBe('value')
    expect(formData.options.body).toBeInstanceOf(FormData)
    expect(object.options.body).toEqual({ camel_case: 1, nested_value: { inner_key: 2 } })
  })

  it('camel-cases object responses but leaves empty and primitive responses unchanged', async () => {
    type ResponseContext = { response: { _data?: unknown } }
    const result = defaultApi.get('/hooks') as unknown as {
      options: { onResponse: (context: ResponseContext) => Promise<void> }
    }
    const onResponse = result.options.onResponse

    const absent: ResponseContext = { response: {} }
    const primitive: ResponseContext = { response: { _data: 'value' } }
    const object: ResponseContext = { response: { _data: { snake_case: 1, nested_value: { inner_key: 2 } } } }
    await onResponse(absent)
    await onResponse(primitive)
    await onResponse(object)

    expect(absent.response._data).toBeUndefined()
    expect(primitive.response._data).toBe('value')
    expect(object.response._data).toEqual({ snakeCase: 1, nestedValue: { innerKey: 2 } })
  })
})
