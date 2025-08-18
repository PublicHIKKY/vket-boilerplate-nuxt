import HaDialogElement from '#base/app/components/ha/HaDialogElement.vue'
import { mount, VueWrapper } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { nextTick } from 'vue'
import { createI18n } from 'vue-i18n'

// HaDialogElementコンポーネントの型定義
type HaDialogElementExposed = {
  openDialog: () => void
  closeDialog: () => void
  isActive: boolean
  dialog?: HTMLDialogElement | null
}

type HaDialogElementWrapper = VueWrapper<HaDialogElementExposed>

const i18n = createI18n({
  locale: 'ja',
  messages: {
    ja: {},
    en: {},
  },
})

describe('HaDialogElement', () => {
  let wrapper: HaDialogElementWrapper
  const originalBodyOverflow = document.body.style.overflow
  const originalDocumentElementOverflow = document.documentElement.style.overflow

  beforeEach(() => {
    vi.useFakeTimers()
    // HTMLDialogElementのモック
    Object.defineProperty(HTMLDialogElement.prototype, 'showModal', {
      value: vi.fn(),
      writable: true,
    })
    Object.defineProperty(HTMLDialogElement.prototype, 'close', {
      value: vi.fn(),
      writable: true,
    })
    Object.defineProperty(HTMLDialogElement.prototype, 'open', {
      value: false,
      writable: true,
    })
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
      wrapper = mount(HaDialogElement, {
        props: {
          closedby: 'any',
        },
        slots: {
          inner: '<div>ダイアログ内容</div>',
          close: '<span>閉じるボタン</span>',
        },
        global: {
          plugins: [i18n],
        },
      })
    })

    it('ダイアログ要素がレンダリングされる', () => {
      const dialog = wrapper.find('dialog')
      expect(dialog.exists()).toBe(true)
    })

    it('初期状態ではダイアログが非表示', () => {
      expect(wrapper.vm.isActive).toBe(false)
    })

    it('デフォルトの閉じるボタンHTMLタグがbuttonである', () => {
      const closeButton = wrapper.find('.close')
      expect(closeButton.element.tagName).toBe('BUTTON')
    })
  })

  describe('プロパティの動作', () => {
    it('closeButtonHtmlTagプロパティが適用される', async () => {
      wrapper = mount(HaDialogElement, {
        props: {
          closeButtonHtmlTag: 'div',
          closedby: 'any',
        },
        global: {
          plugins: [i18n],
        },
      })

      // ダイアログを開く
      wrapper.vm.openDialog()
      await nextTick()

      const closeButton = wrapper.find('.close')
      expect(closeButton.element.tagName).toBe('DIV')
    })

    it('closedbyプロパティが設定される', async () => {
      wrapper = mount(HaDialogElement, {
        props: {
          closedby: 'closerequest',
        },
        global: {
          plugins: [i18n],
        },
      })

      // ダイアログを開く
      wrapper.vm.openDialog()
      await nextTick()

      const dialog = wrapper.find('dialog')
      if (dialog.exists()) {
        expect(dialog.attributes('closedby')).toBe('closerequest')
      }
    })
  })

  describe('ダイアログの開閉', () => {
    beforeEach(() => {
      wrapper = mount(HaDialogElement, {
        props: {
          closedby: 'any',
        },
        slots: {
          inner: '<div>ダイアログ内容</div>',
        },
        global: {
          plugins: [i18n],
        },
      })
    })

    it('openDialogメソッドでダイアログが開く', async () => {
      wrapper.vm.openDialog()
      await nextTick()

      expect(wrapper.vm.isActive).toBe(true)
      const dialog = wrapper.find('dialog')
      expect(dialog.exists()).toBe(true)
    })

    it('ダイアログが開くとshowModalが呼ばれる', async () => {
      const showModalSpy = vi.spyOn(HTMLDialogElement.prototype, 'showModal')

      wrapper.vm.openDialog()
      await nextTick()

      expect(showModalSpy).toHaveBeenCalled()
    })

    it('ダイアログが開くとbodyのoverflowが制御される', async () => {
      wrapper.vm.openDialog()
      await nextTick()

      expect(document.body.style.overflow).toBe('hidden')
      expect(document.documentElement.style.overflow).toBe('hidden')
    })

    it('閉じるボタンをクリックするとダイアログが閉じる', async () => {
      // ダイアログを開く
      wrapper.vm.openDialog()
      await nextTick()

      const closeSpy = vi.spyOn(HTMLDialogElement.prototype, 'close')

      // ダイアログを閉じる
      const closeButton = wrapper.find('.close')
      await closeButton.trigger('click')

      expect(closeSpy).toHaveBeenCalled()
      expect(wrapper.vm.isActive).toBe(false)
    })

    it('ダイアログが閉じるとbodyのoverflowがリセットされる', async () => {
      // ダイアログを開く
      wrapper.vm.openDialog()
      await nextTick()

      // ダイアログを閉じる
      await wrapper.find('.close').trigger('click')

      expect(document.body.style.overflow).toBe('')
      expect(document.documentElement.style.overflow).toBe('')
    })
  })

  describe('キーボード操作', () => {
    beforeEach(async () => {
      wrapper = mount(HaDialogElement, {
        props: {
          closedby: 'any',
        },
        global: {
          plugins: [i18n],
        },
      })
      wrapper.vm.openDialog()
      await nextTick()
    })

    it('Escapeキーでダイアログが閉じる', () => {
      const dialog = wrapper.find('dialog')
      const dialogElement = dialog.element as HTMLDialogElement

      // openプロパティをtrueに設定
      Object.defineProperty(dialogElement, 'open', {
        value: true,
        writable: true,
      })

      const closeSpy = vi.spyOn(HTMLDialogElement.prototype, 'close')

      // Escapeキーイベントを発火
      const keydownEvent = new KeyboardEvent('keydown', { key: 'Escape' })
      dialogElement.dispatchEvent(keydownEvent)

      expect(closeSpy).toHaveBeenCalled()
    })
  })

  describe('フォーカス制御', () => {
    beforeEach(async () => {
      wrapper = mount(HaDialogElement, {
        props: {
          closedby: 'any',
        },
        global: {
          plugins: [i18n],
        },
      })
      wrapper.vm.openDialog()
      await nextTick()
    })

    it('末尾フォーカス要素にフォーカスすると閉じるボタンにフォーカスが移る', async () => {
      const closeButton = wrapper.find('.close').element as HTMLElement
      const focusSpy = vi.spyOn(closeButton, 'focus')

      // 末尾のフォーカス要素を見つけてフォーカスイベントを発火
      const endFocusElement = wrapper.find('[tabindex="0"]:last-child')
      await endFocusElement.trigger('focus')

      expect(focusSpy).toHaveBeenCalled()
    })
  })

  describe('国際化対応', () => {
    it('日本語の場合のaria-label', () => {
      wrapper = mount(HaDialogElement, {
        props: {
          closedby: 'any',
        },
        global: {
          plugins: [i18n],
        },
      })

      const closeButton = wrapper.find('.close')
      expect(closeButton.attributes('aria-label')).toBe('ダイアログを閉じる')
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

      wrapper = mount(HaDialogElement, {
        props: {
          closedby: 'any',
        },
        global: {
          plugins: [enI18n],
        },
      })

      const closeButton = wrapper.find('.close')
      expect(closeButton.attributes('aria-label')).toBe('Close the dialog')
    })
  })

  describe('公開メソッド', () => {
    beforeEach(() => {
      wrapper = mount(HaDialogElement, {
        props: {
          closedby: 'any',
        },
        global: {
          plugins: [i18n],
        },
      })
    })

    it('closeDialogメソッドが公開されている', () => {
      expect(wrapper.vm.closeDialog).toBeDefined()
      expect(typeof wrapper.vm.closeDialog).toBe('function')
    })

    it('closeDialogメソッドを直接呼び出すとダイアログが閉じる', async () => {
      // ダイアログを開く
      wrapper.vm.openDialog()
      await nextTick()

      const closeSpy = vi.spyOn(HTMLDialogElement.prototype, 'close')

      // closeDialogメソッドを直接呼び出し
      wrapper.vm.closeDialog()
      await nextTick()

      expect(closeSpy).toHaveBeenCalled()
      expect(wrapper.vm.isActive).toBe(false)
    })
  })

  describe('エラーハンドリング', () => {
    it('dialog要素がnullの場合openDialogでエラーを投げる', () => {
      wrapper = mount(HaDialogElement, {
        props: {
          closedby: 'any',
        },
        global: {
          plugins: [i18n],
        },
      })

      // dialog要素を強制的にnullに設定
      ;(wrapper.vm as HaDialogElementExposed & { dialog: HTMLDialogElement | null }).dialog = null

      expect(() => {
        wrapper.vm.openDialog()
      }).toThrow('dialog要素はnull')
    })

    it('dialog要素がnullの場合closeDialogでエラーを投げる', () => {
      wrapper = mount(HaDialogElement, {
        props: {
          closedby: 'any',
        },
        global: {
          plugins: [i18n],
        },
      })

      // dialog要素を強制的にnullに設定
      ;(wrapper.vm as HaDialogElementExposed & { dialog: HTMLDialogElement | null }).dialog = null

      expect(() => {
        wrapper.vm.closeDialog()
      }).toThrow('dialog要素はnull')
    })
  })
})
