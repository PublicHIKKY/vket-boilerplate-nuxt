/**
 * 以下のケースとなる場合、vket ssoのログイン状態とサービスで保持しているトークン情報で差異が出るのでリロードを行う
 * 1. SSR時にトークン情報が取得できない（有効期限切れ）が、クライアント側の「002.tokenRefresh.global」の実行で最新のトークンを取得できた場合
 *    ※他のサービスでログインしており、ssoログインは出来ているが、サービスがトークン情報を保持していないケース
 * 2. SSR時にトークン情報の取得ができたが、クライアント側で「001.fetchSsoUser.global」の実行でエラーが発生した場合
 *    ※トークン情報はサービス内に保持しているが、他のサービスでログアウトしているケース
 */
export default defineNuxtRouteMiddleware(() => {
  const authVketSso = useAuthVketSso()

  // 初期化処理
  if (import.meta.server) {
    authVketSso.isAuthError.value = false
    return
  }

  // NOTE: api呼び出し時に401エラーが発生した場合はvket ssoのログイン状態とサービスが所持しているトークン情報に差異があるためフラグが設定される
  // 「001.fetchSsoUser.global」でエラーが発生した際も同様
  if (authVketSso.isAuthError.value) {
    authVketSso.isAuthError.value = false
    reloadNuxtApp()
  }
})
