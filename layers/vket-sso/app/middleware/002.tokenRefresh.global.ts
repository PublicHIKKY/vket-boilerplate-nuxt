/**
 * SSR/CSRともにページ遷移時にトークンの情報を最新化するmiddleware
 * エラーハンドリングはmainアプリケーションlayerで行うとし、ここではログを出力するのみとする
 */
export default defineNuxtRouteMiddleware(async () => {
  try {
    const authVketSso = useAuthVketSso()
    if (authVketSso.isLogout.value) return
    await authVketSso.getTokenOrRefresh()
  }
  catch (error) {
    console.error(error)
  }
})
