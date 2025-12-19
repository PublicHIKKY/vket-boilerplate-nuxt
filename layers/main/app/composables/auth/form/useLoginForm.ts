import type { InjectionKey } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { loginRequest } from '~/models/auth'

/**
 * Login Form State with vee-validate
 * ログインフォームのデータとバリデーションの統合管理
 * 必ずInjectionKeyを定義
 */
export const useLoginForm = () => {
  // vee-validateのuseForm with zod schema
  const {
    values: formData,
    errors,
    isSubmitting,
    handleSubmit,
    resetForm,
    setFieldValue,
    validate,
  } = useForm({
    validationSchema: toTypedSchema(loginRequest),
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })

  /**
   * リセット（初期値に戻す）
   */
  const reset = () => {
    resetForm()
  }

  /**
   * フィールド値の更新
   */
  const updateField = (field: keyof typeof formData, value: string | boolean) => {
    setFieldValue(field, value)
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

    // バリデーション
    errors,
    isSubmitting,

    // メソッド
    handleSubmit,
    reset,
    updateField,
    validateForm,
  }
}

export type LoginFormComposable = ReturnType<typeof useLoginForm>
export const loginFormInjectionKey: InjectionKey<LoginFormComposable> = Symbol('login-form')
