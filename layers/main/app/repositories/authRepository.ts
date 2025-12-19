/**
 * 認証Repository
 *
 * ログイン/認証に関するAPI通信を担当
 */

import { requireValueOf } from '#base/app/utils/zod'
import {
  loginResponse,
  type LoginRequest,
  type LoginResponse,
} from '@/models/auth'

export default {
  post: {
    /**
     * ログイン
     */
    async login(params: LoginRequest): Promise<LoginResponse> {
      const response = await $fetch('/api/auth/login', {
        method: 'POST',
        body: {
          email: params.email,
          password: params.password,
          rememberMe: params.rememberMe,
        },
      })
      return requireValueOf(loginResponse, response)
    },
  } as const,
}
