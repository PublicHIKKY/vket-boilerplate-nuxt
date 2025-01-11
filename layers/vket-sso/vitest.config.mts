import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    exclude: ['/test/', '/test-e2e/'],
    include: ['**/*.{ts,js,tsx,jsx,vue}', '**/*.vue?vue'],
    environment: 'nuxt',
    setupFiles: ['../vitest.setup.mts'],
  },
})
