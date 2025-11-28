/**
 * Model Template
 *
 * このファイルは新規Model作成時のテンプレートです。
 * 必要なセクションのコメントを解除して使用してください。
 *
 * ファイル名: [resource].ts (camelCase)
 * 配置場所: layers/[layer-name]/app/models/
 */

import { z } from 'zod/v3'

// ============================================================================
// 他モデルからのインポート（必要な場合）
// ============================================================================
// import { iconResponse } from '@/models/file'
// import { categoryType } from '@/models/category'

// ============================================================================
// OpenAPI自動生成型のインポート（必要な場合）
// ============================================================================
// import {
//   resourceSchema,
//   resourceDetailSchema,
// } from '#open-api/app/models/[api-name]Api'

// ============================================================================
// 定数（Enum）定義
// ============================================================================

// ステータス
export const STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  PENDING: 'pending',
} as const
export const status = z.enum([
  STATUS.ACTIVE,
  STATUS.INACTIVE,
  STATUS.PENDING,
])
export type Status = z.infer<typeof status>

// カテゴリ（コメント付きの例）
// export const CATEGORY = {
//   /** カテゴリA */
//   TYPE_A: 'type_a',
//   /** カテゴリB */
//   TYPE_B: 'type_b',
// } as const
// export const category = z.enum([
//   CATEGORY.TYPE_A,
//   CATEGORY.TYPE_B,
// ])
// export type Category = z.infer<typeof category>

// ============================================================================
// 基本スキーマ定義
// ============================================================================

// シンプルなスキーマ
export const iconResponse = z.object({
  url: z.string().nullable(),
})
export type IconResponse = z.infer<typeof iconResponse>

// メインエンティティ
export const resourceData = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullable(),
  status: status,
  createdAt: z.string(),
  updatedAt: z.string(),
})
export type ResourceData = z.infer<typeof resourceData>

// ネストしたオブジェクトを含むスキーマ
// export const resourceWithIcon = z.object({
//   id: z.number(),
//   name: z.string(),
//   icon: iconResponse,
// })
// export type ResourceWithIcon = z.infer<typeof resourceWithIcon>

// 配列を含むスキーマ
// export const resourceList = z.object({
//   resources: z.array(resourceData),
//   total: z.number(),
// })
// export type ResourceList = z.infer<typeof resourceList>

// ============================================================================
// OpenAPI型の拡張（必要な場合）
// ============================================================================

// そのまま使用する場合
// export const resource = resourceSchema
// export type Resource = z.infer<typeof resource>

// フィールドを追加する場合
// TODO: swagger修正後extend削除
// export const resourceDetail = resourceDetailSchema.extend({
//   additionalField: z.string().nullable(),
//   anotherField: z.number().optional(),
// })
// export type ResourceDetail = z.infer<typeof resourceDetail>

// ============================================================================
// デフォルト値（必要な場合）
// ============================================================================

export const defaultResource: ResourceData = {
  id: 0,
  name: '',
  description: null,
  status: STATUS.PENDING,
  createdAt: '',
  updatedAt: '',
}

// ============================================================================
// ヘルパー関数
// ============================================================================

// 変換関数: ステータスの表示名を取得
export const toStatusDisplayName = (value: Status): string => {
  const displayNames: Record<Status, string> = {
    [STATUS.ACTIVE]: 'アクティブ',
    [STATUS.INACTIVE]: '非アクティブ',
    [STATUS.PENDING]: '保留中',
  }
  return displayNames[value]
}

// ファクトリー関数: 部分的なデータからリソースを生成
export const createResource = (
  partial: Partial<ResourceData>,
): ResourceData => ({
  ...defaultResource,
  ...partial,
})

// フィルタリング関数: ステータスでリソースを抽出
export const filterByStatus = (
  items: ResourceData[],
  targetStatus: Status,
): ResourceData[] => items.filter((item) => item.status === targetStatus)

// フィルタリング関数: 複数のステータスでリソースを抽出
// export const filterByStatuses = (
//   items: ResourceData[],
//   statuses: Status[],
// ): ResourceData[] => items.filter((item) => statuses.includes(item.status))

// ============================================================================
// その他のヘルパー関数（必要に応じて実装）
// ============================================================================

// 検証関数: 特定の条件を満たすかチェック
// export const isActiveResource = (item: ResourceData): boolean =>
//   item.status === STATUS.ACTIVE

// 集計関数: 配列から統計情報を取得
// export const countByStatus = (
//   items: ResourceData[],
// ): Record<Status, number> => {
//   const counts = { [STATUS.ACTIVE]: 0, [STATUS.INACTIVE]: 0, [STATUS.PENDING]: 0 }
//   items.forEach((item) => counts[item.status]++)
//   return counts
// }

// ソート関数: 特定の条件でソート
// export const sortByCreatedAt = (
//   items: ResourceData[],
//   order: 'asc' | 'desc' = 'desc',
// ): ResourceData[] =>
//   [...items].sort((a, b) => {
//     const diff = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
//     return order === 'asc' ? diff : -diff
//   })

// マッピング関数: エンティティを別の形式に変換
// export const toSelectOptions = (
//   items: ResourceData[],
// ): { value: number; label: string }[] =>
//   items.map((item) => ({ value: item.id, label: item.name }))
