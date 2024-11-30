import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import HaBaseButton from '#base/app/components/ha/base/HaBaseButton.vue'

test('ref component', () => {
  expect(HaBaseButton).toBeTruthy()
})

test('mount component', () => {
  const wrapper = mount(HaBaseButton, {
    props: {
      type: 'button',
    },
  })
  expect(wrapper.getCurrentComponent()).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()
})

describe('props', () => {
  describe(':disabled', () => {
    // disabledは論理属性なので存在しているかどうかを確認する
    test('default is false', () => {
      const wrapper = mount(HaBaseButton)
      expect(wrapper.get('button').attributes('disabled')).toBeUndefined()
    })
    test('is disabled', () => {
      const wrapper = mount(HaBaseButton, { props: { disabled: true } })
      expect(wrapper.get('button').attributes('disabled')).toBeDefined()
    })
  })
  describe(':type', () => {
    test('default is button', () => {
      const wrapper = mount(HaBaseButton)
      expect(wrapper.get('button').attributes('type')).toBe('button')
    })
    test('pass prop', () => {
      const wrapper = mount(HaBaseButton, { props: { type: 'submit' } })
      expect(wrapper.get('button').attributes('type')).toBe('submit')
    })
  })
})

describe('emits', () => {
  test('click emits clickEvent', async () => {
    const wrapper = mount(HaBaseButton)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted().click?.length).toBe(1)
  })
  test('click emits no event when disabled', async () => {
    const wrapper = mount(HaBaseButton, { props: { disabled: true } })
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted().click).toBeUndefined()
  })
})
