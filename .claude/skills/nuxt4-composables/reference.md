# Nuxt4 Composables 詳細リファレンス

最新のアーキテクチャ（Repository Factory + vee-validate + zod）に基づく詳細な実装ガイドとベストプラクティス集

## 目次

- [1. レイヤー詳細解説](#1-レイヤー詳細解説)
  - [1.1 core/層 - グローバル汎用処理](#11-core層---グローバル汎用処理)
  - [1.2 ui/層 - UI状態管理](#12-ui層---ui状態管理)
  - [1.3 form/層 - vee-validate + zodフォーム管理](#13-form層---vee-validate--zodフォーム管理)
  - [1.4 ルート層 - Repository Factory統合](#14-ルート層---repository-factory統合)
  - [1.5 UI状態の切り出し判断](#15-ui状態の切り出し判断)
- [2. エッジケース対処法](#2-エッジケース対処法)
- [3. パフォーマンス最適化](#3-パフォーマンス最適化)
- [4. トラブルシューティング詳細](#4-トラブルシューティング詳細)
- [5. テストパターン](#5-テストパターン)

---

## 1. レイヤー詳細解説

### 1.1 core/層 - グローバル汎用処理

**特徴:**
- アプリケーション全体で使用する基盤機能
- useStateを使用した永続的なグローバル状態
- InjectionKey不要（どこからでも直接呼び出し可能）

#### 実装例1: 認証管理（useAuth）

```typescript
// composables/core/useAuth.ts
export const useAuth = () => {
  const user = useState<User | null>('auth-user', () => null)
  const token = useState<string | null>('auth-token', () => null)

  const isAuthenticated = computed(() => !!user.value)
  const isAdmin = computed(() => user.value?.role === 'admin')

  const login = async (credentials: LoginCredentials) => {
    try {
      const { user: userData, token: authToken } = await $fetch('/api/auth/login', {
        method: 'POST',
        body: credentials
      })
      user.value = userData
      token.value = authToken

      // トークンをlocalStorageに保存（オプション）
      if (process.client) {
        localStorage.setItem('auth_token', authToken)
      }
    } catch (error) {
      console.error('Login failed:', error)
      throw error
    }
  }

  const logout = async () => {
    try {
      await $fetch('/api/auth/logout', { method: 'POST' })
    } finally {
      user.value = null
      token.value = null
      if (process.client) {
        localStorage.removeItem('auth_token')
      }
    }
  }

  const refreshAuth = async () => {
    try {
      const { user: userData } = await $fetch('/api/auth/me')
      user.value = userData
    } catch {
      await logout()
    }
  }

  return {
    user: readonly(user),
    token: readonly(token),
    isAuthenticated,
    isAdmin,
    login,
    logout,
    refreshAuth
  }
}
```

#### 実装例2: トースト通知（useToast）

```typescript
// composables/core/useToast.ts
interface Toast {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  message: string
  duration?: number
}

export const useToast = () => {
  const toasts = useState<Toast[]>('toasts', () => [])

  const add = (toast: Omit<Toast, 'id'>) => {
    const id = Date.now().toString()
    toasts.value.push({ ...toast, id })

    if (toast.duration !== 0) {
      setTimeout(() => {
        remove(id)
      }, toast.duration || 3000)
    }
  }

  const remove = (id: string) => {
    toasts.value = toasts.value.filter(t => t.id !== id)
  }

  const success = (message: string, duration?: number) => {
    add({ type: 'success', message, duration })
  }

  const error = (message: string, duration?: number) => {
    add({ type: 'error', message, duration })
  }

  const warning = (message: string, duration?: number) => {
    add({ type: 'warning', message, duration })
  }

  const info = (message: string, duration?: number) => {
    add({ type: 'info', message, duration })
  }

  const clear = () => {
    toasts.value = []
  }

  return {
    toasts: readonly(toasts),
    success,
    error,
    warning,
    info,
    clear,
    remove
  }
}
```

---

### 1.2 ui/層 - UI状態管理

**特徴:**
- コンポーネント間で共有するUI状態のみを管理
- API呼び出しは含まない
- InjectionKey必須

#### 実装例1: フィルター状態（複雑版）

```typescript
// composables/ui/useBlogFilter.ts
import type { InjectionKey } from 'vue'

interface BlogFilterParams {
  keyword?: string
  categoryId?: string
  tagIds?: string[]
  status?: 'draft' | 'published' | 'archived'
  dateFrom?: string
  dateTo?: string
  sortBy?: 'createdAt' | 'updatedAt' | 'title'
  sortOrder?: 'asc' | 'desc'
  page?: number
  limit?: number
}

export const useBlogFilter = () => {
  const params = ref<BlogFilterParams>({
    keyword: '',
    categoryId: '',
    tagIds: [],
    status: undefined,
    dateFrom: undefined,
    dateTo: undefined,
    sortBy: 'createdAt',
    sortOrder: 'desc',
    page: 1,
    limit: 20
  })

  // 変更があったか追跡
  const isDirty = ref(false)
  const initialParams = ref<BlogFilterParams>({ ...params.value })

  // フィルターが適用されているか
  const isFiltered = computed(() => {
    return !!(
      params.value.keyword ||
      params.value.categoryId ||
      params.value.tagIds?.length ||
      params.value.status ||
      params.value.dateFrom ||
      params.value.dateTo
    )
  })

  // URLクエリパラメータに変換
  const queryParams = computed(() => {
    const query: Record<string, string> = {}

    if (params.value.keyword) query.keyword = params.value.keyword
    if (params.value.categoryId) query.categoryId = params.value.categoryId
    if (params.value.tagIds?.length) query.tagIds = params.value.tagIds.join(',')
    if (params.value.status) query.status = params.value.status
    if (params.value.dateFrom) query.dateFrom = params.value.dateFrom
    if (params.value.dateTo) query.dateTo = params.value.dateTo
    if (params.value.sortBy) query.sortBy = params.value.sortBy
    if (params.value.sortOrder) query.sortOrder = params.value.sortOrder
    if (params.value.page) query.page = params.value.page.toString()
    if (params.value.limit) query.limit = params.value.limit.toString()

    return query
  })

  const setKeyword = (value: string) => {
    params.value.keyword = value
    params.value.page = 1 // キーワード変更時はページをリセット
    isDirty.value = true
  }

  const setCategory = (categoryId: string) => {
    params.value.categoryId = categoryId
    params.value.page = 1
    isDirty.value = true
  }

  const toggleTag = (tagId: string) => {
    const index = params.value.tagIds?.indexOf(tagId) ?? -1
    if (index === -1) {
      params.value.tagIds = [...(params.value.tagIds || []), tagId]
    } else {
      params.value.tagIds = params.value.tagIds?.filter(id => id !== tagId)
    }
    params.value.page = 1
    isDirty.value = true
  }

  const setDateRange = (from?: string, to?: string) => {
    params.value.dateFrom = from
    params.value.dateTo = to
    params.value.page = 1
    isDirty.value = true
  }

  const setSort = (sortBy: BlogFilterParams['sortBy'], sortOrder: BlogFilterParams['sortOrder']) => {
    params.value.sortBy = sortBy
    params.value.sortOrder = sortOrder
    isDirty.value = true
  }

  const setPage = (page: number) => {
    params.value.page = page
    isDirty.value = true
  }

  const reset = () => {
    params.value = { ...initialParams.value }
    isDirty.value = false
  }

  const clear = () => {
    params.value = {
      keyword: '',
      categoryId: '',
      tagIds: [],
      status: undefined,
      dateFrom: undefined,
      dateTo: undefined,
      sortBy: 'createdAt',
      sortOrder: 'desc',
      page: 1,
      limit: 20
    }
    isDirty.value = true
  }

  return {
    params: readonly(params),
    queryParams,
    isDirty: readonly(isDirty),
    isFiltered,
    setKeyword,
    setCategory,
    toggleTag,
    setDateRange,
    setSort,
    setPage,
    reset,
    clear
  }
}

export type BlogFilterComposable = ReturnType<typeof useBlogFilter>
export const blogFilterInjectionKey: InjectionKey<BlogFilterComposable> = Symbol('blog-filter')
```

#### 実装例2: モーダル管理（複数モーダル対応）

```typescript
// composables/ui/useBlogModal.ts
import type { InjectionKey } from 'vue'

type ModalType = 'create' | 'edit' | 'delete' | 'preview'

interface ModalState {
  type: ModalType | null
  isOpen: boolean
  data: any
}

export const useBlogModal = () => {
  const state = ref<ModalState>({
    type: null,
    isOpen: false,
    data: null
  })

  const open = (type: ModalType, data?: any) => {
    state.value = {
      type,
      isOpen: true,
      data: data || null
    }
  }

  const close = () => {
    state.value = {
      type: null,
      isOpen: false,
      data: null
    }
  }

  const isType = (type: ModalType) => {
    return state.value.type === type && state.value.isOpen
  }

  // ショートカットメソッド
  const openCreate = () => open('create')
  const openEdit = (data: any) => open('edit', data)
  const openDelete = (data: any) => open('delete', data)
  const openPreview = (data: any) => open('preview', data)

  return {
    state: readonly(state),
    isOpen: computed(() => state.value.isOpen),
    currentType: computed(() => state.value.type),
    data: computed(() => state.value.data),
    open,
    close,
    isType,
    openCreate,
    openEdit,
    openDelete,
    openPreview
  }
}

export type BlogModalComposable = ReturnType<typeof useBlogModal>
export const blogModalInjectionKey: InjectionKey<BlogModalComposable> = Symbol('blog-modal')
```

---

### 1.3 form/層 - vee-validate + zodフォーム管理

**特徴:**
- vee-validateとzodを使用したフォーム管理
- バリデーションロジックを内包（別Composable不要）
- InjectionKey必須

#### 実装例: 複雑なバリデーション付きフォーム

```typescript
// composables/form/useBlogForm.ts
import type { InjectionKey } from 'vue'
import { useForm } from 'vee-validate'
import { z } from 'zod'

interface BlogFormData {
  title: string
  slug: string
  content: string
  excerpt: string
  categoryId: string
  tagIds: string[]
  featuredImage?: string
  status: 'draft' | 'published'
  publishedAt?: string
  seoTitle?: string
  seoDescription?: string
  allowComments: boolean
}

export const useBlogForm = () => {
  // zodバリデーションスキーマ
  const validationSchema = z.object({
    title: z.string()
      .min(5, 'タイトルは5文字以上必要です')
      .max(100, 'タイトルは100文字以内で入力してください'),

    slug: z.string()
      .regex(/^[a-z0-9-]+$/, 'スラッグは半角英数字とハイフンのみ使用できます')
      .refine(async (value) => {
        // API呼び出しで重複チェック（デバウンス推奨）
        try {
          const { exists } = await $fetch(`/api/blog/slug-exists?slug=${value}`)
          return !exists
        } catch {
          return true
        }
      }, 'このスラッグは既に使用されています'),

    content: z.string()
      .min(100, '本文は100文字以上必要です'),

    excerpt: z.string()
      .max(200, '抜粋は200文字以内で入力してください')
      .optional(),

    categoryId: z.string()
      .min(1, 'カテゴリーは必須です'),

    tagIds: z.array(z.string())
      .min(1, '最低1つのタグを選択してください')
      .max(5, 'タグは5つまで選択できます'),

    featuredImage: z.string()
      .url('有効なURLを入力してください')
      .optional(),

    status: z.enum(['draft', 'published']),

    publishedAt: z.string()
      .optional()
      .refine((val, ctx) => {
        // statusがpublishedの場合は必須
        const status = ctx.parent?.status
        if (status === 'published' && !val) {
          return false
        }
        return true
      }, '公開日時は必須です'),

    seoTitle: z.string()
      .max(60, 'SEOタイトルは60文字以内で入力してください')
      .optional(),

    seoDescription: z.string()
      .max(160, 'SEO説明文は160文字以内で入力してください')
      .optional(),

    allowComments: z.boolean()
  })

  const {
    values: formData,
    errors,
    isSubmitting,
    handleSubmit,
    resetForm,
    setValues,
    setFieldValue,
    setFieldError,
    validate,
    validateField
  } = useForm<BlogFormData>({
    validationSchema,
    initialValues: {
      title: '',
      slug: '',
      content: '',
      excerpt: '',
      categoryId: '',
      tagIds: [],
      featuredImage: '',
      status: 'draft',
      publishedAt: '',
      seoTitle: '',
      seoDescription: '',
      allowComments: true
    }
  })

  const isDirty = ref(false)
  const originalData = ref<Partial<BlogFormData>>({})

  // タイトルからスラッグを自動生成
  const generateSlug = () => {
    if (!formData.value.title) return

    const slug = formData.value.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')

    setFieldValue('slug', slug)
  }

  // タイトルからSEOタイトルを自動生成
  const generateSeoTitle = () => {
    if (!formData.value.title) return
    setFieldValue('seoTitle', formData.value.title)
  }

  // 抜粋からSEO説明文を自動生成
  const generateSeoDescription = () => {
    if (!formData.value.excerpt) return
    const description = formData.value.excerpt.slice(0, 160)
    setFieldValue('seoDescription', description)
  }

  const setInitialData = (data: BlogFormData) => {
    setValues(data)
    originalData.value = { ...data }
    isDirty.value = false
  }

  const reset = () => {
    if (Object.keys(originalData.value).length > 0) {
      setValues(originalData.value as BlogFormData)
    } else {
      resetForm()
    }
    isDirty.value = false
  }

  const clear = () => {
    resetForm()
    originalData.value = {}
    isDirty.value = false
  }

  const updateField = (field: string, value: any) => {
    setFieldValue(field, value)
    isDirty.value = true
  }

  // 変更監視
  watch(formData, () => {
    isDirty.value = true
  }, { deep: true })

  // フィールド別バリデーション実行
  const validateFormField = async (field: keyof BlogFormData) => {
    const result = await validateField(field)
    return result.valid
  }

  // 全体バリデーション実行
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
    validateFormField,
    setFieldError,

    // ユーティリティ
    generateSlug,
    generateSeoTitle,
    generateSeoDescription
  }
}

export type BlogFormComposable = ReturnType<typeof useBlogForm>
export const blogFormInjectionKey: InjectionKey<BlogFormComposable> = Symbol('blog-form')
```

---

### 1.4 ルート層 - Repository Factory統合

**特徴:**
- Repository Factoryを使用したAPI呼び出し
- データの保持とキャッシング
- ui/form/の統合
- InjectionKey必須

#### 実装例: 一覧管理（楽観的更新対応）

```typescript
// composables/useBlogList.ts
import type { InjectionKey } from 'vue'

export const useBlogList = () => {
  // Repository Factory経由でAPIにアクセス
  const { $repository } = useNuxtApp()
  const repository = $repository.blog

  // UI状態層
  const filter = useBlogFilter()
  const modal = useBlogModal()

  // Core層
  const toast = useToast()

  // データを保持
  const posts = ref<BlogPost[]>([])
  const total = ref(0)
  const loading = ref(false)
  const error = ref<Error | null>(null)

  // キャッシュ管理
  const cache = new Map<string, { data: BlogPost[], timestamp: number }>()
  const CACHE_DURATION = 5 * 60 * 1000 // 5分

  /**
   * データの読み込み（キャッシュ対応）
   */
  const loadPosts = async (useCache = true) => {
    loading.value = true
    error.value = null

    // キャッシュキー生成
    const cacheKey = JSON.stringify(filter.queryParams.value)

    // キャッシュチェック
    if (useCache) {
      const cached = cache.get(cacheKey)
      if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
        posts.value = cached.data
        loading.value = false
        return
      }
    }

    try {
      const response = await repository.fetchPosts(filter.params.value)
      posts.value = response.data
      total.value = response.total

      // キャッシュに保存
      cache.set(cacheKey, {
        data: response.data,
        timestamp: Date.now()
      })
    } catch (e) {
      error.value = e as Error
      toast.error('投稿の読み込みに失敗しました')
    } finally {
      loading.value = false
    }
  }

  /**
   * データの再読み込み（キャッシュをクリア）
   */
  const refresh = () => {
    cache.clear()
    return loadPosts(false)
  }

  /**
   * 投稿の削除（楽観的更新）
   */
  const deletePost = async (id: string) => {
    // 楽観的更新：UIを先に更新
    const originalPosts = [...posts.value]
    posts.value = posts.value.filter(post => post.id !== id)
    total.value -= 1

    try {
      await repository.deletePost(id)
      toast.success('投稿を削除しました')
      cache.clear() // キャッシュをクリア
      return true
    } catch (e) {
      // エラー時はロールバック
      posts.value = originalPosts
      total.value += 1
      error.value = e as Error
      toast.error('削除に失敗しました')
      return false
    }
  }

  /**
   * フィルター変更時の自動読み込み
   */
  watch(
    () => filter.queryParams.value,
    () => {
      loadPosts()
    },
    { deep: true }
  )

  return {
    // データ
    posts: readonly(posts),
    total: readonly(total),
    loading: readonly(loading),
    error: readonly(error),

    // 子composable
    filter,
    modal,

    // 操作
    loadPosts,
    refresh,
    deletePost
  }
}

export type BlogListComposable = ReturnType<typeof useBlogList>
export const blogListInjectionKey: InjectionKey<BlogListComposable> = Symbol('blog-list')
```

---

## 1.5 UI状態の切り出し判断

UI関連の状態管理をVueファイル内に書くか、composableとして切り出すかの判断基準を明確にします。

### Vueファイル内で管理すべきケース

以下の条件を満たす場合は、Vueファイル内（`<script setup>`）で管理します：

**判断基準:**
- ✅ 単一コンポーネント専用の状態
- ✅ 親子間の通信がprops/emitsで完結する
- ✅ ロジックがシンプル（10行以内程度）
- ✅ 他のコンポーネントで再利用しない

**具体例:**

```vue
<!-- BlogListItem.vue -->
<template>
  <div @mouseenter="isHovered = true" @mouseleave="isHovered = false">
    <!-- ホバー時のスタイル適用 -->
  </div>
</template>

<script setup>
// ✅ Vueファイル内で十分（単純なホバー状態）
const isHovered = ref(false)
</script>
```

```vue
<!-- BlogDetailTabs.vue -->
<script setup>
// ✅ Vueファイル内で十分（シンプルなタブ切り替え）
const selectedTab = ref('overview')
const switchTab = (tab: string) => {
  selectedTab.value = tab
}
</script>
```

```vue
<!-- BlogCard.vue -->
<script setup>
// ✅ Vueファイル内で十分（コンポーネント内完結）
const isExpanded = ref(false)
const toggle = () => { isExpanded.value = !isExpanded.value }
</script>
```

### composableとして切り出すべきケース

以下のいずれかに該当する場合は、`ui/use○○○.ts`として切り出します：

**判断基準:**
- ✅ 複数のコンポーネントで再利用する
- ✅ provide/injectで孫コンポーネントにも共有する必要がある
- ✅ ロジックが複雑で単独テストしたい（20行以上、複数関数、computedなど）
- ✅ 機能として独立性が高い（モーダル管理、フィルター管理など）

**具体例1: 複数コンポーネントで再利用**

```typescript
// ✅ composables/ui/useBlogModal.ts として切り出す
// 理由: BlogList.vue、BlogDetail.vue、BlogEditor.vueで使用
export const useBlogModal = () => {
  const state = ref<ModalState>({
    type: null,
    isOpen: false,
    data: null
  })

  const openCreate = () => {
    state.value = { type: 'create', isOpen: true, data: null }
  }

  const openEdit = (id: string) => {
    state.value = { type: 'edit', isOpen: true, data: { id } }
  }

  const openDelete = (id: string) => {
    state.value = { type: 'delete', isOpen: true, data: { id } }
  }

  const close = () => {
    state.value = { type: null, isOpen: false, data: null }
  }

  return { state, openCreate, openEdit, openDelete, close }
}

export type BlogModalComposable = ReturnType<typeof useBlogModal>
export const blogModalInjectionKey: InjectionKey<BlogModalComposable> = Symbol('blog-modal')
```

**具体例2: 複雑なロジック**

```typescript
// ✅ composables/ui/useBlogFilter.ts として切り出す
// 理由: デバウンス、バリデーション、URL同期など複雑なロジック
export const useBlogFilter = () => {
  const params = ref<BlogFilterParams>({
    keyword: '',
    categoryId: '',
    tagIds: [],
    status: undefined,
    sortBy: 'createdAt',
    sortOrder: 'desc',
    page: 1,
    limit: 20
  })

  // デバウンス処理
  const setKeyword = useDebounceFn((value: string) => {
    params.value.keyword = value
    params.value.page = 1 // キーワード変更時はページリセット
  }, 300)

  // バリデーション付き設定
  const setCategory = (id: string) => {
    if (!id) return
    params.value.categoryId = id
    params.value.page = 1
  }

  // 複数選択
  const toggleTag = (tagId: string) => {
    const index = params.value.tagIds.indexOf(tagId)
    if (index === -1) {
      params.value.tagIds.push(tagId)
    } else {
      params.value.tagIds.splice(index, 1)
    }
    params.value.page = 1
  }

  // URLクエリ生成（computed）
  const queryParams = computed(() => {
    const query: Record<string, string> = {}
    if (params.value.keyword) query.keyword = params.value.keyword
    if (params.value.categoryId) query.category = params.value.categoryId
    if (params.value.tagIds.length) query.tags = params.value.tagIds.join(',')
    // ... その他のパラメータ
    return query
  })

  const reset = () => {
    params.value = {
      keyword: '',
      categoryId: '',
      tagIds: [],
      status: undefined,
      sortBy: 'createdAt',
      sortOrder: 'desc',
      page: 1,
      limit: 20
    }
  }

  return {
    params: readonly(params),
    queryParams,
    setKeyword,
    setCategory,
    toggleTag,
    reset
  }
}

export type BlogFilterComposable = ReturnType<typeof useBlogFilter>
export const blogFilterInjectionKey: InjectionKey<BlogFilterComposable> = Symbol('blog-filter')
```

**具体例3: provide/injectで孫に共有**

```typescript
// ✅ composables/ui/useBlogSelection.ts として切り出す
// 理由: BlogList → BlogListItem → BlogListItemActions と深い階層で共有
export const useBlogSelection = () => {
  const selectedIds = ref<Set<string>>(new Set())

  const isSelected = (id: string) => selectedIds.value.has(id)

  const toggle = (id: string) => {
    if (selectedIds.value.has(id)) {
      selectedIds.value.delete(id)
    } else {
      selectedIds.value.add(id)
    }
  }

  const selectAll = (ids: string[]) => {
    selectedIds.value = new Set(ids)
  }

  const clearSelection = () => {
    selectedIds.value.clear()
  }

  const selectedCount = computed(() => selectedIds.value.size)

  return {
    selectedIds: readonly(selectedIds),
    selectedCount,
    isSelected,
    toggle,
    selectAll,
    clearSelection
  }
}

export type BlogSelectionComposable = ReturnType<typeof useBlogSelection>
export const blogSelectionInjectionKey: InjectionKey<BlogSelectionComposable> = Symbol('blog-selection')
```

### 判断フローチャート

```
UI状態が必要
  │
  ├─ 他のコンポーネントでも使う？
  │   YES → composableに切り出す（ui/use○○○.ts）
  │   NO  ↓
  │
  ├─ 孫コンポーネントにも共有する？（provide/inject必要？）
  │   YES → composableに切り出す（ui/use○○○.ts）
  │   NO  ↓
  │
  ├─ ロジックが複雑？（20行以上、複数の関数、computed使用など）
  │   YES → composableに切り出す（テスタビリティ向上）
  │   NO  ↓
  │
  ├─ 単独でテストしたい？
  │   YES → composableに切り出す
  │   NO  ↓
  │
  └─ Vueファイル内でOK（<script setup>内で完結）
```

### 実践的なアプローチ

**基本方針: まずVueファイル内に書く → 必要になったらcomposableに切り出す**

過度な抽象化は避けつつ、実際に以下のタイミングでリファクタリングします：

1. **2つ目のコンポーネントで同じロジックが必要になった** → composableに切り出し
2. **ロジックが20行を超えて複雑になった** → composableに切り出し
3. **単独でテストしたくなった** → composableに切り出し
4. **孫コンポーネントに渡す必要が出た** → composableに切り出し

**リファクタリング例:**

```typescript
// 最初: BlogList.vue内で管理
const isModalOpen = ref(false)
const openModal = () => { isModalOpen.value = true }

// ↓ BlogDetail.vueでも必要になった

// リファクタリング後: composables/ui/useBlogModal.ts に切り出し
export const useBlogModal = () => {
  const isOpen = ref(false)
  const open = () => { isOpen.value = true }
  const close = () => { isOpen.value = false }
  return { isOpen, open, close }
}
```

---

## 2. エッジケース対処法

### 2.1 同時編集の競合

```typescript
// composables/useBlogEditor.ts（競合検出付き）
export const useBlogEditor = () => {
  const { $repository } = useNuxtApp()
  const repository = $repository.blog

  const post = ref<BlogPost | null>(null)
  const version = ref<number>(0) // バージョン管理

  const form = useBlogForm()
  const toast = useToast()

  const loadPost = async (id: string) => {
    try {
      const data = await repository.fetchPost(id)
      post.value = data
      version.value = data.version || 0
      form.setInitialData(data)
    } catch (e) {
      toast.error('投稿の読み込みに失敗しました')
    }
  }

  const save = async () => {
    const isValid = await form.validateForm()
    if (!isValid) {
      toast.error('入力内容を確認してください')
      return false
    }

    try {
      // バージョンを含めて送信
      const response = await repository.updatePost(post.value!.id, {
        ...form.formData.value,
        version: version.value
      })

      // 成功時はバージョンを更新
      version.value = response.version
      post.value = response
      form.setInitialData(response)
      toast.success('保存しました')
      return true
    } catch (e: any) {
      if (e.statusCode === 409) {
        // 競合エラー
        toast.error('他のユーザーが編集しています。ページを再読み込みしてください')
      } else {
        toast.error('保存に失敗しました')
      }
      return false
    }
  }

  return {
    post: readonly(post),
    form,
    loadPost,
    save
  }
}
```

### 2.2 ネットワークエラー対応

```typescript
// リトライ機能付きリポジトリ
export const useBlogListWithRetry = () => {
  const MAX_RETRIES = 3
  const RETRY_DELAY = 1000

  const { $repository } = useNuxtApp()
  const repository = $repository.blog
  const toast = useToast()

  const posts = ref<BlogPost[]>([])
  const loading = ref(false)
  const retryCount = ref(0)

  const loadPostsWithRetry = async () => {
    loading.value = true
    retryCount.value = 0

    while (retryCount.value < MAX_RETRIES) {
      try {
        const response = await repository.fetchPosts()
        posts.value = response.data
        loading.value = false
        return true
      } catch (e: any) {
        retryCount.value++

        if (retryCount.value < MAX_RETRIES) {
          toast.warning(`再試行中... (${retryCount.value}/${MAX_RETRIES})`)
          await new Promise(resolve => setTimeout(resolve, RETRY_DELAY * retryCount.value))
        } else {
          toast.error('データの読み込みに失敗しました')
          loading.value = false
          return false
        }
      }
    }
  }

  return {
    posts: readonly(posts),
    loading: readonly(loading),
    retryCount: readonly(retryCount),
    loadPostsWithRetry
  }
}
```

---

## 3. パフォーマンス最適化

### 3.1 メモリ管理

```typescript
// メモリリーク防止
export const useBlogList = () => {
  const posts = ref<BlogPost[]>([])

  // コンポーネントアンマウント時にクリア
  onUnmounted(() => {
    posts.value = []
  })

  return {
    posts: readonly(posts)
  }
}
```

### 3.2 不要な再描画防止

```typescript
// computedとreadonlyの活用
export const useBlogFilter = () => {
  const params = ref<FilterParams>({})

  // computedで計算結果をキャッシュ
  const queryParams = computed(() => {
    // 計算コストが高い処理
    return transformParamsToQuery(params.value)
  })

  return {
    params: readonly(params), // 外部からの直接変更を防止
    queryParams
  }
}
```

### 3.3 データキャッシング戦略

```typescript
// LRUキャッシュの実装
class LRUCache<K, V> {
  private cache = new Map<K, V>()
  private maxSize: number

  constructor(maxSize: number) {
    this.maxSize = maxSize
  }

  get(key: K): V | undefined {
    const value = this.cache.get(key)
    if (value !== undefined) {
      // 最近使用したものを末尾に移動
      this.cache.delete(key)
      this.cache.set(key, value)
    }
    return value
  }

  set(key: K, value: V): void {
    if (this.cache.has(key)) {
      this.cache.delete(key)
    } else if (this.cache.size >= this.maxSize) {
      // 最も古いものを削除
      const firstKey = this.cache.keys().next().value
      this.cache.delete(firstKey)
    }
    this.cache.set(key, value)
  }

  clear(): void {
    this.cache.clear()
  }
}

// 使用例
export const useBlogListWithLRU = () => {
  const cache = new LRUCache<string, BlogPost[]>(10) // 最大10件キャッシュ

  const loadPosts = async (params: FilterParams) => {
    const cacheKey = JSON.stringify(params)
    const cached = cache.get(cacheKey)

    if (cached) {
      return cached
    }

    const response = await $repository.blog.fetchPosts(params)
    cache.set(cacheKey, response.data)

    return response.data
  }

  return { loadPosts }
}
```

---

## 4. トラブルシューティング詳細

### よくある問題と解決策

#### 問題1: zodバリデーションが動かない

**症状:**
vee-validateのエラーが表示されない

**原因:**
- validationSchemaをuseFormに渡していない
- validateForm()を呼んでいない

**解決策:**
```typescript
// ✅ 正しい
const validationSchema = z.object({ /* ... */ })

const form = useForm({
  validationSchema,  // zodスキーマを直接渡す
  initialValues: { /* ... */ }
})

const save = async () => {
  const isValid = await form.validateForm()  // バリデーション実行
  if (!isValid) {
    console.log('Validation errors:', form.errors.value)
    return false
  }
}
```

#### 問題2: ページ遷移後もデータが残る

**症状:**
前のページのデータが次のページでも表示される

**原因:**
useStateを使用している（グローバル状態として永続化される）

**解決策:**
```typescript
// ❌ 間違い
const posts = useState<BlogPost[]>('posts', () => [])

// ✅ 正しい
const posts = ref<BlogPost[]>([])
```

---

## 5. テストパターン

### 5.1 Composableの単体テスト

```typescript
// useBlogList.test.ts
import { describe, it, expect, vi } from 'vitest'
import { useBlogList } from '@/composables/useBlogList'

describe('useBlogList', () => {
  it('should load posts', async () => {
    const mockRepository = {
      fetchPosts: vi.fn().mockResolvedValue({
        data: [{ id: '1', title: 'Test' }],
        total: 1
      })
    }

    // Nuxt Appのモック
    vi.mock('#app', () => ({
      useNuxtApp: () => ({
        $repository: {
          blog: mockRepository
        }
      })
    }))

    const { posts, loadPosts } = useBlogList()

    await loadPosts()

    expect(posts.value).toHaveLength(1)
    expect(posts.value[0].title).toBe('Test')
  })
})
```

### 5.2 zodバリデーションのテスト

```typescript
// useBlogForm.test.ts
import { describe, it, expect } from 'vitest'
import { useBlogForm } from '@/composables/form/useBlogForm'

describe('useBlogForm', () => {
  it('should validate required fields', async () => {
    const { validateForm, errors } = useBlogForm()

    // 空の状態でバリデーション
    const isValid = await validateForm()

    expect(isValid).toBe(false)
    expect(errors.value.title).toBeDefined()
    expect(errors.value.slug).toBeDefined()
    expect(errors.value.content).toBeDefined()
  })

  it('should pass validation with valid data', async () => {
    const { setInitialData, validateForm } = useBlogForm()

    setInitialData({
      title: 'Valid Title',
      slug: 'valid-slug',
      content: 'Valid content with more than 100 characters...',
      categoryId: 'cat-1',
      tagIds: ['tag-1'],
      status: 'draft',
      allowComments: true
    })

    const isValid = await validateForm()

    expect(isValid).toBe(true)
  })
})
```

---

このリファレンスは、実際のプロジェクトで遭遇する複雑なシナリオに対応するための詳細なガイドです。SKILL.mdと組み合わせて使用してください。
