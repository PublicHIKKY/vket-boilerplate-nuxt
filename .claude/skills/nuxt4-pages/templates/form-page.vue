<i18n lang="yaml">
ja:
  success:
    create: 登録に成功しました
    update: 更新に成功しました
  error:
    data: データ取得に失敗しました。
    create: 登録に失敗しました。
    update: 更新に失敗しました。
    validation: 入力内容を確認してください。
  seo:
    title: フォームページ
    description: フォームページの説明文
en:
  success:
    create: Successfully created
    update: Successfully updated
  error:
    data: Failed to obtain data.
    create: Failed to create.
    update: Failed to update.
    validation: Please check your input.
  seo:
    title: Form Page
    description: Form page description
</i18n>

<template>
  <HtPageForm
    :isSkeletonLoading="isSkeletonLoading"
    :isSubmitting="isSubmitting"
    :initialData="initialData"
    @submit="onSubmit"
    @cancel="onCancel"
  />
</template>

<script setup lang="ts">
import type { FormData } from '@/models/form'

definePageMeta({
  layout: 'account',
})

// composables
const route = useRoute()
const router = useRouter()
const toast = useToast()
const i18n = useI18n()
const composable = useComposable()
provide(composableInjectionKey, composable)

// state
const { initialData } = composable

// refs
const isSkeletonLoading = ref(true)
const isSubmitting = ref(false)

// 編集モードの判定（オプショナル）
const id = String(route.params.id ?? '') || undefined
const isEditMode = !!id

// SEO設定
useSeoMeta({
  title: `${i18n.t('seo.title')} | Vket Cloud`,
  description: i18n.t('seo.description'),
})

// 編集時の初期データフェッチ（オプショナル）
if (isEditMode) {
  const { data, error, refresh } = await useAsyncData(
    'form-detail',
    async () => {
      // データ取得のみ
      return await composable.getDetail(id)
    },
    {
      lazy: import.meta.client,
    }
  )

  // データをcomposableにセット
  if (data.value) {
    composable.setState({
      initialData: data.value.detail,
    })
    isSkeletonLoading.value = false
  }

  // SSR時の認証エラー処理
  if (import.meta.client && error.value) {
    if (error.value.statusCode === 401) {
      await refresh()
    } else {
      toast.addToast(i18n.t('error.data'), 'error')
    }
    isSkeletonLoading.value = false
  }
} else {
  isSkeletonLoading.value = false
}

// フォーム送信処理
const onSubmit = async (form: FormData) => {
  isSubmitting.value = true

  try {
    if (isEditMode) {
      // 更新処理
      await composable.update(id, form)
      toast.addToast(i18n.t('success.update'), 'success')
    } else {
      // 作成処理
      const response = await composable.create(form)
      toast.addToast(i18n.t('success.create'), 'success')
      await navigateTo(`/complete/${response.id}`)
    }
  } catch (error) {
    console.error(error)
    const message = isEditMode
      ? i18n.t('error.update')
      : i18n.t('error.create')
    toast.addToast(message, 'error')
  } finally {
    isSubmitting.value = false
  }
}

// キャンセル処理
const onCancel = () => {
  router.back()
}
</script>
