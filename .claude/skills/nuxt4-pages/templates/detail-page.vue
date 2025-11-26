<i18n lang="yaml">
ja:
  error:
    data: データ取得に失敗しました。
    not_found: データが見つかりませんでした。
  seo:
    title: 詳細ページ
    description: 詳細ページの説明文
en:
  error:
    data: Failed to obtain data.
    not_found: Data not found.
  seo:
    title: Detail Page
    description: Detail page description
</i18n>

<template>
  <HtPageDetail
    :isSkeletonLoading="isSkeletonLoading"
    :detail="detail"
    @action="onAction"
  />
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'public',
})

// composables
const route = useRoute()
const toast = useToast()
const i18n = useI18n()
const composable = useComposable()
provide(composableInjectionKey, composable)

// state
const { detail } = composable

// refs
const isSkeletonLoading = ref(true)

// 動的ルートパラメータ
const id = String(route.params.id ?? '')

// データフェッチ
const { data, error, refresh } = await useAsyncData(
  'detail-data',
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
    detail: data.value.detail,
  })
  isSkeletonLoading.value = false
}

// SSR時の認証エラー処理
if (import.meta.client && error.value) {
  if (error.value.statusCode === 401) {
    await refresh()
  } else if (error.value.statusCode === 404) {
    toast.addToast(i18n.t('error.not_found'), 'error')
  } else {
    toast.addToast(i18n.t('error.data'), 'error')
  }
  isSkeletonLoading.value = false
}

// SEO設定（SSR時にdataから取得可能）
useSeoMeta({
  title: `${i18n.t('seo.title')} | Vket Cloud`,
  description: i18n.t('seo.description'),
})

// アクション処理
const onAction = async () => {
  try {
    await composable.performAction(id)
    toast.addToast(i18n.t('success.action'), 'success')
  } catch (error) {
    console.error(error)
    toast.addToast(i18n.t('error.action'), 'error')
  }
}
</script>
