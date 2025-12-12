# Repository層 実装ガイドライン

このドキュメントは、Repository層の実装における標準的なパターンと規約を定義します。

## 1. ファイル構成

### 1.1 基本構造
```
layers/[layer-name]/app/repositories/
├── adminApi.ts          # Admin API用の共通ヘルパー
├── [resource]Repository.ts  # 各リソース用のリポジトリ
└── [subdomain]/         # サブドメイン用のディレクトリ（必要に応じて）
    └── [resource]Repository.ts
```

### 1.2 命名規則
- ファイル名: `[リソース名]Repository.ts` (camelCase)
  - 例: `worldRepository.ts`, `eventRepository.ts`, `subscriptionRepository.ts`
- 複合語の場合もcamelCaseを維持
  - 例: `sceneProjectsRepository.ts`, `billingAddressRepository.ts`

## 2. インポート構成

### 2.1 標準的なインポート順序
```typescript
// 1. 外部ライブラリ
import { z } from 'zod/v3'
import type { FetchOptions } from 'ofetch'

// 2. 共通ユーティリティ
import { requireValueOf, ensureValueOf } from '#base/app/utils/zod'
import { requireRuntimeConfig } from '@/plugins/runtimeConfig'
import api from '@/utils/api'
import { raiseError } from '@/utils/error'

// 3. プロジェクト固有のヘルパー
import { adminApi } from '@/repositories/adminApi'
import { createUrlSearchParameters } from '@/utils/url'
import { objectToFormData } from '@/utils/form-data'

// 4. モデル定義（アプリケーション層）
import {
  // Response型、Request型など
} from '@/models/[resource]'

// 5. OpenAPI自動生成型
import {
  // スキーマとレスポンス型
} from '#open-api/app/models/[api-name]Api'
```

### 2.2 必須インポート
- `requireValueOf` または `ensureValueOf`: レスポンスの型検証用
- `requireRuntimeConfig`: ベースURL取得用
- `api`: HTTP通信用の共通関数
- `raiseError`: エラーハンドリング用（必要な場合）

## 3. 型定義

### 3.1 OpenAPI型の拡張パターン
```typescript
// 基本パターン: OpenAPIスキーマをそのまま使用
export const getResourceResponseSchema = getApiResourceResponseSchema
export type GetResourceResponse = z.infer<typeof getResourceResponseSchema>

// 拡張パターン1: バックエンド修正待ちの一時的拡張
export const getResourceResponseSchema =
  getApiResourceResponseSchema.extend({
    additionalField: z.string().nullable(),
  })

// 拡張パターン2: File型を含むフォームデータ
export const postResourceBodySchema =
  postApiResourceBodySchema.extend({
    images: z
      .record(
        z.string(),
        z
          .object({ image: z.instanceof(File).optional(), delete: z.boolean() })
          .partial(),
      )
      .optional(),
  })
```

### 3.2 Request/Response型の定義方法
```typescript
// パターン1: OpenAPI型をそのまま使用
export type GetResourceRequest = getApiResourceRequestType

// パターン2: 特定フィールドのみ抽出
export type PostResourceRequest = Pick<
  postApiResourceRequestType,
  'body'
>

// パターン3: 特定フィールドを除外
export type GetResourcesRequest = Omit<
  getApiResourcesRequestType,
  'platformCode' | 'authorization'
>

// パターン4: 追加フィールドを含む
export type GetResourcesRequest = Omit<
  getApiResourcesRequestType,
  'platformCode'
> & {
  filter?: ResourceFilterEnum
  sort?: ResourceSortEnum
}
```

### 3.3 型定義の配置順序
1. Request型のスキーマ定義
2. Request型の型エイリアス
3. Response型のスキーマ定義
4. Response型の型エイリアス

```typescript
// Request
export const getResourceRequestSchema = ...
export type GetResourceRequest = z.infer<typeof getResourceRequestSchema>

// Response
export const getResourceResponseSchema = ...
export type GetResourceResponse = z.infer<typeof getResourceResponseSchema>
```

## 4. Repository実装パターン

### 4.1 基本構造
```typescript
export default {
  get: {
    // GET系のメソッド
  } as const,
  post: {
    // POST系のメソッド
  } as const,
  put: {
    // PUT系のメソッド
  } as const,
  patch: {
    // PATCH系のメソッド
  } as const,
  delete: {
    // DELETE系のメソッド
  } as const,
}
```

### 4.2 HTTPメソッド別の実装パターン

#### GET メソッド
```typescript
get: {
  async getResource(
    id: GetResourceRequest['id'],
  ): Promise<GetResourceResponse> {
    const baseUrl = requireRuntimeConfig().public?.api
    if (typeof baseUrl !== 'string') {
      raiseError('not found api url in runtimeConfig')
    }
    const response = await api('GET', `${baseUrl}/resources/${id}`)
    return requireValueOf(getResourceResponseSchema, response)
  },

  // クエリパラメータを含む場合
  async getResources(
    parameters: GetResourcesRequest,
  ): Promise<GetResourcesResponse> {
    const baseUrl = requireRuntimeConfig().public?.api
    if (typeof baseUrl !== 'string') {
      raiseError('not found api url in runtimeConfig')
    }
    const queryContent = {
      limit: parameters.limit,
      offset: parameters.offset,
      filter: parameters.filter,
    }
    const query = createUrlSearchParameters(queryContent)
    const response = await api('GET',
      `${baseUrl}/resources${query ? '?' + query : ''}`,
    )
    return requireValueOf(getResourcesResponseSchema, response)
  },
} as const,
```

#### POST メソッド
```typescript
post: {
  // JSONボディの場合
  async createResource(
    params: PostResourceRequest,
  ): Promise<PostResourceResponse> {
    const baseUrl = requireRuntimeConfig().public?.api
    if (typeof baseUrl !== 'string') {
      raiseError('not found api url in runtimeConfig')
    }
    const response = await api('POST', `${baseUrl}/resources`, {
      body: params.body,
    })
    return requireValueOf(postResourceResponseSchema, response)
  },

  // FormDataの場合
  async createResourceWithFiles(
    params: PostResourceRequest,
  ): Promise<PostResourceResponse> {
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

#### PUT/PATCH メソッド
```typescript
put: {
  async updateResource(
    id: PutResourceRequest['id'],
    body: PutResourceBody,
  ): Promise<PutResourceResponse> {
    const baseUrl = requireRuntimeConfig().public?.api
    if (typeof baseUrl !== 'string') {
      raiseError('not found api url in runtimeConfig')
    }
    const formData = objectToFormData(body)
    const response = await api('PUT', `${baseUrl}/resources/${id}`, {
      body: formData,
    })
    return requireValueOf(putResourceResponseSchema, response)
  },
} as const,

patch: {
  async patchResource(
    id: string,
    body: PatchResourceParams,
  ): Promise<PatchResourceResponse> {
    const api = getAdminApi(id)
    const formData = new FormData()
    // 値がある場合のみFormDataに追加
    if (body.name !== undefined) formData.append('name', body.name)
    if (body.published !== undefined) {
      formData.append('published', `${body.published}`)
    }
    const result = await api.patch('', { body: formData })
    return requireValueOf(patchResourceResponseSchema, result)
  },
} as const,
```

#### DELETE メソッド
```typescript
delete: {
  async deleteResource(id: string): Promise<void> {
    const baseUrl = requireRuntimeConfig().public?.api
    if (typeof baseUrl !== 'string') {
      raiseError('not found api url in runtimeConfig')
    }
    await api('DELETE', `${baseUrl}/resources/${id}`)
  },

  // レスポンスがある場合
  async deleteResourceWithResponse(
    id: DeleteResourceRequest['id'],
  ): Promise<DeleteResourceResponse> {
    const baseUrl = requireRuntimeConfig().public?.api
    if (typeof baseUrl !== 'string') {
      raiseError('not found api url in runtimeConfig')
    }
    const response = await api('DELETE', `${baseUrl}/resources/${id}`)
    return requireValueOf(deleteResourceResponseSchema, response)
  },
} as const,
```

## 5. Admin API パターン

### 5.1 Admin APIヘルパーの使用
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
    async getResource(
      tenantId: string,
      resourceId: number,
    ): Promise<GetResourceResponse> {
      const api = getAdminApi(tenantId, resourceId)
      const result = await api.get('')
      return requireValueOf(getResourceResponseSchema, result)
    },
  },
  // ...
}
```

## 6. FormDataの取り扱い

### 6.1 手動FormData構築パターン
```typescript
const formData = new FormData()
formData.append('name', body.name)
formData.append('description', body.description)

// Boolean値の場合
formData.append('published', `${body.published}`)

// 条件付きフィールド
if (body.optional !== undefined) {
  formData.append('optional', body.optional)
}

// 配列の場合
if (body.images) {
  body.images.forEach((obj, index) => {
    if (obj.image) {
      formData.append(`images[${index}][image]`, obj.image)
      formData.append(`images[${index}][delete]`, 'false')
    }
  })
}

// オブジェクトの場合
if (body.images !== undefined) {
  Object.entries(body.images).forEach(([index, obj]) => {
    if (obj.image) {
      formData.append(`images[${index}][image]`, obj.image)
    }
    if (obj.delete !== undefined) {
      formData.append(`images[${index}][delete]`, String(obj.delete))
    }
  })
}
```

### 6.2 ユーティリティ関数の使用
```typescript
// objectToFormData を使用する場合
const formData = objectToFormData(params.body)
const response = await api('POST', `${baseUrl}/resources`, {
  body: formData,
})
```

## 7. バリデーション

### 7.1 requireValueOf vs ensureValueOf
```typescript
// requireValueOf: レスポンスを返す（推奨）
return requireValueOf(responseSchema, response)

// ensureValueOf: バリデーションのみ（レスポンスは既存変数を使用）
ensureValueOf(responseSchema, result)
return result
```

### 7.2 型ガードの実施タイミング
- 全てのAPIレスポンスに対して実施
- `requireValueOf` または `ensureValueOf` を必ず使用
- スキーマが定義されているレスポンスは必ず検証

## 8. エラーハンドリング

### 8.1 RuntimeConfig検証
```typescript
const baseUrl = requireRuntimeConfig().public?.api
if (typeof baseUrl !== 'string') {
  raiseError('not found api url in runtimeConfig')
}
```

### 8.2 その他のエラーハンドリング
- 基本的にAPIレスポンスエラーは上位層で処理
- Repository層では型検証のみ実施
- 必要に応じて`raiseError`でカスタムエラーをスロー

## 9. URLとパスの構築

### 9.1 ベースURLの取得
```typescript
// 一般的なAPI
const baseUrl = requireRuntimeConfig().public?.api

// 特定のAPI
const baseUrl = requireRuntimeConfig().public?.resourcesApiUrl
const baseUrl = requireRuntimeConfig().public?.assetUploaderUrl
```

### 9.2 パスの構築
```typescript
// 固定パス
`${baseUrl}/resources`

// パラメータを含むパス
`${baseUrl}/resources/${resourceId}`

// プレフィックスを使用
const prefix = '/resources'
`${baseUrl}${prefix}/${resourceId}`

// クエリパラメータ
const query = createUrlSearchParameters(queryContent)
`${baseUrl}/resources${query ? '?' + query : ''}`
```

## 10. コメント規約

### 10.1 TODOコメント
```typescript
// TODO: swagger修正後extend削除
export const getResourceRequestSchema =
  getApiResourceRequestSchema.extend({ ... })

// MEMO: 自動生成された型ではworldIdがstring型になっているため、number型に変換
export const getResourceRequestSchema = ...
```

### 10.2 セクションコメント
```typescript
// getResource
export const getResourceRequestSchema = ...
export type GetResourceRequest = ...
export const getResourceResponseSchema = ...
export type GetResourceResponse = ...
```

## 11. ベストプラクティス

### 11.1 型の再利用
- OpenAPI型を可能な限り再利用
- 一時的な拡張は明示的にコメント
- 型定義とスキーマ定義を分離

### 11.2 メソッドの命名
- 動詞 + リソース名 の形式
  - `getResource`, `getResources`
  - `createResource`, `postResource`
  - `updateResource`, `patchResource`
  - `deleteResource`

### 11.3 パラメータの受け渡し
```typescript
// 良い例: 型付きパラメータ
async getResource(id: GetResourceRequest['id'])

// 良い例: 複数パラメータの場合はオブジェクト
async getResources(parameters: GetResourcesRequest)

// 避けるべき: any型
async getResource(params: any)
```

### 11.4 as const の使用
```typescript
export default {
  get: { ... } as const,
  post: { ... } as const,
  // ...
}
```
これにより、exportされたオブジェクトが読み取り専用になり、意図しない変更を防ぐ。

## 12. チェックリスト

新しいRepositoryを作成する際のチェックリスト：

- [ ] ファイル名が `[resource]Repository.ts` の形式
- [ ] 必要なインポートが全て揃っている
- [ ] Request/Response型が適切に定義されている
- [ ] 全てのメソッドに型注釈がある
- [ ] `requireValueOf` または `ensureValueOf` でレスポンスを検証
- [ ] `requireRuntimeConfig` でベースURLを取得
- [ ] エラーハンドリングが適切
- [ ] HTTPメソッド別にグループ化されている
- [ ] `as const` が各HTTPメソッドグループに付与されている
- [ ] FormDataの構築が適切（必要な場合）
- [ ] TODOコメントが適切に記載されている（必要な場合）
