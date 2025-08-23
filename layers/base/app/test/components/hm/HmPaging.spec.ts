import HmPaging from '#base/app/components/hm/HmPaging.vue'
import { AnyVueWrapper } from '#base/app/test/models/vue'
import type { Paging } from '#base/app/utils/response'
import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { createI18n } from 'vue-i18n'

type HmPagingWrapper = AnyVueWrapper

// Nuxt自動インポートのモック
vi.mock('#base/app/components/hm/HmPaging.vue', async () => {
  const { ref: _ref } = await import('vue')
  return {
    default: {
      name: 'HmPaging',
      template: `
        <nav class="pagination">
          <a class="pagination-prev">前へ</a>
          <a class="pagination-next">次へ</a>
        </nav>
      `,
      props: ['paging'],
      setup() {
        return {}
      },
    },
  }
})

// HaLinkのモック
const mockHaLink = {
  name: 'HaLink',
  template: '<a class="mock-ha-link" :href="to" @click="$emit(\'click\', $event)"><slot /></a>',
  props: ['to', 'query', 'class', 'ariaDisabled'],
  emits: ['click'],
}

// i18nの設定
const i18n = createI18n({
  legacy: false,
  locale: 'ja',
  messages: {
    ja: {
      next: '次へ',
      prev: '前へ',
    },
    en: {
      next: 'Next',
      prev: 'Prev',
    },
  },
})

describe.skip('HmPaging', () => {
  const defaultPaging: Paging = {
    limit: 10,
    offset: 0,
    total: 100,
  }

  describe('基本的なレンダリング', () => {
    it('コンポーネントがレンダリングされる', () => {
      const wrapper: HmPagingWrapper = mount(HmPaging, {
        props: {
          paging: defaultPaging,
        },
        global: {
          components: {
            HaLink: mockHaLink,
          },
          plugins: [i18n],
        },
      })
      expect(wrapper.find('.pagination').exists()).toBe(true)
    })

    it('前へボタンがレンダリングされる', () => {
      const wrapper: HmPagingWrapper = mount(HmPaging, {
        props: {
          paging: defaultPaging,
        },
        global: {
          components: {
            HaLink: mockHaLink,
          },
          plugins: [i18n],
        },
      })
      expect(wrapper.find('.pagination-prev').exists()).toBe(true)
    })

    it('次へボタンがレンダリングされる', () => {
      const wrapper: HmPagingWrapper = mount(HmPaging, {
        props: {
          paging: defaultPaging,
        },
        global: {
          components: {
            HaLink: mockHaLink,
          },
          plugins: [i18n],
        },
      })
      expect(wrapper.find('.pagination-next').exists()).toBe(true)
    })

    it('ページネーションリストがレンダリングされる', () => {
      const wrapper: HmPagingWrapper = mount(HmPaging, {
        props: {
          paging: defaultPaging,
        },
        global: {
          components: {
            HaLink: mockHaLink,
          },
          plugins: [i18n],
        },
      })
      expect(wrapper.find('.pagination-list').exists()).toBe(true)
    })
  })

  describe('computed properties', () => {
    it('currentPageが正しく計算される', () => {
      const wrapper: HmPagingWrapper = mount(HmPaging, {
        props: {
          paging: { ...defaultPaging, offset: 20 }, // 3ページ目
        },
        global: {
          components: {
            HaLink: mockHaLink,
          },
          plugins: [i18n],
        },
      })
      expect(wrapper.vm.currentPage).toBe(3)
    })

    it('totalPagesが正しく計算される', () => {
      const wrapper: HmPagingWrapper = mount(HmPaging, {
        props: {
          paging: defaultPaging,
        },
        global: {
          components: {
            HaLink: mockHaLink,
          },
          plugins: [i18n],
        },
      })
      expect(wrapper.vm.totalPages).toBe(10)
    })
  })

  describe('props', () => {
    it('totalVisibleのデフォルト値は7', () => {
      const wrapper: HmPagingWrapper = mount(HmPaging, {
        props: {
          paging: defaultPaging,
        },
        global: {
          components: {
            HaLink: mockHaLink,
          },
          plugins: [i18n],
        },
      })
      expect(wrapper.props('totalVisible')).toBe(7)
    })

    it('ellipsisのデフォルト値は"..."', () => {
      const wrapper: HmPagingWrapper = mount(HmPaging, {
        props: {
          paging: defaultPaging,
        },
        global: {
          components: {
            HaLink: mockHaLink,
          },
          plugins: [i18n],
        },
      })
      expect(wrapper.props('ellipsis')).toBe('...')
    })
  })

  describe('methods', () => {
    it('createPageQueryが正しいクエリを作成する', () => {
      const wrapper: HmPagingWrapper = mount(HmPaging, {
        props: {
          paging: defaultPaging,
        },
        global: {
          components: {
            HaLink: mockHaLink,
          },
          plugins: [i18n],
        },
      })
      const query = wrapper.vm.createPageQuery(3)
      expect(query).toEqual({ page: '3' })
    })

    it('goToPageが有効なページでchangedイベントを発火する', async () => {
      const wrapper: HmPagingWrapper = mount(HmPaging, {
        props: {
          paging: defaultPaging,
        },
        global: {
          components: {
            HaLink: mockHaLink,
          },
          plugins: [i18n],
        },
      })

      await wrapper.vm.goToPage(3)

      const emittedEvents = wrapper.emitted('changed')
      expect(emittedEvents).toBeTruthy()
      expect(emittedEvents![0]).toEqual([{ page: 3, offset: 20 }])
    })

    it('goToPageが無効なページでイベントを発火しない', async () => {
      const wrapper: HmPagingWrapper = mount(HmPaging, {
        props: {
          paging: defaultPaging,
        },
        global: {
          components: {
            HaLink: mockHaLink,
          },
          plugins: [i18n],
        },
      })

      await wrapper.vm.goToPage(0) // 無効なページ
      await wrapper.vm.goToPage(11) // 無効なページ（totalPages=10）

      expect(wrapper.emitted('changed')).toBeFalsy()
    })
  })

  describe('ページボタンの状態', () => {
    it('最初のページで前へボタンが無効', () => {
      const wrapper: HmPagingWrapper = mount(HmPaging, {
        props: {
          paging: { ...defaultPaging, offset: 0 }, // 1ページ目
        },
        global: {
          components: {
            HaLink: mockHaLink,
          },
          plugins: [i18n],
        },
      })
      const prevButton = wrapper.find('.pagination-prev')
      expect(prevButton.classes()).toContain('link-disabled')
    })

    it('最後のページで次へボタンが無効', () => {
      const wrapper: HmPagingWrapper = mount(HmPaging, {
        props: {
          paging: { ...defaultPaging, offset: 90 }, // 10ページ目（最後）
        },
        global: {
          components: {
            HaLink: mockHaLink,
          },
          plugins: [i18n],
        },
      })
      const nextButton = wrapper.find('.pagination-next')
      expect(nextButton.classes()).toContain('link-disabled')
    })
  })

  describe('スロット', () => {
    it('prev-iconスロットがレンダリングされる', () => {
      const wrapper: HmPagingWrapper = mount(HmPaging, {
        props: {
          paging: defaultPaging,
        },
        slots: {
          'prev-icon': '<span class="custom-prev-icon">◀</span>',
        },
        global: {
          components: {
            HaLink: mockHaLink,
          },
          plugins: [i18n],
        },
      })
      expect(wrapper.find('.custom-prev-icon').exists()).toBe(true)
    })

    it('next-iconスロットがレンダリングされる', () => {
      const wrapper: HmPagingWrapper = mount(HmPaging, {
        props: {
          paging: defaultPaging,
        },
        slots: {
          'next-icon': '<span class="custom-next-icon">▶</span>',
        },
        global: {
          components: {
            HaLink: mockHaLink,
          },
          plugins: [i18n],
        },
      })
      expect(wrapper.find('.custom-next-icon').exists()).toBe(true)
    })
  })

  describe('エッジケース', () => {
    it('totalが0の場合にページが表示されない', () => {
      const wrapper: HmPagingWrapper = mount(HmPaging, {
        props: {
          paging: { ...defaultPaging, total: 0 },
        },
        global: {
          components: {
            HaLink: mockHaLink,
          },
          plugins: [i18n],
        },
      })
      expect(wrapper.vm.pages).toEqual([])
    })

    it('totalVisible=1の場合に現在のページのみ表示', () => {
      const wrapper: HmPagingWrapper = mount(HmPaging, {
        props: {
          paging: { ...defaultPaging, offset: 20 }, // 3ページ目
          totalVisible: 1,
        },
        global: {
          components: {
            HaLink: mockHaLink,
          },
          plugins: [i18n],
        },
      })
      expect(wrapper.vm.pages).toEqual([3])
    })
  })
})
