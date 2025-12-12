// composables/use{{FeatureName}}{{Type}}.ts
import type { InjectionKey } from 'vue'

/**
 * {{FeatureName}} {{Type}} - Root Composable
 * データ保持 + 統合層
 * Repository Factory経由でAPI呼び出し、ui/form/と組み合わせる
 * 必ずInjectionKeyを定義
 */
export const use{{FeatureName}}{{Type}} = () => {
  // Repository Factory経由でAPIにアクセス
  const { $repository } = useNuxtApp()
  const repository = $repository.{{repositoryName}}

  // UI状態層（必要に応じて）
  const filter = use{{FeatureName}}Filter() // フィルター機能が必要な場合
  const modal = use{{FeatureName}}Modal() // モーダル機能が必要な場合

  // フォーム層（必要に応じて）
  const form = use{{FeatureName}}Form() // フォーム機能が必要な場合（vee-validate統合）

  // Core層（必要に応じて）
  const toast = useToast()

  // データを保持
  const {{dataVariable}} = ref<{{DataType}}[]>([])
  const loading = ref(false)
  const error = ref<Error | null>(null)

  /**
   * データの読み込み
   */
  const load{{EntityName}}s = async () => {
    loading.value = true
    error.value = null
    try {
      // Repository Factory経由でAPI呼び出し
      const response = await repository.fetch{{EntityName}}s(filter.params.value)
      {{dataVariable}}.value = response
    } catch (e) {
      error.value = e as Error
      toast.error('データの読み込みに失敗しました')
    } finally {
      loading.value = false
    }
  }

  /**
   * データの再読み込み
   */
  const refresh = () => {
    return load{{EntityName}}s()
  }

  /**
   * 保存
   */
  const save = async () => {
    // vee-validateのバリデーション実行
    const isValid = await form.validateForm()
    if (!isValid) {
      toast.error('入力内容を確認してください')
      return false
    }

    loading.value = true
    try {
      // 新規作成または更新
      const isCreate = !{{currentItem}}.value?.id
      const response = isCreate
        ? await repository.create{{EntityName}}(form.formData.value as Create{{EntityName}}Input)
        : await repository.update{{EntityName}}(
            {{currentItem}}.value!.id,
            form.formData.value
          )

      if (isCreate) {
        {{dataVariable}}.value.push(response)
      } else {
        const index = {{dataVariable}}.value.findIndex(item => item.id === response.id)
        if (index !== -1) {{dataVariable}}.value[index] = response
      }

      toast.success(isCreate ? '作成しました' : '保存しました')
      form.clear()
      return true
    } catch (e) {
      error.value = e as Error
      toast.error('保存に失敗しました')
      return false
    } finally {
      loading.value = false
    }
  }

  /**
   * 削除
   */
  const remove = async (id: string) => {
    loading.value = true
    try {
      await repository.delete{{EntityName}}(id)
      {{dataVariable}}.value = {{dataVariable}}.value.filter(item => item.id !== id)
      toast.success('削除しました')
      return true
    } catch (e) {
      error.value = e as Error
      toast.error('削除に失敗しました')
      return false
    } finally {
      loading.value = false
    }
  }

  return {
    // データ
    {{dataVariable}},
    loading,
    error,

    // 子composable
    filter,
    modal,
    form,

    // 操作
    load{{EntityName}}s,
    refresh,
    save,
    remove,
  }
}

export type {{FeatureName}}{{Type}}Composable = ReturnType<typeof use{{FeatureName}}{{Type}}>
export const {{featureName}}{{Type}}InjectionKey: InjectionKey<{{FeatureName}}{{Type}}Composable> = Symbol('{{kebab-case-feature}}-{{kebab-case-type}}')
