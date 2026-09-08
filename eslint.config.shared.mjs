// @ts-check
import eslint from '@eslint/js';
import { defineConfig } from "eslint/config";
import globals from 'globals';

export const basicConfig =   {
  files: [
    '**/*.js',
    '**/*.mjs',
    '**/*.cjs',
    '**/*.ts',
    '**/*.mts',
    '**/*.cts',
  ],
  languageOptions: {
    globals: {
      ...globals.es2023,
      // NOTE: eslint実行時に `error 'something' is not defined no-undef` のようなエラーが出て、'something'が既知のものだったら（例えばauto-importなどでimportされることがわかっている・標準ライブラリに載っている、など。）、ここ（もしくは下の「オーバーライド」）に `something: true` と追加してください
    },
  },
  rules: {
    'require-jsdoc': 'off',
    'valid-jsdoc': 'off',
    'dot-notation': 'off',
    'import/named': 'off',
    'no-unused-vars': 'off', // '@typescript-eslint/no-unused-vars'と重複するのでoff: https://typescript-eslint.io/rules/no-unused-vars/#how-to-use
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/array-type': [
      'warn',
      {
        default: 'array',
      },
    ],
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error', 'info', 'debug', 'table', 'time', 'timeEnd', 'group', 'groupCollapsed', 'groupEnd', 'groupCollapsedEnd', 'trace'],
      },
    ],
  },
}

export default defineConfig(
  eslint.configs.recommended,
  // 基本ルールセットは nuxt 側 (@nuxt/eslint-config) に任せる

  {
    files: [
      '**/*.vue',
      '**/*.ts',
      '**/*.mts',
      '**/*.cts',
    ],
    rules: {
      /*
       * useAsyncData を await せずに `.then()` をぶら下げると、コールバックがマイクロタスクとして
       * 走る。サーバー側ではその時点で Nuxt のリクエストコンテキストが失われているため、
       * コールバック内の showError / navigateTo が `[nuxt] instance unavailable` で失敗する
       * （nuxt.config の experimental.asyncContext を有効にしていない場合）。
       * 加えて、初回ハイドレーションの 1 回目の描画に間に合わないので hydration mismatch も起こす。
       *
       * @typescript-eslint/no-floating-promises では検知できない。`.then(cb).catch(handler)` を
       * 「ハンドル済みの Promise」と判定するためで、このパターンはその形をしている。
       * そのため専用の selector を置いている。
       */
      'no-restricted-syntax': ['error', {
        /*
         * 危険なのは「戻り値をどこにも渡さず、式文として捨てている」形
         * （`.then()` / `.catch()` をぶら下げているものと `void useAsyncData(...)` を含む）。
         * `const { data } = useAsyncData(...)` や `return useAsyncData(...)` は戻り値を扱っており、
         * `data` / `error` をリアクティブに参照する正しい宣言的パターンなので対象外にする。
         */
        selector: "ExpressionStatement CallExpression[callee.name='useAsyncData']:not(AwaitExpression CallExpression[callee.name='useAsyncData'])",
        message: 'useAsyncData は await してください（未await の .then() は SSR で Nuxt コンテキストを失い、hydration mismatch も起こします）',
      }],
    },
  },
)
