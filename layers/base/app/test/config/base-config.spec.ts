import { afterEach, describe, expect, it, vi } from 'vitest'
import { getAppConfigOfEnvType } from '#base/config/appConfig'
import {
  allEnvTypes,
  ensureEnvType,
  isEnvType,
  readEnvType,
} from '#base/config/models/EnvType'

describe('EnvType', () => {
  it.each(allEnvTypes)('accepts %s', (envType) => {
    expect(isEnvType(envType)).toBe(true)
    expect(() => ensureEnvType(envType)).not.toThrow()
    expect(readEnvType({ VITE_OUTPUT_ENV: envType })).toBe(envType)
  })

  it('rejects values outside EnvType', () => {
    expect(isEnvType('preview')).toBe(false)
    expect(isEnvType(undefined)).toBe(false)
    expect(() => ensureEnvType('preview')).toThrow(
      new TypeError('Not an EnvType.'),
    )
    expect(() => readEnvType({ VITE_OUTPUT_ENV: 'preview' })).toThrow(TypeError)
  })

  it('defaults to local and reports a missing variable', () => {
    const error = vi.spyOn(console, 'error').mockImplementation(() => {})
    expect(readEnvType({})).toBe('local')
    expect(error).toHaveBeenCalledWith('No VITE_OUTPUT_ENV is set.')
  })
})

describe('appConfig', () => {
  it.each(allEnvTypes)('builds %s config', (envType) => {
    expect(getAppConfigOfEnvType(envType, { SAMPLE: 'value' })).toEqual({})
  })
})

describe('runtimeConfig', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    vi.resetModules()
  })

  it.each([
    ['local', 'http://localhost:3000', 'http://localhost:3003'],
    ['development', 'http://localhost:3000', undefined],
    ['staging', '', undefined],
    ['production', '', undefined],
  ] as const)('builds %s config', async (envType, url, httpBinUrl) => {
    const { getRuntimeConfigOfEnvType } = await import('#base/config/runtimeConfig')
    const config = getRuntimeConfigOfEnvType(envType, {})

    expect(config.public.outputEnv).toBe(envType)
    expect(config.public.url).toBe(url)
    expect(config.public.baseUrl).toBe(url)
    expect(config.public.apiPrefix).toBe('/api/v1')
    expect(
      'httpBinUrl' in config.public ? config.public.httpBinUrl : undefined,
    ).toBe(httpBinUrl)
  })

  it('uses NUXT_API_PREFIX when supplied', async () => {
    vi.stubEnv('NUXT_API_PREFIX', '/custom')
    vi.resetModules()
    const { getRuntimeConfigOfEnvType } = await import('#base/config/runtimeConfig')

    expect(getRuntimeConfigOfEnvType('local', {}).public.apiPrefix).toBe('/custom')
  })
})
