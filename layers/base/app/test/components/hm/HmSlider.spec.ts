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
})
