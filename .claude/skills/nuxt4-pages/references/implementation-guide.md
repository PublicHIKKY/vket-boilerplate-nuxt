# Pages実装ガイド

Nuxt4プロジェクトにおけるページコンポーネントの詳細な実装ガイド

## 目次

1. [ページの構成要素](#ページの構成要素)
2. [データフェッチパターン](#データフェッチパターン)
3. [エラーハンドリング](#エラーハンドリング)
4. [SEO対応](#seo対応)
5. [実装例](#実装例)

## ページの構成要素

### 1. i18n多言語対応ブロック

すべてのページには、日本語（ja）と英語（en）の翻訳を含めます。最低限、SEOタイトルと説明文を定義します。

```yaml
<i18n lang="yaml">
ja:
  seo:
    title: ページタイトル
    description: ページの説明文
  error:
    data: データ取得に失敗しました。
  success:
    action: アクションに成功しました
en:
  seo:
    title: Page Title
    description: Page description
  error:
    data: Failed to obtain data.
  success:
    action: Action completed successfully
</i18n>
```

### 2. definePageMeta

ページのメタ情報（レイアウト、ミドルウェアなど）を定義します。

```typescript
definePageMeta({
  layout: 'account', // レイアウト選択: 'account', 'public', 'default'
  middleware: 'auth', // ミドルウェア（オプショナル）
})
```

### 3. useSeoMeta

SEOメタデータを設定します。タイトルと説明文は必須です。

```typescript
const i18n = useI18n()

useSeoMeta({
  title: `${i18n.t('seo.title')} | Vket Cloud`,
  description: i18n.t('seo.description'),
  ogImage: ogImage.value, // オプショナル
})
```

### 4. Composables統合

ページで使用するComposablesを定義し、必要に応じてprovideで子コンポーネントに共有します。

```typescript
// 基本Composables
const i18n = useI18n()
const toast = useToast()
const route = useRoute()
const router = useRouter()

// カスタムComposables
const composable = useComposable()
provide(composableInjectionKey, composable)

// 認証（オプショナル）
const auth = inject(authInjectionKey) ?? raiseError('empty composable auth')
```

## データフェッチパターン

### 基本方針

- **`lazy: import.meta.client`** を使用してSSR/SPA遷移を最適化
- **useAsyncData内はデータ取得のみ** - 状態更新は外で行う
- useAsyncDataの戻り値（data）を使って後続処理で状態更新
- awaitパターンを使用（thenチェーンは使わない）
- watchを使わずにuseAsyncDataのwatchオプションで自動再取得

### パターン1: 単一データソース

```typescript
// データフェッチ
const { data, error, refresh } = await useAsyncData(
  'data-key',
  async () => {
    const params = { limit: '10' }
    // データ取得のみ
    return await composable.getList(params)
  },
  {
    lazy: import.meta.client, // SSR時: false, クライアント時: true
  }
)

// データをcomposableにセット
if (data.value) {
  composable.setState({
    items: data.value.items ?? [],
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
```

### パターン2: 複数データソースの並列取得

```typescript
// データフェッチ
const { data, error, refresh } = await useAsyncData(
  'multi-data',
  async () => {
    const params1 = { limit: '10' }
    const params2 = { sort: 'newer' }

    // 並列取得のみ
    const [data1, data2, data3] = await Promise.all([
      composable.getData1(params1),
      composable.getData2(params2),
      composable.getData3(),
    ])

    return { data1, data2, data3 }
  },
  {
    lazy: import.meta.client,
  }
)

// データをcomposableにセット
if (data.value) {
  composable.setState({
    list1: data.value.data1.items ?? [],
    list2: data.value.data2.items ?? [],
    detail: data.value.data3.detail,
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
```

### パターン3: 動的ルートパラメータを使用したデータフェッチ

```typescript
const route = useRoute()
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
```

### パターン4: 条件付きデータフェッチ

```typescript
const route = useRoute()
const id = String(route.params.id ?? '') || undefined
const isEditMode = !!id

if (isEditMode) {
  // データフェッチ
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
```

### パターン5: クエリパラメータベースのリスト再取得

```typescript
const FETCH_LIMIT = 10

const router = useRouter()
const route = useRoute()

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
```

## エラーハンドリング

### 必須エラーハンドリング

#### 1. SSR時の401エラー（認証エラー）

SSR時に認証エラーが発生した場合、クライアント側で再取得します。

```typescript
if (import.meta.client && error.value) {
  if (error.value.statusCode === 401) {
    return await refresh()
  }
}
```

#### 2. 404エラー（データが見つからない）

```typescript
if (error.value.statusCode === 404) {
  toast.addToast(i18n.t('error.not_found'), 'error')
}
```

#### 3. その他のエラー

```typescript
else {
  toast.addToast(i18n.t('error.data'), 'error')
}
```

### イベントハンドラーのエラーハンドリング

```typescript
const onAction = async () => {
  try {
    await composable.performAction()
    toast.addToast(i18n.t('success.action'), 'success')
  } catch (error) {
    console.error(error)
    toast.addToast(i18n.t('error.action'), 'error')
  }
}
```

### フォーム送信のエラーハンドリング

```typescript
const onSubmit = async (form: FormData) => {
  isSubmitting.value = true

  try {
    const response = await composable.create(form)
    toast.addToast(i18n.t('success.create'), 'success')
    await navigateTo(`/complete/${response.id}`)
  } catch (error: any) {
    console.error(error)

    // 特定のエラーメッセージの処理
    if (error && error.data && error.data.error === '特定のエラー') {
      toast.addToast(i18n.t('error.specific'), 'error')
    } else {
      toast.addToast(i18n.t('error.create'), 'error')
    }
  } finally {
    isSubmitting.value = false
  }
}
```

## SEO対応

### 基本的なSEO設定

```typescript
const i18n = useI18n()

useSeoMeta({
  title: `${i18n.t('seo.title')} | Vket Cloud`,
  description: i18n.t('seo.description'),
})
```

### OGイメージの設定

```typescript
const config = useRuntimeConfig()
const i18n = useI18n()

const isJa = computed(() => i18n.locale.value === 'ja')
const ogImage = computed(() =>
  isJa.value
    ? `${config.public.baseUrl}/images/ogp.png`
    : `${config.public.baseUrl}/images/ogp_en.png`,
)

useSeoMeta({
  title: `${i18n.t('seo.title')} | Vket Cloud`,
  description: i18n.t('seo.description'),
  ogImage: ogImage.value,
})
```

## 実装例

### 例1: シンプルな静的ページ

```vue
<i18n lang="yaml">
ja:
  seo:
    title: ヘルプページ
    description: Vket Cloudのヘルプページです。
en:
  seo:
    title: Help Page
    description: Vket Cloud help page.
</i18n>

<template>
  <HtHelp />
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'public',
})

const i18n = useI18n()

useSeoMeta({
  title: `${i18n.t('seo.title')} | Vket Cloud`,
  description: i18n.t('seo.description'),
})
</script>
```

### 例2: 一覧表示ページ

```vue
<i18n lang="yaml">
ja:
  error:
    data: データ取得に失敗しました。
  seo:
    title: ワールド一覧
    description: 作成したワールドの一覧ページです。
en:
  error:
    data: Failed to obtain data.
  seo:
    title: World List
    description: List of created worlds.
</i18n>

<template>
  <HtAccountWorld
    :isSkeletonLoading="isSkeletonLoading"
    :worldPortals="worldPortals"
    :total="total"
    @movePage="onMovePage"
  />
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'account',
})

const FETCH_LIMIT = 10

const toast = useToast()
const i18n = useI18n()
const worldPortal = useWorldPortal()
provide(worldPortalInjectionKey, worldPortal)

const { worldPortals, total } = worldPortal

const isSkeletonLoading = ref(true)
const offset = ref(0)
const params = ref<{ [key: string]: string }>({})

useSeoMeta({
  title: `${i18n.t('seo.title')} | Vket Cloud`,
  description: i18n.t('seo.description'),
})

useAsyncData(async () => {
  params.value = {
    limit: String(FETCH_LIMIT),
    offset: String(offset.value),
  }

  return await worldPortal.getWorldPortals(params.value)
})
  .then(async ({ data, error, refresh }) => {
    if (import.meta.client && error.value) {
      if (error.value.statusCode === 401) {
        return await refresh()
      } else {
        toast.addToast(i18n.t('error.data'), 'error')
      }
    }

    worldPortal.setState({
      worldPortals: data.value?.worldPortals ?? [],
      total: data.value?.total ?? 0,
    })
  })
  .catch((error) => {
    console.error(error)
    toast.addToast(i18n.t('error.data'), 'error')
  })
  .finally(() => {
    isSkeletonLoading.value = false
  })

const onMovePage = (page: number) => {
  offset.value = (page - 1) * FETCH_LIMIT
  params.value = {
    limit: String(FETCH_LIMIT),
    offset: String(offset.value),
  }

  worldPortal
    .getWorldPortals(params.value)
    .then((response) => {
      worldPortal.setState({
        worldPortals: response.worldPortals ?? [],
        total: response.total ?? 0,
      })
    })
    .catch((error) => {
      console.error(error)
      toast.addToast(i18n.t('error.data'), 'error')
    })
}
</script>
```

### 例3: 詳細表示ページ（動的ルート）

```vue
<i18n lang="yaml">
ja:
  error:
    data: データ取得に失敗しました。
    not_found: ワールドが見つかりませんでした。
  seo:
    title: ワールド詳細
    description: ワールドの詳細ページです。
en:
  error:
    data: Failed to obtain data.
    not_found: World not found.
  seo:
    title: World Detail
    description: World detail page.
</i18n>

<template>
  <HtWorldDetail
    :isSkeletonLoading="isSkeletonLoading"
    :worldPortal="worldPortal"
    @like="onLike"
  />
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'public',
})

const route = useRoute()
const toast = useToast()
const i18n = useI18n()
const worldPortalComposable = useWorldPortal()
provide(worldPortalInjectionKey, worldPortalComposable)

const { worldPortal } = worldPortalComposable

const isSkeletonLoading = ref(true)
const id = String(route.params.id ?? '')

useSeoMeta({
  title: `${i18n.t('seo.title')} | Vket Cloud`,
  description: i18n.t('seo.description'),
})

useAsyncData(async () => {
  return await worldPortalComposable.getWorldPortalDetail(id)
})
  .then(async ({ data, error, refresh }) => {
    if (import.meta.client && error.value) {
      if (error.value.statusCode === 401) {
        return await refresh()
      } else if (error.value.statusCode === 404) {
        toast.addToast(i18n.t('error.not_found'), 'error')
      } else {
        toast.addToast(i18n.t('error.data'), 'error')
      }
    }

    worldPortalComposable.setState({
      worldPortal: data.value?.worldPortal,
    })
  })
  .catch((error) => {
    console.error(error)
    toast.addToast(i18n.t('error.data'), 'error')
  })
  .finally(() => {
    isSkeletonLoading.value = false
  })

const onLike = async (isLike: boolean) => {
  try {
    await worldPortalComposable.worldPortalLike(Number(id), isLike)
  } catch (error) {
    console.error(error)
    const message = isLike
      ? i18n.t('error.like')
      : i18n.t('error.unlike')
    toast.addToast(message, 'error')
  }
}
</script>
```

### 例4: フォームページ（作成・編集）

```vue
<i18n lang="yaml">
ja:
  success:
    create: イベント登録に成功しました
    update: イベント更新に成功しました
  error:
    data: データ取得に失敗しました。
    create: イベントの作成に失敗しました。
    update: イベントの更新に失敗しました。
  seo:
    title: イベント作成
    description: イベントの作成ページです。
en:
  success:
    create: Event Registration Completed!
    update: Event Updated Successfully!
  error:
    data: Failed to obtain data.
    create: Failed to create event.
    update: Failed to update event.
  seo:
    title: Create Event
    description: Create a new event.
</i18n>

<template>
  <HtMyPageEventsCreate
    :isSkeletonLoading="isSkeletonLoading"
    :isSubmitting="isSubmitting"
    :initialData="eventDetail"
    @create="onCreate"
  />
</template>

<script setup lang="ts">
import type { PostEventBody } from '@/models/event'

definePageMeta({
  layout: 'account',
})

const route = useRoute()
const toast = useToast()
const i18n = useI18n()
const event = useEvent()
provide(eventInjectionKey, event)

const { eventDetail } = event

const isSkeletonLoading = ref(true)
const isSubmitting = ref(false)

const id = String(route.params.id ?? '') || undefined
const isEditMode = !!id

useSeoMeta({
  title: `${i18n.t('seo.title')} | Vket Cloud`,
  description: i18n.t('seo.description'),
})

if (isEditMode) {
  useAsyncData(async () => {
    return await event.getEventDetail(id)
  })
    .then(async ({ data, error, refresh }) => {
      if (import.meta.client && error.value) {
        if (error.value.statusCode === 401) {
          return await refresh()
        } else {
          toast.addToast(i18n.t('error.data'), 'error')
        }
      }

      event.setState({
        eventDetail: data.value?.eventDetail,
      })
    })
    .catch((error) => {
      console.error(error)
      toast.addToast(i18n.t('error.data'), 'error')
    })
    .finally(() => {
      isSkeletonLoading.value = false
    })
} else {
  isSkeletonLoading.value = false
}

const onCreate = async (form: PostEventBody) => {
  isSubmitting.value = true

  try {
    if (isEditMode) {
      await event.updateEvent(id, form)
      toast.addToast(i18n.t('success.update'), 'success')
      await navigateTo('/my-page/events/opened')
    } else {
      const response = await event.postEvent({ body: form })
      await navigateTo(`/my-page/events/complete/${response.event.id}`)
      toast.addToast(i18n.t('success.create'), 'success')
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
</script>
```
