import HaModal from '#base/app/components/ha/HaModal.vue'
import { AnyVueWrapper } from '#base/app/test/models/vue'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { nextTick } from 'vue'
import { createI18n } from 'vue-i18n'

type HaModalWrapper = AnyVueWrapper

const i18n = createI18n({
  locale: 'ja',
  messages: {
    ja: {},
    en: {},
  },
})

describe('HaModal', () => {
  let wrapper: HaModalWrapper
  const originalBodyOverflow = document.body.style.overflow
  const originalDocumentElementOverflow = document.documentElement.style.overflow

  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    wrapper?.unmount()
    document.body.style.overflow = originalBodyOverflow
    document.documentElement.style.overflow = originalDocumentElementOverflow
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  describe('基本的なレンダリング', () => {
    beforeEach(() => {
      wrapper = mount(HaModal, {
        props: {
          index: 'test-modal',
        },
        slots: {
          button: '<span>開くボタン</span>',
          inner: '<div>モーダル内容</div>',
        },
        global: {
          plugins: [i18n],
        },
      })
    })

    it('開くボタンがレンダリングされる', () => {
      const openButton = wrapper.find('.open')
      expect(openButton.exists()).toBe(true)
      expect(openButton.text()).toContain('開くボタン')
    })

    it('モーダルがレンダリングされる', () => {
      const modal = wrapper.find('.ha-modal')
      expect(modal.exists()).toBe(true)
    })

    it('正しいIDとaria-controlsが設定される', () => {
      const openButton = wrapper.find('.open')
      const modal = wrapper.find('.ha-modal')

      expect(openButton.attributes('aria-controls')).toBe('popuptest-modal')
      expect(modal.attributes('id')).toBe('popuptest-modal')
    })

    it('初期状態ではモーダルが非表示', () => {
      const modal = wrapper.find('.ha-modal')
      expect(modal.attributes('aria-hidden')).toBe('true')
    })
  })

  describe('モーダルの開閉', () => {
    beforeEach(() => {
      wrapper = mount(HaModal, {
        props: {
          index: 'test-modal',
        },
        slots: {
          inner: '<div>モーダル内容</div>',
        },
        global: {
          plugins: [i18n],
        },
      })
    })

    it('開くボタンをクリックするとモーダルが開く', async () => {
      const openButton = wrapper.find('.open')
      await openButton.trigger('click')

      const modal = wrapper.find('.ha-modal')
      expect(modal.attributes('aria-hidden')).toBe('false')
    })

    it('モーダルが開くとbodyのoverflowが制御される', async () => {
      const openButton = wrapper.find('.open')
      await openButton.trigger('click')

      expect(document.body.style.overflow).toBe('hidden')
      expect(document.documentElement.style.overflow).toBe('hidden')
    })

    it('閉じるボタンをクリックするとモーダルが閉じる', async () => {
      // モーダルを開く
      await wrapper.find('.open').trigger('click')

      // モーダルを閉じる
      const closeButton = wrapper.find('.close')
      await closeButton.trigger('click')

      const modal = wrapper.find('.ha-modal')
      expect(modal.attributes('aria-hidden')).toBe('true')
    })

    it('背景をクリックするとモーダルが閉じる', async () => {
      // モーダルを開く
      await wrapper.find('.open').trigger('click')

      // 背景をクリック
      const background = wrapper.find('.background')
      await background.trigger('click')

      const modal = wrapper.find('.ha-modal')
      expect(modal.attributes('aria-hidden')).toBe('true')
    })

    it('モーダルが閉じるとbodyのoverflowがリセットされる', async () => {
      // モーダルを開く
      await wrapper.find('.open').trigger('click')

      // モーダルを閉じる
      await wrapper.find('.close').trigger('click')

      expect(document.body.style.overflow).toBe('')
      expect(document.documentElement.style.overflow).toBe('')
    })
  })

  describe('キーボード操作', () => {
    beforeEach(async () => {
      wrapper = mount(HaModal, {
        props: {
          index: 'test-modal',
        },
        global: {
          plugins: [i18n],
        },
      })

      // モーダルを開く
      await wrapper.find('.open').trigger('click')
    })

    it('Escapeキーでモーダルが閉じる', async () => {
      // Escapeキーイベントを発火
      const keydownEvent = new KeyboardEvent('keydown', { key: 'Escape' })
      window.dispatchEvent(keydownEvent)

      await nextTick()

      const modal = wrapper.find('.ha-modal')
      expect(modal.attributes('aria-hidden')).toBe('true')
      expect(document.body.style.overflow).toBe('')
      expect(document.documentElement.style.overflow).toBe('')
    })

    it('モーダルが閉じている状態でEscapeキーを押しても何も起こらない', async () => {
      // モーダルを閉じる
      await wrapper.find('.close').trigger('click')

      const modal = wrapper.find('.ha-modal')
      expect(modal.attributes('aria-hidden')).toBe('true')

      // Escapeキーイベントを発火
      const keydownEvent = new KeyboardEvent('keydown', { key: 'Escape' })
      window.dispatchEvent(keydownEvent)

      await nextTick()

      // 状態が変わらないことを確認
      expect(modal.attributes('aria-hidden')).toBe('true')
    })
  })

  describe('フォーカス制御', () => {
    beforeEach(async () => {
      wrapper = mount(HaModal, {
        props: {
          index: 'test-modal',
        },
        global: {
          plugins: [i18n],
        },
      })

      // モーダルを開く
      await wrapper.find('.open').trigger('click')
    })

    it('末尾フォーカス要素にフォーカスすると閉じるボタンにフォーカスが移る', async () => {
      const closeButton = wrapper.find('.close').element as HTMLElement
      const focusSpy = vi.spyOn(closeButton, 'focus')

      // 末尾のフォーカス要素を見つけてフォーカスイベントを発火
      const endFocusElement = wrapper.find('.modal-end')
      await endFocusElement.trigger('focus')

      expect(focusSpy).toHaveBeenCalled()
    })

    it('close要素がnullの場合にエラーを投げる', async () => {
      // モーダルを開く
      await wrapper.find('.open').trigger('click')
      await nextTick()

      // close要素を強制的にnullに設定
      wrapper.vm.close = null

      // handleEndFocus関数を直接テストする（同期的にエラーをキャッチ）
      expect(() => {
        wrapper.vm.handleEndFocus()
      }).toThrow('close要素はnull')
    })
  })

  describe('国際化対応', () => {
    it('日本語の場合のaria-label', () => {
      wrapper = mount(HaModal, {
        props: {
          index: 'test-modal',
        },
        global: {
          plugins: [i18n],
        },
      })

      const closeButton = wrapper.find('.close')
      expect(closeButton.attributes('aria-label')).toBe('モーダルを閉じる')
    })

    it('英語の場合のaria-label', () => {
      // i18nのlocaleを英語に変更
      const enI18n = createI18n({
        locale: 'en',
        messages: {
          ja: {},
          en: {},
        },
      })

      wrapper = mount(HaModal, {
        props: {
          index: 'test-modal',
        },
        global: {
          plugins: [enI18n],
        },
      })

      const closeButton = wrapper.find('.close')
      expect(closeButton.attributes('aria-label')).toBe('Close the dialog')
    })
  })

  describe('props', () => {
    it('必須のindexプロパティが設定される', () => {
      wrapper = mount(HaModal, {
        props: {
          index: 'custom-id',
        },
        global: {
          plugins: [i18n],
        },
      })

      const openButton = wrapper.find('.open')
      const modal = wrapper.find('.ha-modal')

      expect(openButton.attributes('aria-controls')).toBe('popupcustom-id')
      expect(modal.attributes('id')).toBe('popupcustom-id')
    })
  })

  describe('デフォルトスロット', () => {
    it('デフォルトのボタンテキストが表示される', () => {
      wrapper = mount(HaModal, {
        props: {
          index: 'test-modal',
        },
        global: {
          plugins: [i18n],
        },
      })

      const openButton = wrapper.find('.open')
      expect(openButton.text()).toContain('モーダルを開く')
    })

    it('デフォルトのモーダル内容が表示される', () => {
      wrapper = mount(HaModal, {
        props: {
          index: 'test-modal',
        },
        global: {
          plugins: [i18n],
        },
      })

      const modal = wrapper.find('.modal')
      expect(modal.text()).toContain('モーダルの中身')
    })
  })

  describe('aria属性の制御', () => {
    beforeEach(() => {
      wrapper = mount(HaModal, {
        props: {
          index: 'test-modal',
        },
        global: {
          plugins: [i18n],
        },
      })
    })

    it('開くボタンのaria-expandedが初期状態でfalse', () => {
      const openButton = wrapper.find('.open')
      expect(openButton.attributes('aria-expanded')).toBe('false')
    })

    it('aria-expandedは常にfalseに設定されている', () => {
      const openButton = wrapper.find('.open')
      expect(openButton.attributes('aria-expanded')).toBe('false')
    })
  })

  describe('複数モーダルの管理', () => {
    it('異なるindexを持つ複数モーダルが独立して動作', async () => {
      const modal1 = mount(HaModal, {
        props: { index: 'modal-1' },
        global: {
          plugins: [i18n],
        },
      })
      const modal2 = mount(HaModal, {
        props: { index: 'modal-2' },
        global: {
          plugins: [i18n],
        },
      })

      // modal1を開く
      await modal1.find('.open').trigger('click')
      expect(modal1.find('.ha-modal').attributes('aria-hidden')).toBe('false')
      expect(modal2.find('.ha-modal').attributes('aria-hidden')).toBe('true')

      // modal2を開く
      await modal2.find('.open').trigger('click')
      expect(modal2.find('.ha-modal').attributes('aria-hidden')).toBe('false')

      modal1.unmount()
      modal2.unmount()
    })
  })
})
