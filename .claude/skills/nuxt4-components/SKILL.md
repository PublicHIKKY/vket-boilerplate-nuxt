---
name: nuxt4-components
description: Generates Nuxt4 Vue components following Hikky's Atomic Design pattern with Ht (Template/Page), Ho (Organism), Hm (Molecule), and Ha (Atom) hierarchy. Enforces standardized component structure including i18n multilingual support, TypeScript type definitions, scoped SCSS styling, and proper naming conventions. Use when creating new Vue components, refactoring existing components, or implementing complete features with consistent architecture.
---

# Nuxt4 Components Generator

Nuxt4プロジェクトにおけるAtomic Designパターンに基づくVueコンポーネントの標準化・生成スキル

## 概要

このスキルは、Hikkyプロジェクトの標準化されたコンポーネント構造を理解し、適切なレベル（Ht、Ho、Hm、Ha）のコンポーネントを生成・リファクタリングするためのガイドラインを提供します。

## Atomic Design階層

### Ha (Atom) - 最小単位コンポーネント

**役割**: 最も基本的な、これ以上分割できないコンポーネント

**命名規則**: `Ha{機能名}`

**特徴**:
- 単一の責任を持つ
- 他のコンポーネントに依存しない
- 高い再利用性

**実装例**:
- `HaIcon.vue` - アイコン表示（Hydration error回避ラッパー）
- `HaButton.vue` - 基本ボタン
- `HaInput.vue` - 基本入力フィールド

**コンポーネント数**: 現在1個（拡張予定）

### Hm (Molecule) - 分子レベルコンポーネント

**役割**: 複数のAtomを組み合わせた機能単位のコンポーネント

**命名規則**: `Hm{機能名}`

**特徴**:
- 複数のHaコンポーネントを組み合わせる
- 単一の機能を提供
- 中程度の再利用性

**実装例**:
- `HmVrmViewer.vue` - VRMモデルビューア
- `HmFormTitle.vue` - フォームタイトル
- `HmInputRadioChangeable.vue` - ラジオボタン入力

**コンポーネント数**: 現在1個（拡張予定）

### Ho (Organism) - 複合コンポーネント

**役割**: ビジネスロジックを含む、機能的に完結したコンポーネント

**命名規則**: `Ho{機能名}{UI要素名}`

**特徴**:
- Ha、Hmコンポーネントを組み合わせる
- ビジネスロジックを含む
- Composableを使用してデータを管理
- ダイアログ、リスト、ヘッダーなどの機能単位

**実装例**:
- `HoConfirmDialog.vue` - 確認ダイアログ
- `HoAccountHeader.vue` - アカウントヘッダー
- `HoAssetList.vue` - アセットリスト
- `HoBackButton.vue` - 戻るボタン

**サブディレクトリ**:
- `ho/{機能名}/` - 機能別にサブディレクトリを作成
- 例: `ho/events/`, `ho/top/`, `ho/account/` など

**コンポーネント数**: 233個

### Ht (Template/Page) - ページレベルコンポーネント

**役割**: ページ全体のレイアウトとUI表示を担当（API呼び出しはpage層に委譲）

**命名規則**: `Ht{機能名}{ページ名}`

**特徴**:
- Ho、Hm、Haコンポーネントを組み合わせる
- ページ全体のUI状態管理（ローディング、フォーム表示など）
- **API呼び出し関数はemitsでpage層に委譲**
- propsでデータを受け取り、emitsでイベントを発火
- ルーティングと連携

Ht層ではAPI呼び出しを直接行わず、以下のいずれかのパターンでデータを受け取る:
- propsで親（page層）から受け取る
- page層でprovideされたcomposableをinjectで受け取る

アクション（作成/更新/削除など）はemitsでpage層に通知し、page層でAPI呼び出しとエラーハンドリングを実装する。

**実装例**:
- `HtAccountInfo.vue` - アカウント情報ページ
- `HtAccountAsset.vue` - アカウントアセットページ
- `HtAccountEcProduct.vue` - ECプロダクトページ
- `HtAccountAnalytics.vue` - アナリティクスページ

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

#### 2. Composable統合

```typescript
import { useFeature } from '@/composables/useFeature'
import useToast from '@/composables/useToast'

const { data, updateData } = useFeature()
const toast = useToast()
```

## コンポーネント作成ガイドライン

### ステップ1: レベルの決定

**質問**:
1. このコンポーネントは他のコンポーネントを含みますか？
2. ビジネスロジックを持ちますか？
3. ページ全体を表現しますか？

**決定フロー**:
```
ページ全体？ YES → Ht (Template)
      ↓ NO
ビジネスロジック？ YES → Ho (Organism)
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
- `template.vue` - Ht（ページ）テンプレート

### ステップ5: 実装

1. テンプレートをコピー
2. コンポーネント名を置換
3. i18n翻訳を追加
4. Props/Emitsの型定義
5. ビジネスロジック実装
6. スタイル調整

## ベストプラクティス

### ✅ DO

- **多言語対応**: 必ずi18nでja/enを定義
- **型安全**: Props/Emitsの型定義を徹底
- **Scoped Style**: コンポーネント固有のスタイルはscopedで記述
- **命名一貫性**: 命名規則に従ったコンポーネント名
- **Composable活用（推奨）**: 複雑なロジックはComposableに委譲（シンプルな場合は不要）
- **再利用性**: 下位レベルのコンポーネントを再利用

### ❌ DON'T

- **グローバルスタイル**: scoped無しのスタイル定義を避ける
- **Ht層での直接API呼び出し**: Ht層ではAPI呼び出しをせず、emitsでpage層に委譲する
- **肥大化**: 単一コンポーネントに複数の責任を持たせる
- **命名不一致**: プレフィックス無し、または不適切なプレフィックス
- **型無し実装**: anyや型定義無しの実装
- **ハードコード**: 翻訳文字列やスタイル値のハードコード

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
