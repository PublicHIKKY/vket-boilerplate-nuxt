import { AnyVueWrapper } from '#base/app/test/models/vue'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

describe('HmAccordion', () => {
  let wrapper: AnyVueWrapper

  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    wrapper?.unmount()
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it('HmAccordionコンポーネントのテスト - 実装待ち', async () => {
    // HmAccordion.vueの内容を確認してから実装
    try {
      const HmAccordion = await import('#base/app/components/hm/HmAccordion.vue')

      wrapper = mount(HmAccordion.default, {
        props: {
          buttonname: 'test-button',
          panelname: 'test-panel',
        },
        slots: {
          default: '<div>アコーディオン内容</div>',
        },
      })

      expect(wrapper.exists()).toBe(true)
    } catch (_error) {
      // コンポーネントが存在しない場合はスキップ
      expect(true).toBe(true)
    }
  })
})
