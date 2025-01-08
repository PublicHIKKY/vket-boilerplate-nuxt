/**
 * authErrorRefreshをページで適用していない場合、401エラーの情報が保持され続けるので適用していない場合は値を戻す
 * 値を戻さないとSSR時に401エラーが発生しフラグがtrueになった後、SPA遷移でauthErrorRefresh適用しているページに遷移した際に意図しない状況となるため戻す
 */
export default defineNuxtRouteMiddleware((to) => {
  const authVketSso = useAuthVketSso()

  const middleware = to.meta.middleware
  // NOTE: middlewareの値は文字列だが、型定義が「NavigationGuard」となるのでStringにキャストしてチェックしている
  if (typeof middleware === 'string' && String(middleware) === 'auth-error-refresh') return
  if (Array.isArray(middleware) && middleware.map(item => String(item)).includes('auth-error-refresh')) return
  authVketSso.isAuthError.value = false
})
