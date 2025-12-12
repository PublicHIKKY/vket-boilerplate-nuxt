---
name: nuxt4-pages
description: Generates Nuxt4 page components following standardized patterns with SEO, i18n multilingual support, data fetching, and error handling. Enforces proper page structure including definePageMeta, useSeoMeta, useAsyncData integration, and composable-based state management. Use when creating new pages, refactoring existing pages, or implementing complete page features with consistent architecture.
---

# Nuxt4 Pages Generator

Nuxt4プロジェクトにおける標準化されたページコンポーネントの設計・生成スキル

## 概要

このスキルは、Hikkyプロジェクトの標準化されたページ構造を理解し、適切なパターンを使用してページコンポーネントを生成・リファクタリングするためのガイドラインを提供します。

## ページの種類

### 1. Simple Page - シンプルページ

**役割**: 静的コンテンツ表示、最小限のロジック

**特徴**:
- データフェッチなし
- SEOメタデータの設定
- i18n多言語対応
- Htコンポーネントの使用

**実装例**:
- `index.vue` - トップページ
- `help.vue` - ヘルプページ
- `faq.vue` - FAQページ

**使用テンプレート**: `templates/simple-page.vue`

### 2. List Page - リスト表示ページ

**役割**: データ一覧の表示、検索、フィルタリング、ページネーション

**特徴**:
- useAsyncDataでデータフェッチ
- リスト表示用のComposable統合
- ページネーション対応
- フィルタリング・検索機能

**実装例**:
- `account/world/index.vue` - ワールド一覧
- `account/customer/index.vue` - 顧客一覧
- `my-page/events/opened/index.vue` - イベント一覧

**使用テンプレート**: `templates/list-page.vue`

### 3. Detail Page - 詳細表示ページ

**役割**: 単一データの詳細表示、動的ルート対応

**特徴**:
- 動的ルートパラメータ（`[id]`）
- useAsyncDataで個別データフェッチ
- 詳細表示用のComposable統合
- エラーハンドリング

**実装例**:
- `worlds/[id]/index.vue` - ワールド詳細
- `events/[id]/index.vue` - イベント詳細
- `profiles/[id]/index.vue` - プロフィール詳細

**使用テンプレート**: `templates/detail-page.vue`

### 4. Form Page - フォーム含むページ

**役割**: データ作成・編集、バリデーション、送信処理

**特徴**:
- フォームComposable統合（vee-validate + zod）
- 送信処理とエラーハンドリング
- ローディング状態管理
- 成功時のリダイレクト

**実装例**:
- `account/add.vue` - アカウント登録
- `my-page/events/create/index.vue` - イベント作成
- `account/world/compose.vue` - ワールド作成

**使用テンプレート**: `templates/form-page.vue`

## 標準ページ構造

### 必須要素

#### 1. i18n多言語対応（SEO含む）

```yaml
<i18n lang="yaml">
ja:
  seo:
    title: ページタイトル
    description: ページ説明文
  error:
    data: データ取得に失敗しました。
en:
  seo:
    title: Page Title
    description: Page description
  error:
    data: Failed to obtain data.
</i18n>
```

#### 2. definePageMeta（レイアウト設定）

```typescript
definePageMeta({
  layout: 'account', // または 'public', 'default'
})
```

#### 3. useSeoMeta（SEOメタデータ）

```typescript
useSeoMeta({
  title: `${i18n.t('seo.title')} | Vket Cloud`,
  description: i18n.t('seo.description'),
  ogImage: ogImage.value, // Optional
})
```

#### 4. Composables統合

```typescript
// 基本
const i18n = useI18n()
const toast = useToast()
const route = useRoute()
const router = useRouter()

// カスタムComposables
const event = useEvent()
provide(eventInjectionKey, event)
```

### データフェッチパターン

#### パターン1: 基本的なデータフェッチ

```typescript
// データフェッチ（useAsyncData内はデータ取得のみ）
const { data, error, refresh } = await useAsyncData(
  'data-key',
  async () => {
    const params = { limit: 10 }

    // 並列取得
    const [data1, data2] = await Promise.all([
      api.getData1(params),
      api.getData2(params),
    ])

    return { data1, data2 }
  },
  {
    lazy: import.meta.client, // SSR時: false, クライアント時: true
  }
)

// データをcomposableにセット
if (data.value) {
  composable.setState({
    items: data.value.data1 ?? [],
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

#### パターン2: 動的ルートパラメータでのデータフェッチ

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
  } else {
    toast.addToast(i18n.t('error.data'), 'error')
  }
  isSkeletonLoading.value = false
}
```

### イベントハンドラーパターン

#### パターン1: 非同期送信処理

```typescript
const onCreate = async (form: FormData) => {
  isSubmitting.value = true

  try {
    const response = await composable.create(form)
    await navigateTo(`/success/${response.id}`)
    toast.addToast(i18n.t('success.create'), 'success')
  } catch (error) {
    console.error(error)
    toast.addToast(i18n.t('error.create'), 'error')
  } finally {
    isSubmitting.value = false
  }
}
```

#### パターン2: 認証チェック付きアクション

```typescript
const onLike = async (id: number, isLike: boolean) => {
  if (!auth.isGottenMe.value) {
    loginDialog.openLoginDialog()
    return
  }

  try {
    await composable.like(id, isLike)
  } catch (error) {
    console.error(error)
    const message = isLike
      ? i18n.t('error.like')
      : i18n.t('error.unlike')
    toast.addToast(message, 'error')
  }
}
```

## ファイル配置例

このプロジェクトではNuxt4のルーティング規約に従います。以下は参考例です。

### ディレクトリ構造の例

```
app/pages/
├── index.vue                    # トップページ
├── help.vue                     # 静的ページの例
├── account/
│   ├── add.vue                  # フォームページの例
│   ├── world/
│   │   ├── index.vue            # 一覧ページの例
│   │   └── compose.vue          # 作成ページの例
│   └── admin/
│       ├── plan/
│       │   ├── index.vue        # 一覧の例
│       │   └── payment.vue      # 決済ページの例
│       └── info/
│           ├── index.vue
│           └── [id].vue         # 詳細（動的ルート）の例
└── my-page/
    ├── events/
    │   ├── create/
    │   │   └── index.vue        # 作成ページの例
    │   └── edit/
    │       └── [id]/
    │           └── index.vue    # 編集ページ（動的ルート）の例
    └── profile/
        └── index.vue
```

### 命名パターンの例

プロジェクトのURL構造に応じて柔軟に配置してください。

- **静的ページ**: `{ページ名}.vue` (例: `help.vue`, `faq.vue`)
- **一覧ページ**: `index.vue` (例: `account/world/index.vue`)
- **詳細ページ**: `[id].vue` または `[id]/index.vue` (例: `events/[id].vue`)
- **作成ページ**: `create.vue`, `compose.vue`, `create/index.vue` など
- **編集ページ**: `edit/[id].vue` または `edit/[id]/index.vue`

### 動的ルートの例

- **単一パラメータ**: `[id].vue` または `[id]/index.vue`
- **複数パラメータ**: `[category]/[id].vue`
- **オプショナル**: `[[id]].vue`

## ページ作成ガイドライン

### ステップ1: ページタイプの決定

**質問**:
1. データフェッチが必要ですか？
2. フォームを含みますか？
3. 動的ルートが必要ですか？
4. 一覧表示が必要ですか？

**決定フロー**:
```
フォームあり？ YES → Form Page (templates/form-page.vue)
      ↓ NO
動的ルート？ YES → Detail Page (templates/detail-page.vue)
      ↓ NO
一覧表示？ YES → List Page (templates/list-page.vue)
      ↓ NO
静的コンテンツ → Simple Page (templates/simple-page.vue)
```

### ステップ2: ファイル配置

1. 適切なディレクトリを選択
2. ファイル名を決定（index.vue または {name}.vue）
3. 動的ルートの場合は`[id]`ディレクトリを作成

### ステップ3: テンプレート選択

`templates/`ディレクトリから適切なテンプレートを選択:
- `simple-page.vue` - 静的コンテンツページ
- `list-page.vue` - 一覧表示ページ
- `detail-page.vue` - 詳細表示ページ（動的ルート）
- `form-page.vue` - フォーム含むページ

### ステップ4: 実装

1. テンプレートをコピー
2. i18n翻訳を追加（ja/en）
3. SEOメタデータを設定
4. レイアウトを選択（definePageMeta）
5. Composablesを統合
6. データフェッチロジックを実装
7. イベントハンドラーを実装

## ベストプラクティス

### ✅ DO

- **多言語対応**: 必ずi18nでja/enのSEO情報を定義
- **SEOメタデータ**: useSeoMetaで適切に設定
- **エラーハンドリング**: useAsyncDataのエラー処理を実装
- **401エラー処理**: SSR時の認証エラーをクライアント側で再取得
- **ローディング状態**: isSkeletonLoadingまたはisSubmittingで管理
- **Composable活用**: provide/injectパターンで状態共有
- **型安全**: TypeScript型定義を徹底
- **リダイレクト**: navigateToで適切に遷移

### ❌ DON'T

- **直接API呼び出し**: Repository Factoryを使わず直接APIを呼ぶ
- **グローバル状態**: useStateの不適切な使用（core/以外）
- **ハードコード**: 翻訳文字列のハードコード
- **エラー無視**: try-catchブロックを省略
- **型無し実装**: anyや型定義無しの実装
- **SEO省略**: useSeoMetaの設定を忘れる

## トラブルシューティング

### SSR時に401エラー

**症状**: サーバー側で認証エラーが発生し、データが取得できない

**解決**: クライアント側で再取得するロジックを追加

```typescript
.then(async ({ data, error, refresh }) => {
  if (import.meta.client && error.value) {
    if (error.value.statusCode === 401) {
      return await refresh()
    }
  }
})
```

### ページ遷移後もデータが残る

**原因**: useStateを使用している

**解決**: ref/reactiveを使用（ページレベルではuseStateは使用しない）

### 動的ルートでデータが取得できない

**症状**: `route.params.id`が空

**解決**: useAsyncData内でroute.paramsを参照

```typescript
const route = useRoute()
const id = String(route.params.id ?? '')

useAsyncData(async () => {
  return await api.getDetail(id)
})
```

### i18n翻訳が反映されない

**症状**: `i18n.t()`が正しく動作しない

**解決**: `<i18n lang="yaml">`ブロックを追加し、useI18n()を呼び出す

```typescript
const i18n = useI18n()
```

## レイアウト選択例

プロジェクトのレイアウト構成に応じて適切なレイアウトを選択してください。以下は参考例です。

### レイアウト例1: account

**用途例**: アカウント管理、ユーザー設定などの管理画面

**特徴例**: サイドバー、管理用ヘッダー付き

**使用例**:
```typescript
definePageMeta({
  layout: 'account',
})
```

### レイアウト例2: public

**用途例**: トップページ、ヘルプページなどの公開コンテンツ

**特徴例**: グローバルヘッダー、フッター付き

**使用例**:
```typescript
definePageMeta({
  layout: 'public',
})
```

### レイアウト例3: default

**用途例**: デフォルトレイアウト

**特徴例**: 最小限の構成

**使用例**:
```typescript
definePageMeta({
  layout: 'default',
})
```

プロジェクト固有のレイアウト名と構成は、`app/layouts/`ディレクトリを参照してください。

## テンプレートファイル

`templates/`ディレクトリに各ページタイプのテンプレートファイルを用意しています:

- `simple-page.vue` - シンプルな静的ページテンプレート
- `list-page.vue` - リスト表示ページテンプレート
- `detail-page.vue` - 詳細表示ページテンプレート（動的ルート対応）
- `form-page.vue` - フォーム含むページテンプレート
