import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import HmSliderItem from '#base/app/components/hm/HmSliderItem.vue'

// i18nの設定
const i18n = createI18n({
  legacy: false,
  locale: 'ja',
  messages: {
    ja: {},
    en: {},
  },
})

describe('HmSliderItem', () => {
  describe('基本的なレンダリング', () => {
    it('コンポーネントがレンダリングされる', () => {
      const wrapper = mount(HmSliderItem, {
        props: {
          id: 'test-id',
        },
        global: {
          plugins: [i18n],
        },
      })
      expect(wrapper.find('.slider-item').exists()).toBe(true)
    })

    it('slider-contentクラスが存在する', () => {
      const wrapper = mount(HmSliderItem, {
        props: {
          id: 'test-id',
        },
        global: {
          plugins: [i18n],
        },
      })
      expect(wrapper.find('.slider-content').exists()).toBe(true)
    })
  })

  describe('props - id', () => {
    it('idが設定されていない場合はundefinded', () => {
      const wrapper = mount(HmSliderItem, {
        props: {
          id: '',
        },
        global: {
          plugins: [i18n],
        },
      })
      expect(wrapper.find('.slider-item').attributes('id')).toBe('')
    })

    it('idが正しく設定される', () => {
      const testId = 'test-slider-item-id'
      const wrapper = mount(HmSliderItem, {
        props: {
          id: testId,
        },
        global: {
          plugins: [i18n],
        },
      })
      expect(wrapper.find('.slider-item').attributes('id')).toBe(testId)
    })

    it('空文字のidが設定される', () => {
      const wrapper = mount(HmSliderItem, {
        props: {
          id: '',
        },
        global: {
          plugins: [i18n],
        },
      })
      expect(wrapper.find('.slider-item').attributes('id')).toBe('')
    })
  })

  describe('アクセシビリティ属性', () => {
    it('slider-itemにrole="tabpanel"が設定される', () => {
      const wrapper = mount(HmSliderItem, {
        props: {
          id: 'test-id',
        },
        global: {
          plugins: [i18n],
        },
      })
      expect(wrapper.find('.slider-item').attributes('role')).toBe('tabpanel')
    })

    it('slider-contentにrole="presentation"が設定される', () => {
      const wrapper = mount(HmSliderItem, {
        props: {
          id: 'test-id',
        },
        global: {
          plugins: [i18n],
        },
      })
      expect(wrapper.find('.slider-content').attributes('role')).toBe('presentation')
    })
  })

  describe('スロットコンテンツ', () => {
    it('デフォルトスロットが正しく表示される', () => {
      const slotContent = '<p>テストコンテンツ</p>'
      const wrapper = mount(HmSliderItem, {
        props: {
          id: 'test-id',
        },
        slots: {
          default: slotContent,
        },
        global: {
          plugins: [i18n],
        },
      })
      expect(wrapper.find('.slider-content').html()).toContain('<p>テストコンテンツ</p>')
    })

    it('複数の要素を含むスロットが正しく表示される', () => {
      const slotContent = `
        <h3>タイトル</h3>
        <p>説明文</p>
        <button>ボタン</button>
      `
      const wrapper = mount(HmSliderItem, {
        props: {
          id: 'test-id',
        },
        slots: {
          default: slotContent,
        },
        global: {
          plugins: [i18n],
        },
      })
      expect(wrapper.find('.slider-content h3').text()).toBe('タイトル')
      expect(wrapper.find('.slider-content p').text()).toBe('説明文')
      expect(wrapper.find('.slider-content button').text()).toBe('ボタン')
    })

    it('空のスロットが正しく処理される', () => {
      const wrapper = mount(HmSliderItem, {
        props: {
          id: 'test-id',
        },
        global: {
          plugins: [i18n],
        },
      })
      expect(wrapper.find('.slider-content').text()).toBe('')
    })
  })

  describe('DOM構造', () => {
    it('正しいDOM構造が生成される', () => {
      const wrapper = mount(HmSliderItem, {
        props: {
          id: 'test-id',
        },
        slots: {
          default: '<span>content</span>',
        },
        global: {
          plugins: [i18n],
        },
      })

      const sliderItem = wrapper.find('.slider-item')
      expect(sliderItem.exists()).toBe(true)
      expect(sliderItem.attributes('id')).toBe('test-id')
      expect(sliderItem.attributes('role')).toBe('tabpanel')

      const sliderContent = sliderItem.find('.slider-content')
      expect(sliderContent.exists()).toBe(true)
      expect(sliderContent.attributes('role')).toBe('presentation')
      expect(sliderContent.find('span').text()).toBe('content')
    })
  })
})
