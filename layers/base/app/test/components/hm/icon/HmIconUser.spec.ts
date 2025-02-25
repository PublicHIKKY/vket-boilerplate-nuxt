import { mount } from '@vue/test-utils'
import HmIconUser from '#base/app/components/hm/icon/HmIconUser.vue'

/**
 * @see vitest.config.mtsのalias
 */
const defaultNoImage = '/images/no-image.png'

test('ref component', () => {
  expect(HmIconUser).toBeTruthy()
})

test('mount component', () => {
  const wrapper = mount(HmIconUser, {
    props: {
      src: '/image.png',
    },
  })
  expect(wrapper.getCurrentComponent()).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()
})

// propsのsrcが指定されている場合、その値が設定される
describe('props', () => {
  it(':src', () => {
    const wrapper = mount(HmIconUser, {
      props: {
        src: '/image.png',
      },
    })
    expect(wrapper.get('img').attributes('src')).toBe('/image.png')
  })
})

// propsのsrcが空文字の場合、no image画像が設定される
describe('if src empty, set no image', () => {
  it(':src', () => {
    const wrapper = mount(HmIconUser, {
      props: {
        src: '',
      },
    })
    expect(wrapper.get('img').attributes('src')).toBe(defaultNoImage)
  })
})

// propsのsrcに指定した画像でエラーが発生した場合、placeholder画像が設定される
describe('if src error, set placeholder image', () => {
  it(':src error', async () => {
    const wrapper = mount(HmIconUser, {
      props: {
        src: '/foo-not-found.jpg',
      },
    })
    await wrapper.get('img').trigger('error')
    expect(wrapper.get('img').attributes('src')).toBe(
      'https://via.placeholder.com/150',
    )
  })
})
