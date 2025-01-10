import path from 'path'
import { defineNuxtConfig } from 'nuxt/config'
import { readEnvType } from './config/models/EnvType'
import { getRuntimeConfigOfEnvType } from './config/runtimeConfig'

const NUXT_ENV_OUTPUT_ENV = readEnvType(process.env)
const runtimeConfig = getRuntimeConfigOfEnvType(
  NUXT_ENV_OUTPUT_ENV,
  process.env,
)
const srcDir = 'app'
const isSsr = true
const checkTypeCheckOnBuild = true
const needAnalyze = NUXT_ENV_OUTPUT_ENV === 'local'
const needSourcemap = NUXT_ENV_OUTPUT_ENV !== 'production'
const enableDebug = NUXT_ENV_OUTPUT_ENV === 'local'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: path.resolve(__dirname, '../base'),
  modules: [
    '@nuxt/test-utils/module',
  ],
  ssr: isSsr,
  imports: {
    dirs: ['utils/types/**'],
    global: false,
  },
  runtimeConfig,
  rootDir: __dirname,
  srcDir: `${srcDir}/`,
  alias: {
    '#vket-sso': __dirname,
  },
  build: {
    analyze: needAnalyze,
  },
  sourcemap: {
    server: needSourcemap,
    client: needSourcemap,
  },
  compatibilityDate: '2024-04-03',
  typescript: {
    typeCheck: checkTypeCheckOnBuild,
  },
  debug: enableDebug,
  hooks: {
    // NOTE: テスト時にglobalのmiddlewareが動いてエラーになるので無効化する
    'app:resolve': async (app) => {
      const process = await import('node:process')
      if (String(process.env?.TEST) === 'true') {
        app.middleware = []
      }
    },
  },
})
