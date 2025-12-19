import { defineEventHandler, readBody } from 'h3'

interface LoginRequest {
  email: string
  password: string
  rememberMe?: boolean
}

interface LoginResponse {
  success: boolean
  data: {
    user: {
      id: string
      email: string
      name: string
    }
    token: string
  }
  message: string
}

export default defineEventHandler(async (event): Promise<LoginResponse> => {
  const body = await readBody<LoginRequest>(event)

  // Always return success (mock API)
  return {
    success: true,
    data: {
      user: {
        id: '1',
        email: body.email,
        name: 'テストユーザー',
      },
      token: 'mock-jwt-token-' + Date.now(),
    },
    message: 'ログインに成功しました',
  }
})
