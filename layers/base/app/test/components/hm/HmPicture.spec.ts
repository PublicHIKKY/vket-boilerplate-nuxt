import HmPicture from '#base/app/components/hm/HmPicture.vue'
import { AnyVueWrapper } from '#base/app/test/models/vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { createI18n } from 'vue-i18n'

type HmPictureWrapper = AnyVueWrapper

// HaImageのprops型定義
type HaImageProps = {
  isLazy?: boolean
  fetchpriority?: string
  src?: string
  alt?: string
  decoding?: string
}

// HaImageのモック
const mockHaImage = {
  name: 'HaImage',
  template: '<img class="mock-ha-image" :src="src" :alt="alt" :decoding="decoding" :fetchpriority="fetchpriority" />',
  props: ['isLazy', 'fetchpriority', 'src', 'alt', 'decoding'],
  setup(props: HaImageProps) {
    return {
      ...props,
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

describe('HmPicture', () => {
  describe('基本的なレンダリング', () => {
    it('コンポーネントがレンダリングされる', () => {
      const wrapper: HmPictureWrapper = mount(HmPicture, {
        global: {
          components: {
            HaImage: mockHaImage,
          },
          plugins: [i18n],
        },
      })
      expect(wrapper.find('picture').exists()).toBe(true)
    })

    it('source要素がレンダリングされる', () => {
      const wrapper: HmPictureWrapper = mount(HmPicture, {
        global: {
          components: {
            HaImage: mockHaImage,
          },
          plugins: [i18n],
        },
      })
      expect(wrapper.find('source').exists()).toBe(true)
    })

    it('HaImageコンポーネントがレンダリングされる', () => {
      const wrapper: HmPictureWrapper = mount(HmPicture, {
        global: {
          components: {
            HaImage: mockHaImage,
          },
          plugins: [i18n],
        },
      })
      expect(wrapper.findComponent({ name: 'HaImage' }).exists()).toBe(true)
    })
  })

  describe('props', () => {
    it('srcPcのデフォルト値は空文字', () => {
      const wrapper: HmPictureWrapper = mount(HmPicture, {
        global: {
          components: {
            HaImage: mockHaImage,
          },
          plugins: [i18n],
        },
      })
      expect(wrapper.props('srcPc')).toBe('')
    })

    it('srcSpのデフォルト値は空文字', () => {
      const wrapper: HmPictureWrapper = mount(HmPicture, {
        global: {
          components: {
            HaImage: mockHaImage,
          },
          plugins: [i18n],
        },
      })
      expect(wrapper.props('srcSp')).toBe('')
    })

    it('isLazyのデフォルト値はtrue', () => {
      const wrapper: HmPictureWrapper = mount(HmPicture, {
        global: {
          components: {
            HaImage: mockHaImage,
          },
          plugins: [i18n],
        },
      })
      expect(wrapper.props('isLazy')).toBe(true)
    })

    it('fetchPriorityのデフォルト値は"low"', () => {
      const wrapper: HmPictureWrapper = mount(HmPicture, {
        global: {
          components: {
            HaImage: mockHaImage,
          },
          plugins: [i18n],
        },
      })
      expect(wrapper.props('fetchPriority')).toBe('low')
    })

    it('decodingのデフォルト値は"auto"', () => {
      const wrapper: HmPictureWrapper = mount(HmPicture, {
        global: {
          components: {
            HaImage: mockHaImage,
          },
          plugins: [i18n],
        },
      })
      expect(wrapper.props('decoding')).toBe('auto')
    })
  })

  describe('propsの設定', () => {
    it('srcPcがHaImageに正しく渡される', () => {
      const srcPc = '/test/image-pc.jpg'
      const wrapper: HmPictureWrapper = mount(HmPicture, {
        props: {
          srcPc,
        },
        global: {
          components: {
            HaImage: mockHaImage,
          },
          plugins: [i18n],
        },
      })

      const haImage = wrapper.findComponent({ name: 'HaImage' })
      expect(haImage.props('src')).toBe(srcPc)
    })

    it('altがHaImageに正しく渡される', () => {
      const alt = 'テスト画像'
      const wrapper: HmPictureWrapper = mount(HmPicture, {
        props: {
          alt,
        },
        global: {
          components: {
            HaImage: mockHaImage,
          },
          plugins: [i18n],
        },
      })

      const haImage = wrapper.findComponent({ name: 'HaImage' })
      expect(haImage.props('alt')).toBe(alt)
    })

    it('altがnullの場合は空文字がHaImageに渡される', () => {
      const wrapper: HmPictureWrapper = mount(HmPicture, {
        props: {
          alt: null,
        },
        global: {
          components: {
            HaImage: mockHaImage,
          },
          plugins: [i18n],
        },
      })

      const haImage = wrapper.findComponent({ name: 'HaImage' })
      expect(haImage.props('alt')).toBe('')
    })

    it('isLazyがHaImageに正しく渡される', () => {
      const wrapper: HmPictureWrapper = mount(HmPicture, {
        props: {
          isLazy: false,
        },
        global: {
          components: {
            HaImage: mockHaImage,
          },
          plugins: [i18n],
        },
      })

      const haImage = wrapper.findComponent({ name: 'HaImage' })
      expect(haImage.props('isLazy')).toBe(false)
    })

    it('fetchPriorityがHaImageに正しく渡される', () => {
      const wrapper: HmPictureWrapper = mount(HmPicture, {
        props: {
          fetchPriority: 'high',
        },
        global: {
          components: {
            HaImage: mockHaImage,
          },
          plugins: [i18n],
        },
      })

      const haImage = wrapper.findComponent({ name: 'HaImage' })
      // Vue propsではfetchPriorityだが、渡される際はfetchpriorityになる
      expect(haImage.attributes('fetchpriority')).toBe('high')
    })

    it('decodingがHaImageに正しく渡される', () => {
      const wrapper: HmPictureWrapper = mount(HmPicture, {
        props: {
          decoding: 'sync',
        },
        global: {
          components: {
            HaImage: mockHaImage,
          },
          plugins: [i18n],
        },
      })

      const haImage = wrapper.findComponent({ name: 'HaImage' })
      expect(haImage.props('decoding')).toBe('sync')
    })
  })

  describe('source要素', () => {
    it('media属性が正しく設定される', () => {
      const wrapper: HmPictureWrapper = mount(HmPicture, {
        global: {
          components: {
            HaImage: mockHaImage,
          },
          plugins: [i18n],
        },
      })

      const source = wrapper.find('source')
      expect(source.attributes('media')).toBe('(max-width: 767px)')
    })

    it('srcSpが設定されている場合にsrcsetが正しく設定される', () => {
      const srcSp = '/test/image-sp.jpg'
      const wrapper: HmPictureWrapper = mount(HmPicture, {
        props: {
          srcSp,
        },
        global: {
          components: {
            HaImage: mockHaImage,
          },
          plugins: [i18n],
        },
      })

      const source = wrapper.find('source')
      expect(source.attributes('srcset')).toBe(srcSp)
    })
  })

  describe('computed properties', () => {
    it('imageUrlSpがsrcSpの値を返す', () => {
      const srcSp = '/test/image-sp.jpg'
      const wrapper: HmPictureWrapper = mount(HmPicture, {
        props: {
          srcSp,
        },
        global: {
          components: {
            HaImage: mockHaImage,
          },
          plugins: [i18n],
        },
      })

      expect(wrapper.vm.imageUrlSp).toBe(srcSp)
    })

    it('srcSpが空の場合にデフォルト画像を返す', () => {
      const wrapper: HmPictureWrapper = mount(HmPicture, {
        props: {
          srcSp: '',
        },
        global: {
          components: {
            HaImage: mockHaImage,
          },
          plugins: [i18n],
        },
      })

      // デフォルト画像のパスが返される
      expect(wrapper.vm.imageUrlSp).toContain('no-image.png')
    })

    it('エラー発生時にnoImage propの値を返す', async () => {
      const noImage = '/test/error-image.jpg'
      const wrapper: HmPictureWrapper = mount(HmPicture, {
        props: {
          srcSp: '/test/image-sp.jpg',
          noImage,
        },
        global: {
          components: {
            HaImage: mockHaImage,
          },
          plugins: [i18n],
        },
      })

      // エラーを発生させる
      await wrapper.vm.onError()

      expect(wrapper.vm.imageUrlSp).toBe(noImage)
    })

    it('エラー発生時でnoImageが設定されていない場合はデフォルト画像を返す', async () => {
      const wrapper: HmPictureWrapper = mount(HmPicture, {
        props: {
          srcSp: '/test/image-sp.jpg',
        },
        global: {
          components: {
            HaImage: mockHaImage,
          },
          plugins: [i18n],
        },
      })

      // エラーを発生させる
      await wrapper.vm.onError()

      expect(wrapper.vm.imageUrlSp).toContain('no-image.png')
    })
  })

  describe('エラーハンドリング', () => {
    it('初期状態ではhasErrorがfalse', () => {
      const wrapper: HmPictureWrapper = mount(HmPicture, {
        global: {
          components: {
            HaImage: mockHaImage,
          },
          plugins: [i18n],
        },
      })

      expect(wrapper.vm.hasError).toBe(false)
    })

    it('onError実行後にhasErrorがtrue', async () => {
      const wrapper: HmPictureWrapper = mount(HmPicture, {
        global: {
          components: {
            HaImage: mockHaImage,
          },
          plugins: [i18n],
        },
      })

      await wrapper.vm.onError()

      expect(wrapper.vm.hasError).toBe(true)
    })

    it('source要素でエラーイベントが発生するとonErrorが呼ばれる', async () => {
      const wrapper: HmPictureWrapper = mount(HmPicture, {
        global: {
          components: {
            HaImage: mockHaImage,
          },
          plugins: [i18n],
        },
      })

      const source = wrapper.find('source')
      await source.trigger('error')

      expect(wrapper.vm.hasError).toBe(true)
    })
  })
})
