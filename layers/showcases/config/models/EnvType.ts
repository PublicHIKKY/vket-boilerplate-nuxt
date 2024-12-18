/**
 * nuxt.config.tsのためのモジュール。
 *
 * @packageDocumentation
 */

export type EnvType = 'local' | 'development' | 'staging' | 'production'

export const allEnvTypes = [
  'local',
  'development',
  'staging',
  'production',
] as const

export function isEnvType(x: unknown): x is EnvType {
  const envTypes: readonly unknown[] = allEnvTypes
  return envTypes.includes(x)
}

export function ensureEnvType(x: unknown): asserts x is EnvType {
  if (!isEnvType(x)) {
    throw new TypeError('Not an EnvType.')
  }
}

export type Env = Record<string, string | undefined>

/**
 * baseEnv.VITE_OUTPUT_ENVを読みだします。
 * これが未指定の場合は'local'にフォールバックします。
 * これが不明な値（EnvTypeでない）場合は例外を送出します。
 *
 * ```typescript
 * const envType = readEnvType(process.env)
 * ```
 */
export function readEnvType(baseEnv: Env): EnvType {
  if (baseEnv.VITE_OUTPUT_ENV === undefined) {
    console.error('No VITE_OUTPUT_ENV is set.')
    return 'local'
  }

  ensureEnvType(baseEnv.VITE_OUTPUT_ENV)
  return baseEnv.VITE_OUTPUT_ENV
}
