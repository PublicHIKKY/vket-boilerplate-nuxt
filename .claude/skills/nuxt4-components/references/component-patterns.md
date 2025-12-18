# Hikky Component Patterns 詳細リファレンス

各Atomic Designレベルの詳細な実装パターンとベストプラクティス

## 責務の分離

| 層 | データ参照 | API呼び出し | ルーティング |
|---|----------|------------|-------------|
| Pages層 (`pages/*.vue`) | Composable経由 | 可能 | 可能 |
| Ht/Ho | Composable経由で参照可能 | 禁止 | 禁止 |
| Hm/Ha | Props経由のみ | 禁止 | 禁止 |

---

## Ha (Atom) - 原子レベルコンポーネント

### 設計原則

- **単一責任**: 1つの明確な目的のみを持つ
- **依存なし**: 他のコンポーネントに依存しない
- **プリミティブ**: HTMLの基本要素をラップする程度
- **Props/Emit**: データはPropsで受け取り、Emitで通知

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
@use '@/assets/styles/variables' as v;

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
- **Props/Emit**: データはPropsで受け取り、Emitで通知

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
@use '@/assets/styles/variables' as v;

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
@use '@/assets/styles/variables' as v;

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
- API呼び出し（fetch、Composable経由のAPI通信）
- グローバルステートに依存
- ページ固有のロジックを含める

---

## Ho (Organism) - 複合コンポーネント

### 設計原則

- **機能完結**: 独立したUI機能を提供
- **ローカル状態**: UI表示に関する状態管理のみ
- **データ参照**: Composable経由でデータ参照可能（API呼び出しは禁止）
- **Props/Emit**: データはPropsまたはComposableで受け取り、操作はEmitで通知

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
<i18n lang="yaml">
ja:
  no_items: アイテムがありません
en:
  no_items: No items
</i18n>

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
- ローディング・エラー状態の表示
- 適切なイベントハンドリング（操作はemitでPages層に委譲）
- スロットで柔軟性を提供
- UIに関するローカル状態管理
- Composable経由でデータを参照（読み取り専用）

❌ **DON'T**:
- API呼び出し（fetch、Composable経由のAPI通信）
- グローバルステートの直接変更
- ルーティング（navigateTo）

---

## Ht (Template) - テンプレートコンポーネント

### 設計原則

- **UIレイアウト**: ページ全体のUI構成を担当
- **データ参照**: Composable経由でデータ参照可能（API呼び出しは禁止）
- **Props/Emit**: データはPropsまたはComposableで受け取り、操作はEmitで通知
- **UIローカル状態**: フィルター、表示切替などUI表示に関する状態のみ

### 実装パターン

#### パターン1: 基本テンプレート

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
      <HoAccountInfoSection :data="accountInfo" />
      <HoBillingInfoSection :data="billingInfo" />
      <HoPaymentMethodSection
        :data="paymentMethod"
        @update="$emit('update:payment', $event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  accountInfo: AccountInfo
  billingInfo: BillingInfo
  paymentMethod: PaymentMethod
}

type Emits = {
  (e: 'update:payment', value: PaymentMethod): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const i18n = useI18n()
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

#### パターン2: フィルター付きリストテンプレート

```vue
<i18n lang="yaml">
ja:
  title: アセット一覧
  description: 登録済みのアセットを管理
  category:
    title: カテゴリ
  no_asset: アセットがありません
en:
  title: Asset List
  description: Manage registered assets
  category:
    title: Category
  no_asset: No assets
</i18n>

<template>
  <div class="ht-asset-list">
    <div class="title-section">
      <div class="title">{{ i18n.t('title') }}</div>
      <div class="page-description">{{ i18n.t('description') }}</div>
    </div>

    <div class="content">
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
type Props = {
  items: Asset[]
  categoryOptions: CategoryOption[]
  loading?: boolean
}

type Emits = {
  (e: 'click:card', item: Asset): void
  (e: 'change:filter', filter: { type: string; value: string }): void
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
})
const emit = defineEmits<Emits>()

const i18n = useI18n()

// UIローカル状態（フィルター表示用）
const filters = reactive({
  category: 'all',
  price: 'all',
})

const filteredItems = computed(() => {
  return props.items.filter(item => {
    if (filters.category !== 'all' && item.category !== filters.category) {
      return false
    }
    return true
  })
})

const onChangeFilter = (value: string, filterType: string) => {
  filters[filterType] = value
  emit('change:filter', { type: filterType, value })
}

const onClickCard = (item: Asset) => {
  emit('click:card', item)
}
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

#### パターン3: フォームテンプレート（defineModel使用）

```vue
<i18n lang="yaml">
ja:
  title: ログイン
  subtitle: アカウントにログイン
en:
  title: Login
  subtitle: Sign in to your account
</i18n>

<template>
  <div class="ht-login">
    <div class="header">
      <h1 class="title">{{ i18n.t('title') }}</h1>
      <p class="subtitle">{{ i18n.t('subtitle') }}</p>
    </div>

    <form class="form" @submit.prevent="onSubmit">
      <HmFormField
        v-model="email"
        type="email"
        :label="i18n.t('email')"
        :placeholder="i18n.t('emailPlaceholder')"
      />
      <HmFormField
        v-model="password"
        type="password"
        :label="i18n.t('password')"
        :placeholder="i18n.t('passwordPlaceholder')"
      />
      <HaButton
        type="submit"
        :disabled="$props.isLoading"
      >
        {{ i18n.t('submit') }}
      </HaButton>
    </form>
  </div>
</template>

<script setup lang="ts">
type Props = {
  isLoading?: boolean
}

type Emits = {
  (e: 'submit'): void
}

withDefaults(defineProps<Props>(), {
  isLoading: false,
})
const emit = defineEmits<Emits>()

// defineModelでv-model対応（冗長なProps/Emitsを避ける）
const email = defineModel<string>('email', { default: '' })
const password = defineModel<string>('password', { default: '' })

const i18n = useI18n()

const onSubmit = () => {
  emit('submit')
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as v;

.ht-login {
  .header {
    margin-bottom: v.space(6);
  }

  .title {
    font-size: v.size-per-vw(32);
    font-weight: 700;
  }

  .subtitle {
    color: v.$secondary-color-3;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: v.space(4);
  }
}
</style>
```

**Pages層からの呼び出し例**:

```vue
<!-- pages/login.vue -->
<template>
  <HtLogin
    v-model:email="formData.email"
    v-model:password="formData.password"
    :is-loading="isLoading"
    @submit="onSubmit"
  />
</template>

<script setup lang="ts">
const { formData, validateForm } = useLoginForm()
const { login, isLoading } = useAuth()

const onSubmit = async () => {
  const isValid = await validateForm()
  if (!isValid) return

  const success = await login({
    email: formData.email ?? '',
    password: formData.password ?? '',
  })

  if (success) {
    await navigateTo('/dashboard')
  }
}
</script>
```

### ベストプラクティス

✅ **DO**:
- Props/Emitでデータとイベントをやり取り
- Ho/Hm/Haコンポーネントを組み合わせてUIを構成
- UIに関するローカルな状態管理（フィルター、表示切替など）
- 操作イベントをemitでPages層に委譲
- Composable経由でデータを参照（読み取り専用）

❌ **DON'T**:
- API呼び出し（fetch、Composable経由のAPI通信）
- ルーティング（navigateTo、useRouter）
- データ取得（useAsyncData、onMountedでのfetch）
- グローバルステートの直接変更

---

## 共通パターン

### ローディング表示

```vue
<template>
  <div class="component">
    <template v-if="loading">
      <div class="loading">
        <HoContentLoading />
      </div>
    </template>
    <template v-else-if="error">
      <div class="error">
        {{ error }}
      </div>
    </template>
    <template v-else>
      <div class="content">
        <slot />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
type Props = {
  loading?: boolean
  error?: string | null
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
  error: null,
})
</script>
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
