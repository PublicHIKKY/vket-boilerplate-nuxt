import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    env: {
      VITEST: 'true',
    },
    coverage: {
      include: ['app/**/*.{vue,ts}'],
    },
  },
})
