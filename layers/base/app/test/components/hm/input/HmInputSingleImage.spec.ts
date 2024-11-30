import { mount } from '@vue/test-utils'
import HmInputSingleImage from '#base/app/components/hm/input/HmInputSingleImage.vue'
import { waitEffect } from '#base/app/utils/sleep'

beforeEach(() => {
  vi.mock('vue-i18n', () => ({
    useI18n: vi.fn(() => ({
      local: {
        value: 'ja',
      },
      locale: {
        value: 'ja',
      },
      t: (key: string, ..._args: unknown[]) => `dummy-${key}`,
    })),
  }))

  vi.mock('#base/app/utils/file-control', () => ({
    readFileAsBlob: () => 'dummy-blob',
  }))

  URL.createObjectURL = vi.fn(() => 'dummy-for-objectURL')
})

afterEach(() => {
  vi.restoreAllMocks()
})

test('ref component', () => {
  expect(HmInputSingleImage).toBeTruthy()
})

test('mount component', () => {
  const wrapper = mount(HmInputSingleImage, {
    props: {
      defaultImageUrl: null,
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
    })
    expect(wrapper.find('p[class="error-container"]').text()).toBe('test error')
  })

  test(':isRemovable', () => {
    const wrapper = mount(HmInputSingleImage, {
      props: {
        isRemovable: true,
        defaultImageUrl: 'foo.png',
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
    })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await (wrapper as any).vm.changeImage([
      new File([], 'foo.png'),
    ] as any as FileList) // eslint-disable-line @typescript-eslint/no-explicit-any
    await waitEffect()

    expect(wrapper.find('.ha-dialog').exists()).toBe(true)
  })
})
