import type { InjectionKey } from 'vue'
import { useForm, useField } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod/v3'

/**
 * ログインフォーム Composable
 * フォームデータとバリデーションの統合管理
 */
export const useLoginForm = () => {
  // バリデーションスキーマ（zod）
  const validationSchema = toTypedSchema(
    z.object({
      email: z
        .string()
        .min(1, 'メールアドレスは必須です')
        .email('有効なメールアドレスを入力してください'),
      password: z.string().min(1, 'パスワードは必須です'),
      rememberMe: z.boolean().optional(),
    }),
  )

  // vee-validateのuseForm
  const { handleSubmit, resetForm, validate, meta } = useForm({
    validationSchema,
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })

  // 個別フィールド
  const {
    value: email,
    errorMessage: emailError,
  } = useField<string>('email')

  const {
    value: password,
    errorMessage: passwordError,
  } = useField<string>('password')

  const { value: rememberMe } = useField<boolean>('rememberMe')

  // フォームデータ（リアクティブ）
  const formData = computed(() => ({
    email: email.value,
    password: password.value,
    rememberMe: rememberMe.value,
  }))

  // エラーオブジェクト
  const errors = computed(() => ({
    email: emailError.value,
    password: passwordError.value,
  }))

  /**
   * フォームをリセット
   */
  const reset = () => {
    resetForm()
  }

  /**
   * バリデーション実行
   */
  const validateForm = async () => {
    const result = await validate()
    return result.valid
  }

  return {
    // フォームデータ
    formData,
    email,
    password,
    rememberMe,

    // バリデーション
    errors,
    emailError,
    passwordError,
    isSubmitting: meta.value.pending,

    // メソッド
    handleSubmit,
    reset,
    validateForm,
  }
}

export type LoginFormComposable = ReturnType<typeof useLoginForm>
export const loginFormInjectionKey: InjectionKey<LoginFormComposable>
  = Symbol('login-form')
