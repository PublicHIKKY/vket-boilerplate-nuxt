<i18n lang="yaml">
ja:
  error:
    data: データ取得に失敗しました。
  seo:
    title: 一覧ページ
    description: 一覧ページの説明文
en:
  error:
    data: Failed to obtain data.
  seo:
    title: List Page
    description: List page description
</i18n>

<template>
  <HtPageList
    :isSkeletonLoading="isSkeletonLoading"
    :items="items"
    :total="total"
    :limit="FETCH_LIMIT"
    :offset="offset"
    @movePage="onMovePage"
    @search="onSearch"
  />
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'account',
})

const FETCH_LIMIT = 10

// composables
const toast = useToast()
const i18n = useI18n()
const router = useRouter()
const route = useRoute()
const composable = useComposable()
provide(composableInjectionKey, composable)

// state
const { items, total } = composable

// refs
const isSkeletonLoading = ref(true)

// クエリパラメータから状態を計算
const offset = computed(() => {
  const page = Number(route.query.page ?? 1)
  return (page - 1) * FETCH_LIMIT
})

// データフェッチ（クエリパラメータの変更を監視）
const { data, error, refresh } = await useAsyncData(
  'list-data',
  async () => {
    // クエリパラメータからパラメーターを構築
    const params: { [key: string]: string } = {
      limit: String(FETCH_LIMIT),
      offset: String(offset.value),
    }

    // その他のクエリパラメータを追加（keyword, filterなど）
    if (route.query.keyword) {
      params.keyword = String(route.query.keyword)
    }

    // データ取得のみ
    return await composable.getList(params)
  },
  {
    lazy: import.meta.client,
    // クエリパラメータの変更を監視して自動再取得
    watch: [() => route.query],
  }
)

// データをcomposableにセット
if (data.value) {
  composable.setState({
    items: data.value.items ?? [],
    total: data.value.total ?? 0,
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

// SEO設定（SSR時にdataから取得可能）
useSeoMeta({
  title: `${i18n.t('seo.title')} | Vket Cloud`,
  description: i18n.t('seo.description'),
})

// ページネーション（クエリパラメータを更新するだけ）
const onMovePage = (page: number) => {
  router.push({
    query: {
      ...route.query,
      page: page > 1 ? String(page) : undefined,
    },
  })
}

// 検索（クエリパラメータを更新するだけ）
const onSearch = (keyword: string) => {
  router.push({
    query: {
      ...route.query,
      keyword: keyword || undefined,
      page: undefined, // 検索時はページをリセット
    },
  })
}
</script>
