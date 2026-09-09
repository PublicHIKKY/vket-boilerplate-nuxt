import { mount } from '@vue/test-utils'
import { describe, expect, it, test } from 'vitest'
import HaImage from '#base/app/components/ha/HaImage.vue'

/**
 * @see vitest.config.mtsのalias
 */
const defaultNoImage = '/images/no-image.png'

const customNoImage = '/images/no-image-custom.png'

test('ref component', () => {
  expect(HaImage).toBeTruthy()
})

test('mount component', () => {
  const wrapper = mount(HaImage, {
    props: { src: 'img.png', alt: 'a great img' },
  })
  expect(wrapper.getCurrentComponent()).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()
})

describe('props', () => {
  it(':src', () => {
    const wrapper = mount(HaImage, { props: { src: '/image.png' } })
    expect(wrapper.get('img').attributes('src')).toBe('/image.png')
  })

  describe(':alt', () => {
    it('is not set (alt="")', () => {
      const wrapper = mount(HaImage)
      expect(wrapper.get('img').attributes('alt')).toBe('')
    })

    it('is string', () => {
      const wrapper = mount(HaImage, { props: { alt: 'alt string' } })
      expect(wrapper.get('img').attributes('alt')).toBe('alt string')
    })
  })

  describe('size', () => {
    it('no width / height', () => {
      const wrapper = mount(HaImage)
      expect(wrapper.get('img').attributes('width')).toBeFalsy()
      expect(wrapper.get('img').attributes('height')).toBeFalsy()
    })

    it('set size', () => {
      const wrapper = mount(HaImage, { props: { width: 120, height: 80 } })
      expect(wrapper.get('img').attributes('width')).toBe('120')
      expect(wrapper.get('img').attributes('height')).toBe('80')
    })
  })
})

describe('lazy loading', () => {
  it('default is eager', () => {
    const wrapper = mount(HaImage)
    expect(wrapper.get('img').attributes('loading')).toBe('eager')
  })

  it(':is-lazy="true" works', () => {
    const wrapper = mount(HaImage, { props: { isLazy: true } })
    expect(wrapper.get('img').attributes('loading')).toBe('lazy')
  })

  it(':is-lazy="false" works', () => {
    const wrapper = mount(HaImage, { props: { isLazy: false } })
    expect(wrapper.get('img').attributes('loading')).toBe('eager')
  })
})

describe('fallback images', () => {
  it('no src loads "no-image.png"', () => {
    const wrapper = mount(HaImage)
    expect(wrapper.get('img').attributes('src')).toContain(defaultNoImage)
  })

  it('on error loads "no-image.png"', async () => {
    const wrapper = mount(HaImage, { props: { src: '/foo-not-found.jpg' } })
    await wrapper.get('img').trigger('error')
    expect(wrapper.get('img').attributes('src')).toContain(defaultNoImage)
  })

  it('custom on-error image', async () => {
    const wrapper = mount(HaImage, {
      props: {
        src: '/foo-not-found.jpg',
        noImage: customNoImage,
      },
    })
    await wrapper.get('img').trigger('error')
    expect(wrapper.get('img').attributes('src')).toContain(customNoImage)
  })
})

describe('intrinsic size', () => {
  it('load時にnaturalWidthとnaturalHeightをwidth/heightへ反映する', async () => {
    const wrapper = mount(HaImage, { props: { src: '/image.png' } })
    const image = wrapper.get('img').element as HTMLImageElement
    Object.defineProperties(image, {
      naturalWidth: { configurable: true, value: 640 },
      naturalHeight: { configurable: true, value: 360 },
    })

    await wrapper.get('img').trigger('load')

    expect(image.width).toBe(640)
    expect(image.height).toBe(360)
  })

  it('画像要素refがない場合は何もしない', () => {
    const wrapper = mount(HaImage)
    const vm = wrapper.vm as unknown as {
      imageElement: HTMLImageElement | null
      onImageLoad: () => void
    }
    vm.imageElement = null

    expect(() => vm.onImageLoad()).not.toThrow()
  })
})
