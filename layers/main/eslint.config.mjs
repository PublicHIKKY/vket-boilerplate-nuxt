import sharedConfig from '../../eslint.config.shared.mjs'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  ...sharedConfig,
)
