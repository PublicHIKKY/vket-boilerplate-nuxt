import { requireValueOf } from '#base/app/utils/zod'
import {
  loginRequest,
  loginResponse,
  type LoginRequest,
  type LoginResponse,
} from '@/models/auth'

/*
 * ============================================================================
 * Type Definitions
 * ============================================================================
 */

export const postLoginRequestSchema = loginRequest
export type PostLoginRequest = LoginRequest

export const postLoginResponseSchema = loginResponse
export type PostLoginResponse = LoginResponse

/*
 * ============================================================================
 * Repository
 * ============================================================================
 */

export default {
  post: {
    async login(params: PostLoginRequest): Promise<PostLoginResponse> {
      const response = await $fetch('/api/auth/login', {
        method: 'POST',
        body: params,
      })
      return requireValueOf(postLoginResponseSchema, response)
    },
  } as const,
}
