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
)
