import HmDialogElement from '#base/app/components/hm/HmDialogElement.vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { nextTick, onMounted, ref } from 'vue'
import { createI18n } from 'vue-i18n'

// HaDialogElementのモック
const mockHaDialogElement = {
  name: 'HaDialogElement',
  template: '<dialog class="mock-ha-dialog-element" ref="dialog"><slot name="close"></slot><slot name="inner"></slot></dialog>',
  props: ['closeButtonHtmlTag', 'closedby'],
  setup() {
    const dialog = ref<HTMLDialogElement>()

    // モックのHTMLDialogElementを作成
    const mockDialogElement = {
      showModal: vi.fn(() => {
        mockDialogElement.open = true
      }),
      close: vi.fn(() => {
        mockDialogElement.open = false
      }),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      open: false,
    } as unknown as HTMLDialogElement

    // onMountedでモック要素を設定
    onMounted(() => {
      dialog.value = mockDialogElement
    })

    const openDialog = vi.fn(() => {
      if (dialog.value && dialog.value.showModal) {
        dialog.value.showModal()
      }
    })

    const closeDialog = vi.fn(() => {
      if (dialog.value) {
        dialog.value.close()
      }
    })

    return {
      openDialog,
      closeDialog,
      dialog,
    }
  },
}

// i18nの設定
const i18n = createI18n({
  legacy: false,
  locale: 'ja',
  messages: {
    ja: {},
    en: {},
  },
})

describe('HmDialogElement', () => {
  describe('基本的なレンダリング', () => {
    it('コンポーネントがレンダリングされる', () => {
      const wrapper = mount(HmDialogElement, {
        global: {
          components: {
            HaDialogElement: mockHaDialogElement,
          },
          plugins: [i18n],
        },
      })
      expect(wrapper.find('.open').exists()).toBe(true)
    })

    it('デフォルトテキストが表示される', () => {
      const wrapper = mount(HmDialogElement, {
        global: {
          components: {
            HaDialogElement: mockHaDialogElement,
          },
          plugins: [i18n],
        },
      })
      expect(wrapper.find('.text').text()).toBe('ダイアログを開く')
    })
  })

  describe('props - openButtonHtmlTag', () => {
    it('デフォルトはbutton要素', () => {
      const wrapper = mount(HmDialogElement, {
        global: {
          components: {
            HaDialogElement: mockHaDialogElement,
          },
          plugins: [i18n],
        },
      })
      expect(wrapper.find('.open').element.tagName.toLowerCase()).toBe('button')
    })

    it('divタグが設定される', () => {
      const wrapper = mount(HmDialogElement, {
        props: {
          openButtonHtmlTag: 'div',
        },
        global: {
          components: {
            HaDialogElement: mockHaDialogElement,
          },
          plugins: [i18n],
        },
      })
      expect(wrapper.find('.open').element.tagName.toLowerCase()).toBe('div')
      expect(wrapper.find('.open').attributes('tabindex')).toBe('0')
    })
  })

  describe('ダイアログの表示状態', () => {
    it('初期状態ではダイアログが非表示', () => {
      const wrapper = mount(HmDialogElement, {
        global: {
          components: {
            HaDialogElement: mockHaDialogElement,
          },
          plugins: [i18n],
        },
      })
      expect(wrapper.findComponent({ name: 'HaDialogElement' }).exists()).toBe(false)
    })

    it('クリック後にダイアログが表示される', async () => {
      const wrapper = mount(HmDialogElement, {
        global: {
          components: {
            HaDialogElement: mockHaDialogElement,
          },
          plugins: [i18n],
        },
      })

      // openDialogを呼び出すためのボタンクリック
      await wrapper.find('.open').trigger('click')
      await nextTick()

      expect(wrapper.findComponent({ name: 'HaDialogElement' }).exists()).toBe(true)
    })
  })

  describe('内部状態', () => {
    it('初期状態ではisActiveがfalse', () => {
      const wrapper = mount(HmDialogElement, {
        global: {
          components: {
            HaDialogElement: mockHaDialogElement,
          },
          plugins: [i18n],
        },
      })

      // テンプレート内のv-ifでisActiveが使われており、初期状態でHaDialogElementが非表示であることを確認
      expect(wrapper.findComponent({ name: 'HaDialogElement' }).exists()).toBe(false)
    })
  })

  describe('expose', () => {
    it('openDialog、closeDialogメソッドが公開される', () => {
      const wrapper = mount(HmDialogElement, {
        global: {
          components: {
            HaDialogElement: mockHaDialogElement,
          },
          plugins: [i18n],
        },
      })

      // defineExposeで公開されたメソッドにアクセス
      const vm = wrapper.vm
      expect(typeof vm.openDialog).toBe('function')
      expect(typeof vm.closeDialog).toBe('function')
      // isActiveはrefオブジェクトとして公開されるが、VMからの直接アクセスでは動作の確認に留める
      expect(vm.isActive !== undefined).toBe(true)
    })
  })
})
