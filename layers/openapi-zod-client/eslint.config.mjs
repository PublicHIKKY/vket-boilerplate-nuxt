// @ts-check
// TODO: このファイルもbun fixされるようにする

import tseslintPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import globals from 'globals'
import sharedConfig from '../../eslint.config.shared.mjs'
import stylistic from '@stylistic/eslint-plugin'

export default [
  ...sharedConfig,

  // 基本設定
  {
    rules: {
      'no-console': ['warn', { allow: ['info', 'error'] }],
    }
  },

  // tsconfigが必要なルールの設定
  {
    files: ['**/*.{ts,mts,cts}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tseslintPlugin
    },
    rules: {
      ...tseslintPlugin.configs.recommended.rules,
      ...tseslintPlugin.configs['recommended-type-checked'].rules,
      '@typescript-eslint/restrict-template-expressions': 'off', // string interpolation `${e}` のeには、任意の型の値を許す
      '@typescript-eslint/no-unsafe-assignment': 'off', // zodがないと検証が難しいので、許す
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

  // コーディングスタイルの設定
  // https://eslint.style/rules
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/multiline-comment-style': ['warn', 'starred-block'],
    }
  },
  // https://eslint.style/guide/config-presets
  stylistic.configs.customize({
    semi: false,
    indent: 2,
    quotes: 'single',
    braceStyle: '1tbs',
    multilineCommentStyle: 'starred-block',
  }),
]
