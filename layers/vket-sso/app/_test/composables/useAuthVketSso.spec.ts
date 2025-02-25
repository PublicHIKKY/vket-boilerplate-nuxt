import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { getSessionStorageValue } from '#base/app/utils/storage-control'
import { decodeJwt } from '#base/app/utils/token'
import { useAuthVketSso } from '#vket-sso/app/composables/useAuthVketSso'
import { vketSsoRepository } from '#vket-sso/app/repositories/vketSsoRepository'

// FIXME: import.meta.serverのモック化ができないのでそこの分岐テストは出来てない
vi.mock('#base/app/utils/storage-control')
vi.mock('#base/app/utils/token')
vi.mock('#vket-sso/app/repositories/vketSsoRepository')

describe('useAuthVketSso', () => {
  let auth: ReturnType<typeof useAuthVketSso>

  beforeEach(() => {
    auth = useAuthVketSso()
    vi.clearAllMocks() // すべてのモックをクリア
  })

  afterEach(() => {
    vi.resetAllMocks() // すべてのモックをリセット
    clearNuxtState() // テスト間でstateの状態が引き継がれるのでリセット
  })

  describe('login', () => {
    it('should open login window and resolve on success', async () => {
      const mockWindow = { closed: false }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      vi.spyOn(window, 'open').mockReturnValue(mockWindow as any)
      vi.mocked(vketSsoRepository.get.fetchSsoProfile).mockResolvedValue({
        user: {
          id: 1,
          sub: 'sub',
          vketId: 'vketId',
          createdAt: 'createdAt',
          updatedAt: 'updatedAt',
        },
      })

      setTimeout(() => {
        mockWindow.closed = true
      }, 1)

      const result = await auth.login()
      expect(result.success).toBe(true)
    })

    it('should handle popup block error', async () => {
      vi.spyOn(window, 'open').mockReturnValue(null)

      const result = await auth.login()

      expect(result.success).toBe(false)
      expect(result.errorKey).toBe('error.popup-block')
    })

    // getSsoUserStateのresponseがnullの場合のテスト
    it('should handle getSsoUserState null response', async () => {
      const mockWindow = { closed: false }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      vi.spyOn(window, 'open').mockReturnValue(mockWindow as any)
      vi.spyOn(auth, 'getSsoUserState').mockResolvedValue(ref(null))

      setTimeout(() => {
        mockWindow.closed = true
      }, 1)

      const result = await auth.login()
      expect(result.success).toBe(false)
      expect(result.errorKey).toBe('error.login')
    })

    // getSsoUserStateが例外の場合のテスト
    it('should handle getSsoUserState error', async () => {
      const mockWindow = { closed: false }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      vi.spyOn(window, 'open').mockReturnValue(mockWindow as any)
      vi.spyOn(auth, 'getSsoUserState').mockImplementationOnce(() => {
        throw new Error('should handle getSsoUserState error')
      })

      setTimeout(() => {
        mockWindow.closed = true
      }, 1)

      const result = await auth.login()
      expect(result.success).toBe(false)
    })
  })

  describe('logout', () => {
    it('should open logout window and resolve on success', async () => {
      const mockWindow = { closed: false }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      vi.spyOn(window, 'open').mockReturnValue(mockWindow as any)

      setTimeout(() => {
        mockWindow.closed = true
      }, 1)

      const result = await auth.logout()

      expect(result.success).toBe(true)
      expect(auth.aliveToken.value).toBeNull()
    })

    it('should handle popup block error', async () => {
      vi.spyOn(window, 'open').mockReturnValue(null)

      const result = await auth.logout()

      expect(result.success).toBe(false)
      expect(result.errorKey).toBe('error.popup-block')
    })
  })

  describe('fetchSsoUser', () => {
    it('should fetch SSO user and set state', async () => {
      const mockUser = {
        id: 1,
        sub: 'sub',
        vketId: 'vketId',
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
      }
      vi.mocked(vketSsoRepository.get.fetchSsoProfile).mockResolvedValue({ user: mockUser })

      await auth.fetchSsoUser()
      expect(auth.ssoUser.value).toStrictEqual(mockUser)
    })

    it('should handle errors and set logout state', async () => {
      vi.mocked(vketSsoRepository.get.fetchSsoProfile).mockRejectedValue(new Error('fetch error'))

      await auth.fetchSsoUser()

      expect(auth.ssoUser.value).toBeNull()
      expect(auth.isLogout.value).toBe(true)
    })

    it('should handle errors and set logout state', async () => {
      vi.mocked(vketSsoRepository.get.fetchSsoProfile).mockRejectedValue(new Error('fetch error'))
      vi.mocked(getSessionStorageValue).mockReturnValue('mockJwt')

      await auth.fetchSsoUser()

      expect(auth.ssoUser.value).toBeNull()
      expect(auth.isLogout.value).toBe(true)
    })
  })

  describe('resetSsoUser', () => {
    it('should reset SSO user state', () => {
      auth.resetSsoUser()

      expect(auth.ssoUser.value).toBeNull()
    })
  })

  describe('getSsoUserState', () => {
    it('should return SSO user state', async () => {
      const mockUser = {
        id: 1,
        sub: 'sub',
        vketId: 'vketId',
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
      }
      vi.mocked(vketSsoRepository.get.fetchSsoProfile).mockResolvedValue({ user: mockUser })

      const state = await auth.getSsoUserState()

      expect(state.value).toStrictEqual(mockUser)
    })
  })

  describe('getTokenOrRefresh', () => {
    it('should return token if valid', async () => {
      const mockJwt = 'mockJwt'
      const mockDecodedToken = { exp: new Date().getTime() / 1000 + 1000, iat: new Date().getTime() / 1000 }
      vi.mocked(decodeJwt).mockReturnValue(mockDecodedToken)
      vi.mocked(getSessionStorageValue).mockReturnValue(mockJwt)

      const token = await auth.getTokenOrRefresh()
      expect(token).toBe(mockJwt)
    })

    it('should fetch token if invalid', async () => {
      vi.mocked(getSessionStorageValue).mockReturnValue(null)
      vi.mocked(vketSsoRepository.get.fetchSsoToken).mockResolvedValue({ jwt: '' })
      const mockDecodedToken = { exp: new Date().getTime() / 1000 + 1000, iat: new Date().getTime() / 1000 }
      vi.mocked(decodeJwt).mockReturnValue(mockDecodedToken)

      const token = await auth.getTokenOrRefresh()
      expect(token).toBe(null)
    })

    // jwtが取得できたが、有効期限が切れている場合
    it('should fetch token if expired', async () => {
      const mockJwt = 'mockJwt'
      const mockDecodedToken = { exp: new Date().getTime() / 1000 - 1000, iat: new Date().getTime() / 1000 }
      vi.mocked(decodeJwt).mockReturnValue(mockDecodedToken)
      vi.mocked(getSessionStorageValue).mockReturnValue(mockJwt)
      vi.mocked(vketSsoRepository.get.fetchSsoToken).mockResolvedValue({ jwt: '' })

      const token = await auth.getTokenOrRefresh()
      expect(token).toBe(null)
    })

    // _fetchToken で例外が発生した場合
    it('should handle errors to _fetchToken', async () => {
      vi.mocked(getSessionStorageValue).mockReturnValue(null)
      vi.mocked(vketSsoRepository.get.fetchSsoToken).mockRejectedValue(new Error('should handle errors to _fetchToken'))

      const token = await auth.getTokenOrRefresh()
      expect(token).toBe(null)
    })
  })
})
