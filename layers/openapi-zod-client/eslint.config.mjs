import tseslintPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';
import sharedConfig from '../../eslint.config.shared.mjs';

export default [
  ...sharedConfig,

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
];
