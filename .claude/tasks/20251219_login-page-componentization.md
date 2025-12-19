# 実装タスク: ログインページコンポーネント化

作成日: 2025-12-19
ステータス: 完了

## 依頼内容

> layers/main/app/pages/login.vueを必要な粒度でコンポーネント化をお願いします。

> 追加指示（間違いの箇所を指定して以下のプロンプトを投げた）
ここ違いますね。
composableで定義しているステートはht,ho層で読み取って良いのでv-modelで受け取る必要はありません。
なぜこのように解釈したんでしょうか？ 

## 概要

現在の`login.vue`は560行の単一ファイルで、以下の要素がすべて含まれています：
- ロゴセクション（SVGアイコン + タイトル + サブタイトル）
- ログインフォーム（メール入力、パスワード入力、オプション行）
- エラー表示
- 送信ボタン
- 登録リンク
- フッター

これをAtomic Designパターンに基づき、適切な粒度でコンポーネント化します。

## 実装方針

### コンポーネント分割方針

1. **Ht層（HtLogin）**: ログインページ全体のレイアウト・UI構成
2. **Ho層（HoLoginCard）**: ログインカード全体（ロゴ + フォーム + リンク）
3. **Ho層（HoLoginForm）**: フォーム部分（入力フィールド + オプション + ボタン）
4. **Hm層（HmLoginInput）**: アイコン付き入力フィールド（再利用可能）
5. **Hm層（HmLoginCheckbox）**: カスタムチェックボックス（再利用可能）

### データフロー設計（inject/provide パターン）

```
Pages層 (login.vue)
  ├── useLoginForm() → provide(loginFormInjectionKey)
  ├── useAuth()（既存）
  └── HtLogin (@submit)
        └── inject(loginFormInjectionKey) → formData直接参照
              └── HoLoginCard
                    └── inject → formData直接参照
                          └── HoLoginForm
                                ├── HmLoginInput (Props: modelValue)
                                ├── HmLoginInput (Props: modelValue)
                                └── HmLoginCheckbox (Props: modelValue)
```

**原則に基づく設計**:
- Pages層でuseLoginForm Composableをprovide
- Ht/Ho層ではinjectしてComposableのステートを直接参照
- Hm層はProps/Emitsのみ（inject禁止）
- API呼び出し（login）はPages層でのみ実行

## タスク

- [ ] **1. useLoginForm Composable作成**
  - Skill: `nuxt4-composables`
  - 出力: `layers/main/app/composables/auth/form/useLoginForm.ts`
  - 依存: なし
  - 内容: formData (email, password, rememberMe) + InjectionKey + バリデーション

- [ ] **2. HmLoginInput作成**
  - Skill: `nuxt4-components`
  - 出力: `layers/main/app/components/hm/HmLoginInput.vue`
  - 依存: なし
  - 内容: アイコン付き入力フィールド（type: email/password対応、Props/Emitsのみ）

- [ ] **3. HmLoginCheckbox作成**
  - Skill: `nuxt4-components`
  - 出力: `layers/main/app/components/hm/HmLoginCheckbox.vue`
  - 依存: なし
  - 内容: カスタムスタイルチェックボックス（Props/Emitsのみ）

- [ ] **4. HoLoginForm作成**
  - Skill: `nuxt4-components`
  - 出力: `layers/main/app/components/ho/HoLoginForm.vue`
  - 依存: 1, 2, 3
  - 内容: フォーム全体（inject経由でformData参照、Hm層へはPropsで渡す）

- [ ] **5. HoLoginCard作成**
  - Skill: `nuxt4-components`
  - 出力: `layers/main/app/components/ho/HoLoginCard.vue`
  - 依存: 4
  - 内容: カード全体（ロゴセクション + HoLoginForm + 登録リンク、inject経由でステート参照可）

- [ ] **6. HtLogin作成**
  - Skill: `nuxt4-components`
  - 出力: `layers/main/app/components/ht/HtLogin.vue`
  - 依存: 5
  - 内容: ページ全体レイアウト（背景 + HoLoginCard + フッター、inject経由でステート参照可）

- [ ] **7. login.vue更新**
  - Skill: `nuxt4-pages`
  - 出力: `layers/main/app/pages/login.vue`
  - 依存: 1, 6
  - 内容: useLoginFormをprovide + HtLoginを使用するシンプルな構成

## 実行ログ

### 2025-12-19 完了

**作成されたファイル（7件）**:

| ファイル | 行数 | 説明 |
|----------|------|------|
| `composables/auth/form/useLoginForm.ts` | ~80行 | フォームステート + InjectionKey + バリデーション |
| `components/hm/HmLoginInput.vue` | ~120行 | アイコン付き入力フィールド |
| `components/hm/HmLoginCheckbox.vue` | ~100行 | カスタムチェックボックス |
| `components/ho/HoLoginForm.vue` | ~180行 | フォーム全体（inject使用） |
| `components/ho/HoLoginCard.vue` | ~140行 | カード全体（ロゴ + フォーム） |
| `components/ht/HtLogin.vue` | ~100行 | ページレイアウト（背景 + カード） |
| `pages/login.vue` | 75行 | シンプル化（560行→75行） |

**変更前後の比較**:
- Before: `login.vue` 560行（単一ファイル）
- After: 7ファイル、合計約800行（責務分離・再利用可能）

**データフロー**:
```
Pages (login.vue) - provide(loginFormInjectionKey)
  └── HtLogin
        └── HoLoginCard
              └── HoLoginForm - inject() → formData直接参照
                    ├── HmLoginInput (Props)
                    └── HmLoginCheckbox (Props)
```
