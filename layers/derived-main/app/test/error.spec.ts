import ErrorPage from '../error.vue'
import { mockNuxtImport } from '@nuxt/test-utils/runtime'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createI18n } from 'vue-i18n'
import { createError } from 'nuxt/app'

const { clearErrorMock, navigateToMock } = vi.hoisted(() => ({
  clearErrorMock: vi.fn(),
  navigateToMock: vi.fn(),
}))
mockNuxtImport('clearError', () => clearErrorMock)
mockNuxtImport('navigateTo', () => navigateToMock)

const messages = {
  ja: {
    back_home: 'ホームに戻る',
    back_previous: '前のページに戻る',
    details: 'エラー内容',
    error_404: 'ページが見つかりません',
    error_500: 'サーバーエラー',
    error_other: '予期しないエラー',
    description_404: '404 description',
    description_500: '500 description',
    description_other: 'other description',
  },
  en: {
    back_home: 'Back home',
    back_previous: 'Back',
    details: 'Details',
    error_404: 'Not found',
    error_500: 'Server error',
    error_other: 'Unexpected error',
    description_404: '404 description',
    description_500: '500 description',
    description_other: 'other description',
  },
}

const mountError = (statusCode: number, message = '') => mount(ErrorPage, {
  props: {
    error: createError({
      statusCode,
      statusMessage: '',
      message,
    }),
  },
  global: {
    plugins: [createI18n({ legacy: false, locale: 'ja', messages })],
  },
})

describe('derived-main error page', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it.each([
    { statusCode: 404, title: 'ページが見つかりません', description: 'お探しのページは見つかりませんでした。URLをご確認いただくか、ホームページに戻ってもう一度お試しください。' },
    { statusCode: 500, title: 'サーバーエラー', description: 'サーバーに問題が発生しています。しばらく時間をおいてから再度お試しください。' },
    { statusCode: 418, title: '予期しないエラー', description: '申し訳ございませんが、予期しないエラーが発生しました。' },
  ])('renders status $statusCode', ({ statusCode, title, description }) => {
    const wrapper = mountError(statusCode, 'diagnostic')

    expect(wrapper.get('.error-code').text()).toBe(String(statusCode))
    expect(wrapper.get('.error-title').text()).toBe(title)
    expect(wrapper.get('.error-description').text()).toBe(description)
    expect(wrapper.get('.error-message').text()).toBe('diagnostic')
  })

  it('clears the error and redirects home', async () => {
    const wrapper = mountError(500)

    await wrapper.get('.-primary').trigger('click')

    expect(clearErrorMock).toHaveBeenCalledWith({ redirect: '/' })
    expect(wrapper.find('details').exists()).toBe(false)
  })

  it('uses browser history when a previous page exists', async () => {
    const wrapper = mountError(404)
    const back = vi.spyOn(window.history, 'back').mockImplementation(() => {})
    Object.defineProperty(window.history, 'length', { configurable: true, value: 2 })

    await wrapper.get('.-secondary').trigger('click')

    expect(back).toHaveBeenCalledOnce()
    expect(navigateToMock).not.toHaveBeenCalled()
  })

  it('navigates home when there is no previous page', async () => {
    const wrapper = mountError(404)
    Object.defineProperty(window.history, 'length', { configurable: true, value: 1 })

    await wrapper.get('.-secondary').trigger('click')

    expect(navigateToMock).toHaveBeenCalledWith('/')
  })
})
