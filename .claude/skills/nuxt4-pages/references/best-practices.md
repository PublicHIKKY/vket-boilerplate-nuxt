# Pages実装ベストプラクティス

Nuxt4プロジェクトにおけるページコンポーネントのベストプラクティスとトラブルシューティング

## 目次

1. [ベストプラクティス](#ベストプラクティス)
2. [トラブルシューティング](#トラブルシューティング)
3. [パフォーマンス最適化](#パフォーマンス最適化)
4. [アクセシビリティ](#アクセシビリティ)

## ベストプラクティス

### 1. i18n多言語対応

#### 日本語と英語の両方を定義

```yaml
<i18n lang="yaml">
ja:
  seo:
    title: ページタイトル
    description: ページの説明文
  error:
    data: データ取得に失敗しました。
  success:
    create: 登録に成功しました
en:
  seo:
    title: Page Title
    description: Page description
  error:
    data: Failed to obtain data.
  success:
    create: Successfully created
</i18n>
```

### 2. SEOメタデータ

#### タイトルと説明文を必ず設定

```typescript
const i18n = useI18n()

useSeoMeta({
  title: `${i18n.t('seo.title')} | Vket Cloud`,
  description: i18n.t('seo.description'),
})
```

### 3. データフェッチ

#### useAsyncDataでデータフェッチ（lazy: import.meta.client使用）

```typescript
// データフェッチ（useAsyncData内はデータ取得のみ）
const { data, error, refresh } = await useAsyncData(
  'data-key',
  async () => {
    // データ取得のみ
    return await composable.getData()
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

// エラーハンドリング
if (import.meta.client && error.value) {
  if (error.value.statusCode === 401) {
    await refresh()
  } else {
    toast.addToast(i18n.t('error.data'), 'error')
  }
  isSkeletonLoading.value = false
}
```

### 4. エラーハンドリング

#### 401エラーの特別処理

```typescript
if (import.meta.client && error.value) {
  if (error.value.statusCode === 401) {
    await refresh()
  } else {
    toast.addToast(i18n.t('error.data'), 'error')
    isSkeletonLoading.value = false
  }
}
```

### 5. ローディング状態管理

#### スケルトンローディングの更新

```typescript
const isSkeletonLoading = ref(true)

// データフェッチ
const { data, error, refresh } = await useAsyncData(
  'data-key',
  async () => {
    // データ取得のみ
    return await composable.getData()
  },
  { lazy: import.meta.client }
)

// データをcomposableにセット＆ローディング解除
if (data.value) {
  composable.setState({ items: data.value.items ?? [] })
  isSkeletonLoading.value = false
}

// エラー時もローディング解除
if (import.meta.client && error.value) {
  isSkeletonLoading.value = false
}
```

### 6. Composables統合

#### provide/injectパターンの使用

```typescript
const composable = useComposable()
provide(composableInjectionKey, composable)

// 子コンポーネントやcomposable内で使用
const { items, total } = composable
```

### 7. フォーム送信

#### 送信中フラグの使用

```typescript
const isSubmitting = ref(false)

const onSubmit = async (form: FormData) => {
  isSubmitting.value = true

  try {
    await composable.create(form)
    toast.addToast(i18n.t('success.create'), 'success')
  } catch (error) {
    console.error(error)
    toast.addToast(i18n.t('error.create'), 'error')
  } finally {
    isSubmitting.value = false
  }
}
```

## トラブルシューティング

### 問題1: SSR時に401エラーが発生してデータが取得できない

**症状**: サーバー側で認証エラーが発生し、ページが正しく表示されない

**原因**: SSR時に認証情報が利用できない

**解決策**: クライアント側で再取得するロジックを追加

```typescript
.then(async ({ data, error, refresh }) => {
  if (import.meta.client && error.value) {
    if (error.value.statusCode === 401) {
      return await refresh()
    }
  }
})
```

### 問題2: ページ遷移後も前のページのデータが残っている

**症状**: 別のページに遷移しても、前のページのデータが表示される

**原因**: useStateを使用している、またはComposableがグローバルに保持されている

**解決策**: ref/reactiveを使用し、ページごとに新しいインスタンスを作成

```typescript
// ✅ 正しい
const composable = useComposable()
provide(composableInjectionKey, composable)

// ❌ 間違い
const composable = useState('composable', () => useComposable())
```

### 問題3: 動的ルートでパラメータが取得できない

**症状**: `route.params.id`が空になる

**原因**: useAsyncData外でroute.paramsを参照している

**解決策**: useAsyncData内でroute.paramsを参照

```typescript
const route = useRoute()
const id = String(route.params.id ?? '')

useAsyncData(async () => {
  // useAsyncData内でidを使用
  return await composable.getDetail(id)
})
```

### 問題4: i18n翻訳が反映されない

**症状**: `i18n.t()`で翻訳が取得できない

**原因**: `<i18n lang="yaml">`ブロックが定義されていない、またはuseI18n()を呼び出していない

**解決策**:

```typescript
// 1. i18nブロックを追加
<i18n lang="yaml">
ja:
  seo:
    title: タイトル
en:
  seo:
    title: Title
</i18n>

// 2. useI18n()を呼び出す
const i18n = useI18n()
```

### 問題5: データフェッチが二重に実行される

**症状**: useAsyncDataとonMounted両方でデータフェッチが実行される

**原因**: useAsyncDataとonMountedで重複したデータフェッチ

**解決策**: useAsyncDataのみを使用

```typescript
// ✅ 正しい
useAsyncData(async () => {
  return await composable.getData()
})

// ❌ 間違い - useAsyncDataとonMountedの両方で実行
useAsyncData(async () => {
  return await composable.getData()
})

onMounted(async () => {
  await composable.getData() // 重複
})
```

### 問題6: エラーメッセージが表示されない

**症状**: エラーが発生してもユーザーに通知されない

**原因**: toastを呼び出していない、またはエラーハンドリングが不足

**解決策**: 適切なエラーハンドリングを実装

```typescript
try {
  await composable.create(form)
  toast.addToast(i18n.t('success.create'), 'success')
} catch (error) {
  console.error(error)
  toast.addToast(i18n.t('error.create'), 'error')
}
```

## パフォーマンス最適化

### 1. データフェッチの並列化

複数のデータソースがある場合、Promise.allを使用して並列に取得します。

```typescript
// データフェッチ
const { data, error, refresh } = await useAsyncData(
  'multi-data',
  async () => {
    // 並列取得のみ
    const [data1, data2, data3] = await Promise.all([
      composable.getData1(),
      composable.getData2(),
      composable.getData3(),
    ])

    return { data1, data2, data3 }
  },
  { lazy: import.meta.client }
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
```

### 2. 不要なデータフェッチの回避

条件付きでデータフェッチを実行し、不要なAPIリクエストを避けます。

```typescript
const isEditMode = !!id

if (isEditMode) {
  // データフェッチ
  const { data, error, refresh } = await useAsyncData(
    'form-detail',
    async () => {
      // データ取得のみ
      return await composable.getDetail(id)
    },
    { lazy: import.meta.client }
  )

  // データをcomposableにセット
  if (data.value) {
    composable.setState({ initialData: data.value.detail })
    isSkeletonLoading.value = false
  }
} else {
  isSkeletonLoading.value = false
}
```

### 3. スケルトンローディングの活用

データフェッチ中にスケルトンを表示し、ユーザー体験を向上させます。

```typescript
const isSkeletonLoading = ref(true)

// データフェッチ
const { data, error, refresh } = await useAsyncData(
  'data-key',
  async () => {
    // データ取得のみ
    return await composable.getData()
  },
  { lazy: import.meta.client }
)

// データをcomposableにセット＆ローディング解除
if (data.value) {
  composable.setState({ items: data.value.items ?? [] })
  isSkeletonLoading.value = false
}

// エラー時もローディング解除
if (import.meta.client && error.value) {
  isSkeletonLoading.value = false
}
```

### 4. computedの活用

リアクティブな値から派生する値はcomputedを使用します。

```typescript
const config = useRuntimeConfig()
const i18n = useI18n()

const isJa = computed(() => i18n.locale.value === 'ja')
const ogImage = computed(() =>
  isJa.value
    ? `${config.public.baseUrl}/images/ogp.png`
    : `${config.public.baseUrl}/images/ogp_en.png`,
)
```

## アクセシビリティ

### 1. SEOメタデータの設定

すべてのページで適切なSEOメタデータを設定します。

```typescript
useSeoMeta({
  title: `${i18n.t('seo.title')} | Vket Cloud`,
  description: i18n.t('seo.description'),
})
```

### 2. 多言語対応

日本語と英語の両方に対応し、すべてのテキストを翻訳します。

```yaml
<i18n lang="yaml">
ja:
  seo:
    title: ページタイトル
en:
  seo:
    title: Page Title
</i18n>
```

### 3. エラーメッセージのユーザーフレンドリー化

エラーメッセージは具体的で、ユーザーが理解しやすい内容にします。

```typescript
// ✅ 良い例
toast.addToast(i18n.t('error.data'), 'error') // "データ取得に失敗しました。"

// ❌ 悪い例
toast.addToast('Error', 'error') // 何のエラーか不明
```

### 4. ローディング状態の明示

データフェッチ中やフォーム送信中は、ローディング状態を明示します。

```typescript
<template>
  <HtPage
    :isSkeletonLoading="isSkeletonLoading"
    :isSubmitting="isSubmitting"
  />
</template>
```

## まとめ

### 重要なポイント

1. **useAsyncData + lazy: import.meta.client**
   - SSR/SPA遷移の最適化
   - **useAsyncData内はデータ取得のみ** - 状態更新は外で行う
   - useAsyncDataの戻り値（data）を使って後続処理で状態更新
   - awaitパターン使用（thenチェーンは使わない）

2. **クエリパラメータベースのリスト再取得**
   - watchオプションで`[() => route.query]`を監視
   - イベントハンドラーではrouter.pushでクエリ更新のみ

3. **エラーハンドリング**
   - 401エラーは`refresh()`で再取得
   - エラー時は`isSkeletonLoading = false`も実行

4. **state管理**
   - provide/injectパターンでComposables共有
   - `if (data.value)`でデータセット後に状態更新

5. **パフォーマンス**
   - Promise.allで並列取得
   - 条件付きフェッチで不要なリクエスト回避

6. **i18n + SEO**
   - ja/en両方を定義
   - useSeoMetaで必ずタイトル・説明文設定
