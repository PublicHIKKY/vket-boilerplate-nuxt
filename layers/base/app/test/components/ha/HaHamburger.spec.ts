import { mount } from '@vue/test-utils'
import HaHamburger from '#base/app/components/ha/HaHamburger.vue'

test('ref component', () => {
  expect(HaHamburger).toBeTruthy()
})

test('mount component', () => {
  const wrapper = mount(HaHamburger, {
    props: {
      isOpen: false,
    },
  })
  expect(wrapper.getCurrentComponent()).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()
})

describe('props', () => {
  it(':isOpen:true', () => {
    const wrapper = mount(HaHamburger, {
      props: {
        isOpen: true,
      },
    })
    expect(wrapper.attributes('class')).toBe('ha-humberger-button -open')
  })
  it(':isOpen:false', () => {
    const wrapper = mount(HaHamburger, {
      props: {
        isOpen: false,
      },
    })
    expect(wrapper.attributes('class')).toBe('ha-humberger-button')
  })
})

describe('emit', () => {
  it(':update:modelValue', async () => {
    const wrapper = mount(HaHamburger, {
      props: {
        isOpen: false,
      },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
    expect(wrapper.emitted()['click']).toHaveLength(1)
    // NOTE: voidなので[[]]
    expect(wrapper.emitted()['click']).toEqual([[]])
  })
})
