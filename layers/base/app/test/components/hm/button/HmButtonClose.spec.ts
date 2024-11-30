import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import HmButtonClose from '#base/app/components/hm/button/HmButtonClose.vue'

test('ref component', () => {
  expect(HmButtonClose).toBeTruthy()
})

test('mount component', () => {
  const wrapper = mount(HmButtonClose)
  expect(wrapper.getCurrentComponent()).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()
})

describe('props', () => {
  describe(':width', () => {
    test('default is 20px', () => {
      const wrapper = mount(HmButtonClose)
      expect(wrapper.get('svg').attributes().style).toContain(`width: 20px`)
    })
    // 適当な値を渡して、その数値と同じwidthになっているかテストする
    test('pass prop', () => {
      const width = Math.floor(Math.random() * 101)
      const wrapper = mount(HmButtonClose, { props: { width: `${width}px` } })
      expect(wrapper.get('svg').attributes().style).toContain(
        `width: ${width}px`,
      )
    })
  })
  describe(':height', () => {
    test('default is 20px', () => {
      const wrapper = mount(HmButtonClose)
      expect(wrapper.get('svg').attributes().style).toContain(`height: 20px`)
    })
    test('pass prop', () => {
      const height = Math.floor(Math.random() * 101)
      const wrapper = mount(HmButtonClose, { props: { height: `${height}px` } })
      expect(wrapper.get('svg').attributes().style).toContain(
        `height: ${height}px`,
      )
    })
  })
})

describe('emits', () => {
  test('click emits clickEvent', async () => {
    const wrapper = mount(HmButtonClose)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted().click?.length).toBe(1)
  })
})
