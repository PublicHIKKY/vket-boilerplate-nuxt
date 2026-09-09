import { beforeEach, describe, expect, it, vi } from 'vitest'
import exampleRepository from '#base/app/repositories/exampleRepository'

const { defaultApiMock, requireRuntimeConfigMock } = vi.hoisted(() => ({
  defaultApiMock: vi.fn(),
  requireRuntimeConfigMock: vi.fn(),
}))

vi.mock('#base/app/utils/default-api', () => ({ default: defaultApiMock }))
vi.mock('#base/app/plugins/runtimeConfig', async importOriginal => ({
  ...await importOriginal<typeof import('#base/app/plugins/runtimeConfig')>(),
  requireRuntimeConfig: requireRuntimeConfigMock,
}))

const response = {
  status: 'ok' as const,
  data: {
    todos: [{ userId: 1, id: 2, title: 'test', completed: false }],
  },
}

describe('exampleRepository', () => {
  beforeEach(() => {
    defaultApiMock.mockReset()
    requireRuntimeConfigMock.mockReset()
  })

  it('requests and validates the example endpoint', async () => {
    requireRuntimeConfigMock.mockReturnValue({ public: { apiPrefix: '/api' } })
    defaultApiMock.mockResolvedValue(response)

    await expect(exampleRepository.get.getExample()).resolves.toEqual(response)
    expect(defaultApiMock).toHaveBeenCalledWith('get', '/api/example')
  })

  it('throws when apiPrefix is unavailable', async () => {
    requireRuntimeConfigMock.mockReturnValue({ public: {} })

    await expect(exampleRepository.get.getExample()).rejects.toThrow(
      'getExample()',
    )
    expect(defaultApiMock).not.toHaveBeenCalled()
  })

  it('rejects a response that violates the schema', async () => {
    requireRuntimeConfigMock.mockReturnValue({ public: { apiPrefix: '/api' } })
    defaultApiMock.mockResolvedValue({ status: 'broken', data: { todos: [] } })

    await expect(exampleRepository.get.getExample()).rejects.toThrow()
  })
})
