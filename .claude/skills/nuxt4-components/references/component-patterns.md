# Hikky Component Patterns 詳細リファレンス

各Atomic Designレベルの詳細な実装パターンとベストプラクティス

## Ha (Atom) - 原子レベルコンポーネント

### 設計原則

- **単一責任**: 1つの明確な目的のみを持つ
- **依存なし**: 他のコンポーネントに依存しない
- **プリミティブ**: HTMLの基本要素をラップする程度

### 実装パターン

#### パターン1: Hydration Error回避ラッパー

```vue
<template>
  <span class="ha-icon">
    <ClientOnly>
      <component
        :is="props.component"
        class="icon"
      />
    </ClientOnly>
  </span>
</template>

<script setup lang="ts">
import { FunctionalComponent } from 'vue'

const props = defineProps<{
  component: FunctionalComponent
}>()
</script>

<style lang="scss" scoped>
.ha-icon {
  > .icon {
    all: inherit;
    inset: auto;
    transform: none;
    margin: 0;
    padding: 0;
  }
}
</style>
```

**使用例**:
```vue
<HaIcon :component="IconHikkyCorporateLogoWhite" class="icon -hikky" />
```

#### パターン2: 基本UI要素

```vue
<template>
  <button
    class="ha-button"
    :type="type"
    :disabled="disabled"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
type Props = {
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

type Emits = {
  (e: 'click'): void
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  disabled: false,
})

const emit = defineEmits<Emits>()

const onClick = () => {
  if (!props.disabled) {
    emit('click')
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/custom/variables_new' as v;

.ha-button {
  padding: v.space(2);
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
```

### ベストプラクティス

✅ **DO**:
- プロパティは最小限に
- スタイルはプロパティで制御可能に
- ClientOnlyで必要に応じてラップ
- 再利用性を最優先

❌ **DON'T**:
- ビジネスロジックを含めない
- 他のコンポーネントに依存しない
- 複雑な状態管理を持たない

---

## Hm (Molecule) - 分子レベルコンポーネント

### 設計原則

- **組み合わせ**: 複数のAtomを組み合わせる
- **機能単位**: 1つの明確な機能を提供
- **中規模**: 小さすぎず大きすぎない

### 実装パターン

#### パターン1: フォーム要素

```vue
<i18n lang="yaml">
ja:
  label: ラベル
en:
  label: Label
</i18n>

<template>
  <div class="hm-form-field">
    <label class="label">
      {{ label || i18n.t('label') }}
    </label>
    <input
      v-model="modelValue"
      :type="type"
      :placeholder="placeholder"
      class="input"
      @input="onInput"
    />
  </div>
</template>

<script setup lang="ts">
const i18n = useI18n()

type Props = {
  modelValue: string
  label?: string
  type?: string
  placeholder?: string
}

type Emits = {
  (e: 'update:modelValue', value: string): void
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
})

const emit = defineEmits<Emits>()

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<style scoped lang="scss">
@use '@/assets/styles/custom/variables_new' as v;

.hm-form-field {
  .label {
    font-weight: 700;
    margin-bottom: v.space(1);
  }

  .input {
    width: 100%;
    padding: v.space(2);
    border: 1px solid v.$secondary-color-2;
    border-radius: 4px;
  }
}
</style>
```

#### パターン2: カード要素

```vue
<template>
  <div class="hm-card">
    <template v-if="title">
      <div class="card-title">
        {{ title }}
      </div>
    </template>
    <div class="card-content">
      <slot />
    </div>
    <template v-if="$slots.footer">
      <div class="card-footer">
        <slot name="footer" />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
type Props = {
  title?: string
}

const props = defineProps<Props>()
</script>

<style scoped lang="scss">
@use '@/assets/styles/custom/variables_new' as v;

.hm-card {
  background: v.$base-background-color;
  border-radius: 8px;
  padding: v.space(4);

  .card-title {
    font-weight: 700;
    margin-bottom: v.space(2);
  }

  .card-content {
    margin-bottom: v.space(2);
  }

  .card-footer {
    border-top: 1px solid v.$secondary-color-2;
    padding-top: v.space(2);
  }
}
</style>
```

### ベストプラクティス

✅ **DO**:
- Atomコンポーネントを組み合わせる
- v-modelでデータバインディング
- スロットで柔軟性を提供
- 適切なイベント発火

❌ **DON'T**:
- API呼び出しを含めない
- グローバルステートに依存しない
- ページ固有のロジックを含めない

---

## Ho (Organism) - 複合コンポーネント

### 設計原則

- **機能完結**: 独立した機能を提供
- **ビジネスロジック**: データ操作を含む
- **Composable活用（推奨）**: 状態管理をComposableに委譲（複雑なロジックの場合）

### 実装パターン

#### パターン1: ダイアログ

```vue
<i18n lang="yaml">
ja:
  confirm: はい
  cancel: キャンセル
en:
  confirm: OK
  cancel: Cancel
</i18n>

<template>
  <template v-if="isOpen">
    <HaBaseDialog
      class="ho-confirm-dialog"
      @closeDialog="onClose"
    >
      <template v-if="title">
        <div class="title">
          {{ title }}
        </div>
      </template>
      <template v-if="message">
        <p class="message">
          {{ message }}
        </p>
      </template>
    <slot />
    <div class="button-wrapper">
      <HoButton
        category="outline"
        @click="onClose"
      >
        <span class="text">{{ closeMessage || i18n.t('cancel') }}</span>
      </HoButton>
      <HoButton
        category="primary"
        @click="onConfirm"
      >
        <span class="text">{{ confirmMessage || i18n.t('confirm') }}</span>
      </HoButton>
    </div>
    </HaBaseDialog>
  </template>
</template>

<script setup lang="ts">
type Props = {
  isOpen: boolean
  message?: string
  title?: string
  closeMessage?: string
  confirmMessage?: string
}

type Emits = {
  (emit: 'confirm' | 'close'): void
}

const i18n = useI18n()
const props = defineProps<Props>()
const emits = defineEmits<Emits>()

const onConfirm = () => {
  emits('confirm')
}

const onClose = () => {
  emits('close')
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as v;

.ho-confirm-dialog {
  :deep(> .dialog-window) {
    width: 40vw;
    border-radius: 14px;
    background-color: v.$base-background-color;
  }

  .title {
    margin-bottom: v.space(4);
    font-size: v.size-per-vw(32);
    font-weight: 700;
    text-align: center;
  }

  .message {
    margin-bottom: v.space(6);
    font-size: v.size-per-vw(20);
    text-align: center;
  }

  .button-wrapper {
    display: flex;
    gap: v.space(4);
    justify-content: center;
  }
}
</style>
```

#### パターン2: リスト表示

```vue
<template>
  <div class="ho-item-list">
    <template v-if="loading">
      <div class="loading">
        <HoContentLoading />
      </div>
    </template>
    <template v-else-if="items.length === 0">
      <div class="empty">
        <slot name="empty">
          {{ i18n.t('no_items') }}
        </slot>
      </div>
    </template>
    <template v-else>
      <div class="items">
      <div
        v-for="item in items"
        :key="item.id"
        class="item"
        @click="onClickItem(item)"
      >
        <slot name="item" :item="item">
          {{ item.name }}
        </slot>
      </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
type Item = {
  id: string
  name: string
  // ... other properties
}

type Props = {
  items: Item[]
  loading?: boolean
}

type Emits = {
  (e: 'click:item', item: Item): void
}

const i18n = useI18n()
const props = withDefaults(defineProps<Props>(), {
  loading: false,
})

const emit = defineEmits<Emits>()

const onClickItem = (item: Item) => {
  emit('click:item', item)
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as v;

.ho-item-list {
  .loading,
  .empty {
    text-align: center;
    padding: v.space(6);
  }

  .items {
    display: grid;
    gap: v.space(4);

    .item {
      cursor: pointer;
      padding: v.space(3);
      border-radius: 8px;
      background: v.$base-background-color;

      &:hover {
        background: v.$secondary-background-color;
      }
    }
  }
}
</style>
```

### ベストプラクティス

✅ **DO**:
- Composableでデータ管理（複雑なロジックの場合は推奨）
- ローディング・エラー状態を管理
- 適切なイベントハンドリング
- スロットで柔軟性を提供

❌ **DON'T**:
- 直接API呼び出し（複雑な処理はComposable経由を推奨）
- グローバルステートの直接変更
- ページレベルのルーティング

---

## Ht (Template) - ページレベルコンポーネント

### 設計原則

- **ページ統合**: ページ全体のレイアウト
- **データ統合**: 複数のComposableを組み合わせ
- **ルーティング連携**: ページ遷移を管理

### 実装パターン

#### パターン1: 基本ページ

```vue
<i18n lang="yaml">
ja:
  title: アカウント情報
  description: お客様情報とお支払い情報の確認・変更
en:
  title: Account Information
  description: Check / Change Customer and Payment Information
</i18n>

<template>
  <div class="ht-account-info">
    <div class="page-title">
      {{ i18n.t('title') }}
    </div>
    <div class="page-description">
      {{ i18n.t('description') }}
    </div>

    <div class="content">
      <!-- Organism components -->
      <HoAccountInfoSection />
      <HoBillingInfoSection />
      <HoPaymentMethodSection />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFeature } from '@/composables/useFeature'

const i18n = useI18n()
const { data, updateData } = useFeature()

// Page-level logic
onMounted(() => {
  // Initialize page data
})
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/mixins' as m;

.ht-account-info {
  .page-title {
    font-size: v.size-per-vw(40);
    font-weight: 700;
    margin-bottom: v.space(4);
  }

  .page-description {
    font-size: v.size-per-vw(16);
    color: v.$secondary-color-3;
    margin-bottom: v.space(8);
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: v.space(6);
  }
}
</style>
```

#### パターン2: フィルター付きリストページ

```vue
<template>
  <div class="ht-asset-list">
    <div class="title-section">
      <div class="title">{{ i18n.t('title') }}</div>
      <div class="page-description">{{ i18n.t('description') }}</div>
    </div>

    <div class="content">
      <!-- Filters -->
      <div class="filter-area">
        <div class="filter">
          <div class="title">{{ i18n.t('category.title') }}</div>
          <HmInputRadioChangeable
            name="category"
            :options="categoryOptions"
            @click="onChangeFilter($event, 'category')"
          />
        </div>
      </div>

      <!-- List -->
      <template v-if="filteredItems && filteredItems.length > 0">
        <HoAssetList
          :items="filteredItems"
          @click:card="onClickCard"
        />
      </template>
      <template v-else>
        <div class="no-data">
          {{ i18n.t('no_asset') }}
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAssets } from '@/composables/useAssets'

const i18n = useI18n()
const { assets, loading, fetchAssets } = useAssets()

const filters = reactive({
  category: 'all',
  price: 'all',
})

const filteredItems = computed(() => {
  return assets.value.filter(item => {
    // Apply filters
    if (filters.category !== 'all' && item.category !== filters.category) {
      return false
    }
    return true
  })
})

const onChangeFilter = (value: string, filterType: string) => {
  filters[filterType] = value
}

const onClickCard = (item: Asset) => {
  navigateTo(`/account/asset/${item.id}`)
}

onMounted(() => {
  fetchAssets()
})
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/mixins' as m;

.ht-asset-list {
  .title-section {
    margin-bottom: v.space(6);

    .title {
      font-size: v.size-per-vw(40);
      font-weight: 700;
      margin-bottom: v.space(2);
    }

    .page-description {
      font-size: v.size-per-vw(16);
      color: v.$secondary-color-3;
    }
  }

  .content {
    .filter-area {
      display: flex;
      gap: v.space(4);
      margin-bottom: v.space(6);

      .filter {
        flex: 1;

        .title {
          font-weight: 700;
          margin-bottom: v.space(2);
        }
      }
    }

    .no-data {
      text-align: center;
      padding: v.space(8);
      color: v.$secondary-color-3;
    }
  }
}
</style>
```

### ベストプラクティス

✅ **DO**:
- 複数のComposableを組み合わせる
- ページレベルのライフサイクル管理
- ルーティングとの連携
- Organismコンポーネントを組み合わせる

❌ **DON'T**:
- ビジネスロジックを直接記述（Composableへ）
- 複雑なDOM操作
- グローバルステートの直接変更

---

## 共通パターン

### エラーハンドリング

```typescript
const state = reactive({
  loading: false,
  error: null as Error | null,
})

const handleAction = async () => {
  try {
    state.loading = true
    state.error = null
    await someAsyncOperation()
  } catch (error) {
    state.error = error as Error
    console.error('Error:', error)
  } finally {
    state.loading = false
  }
}
```

### ローディング表示

```vue
<template>
  <div class="component">
    <template v-if="state.loading">
      <div class="loading">
        <HoContentLoading />
      </div>
    </template>
    <template v-else-if="state.error">
      <div class="error">
        {{ state.error.message }}
      </div>
    </template>
    <template v-else>
      <div class="content">
        <!-- Main content -->
      </div>
    </template>
  </div>
</template>
```

### レスポンシブ対応

```scss
.component {
  padding: v.space(6);

  @include m.sp {
    padding: v.space(3);
  }

  .title {
    font-size: v.size-per-vw(32);

    @include m.sp {
      font-size: v.size-per-vw(24);
    }
  }
}
```
