// @ts-check]
import eslint from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,

  // グローバルignore https://eslint.org/docs/latest/use/configure/configuration-files#globally-ignoring-files-with-ignores
  {
    ignores: [
      '.*',
      '.*/*',
      'bin/*',
      'config/*',
      'configs/*',
      'db/*',
      'lib/*',
      'log/*',
      'node_modules/*',
      'dist/*',
      'public/*',
      'tmp/*',
      'vendor/*',
      'app/components/hm/HmTsx.vue', // `Parsing error: Type expected`になるので除外
      'wc/*',
      // Generated files
      'app/models/openapi/*.ts',
    ],
  },

  // 基本設定
  {
    files: [
      '**/*.js',
      '**/*.mjs',
      '**/*.cjs',
      '**/*.jsx',
      '**/*.ts',
      '**/*.mts',
      '**/*.cts',
      '**/*.tsx',
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
          allow: ['error'],
        },
      ],
    },
  },
)
