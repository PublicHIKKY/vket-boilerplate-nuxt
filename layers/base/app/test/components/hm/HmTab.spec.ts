import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import HmTab from '#base/app/components/hm/HmTab.vue'

// rangeヘルパー関数は setup.ts で定義済み

// i18nの設定
const i18n = createI18n({
  legacy: false,
  locale: 'ja',
  messages: {
    ja: {},
    en: {},
  },
})

describe('HmTab', () => {
  describe('基本的なレンダリング', () => {
    it('amount=3でタブが3つレンダリングされる', () => {
      const wrapper = mount(HmTab, {
        props: {
          amount: 3,
        },
        slots: {
          tab0: '<span>タブ1</span>',
          tab1: '<span>タブ2</span>',
          tab2: '<span>タブ3</span>',
          panel0: '<div>パネル1</div>',
          panel1: '<div>パネル2</div>',
          panel2: '<div>パネル3</div>',
        },
        global: {
          plugins: [i18n],
        },
      })

      expect(wrapper.findAll('.tab')).toHaveLength(3)
      expect(wrapper.findAll('.tabpanel')).toHaveLength(3)
    })

    it('tablistクラスが存在する', () => {
      const wrapper = mount(HmTab, {
        props: {
          amount: 2,
        },
        global: {
          plugins: [i18n],
        },
      })
      expect(wrapper.find('.tablist').exists()).toBe(true)
    })

    it('panel-containerクラスが存在する', () => {
      const wrapper = mount(HmTab, {
        props: {
          amount: 2,
        },
        global: {
          plugins: [i18n],
        },
      })
      expect(wrapper.find('.panel-container').exists()).toBe(true)
    })
  })

  describe('アクセシビリティ属性', () => {
    it('tablistのli要素にrole="presentation"が設定される', () => {
      const wrapper = mount(HmTab, {
        props: {
          amount: 2,
        },
        global: {
          plugins: [i18n],
        },
      })
      const items = wrapper.findAll('.item')
      items.forEach((item) => {
        expect(item.attributes('role')).toBe('presentation')
      })
    })

    it('buttonにrole="tab"が設定される', () => {
      const wrapper = mount(HmTab, {
        props: {
          amount: 2,
        },
        global: {
          plugins: [i18n],
        },
      })
      const tabs = wrapper.findAll('.tab')
      tabs.forEach((tab) => {
        expect(tab.attributes('role')).toBe('tab')
      })
    })

    it('tabpanelにrole="tabpanel"が設定される', () => {
      const wrapper = mount(HmTab, {
        props: {
          amount: 2,
        },
        global: {
          plugins: [i18n],
        },
      })
      const panels = wrapper.findAll('.tabpanel')
      panels.forEach((panel) => {
        expect(panel.attributes('role')).toBe('tabpanel')
      })
    })

    it('初期状態ではindex=0のタブが選択されている', () => {
      const wrapper = mount(HmTab, {
        props: {
          amount: 3,
        },
        global: {
          plugins: [i18n],
        },
      })

      const tabs = wrapper.findAll('.tab')
      expect(tabs[0]?.attributes('aria-expanded')).toBe('true')
      expect(tabs[1]?.attributes('aria-expanded')).toBe('false')
      expect(tabs[2]?.attributes('aria-expanded')).toBe('false')
    })

    it('aria-controls属性が正しく設定される', () => {
      const wrapper = mount(HmTab, {
        props: {
          amount: 3,
        },
        global: {
          plugins: [i18n],
        },
      })

      const tabs = wrapper.findAll('.tab')
      expect(tabs[0]?.attributes('aria-controls')).toBe('panel0')
      expect(tabs[1]?.attributes('aria-controls')).toBe('panel1')
      expect(tabs[2]?.attributes('aria-controls')).toBe('panel2')
    })

    it('aria-labelledby属性が正しく設定される', () => {
      const wrapper = mount(HmTab, {
        props: {
          amount: 3,
        },
        global: {
          plugins: [i18n],
        },
      })

      const panels = wrapper.findAll('.tabpanel')
      expect(panels[0]?.attributes('aria-labelledby')).toBe('tab0')
      expect(panels[1]?.attributes('aria-labelledby')).toBe('tab1')
      expect(panels[2]?.attributes('aria-labelledby')).toBe('tab2')
    })

    it('初期状態ではindex=0のパネルが表示されている', () => {
      const wrapper = mount(HmTab, {
        props: {
          amount: 3,
        },
        global: {
          plugins: [i18n],
        },
      })

      const panels = wrapper.findAll('.tabpanel')
      expect(panels[0]?.attributes('aria-hidden')).toBe('false')
      expect(panels[1]?.attributes('aria-hidden')).toBe('true')
      expect(panels[2]?.attributes('aria-hidden')).toBe('true')
    })
  })

  describe('ID属性', () => {
    it('タブにtab{index}のIDが設定される', () => {
      const wrapper = mount(HmTab, {
        props: {
          amount: 3,
        },
        global: {
          plugins: [i18n],
        },
      })

      const tabs = wrapper.findAll('.tab')
      expect(tabs[0]?.attributes('id')).toBe('tab0')
      expect(tabs[1]?.attributes('id')).toBe('tab1')
      expect(tabs[2]?.attributes('id')).toBe('tab2')
    })

    it('パネルにpanel{index}のIDが設定される', () => {
      const wrapper = mount(HmTab, {
        props: {
          amount: 3,
        },
        global: {
          plugins: [i18n],
        },
      })

      const panels = wrapper.findAll('.tabpanel')
      expect(panels[0]?.attributes('id')).toBe('panel0')
      expect(panels[1]?.attributes('id')).toBe('panel1')
      expect(panels[2]?.attributes('id')).toBe('panel2')
    })
  })

  describe('タブ切り替え機能', () => {
    it('タブをクリックすると対応するパネルが表示される', async () => {
      const wrapper = mount(HmTab, {
        props: {
          amount: 3,
        },
        global: {
          plugins: [i18n],
        },
      })

      // 初期状態：index=0が選択されている
      let tabs = wrapper.findAll('.tab')
      let panels = wrapper.findAll('.tabpanel')
      expect(tabs[0]?.attributes('aria-expanded')).toBe('true')
      expect(panels[0]?.attributes('aria-hidden')).toBe('false')

      // index=0のタブをクリック
      await tabs[0]?.trigger('click')

      tabs = wrapper.findAll('.tab')
      panels = wrapper.findAll('.tabpanel')
      expect(tabs[0]?.attributes('aria-expanded')).toBe('true')
      expect(tabs[1]?.attributes('aria-expanded')).toBe('false')
      expect(tabs[2]?.attributes('aria-expanded')).toBe('false')
      expect(panels[0]?.attributes('aria-hidden')).toBe('false')
      expect(panels[1]?.attributes('aria-hidden')).toBe('true')
      expect(panels[2]?.attributes('aria-hidden')).toBe('true')
    })

    it('index=2のタブをクリックすると対応するパネルが表示される', async () => {
      const wrapper = mount(HmTab, {
        props: {
          amount: 3,
        },
        global: {
          plugins: [i18n],
        },
      })

      const tabs = wrapper.findAll('.tab')
      await tabs[2]?.trigger('click')

      const updatedTabs = wrapper.findAll('.tab')
      const panels = wrapper.findAll('.tabpanel')
      expect(updatedTabs[0]?.attributes('aria-expanded')).toBe('false')
      expect(updatedTabs[1]?.attributes('aria-expanded')).toBe('false')
      expect(updatedTabs[2]?.attributes('aria-expanded')).toBe('true')
      expect(panels[0]?.attributes('aria-hidden')).toBe('true')
      expect(panels[1]?.attributes('aria-hidden')).toBe('true')
      expect(panels[2]?.attributes('aria-hidden')).toBe('false')
    })
  })

  describe('スロットコンテンツ', () => {
    it('タブスロットが正しく表示される', () => {
      const wrapper = mount(HmTab, {
        props: {
          amount: 2,
        },
        slots: {
          tab0: '<span>第一タブ</span>',
          tab1: '<span>第二タブ</span>',
        },
        global: {
          plugins: [i18n],
        },
      })

      const tabs = wrapper.findAll('.tab')
      expect(tabs[0]?.find('span').text()).toBe('第一タブ')
      expect(tabs[1]?.find('span').text()).toBe('第二タブ')
    })

    it('パネルスロットが正しく表示される', () => {
      const wrapper = mount(HmTab, {
        props: {
          amount: 2,
        },
        slots: {
          panel0: '<div>第一パネル</div>',
          panel1: '<div>第二パネル</div>',
        },
        global: {
          plugins: [i18n],
        },
      })

      const panels = wrapper.findAll('.tabpanel')
      expect(panels[0]?.find('div').text()).toBe('第一パネル')
      expect(panels[1]?.find('div').text()).toBe('第二パネル')
    })
  })

  describe('境界値テスト', () => {
    it('amount=1でも正常に動作する', () => {
      const wrapper = mount(HmTab, {
        props: {
          amount: 1,
        },
        global: {
          plugins: [i18n],
        },
      })

      expect(wrapper.findAll('.tab')).toHaveLength(1)
      expect(wrapper.findAll('.tabpanel')).toHaveLength(1)
      expect(wrapper.find('.tab').attributes('aria-expanded')).toBe('true')
      expect(wrapper.find('.tabpanel').attributes('aria-hidden')).toBe('false')
    })

    it('amount=5で複数タブが正常に動作する', async () => {
      const wrapper = mount(HmTab, {
        props: {
          amount: 5,
        },
        global: {
          plugins: [i18n],
        },
      })

      expect(wrapper.findAll('.tab')).toHaveLength(5)
      expect(wrapper.findAll('.tabpanel')).toHaveLength(5)

      // 初期状態はindex=0が選択
      let tabs = wrapper.findAll('.tab')
      expect(tabs[0]?.attributes('aria-expanded')).toBe('true')

      // index=4をクリック
      await tabs[4]?.trigger('click')

      tabs = wrapper.findAll('.tab')
      const panels = wrapper.findAll('.tabpanel')
      expect(tabs[4]?.attributes('aria-expanded')).toBe('true')
      expect(panels[4]?.attributes('aria-hidden')).toBe('false')
      // 他のタブは非選択
      for (let i = 0; i < 5; i++) {
        if (i !== 4) {
          expect(tabs[i]?.attributes('aria-expanded')).toBe('false')
          expect(panels[i]?.attributes('aria-hidden')).toBe('true')
        }
      }
    })
  })
})
