import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import HaTag from '#base/app/components/ha/HaTag.vue'

describe('HaTag', () => {
  test('ref component', () => {
    expect(HaTag).toBeTruthy()
  })

  test('mount component', () => {
    const wrapper = mount(HaTag)
    expect(wrapper.getCurrentComponent()).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('slot', () => {
    const wrapper = mount(HaTag, {
      slots: {
        default: 'Slot Content',
      },
    })

    expect(wrapper.text()).toContain('Slot Content')
  })

  describe('props', () => {
    test('renders props', () => {
      const wrapper = mount(HaTag, {
        props: {
          disabled: false,
          category: 'primary',
          clickable: true,
        },
      })

      expect(wrapper.exists()).toBe(true)
    })

    test('renders with the "-tagType" when category prop is tagType', () => {
      const tagType = 'outline'

      const wrapper = mount(HaTag, {
        props: {
          category: tagType,
        },
      })

      expect(wrapper.classes()).toContain(`-${tagType}`)
    })

    test('renders with the "-disabled" when disabled prop is true', () => {
      const wrapper = mount(HaTag, {
        props: {
          disabled: true,
        },
      })

      expect(wrapper.classes()).toContain('-disabled')
    })

    test('does not render with the "-disabled" when disabled prop is false', () => {
      const wrapper = mount(HaTag, {
        props: {
          disabled: false,
        },
      })

      expect(wrapper.classes()).not.toContain('-disabled')
    })

    test('renders with the "-clickable" when clickable prop is true', () => {
      const wrapper = mount(HaTag, {
        props: {
          clickable: true,
        },
      })

      expect(wrapper.classes()).toContain('-clickable')
    })

    test('does not render with the "-clickable" when clickable prop is false', () => {
      const wrapper = mount(HaTag, {
        props: {
          clickable: false,
        },
      })

      expect(wrapper.classes()).not.toContain('-clickable')
    })
  })

  describe('emit', () => {
    test('handles click event when clickable and not disabled', async () => {
      const wrapper = mount(HaTag, {
        props: {
          disabled: false,
          clickable: true,
        },
      })

      await wrapper.trigger('click')
      expect(wrapper.emitted('click')).toHaveLength(1)
      expect(wrapper.emitted('click')).toBeTruthy()
    })

    test('does not handle click event when disabled', async () => {
      const wrapper = mount(HaTag, {
        props: {
          disabled: true,
          clickable: true,
        },
      })

      await wrapper.trigger('click')
      expect(wrapper.emitted('click')).toBeFalsy()
    })
  })
})
