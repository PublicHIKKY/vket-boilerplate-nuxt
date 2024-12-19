import typescriptEslint from '@typescript-eslint/eslint-plugin'
import globals from 'globals'
import sharedConfig from '../../eslint.config.shared.mjs'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  ...sharedConfig,

  // VueとNuxtの基本設定
  {
    files: ['**/*.vue'],
    rules: {
      'vue/no-unused-components': 'off',
      'vue/no-multiple-template-root': 'off',
      'vue/no-v-model-argument': 'off',
      'vue/no-v-html': 'error',
      'vue/multi-word-component-names': 'off',
      'vue/html-self-closing': 'off', // prettierと競合するため、off
      // ERROR  Cannot use 'import.meta' outside a module                                                                                                                                                                                                                                                               9:08:45 PM
      // asyncContext: !!__NUXT_ASYNC_CONTEXT__ && import.meta.server
      // ^^^^
      // `yarn fix`すると`process.server`が`import.meta.server`に置き換えられて↑が発生するので、off
      'nuxt/prefer-import-meta': 'off',
    },
  },

  // tsconfigが必要なルールの設定
  {
    files: ['**/*.ts', '**/*.vue'], // 'Parsing error: Type expected'するので.tsxは除外
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      ...typescriptEslint.configs.recommended.rules,
      ...typescriptEslint.configs['recommended-type-checked'].rules,
      '@typescript-eslint/restrict-template-expressions': 'off', // string interpolation `${e}` のeには、任意の型の値を許す
      '@typescript-eslint/no-unsafe-call': 'off', // auto-importした関数がanyに推測されるので、off
      // .vueの下記TODOコメントを参照
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
    },
  },
  // その他オーバーライド
  {
    files: ['**/test/**/*.ts'],
    languageOptions: {
      globals: {
        ...globals.jest,
        vi: true,
      },
    },
    rules: {
      '@typescript-eslint/unbound-method': 'off', // テスト内でvi.fn()などを注入するために許可
    },
  },
)
