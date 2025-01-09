/**
 * app.config.tsのためのモジュール。
 *
 * @packageDocumentation
 */

import { EnvType, Env } from './models/EnvType'

/**
 * ```typescript
 * const appConfig = getAppConfigOfEnvType('local', process.env)
 * ```
 */
export function getAppConfigOfEnvType(envType: EnvType, baseEnv: Env) {
  switch (envType) {
    case 'local':
      return getLocal(envType, baseEnv)
    case 'development':
      return getDevelopment(envType, baseEnv)
    case 'staging':
      return getStaging(envType, baseEnv)
    case 'production':
      return getProduction(envType, baseEnv)
  }
}

function getLocal(_envType: EnvType, _baseEnv: Env) {
  return {}
}

function getDevelopment(_envType: EnvType, _baseEnv: Env) {
  return {}
}

function getStaging(_envType: EnvType, _baseEnv: Env) {
  return {}
}

function getProduction(_envType: EnvType, _baseEnv: Env) {
  return {}
}
