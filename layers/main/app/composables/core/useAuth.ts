import type { UserData, LoginRequest } from '@/models/auth'
import useApi from '@/composables/useApi'

/**
 * 認証状態管理Composable
 * - アプリケーション全体で使用する基盤機能
 * - useStateを使用した永続的なグローバル状態
 */
export const useAuth = () => {
  const user = useState<UserData | null>('auth-user', () => null)
  const token = useState<string | null>('auth-token', () => null)
  const loading = useState<boolean>('auth-loading', () => false)
  const error = useState<string | null>('auth-error', () => null)

  const { repository } = useApi('auth')

  const isAuthenticated = computed(() => !!user.value && !!token.value)

  /**
   * ログイン処理
   */
  const login = async (credentials: LoginRequest): Promise<boolean> => {
    loading.value = true
    error.value = null

    try {
      const response = await repository.value.post.login(credentials)

      if (response.success) {
        user.value = response.data.user
        token.value = response.data.token

        // トークンをlocalStorageに保存（クライアントサイドのみ）
        if (import.meta.client) {
          localStorage.setItem('auth_token', response.data.token)
        }

        return true
      } else {
        error.value = response.message || 'ログインに失敗しました'
        return false
      }
    } catch (e) {
      error.value = 'ログインに失敗しました'
      console.error('Login failed:', e)
      return false
    } finally {
      loading.value = false
    }
  }

  /**
   * ログアウト処理
   */
  const logout = () => {
    user.value = null
    token.value = null
    error.value = null

    if (import.meta.client) {
      localStorage.removeItem('auth_token')
    }
  }

  /**
   * 認証状態のリセット
   */
  const reset = () => {
    user.value = null
    token.value = null
    loading.value = false
    error.value = null
  }

  return {
    // 状態
    user: readonly(user),
    token: readonly(token),
    loading: readonly(loading),
    error: readonly(error),
    isAuthenticated,

    // メソッド
    login,
    logout,
    reset,
  }
}
