---
name: nuxt4-composables
description: Generates standardized Nuxt4 composables following a layered architecture pattern with Repository Factory integration. Supports creation of UI layer (component state with InjectionKey), Form layer (form data and validation), and Root layer (data integration with repository). Enforces best practices including provide/inject pattern, error handling, and proper state management. Use for building new features, refactoring existing composables, or implementing complete feature sets with consistent structure.
---

# Nuxt4 Composables Generator

Nuxt4プロジェクトにおける標準化されたComposablesの設計・生成・リファクタリングスキル

## 概要

このスキルは以下の機能を提供します:

1. **標準化されたComposable構造の生成** - レイヤー別の適切なComposableを自動生成
2. **設計規約の遵守** - Nuxt4のベストプラクティスに従った実装支援
3. **既存コードのリファクタリング** - 規約に合わない既存Composableの整理
4. **依存関係の明確化** - InjectionKeyとprovide/injectパターンの適用

## レイヤー構造

### 1. core/ - 全機能横断の汎用処理
- **特徴**: 全画面で使う基盤機能、useStateの使用OK
- **対象**: 認証、通知、テーマ、グローバルローディング
- **InjectionKey**: 不要

### 2. ui/ - UI状態管理層
- **特徴**: UI関連の状態のみ、API呼び出しなし
- **命名**: `use{機能名}{UI要素名}`
- **InjectionKey**: 必須

### 3. form/ - フォーム管理層
- **特徴**: vee-validate + zodを使用したフォームデータとバリデーションの統合管理
- **命名**: `use{機能名}Form`
- **InjectionKey**: 必須
- **注意**: バリデーションはvee-validate + zod内で管理（別Composable不要）

### 4. ルート - データ保持 + 統合層
- **特徴**: Repository Factoryを使用したAPI通信、データ保持、ui/form/の組み合わせ
- **命名**: 役割ごとにファイルを分ける（例：`use{機能名}List`、`use{機能名}Detail`、`use{機能名}Editor`）
- **InjectionKey**: 必須

## API呼び出しの実行場所

API呼び出しは**Pages層でのみ**実行します。

- **Pages層**: Composable経由でAPI呼び出しを実行
- **コンポーネント層（Ht/Ho/Hm/Ha）**: API呼び出し禁止（emitでPages層に委譲）

## リアクティブステートとv-modelの活用

### 原則

リアクティブステート（ref, reactive, useState, Composableの戻り値など）のデータ操作でv-modelが有効な手段となる場合は**積極的に活用**する。

### パターン1: Pages層経由でv-modelバインド

Pages層のリアクティブステート（ref, reactive）をHt/Hoに渡す場合。

```vue
<!-- Pages層 -->
<template>
  <HtSearch v-model:keyword="searchKeyword" />
  <HtFilter v-model:category="filterState.category" />
</template>

<script setup lang="ts">
const searchKeyword = ref('')
const filterState = reactive({ category: 'all' })
</script>
```

```vue
<!-- Ht/Ho層: defineModelでv-model対応 -->
<script setup lang="ts">
const keyword = defineModel<string>('keyword', { default: '' })
</script>
```

### パターン2: Composableをprovide/injectで共有し直接v-modelバインド（推奨）

**Composableをprovide/injectで共有している場合**、Ht/Ho層でinjectしたComposableのステートに直接v-modelでバインド可能。Pages層での再宣言・伝達が不要になり、よりシンプルになる。

```vue
<!-- Pages層: Composableをprovide -->
<script setup lang="ts">
const loginForm = useLoginForm()
provide(loginFormInjectionKey, loginForm)
</script>

<template>
  <!-- Pages層ではHtを配置、Props/Emitsの中継は不要 -->
  <HtLogin @submit="onSubmit" />
</template>
```

```vue
<!-- Ho層: injectしたComposableのステートに直接v-modelバインド -->
<template>
  <!-- injectしたステートをHm層にv-modelで渡す -->
  <HmLoginInput v-model="formData.email" type="email" />
  <HmLoginInput v-model="formData.password" type="password" />
</template>

<script setup lang="ts">
// Ho層でinjectしてComposableのステートを直接参照
const { formData } = inject(loginFormInjectionKey)!
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
- この方法はComposableをprovide/injectで共有している場合に限る
- Pages層で宣言したref/reactiveはprovide/injectの対象外
- **injectはPages/Ht/Ho層でのみ可能、Hm/Ha層は禁止**

### 非推奨パターン

```vue
<!-- ❌ 非推奨: 冗長なProps/Emitsの定義 -->
<template>
  <HtLogin
    :email="formData.email ?? ''"
    @update:email="updateField('email', $event)"
  />
</template>
```

## チェックリスト

### 新規機能実装時

- [ ] フォーム入力がある？ → `form/use{機能名}Form.ts`（vee-validate + zod統合）
- [ ] UI状態管理が必要？ → `ui/use{機能名}{UI要素}.ts`
- [ ] ルートComposableを作成 → `use{機能名}List/Detail/Editor.ts`（Repository Factory使用）
- [ ] InjectionKeyを定義（core/以外の全レイヤー）
- [ ] データ保持用のrefを定義（ルート層）

## UI状態の切り出し判断

### Vueファイル内で管理（composable不要）
- 単一コンポーネント専用の状態
- props/emitsで親子通信が完結
- ロジックがシンプル（10行以内）
- 他で再利用しない

### composableとして切り出す
- 複数コンポーネントで再利用
- provide/injectで孫に共有
- ロジックが複雑（テストしたい）
- 機能として独立性が高い

**基本方針**: 迷ったらVueファイル内 → 再利用が発生したらcomposableに切り出し

## ベストプラクティス

### ✅ DO
- ルートComposableでデータを保持（ref/reactive）
- InjectionKeyは必ず型付き
- エラーハンドリング（loading, error状態）を実装
- 子composableも公開して再利用性を高める
- フォーム管理はvee-validate + zodを使用（useForm + defineField）

### ❌ DON'T
- useStateをcore/以外で使用
- Repository Factoryを使わずAPI呼び出し
- InjectionKeyなしでprovide/inject
- バリデーションを別Composableに分離（formに統合）
- `ref<FormData>()` でフォームデータを直接管理
- v-modelで事足りる場合に冗長なProps/Emitsを定義

## トラブルシューティング

### ページ遷移後もデータが残る
**原因**: useStateを使用している
**解決**: ref/reactiveを使用（useStateはcore/のみ）

### InjectionKeyが未定義
**原因**: InjectionKeyのexportを忘れている
**解決**: 各Composableで`export const xxxInjectionKey`を必ず定義

## テンプレートファイル

`templates/`ディレクトリに各レイヤーのテンプレートファイルを用意しています:

- `ui.ts` - UI状態管理層のテンプレート
- `form.ts` - フォーム管理層のテンプレート（vee-validate + zod統合）
- `root.ts` - ルート統合層のテンプレート（Repository Factory使用）

## 参照ドキュメント

詳細な設計規約、実装例、データフローについては以下を参照してください:

- `reference.md` - 完全な設計規約とサンプルコード
- `templates/` - 各レイヤーの実装テンプレート
