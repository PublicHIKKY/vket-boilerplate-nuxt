/**
 * 認証関連のModel定義
 *
 * ログイン/認証に関する型定義とZodスキーマ
 */

import { z } from 'zod/v3'

/*
 * ============================================================================
 * ユーザースキーマ
 * ============================================================================
 */

export const userData = z.object({
  id: z.number(),
  email: z.string(),
  name: z.string(),
  createdAt: z.string(),
})
export type UserData = z.infer<typeof userData>

/*
 * ============================================================================
 * ログインリクエスト/レスポンス
 * ============================================================================
 */

export const loginRequest = z.object({
  email: z.string().email(),
  password: z.string().min(1),
  rememberMe: z.boolean().optional(),
})
export type LoginRequest = z.infer<typeof loginRequest>

export const loginResponse = z.object({
  success: z.boolean(),
  data: z.object({
    user: userData,
    token: z.string(),
  }),
})
export type LoginResponse = z.infer<typeof loginResponse>

/*
 * ============================================================================
 * デフォルト値
 * ============================================================================
 */

export const defaultUser: UserData = {
  id: 0,
  email: '',
  name: '',
  createdAt: '',
}

export const defaultLoginRequest: LoginRequest = {
  email: '',
  password: '',
  rememberMe: false,
}
