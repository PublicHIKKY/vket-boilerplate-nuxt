import { mount, shallowMount } from '@vue/test-utils'
import { describe, it, test, expect, vi } from 'vitest'
import HmClipping from '#base/app/components/hm/HmClipping.vue'
import { AnyVueWrapper } from '#base/app/test/models/vue'

test('ref component', () => {
  expect(HmClipping).toBeTruthy()
})

test('mount component', () => {
  const wrapper = mount(HmClipping, {
    props: {
      src: '',
    },
  })
  expect(wrapper.getCurrentComponent()).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()
})

test('props', () => {
  const wrapper = mount(HmClipping, {
    props: {
      src: '',
      width: 256,
      height: 256,
      cropperAreaHeight: 0,
      doResize: true,
      stencil: 'RectangleStencil',
      imageRestriction: 'stencil',
      autoZoom: false,
      ext: 'jpeg',
    },
  })
  expect(wrapper.props('src')).toStrictEqual('')
  expect(wrapper.props('width')).toStrictEqual(256)
  expect(wrapper.props('height')).toStrictEqual(256)
  expect(wrapper.props('cropperAreaHeight')).toStrictEqual(0)
  expect(wrapper.props('doResize')).toStrictEqual(true)
  expect(wrapper.props('stencil')).toStrictEqual('RectangleStencil')
  expect(wrapper.props('imageRestriction')).toStrictEqual('stencil')
  expect(wrapper.props('autoZoom')).toStrictEqual(false)
  expect(wrapper.props('ext')).toStrictEqual('jpeg')
})

describe('events', () => {
  it(':button click to emit clipped', async () => {
    // NOTE: mountしてcomponentを展開すると、「Error: connect ECONNREFUSED」になる
    const wrapper = shallowMount(HmClipping, {
      props: {
        src: '/dummy',
        width: 256,
        height: 256,
        cropperAreaHeight: 0,
        doResize: true,
        stencil: 'RectangleStencil',
        imageRestriction: 'stencil',
        autoZoom: false,
        ext: 'jpeg',
      },
    })
    await wrapper.find('ha-base-button-stub').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('clipped')
    expect(wrapper.emitted()['clipped']).toHaveLength(1)
    expect(wrapper.emitted()['clipped']).toEqual([[[]]])
  })

  it(':Cropper changeでcanvasをFileへ変換し、clippedで渡す', async () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-08-26T00:00:00Z'))
    // NOTE: mountしてcomponentを展開すると、「Error: connect ECONNREFUSED」になる
    const wrapper = shallowMount(HmClipping, {
      props: {
        src: '/dummy',
        width: 256,
        height: 256,
        cropperAreaHeight: 0,
        doResize: true,
        stencil: 'RectangleStencil',
        imageRestriction: 'stencil',
        autoZoom: false,
        ext: 'jpeg',
      },
    })
    const canvas = {
      toDataURL: vi.fn(() => 'data:image/png;base64,AQID'),
    } as unknown as HTMLCanvasElement

    wrapper.findComponent({ name: 'Cropper' }).vm.$emit('change', { canvas })
    await wrapper.find('ha-base-button-stub').trigger('click')

    const files = wrapper.emitted('clipped')?.[0]?.[0] as File[]
    expect(canvas.toDataURL).toHaveBeenCalledWith('image/jpeg')
    expect(files).toHaveLength(1)
    expect(files[0]).toMatchObject({
      name: 'tmp-1787702400000.png',
      type: 'image/png',
      size: 3,
    })
    vi.useRealTimers()
  })

  it.each([
    { dataUrl: 'data:image/png;base64', message: 'Invalid bytes' },
    { dataUrl: 'invalid,AQID', message: 'Invalid mime' },
  ])('不正なData URLを拒否する: $message', ({ dataUrl, message }) => {
    const wrapper = shallowMount(HmClipping, { props: { src: '/dummy' } })
    const canvas = {
      toDataURL: vi.fn(() => dataUrl),
    } as unknown as HTMLCanvasElement

    expect(() => (wrapper as AnyVueWrapper).vm.$.setupState.onChange({ canvas })).toThrow(message)
  })

  it('切り抜きボタンのデフォルトラベルを表示する', () => {
    const wrapper = mount(HmClipping, {
      props: { src: '/dummy' },
      global: {
        stubs: {
          Cropper: true,
        },
      },
    })

    expect(wrapper.get('button').text()).toBe('切り抜く')
  })
})

describe('computed options', () => {
  it.each([
    { cropperAreaHeight: undefined, expected: undefined },
    { cropperAreaHeight: 0, expected: '358.4px' },
    { cropperAreaHeight: 480, expected: '480px' },
  ])('cropperAreaHeight=$cropperAreaHeightのstyleを生成する', ({ cropperAreaHeight, expected }) => {
    const wrapper = shallowMount(HmClipping, {
      props: { src: '', cropperAreaHeight },
    })

    expect(wrapper.findComponent({ name: 'Cropper' }).attributes('style'))
      .toBe(expected === undefined ? undefined : `height: ${expected};`)
  })

  it('doResize=falseならcanvasサイズを固定しない', () => {
    const wrapper = shallowMount(HmClipping, {
      props: { src: '', doResize: false },
    })

    expect((wrapper as AnyVueWrapper).vm.$.setupState.cropperOptions).toEqual({})
  })

  it('canvasが無いchangeは無視する', () => {
    const wrapper = shallowMount(HmClipping, { props: { src: '/dummy' } })

    expect(() => wrapper.findComponent({ name: 'Cropper' }).vm.$emit('change', {}))
      .not.toThrow()
  })
})
