import { defineConfig, devices } from '@playwright/test'

// NOTE: nuxt3のライブラリ周りでe2eテストをするとサーバー起動時でtimeoutになるので使えない（手動でサーバーを起動し標準のplaywrightでテストする）
export default defineConfig({
  testDir: './app/test/e2e',
  timeout: 60000,
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  workers: 1,
  reporter: 'html',
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    actionTimeout: 10000,
    //  認証情報をあらかじめ抜き取っていると認証情報をテストで利用できる
    //  https://playwright.dev/docs/auth
    //  storageState: './app/test/e2e/utils/auth-state.json',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
})
