import { describe, it, expect, vi } from 'vitest'
import api, { vketSsoApi } from '#vket-sso/app/utils/vket-sso-api'
import { defaultApi } from '#base/app/utils/default-api'

vi.mock('#base/app/utils/default-api')
vi.mock('ofetch')
vi.mock('#base/app/utils/default-api', () => ({
  defaultApi: {
    get: vi.fn(),
    post: vi.fn(),
    put: vi.fn(),
    patch: vi.fn(),
    delete: vi.fn(),
  },
}))

describe('vketSsoApi', () => {
  const path = '/test-path'
  const fetchOptions = { headers: { 'Content-Type': 'application/json' } }

  it('should call defaultApi.get with correct parameters', async () => {
    await vketSsoApi.get(path, fetchOptions)
    expect(defaultApi.get).toHaveBeenCalledWith(path, expect.objectContaining(fetchOptions))
  })

  it('should call defaultApi.post with correct parameters', async () => {
    await vketSsoApi.post(path, fetchOptions)
    expect(defaultApi.post).toHaveBeenCalledWith(path, expect.objectContaining(fetchOptions))
  })

  it('should call defaultApi.put with correct parameters', async () => {
    await vketSsoApi.put(path, fetchOptions)
    expect(defaultApi.put).toHaveBeenCalledWith(path, expect.objectContaining(fetchOptions))
  })

  it('should call defaultApi.patch with correct parameters', async () => {
    await vketSsoApi.patch(path, fetchOptions)
    expect(defaultApi.patch).toHaveBeenCalledWith(path, expect.objectContaining(fetchOptions))
  })

  it('should call defaultApi.delete with correct parameters', async () => {
    await vketSsoApi.delete(path, fetchOptions)
    expect(defaultApi.delete).toHaveBeenCalledWith(path, expect.objectContaining(fetchOptions))
  })

  //
  it('should call api.get with correct parameters', async () => {
    await api('get', path, fetchOptions)
    expect(defaultApi.get).toHaveBeenCalledWith(path, expect.objectContaining(fetchOptions))
  })

  it('should call api.GET with correct parameters', async () => {
    await api('GET', path, fetchOptions)
    expect(defaultApi.get).toHaveBeenCalledWith(path, expect.objectContaining(fetchOptions))
  })

  it('should call api.post with correct parameters', async () => {
    await api('post', path, fetchOptions)
    expect(defaultApi.post).toHaveBeenCalledWith(path, expect.objectContaining(fetchOptions))
  })

  it('should call api.POST with correct parameters', async () => {
    await api('POST', path, fetchOptions)
    expect(defaultApi.post).toHaveBeenCalledWith(path, expect.objectContaining(fetchOptions))
  })

  it('should call api.put with correct parameters', async () => {
    await api('put', path, fetchOptions)
    expect(defaultApi.put).toHaveBeenCalledWith(path, expect.objectContaining(fetchOptions))
  })

  it('should call api.PUT with correct parameters', async () => {
    await api('PUT', path, fetchOptions)
    expect(defaultApi.put).toHaveBeenCalledWith(path, expect.objectContaining(fetchOptions))
  })

  it('should call api.patch with correct parameters', async () => {
    await api('patch', path, fetchOptions)
    expect(defaultApi.patch).toHaveBeenCalledWith(path, expect.objectContaining(fetchOptions))
  })

  it('should call api.PATCH with correct parameters', async () => {
    await api('PATCH', path, fetchOptions)
    expect(defaultApi.patch).toHaveBeenCalledWith(path, expect.objectContaining(fetchOptions))
  })

  it('should call api.delete with correct parameters', async () => {
    await api('delete', path, fetchOptions)
    expect(defaultApi.delete).toHaveBeenCalledWith(path, expect.objectContaining(fetchOptions))
  })

  it('should call api.DELETE with correct parameters', async () => {
    await api('DELETE', path, fetchOptions)
    expect(defaultApi.delete).toHaveBeenCalledWith(path, expect.objectContaining(fetchOptions))
  })

  it('should call api.CONNECT with correct parameters', async () => {
    await api('CONNECT', path, fetchOptions)
    expect(defaultApi.delete).toHaveBeenCalledWith(path, expect.objectContaining(fetchOptions))
  })
})
