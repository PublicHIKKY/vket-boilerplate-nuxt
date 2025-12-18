---
name: nuxt4-components
description: Generates Nuxt4 Vue components following Hikky's Atomic Design pattern with Ht (Template), Ho (Organism), Hm (Molecule), and Ha (Atom) hierarchy. Enforces standardized component structure including i18n multilingual support, TypeScript type definitions, scoped SCSS styling, and proper naming conventions. Use when creating new Vue components, refactoring existing components, or implementing complete features with consistent architecture.
---

# Nuxt4 Components Generator

Nuxt4プロジェクトにおけるAtomic Designパターンに基づくVueコンポーネントの標準化・生成スキル

## 概要

このスキルは、Hikkyプロジェクトの標準化されたコンポーネント構造を理解し、適切なレベル（Ht、Ho、Hm、Ha）のコンポーネントを生成・リファクタリングするためのガイドラインを提供します。

## 責務の分離

| 層 | データ参照 | API呼び出し | ルーティング | provide | inject |
|---|----------|------------|-------------|---------|--------|
| layouts/app.vue/plugins | Composable経由 | 可能 | 可能 | **可能** | 可能 |
| Pages層 (`pages/*.vue`) | Composable経由 | 可能 | 可能 | **可能** | 可能 |
| Ht/Ho | defineModel/Props/inject経由 | 禁止 | 禁止 | 禁止 | 可能 |
| Hm/Ha | Props経由のみ | 禁止 | 禁止 | 禁止 | 禁止 |

**provide/injectの原則**:
- **provide**: Pages層以上（Pages、layouts、app.vue、plugins等）でのみ実行可能
- **inject**: Pages/Ht/Ho層でのみ実行可能（**Hm/Ha層は禁止**）

**inject禁止の理由（Hm/Ha層）**:
- Hm/Ha層は再利用性を最大化するため、外部依存を持たない純粋なコンポーネントとする
- Composableへの依存はHo層までに留め、Hm/Ha層はProps/Emitsのみでデータをやり取りする

### リアクティブステートとv-modelの活用

**原則**: リアクティブステート（ref, reactive, useState, Composableの戻り値など）のデータ操作でv-modelが有効な手段となる場合は**積極的に活用**する。

#### パターン1: Pages層経由でv-modelバインド

Pages層でComposableを呼び出し、そのステートをv-modelでHt/Ho層に渡す。Ht/Ho層ではdefineModelで受け取る。

```vue
<!-- Pages層: Composableを呼び出してv-modelでバインド -->
<template>
  <HtLoginCard
    v-model:email="formState.email.value"
    v-model:password="formState.password.value"
    :isLoading="loginState.isLoading.value"
    :error="loginState.error.value"
    @submit="handleLogin"
  />
</template>

<script setup lang="ts">
import { useLoginForm } from '#main/app/composables/auth/form/useLoginForm'
import { useLogin } from '#main/app/composables/auth/useLogin'

const formState = useLoginForm()
const loginState = useLogin()

const handleLogin = async () => {
  const success = await loginState.login(formState.email.value, formState.password.value)
  if (success) await navigateTo('/dashboard')
}
</script>
```

```vue
<!-- Ht/Ho層: defineModelでv-model対応 -->
<script setup lang="ts">
const email = defineModel<string>('email', { default: '' })
const password = defineModel<string>('password', { default: '' })
</script>
```

#### パターン2: inject経由でComposableを参照（provide済みの場合・推奨）

Pages層やlayouts層でprovideされたComposableを、Ht/Ho層でinjectして利用する。これによりProps/Emitsのバケツリレーを削減できる。

```vue
<!-- Pages層: Composableをprovide -->
<script setup lang="ts">
import { useLoginForm, loginFormInjectionKey } from '#main/app/composables/auth/form/useLoginForm'

const loginForm = useLoginForm()
provide(loginFormInjectionKey, loginForm)
</script>

<template>
  <!-- Pages層ではHtを配置するのみ、Props/Emitsの中継は不要 -->
  <HtLogin @submit="onSubmit" />
</template>
```

```vue
<!-- Ho層: injectしたComposableのステートに直接v-modelバインド -->
<template>
  <!-- injectしたComposableのステートを直接参照 -->
  <HmLoginInput v-model="formData.email" type="email" />
  <HmLoginInput v-model="formData.password" type="password" />
</template>

<script setup lang="ts">
import { loginFormInjectionKey } from '#main/app/composables/auth/form/useLoginForm'

// Ho層でinjectしてComposableのステートを直接参照
const { formData, errors } = inject(loginFormInjectionKey)!
</script>
```

```vue
<!-- Hm層: Props経由のみ（injectは禁止） -->
<template>
  <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
</template>

<script setup lang="ts">
// Hm層ではinject禁止、Props/Emitsのみ
defineProps<{ modelValue: string }>()
defineEmits<{ (e: 'update:modelValue', value: string): void }>()
</script>
```

**重要**:
- Ht/Ho層でのprovideは禁止、injectは可能
- **Hm/Ha層でのinjectは禁止**（Props/Emitsのみでデータをやり取り）

## Atomic Design階層

### Ha (Atom) - 最小単位コンポーネント

**役割**: 最も基本的な、これ以上分割できないUIコンポーネント

**命名規則**: `Ha{機能名}`

**特徴**:
- 単一の責任を持つ
- 他のコンポーネントに依存しない
- 高い再利用性
- Props/Emitのみでデータをやり取り

**実装例**:
- `HaIcon.vue` - アイコン表示（Hydration error回避ラッパー）
- `HaButton.vue` - 基本ボタン
- `HaInput.vue` - 基本入力フィールド

**コンポーネント数**: 現在1個（拡張予定）

### Hm (Molecule) - 分子レベルコンポーネント

**役割**: 複数のAtomを組み合わせた機能単位のUIコンポーネント

**命名規則**: `Hm{機能名}`

**特徴**:
- 複数のHaコンポーネントを組み合わせる
- 単一の機能を提供
- 中程度の再利用性
- Props/Emitsのみでデータをやり取り（**injectは禁止**）
- 外部依存を持たない純粋なコンポーネント

**実装例**:
- `HmVrmViewer.vue` - VRMモデルビューア
- `HmFormTitle.vue` - フォームタイトル
- `HmInputRadioChangeable.vue` - ラジオボタン入力

**コンポーネント数**: 現在1個（拡張予定）

### Ho (Organism) - 複合コンポーネント

**役割**: 機能的に完結したUIコンポーネント

**命名規則**: `Ho{機能名}{UI要素名}`

**特徴**:
- Ha、Hmコンポーネントを組み合わせる
- UIに関するローカルな状態管理
- ダイアログ、リスト、ヘッダーなどの機能単位
- Composable経由でデータ参照可能（API呼び出しは禁止）
- **injectでComposableを参照可能**（provideはPages層以上で実行）
- Hm/Ha層へはProps経由でデータを渡す

**実装例**:
- `HoConfirmDialog.vue` - 確認ダイアログ
- `HoAccountHeader.vue` - アカウントヘッダー
- `HoAssetList.vue` - アセットリスト
- `HoBackButton.vue` - 戻るボタン

**サブディレクトリ**:
- `ho/{機能名}/` - 機能別にサブディレクトリを作成
- 例: `ho/events/`, `ho/top/`, `ho/account/` など

**コンポーネント数**: 233個

### Ht (Template) - テンプレートコンポーネント

**役割**: ページ全体のUIレイアウトを構成するコンポーネント

**命名規則**: `Ht{機能名}{ページ名}`

**特徴**:
- Ho、Hm、Haコンポーネントを組み合わせてUIを構成
- UIのレイアウト・表示を担当
- Composable経由でデータ参照可能（API呼び出しは禁止）
- Pages層から呼び出される

**実装例**:
- `HtAccountInfo.vue` - アカウント情報テンプレート
- `HtAccountAsset.vue` - アカウントアセットテンプレート
- `HtAccountEcProduct.vue` - ECプロダクトテンプレート
- `HtAccountAnalytics.vue` - アナリティクステンプレート

**コンポーネント数**: 67個

## 標準コンポーネント構造

### 必須要素

#### 1. i18n多言語対応

```yaml
<i18n lang="yaml">
ja:
  title: タイトル
  message: メッセージ
en:
  title: Title
  message: Message
</i18n>
```

#### 2. TypeScript型定義

```typescript
type Props = {
  title?: string
  message: string
  isOpen: boolean
}

type Emits = {
  (emit: 'confirm' | 'close'): void
}

const props = defineProps<Props>()
const emits = defineEmits<Emits>()
```

#### 3. Scoped SCSS

```scss
<style lang="scss" scoped>
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/mixins' as m;

.component-name {
  padding: v.space(4);

  @include m.sp {
    padding: v.space(2);
  }
}
</style>
```

### 推奨要素

#### 1. リファクタリング注記

```html
<!-- NOTE: 既存コンポーネントのため、現在のディレクトリルールに沿ってリファクタリングをする -->
```

#### 2. Composable統合（Ht/Hoのみ）

```typescript
// データ参照のみ許可（API呼び出しメソッドの実行は禁止）
const { data, items } = useFeature()
```

## コンポーネント作成ガイドライン

### ステップ1: レベルの決定

**質問**:
1. このコンポーネントは他のコンポーネントを含みますか？
2. ページ全体のUIを構成しますか？

**決定フロー**:
```
ページ全体のUI構成？ YES → Ht (Template)
      ↓ NO
複数のHa/Hmを組み合わせ？ YES → Ho (Organism)
      ↓ NO
複数のAtom組み合わせ？ YES → Hm (Molecule)
      ↓ NO
最小単位 → Ha (Atom)
```

### ステップ2: 命名

**命名規則**:
- **Ha**: `Ha{機能名}` (例: `HaIcon`, `HaButton`)
- **Hm**: `Hm{機能名}` (例: `HmVrmViewer`, `HmFormTitle`)
- **Ho**: `Ho{機能名}{UI要素}` (例: `HoConfirmDialog`, `HoAccountHeader`)
- **Ht**: `Ht{機能名}{ページ名}` (例: `HtAccountInfo`, `HtAccountAsset`)

**PascalCase必須**: 全てのコンポーネント名はPascalCaseで記述

### ステップ3: ファイル配置

**ディレクトリ構造**:
```
app/components/
├── ha/              # Atom
│   └── HaIcon.vue
├── hm/              # Molecule
│   └── HmVrmViewer.vue
├── ho/              # Organism
│   ├── HoConfirmDialog.vue
│   ├── account/     # サブカテゴリ（例）
│   ├── events/
│   └── top/
└── ht/              # Template
    └── HtAccountInfo.vue
```

### ステップ4: テンプレート選択

`templates/`ディレクトリから適切なテンプレートを選択:
- `atom.vue` - Ha（最小単位）テンプレート
- `molecule.vue` - Hm（分子）テンプレート
- `organism.vue` - Ho（複合）テンプレート
- `template.vue` - Ht（テンプレート）テンプレート

### ステップ5: 実装

1. テンプレートをコピー
2. コンポーネント名を置換
3. i18n翻訳を追加
4. Props/Emitsの型定義
5. UIロジック実装
6. スタイル調整

## ベストプラクティス

### ✅ DO

- **多言語対応**: 必ずi18nでja/enを定義
- **型安全**: Props/Emitsの型定義を徹底
- **Scoped Style**: コンポーネント固有のスタイルはscopedで記述
- **命名一貫性**: 命名規則に従ったコンポーネント名
- **再利用性**: 下位レベルのコンポーネントを再利用
- **イベント発火**: 操作が必要な場合はemitでPages層に委譲
- **データ参照（Ht/Hoのみ）**: Composable経由でデータを参照
- **defineModel活用**: v-modelでデータバインドする場合はdefineModelを使用（冗長なProps/Emitsを避ける）

### ❌ DON'T

- **API呼び出し**: fetch、Composable経由のAPI通信は禁止（Pages層でのみ実行）
- **ルーティング**: navigateTo、useRouterによる遷移は禁止（Pages層でのみ実行）
- **データ取得**: useAsyncData、onMountedでのデータ取得は禁止
- **グローバルスタイル**: scoped無しのスタイル定義を避ける
- **肥大化**: 単一コンポーネントに複数の責任を持たせる
- **命名不一致**: プレフィックス無し、または不適切なプレフィックス
- **型無し実装**: anyや型定義無しの実装
- **ハードコード**: 翻訳文字列やスタイル値のハードコード
- **冗長なProps/Emits**: v-modelやinjectで事足りる場合に個別のProps/Emitsを定義しない
- **Hm/Ha層でのinject**: Hm/Ha層はProps/Emitsのみ、injectは禁止

## トラブルシューティング

### Hydration Error

**症状**: アイコンコンポーネントでHydration errorが発生

**解決**: `HaIcon.vue`を使用してClientOnlyでラップ

```vue
<HaIcon :component="IconComponent" />
```

### スタイル競合

**症状**: 他のコンポーネントとスタイルが干渉

**解決**: `scoped`属性を付与し、RSCSS命名規則を使用

```scss
<style lang="scss" scoped>
.ho-component-name {
  > .element {
    // 直接の子要素のスタイル
  }
}
</style>
```

### i18n未定義エラー

**症状**: `i18n.t()`が未定義

**解決**: `useI18n()`を呼び出し

```typescript
const i18n = useI18n()
```

## リファレンス

詳細な実装例、パターン、スタイルガイドについては以下を参照:

- `references/component-patterns.md` - 各レベルの詳細実装パターン
- `references/styling-guide.md` - スタイリングガイドライン
- `templates/` - コンポーネントテンプレートファイル
