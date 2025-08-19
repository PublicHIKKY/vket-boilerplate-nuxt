import type { UseI18nOptions } from 'vue-i18n'

export class I18nTKeyMissingError extends Error {}

/**
 * 型安全なi18n composable
 * 実行時に翻訳キーの存在を検証し、存在しない場合はエラーを投げる
 */
export const useStrictI18n = (
  options?: Omit<UseI18nOptions, 'missing'>,
) => useI18n({
  ...options ?? {},
  missing: (locale, key) => {
    throw new I18nTKeyMissingError(`key '${key}' is not found in locale '${locale}'`)
  },
})
