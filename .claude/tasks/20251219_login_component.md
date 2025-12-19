# 実装タスク: login.vue コンポーネント化

作成日: 2025-12-19
ステータス: 完了

## 依頼内容

> layers/main/app/pages/login.vueを必要な粒度でコンポーネント化をお願いします。

## 概要

ログインページ（login.vue）を Atomic Design パターンに従ってコンポーネント分割する。現在のページは約470行あり、ヘッダー、フォーム（入力フィールド、チェックボックス、ボタン）、フッターの各セクションが1ファイルに集約されている。

## 現状分析

### 既存の再利用可能コンポーネント
- `HmInputText.vue` - テキスト入力（vee-validate統合済み）
- `HmInputCheckbox.vue` - チェックボックス
- `HmButton.vue` - ボタン

### 課題
1. 既存コンポーネントはプロジェクト共通のスタイルを持ち、login.vueのカスタムデザイン（アイコン付き入力、独自のカラースキーム等）と異なる
2. ログインページ固有のデザインを維持しつつ、適切な粒度で分割する必要がある

## 実装方針

ログインページのデザインを維持するため、login専用のコンポーネントとして分割する。Atomic Design階層に従い：

1. **Ht層（Template）**: `HtLogin.vue` - ログインページ全体のレイアウト
2. **Ho層（Organism）**: `HoLoginCard.vue` - ログインカード（ヘッダー + フォーム + フッター）
3. **Hm層（Molecule）**:
   - `HmLoginHeader.vue` - アイコン + タイトル + サブタイトル
   - `HmLoginForm.vue` - フォーム全体（入力フィールド群 + ボタン）

**分割の判断基準**:
- Ha層への分割は見送り（アイコン付き入力フィールドはlogin専用デザインのため、Hm層で完結）
- コピーライトはページ固有のためHt層に残す

## タスク

- [x] **1. HmLoginHeader コンポーネント作成**
  - Skill: `nuxt4-components`
  - 出力: `layers/main/app/components/hm/login/HmLoginHeader.vue`
  - 依存: なし
  - 内容: アイコン（時計SVG）、タイトル、サブタイトルを表示

- [x] **2. HmLoginForm コンポーネント作成**
  - Skill: `nuxt4-components`
  - 出力: `layers/main/app/components/hm/login/HmLoginForm.vue`
  - 依存: なし
  - 内容: メールアドレス入力、パスワード入力、rememberMe、forgotPasswordリンク、エラー表示、ログインボタン、登録リンク
  - 備考: inject経由でloginComposableを取得しv-modelで直接バインド

- [x] **3. HoLoginCard コンポーネント作成**
  - Skill: `nuxt4-components`
  - 出力: `layers/main/app/components/ho/login/HoLoginCard.vue`
  - 依存: 1, 2
  - 内容: HmLoginHeader + HmLoginForm を組み合わせたカード

- [x] **4. HtLogin コンポーネント作成**
  - Skill: `nuxt4-components`
  - 出力: `layers/main/app/components/ht/HtLogin.vue`
  - 依存: 3
  - 内容: ページ全体レイアウト（背景グラデーション + HoLoginCard + コピーライト）

- [x] **5. login.vue ページ更新**
  - Skill: `nuxt4-pages`
  - 出力: `layers/main/app/pages/login.vue`
  - 依存: 4
  - 内容: HtLoginを使用するようにリファクタリング、SEO設定とComposable provideは維持

## 実行ログ

- 2025-12-19: 全タスク完了
  - HmLoginHeader.vue 作成
  - HmLoginForm.vue 作成
  - HoLoginCard.vue 作成
  - HtLogin.vue 作成
  - login.vue リファクタリング完了
