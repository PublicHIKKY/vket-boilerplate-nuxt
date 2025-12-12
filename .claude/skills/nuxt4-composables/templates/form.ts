// composables/form/use{{FeatureName}}Form.ts
import type { InjectionKey } from 'vue'
import { useForm } from 'vee-validate'
import { z } from 'zod'

/**
 * {{FeatureName}} Form State with vee-validate
 * フォームデータとバリデーションの統合管理
 * 必ずInjectionKeyを定義
 */
export const use{{FeatureName}}Form = () => {
  // バリデーションスキーマ（zod）
  const validationSchema = z.object({
    title: z.string()
      .min(1, 'タイトルは必須です')
      .min(5, 'タイトルは5文字以上必要です'),
    slug: z.string()
      .min(1, 'スラッグは必須です')
      .regex(/^[a-z0-9-]+$/, 'スラッグは半角英数字とハイフンのみ使用できます'),
    content: z.string()
      .min(1, '本文は必須です'),
    categoryId: z.string()
      .min(1, 'カテゴリーは必須です'),
  })

  // vee-validateのuseForm
  const {
    values: formData,
    errors,
    isSubmitting,
    handleSubmit,
    resetForm,
    setValues,
    setFieldValue,
    validate,
  } = useForm({
    validationSchema,
    initialValues: {
      title: '',
      slug: '',
      content: '',
      categoryId: '',
    },
  })

  // 変更フラグ
  const isDirty = ref(false)

  // 元データ（比較用）
  const originalData = ref<Partial<{{EntityName}}>>({})

  /**
   * 初期データを設定
   */
  const setInitialData = (data: {{EntityName}}) => {
    setValues(data)
    originalData.value = { ...data }
    isDirty.value = false
  }

  /**
   * リセット（元データに戻す）
   */
  const reset = () => {
    if (Object.keys(originalData.value).length > 0) {
      setValues(originalData.value)
    } else {
      resetForm()
    }
    isDirty.value = false
  }

  /**
   * クリア（空にする）
   */
  const clear = () => {
    resetForm()
    originalData.value = {}
    isDirty.value = false
  }

  /**
   * フィールド値の更新
   */
  const updateField = (field: string, value: any) => {
    setFieldValue(field, value)
    isDirty.value = true
  }

  /**
   * 変更監視
   */
  watch(formData, () => {
    isDirty.value = true
  }, { deep: true })

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

    // 状態
    isDirty,
    originalData,

    // メソッド
    handleSubmit,
    setInitialData,
    reset,
    clear,
    updateField,
    validateForm,
  }
}

export type {{FeatureName}}FormComposable = ReturnType<typeof use{{FeatureName}}Form>
export const {{featureName}}FormInjectionKey: InjectionKey<{{FeatureName}}FormComposable> = Symbol('{{kebab-case-feature}}-form')
