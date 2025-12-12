/**
 * Repository Template
 *
 * このテンプレートは、新しいRepositoryを作成する際の標準的な構造を提供します。
 * 必要に応じてセクションを追加・削除してください。
 */

// ============================================
// インポートセクション
// ============================================

// 1. 外部ライブラリ
import { z } from 'zod/v3'
// import type { FetchOptions } from 'ofetch'

// 2. 共通ユーティリティ
import { requireValueOf, ensureValueOf } from '#base/app/utils/zod'
import { requireRuntimeConfig } from '@/plugins/runtimeConfig'
import api from '@/utils/api'
import { raiseError } from '@/utils/error'

// 3. プロジェクト固有のヘルパー（必要に応じて）
// import { adminApi } from '@/repositories/adminApi'
// import { createUrlSearchParameters } from '@/utils/url'
// import { objectToFormData } from '@/utils/form-data'

// 4. モデル定義（アプリケーション層）
// import {
//   // カスタム型やEnumなど
// } from '@/models/[resource]'

// 5. OpenAPI自動生成型
import {
  // スキーマとレスポンス型をインポート
  // getApiResourceResponseSchema,
  // getApiResourceRequestType,
  // postApiResourceResponseSchema,
  // postApiResourceRequestType,
  // ...
} from '#open-api/app/models/[apiName]Api'

// ============================================
// 型定義セクション
// ============================================

// --------------------------------------------
// GET リクエスト・レスポンス型
// --------------------------------------------

// getResource
export const getResourceRequestSchema = z.object({
  id: z.string(),
  // 必要なフィールドを追加
})
export type GetResourceRequest = z.infer<typeof getResourceRequestSchema>

export const getResourceResponseSchema = z.object({
  // OpenAPIスキーマをベースにする、または独自に定義
  // レスポンスフィールドを定義
})
export type GetResourceResponse = z.infer<typeof getResourceResponseSchema>

// getResources (一覧取得の場合)
export const getResourcesRequestSchema = z.object({
  limit: z.number().optional(),
  offset: z.number().optional(),
  // その他のクエリパラメータ
})
export type GetResourcesRequest = z.infer<typeof getResourcesRequestSchema>

export const getResourcesResponseSchema = z.object({
  items: z.array(z.object({
    // アイテムの構造
  })),
  total: z.number().optional(),
})
export type GetResourcesResponse = z.infer<typeof getResourcesResponseSchema>

// --------------------------------------------
// POST リクエスト・レスポンス型
// --------------------------------------------

// postResource
export const postResourceBodySchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  // 必要なフィールドを追加
})
export type PostResourceBody = z.infer<typeof postResourceBodySchema>

export type PostResourceRequest = {
  body: PostResourceBody
}

export const postResourceResponseSchema = z.object({
  id: z.string(),
  // レスポンスフィールドを定義
})
export type PostResourceResponse = z.infer<typeof postResourceResponseSchema>

// --------------------------------------------
// PUT/PATCH リクエスト・レスポンス型
// --------------------------------------------

// putResource
export const putResourceBodySchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  // 更新可能なフィールドを追加
})
export type PutResourceBody = z.infer<typeof putResourceBodySchema>

export type PutResourceRequest = {
  id: string
  body: PutResourceBody
}

export const putResourceResponseSchema = z.object({
  // レスポンスフィールドを定義
})
export type PutResourceResponse = z.infer<typeof putResourceResponseSchema>

// --------------------------------------------
// DELETE リクエスト・レスポンス型
// --------------------------------------------

export type DeleteResourceRequest = {
  id: string
}

// レスポンスがある場合
export const deleteResourceResponseSchema = z.object({
  success: z.boolean(),
})
export type DeleteResourceResponse = z.infer<
  typeof deleteResourceResponseSchema
>

// ============================================
// ヘルパー関数（Admin API使用時）
// ============================================

// Admin API を使用する場合のヘルパー
// type AdminApi = ReturnType<typeof adminApi>
// const getAdminApi = (label: string, resourceId?: string | number): AdminApi => {
//   let pathPrefix = `/v1/admin/tenants/${tenantId}/resources`
//   if (resourceId) {
//     pathPrefix += `/${resourceId}`
//   }
//   return adminApi(pathPrefix)
// }

// ============================================
// Repository実装
// ============================================

export default {
  // --------------------------------------------
  // GET メソッド
  // --------------------------------------------
  get: {
    /**
     * リソースを取得
     */
    async getResource(id: GetResourceRequest['id']): Promise<GetResourceResponse> {
      const baseUrl = requireRuntimeConfig().public?.api
      if (typeof baseUrl !== 'string') {
        raiseError('not found api url in runtimeConfig')
      }

      const response = await api('GET', `${baseUrl}/resources/${id}`)
      return requireValueOf(getResourceResponseSchema, response)
    },

    /**
     * リソース一覧を取得
     */
    async getResources(
      parameters: GetResourcesRequest,
    ): Promise<GetResourcesResponse> {
      const baseUrl = requireRuntimeConfig().public?.api
      if (typeof baseUrl !== 'string') {
        raiseError('not found api url in runtimeConfig')
      }

      // クエリパラメータの構築
      const queryContent = {
        limit: parameters.limit,
        offset: parameters.offset,
        // その他のパラメータ
      }
      const query = createUrlSearchParameters(queryContent)

      const response = await api(
        'GET',
        `${baseUrl}/resources${query ? '?' + query : ''}`,
      )
      return requireValueOf(getResourcesResponseSchema, response)
    },
  } as const,

  // --------------------------------------------
  // POST メソッド
  // --------------------------------------------
  post: {
    /**
     * リソースを作成（JSONボディ）
     */
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

    /**
     * リソースを作成（FormData使用）
     */
    // async createResourceWithFiles(
    //   params: PostResourceRequest,
    // ): Promise<PostResourceResponse> {
    //   const baseUrl = requireRuntimeConfig().public?.api
    //   if (typeof baseUrl !== 'string') {
    //     raiseError('not found api url in runtimeConfig')
    //   }
    //
    //   // objectToFormDataを使用する場合
    //   const formData = objectToFormData(params.body)
    //
    //   // 手動でFormDataを構築する場合
    //   // const formData = new FormData()
    //   // formData.append('name', params.body.name)
    //   // if (params.body.description) {
    //   //   formData.append('description', params.body.description)
    //   // }
    //
    //   const response = await api('POST', `${baseUrl}/resources`, {
    //     body: formData,
    //   })
    //   return requireValueOf(postResourceResponseSchema, response)
    // },
  } as const,

  // --------------------------------------------
  // PUT メソッド
  // --------------------------------------------
  put: {
    /**
     * リソースを更新
     */
    async updateResource(
      id: PutResourceRequest['id'],
      body: PutResourceBody,
    ): Promise<PutResourceResponse> {
      const baseUrl = requireRuntimeConfig().public?.api
      if (typeof baseUrl !== 'string') {
        raiseError('not found api url in runtimeConfig')
      }

      const response = await api('PUT', `${baseUrl}/resources/${id}`, {
        body,
      })
      return requireValueOf(putResourceResponseSchema, response)
    },
  } as const,

  // --------------------------------------------
  // PATCH メソッド
  // --------------------------------------------
  patch: {
    /**
     * リソースを部分更新
     */
    // async patchResource(
    //   id: string,
    //   body: PatchResourceBody,
    // ): Promise<PatchResourceResponse> {
    //   const baseUrl = requireRuntimeConfig().public?.api
    //   if (typeof baseUrl !== 'string') {
    //     raiseError('not found api url in runtimeConfig')
    //   }
    //
    //   const formData = new FormData()
    //   // 値がある場合のみFormDataに追加
    //   if (body.name !== undefined) formData.append('name', body.name)
    //   if (body.description !== undefined) {
    //     formData.append('description', body.description)
    //   }
    //
    //   const response = await api('PATCH', `${baseUrl}/resources/${id}`, {
    //     body: formData,
    //   })
    //   return requireValueOf(patchResourceResponseSchema, response)
    // },
  } as const,

  // --------------------------------------------
  // DELETE メソッド
  // --------------------------------------------
  delete: {
    /**
     * リソースを削除（レスポンスなし）
     */
    async deleteResource(id: DeleteResourceRequest['id']): Promise<void> {
      const baseUrl = requireRuntimeConfig().public?.api
      if (typeof baseUrl !== 'string') {
        raiseError('not found api url in runtimeConfig')
      }

      await api('DELETE', `${baseUrl}/resources/${id}`)
    },

    /**
     * リソースを削除（レスポンスあり）
     */
    // async deleteResourceWithResponse(
    //   id: DeleteResourceRequest['id'],
    // ): Promise<DeleteResourceResponse> {
    //   const baseUrl = requireRuntimeConfig().public?.api
    //   if (typeof baseUrl !== 'string') {
    //     raiseError('not found api url in runtimeConfig')
    //   }
    //
    //   const response = await api('DELETE', `${baseUrl}/resources/${id}`)
    //   return requireValueOf(deleteResourceResponseSchema, response)
    // },
  } as const,
}
