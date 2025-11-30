# Vket Boilerplate Nuxt（日本語版）
[![English README](https://badgen.net/badge/README/in%20English/blue?icon=github)](./README.md)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](/LICENSE)
[![Nuxt](https://img.shields.io/badge/Nuxt-4.0+-00DC82?logo=nuxt.js)](https://nuxt.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9+-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-1.0+-000000?logo=bun)](https://bun.sh/)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/PublicHIKKY/vket-boilerplate-nuxt)

これはHIKKY株式会社が公開するNuxt4本格運用向けボイラープレートで、スケーラブルなVR/メタバース関連Webアプリケーション構築用に設計されています。

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


### コミット規約

```
[layer/scope] type: description

- What: 変更内容の簡潔な説明
- Why: 変更の理由  
- How: 実装方法（複雑な場合のみ）
```

例：

* `[base/components] feat: HmDataTableコンポーネントを追加`
* `[main/pages] fix: モバイル表示のナビゲーション問題を修正`

## 📚 ドキュメント

* [`AGENTS.md`](./AGENTS.md) - AIエージェント開発の完全ガイド
* [`repomix-output.md`](./repomix-output.md) - コードベース全体の構造
* [Nuxt Docs](https://nuxt.com/docs) - フレームワークの公式ドキュメント
* [Zod Docs](https://zod.dev) - スキーマバリデーションのドキュメント
* [RSCSS](https://rscss.io) - CSS命名規則

## 🔗 便利なリンク

* [HIKKY株式会社](https://www.hikky.co.jp/) - 会社公式サイト
* [VRChat](https://hello.vrchat.com/) - VRプラットフォーム
* [Virtual Market](https://vket.com/) - バーチャルイベントプラットフォーム


## 📄 ライセンス

MITライセンス - 詳細は[LICENSE](LICENSE)ファイルをご覧ください。
