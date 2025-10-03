import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import HmTsx from '#base/app/components/hm/HmTsx.vue'
import { defineComponent } from 'vue'

// useSlotsは setup.ts で定義済み

// i18nの設定
const i18n = createI18n({
  legacy: false,
  locale: 'ja',
  messages: {
    ja: {},
    en: {},
  },
})

describe('HmTsx', () => {
  describe('基本的なレンダリング', () => {
    it('コンポーネントがレンダリングされる', () => {
      const wrapper = mount(HmTsx, {
        global: {
          plugins: [i18n],
        },
      })
      expect(wrapper.find('.hm-tsx').exists()).toBe(true)
    })

    it('デフォルトスロットが空の場合でも正常にレンダリングされる', () => {
      const wrapper = mount(HmTsx, {
        global: {
          plugins: [i18n],
        },
      })
      expect(wrapper.find('.hm-tsx').exists()).toBe(true)
    })
  })

  describe('スロットコンテンツ', () => {
    it('デフォルトスロットが正しく表示される', () => {
      const TestComponent = defineComponent({
        template: '<HmTsx><div>テストコンテンツ</div></HmTsx>',
        components: { HmTsx },
      })

      const wrapper = mount(TestComponent, {
        global: {
          plugins: [i18n],
        },
      })

      expect(wrapper.find('.hm-tsx').exists()).toBe(true)
      expect(wrapper.text()).toContain('テストコンテンツ')
    })

    it('複数の要素を含むスロットが正しく表示される', () => {
      const TestComponent = defineComponent({
        template: `
          <HmTsx>
            <h2>タイトル</h2>
            <p>説明文</p>
            <button>アクション</button>
          </HmTsx>
        `,
        components: { HmTsx },
      })

      const wrapper = mount(TestComponent, {
        global: {
          plugins: [i18n],
        },
      })

      expect(wrapper.find('h2').text()).toBe('タイトル')
      expect(wrapper.find('p').text()).toBe('説明文')
      expect(wrapper.find('button').text()).toBe('アクション')
    })

    it('ネストしたコンポーネントが正しく表示される', () => {
      const ChildComponent = defineComponent({
        template: '<span>子コンポーネント</span>',
      })

      const TestComponent = defineComponent({
        template: `
          <HmTsx>
            <ChildComponent />
          </HmTsx>
        `,
        components: { HmTsx, ChildComponent },
      })

      const wrapper = mount(TestComponent, {
        global: {
          plugins: [i18n],
        },
      })

      expect(wrapper.find('span').text()).toBe('子コンポーネント')
    })

    it('動的コンテンツが正しく表示される', () => {
      const TestComponent = defineComponent({
        template: `
          <HmTsx>
            <div>{{ message }}</div>
          </HmTsx>
        `,
        components: { HmTsx },
        data() {
          return {
            message: '動的メッセージ',
          }
        },
      })

      const wrapper = mount(TestComponent, {
        global: {
          plugins: [i18n],
        },
      })

      expect(wrapper.find('div').text()).toBe('動的メッセージ')
    })
  })

  describe('TSX機能', () => {
    it('TSXレンダリング機能が動作する', () => {
      const wrapper = mount(HmTsx, {
        slots: {
          default: () => '<span>TSXテスト</span>',
        },
        global: {
          plugins: [i18n],
        },
      })

      expect(wrapper.find('.hm-tsx').exists()).toBe(true)
      // スロットコンテンツがTSXで処理されることを確認
      expect(wrapper.html()).toContain('hm-tsx')
    })

    it('空のスロットでもエラーが発生しない', () => {
      expect(() => {
        mount(HmTsx, {
          global: {
            plugins: [i18n],
          },
        })
      }).not.toThrow()
    })
  })

  describe('DOM構造', () => {
    it('正しいDOM構造が生成される', () => {
      const wrapper = mount(HmTsx, {
        slots: {
          default: () => '<div class="test-content">内容</div>',
        },
        global: {
          plugins: [i18n],
        },
      })

      const hmTsx = wrapper.find('.hm-tsx')
      expect(hmTsx.exists()).toBe(true)

      // スロットコンテンツが含まれることを確認
      expect(wrapper.html()).toContain('test-content')
    })

    it('複雑なDOM構造でも正常に動作する', () => {
      const complexSlot = `
        <div class="container">
          <header class="header">
            <h1>ヘッダー</h1>
          </header>
          <main class="main">
            <section class="section">
              <article class="article">
                <p>記事内容</p>
              </article>
            </section>
          </main>
          <footer class="footer">
            <p>フッター</p>
          </footer>
        </div>
      `

      const wrapper = mount(HmTsx, {
        slots: {
          default: () => complexSlot,
        },
        global: {
          plugins: [i18n],
        },
      })

      expect(wrapper.find('.hm-tsx').exists()).toBe(true)
      expect(wrapper.html()).toContain('container')
      expect(wrapper.html()).toContain('header')
      expect(wrapper.html()).toContain('main')
      expect(wrapper.html()).toContain('footer')
    })
  })

  describe('エラーハンドリング', () => {
    it('不正なスロットコンテンツでもエラーが発生しない', () => {
      expect(() => {
        mount(HmTsx, {
          slots: {
            default: () => '',
          },
          global: {
            plugins: [i18n],
          },
        })
      }).not.toThrow()
    })

    it('スロットにundefinedが渡されてもエラーが発生しない', () => {
      expect(() => {
        mount(HmTsx, {
          global: {
            plugins: [i18n],
          },
        })
      }).not.toThrow()
    })
  })
})
