import type { FetchOptions } from 'ofetch'
import snakecaseKeys from 'snakecase-keys'
import camelcaseKeys from 'camelcase-keys'

/**
 * 高度なAPI管理システム
 * 自動的にcamelCase/snake_case変換を行うAPIクライアント
 */

// 型定義
interface TodoData {
  title?: string
  description?: string
  completed?: boolean
}

interface UserProfileData {
  name?: string
  email?: string
  avatar?: string
}

interface ConfigData {
  theme?: string
  language?: string
  notifications?: boolean
}

/**
 * デフォルトのFetchオプション
 * リクエスト時にcamelCase → snake_case変換
 * レスポンス時にsnake_case → camelCase変換
 */
export const defaultFetchOptions: FetchOptions = {
  retry: 2,
  onRequest: (ctx) => {
    if (!ctx.options.body || typeof ctx.options.body !== 'object' || ctx.options.body instanceof FormData)
      return
    if (typeof ctx.options.body === 'object' && ctx.options.body !== null) {
      ctx.options.body = snakecaseKeys(
        ctx.options.body as Record<string, unknown>,
        { deep: true },
      )
    }
  },
  onResponse: async (ctx) => {
    if (!ctx.response._data || typeof ctx.response._data !== 'object') return
    ctx.response._data = await camelcaseKeys(ctx.response._data, { deep: true })
  },
}

/**
 * 拡張APIフェッチャー
 * 自動的にケース変換を行うuseFetchラッパー
 */
export const fetcher = <T>(
  path: string,
  options?: Partial<FetchOptions>,
) => {
  return $fetch<T>(path, {
    ...defaultFetchOptions,
    ...options,
  } as Parameters<typeof $fetch>[1])
}

/**
 * リポジトリキー型
 * 利用可能なAPIエンドポイントを定義
 */
export type RepositoryKey = 'todo' | 'user' | 'config'

/**
 * リポジトリファクトリ
 * エンドポイント別のAPIクライアントを提供
 */
const _getRepo = (endpoint: RepositoryKey) => {
  switch (endpoint) {
    case 'todo':
      return {
        getAll: () => fetcher('/api/todos'),
        getById: (id: string) => fetcher(`/api/todos/${id}`),
        create: (data: TodoData) => fetcher('/api/todos', { method: 'POST', body: data }),
        update: (id: string, data: Partial<TodoData>) => fetcher(`/api/todos/${id}`, { method: 'PUT', body: data }),
        delete: (id: string) => fetcher(`/api/todos/${id}`, { method: 'DELETE' }),
      }
    case 'user':
      return {
        getProfile: () => fetcher('/api/user/profile'),
        updateProfile: (data: Partial<UserProfileData>) => fetcher('/api/user/profile', { method: 'PUT', body: data }),
      }
    case 'config':
      return {
        get: () => fetcher('/api/config'),
        update: (data: Partial<ConfigData>) => fetcher('/api/config', { method: 'PUT', body: data }),
      }
    default:
      throw new Error(`Unknown repository endpoint: ${endpoint}`)
  }
}

/**
 * API管理用Composable
 * エンドポイント別のリポジトリを提供
 */
export default function useApi<K extends RepositoryKey>(endpoint: K) {
  const repository = ref(_getRepo(endpoint))
  return {
    repository,
  }
}
