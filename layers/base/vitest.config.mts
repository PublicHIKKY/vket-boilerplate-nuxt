import { defineVitestConfig } from '@nuxt/test-utils/config'
import path from 'path'

export default defineVitestConfig({
  test: {
    globals: true,
    environment: 'nuxt',
    exclude: ['**/node_modules/**', '**/dist/**', '**/e2e/**', '**/.nuxt/**'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      reportsDirectory: '../coverage',
      reportOnFailure: true,
      allowExternal: true,
      include: ['**/*.{vue,ts}'],
      exclude: [
        'plugins/**',
        'middleware/**',
        'layouts/**',
        'test/**',
      ],
    },
    setupFiles: ['app/test/setup.ts'],
    alias: {
      '#base': path.resolve(__dirname, '.'),
    },
  },
  resolve: {
    alias: {
      '#base': path.resolve(__dirname, '.'),
    },
  },
})
