import { test, expect } from '@playwright/test'

test.describe('Top Page', () => {
  test('should display top page successfully', async ({ page }) => {
    // トップページにアクセス
    const response = await page.goto('/')

    // ページが正常にロードされることを確認
    await expect(page).toHaveTitle(/.*/)

    // ページのステータスが200であることを確認（正常にレスポンスが返ってくる）
    expect(response?.status()).toBe(200)
  })

  test('should have accessible content', async ({ page }) => {
    await page.goto('/')

    // ページのbody要素が存在することを確認
    const body = page.locator('body')
    await expect(body).toBeVisible()

    // HTMLドキュメントが適切にレンダリングされていることを確認
    const htmlContent = await page.content()
    expect(htmlContent).toContain('<!DOCTYPE html>')
  })
})
