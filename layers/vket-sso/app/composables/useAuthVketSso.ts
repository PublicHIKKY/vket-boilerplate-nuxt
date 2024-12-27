/**
 * @group Feature List
 * @category Composables
 * @module Auth (Vket SSO)
 */
import { InjectionKey } from 'vue'
import { vketSsoRepository } from '#vket-sso/app/repositories/vketSsoRepository'
import { Result, ssoJwtSchema, SsoUser } from '#vket-sso/app/models/vketSso'
import { decodeJwt } from '#base/app/utils/token'
import {
  getSessionStorageValue,
  setSessionStorageValue,
  removeSessionStorageValue,
} from '#base/app/utils/storage-control'
import { raiseError } from '#base/app/utils/error'

export const useAuthVketSso = () => {
  const REPOSITORY_NAME = 'vketsso'
  const COOKIE_KEY_JWT = 'sso-token-jwt'
  const SESSION_STORAGE_KEY_EXP = 'sso-token-expires-in'
  const SESSION_STORAGE_KEY_IAT = 'sso-token-created-at'
  const runtimeConfig = useRuntimeConfig()

  const _ssoDomain
    = runtimeConfig?.public?.ssoDomain && typeof runtimeConfig?.public?.ssoDomain === 'string' ? runtimeConfig?.public?.ssoDomain : raiseError('undefined ssoDomain')
  const ssoUser = useState<SsoUser | null>(`${REPOSITORY_NAME}-user`)
  const aliveToken = useState<string | null>(`${REPOSITORY_NAME}-ac`)
  const isLogout = useState<boolean>(`${REPOSITORY_NAME}-logout`)


  /**
   * @remarks VketSSO: token取得(Fetcher)
   */
  const _fetchToken = async () => {
    if (import.meta.server) raiseError('SSR not supported') 
    try {
      const result = await vketSsoRepository.get.fetchSsoToken()
      const decodedToken = requireValueOf(ssoJwtSchema, decodeJwt(result.jwt))
      
      setSessionStorageValue(SESSION_STORAGE_KEY_EXP, String(decodedToken.exp))
      setSessionStorageValue(SESSION_STORAGE_KEY_IAT, String(decodedToken.iat))
      setSingleCookieValue(COOKIE_KEY_JWT, result.jwt)
      aliveToken.value = result.jwt
    }
    catch (e) {
      console.error(`${e}`)
      aliveToken.value = null
    } 
    finally {
      return aliveToken.value
    }
  }

  /**
   * @remarks VketSSO: token削除
   */
  const _removeToken = () => {
    removeSessionStorageValue(SESSION_STORAGE_KEY_EXP)
    removeSessionStorageValue(SESSION_STORAGE_KEY_IAT)
    removeSingleCookieValue(COOKIE_KEY_JWT)
    aliveToken.value = null
  }

  /**
   * @remarks VketSSO: token検証
   * @return boolean
   */
  const _verifyTokenByExp = (exp: number) => {
    const expiredUnixTime =  Number(exp) || 0
    // NOTE: 桁数が異なるので1/1000倍にする
    const currentUnixTime = new Date().getTime() / 1000
    if (currentUnixTime < expiredUnixTime) return true
    _removeToken()
    return false
  }

  /**
   * @remarks VketSSO: ログイン
   * エラー時はi18nのキーを返却するので呼び出し元でハンドリングを行う
   */
  const login = async (): Promise<Result> => {
    const loginWindow = window.open(`${_ssoDomain}/auth/vket_account/login?redirect_uri=${_ssoDomain}/close`)
    if (!loginWindow) { 
      return {
        success: false,
        errorKey: 'error.popup-block',
      }
    }

    return new Promise<Result>((resolve) => {
      const interval = setInterval(async () => {
        if (loginWindow.closed) {
          clearInterval(interval)
          const ssoUser = await getSsoUserState().catch(() => null) // NOTE: ログは関数内で出しているためここではnullを返却
          if (!ssoUser || !ssoUser.value) {
            // NOTE: タブを手動で閉じる場合もこの分岐になる
            return resolve({
              success: false,
              errorKey: 'error.login',
            })
          }
          resolve({
            success: true,
          })
        }
      }, 1000)
    }).catch((error) => {
      // NOTE: この分岐は来ない想定だが、何かあった時のために一応
      console.error(`${error}`)
      return {
        success: false,
        errorKey: 'error.login',
      }
    })
  }

  /**
   * @remarks VketSSO: ログアウト
   * エラー時はi18nのキーを返却するので呼び出し元でハンドリングを行う
   */
  const logout = (redirectUri = `${_ssoDomain}/close`) => {
    const logoutWindow = window.open(`${_ssoDomain}/auth/vket_account/logout?callback_url=${_ssoDomain}/close`)
    if (!logoutWindow) { 
      return {
        success: false,
        errorKey: 'error.popup-block',
      }
    }

    return new Promise<Result>((resolve) => {
      const interval = setInterval(async () => {
        if (logoutWindow.closed) {
          clearInterval(interval)
          _removeToken()
          resolve({
            success: true,
          })
        }
      }, 1000)
    }).catch((error) => {
      // NOTE: この分岐は来ない想定だが、何かあった時のために一応
      console.error(`${error}`)
      return {
        success: false,
        errorKey: 'error.logout',
      }
    })
  }

  /**
   * @remarks VketSSO: SSO User をfetchする
   */
  const fetchSsoUser = async () => {
    if (import.meta.server) raiseError('SSR not supported') 
    try {
      const result = await vketSsoRepository.get.fetchSsoProfile()
      ssoUser.value = result.user
    }
    catch (e) {
      console.error(e)
      ssoUser.value = null
      isLogout.value = true
      _removeToken()
    }
  }

  /**
   * @remarks VketSSO: SSO User をリセットする
   */
  const resetSsoUser = () => {
    ssoUser.value = null
  }

  /**
   * @remarks VketSSO: SSO User のをstateをreturnする
   * @param awaitRefetch boolean default: true
   * @return Ref<SsoUser | null>
   */
  const getSsoUserState = async (awaitRefetch = true) => {
    if (awaitRefetch) await fetchSsoUser()
    return readonly(ssoUser)
  }

  /**
   * stateからtokenを取得する、stateがnullの場合、SSRの場合Cookie、CSR（SPA）の場合、sessionからjwtを取得しstateを更新
   * @returns {string | null}
   */
  const _getAndStateSetJwt = (
  ): string | null => {
    if (aliveToken.value) return aliveToken.value
    if (import.meta.client)  {
      const token = getSessionStorageValue(COOKIE_KEY_JWT) ?? null
      if (token) aliveToken.value = token
      return token
    }
    const cookieString = useRequestHeaders(['cookie']).cookie
    if (!cookieString) return null
    const token = cookieString
    .split(';')
    .map(item => item.trim())
    .find(trimmedCookie => trimmedCookie.startsWith(COOKIE_KEY_JWT + '=')) // Cookieの名前と値は「名前=値」の形式で保存されている
    ?.substring(COOKIE_KEY_JWT.length + 1) ?? null
    if (token) aliveToken.value = token
    return token
  }

  /**
   * @remarks VketSSO: tokenを取得し有効期限が切れていたら更新する(SSRではtokenの更新ができないので更新フローに入るとnullを返す)
   */
  const getTokenOrRefresh = async (
    returnType: 'encoded' | 'decodedObject' | 'decodedJson' = 'encoded',
  ) => {
    const returnFunction = (token: string | null) => {
      if (!token) return null
      const decodedToken = requireValueOf(ssoJwtSchema, decodeJwt(token))
      // note: returnType = 'decodedObject' はデコードして返す
      if (returnType === 'decodedObject') return decodedToken
      // note: returnType = 'decodedJson' はデコードした結果をJSONとして返す
      if (returnType === 'decodedJson') return JSON.stringify(decodedToken)
      // note: デフォルトはそのまま返す
      return aliveToken.value
    }
    try {
      const jwtString = _getAndStateSetJwt()
      if (!jwtString) {
        if (import.meta.server) return null
        return returnFunction(await _fetchToken())
      }
      if (!aliveToken.value) {
        return null
      }
      const decodedToken = requireValueOf(ssoJwtSchema, decodeJwt(aliveToken.value))
      if (!_verifyTokenByExp(decodedToken.exp)) {
        if (import.meta.server) return null
        return returnFunction(await _fetchToken()) 
      }
      return returnFunction(jwtString)
    } catch (error) {
      console.error(`${error}`)
      return null
    }
  }


  // /**
  //  * 必要になったら調整する
  //  * @remarks VketSSO: login中である場合はtrue, そうでない場合はfalseをreturnする
  //  * @param awaitRefetch boolean default: true
  //  * @return boolean
  //  */
  // const isLoggedIn = async (awaitRefetch = true) => {
  //   const currentState = await getSsoUserState(awaitRefetch)
  //   return currentState.value !== undefined && currentState.value !== null
  // }


  // /**
  //  * 必要になったら調整する
  //  * @remarks VketSSO: token検証Keyの取得
  //  */
  // const getJwk = async (): Promise<void> => {
  //   try {
  //     const result = await vketSsoRepository.get.fetchSsoJwk()
  //     if (!result) throw new Error('Failed to get jwk')
  //     // TODO: jwkの使用タイミングで追加実装。現在はheliportからもheliscriptからも使わないはず
  //     // eslint-disable-next-line
  //     console.info(`${result}`)
  //   }
  //   catch (e) {
  //     console.error(`${e}`)
  //   }
  // }

  return {
    aliveToken: readonly(aliveToken),
    isLogout: readonly(isLogout),
    ssoUser: readonly(ssoUser),
    login,
    logout,
    fetchSsoUser,
    resetSsoUser,
    getSsoUserState,
    getTokenOrRefresh,
  }
}

export type UseAuthVketSso = ReturnType<typeof useAuthVketSso>
export const UseAuthVketSsoInjectionKey: InjectionKey<UseAuthVketSso>
  = Symbol('auth-vket-sso')
