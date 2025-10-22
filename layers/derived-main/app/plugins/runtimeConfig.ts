import { defineNuxtPlugin } from 'nuxt/app'
import type { RuntimeConfig } from 'nuxt/schema'

/**
 * 型を保持したruntimeConfig。
 * [[requireRuntimeConfig]]のために、保持されています。
 */
let runtimeConfig: RuntimeConfig | undefined

export default defineNuxtPlugin(({ $config }) => {
  if ($config === undefined) {
    throw new TypeError('#derived-main/app/plugins/runtimeConfig failed.')
  }
  runtimeConfig = $config
})

type Config = Record<string, string | undefined>
type ProcessEnv = Config & {
  public?: Config
}
/**
 * useRuntimeConfig()が使えないときに使う、同等な関数。
 */
export const requireRuntimeConfig: () => ProcessEnv | RuntimeConfig = () => {
  if (runtimeConfig !== undefined) {
    return runtimeConfig
  }

  // playwrightテスト用
  if (process?.env !== undefined) {
    return process.env
  }

  throw new TypeError('#derived-main/app/plugins/runtimeConfig: Not satisfied.')
}
