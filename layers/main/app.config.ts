// ref: https://v3.nuxtjs.org/guide/directory-structure/app.config
// note: Do not put any secret values inside app.config file. It is exposed to the user client bundle.

import { readEnvType } from './config/models/EnvType'
import { getAppConfigOfEnvType } from './config/appConfig'

// eslint-disable-next-line no-undef
export default defineAppConfig(
  getAppConfigOfEnvType(readEnvType(process.env), process.env)
)
