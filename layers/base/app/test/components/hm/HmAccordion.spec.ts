import HmAccordion from '#base/app/components/hm/HmAccordion.vue'
import { AnyVueWrapper } from '#base/app/test/models/vue'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { nextTick } from 'vue'

type ObserverHarness = {
  callback?: MutationCallback
  disconnect: ReturnType<typeof vi.fn>
  observe: ReturnType<typeof vi.fn>
}

const observerHarness: ObserverHarness = {
  disconnect: vi.fn(),
  observe: vi.fn(),
}

describe('HmAccordion', () => {
  let wrapper: AnyVueWrapper

  beforeEach(() => {
    vi.useFakeTimers()
    observerHarness.callback = undefined
    observerHarness.disconnect.mockClear()
    observerHarness.observe.mockClear()
    vi.stubGlobal('MutationObserver', class {
      constructor(callback: MutationCallback) {
        observerHarness.callback = callback
      }

      disconnect = observerHarness.disconnect
      observe = observerHarness.observe
      takeRecords = () => []
    })
  })

  afterEach(() => {
    wrapper?.unmount()
    vi.useRealTimers()
    vi.unstubAllGlobals()
  })

  const mountAccordion = (open?: boolean) => {
    wrapper = mount(HmAccordion, {
      props: {
        buttonname: 'faq-trigger',
        panelname: 'faq-panel',
        open,
      },
      slots: {
        title: 'FAQ',
        icon: '<span class="icon">+</span>',
        content: '<p class="content">answer</p>',
      },
    })
    return wrapper
  }

  it('初期状態は閉じており、ARIAとhiddenを設定する', () => {
    const wrapper = mountAccordion()

    expect(wrapper.get('button').attributes()).toMatchObject({
      'id': 'faq-trigger',
      'aria-controls': 'faq-panel',
      'aria-expanded': 'false',
    })
    expect(wrapper.get('#faq-panel').attributes()).toMatchObject({
      'aria-labelledby': 'faq-trigger',
      'hidden': 'until-found',
    })
    expect(wrapper.get('.content').text()).toBe('answer')
    expect(observerHarness.observe).toHaveBeenCalledWith(
      wrapper.get('#faq-panel').element,
      {
        attributes: true,
        childList: false,
        subtree: false,
        characterData: false,
      },
    )
  })

  it('open=trueなら開いた状態で初期化する', async () => {
    const wrapper = mountAccordion(true)
    await wrapper.vm.$nextTick()

    expect(wrapper.get('button').attributes('aria-expanded')).toBe('true')
    expect(wrapper.get('#faq-panel').attributes('hidden')).toBeUndefined()
  })

  it('クリックで開閉する', async () => {
    const wrapper = mountAccordion()
    const trigger = wrapper.get('button')
    const panel = wrapper.get('#faq-panel')

    await trigger.trigger('click')
    expect(trigger.attributes('aria-expanded')).toBe('true')
    expect(panel.attributes('hidden')).toBeUndefined()

    await trigger.trigger('click')
    expect(trigger.attributes('aria-expanded')).toBe('false')
    expect(panel.attributes('hidden')).toBeUndefined()
    expect(panel.attributes('hidden')).toBeUndefined()
  })

  it('find-in-pageでhiddenが外れたら開状態を同期する', async () => {
    const wrapper = mountAccordion()
    wrapper.get('#faq-panel').element.removeAttribute('hidden')

    observerHarness.callback?.([{} as MutationRecord], {} as MutationObserver)
    await wrapper.vm.$nextTick()

    expect(wrapper.get('button').attributes('aria-expanded')).toBe('true')
  })

  it('observerはパネルがhiddenの場合や既に開いている場合に状態を変えない', async () => {
    const wrapper = mountAccordion()

    observerHarness.callback?.([{} as MutationRecord], {} as MutationObserver)
    await nextTick()
    expect(wrapper.get('button').attributes('aria-expanded')).toBe('false')

    await wrapper.get('button').trigger('click')
    observerHarness.callback?.([{} as MutationRecord], {} as MutationObserver)
    await nextTick()
    expect(wrapper.get('button').attributes('aria-expanded')).toBe('true')
  })

  it('パネルrefが無い状態で閉閉しても例外にならない', () => {
    const wrapper = mountAccordion(true)
    wrapper.vm.$.setupState.accordionBody = null

    wrapper.vm.$.setupState.changeExpanded()
    wrapper.vm.$.setupState.changeExpanded()
    wrapper.vm.$.setupState.accordionBody = wrapper.get('#faq-panel').element
    vi.advanceTimersByTime(300)

    expect(wrapper.vm.$.setupState.isOpen).toBe(true)
    expect(wrapper.get('#faq-panel').attributes('hidden')).toBe('until-found')
  })

  it('遅延処理時にパネルrefが無くても例外にならない', () => {
    const wrapper = mountAccordion(true)
    wrapper.vm.$.setupState.accordionBody = null

    wrapper.vm.$.setupState.changeExpanded()
    wrapper.vm.$.setupState.changeExpanded()

    expect(() => vi.advanceTimersByTime(300)).not.toThrow()
  })

  it('HTMLElementではないパネルをMutationObserverの監視対象にしない', () => {
    vi.stubGlobal('HTMLElement', function HTMLElementMock() {})

    const wrapper = mountAccordion()

    expect(wrapper.exists()).toBe(true)
    expect(observerHarness.observe).not.toHaveBeenCalled()
  })
})
