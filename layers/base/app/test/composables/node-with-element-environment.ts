import type { Environment } from 'vitest/runtime'
import { builtinEnvironments } from 'vitest/runtime'

export default <Environment>{
  ...builtinEnvironments.node,
  name: 'node-with-element',
  viteEnvironment: 'ssr',
  async setup(global, options) {
    const result = await builtinEnvironments.node.setup(global, options)
    Object.defineProperty(global, 'HTMLElement', {
      configurable: true,
      value: class HTMLElement {
        readonly nodeElement = true
      },
    })
    return result
  },
}
