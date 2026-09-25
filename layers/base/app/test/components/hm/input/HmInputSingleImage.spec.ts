import { mount } from '@vue/test-utils'
import { beforeEach, afterEach, describe, test, expect, vi } from 'vitest'
import { createI18n } from 'vue-i18n'
import { z } from 'zod/v3'
import HmInputSingleImage, { type Props } from '#base/app/components/hm/input/HmInputSingleImage.vue'
import { waitEffect } from '#base/app/utils/sleep'

// i18nのモックインスタンス
const i18n = createI18n({
  legacy: false,
  locale: 'ja',
  messages: {
    ja: {},
    en: {},
  },
})

vi.mock('#base/app/utils/file-control', () => ({
  readFileAsBlob: () => 'dummy-blob',
}))

beforeEach(() => {
  URL.createObjectURL = vi.fn(() => 'dummy-for-objectURL')
  class MockDataTransfer {
    private values: File[] = []
    items = {
      add: (file: File) => this.values.push(file),
    }

    get files(): FileList {
      return this.values as unknown as FileList
    }
  }
  vi.stubGlobal('DataTransfer', MockDataTransfer)
})

afterEach(() => {
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
})

type ImageVm = {
  changeImage: (images: FileList | null) => Promise<void>
  cancel: () => void
  cancelCropper: () => void
  closeCropper: () => void
  onClipped: (images: File[]) => Promise<void>
  removeImage: () => Promise<void>
  emitImage: (image?: File) => Promise<void>
}

const asFileList = (files: File[]): FileList => files as unknown as FileList

const mountImage = (props: Partial<Props> = {}) =>
  mount(HmInputSingleImage, {
    props: { defaultImageUrl: null, ...props },
    global: { plugins: [i18n] },
  })

test('ref component', () => {
  expect(HmInputSingleImage).toBeTruthy()
})

test('mount component', () => {
  const wrapper = mount(HmInputSingleImage, {
    props: {
      defaultImageUrl: null,
    },
    global: {
      plugins: [i18n],
    },
  })
  expect(wrapper.getCurrentComponent()).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()
})

describe('props', () => {
  test(':optionalAccept', () => {
    const wrapper = mount(HmInputSingleImage, {
      props: {
        optionalAccept: 'image/gif',
        defaultImageUrl: null,
      },
      global: {
        plugins: [i18n],
      },
    })
    expect(
      wrapper.find('.hm-single-image-uploader > .input').attributes('accept'),
    ).toMatch('image/gif')
  })

  test(':error', () => {
    const wrapper = mount(HmInputSingleImage, {
      props: {
        error: 'test error',
        defaultImageUrl: null,
      },
      global: {
        plugins: [i18n],
      },
    })
    expect(wrapper.find('p[class="error-container"]').text()).toBe('test error')
  })

  test(':isRemovable', () => {
    const wrapper = mount(HmInputSingleImage, {
      props: {
        isRemovable: true,
        defaultImageUrl: 'foo.png',
      },
      global: {
        plugins: [i18n],
      },
    })
    expect(wrapper.find('.remove').exists()).toBe(true)
  })

  test(':isRequired', () => {
    const wrapper = mount(HmInputSingleImage, {
      props: {
        isRequired: true,
        defaultImageUrl: null,
      },
      global: {
        plugins: [i18n],
      },
    })
    expect(
      wrapper.find('.hm-single-image-uploader > .input').attributes('required'),
    ).toBeDefined()
  })

  test(':needCropper, :cropWidth, and :cropHeight', async () => {
    const wrapper = mount(HmInputSingleImage, {
      props: {
        needCropper: true,
        cropWidth: undefined,
        cropHeight: undefined,
        defaultImageUrl: null,
      },
      global: {
        plugins: [i18n],
      },
    })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await (wrapper as any).vm.changeImage([
      new File([], 'foo.png'),
    ] as any as FileList) // eslint-disable-line @typescript-eslint/no-explicit-any
    await waitEffect()

    expect(wrapper.find('.ha-dialog').exists()).toBe(true)
  })
})

describe('image workflow', () => {
  const image = new File(['image'], 'image.png', { type: 'image/png' })

  test('ignores null and empty selections', async () => {
    const wrapper = mountImage()
    const vm = wrapper.vm as unknown as ImageVm
    await vm.changeImage(null)
    await vm.changeImage(asFileList([]))
    expect(wrapper.emitted('update:model-value')).toBeUndefined()
  })

  test('returns an image directly when cropping is disabled', async () => {
    const wrapper = mountImage({ needCropper: false })
    await (wrapper.vm as unknown as ImageVm).changeImage(asFileList([image]))
    expect(wrapper.emitted('update:model-value')).toEqual([[image]])
    expect(wrapper.find('.preview').exists()).toBe(true)
  })

  test('applies rounded classes to the container and preview', () => {
    const wrapper = mountImage({ defaultImageUrl: 'default.png', previewRounded: true })
    expect(wrapper.classes()).toContain('-rounded')
    expect(wrapper.get('.preview').classes()).toContain('-rounded')
  })

  test('does not emit an image that fails validation', async () => {
    const wrapper = mountImage({
      validatorRules: z.instanceof(File).refine(() => false, 'invalid image'),
    })
    await (wrapper.vm as unknown as ImageVm).emitImage(image)
    expect(wrapper.emitted('update:model-value')).toBeUndefined()
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toContain('invalid image')
  })

  test('cancel, remove, and clipped workflows emit and close the cropper', async () => {
    const wrapper = mountImage({ defaultImageUrl: 'default.png', isRemovable: true })
    const vm = wrapper.vm as unknown as ImageVm
    vm.cancel()
    expect(wrapper.emitted('update:model-value')).toEqual([[undefined]])
    await vm.removeImage()
    expect(wrapper.emitted('remove')).toHaveLength(1)
    expect(wrapper.emitted('update:model-value')).toHaveLength(2)
    await vm.onClipped([])
    await vm.onClipped([image])
    expect(wrapper.emitted('update:model-value')).toContainEqual([image])
    vm.cancelCropper()
    vm.closeCropper()
  })

  test('opens and cancels the cropper when no dimensions are constrained', async () => {
    const wrapper = mountImage({ needCropper: true, cropWidth: 0, cropHeight: 0 })
    await (wrapper.vm as unknown as ImageVm).changeImage(asFileList([image]))
    await waitEffect()
    expect(wrapper.find('.ha-dialog').exists()).toBe(true)
    await wrapper.findComponent({ name: 'HaDialog' }).vm.$emit('close')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.ha-dialog').exists()).toBe(false)
  })

  test('handles FileReader results that are not strings', async () => {
    class MockFileReader {
      result: ArrayBuffer | null = new ArrayBuffer(0)
      onload: (() => void) | null = null
      readAsDataURL() {
        queueMicrotask(() => this.onload?.())
      }
    }
    vi.stubGlobal('FileReader', MockFileReader)
    const wrapper = mountImage({ needCropper: true })
    await (wrapper.vm as unknown as ImageVm).changeImage(asFileList([image]))
    expect(wrapper.find('.ha-dialog').exists()).toBe(true)
  })
})

describe('crop dimension decisions', () => {
  const image = new File(['image'], 'image.png', { type: 'image/png' })

  class MockImage {
    static latest: MockImage | undefined
    src = ''
    width = 0
    height = 0
    onload: (() => Promise<void>) | null = null
    onerror: (() => void) | null = null
    constructor() {
      MockImage.latest = this
    }
  }

  const run = async (props: Partial<Props>, width: number, height: number) => {
    vi.stubGlobal('Image', MockImage)
    const wrapper = mountImage({ needCropper: true, ...props })
    const pending = (wrapper.vm as unknown as ImageVm).changeImage(asFileList([image]))
    const img = MockImage.latest!
    img.width = width
    img.height = height
    await img.onload?.()
    await pending
    await wrapper.vm.$nextTick()
    return wrapper
  }

  test('accepts exact dimensions, rejects smaller dimensions, and crops larger images', async () => {
    expect((await run({ cropWidth: 100, cropHeight: 80 }, 100, 80)).emitted('update:model-value')).toEqual([[image]])
    const alert = vi.fn()
    vi.stubGlobal('alert', alert)
    await run({ cropWidth: 100, cropHeight: 80 }, 99, 90)
    await run({ cropWidth: 100, cropHeight: 80 }, 110, 79)
    expect(alert).toHaveBeenCalledTimes(2)
    expect((await run({ cropWidth: 100, cropHeight: 80 }, 120, 100)).find('.ha-dialog').exists()).toBe(true)
  })

  test('handles width-only constraints', async () => {
    expect((await run({ cropWidth: 100 }, 100, 20)).emitted('update:model-value')).toEqual([[image]])
    const alert = vi.fn()
    vi.stubGlobal('alert', alert)
    await run({ cropWidth: 100 }, 99, 20)
    expect(alert).toHaveBeenCalledWith('幅100px以上の画像を指定してください')
    expect((await run({ cropWidth: 100 }, 101, 20)).find('.ha-dialog').exists()).toBe(true)
  })

  test('handles height-only constraints', async () => {
    expect((await run({ cropHeight: 80 }, 20, 80)).emitted('update:model-value')).toEqual([[image]])
    const alert = vi.fn()
    vi.stubGlobal('alert', alert)
    await run({ cropHeight: 80 }, 20, 79)
    expect(alert).toHaveBeenCalledWith('高さ80px以上の画像を指定してください')
    expect((await run({ cropHeight: 80 }, 20, 81)).find('.ha-dialog').exists()).toBe(true)
  })

  test('handles dimensions being cleared while an image is loading', async () => {
    vi.stubGlobal('Image', MockImage)
    const wrapper = mountImage({ needCropper: true, cropHeight: 80 })
    const pending = (wrapper.vm as unknown as ImageVm).changeImage(asFileList([image]))
    await wrapper.setProps({ cropHeight: 0 })
    await MockImage.latest?.onload?.()
    await pending
    expect(wrapper.emitted('update:model-value')).toBeUndefined()
  })

  test('alerts when browser image loading fails', async () => {
    vi.stubGlobal('Image', MockImage)
    const alert = vi.fn()
    vi.stubGlobal('alert', alert)
    const wrapper = mountImage({ needCropper: true, cropWidth: 100 })
    await (wrapper.vm as unknown as ImageVm).changeImage(asFileList([image]))
    MockImage.latest?.onerror?.()
    expect(alert).toHaveBeenCalledWith('image loading failed / 画像の読み込みに失敗しました')
  })
})
