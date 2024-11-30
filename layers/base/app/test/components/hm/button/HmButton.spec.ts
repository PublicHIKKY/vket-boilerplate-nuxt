import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import HmButton from '#base/app/components/hm/button/HmButton.vue'

test('ref component', () => {
  expect(HmButton).toBeTruthy()
})

test('mount component', () => {
  const wrapper = mount(HmButton)
  expect(wrapper.getCurrentComponent()).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()
})

describe('props', () => {
  describe(':disabled', () => {
    test('default is false', () => {
      const wrapper = mount(HmButton)
      expect(wrapper.get('button').attributes('disabled')).toBeUndefined()
    })
    test('is disabled', () => {
      const wrapper = mount(HmButton, { props: { disabled: true } })
      expect(wrapper.get('button').attributes('disabled')).toBeDefined()
    })
  })
  describe(':type', () => {
    test('default is button', () => {
      const wrapper = mount(HmButton)
      expect(wrapper.get('button').attributes('type')).toBe('button')
    })
    test('pass prop', () => {
      const wrapper = mount(HmButton, { props: { type: 'submit' } })
      expect(wrapper.get('button').attributes('type')).toBe('submit')
    })
  })
  describe(':outline', () => {
    test('default is disabled', () => {
      const wrapper = mount(HmButton)
      expect(wrapper.get('button').attributes('class')).toBe(
        'ha-base-button hm-button -primary -md',
      )
    })
    test('is enabled', () => {
      const wrapper = mount(HmButton, { props: { outline: true } })
      expect(wrapper.get('button').attributes('class')).toBe(
        'ha-base-button hm-button -primary -md -outline',
      )
    })
  })
  describe(':size', () => {
    test('default is md', () => {
      const wrapper = mount(HmButton)
      expect(wrapper.get('button').attributes('class')).toBe(
        'ha-base-button hm-button -primary -md',
      )
    })
    test('pass prop', () => {
      const wrapper = mount(HmButton, { props: { size: 'sm' } })
      expect(wrapper.get('button').attributes('class')).toBe(
        'ha-base-button hm-button -primary -sm',
      )
    })
  })
  describe(':color', () => {
    test('default is primary', () => {
      const wrapper = mount(HmButton)
      expect(wrapper.get('button').attributes('class')).toBe(
        'ha-base-button hm-button -primary -md',
      )
    })
    test('pass prop', () => {
      const wrapper = mount(HmButton, { props: { color: 'secondary' } })
      expect(wrapper.get('button').attributes('class')).toBe(
        'ha-base-button hm-button -secondary -md',
      )
    })
  })
})

describe('emits', () => {
  test('click emits clickEvent', async () => {
    const wrapper = mount(HmButton)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted().click?.length).toBe(1)
  })
  test('click emits no event when disabled', async () => {
    const wrapper = mount(HmButton, { props: { disabled: true } })
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted().click).toBeUndefined()
  })
})
