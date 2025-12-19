import type { InjectionKey } from 'vue'
import authRepository from '@/repositories/authRepository'
import type { UserData } from '@/models/auth'
import { useLoginForm } from '@/composables/form/useLoginForm'

/**
 * ログイン Composable
 * 認証処理と状態管理
 */
export const useLogin = () => {
  const router = useRouter()
  const localePath = useLocalePath()

  // フォーム層
  const form = useLoginForm()

  // 認証状態
  const user = ref<UserData | null>(null)
  const isAuthenticated = computed(() => user.value !== null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  /**
   * ログイン処理
   */
  const login = async (): Promise<boolean> => {
    // バリデーション実行
    const isValid = await form.validateForm()
    if (!isValid) {
      return false
    }

    loading.value = true
    error.value = null

    try {
      const response = await authRepository.post.login({
        email: form.email.value,
        password: form.password.value,
        rememberMe: form.rememberMe.value,
      })

      if (response.success) {
        user.value = response.data.user
        // ダッシュボードへ遷移
        await router.push(localePath('/dashboard'))
        return true
      }

      error.value = 'ログインに失敗しました'
      return false
    } catch (_e) {
      error.value = 'ログインに失敗しました'
      return false
    } finally {
      loading.value = false
    }
  }

  /**
   * ログアウト処理
   */
  const logout = async () => {
    user.value = null
    form.reset()
    await router.push(localePath('/login'))
  }

  return {
    // 認証状態
    user,
    isAuthenticated,
    loading,
    error,

    // フォーム
    form,

    // 操作
    login,
    logout,
  }
}

export type LoginComposable = ReturnType<typeof useLogin>
export const loginInjectionKey: InjectionKey<LoginComposable>
  = Symbol('login')
