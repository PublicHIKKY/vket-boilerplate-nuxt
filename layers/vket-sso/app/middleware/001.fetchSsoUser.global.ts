/**
 * CSRでSSOユーザー情報を取得するmiddleware
 * エラーハンドリングはmainアプリケーションlayerで行うとし、ここではログを出力するのみとする
 */
export default defineNuxtRouteMiddleware(async () => {
  if (import.meta.server) return
  try {
    const authVketSso = useAuthVketSso()
    const ssoUser = await authVketSso.getSsoUserState(false)
    if (ssoUser.value) return
    authVketSso.fetchSsoUser()
  } catch (error) {
    console.error(error)
  }
})
