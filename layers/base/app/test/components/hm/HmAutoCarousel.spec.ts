import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import HmAutoCarousel from '#base/app/components/hm/HmAutoCarousel.vue'

describe('HmAutoCarousel', () => {
  describe('基本的なレンダリング', () => {
    it('コンポーネントがレンダリングされる', () => {
      const wrapper = mount(HmAutoCarousel)
      expect(wrapper.find('.hm-auto-carousel').exists()).toBe(true)
    })

    it('3つのリストが正しくレンダリングされる', () => {
      const wrapper = mount(HmAutoCarousel)
      const lists = wrapper.findAll('.list')

      expect(lists).toHaveLength(3)
      expect(lists[0]?.classes()).toContain('-before')
      expect(lists[1]?.classes()).not.toContain('-before')
      expect(lists[1]?.classes()).not.toContain('-after')
      expect(lists[2]?.classes()).toContain('-after')
    })

    it('aria属性が正しく設定される', () => {
      const wrapper = mount(HmAutoCarousel)
      const lists = wrapper.findAll('.list')

      expect(wrapper.find('.hm-auto-carousel').attributes('role')).toBe('presentation')
      expect(lists[0]?.attributes('aria-hidden')).toBe('true')
      expect(lists[1]?.attributes('aria-hidden')).toBeUndefined()
      expect(lists[2]?.attributes('aria-hidden')).toBe('true')
    })
  })

  describe('props - orientation', () => {
    it('デフォルトはhorizontal-left', () => {
      const wrapper = mount(HmAutoCarousel)
      expect(wrapper.find('.hm-auto-carousel').classes()).toContain('-horizontal-left')
    })

    it('horizontal-leftが正しく設定される', () => {
      const wrapper = mount(HmAutoCarousel, {
        props: {
          orientation: 'horizontal-left',
        },
      })
      expect(wrapper.find('.hm-auto-carousel').classes()).toContain('-horizontal-left')
    })

    it('horizontal-rightが正しく設定される', () => {
      const wrapper = mount(HmAutoCarousel, {
        props: {
          orientation: 'horizontal-right',
        },
      })
      expect(wrapper.find('.hm-auto-carousel').classes()).toContain('-horizontal-right')
    })

    it('vertical-topが正しく設定される', () => {
      const wrapper = mount(HmAutoCarousel, {
        props: {
          orientation: 'vertical-top',
        },
      })
      expect(wrapper.find('.hm-auto-carousel').classes()).toContain('-vertical-top')
    })

    it('vertical-bottomが正しく設定される', () => {
      const wrapper = mount(HmAutoCarousel, {
        props: {
          orientation: 'vertical-bottom',
        },
      })
      expect(wrapper.find('.hm-auto-carousel').classes()).toContain('-vertical-bottom')
    })
  })

  describe('props - duration', () => {
    it('デフォルトは30秒', () => {
      const wrapper = mount(HmAutoCarousel)
      const style = wrapper.find('.hm-auto-carousel').attributes('style')
      expect(style).toContain('--duration: 30s')
    })

    it('カスタム期間が正しく設定される', () => {
      const wrapper = mount(HmAutoCarousel, {
        props: {
          duration: 60,
        },
      })
      const style = wrapper.find('.hm-auto-carousel').attributes('style')
      expect(style).toContain('--duration: 60s')
    })

    it('小数点のdurationも設定できる', () => {
      const wrapper = mount(HmAutoCarousel, {
        props: {
          duration: 2.5,
        },
      })
      const style = wrapper.find('.hm-auto-carousel').attributes('style')
      expect(style).toContain('--duration: 2.5s')
    })
  })

  describe('direction computed property', () => {
    it('horizontal-leftの場合は-1', () => {
      const wrapper = mount(HmAutoCarousel, {
        props: {
          orientation: 'horizontal-left',
        },
      })
      const style = wrapper.find('.hm-auto-carousel').attributes('style')
      expect(style).toContain('--direction: -1')
    })

    it('horizontal-rightの場合は1', () => {
      const wrapper = mount(HmAutoCarousel, {
        props: {
          orientation: 'horizontal-right',
        },
      })
      const style = wrapper.find('.hm-auto-carousel').attributes('style')
      expect(style).toContain('--direction: 1')
    })

    it('vertical-topの場合は-1', () => {
      const wrapper = mount(HmAutoCarousel, {
        props: {
          orientation: 'vertical-top',
        },
      })
      const style = wrapper.find('.hm-auto-carousel').attributes('style')
      expect(style).toContain('--direction: -1')
    })

    it('vertical-bottomの場合は1', () => {
      const wrapper = mount(HmAutoCarousel, {
        props: {
          orientation: 'vertical-bottom',
        },
      })
      const style = wrapper.find('.hm-auto-carousel').attributes('style')
      expect(style).toContain('--direction: 1')
    })
  })

  describe('スロットのレンダリング', () => {
    it('スロットコンテンツが3つのリストすべてにレンダリングされる', () => {
      const wrapper = mount(HmAutoCarousel, {
        slots: {
          default: '<li class="carousel-item">アイテム1</li><li class="carousel-item">アイテム2</li>',
        },
      })

      const lists = wrapper.findAll('.list')

      // 各リストにスロットコンテンツが含まれることを確認
      lists.forEach((list) => {
        const items = list.findAll('.carousel-item')
        expect(items).toHaveLength(2)
        expect(items[0]?.text()).toBe('アイテム1')
        expect(items[1]?.text()).toBe('アイテム2')
      })
    })

    it('空のスロットでもリストがレンダリングされる', () => {
      const wrapper = mount(HmAutoCarousel)
      const lists = wrapper.findAll('.list')

      expect(lists).toHaveLength(3)
      lists.forEach((list) => {
        expect(list.exists()).toBe(true)
      })
    })

    it('複雑なスロットコンテンツもレンダリングされる', () => {
      const wrapper = mount(HmAutoCarousel, {
        slots: {
          default: `
            <li class="item">
              <img src="/test.jpg" alt="テスト画像" />
              <p>説明文</p>
            </li>
          `,
        },
      })

      const lists = wrapper.findAll('.list')

      lists.forEach((list) => {
        const item = list.find('.item')
        expect(item.exists()).toBe(true)
        expect(item.find('img').exists()).toBe(true)
        expect(item.find('p').text()).toBe('説明文')
      })
    })
  })

  describe('CSS変数の統合テスト', () => {
    it('すべてのpropsが正しくCSS変数として設定される', () => {
      const wrapper = mount(HmAutoCarousel, {
        props: {
          orientation: 'vertical-bottom',
          duration: 45,
        },
      })

      const style = wrapper.find('.hm-auto-carousel').attributes('style')
      expect(style).toContain('--direction: 1')
      expect(style).toContain('--duration: 45s')
    })

    it('デフォルト値でのCSS変数設定', () => {
      const wrapper = mount(HmAutoCarousel)

      const style = wrapper.find('.hm-auto-carousel').attributes('style')
      expect(style).toContain('--direction: -1')
      expect(style).toContain('--duration: 30s')
    })
  })

  describe('アクセシビリティ', () => {
    it('メインコンテナにrole="presentation"が設定される', () => {
      const wrapper = mount(HmAutoCarousel)
      expect(wrapper.find('.hm-auto-carousel').attributes('role')).toBe('presentation')
    })

    it('beforeとafterリストにaria-hidden="true"が設定される', () => {
      const wrapper = mount(HmAutoCarousel)
      const lists = wrapper.findAll('.list')

      expect(lists[0]?.attributes('aria-hidden')).toBe('true') // -before
      expect(lists[1]?.attributes('aria-hidden')).toBeUndefined() // メインリスト
      expect(lists[2]?.attributes('aria-hidden')).toBe('true') // -after
    })
  })
})
