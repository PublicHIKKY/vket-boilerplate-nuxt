# 実装タスク: ログインロジック実装

作成日: 2025-12-18
ステータス: 完了

## 依頼内容

> 次にロジック実装をお願いします。
> ログインapiについてはnuxt4 serverの機能を使って実装し必ずログインが成功するapiにしてください。
> フロント側はログイン処理を実行しログインに成功したらダッシュボードへ遷移するようにしてください。

## 概要

既存のログインページ（`login.vue`）にログインロジックを追加し、Nuxt Server APIを使ったログイン認証機能を実装する。ログイン成功時にダッシュボードページへ遷移させる。

## 実装方針

1. **Server API**: Nuxt4の`server/api/`機能を使用し、`/api/auth/login`エンドポイントを実装。常に成功を返すモックAPI。
2. **Model**: ログインリクエスト/レスポンスのZodスキーマを定義
3. **Repository**: Server APIを呼び出すauthRepositoryを実装
4. **Composable**: ログイン状態管理とログイン処理を行うuseAuthを実装
5. **Page**: login.vueにフォームバインディングとログイン処理を追加
6. **Dashboard**: ダッシュボードページを新規作成（ログイン成功後の遷移先）

## タスク

- [ ] **1. Server API: ログインエンドポイント作成**
  - Skill: なし
  - 出力: `layers/main/server/api/auth/login.post.ts`
  - 依存: なし
  - 内容: POSTリクエストを受け取り、常に成功レスポンスを返すAPI

- [ ] **2. Model: 認証関連の型定義**
  - Skill: `nuxt4-models`
  - 出力: `layers/main/app/models/auth.ts`
  - 依存: なし
  - 内容: LoginRequest, LoginResponse, User型をZodスキーマで定義

- [ ] **3. Repository: 認証リポジトリ作成**
  - Skill: `repository-creator`
  - 出力: `layers/main/app/repositories/authRepository.ts`
  - 依存: 2
  - 内容: login APIを呼び出すリポジトリ関数

- [ ] **4. Repository Factory更新**
  - Skill: なし
  - 出力: `layers/main/app/utils/factory.ts`
  - 依存: 3
  - 内容: authRepositoryをfactoryに登録

- [ ] **5. Composable: 認証状態管理**
  - Skill: `nuxt4-composables`
  - 出力: `layers/main/app/composables/useAuth.ts`
  - 依存: 4
  - 内容: ログイン処理、認証状態管理、ダッシュボードへの遷移処理

- [ ] **6. Page: ダッシュボードページ作成**
  - Skill: `nuxt4-pages`
  - 出力: `layers/main/app/pages/dashboard.vue`
  - 依存: なし
  - 内容: ログイン成功後の遷移先となるダッシュボードページ

- [ ] **7. Page: ログインページにロジック追加**
  - Skill: なし（既存ファイル更新）
  - 出力: `layers/main/app/pages/login.vue`
  - 依存: 5, 6
  - 内容: v-modelバインディング、useAuth利用、ログイン処理実装

## 実行ログ

- [x] **1. Server API: ログインエンドポイント作成** - `layers/main/server/api/auth/login.post.ts`
- [x] **2. Model: 認証関連の型定義** - `layers/main/app/models/auth.ts`
- [x] **3. Repository: 認証リポジトリ作成** - `layers/main/app/repositories/authRepository.ts`
- [x] **4. Repository Factory更新** - `layers/main/app/utils/factory.ts`
- [x] **5. Composable: 認証状態管理** - `layers/main/app/composables/core/useAuth.ts`
- [x] **6. Page: ダッシュボードページ作成** - `layers/main/app/pages/dashboard.vue`
- [x] **7. Page: ログインページにロジック追加** - `layers/main/app/pages/login.vue`

完了日時: 2025-12-18
