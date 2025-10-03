# Vket Boilerplate Nuxt INTERNAL (Vket App Front 2)

*[日本語版は下部にあります / Japanese version available below](#日本語版)*

This is a production-ready Nuxt3 boilerplate published by HIKKY Ltd., designed for building scalable VR/metaverse web applications.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Nuxt](https://img.shields.io/badge/Nuxt-4.0+-00DC82?logo=nuxt.js)](https://nuxt.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9+-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-1.0+-000000?logo=bun)](https://bun.sh/)

## 🤖 For AI Agents

**Before starting development, please read [`AGENTS.md`](./AGENTS.md) for comprehensive development guidelines, coding standards, and project-specific instructions.**

The `AGENTS.md` file contains:
- Project structure and Layer Architecture guidelines
- Component naming conventions (Ha/Hm/Ho/Ht prefixes)  
- TypeScript strict mode requirements
- Testing and quality assurance procedures
- i18n implementation patterns

## ✨ Features

- **🏗️ Nuxt Layer Architecture**: Modular monorepo structure with base/main/showcases layers
- **⚡ Bun Workspaces**: Fast package management and monorepo support
- **🔒 TypeScript Strict Mode**: Zero-tolerance for `any` types, full type safety
- **🎨 Component System**: Atomic design with Ha/Hm/Ho/Ht prefixes
- **🌍 Internationalization**: Built-in i18n support with YAML-based translations
- **📏 Zod Validation**: Schema-first API validation and type inference
- **🎯 RSCSS/BEM**: Structured CSS naming conventions
- **🧪 Testing Ready**: Vitest + Testing Library setup with coverage
- **📦 Auto-imports**: Components, composables, and utilities
- **🛠️ Quality Tools**: ESLint, Stylelint, Husky, lint-staged

## 🚀 Quick Start

### Prerequisites
- [Bun](https://bun.sh/docs/installation) (recommended) or Node.js 22+
- Git

### Installation

1. **Fork this repository**
   ```bash
   # Click "Fork" on GitHub or use GitHub CLI
   gh repo fork hikky-inc/vket-boilerplate-nuxt
   ```

2. **Clone and setup**
   ```bash
   git clone https://github.com/YOUR_USERNAME/vket-boilerplate-nuxt.git
   cd vket-boilerplate-nuxt
   bun install
   ```

3. **Start development**
   ```bash
   # Navigate to main layer (your application)
   cd layers/main
   
   # Start development server
   bun dev
   ```

4. **You're ready!** 🎉
   - Open http://localhost:3000
   - Start building your application with zero configuration

## 📁 Project Structure

```
/layers/
├── base/        # 🏗️ Foundation layer - shared components, utilities
├── main/        # 🎯 Your application - main development area
├── showcases/   # 📚 Component documentation and examples
└── open-api/    # 🔌 API schema definitions
```

### Layer Hierarchy
- **Base Layer**: Reusable components (Ha*, Hm*), utilities, styles
- **Main Layer**: Your application logic, pages, specific components (Ho*, Ht*)
- **Showcases Layer**: Living documentation and component examples

## 🛠️ Development

### Available Commands

| Command | Description |
|---------|-------------|
| `bun dev` | Start development server |
| `bun build` | Build for production |
| `bun typecheck` | Check TypeScript types |
| `bun lint` | Run ESLint + Stylelint |
| `bun test:ut` | Run unit tests |
| `bun test:coverage` | Generate test coverage |

### Layer-specific Commands
```bash
# Work with specific layers
bun --filter vket-boilerplate-nuxt-base dev
bun --filter vket-boilerplate-nuxt-main build
bun --filter vket-boilerplate-nuxt-showcases test:ut
```

### Component Development

#### Naming Convention
- `Ha*` - Atoms (HaButton, HaInput)
- `Hm*` - Molecules (HmLoginForm, HmProductCard) 
- `Ho*` - Organisms (HoHeader, HoProductList)
- `Ht*` - Templates (HtTopPage, HtProductPage)

#### Component Structure
```vue
<template>
  <div :class="['hm-component', `-${variant}`]">
    {{ i18n.t('title') }}
  </div>
</template>

<i18n lang="yaml">
ja:
  title: タイトル
en:
  title: Title
</i18n>

<script lang="ts">
export default defineComponent({
  name: 'HmComponent',
})
</script>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary'
  }>(),
  {
    variant: 'primary',
  },
)

const i18n = useI18n()
</script>
```

## 🧪 Quality Assurance

### Required Checks
Before committing, ensure all these pass:
```bash
bun typecheck  # Must be 0 TypeScript errors
bun lint       # Must be 0 lint errors  
bun test:ut    # All tests must pass
```

### Git Hooks
- **Pre-commit**: Automatically runs lint-staged
- **Commit-msg**: Enforces conventional commit format

## 🌐 Internationalization

All components must include i18n blocks:
```vue
<i18n lang="yaml">
ja:
  welcome: ようこそ
  description: これは説明です
en:
  welcome: Welcome
  description: This is a description
</i18n>
```

## 🔧 Configuration

### Environment Variables
```bash
# .env.local
VITE_OUTPUT_ENV=local  # local/staging/production
```

### Layer Configuration
Each layer has its own:
- `nuxt.config.ts` - Nuxt configuration
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration

## 🤝 Contributing

1. **Read the guidelines**: Check [`AGENTS.md`](./AGENTS.md) for development standards
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Follow the code style**: Use the established patterns
4. **Add tests**: Cover your changes with tests
5. **Run quality checks**: Ensure all checks pass
6. **Submit PR**: Use the provided PR template

### Commit Convention
```
[layer/scope] type: description

- What: Brief description of changes
- Why: Reason for the change  
- How: Implementation approach (if complex)
```

Examples:
- `[base/components] feat: add HmDataTable component`
- `[main/pages] fix: resolve navigation issue in mobile view`

## 📚 Documentation

- [`AGENTS.md`](./AGENTS.md) - Complete development guide for AI agents
- [`repomix-output.md`](./repomix-output.md) - Full codebase structure
- [Nuxt 3 Docs](https://nuxt.com/docs) - Framework documentation
- [Zod Docs](https://zod.dev) - Schema validation
- [RSCSS](https://rscss.io) - CSS naming convention

## 🔗 Useful Links

- [HIKKY Ltd.](https://www.hikky.co.jp/) - Company website
- [VRChat](https://hello.vrchat.com/) - VR platform
- [Virtual Market](https://vket.com/) - Virtual event platform

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

---

# 日本語版

これはHIKKY株式会社が公開するNuxt3本格運用向けボイラープレートで、スケーラブルなVR/メタバース関連Webアプリケーション構築用に設計されています。

## 🤖 AI エージェント向け

**開発を開始する前に、包括的な開発ガイドライン、コーディング標準、プロジェクト固有の指示について[`AGENTS.md`](./AGENTS.md)をお読みください。**

`AGENTS.md`ファイルには以下が含まれます：
- プロジェクト構造とレイヤーアーキテクチャのガイドライン
- コンポーネント命名規則（Ha/Hm/Ho/Htプレフィックス）
- TypeScript厳格モード要件  
- テストと品質保証手順
- i18n実装パターン

## ✨ 特徴

- **🏗️ Nuxt レイヤーアーキテクチャ**: base/main/showcasesレイヤーによるモジュラーモノレポ構造
- **⚡ Bun ワークスペース**: 高速パッケージ管理とモノレポサポート
- **🔒 TypeScript厳格モード**: `any`型ゼロトレランス、完全な型安全性
- **🎨 コンポーネントシステム**: Ha/Hm/Ho/Htプレフィックスによるアトミックデザイン
- **🌍 国際化**: YAMLベース翻訳によるi18nサポート
- **📏 Zod バリデーション**: スキーマファーストAPIバリデーションと型推論
- **🎯 RSCSS/BEM**: 構造化CSS命名規則
- **🧪 テスト対応**: Vitest + Testing Libraryセットアップ、カバレッジ付き
- **📦 自動インポート**: コンポーネント、コンポーザブル、ユーティリティ
- **🛠️ 品質ツール**: ESLint、Stylelint、Husky、lint-staged

## 🚀 クイックスタート

### 前提条件
- [Bun](https://bun.sh/docs/installation)（推奨）またはNode.js 22+
- Git

### インストール

1. **このリポジトリをフォーク**
   ```bash
   # GitHubで「Fork」をクリックするかGitHub CLIを使用
   gh repo fork hikky-inc/vket-boilerplate-nuxt
   ```

2. **クローンとセットアップ**
   ```bash
   git clone https://github.com/YOUR_USERNAME/vket-boilerplate-nuxt.git
   cd vket-boilerplate-nuxt
   bun install
   ```

3. **開発開始**
   ```bash
   # メインレイヤー（あなたのアプリケーション）に移動
   cd layers/main
   
   # 開発サーバー起動
   bun dev
   ```

4. **準備完了！** 🎉
   - http://localhost:3000 を開く
   - ゼロ設定でアプリケーション構築を開始

## 📁 プロジェクト構造

```
/layers/
├── base/        # 🏗️ 基盤レイヤー - 共有コンポーネント、ユーティリティ
├── main/        # 🎯 あなたのアプリケーション - メイン開発エリア  
├── showcases/   # 📚 コンポーネントドキュメントと例
└── open-api/    # 🔌 APIスキーマ定義
```

### レイヤー階層
- **Baseレイヤー**: 再利用可能コンポーネント（Ha*, Hm*）、ユーティリティ、スタイル
- **Mainレイヤー**: アプリケーションロジック、ページ、固有コンポーネント（Ho*, Ht*）
- **Showcasesレイヤー**: 生きたドキュメントとコンポーネント例

## 🛠️ 開発

### 利用可能コマンド

| コマンド | 説明 |
|---------|-------------|
| `bun dev` | 開発サーバー起動 |
| `bun build` | 本番用ビルド |
| `bun typecheck` | TypeScript型チェック |
| `bun lint` | ESLint + Stylelint実行 |
| `bun test:ut` | ユニットテスト実行 |
| `bun test:coverage` | テストカバレッジ生成 |

### レイヤー固有コマンド
```bash
# 特定レイヤーでの作業
bun --filter vket-boilerplate-nuxt-base dev
bun --filter vket-boilerplate-nuxt-main build
bun --filter vket-boilerplate-nuxt-showcases test:ut
```

## 🧪 品質保証

### 必須チェック
コミット前に以下が全て通ることを確認：
```bash
bun typecheck  # TypeScriptエラー0件必須
bun lint       # lintエラー0件必須
bun test:ut    # 全テスト成功必須
```

## 🌐 国際化

全コンポーネントはi18nブロックを含める必要があります：
```vue
<i18n lang="yaml">
ja:
  welcome: ようこそ
  description: これは説明です
en:
  welcome: Welcome  
  description: This is a description
</i18n>
```

## 🤝 コントリビューション

1. **ガイドラインを読む**: 開発標準について[`AGENTS.md`](./AGENTS.md)を確認
2. **フィーチャーブランチ作成**: `git checkout -b feature/amazing-feature`
3. **コードスタイルに従う**: 確立されたパターンを使用
4. **テストを追加**: 変更にテストを追加
5. **品質チェック実行**: 全チェックが通ることを確認
6. **PR提出**: 提供されたPRテンプレートを使用

## 📄 ライセンス

MITライセンス - 詳細は[LICENSE](LICENSE)ファイルをご覧ください。