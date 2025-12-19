/**
 * ログインAPI
 * POST /api/auth/login
 *
 * 常にログイン成功を返すモック実装
 */
export default defineEventHandler(async (event) => {
  const body = await readBody<{ email: string; password: string; rememberMe?: boolean }>(event)

  // リクエストボディのバリデーション
  if (!body.email || !body.password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      message: 'メールアドレスとパスワードは必須です',
    })
  }

  // モック実装: 常に成功を返す
  const mockUser = {
    id: 1,
    email: body.email,
    name: 'テストユーザー',
    createdAt: new Date().toISOString(),
  }

  const mockToken = `mock_token_${Date.now()}`

  return {
    success: true,
    data: {
      user: mockUser,
      token: mockToken,
    },
  }
})
