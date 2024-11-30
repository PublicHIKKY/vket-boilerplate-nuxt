import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import HaSkewBackground from '#base/app/components/ha/HaSkewBackground.vue'

describe('HaSkewBackground', () => {
  test('ref component', () => {
    expect(HaSkewBackground).toBeTruthy()
  })

  test('mount component', () => {
    const wrapper = mount(HaSkewBackground, {
      props: {
        deg: 30,
        axis: 'x',
      },
    })

    expect(wrapper.getCurrentComponent()).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('slot', () => {
    const wrapper = mount(HaSkewBackground, {
      props: {
        deg: 30,
        axis: 'x',
      },
      slots: {
        default: 'Slot Content',
      },
    })

    expect(wrapper.text()).toContain('Slot Content')
  })

  describe('props', () => {
    test('renders props', () => {
      const wrapper = mount(HaSkewBackground, {
        props: {
          deg: 30,
          axis: 'x',
        },
      })

      expect(wrapper.exists()).toBe(true)
    })

    test('renders content with correct skew when axis is x', () => {
      const deg = 30
      const wrapper = mount(HaSkewBackground, {
        props: {
          deg,
          axis: 'x',
        },
      })

      expect(wrapper.find('.content').attributes('style')).toContain(
        `transform: skewX(${deg * -1}deg)`,
      )
    })

    test('renders content with correct skew when axis is y', () => {
      const deg = 45
      const wrapper = mount(HaSkewBackground, {
        props: {
          deg,
          axis: 'y',
        },
      })

      expect(wrapper.find('.content').attributes('style')).toContain(
        `transform: skewY(${deg * -1}deg)`,
      )
    })

    test('renders content with correct skew when axis is z', () => {
      const deg = 45
      const wrapper = mount(HaSkewBackground, {
        props: {
          deg,
          axis: 'z',
        },
      })

      expect(wrapper.find('.content').attributes('style')).toContain(
        `transform: skewZ(${deg * -1}deg)`,
      )
    })
  })
})
