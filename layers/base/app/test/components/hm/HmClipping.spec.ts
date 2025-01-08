import { mount, shallowMount } from '@vue/test-utils'
import HmClipping from '#base/app/components/hm/HmClipping.vue'

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

  // TODO: Cropperのchangeのテスト
  it(':Cropper change', () => {
    // NOTE: mountしてcomponentを展開すると、「Error: connect ECONNREFUSED」になる
    const _wrapper = shallowMount(HmClipping, {
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
    // ERROR: 発火はできるが、canvas.toDataURLが読めず、vi.importActualにてcanvas.toDataURLのみを偽装してもエラーとなったのでコメントアウトする
    // await wrapper.find('cropper-stub').trigger('change')
  })
})
