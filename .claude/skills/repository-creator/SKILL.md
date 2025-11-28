---
name: repository-creator
description: Implement repository layer following project standards. Use when creating new repository files in layers/*/app/repositories/ or modifying existing repositories. Provides standard patterns for TypeScript repositories including type definitions, HTTP methods (GET/POST/PUT/PATCH/DELETE), Admin API helpers, FormData handling, and validation.
---

# Repository Creator

## 概要

このスキルは、Repository層の実装における標準的なパターンとテンプレートを提供します。Repository層は、APIとの通信を担当し、型安全性とバリデーションを確保する重要な層です。

## このスキルを使用する場面

以下のような場合にこのスキルを使用してください：

1. **新規Repositoryの作成**
   - `layers/[layer-name]/app/repositories/` 配下に新しいRepositoryファイルを作成する
   - 新しいAPIエンドポイントに対応するRepository実装が必要

2. **既存Repositoryの修正・拡張**
   - 既存のRepositoryに新しいメソッドを追加
   - OpenAPI型定義の更新に伴う修正
   - FormDataの取り扱いロジックの追加

3. **Repository実装パターンの確認**
   - プロジェクトの標準パターンに従った実装方法の確認
   - 型定義やバリデーションの実装方法の参照

## コア機能

### 1. 標準ガイドラインの提供

`reference.md` には、Repository層の実装における詳細なガイドラインが記載されています：

- **ファイル構成と命名規則**: プロジェクト内での一貫した構造
- **インポート構成**: 標準的なインポート順序と必須インポート
- **型定義パターン**: OpenAPI型がある場合の拡張方法、独自のRequest/Response型の定義
- **HTTPメソッド別実装**: GET/POST/PUT/PATCH/DELETEの標準実装
- **API接続先の抽象化**: 接続先が異なる場合のヘルパー関数実装パターン
- **FormData取り扱い**: 手動構築とユーティリティ関数の使用
- **バリデーション**: requireValueOfを使用したレスポンスの型検証
- **エラーハンドリング**: RuntimeConfig検証とエラー処理
- **ベストプラクティス**: 型の再利用、メソッド命名、パラメータ受け渡し

### 2. テンプレートファイルの提供

`template.ts` は、新規Repository作成時の出発点として使用できる完全なテンプレートです：

- セクション別に整理されたコード構造
- 各HTTPメソッドの実装例
- コメント付きでカスタマイズポイントを明示
- 必要に応じてコメントアウトを解除して使用できる代替実装

## 実装ワークフロー

### ステップ1: 要件の確認

新しいRepositoryを実装する前に、以下を確認：

1. **APIエンドポイントの仕様**
   - OpenAPI定義の確認（ある場合）
   - エンドポイントURL、HTTPメソッド、パラメータ
   - リクエスト/レスポンスの構造

2. **使用するAPI種別**
   - プロジェクトで定義されているAPI接続先を確認
   - `requireRuntimeConfig().public` 配下で利用可能なベースURLを特定
   - 動的なパスが必要な場合はヘルパー関数の実装を検討

3. **データ形式**
   - JSONボディ
   - FormData (画像やファイルアップロード)
   - クエリパラメータ

### ステップ2: ガイドラインの参照

実装を開始する前に、`reference.md` を参照：

```typescript
// ガイドラインを読み込む
Read: reference.md
```

特に以下のセクションを確認：
- セクション2: インポート構成
- セクション3: 型定義
- セクション4: Repository実装パターン
- セクション5: API接続先の抽象化（必要な場合）
- セクション12: チェックリスト

### ステップ3: テンプレートの活用

新規作成の場合は、テンプレートファイルを活用：

```typescript
// テンプレートを読み込む
Read: template.ts
```

テンプレートから開始して、以下をカスタマイズ：

1. **インポートセクション**
   - 必要なOpenAPI型をインポート（ある場合）
   - 使用するユーティリティ関数をインポート

2. **型定義セクション**
   - Request/Response型を定義
   - OpenAPI型がある場合は適切に拡張または再利用、ない場合は独自に定義

3. **Repository実装セクション**
   - 必要なHTTPメソッドのみ残す
   - 不要なメソッドは削除
   - コメントアウトされた代替実装を必要に応じて有効化

### ステップ4: 実装

以下のパターンに従って実装：

#### パターンA: シンプルなGET実装

```typescript
get: {
  async getResource(id: string): Promise<GetResourceResponse> {
    const baseUrl = requireRuntimeConfig().public?.api
    if (typeof baseUrl !== 'string') {
      raiseError('not found api url in runtimeConfig')
    }
    const response = await api('GET', `${baseUrl}/resources/${id}`)
    return requireValueOf(getResourceResponseSchema, response)
  },
} as const,
```

#### パターンB: クエリパラメータ付きGET

```typescript
get: {
  async getResources(parameters: GetResourcesRequest): Promise<GetResourcesResponse> {
    const baseUrl = requireRuntimeConfig().public?.api
    if (typeof baseUrl !== 'string') {
      raiseError('not found api url in runtimeConfig')
    }
    const queryContent = {
      limit: parameters.limit,
      offset: parameters.offset,
    }
    const query = createUrlSearchParameters(queryContent)
    const response = await api('GET',
      `${baseUrl}/resources${query ? '?' + query : ''}`,
    )
    return requireValueOf(getResourcesResponseSchema, response)
  },
} as const,
```

#### パターンC: FormDataを使用したPOST

```typescript
post: {
  async createResource(params: PostResourceRequest): Promise<PostResourceResponse> {
    const baseUrl = requireRuntimeConfig().public?.api
    if (typeof baseUrl !== 'string') {
      raiseError('not found api url in runtimeConfig')
    }
    const formData = objectToFormData(params.body)
    const response = await api('POST', `${baseUrl}/resources`, {
      body: formData,
    })
    return requireValueOf(postResourceResponseSchema, response)
  },
} as const,
```

#### パターンD: API接続先の抽象化（動的なパスを扱う場合）

```typescript
type AdminApi = ReturnType<typeof adminApi>
const getAdminApi = (label: string, resourceId?: number): AdminApi => {
  let pathPrefix = `/v1/admin/tenants/${tenantId}/resources`
  if (resourceId) {
    pathPrefix += `/${resourceId}`
  }
  return adminApi(pathPrefix)
}

export default {
  get: {
    async getResource(label: string, resourceId: number) {
      const api = getAdminApi(label, resourceId)
      const result = await api.get('')
      return requireValueOf(getResourceResponseSchema, result)
    },
  },
}
```

### ステップ5: 検証とテスト

実装後、以下を確認：

1. **型の整合性**
   - すべてのメソッドに適切な型注釈
   - Request/Response型が正しく定義されている

2. **バリデーション**
   - すべてのAPIレスポンスに`requireValueOf`を使用
   - スキーマが適切に定義されている

3. **エラーハンドリング**
   - RuntimeConfigの検証が実装されている
   - 必要に応じて`raiseError`を使用

4. **コード品質**
   - チェックリスト（ガイドライン セクション12）に従っている
   - `as const`が適切に使用されている

## よくある実装例

### 例1: リソースのCRUD操作

```typescript
export default {
  get: {
    async getResource(id: string) { /* ... */ },
    async getResources(params: GetResourcesRequest) { /* ... */ },
  } as const,
  post: {
    async createResource(body: PostResourceBody) { /* ... */ },
  } as const,
  put: {
    async updateResource(id: string, body: PutResourceBody) { /* ... */ },
  } as const,
  delete: {
    async deleteResource(id: string) { /* ... */ },
  } as const,
}
```

### 例2: 動的なパスを持つAPI接続（ライセンス管理系）

```typescript
const getAdminApi = (label: string, resourceId?: number) => {
  let pathPrefix = `/v1/admin/tenants/${tenantId}/resources`
  if (resourceId) pathPrefix += `/${resourceId}`
  return adminApi(pathPrefix)
}

export default {
  get: {
    async getResource(label: string, id: number) {
      const api = getAdminApi(label, id)
      const result = await api.get('')
      return requireValueOf(getResourceResponseSchema, result)
    },
  } as const,
  // ...
}
```

### 例3: 画像アップロード付きPOST

```typescript
post: {
  async createWithImages(params: PostResourceRequest) {
    const baseUrl = requireRuntimeConfig().public?.api
    if (typeof baseUrl !== 'string') {
      raiseError('not found api url in runtimeConfig')
    }

    const formData = new FormData()
    formData.append('name', params.body.name)

    if (params.body.images) {
      params.body.images.forEach((obj, index) => {
        if (obj.image) {
          formData.append(`images[${index}][image]`, obj.image)
          formData.append(`images[${index}][delete]`, 'false')
        }
      })
    }

    const response = await api('POST', `${baseUrl}/resources`, {
      body: formData,
    })
    return requireValueOf(postResourceResponseSchema, response)
  },
} as const,
```

## トラブルシューティング

### 問題: OpenAPI型が期待と異なる

**解決策**: `.extend()` を使用して一時的に型を拡張し、TODOコメントを追加

```typescript
// TODO: swagger修正後extend削除
export const getResourceResponseSchema =
  getApiResourceResponseSchema.extend({
    additionalField: z.string().nullable(),
  })
```

### 問題: FormDataの構築方法が不明

**解決策**: ガイドライン セクション6「FormDataの取り扱い」を参照

- シンプルな場合: `objectToFormData(params.body)`
- 複雑な場合: 手動でFormData構築（配列、条件付きフィールドなど）

### 問題: 型の再利用 vs 独自定義の判断

**解決策**:
1. OpenAPI型が完全に一致する → そのまま使用
2. 一部フィールドのみ必要 → `Pick<>` または `Omit<>` を使用
3. 追加フィールドが必要 → `.extend()` を使用
4. 完全に異なる → 独自に定義

## リソース

このスキルには2つの重要なファイルが含まれています：

### reference.md
Repository層実装の完全なガイドライン：
- ファイル構成と命名規則
- インポート構成
- 型定義パターン（OpenAPI型がある場合の拡張方法、独自定義）
- HTTPメソッド別実装パターン
- API接続先の抽象化（接続先が異なる場合のヘルパー関数）
- FormData取り扱い
- バリデーション（requireValueOfを使用）とエラーハンドリング
- ベストプラクティス
- チェックリスト

### template.ts
新規Repository作成用のテンプレート：
- セクション別に整理されたコード構造
- すべてのHTTPメソッドの実装例
- コメント付きカスタマイズポイント
- 代替実装（コメントアウト）

これらのリソースは、必要に応じてClaudeが読み込んで参照します。
