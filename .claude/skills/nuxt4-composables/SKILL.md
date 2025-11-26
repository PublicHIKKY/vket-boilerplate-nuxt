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
- **特徴**: Repository Factoryを使用したAPI疎通、データ保持、ui/form/の組み合わせ
- **命名**: 役割ごとにファイルを分ける（例：`use{機能名}List`、`use{機能名}Detail`、`use{機能名}Editor`）
- **InjectionKey**: 必須

## チェックリスト

### 新規機能実装時

- [ ] UI状態管理が必要？ → `ui/use{機能名}{UI要素}.ts`
- [ ] フォームが必要？ → `form/use{機能名}Form.ts`（vee-validate + zod統合）
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
- vee-validate + zodでバリデーション管理

### ❌ DON'T
- useStateをcore/以外で使用
- Repository Factoryを使わずAPI呼び出し
- InjectionKeyなしでprovide/inject
- バリデーションを別Composableに分離（formに統合）

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
