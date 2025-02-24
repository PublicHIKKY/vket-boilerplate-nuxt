import path from 'path'
import { defineNuxtConfig } from 'nuxt/config'
import { readEnvType } from './config/models/EnvType'
import { getRuntimeConfigOfEnvType } from './config/runtimeConfig'

const NUXT_ENV_OUTPUT_ENV = readEnvType(process.env)
const runtimeConfig = getRuntimeConfigOfEnvType(
  NUXT_ENV_OUTPUT_ENV,
  process.env,
)
const cssUrls = [`@/assets/styles/style.scss`]
const srcDir = 'app'
const isSsr = false
const checkTypeCheckOnBuild = true
const needAnalyze = NUXT_ENV_OUTPUT_ENV === 'local'
const needSourcemap = NUXT_ENV_OUTPUT_ENV !== 'production'
const enableDebug = NUXT_ENV_OUTPUT_ENV === 'local'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    path.resolve(__dirname, '../base'),
  ],
  ssr: isSsr,
  imports: {
    dirs: ['utils/types/**'],
    global: false,
  },
  css: cssUrls,
  runtimeConfig,
  dir: {
    public: path.resolve(__dirname, './public'),
  },
  rootDir: __dirname,
  srcDir: `${srcDir}/`,
  alias: {
    '~': path.resolve(__dirname, '../main/app'),
    '@': path.resolve(__dirname, '../main/app'),
    '#base': path.resolve(__dirname, '../base'),
    '#main': path.resolve(__dirname, '../main'),
    '#showcases': __dirname,
  },
  ignore: [
    '.output',
    '**/test/*.{js,ts,jsx,tsx}',
    '**/*.{spec,test}.{js,ts,jsx,tsx}',
    '**/-*.*',
  ],
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
    includeWorkspace: true,
  },
  debug: enableDebug,
})
