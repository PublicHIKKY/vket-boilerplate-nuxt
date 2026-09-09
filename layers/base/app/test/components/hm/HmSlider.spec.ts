import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { createI18n } from 'vue-i18n'
import { AnyVueWrapper } from '#base/app/test/models/vue'
import HmSlider from '#base/app/components/hm/HmSlider.vue'

// i18nの設定
const i18n = createI18n({
  legacy: false,
  locale: 'ja',
  messages: {
    ja: {},
    en: {},
  },
})

// HTMLElement.animate のモック
Object.defineProperty(HTMLElement.prototype, 'animate', {
  value: vi.fn().mockReturnValue({
    finished: Promise.resolve(),
  }),
})

// window.setInterval のモック
vi.stubGlobal('setInterval', vi.fn())
vi.stubGlobal('clearInterval', vi.fn())

describe('HmSlider', () => {
  let wrapper: AnyVueWrapper

  const defaultProps = {
    slidename: 'test-slider',
    itemsId: ['item1', 'item2', 'item3'],
    arrow: true,
    pagination: true,
    amount: 3,
    loop: false,
    center: false,
    page: true,
    autoplay: false,
    interval: 3000,
    gapPc: '10px',
    gapSp: '5px',
    widthPc: '300px',
    widthSp: '200px',
    duration: 300,
    easing: 'ease' as const,
    draggable: true,
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    wrapper?.unmount()
  })

  describe('基本的なレンダリング', () => {
    beforeEach(() => {
      wrapper = mount(HmSlider, {
        props: defaultProps,
        slots: {
          item: '<div class="slider-item">Test Item</div>',
        },
        global: {
          plugins: [i18n],
        },
      })
    })

    it('コンポーネントがレンダリングされる', () => {
      expect(wrapper.find('.slider-wrap').exists()).toBe(true)
    })

    it('スライダーボディがレンダリングされる', () => {
      expect(wrapper.find('.slider-body').exists()).toBe(true)
    })

    it('スライダーインナーがレンダリングされる', () => {
      expect(wrapper.find('.slider-inner').exists()).toBe(true)
    })

    it('CSSカスタムプロパティが正しく設定される', () => {
      const sliderWrap = wrapper.find('.slider-wrap')
      expect(sliderWrap.attributes('style')).toContain('--slide-amount: 3')
      expect(sliderWrap.attributes('style')).toContain('--width-pc: 300px')
      expect(sliderWrap.attributes('style')).toContain('--width-sp: 200px')
    })
  })

  describe('ナビゲーション要素', () => {
    beforeEach(() => {
      wrapper = mount(HmSlider, {
        props: defaultProps,
        slots: {
          item: '<div class="slider-item">Test Item</div>',
          navigationprevious: '<span>Previous</span>',
          navigationnext: '<span>Next</span>',
        },
        global: {
          plugins: [i18n],
        },
      })
    })

    it('矢印ナビゲーションが表示される', () => {
      expect(wrapper.find('.button--previous').exists()).toBe(true)
      expect(wrapper.find('.button--next').exists()).toBe(true)
    })

    it('前へボタンのaria-labelが正しく設定される', () => {
      const prevButton = wrapper.find('.button--previous')
      expect(prevButton.attributes('aria-label')).toBe('スライドを1枚戻す')
    })

    it('次へボタンのaria-labelが正しく設定される', () => {
      const nextButton = wrapper.find('.button--next')
      expect(nextButton.attributes('aria-label')).toBe('スライドを1枚進める')
    })
  })

  describe('ページネーション', () => {
    beforeEach(() => {
      wrapper = mount(HmSlider, {
        props: defaultProps,
        slots: {
          item: '<div class="slider-item">Test Item</div>',
          pagination: '<span class="dot"></span>',
        },
        global: {
          plugins: [i18n],
        },
      })
    })

    it('ページネーションが表示される', () => {
      expect(wrapper.find('.slider-pagination').exists()).toBe(true)
    })

    it('指定されたamount分のページネーションアイテムが表示される', () => {
      expect(wrapper.findAll('.slider-pagination-item')).toHaveLength(3)
    })

    it('ページネーションボタンのaria-labelが正しく設定される', () => {
      const paginationButtons = wrapper.findAll('.slider-pagination-button')
      expect(paginationButtons[0]?.attributes('aria-label')).toBe('スライド1枚目を表示する')
      expect(paginationButtons[1]?.attributes('aria-label')).toBe('スライド2枚目を表示する')
    })

    it('最初のページネーションボタンがaria-selectedされている', () => {
      const paginationButtons = wrapper.findAll('.slider-pagination-button')
      expect(paginationButtons[0]?.attributes('aria-selected')).toBe('true')
      expect(paginationButtons[1]?.attributes('aria-selected')).toBe('false')
    })
  })

  describe('ページ表示', () => {
    beforeEach(() => {
      wrapper = mount(HmSlider, {
        props: defaultProps,
        global: {
          plugins: [i18n],
        },
      })
    })

    it('ページ表示が表示される', () => {
      expect(wrapper.find('.slider-page').exists()).toBe(true)
    })

    it('現在のページ番号が表示される', () => {
      expect(wrapper.find('.slider-page-start').text()).toBe('1')
    })

    it('総ページ数が表示される', () => {
      expect(wrapper.find('.slider-page-total').text()).toBe('3')
    })

    it('progressbarのaria属性が正しく設定される', () => {
      const progressbar = wrapper.find('.slider-page')
      expect(progressbar.attributes('role')).toBe('progressbar')
      expect(progressbar.attributes('aria-valuemin')).toBe('1')
      expect(progressbar.attributes('aria-valuemax')).toBe('3')
      expect(progressbar.attributes('aria-valuenow')).toBe('1')
    })
  })

  describe('自動再生機能', () => {
    beforeEach(() => {
      wrapper = mount(HmSlider, {
        props: {
          ...defaultProps,
          autoplay: true,
        },
        slots: {
          autoplaystart: '<span>Start</span>',
          autoplaystop: '<span>Stop</span>',
        },
        global: {
          plugins: [i18n],
        },
      })
    })

    it('自動再生コントロールボタンが表示される', () => {
      const buttons = wrapper.findAll('button')
      const startButton = buttons.find(btn => btn.text().includes('Start'))
      const stopButton = buttons.find(btn => btn.text().includes('Stop'))

      expect(startButton).toBeTruthy()
      expect(stopButton).toBeTruthy()
    })
  })

  describe('ループ機能', () => {
    beforeEach(() => {
      wrapper = mount(HmSlider, {
        props: {
          ...defaultProps,
          loop: true,
        },
        slots: {
          item: '<div class="slider-item">Test Item</div>',
        },
        global: {
          plugins: [i18n],
        },
      })
    })

    it('ループ有効時に複製スライドが表示される', () => {
      expect(wrapper.find('.slider.-before').exists()).toBe(true)
      expect(wrapper.find('.slider.-after').exists()).toBe(true)
    })

    it('複製スライドにaria-hidden属性が設定される', () => {
      expect(wrapper.find('.slider.-before').attributes('aria-hidden')).toBe('true')
      expect(wrapper.find('.slider.-after').attributes('aria-hidden')).toBe('true')
    })
  })

  describe('props', () => {
    it('centerプロパティが有効時にクラスが適用される', () => {
      wrapper = mount(HmSlider, {
        props: {
          ...defaultProps,
          center: true,
        },
        global: {
          plugins: [i18n],
        },
      })
      expect(wrapper.find('.slider.-center').exists()).toBe(true)
    })

    it('arrow=falseで矢印が非表示になる', () => {
      wrapper = mount(HmSlider, {
        props: {
          ...defaultProps,
          arrow: false,
        },
        global: {
          plugins: [i18n],
        },
      })
      expect(wrapper.find('.button--previous').exists()).toBe(false)
      expect(wrapper.find('.button--next').exists()).toBe(false)
    })

    it('pagination=falseでページネーションが非表示になる', () => {
      wrapper = mount(HmSlider, {
        props: {
          ...defaultProps,
          pagination: false,
        },
        global: {
          plugins: [i18n],
        },
      })
      expect(wrapper.find('.slider-pagination').exists()).toBe(false)
    })

    it('page=falseでページ表示が非表示になる', () => {
      wrapper = mount(HmSlider, {
        props: {
          ...defaultProps,
          page: false,
        },
        global: {
          plugins: [i18n],
        },
      })
      expect(wrapper.find('.slider-page').exists()).toBe(false)
    })
  })

  describe('内部状態', () => {
    beforeEach(() => {
      wrapper = mount(HmSlider, {
        props: defaultProps,
        global: {
          plugins: [i18n],
        },
      })
    })

    it('初期状態でcurrentSlideが0', () => {
      expect((wrapper.vm).currentSlide).toBe(0)
    })

    it('初期状態でdisabledPreviousがtrue（ループしない場合）', () => {
      expect((wrapper.vm).disabledPrevious).toBe(true)
    })

    it('初期状態でdisabledNextがfalse', () => {
      expect((wrapper.vm).disabledNext).toBe(false)
    })
  })

  describe('メソッド', () => {
    beforeEach(() => {
      wrapper = mount(HmSlider, {
        props: defaultProps,
        global: {
          plugins: [i18n],
        },
      })
    })

    it('moveSlider("next")でcurrentSlideが更新される', async () => {
      await (wrapper.vm).moveSlider('next')
      expect((wrapper.vm).currentSlide).toBe(-1)
    })

    it('moveSlider("previous")でcurrentSlideが更新される', async () => {
      // まず次に進めてから前に戻る
      await (wrapper.vm).moveSlider('next')
      await (wrapper.vm).moveSlider('previous')
      expect((wrapper.vm).currentSlide).toBe(0)
    })

    it('jumpSliderで指定したインデックスに移動する', async () => {
      await (wrapper.vm).jumpSlider(2)
      expect((wrapper.vm).currentSlide).toBe(-2)
    })

    it('startAutoPlayが呼ばれるとsetIntervalが実行される', () => {
      const setIntervalSpy = vi.spyOn(window, 'setInterval')
      ;(wrapper.vm).startAutoPlay()
      expect(setIntervalSpy).toHaveBeenCalledWith(expect.any(Function), defaultProps.interval)
    })

    it('stopAutoPlayが呼ばれるとclearIntervalが実行される', () => {
      const clearIntervalSpy = vi.spyOn(window, 'clearInterval')
      wrapper = mount(HmSlider, {
        props: { ...defaultProps, autoplay: true },
        global: { plugins: [i18n] },
      })
      ;(wrapper.vm).stopAutoPlay()
      expect(clearIntervalSpy).toHaveBeenCalled()
    })
  })

  describe('イベントハンドリング', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let moveSliderSpy: any

    beforeEach(() => {
      wrapper = mount(HmSlider, {
        props: defaultProps,
        slots: {
          navigationprevious: '<span>Previous</span>',
          navigationnext: '<span>Next</span>',
          pagination: '<span class="dot"></span>',
        },
        global: {
          plugins: [i18n],
        },
      })
      moveSliderSpy = vi.spyOn(wrapper.vm, 'moveSlider')
    })

    it('次へボタンクリックでmoveSliderが呼ばれる', async () => {
      const nextButton = wrapper.find('.button--next')
      await nextButton.trigger('click')
      expect(moveSliderSpy).toHaveBeenCalledWith('next')
    })

    it('前へボタンクリックでmoveSliderが呼ばれる', async () => {
      // まず次に進めてから前へボタンを有効にする
      moveSliderSpy.mockClear() // 既存の呼び出しをクリア
      await (wrapper.vm).moveSlider('next')
      await (wrapper.vm).$nextTick()

      moveSliderSpy.mockClear() // 上記の呼び出しをクリア
      const prevButton = wrapper.find('.button--previous')
      await prevButton.trigger('click')
      expect(moveSliderSpy).toHaveBeenCalledWith('previous')
    })

    it('ページネーションボタンクリックでjumpSliderが呼ばれる', async () => {
      const jumpSliderSpy = vi.spyOn(wrapper.vm, 'jumpSlider')
      const paginationButton = wrapper.findAll('.slider-pagination-button')[1]
      await paginationButton?.trigger('click')
      expect(jumpSliderSpy).toHaveBeenCalledWith(1)
    })
  })

  describe('ドラッグ機能', () => {
    beforeEach(() => {
      wrapper = mount(HmSlider, {
        props: defaultProps,
        global: {
          plugins: [i18n],
        },
      })
    })

    it('touchstartイベントがslider-innerに正しく設定される', () => {
      const sliderInner = wrapper.find('.slider-inner')
      expect(sliderInner.exists()).toBe(true)

      // touchstartイベントをトリガーしてもエラーが発生しないことを確認
      expect(() => {
        void sliderInner.trigger('touchstart', {
          touches: [{ pageX: 100 }],
        })
      }).not.toThrow()
    })

    it('mousedownイベントがslider-innerに正しく設定される', () => {
      const sliderInner = wrapper.find('.slider-inner')
      expect(sliderInner.exists()).toBe(true)

      // mousedownイベントをトリガーしてもエラーが発生しないことを確認
      expect(() => {
        void sliderInner.trigger('mousedown', {
          pageX: 100,
        })
      }).not.toThrow()
    })
  })

  describe('国際化対応', () => {
    it('英語ロケールでaria-labelが英語になる', () => {
      const enI18n = createI18n({
        legacy: false,
        locale: 'en',
        messages: {
          ja: {},
          en: {},
        },
      })

      wrapper = mount(HmSlider, {
        props: defaultProps,
        slots: {
          navigationprevious: '<span>Previous</span>',
          navigationnext: '<span>Next</span>',
          pagination: '<span class="dot"></span>',
        },
        global: {
          plugins: [enI18n],
        },
      })

      const prevButton = wrapper.find('.button--previous')
      const nextButton = wrapper.find('.button--next')

      expect(prevButton.attributes('aria-label')).toBe('Show previous slide')
      expect(nextButton.attributes('aria-label')).toBe('Show next slide')
    })
  })

  describe('境界値とエラー経路', () => {
    const mountSlider = (props: Partial<typeof defaultProps> = {}) => {
      wrapper = mount(HmSlider, {
        props: { ...defaultProps, ...props },
        slots: {
          item: `
            <div id="slide-1" class="slider-item">1</div>
            <div id="slide-2" class="slider-item">2</div>
            <div id="slide-3" class="slider-item">3</div>
          `,
        },
        global: { plugins: [i18n] },
      })
      return wrapper
    }

    it('ループ無しの最後からnextで先頭へ戻る', async () => {
      const wrapper = mountSlider()
      await wrapper.vm.jumpSlider(2)

      await wrapper.vm.moveSlider('next')

      expect(wrapper.vm.currentSlide).toBe(0)
      expect(wrapper.vm.disabledPrevious).toBe(true)
    })

    it('ループ時のnextは通常進行と末尾からの復帰を行う', async () => {
      const wrapper = mountSlider({ loop: true })

      await wrapper.vm.moveSlider('next')
      expect(wrapper.vm.currentSlide).toBe(-1)
      await wrapper.vm.jumpSlider(2)
      await wrapper.vm.moveSlider('next')
      expect(wrapper.vm.currentSlide).toBe(0)
    })

    it('ループ時のpreviousは先頭から末尾へ移動し、通常は1つ戻る', async () => {
      const wrapper = mountSlider({ loop: true })

      await wrapper.vm.moveSlider('previous')
      expect(wrapper.vm.currentSlide).toBe(-2)
      await wrapper.vm.moveSlider('previous')
      expect(wrapper.vm.currentSlide).toBe(-1)
    })

    it('pagination indexが無い場合は現在位置を保つ', () => {
      const wrapper = mountSlider()

      Reflect.apply(wrapper.vm.$.setupState.updateCurrentSlide, undefined, ['pagination'])

      expect(wrapper.vm.currentSlide).toBe(0)
    })

    it('slider refがnullならmove/jump/controlが明示的に失敗する', async () => {
      const wrapper = mountSlider()
      await Promise.resolve()
      wrapper.vm.$.setupState.slider = null

      await expect(wrapper.vm.moveSlider('next')).rejects.toThrow('slider要素はnull')
      wrapper.vm.$.setupState.slider = null
      await expect(wrapper.vm.jumpSlider(1)).rejects.toThrow('slider要素はnull')
      wrapper.vm.$.setupState.slider = null
      expect(() => wrapper.vm.$.setupState.controlButton()).toThrow('slider要素はnull')
    })

    it('slider refがHTMLElementでなければmove/jumpを拒否する', async () => {
      const wrapper = mountSlider()
      wrapper.vm.$.setupState.slider = {}

      await expect(wrapper.vm.moveSlider('next')).rejects.toThrow(
        'slider要素はHTMLElementではありません',
      )
      wrapper.vm.$.setupState.slider = {}
      await expect(wrapper.vm.jumpSlider(1)).rejects.toThrow(
        'slider要素はHTMLElementではありません',
      )
    })

    it('未知のdirectionでは位置を変更しない', async () => {
      const wrapper = mountSlider()

      await wrapper.vm.moveSlider('unknown')

      expect(wrapper.vm.currentSlide).toBe(0)
    })

    it('jump処理中にsliderがHTMLElementでなくなった場合はanimateしない', async () => {
      const wrapper = mountSlider()
      const originalHTMLElement = globalThis.HTMLElement
      let checks = 0
      const ChangingHTMLElement = function ChangingHTMLElementMock() {}
      Object.defineProperty(ChangingHTMLElement, Symbol.hasInstance, {
        value: () => {
          checks += 1
          return checks === 1
        },
      })
      vi.stubGlobal('HTMLElement', ChangingHTMLElement)

      await wrapper.vm.jumpSlider(1)

      expect(wrapper.vm.currentSlide).toBe(-1)
      vi.stubGlobal('HTMLElement', originalHTMLElement)
    })

    it('現在スライドのみactiveにし、他をアクセシビリティツリーから外す', async () => {
      const wrapper = mountSlider()

      await wrapper.vm.jumpSlider(1)

      const items = wrapper.find('#test-slider').findAll('.slider-item')
      expect(items[0]!.classes()).not.toContain('-active')
      expect(items[0]!.attributes('aria-hidden')).toBe('true')
      expect(items[1]!.classes()).toContain('-active')
      expect(items[1]!.attributes('aria-hidden')).toBeUndefined()
    })

    it('スライドアイテムコンテナが無い場合はactive更新を無視する', () => {
      const wrapper = mountSlider()
      wrapper.vm.$.setupState.receivedSlideItemsContainer = null

      expect(() => wrapper.vm.$.setupState.setActiveSlide()).not.toThrow()
    })

    it('ループ用複製スライドからidを除去する', () => {
      const wrapper = mountSlider({ loop: true })

      expect(wrapper.find('.slider.-before .slider-item').attributes('id')).toBeUndefined()
      expect(wrapper.find('.slider.-after .slider-item').attributes('id')).toBeUndefined()
    })

    it('center指定を複製スライドにも適用する', () => {
      const wrapper = mountSlider({ loop: true, center: true })

      expect(wrapper.get('.slider.-before').classes()).toContain('-center')
      expect(wrapper.get('.slider.-after').classes()).toContain('-center')
    })

    it.each(['clonedSlideBefore', 'clonedSlideAfter'])(
      '%s refがnullならremoveIdが明示的に失敗する',
      (refName) => {
        const wrapper = mountSlider({ loop: true })
        wrapper.vm.$.setupState[refName] = null

        expect(() => wrapper.vm.$.setupState.removeId()).toThrow(
          'clonedSlideBefore要素はnull',
        )
      },
    )

    it('autoplayのinterval callbackで次のスライドへ進む', async () => {
      const wrapper = mountSlider({ autoplay: true })
      await Promise.resolve()
      const intervalMock = vi.mocked(window.setInterval)
      const callback = intervalMock.mock.calls.at(-1)?.[0]

      expect(callback).toBeTypeOf('function')
      if (typeof callback === 'function') callback()
      await wrapper.vm.$nextTick()

      expect(wrapper.vm.currentSlide).toBe(-1)
    })

    it('自動再生の英語aria-labelを表示する', () => {
      const enI18n = createI18n({
        legacy: false,
        locale: 'en',
        messages: { ja: {}, en: {} },
      })
      wrapper = mount(HmSlider, {
        props: { ...defaultProps, autoplay: true },
        global: { plugins: [enI18n] },
      })
      const autoplayButtons = wrapper.findAll('button').slice(-2)

      expect(autoplayButtons[0]!.attributes('aria-label')).toBe(
        'Start automatic playback of slides',
      )
      expect(autoplayButtons[1]!.attributes('aria-label')).toBe(
        'Stop automatic playback of slides',
      )
    })
  })

  describe('ドラッグとスワイプの状態遷移', () => {
    const mountSlider = (props: Partial<typeof defaultProps> = {}) => {
      wrapper = mount(HmSlider, {
        props: { ...defaultProps, ...props },
        global: { plugins: [i18n] },
      })
      return wrapper
    }
    const mouse = (type: string, pageX: number) => {
      const event = new MouseEvent(type, { bubbles: true, cancelable: true })
      Object.defineProperty(event, 'pageX', { value: pageX })
      return event
    }
    const touch = (type: string, pageX?: number) => {
      const event = new TouchEvent(type, { bubbles: true, cancelable: true })
      Object.defineProperty(event, 'touches', {
        value: pageX === undefined ? [] : [{ pageX }],
      })
      return event
    }

    it('draggable=falseならdrag処理を行わない', async () => {
      const wrapper = mountSlider({ draggable: false })

      wrapper.vm.$.setupState.startDragging(mouse('mousedown', 100))
      wrapper.vm.$.setupState.inDragging(mouse('mousemove', 0))
      await wrapper.vm.$.setupState.endDragging(mouse('mouseup', 0))

      expect(wrapper.vm.currentSlide).toBe(0)
    })

    it('左へ50px超ドラッグで次へ進む', async () => {
      const wrapper = mountSlider()
      const slider = wrapper.get('.slider-inner').element as HTMLElement

      wrapper.vm.$.setupState.startDragging(mouse('mousedown', 100))
      wrapper.vm.$.setupState.inDragging(mouse('mousemove', 0))
      expect(slider.style.translate).toBe('-30px')
      await wrapper.vm.$.setupState.endDragging(mouse('mouseup', 0))

      expect(wrapper.vm.currentSlide).toBe(-1)
      expect(slider.style.translate).toBe('0px')
    })

    it('右へ50px超ドラッグで前へ戻る', async () => {
      const wrapper = mountSlider({ loop: true })

      await wrapper.vm.jumpSlider(1)
      wrapper.vm.$.setupState.startDragging(mouse('mousedown', 0))
      wrapper.vm.$.setupState.inDragging(mouse('mousemove', 100))
      await wrapper.vm.$.setupState.endDragging(mouse('mouseup', 100))

      expect(wrapper.vm.currentSlide).toBe(0)
    })

    it('タッチスワイプで次へ進む', async () => {
      const wrapper = mountSlider()

      wrapper.vm.$.setupState.startDragging(touch('touchstart', 100))
      wrapper.vm.$.setupState.inDragging(touch('touchmove', 0))
      await wrapper.vm.$.setupState.endDragging(touch('touchend'))

      expect(wrapper.vm.currentSlide).toBe(-1)
    })

    it('非ループの先頭と末尾では範囲外へドラッグしない', async () => {
      const wrapper = mountSlider()
      const slider = wrapper.get('.slider-inner').element as HTMLElement

      wrapper.vm.$.setupState.startDragging(mouse('mousedown', 0))
      wrapper.vm.$.setupState.inDragging(mouse('mousemove', 100))
      await wrapper.vm.$.setupState.endDragging(mouse('mouseup', 100))
      expect(wrapper.vm.currentSlide).toBe(0)
      expect(slider.style.translate).toBe('0px')

      await wrapper.vm.jumpSlider(2)
      wrapper.vm.$.setupState.startDragging(mouse('mousedown', 100))
      wrapper.vm.$.setupState.inDragging(mouse('mousemove', 0))
      await wrapper.vm.$.setupState.endDragging(mouse('mouseup', 0))
      expect(wrapper.vm.currentSlide).toBe(-2)
      expect(slider.style.translate).toBe('0px')
    })

    it('50px以下のドラッグではスライドを変えない', async () => {
      const wrapper = mountSlider()

      wrapper.vm.$.setupState.startDragging(mouse('mousedown', 100))
      wrapper.vm.$.setupState.inDragging(mouse('mousemove', 80))
      await wrapper.vm.$.setupState.endDragging(mouse('mouseup', 80))

      expect(wrapper.vm.currentSlide).toBe(0)
    })

    it('ドラッグ開始前のmove/endと未知のイベントを無視する', async () => {
      const wrapper = mountSlider()
      const unknownEvent = new Event('unknown')

      wrapper.vm.$.setupState.inDragging(mouse('mousemove', 10))
      await wrapper.vm.$.setupState.endDragging(mouse('mouseup', 10))
      wrapper.vm.$.setupState.startDragging(unknownEvent)

      expect(wrapper.vm.currentSlide).toBe(0)
    })

    it('ドラッグ中の未知のイベントを無視する', () => {
      const wrapper = mountSlider()
      wrapper.vm.$.setupState.startDragging(mouse('mousedown', 100))

      wrapper.vm.$.setupState.inDragging(new Event('unknown'))

      expect(wrapper.vm.currentSlide).toBe(0)
    })

    it('drag中にslider refが消失したら明示的に失敗する', async () => {
      const wrapper = mountSlider()
      await Promise.resolve()
      wrapper.vm.$.setupState.startDragging(mouse('mousedown', 100))
      wrapper.vm.$.setupState.slider = null

      expect(() => wrapper.vm.$.setupState.inDragging(mouse('mousemove', 0)))
        .toThrow('slider要素はnull')
    })

    it.each([
      { boundary: 'first', start: 0, end: 100 },
      { boundary: 'last', start: 100, end: 0 },
    ])('$boundaryの範囲外drag終了時にslider refが無ければ失敗する', async ({ boundary, start, end }) => {
      const wrapper = mountSlider()
      await Promise.resolve()
      if (boundary === 'last') await wrapper.vm.jumpSlider(2)
      wrapper.vm.$.setupState.startDragging(mouse('mousedown', start))
      wrapper.vm.$.setupState.inDragging(mouse('mousemove', end))
      wrapper.vm.$.setupState.slider = null

      await expect(wrapper.vm.$.setupState.endDragging(mouse('mouseup', end)))
        .rejects.toThrow('slider要素はnull')
    })

    it('drag終了時にslider refが消失したら失敗する', async () => {
      const wrapper = mountSlider()
      await Promise.resolve()
      wrapper.vm.$.setupState.startDragging(mouse('mousedown', 100))
      wrapper.vm.$.setupState.inDragging(mouse('mousemove', 80))
      wrapper.vm.$.setupState.slider = null

      await expect(wrapper.vm.$.setupState.endDragging(mouse('mouseup', 80)))
        .rejects.toThrow('slider要素はnull')
    })
  })
})
