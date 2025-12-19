# 実装タスク: ログインロジック実装

作成日: 2025-12-19
ステータス: 完了

## 依頼内容

> 次にロジック実装をお願いします。
> ログインapiについてはnuxt4 serverの機能を使って実装し必ずログインが成功するapiにしてください。
> フロント側はログイン処理を実行しログインに成功したらダッシュボードへ遷移するようにしてください。

## 概要

既存のログインページ（`layers/main/app/pages/login.vue`）にログインロジックを追加し、Nuxt4のServer APIでログインエンドポイントを作成する。ログイン成功時はダッシュボードページへ遷移する。

## 実装方針

1. **Server API**: `server/api/auth/login.post.ts` にNuxt4のdefineEventHandlerで実装。常に成功を返すモック実装
2. **Model層**: ログインリクエスト/レスポンスのZodスキーマと型定義
3. **Repository層**: authRepositoryでログインAPIを呼び出す
4. **Composable層**:
   - `useLoginForm.ts`: フォームステート管理（email, password, rememberMe）
   - `useLogin.ts`: ログイン処理と認証状態管理
5. **Page層**: 既存の`login.vue`を更新し、Composableを統合
6. **ダッシュボード**: `/dashboard`にシンプルなダッシュボードページを作成

## タスク

- [x] **1. Server API: ログインエンドポイント作成**
  - Skill: なし
  - 出力: `server/api/auth/login.post.ts`
  - 依存: なし
  - 詳細: defineEventHandlerで実装、常に成功レスポンスを返す

- [x] **2. Model: 認証関連の型定義**
  - Skill: `nuxt4-models`
  - 出力: `layers/main/app/models/auth.ts`
  - 依存: なし
  - 詳細: LoginRequest, LoginResponse, Userのスキーマと型

- [x] **3. Repository: authRepository作成**
  - Skill: `repository-creator`
  - 出力: `layers/main/app/repositories/authRepository.ts`
  - 依存: 2
  - 詳細: loginメソッドを持つリポジトリ

- [x] **4. Composable: useLoginForm作成**
  - Skill: `nuxt4-composables`
  - 出力: `layers/main/app/composables/form/useLoginForm.ts`
  - 依存: 2
  - 詳細: email, password, rememberMeのフォームステート管理

- [x] **5. Composable: useLogin作成**
  - Skill: `nuxt4-composables`
  - 出力: `layers/main/app/composables/useLogin.ts`
  - 依存: 3, 4
  - 詳細: ログイン処理、認証状態管理、ダッシュボードへの遷移

- [x] **6. Page: ダッシュボードページ作成**
  - Skill: `nuxt4-pages`
  - 出力: `layers/main/app/pages/dashboard.vue`
  - 依存: なし
  - 詳細: シンプルなダッシュボードページ

- [x] **7. Page: ログインページ更新**
  - Skill: なし
  - 出力: `layers/main/app/pages/login.vue`
  - 依存: 4, 5
  - 詳細: Composableを統合し、フォーム送信処理を実装

## 実行ログ

- 2025-12-19: 全タスク完了
