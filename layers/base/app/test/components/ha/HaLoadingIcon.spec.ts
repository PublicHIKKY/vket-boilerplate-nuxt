import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import HaLoadingIcon from '#base/app/components/ha/HaLoadingIcon.vue'

test('ref component', () => {
  expect(HaLoadingIcon).toBeTruthy()
})

test('mount component', () => {
  const wrapper = mount(HaLoadingIcon)
  expect(wrapper.getCurrentComponent()).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()
})
