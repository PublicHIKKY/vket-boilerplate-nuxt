import { describe, it, expect, vi, beforeEach } from 'vitest'
import { vketSsoRepository } from '#vket-sso/app/repositories/vketSsoRepository'
import { defaultApi } from '#base/app/utils/default-api'

vi.mock('#base/app/utils/default-api')
vi.mock('#base/app/utils/error')
vi.mock('#app')

describe('vketSsoRepository', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('get.fetchSsoProfile', () => {
    it('should fetch the SSO profile', async () => {
      const mockResponse = {
        user: {
          id: 1,
          sub: 'sub',
          vketId: 'vketId',
          vketDetaId: 1,
          email: 'email',
          nameJa: 'nameJa',
          nameEn: 'nameEn',
          pictureUrl: 'pictureUrl',
          createdAt: 'createdAt',
          updatedAt: 'updatedAt',
        },
      }

      vi.mocked(defaultApi.get).mockResolvedValue(mockResponse)
      const result = await vketSsoRepository.get.fetchSsoProfile()
      expect(defaultApi.get).toHaveBeenCalledWith(
        useRuntimeConfig().public.ssoDomain + '/profile/me',
        { credentials: 'include' },
      )
      expect(result).toEqual(mockResponse)
    })
  })

  describe('get.fetchSsoToken', () => {
    it('should fetch the SSO token', async () => {
      const mockResponse = { jwt: 'test-jwt' }
      vi.mocked(defaultApi.get).mockResolvedValue(mockResponse)

      const config = useRuntimeConfig()
      const result = await vketSsoRepository.get.fetchSsoToken()
      const domain
              = config?.public?.ssoDomain || raiseError('undefined ssoDomain')
      const audience
              = config?.public?.url
      expect(defaultApi.get).toHaveBeenCalledWith(
        `${domain}/auth/token?audience=${audience}`,
        { credentials: 'include' },
      )
      expect(result).toEqual(mockResponse)
    })
  })

  describe('get.fetchSsoJwk', () => {
    it('should fetch the SSO JWK', async () => {
      const mockResponse = {
        d: 'test-d',
        dp: 'test-dp',
        dq: 'test-dq',
        e: 'test-e',
        kid: 'test-kid',
        kty: 'test-kty',
        n: 'test-n',
        p: 'test-p',
        q: 'test-q',
        qi: 'test-qi',
      }
      vi.mocked(defaultApi.get).mockResolvedValue(mockResponse)

      const result = await vketSsoRepository.get.fetchSsoJwk()

      expect(defaultApi.get).toHaveBeenCalledWith(
        useRuntimeConfig().public.ssoDomain + '/auth/discovery/keys',
      )
      expect(result).toEqual(mockResponse)
    })
  })
})
