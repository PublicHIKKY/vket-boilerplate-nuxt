import { beforeEach, describe, expect, it, vi } from 'vitest'
import { getAppConfigOfEnvType } from '../../config/appConfig'
import {
  allEnvTypes,
  ensureEnvType,
  isEnvType,
  readEnvType,
} from '../../config/models/EnvType'
import { getRuntimeConfigOfEnvType } from '../../config/runtimeConfig'

describe('derived-main environment configuration', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('supports the four declared environments', () => {
    expect(allEnvTypes).toEqual(['local', 'development', 'staging', 'production'])
    for (const envType of allEnvTypes) {
      expect(isEnvType(envType)).toBe(true)
      expect(() => ensureEnvType(envType)).not.toThrow()
    }
    expect(isEnvType('preview')).toBe(false)
    expect(isEnvType(null)).toBe(false)
    expect(() => ensureEnvType('preview')).toThrowError(
      new TypeError('Not an EnvType.'),
    )
  })

  it('reads a valid environment and falls back to local when absent', () => {
    expect(readEnvType({ VITE_OUTPUT_ENV: 'staging' })).toBe('staging')
    const error = vi.spyOn(console, 'error').mockImplementation(() => {})

    expect(readEnvType({})).toBe('local')
    expect(error).toHaveBeenCalledWith('No VITE_OUTPUT_ENV is set.')
    expect(() => readEnvType({ VITE_OUTPUT_ENV: 'preview' })).toThrow(
      'Not an EnvType.',
    )
  })

  it.each(allEnvTypes)('creates app config for %s', (envType) => {
    expect(getAppConfigOfEnvType(envType, {})).toEqual({})
  })

  it.each([
    {
      envType: 'local' as const,
      url: 'http://localhost:3000',
      httpBinUrl: 'http://localhost:3003',
    },
    {
      envType: 'development' as const,
      url: 'http://localhost:3000',
      httpBinUrl: undefined,
    },
    { envType: 'staging' as const, url: '', httpBinUrl: undefined },
    { envType: 'production' as const, url: '', httpBinUrl: undefined },
  ])('creates runtime config for $envType', ({ envType, url, httpBinUrl }) => {
    const config = getRuntimeConfigOfEnvType(envType, {})

    expect(config.public).toMatchObject({
      apiPrefix: process.env.NUXT_API_PREFIX ?? '/api/v1',
      baseUrl: url,
      gtmId: 'GTM-XXXXXXX',
      outputEnv: envType,
      url,
    })
    expect('httpBinUrl' in config.public ? config.public.httpBinUrl : undefined)
      .toBe(httpBinUrl)
  })
})
