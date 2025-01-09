# vket sso layer

vket sso周りの処理をまとめているレイヤー

## 初期設定

vket ssoを利用したいレイヤーのnuxt.config.tsに当レイヤーを継承するように設定  
継承すると以下がmiddlewareとして登録され有効になります。  
* vket ssoユーザー情報の取得（SSR非対応）   
* トークンのリフレッシュ（SSR非対応）  
* SSRで401エラーが発生したときに更新するフラグを初期化する処理  
※クライアントサイドでリフレッシュしたいケースとしないケースを考慮し実装されています。（詳細後述します）  
上記のmiddlewareはエラーが発生しても他のレイヤーに影響が出ないようにログのみ出力を行ています。  
なのでエラーハンドリングについては各レイヤーに委ねる構成となっています。

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
    // ...
    extends: path.resolve(__dirname, '../vket-sso'), // 配列で複数レイヤーの継承もできます。
    // ...
})
```

## 機能

1. vket ssoユーザー情報の取得
middlewareの「001.fetchSsoUser.global.ts」で一度だけユーザー情報を取得します。
このmiddlewareはSSRで実行できない構成となっているためクライアントでのみ動きます。 
※何度もAPIを呼んでしまうので一度取得したらSPA遷移中は再取得しません。  
参照する場合は「./app/composables/useAuthVketSso」にある「ssoUser」を利用してください。

2. トークン情報の最新化
middlewareの「002.tokenRefresh.global.ts」で一度だけトークン情報を最新化します。
このmiddlewareはSSRで実行できない構成となっているためクライアントでのみ動きます。 
※何度もAPIを呼んでしまうので一度取得したらSPA遷移中は再取得しません。 
参照する場合は「./app/composables/useAuthVketSso」にある「aliveToken」を利用してください。

3. api呼び出し時のトークン設定  
トークン情報が必要なapiを実行したい場合は、当レイヤーにある「./app/utils/vket-sso-api」を使うことでトークンが設定をしつつapi呼出しを行えます。
このファイルは「base/app/utils/default-api」を継承して作っているため、default-apiで呼び出している部分をvket-sso-apiに変えるだけで動くようになっています。

4. ログイン（ログアウト）
vket account経由でのログイン（ログアウト）をする場合は「./app/composables/useAuthVketSso」にある「login / logout」関数を利用します。  
この関数はエラーが起きた場合、i18nのkeyを返却するので呼び出し元でエラーハンドリングの実装をお願いします。  
注）vket-ssoレイヤーですでに翻訳の定義はしてあるのでテキストを変えたい場合は継承したレイヤーのほうで上書きするように実装してください。

5. SSR時にapiを実行し401エラーが出た際、クライアント側でデータの再取得を行う機能  
例えば他のvket ssoを利用しているサービスでログインを行い、当サービスに訪れた際にSSR時点ではトークン情報が取得出来ないため、401エラーになるケースがあります。  
middlewareの「authErrorRefresh.ts」を使うことでSSRで401エラーが出てもクライアント側でリフレッシュを行い再度データの取得を行えるようになります。  
※globalで行うとリフレッシュが強制となるのであえて非globalとしています。（globalの方はフラグの更新のみ行います）