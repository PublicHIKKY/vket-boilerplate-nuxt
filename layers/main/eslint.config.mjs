import typescriptEslint from '@typescript-eslint/eslint-plugin'
import globals from 'globals'
import sharedConfig from '../../eslint.config.shared.mjs'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  ...sharedConfig,
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
  }
)
