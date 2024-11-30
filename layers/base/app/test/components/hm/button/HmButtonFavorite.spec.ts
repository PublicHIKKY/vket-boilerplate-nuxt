import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import HmButtonFavorite from '#base/app/components/hm/button/HmButtonFavorite.vue'

test('ref component', () => {
  expect(HmButtonFavorite).toBeTruthy()
})

test('mount component', () => {
  const wrapper = mount(HmButtonFavorite, { props: { value: true } })
  expect(wrapper.getCurrentComponent()).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()
})

describe('props', () => {
  describe(':value', () => {
    test('is active', () => {
      const wrapper = mount(HmButtonFavorite, { props: { value: true } })
      expect(wrapper.get('.favorite-icon').attributes('class')).toBe(
        'favorite-icon -active',
      )
    })

    test('is not active', () => {
      const wrapper = mount(HmButtonFavorite, { props: { value: false } })
      expect(wrapper.get('.favorite-icon').attributes('class')).toBe(
        'favorite-icon',
      )
    })
  })

  describe(':disabled', () => {
    test('default is false', () => {
      const wrapper = mount(HmButtonFavorite, { props: { value: true } })
      expect(wrapper.get('.hm-button-favorite').attributes('class')).toBe(
        'hm-button-favorite',
      )
      expect(wrapper.get('.favorite-icon').attributes('class')).toBe(
        'favorite-icon -active',
      )
    })

    test('is disabled', () => {
      const wrapper = mount(HmButtonFavorite, {
        props: { value: true, disabled: true },
      })
      expect(wrapper.get('.hm-button-favorite').attributes('class')).toBe(
        'hm-button-favorite -disabled',
      )
      expect(wrapper.get('.favorite-icon').attributes('class')).toBe(
        'favorite-icon -active -disabled',
      )
    })
  })
})

describe('emits', () => {
  test('click emits return false when value is true', async () => {
    const wrapper = mount(HmButtonFavorite, { props: { value: true } })
    await wrapper.get('.button').trigger('click')
    expect(wrapper.emitted('input')?.[0]).toEqual([false])
  })

  test('click emits return true when value is false', async () => {
    const wrapper = mount(HmButtonFavorite, { props: { value: false } })
    await wrapper.get('.button').trigger('click')
    expect(wrapper.emitted('input')?.[0]).toEqual([true])
  })

  test('click emits no event when disabled', async () => {
    const wrapper = mount(HmButtonFavorite, {
      props: { value: true, disabled: true },
    })
    await wrapper.get('.button').trigger('click')
    expect(wrapper.emitted('input')).toBeFalsy()
  })
})
