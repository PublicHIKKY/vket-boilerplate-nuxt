/**
 * SSR/CSRともにページ遷移時にトークンの情報を最新化するmiddleware
 * エラーハンドリングはmainアプリケーションlayerで行うとし、ここではログを出力するのみとする
 */
export default defineNuxtRouteMiddleware(() => {
  try {
    const authVketSso = useAuthVketSso()
    authVketSso.getTokenOrRefresh()
  } catch (error) {
    console.error(error)
  }
})
