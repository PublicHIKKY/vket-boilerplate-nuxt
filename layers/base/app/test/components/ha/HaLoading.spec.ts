import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import HaLoading from '#base/app/components/ha/HaLoading.vue'

test('ref component', () => {
  expect(HaLoading).toBeTruthy()
})

test('mount component', () => {
  const wrapper = mount(HaLoading)
  expect(wrapper.getCurrentComponent()).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()
})

describe(':manual', () => {
  it('no :manual make no component on mount', () => {
    const wrapper = mount(HaLoading)
    expect(wrapper.isVisible()).toBeFalsy()
  })
  it(':manual="true" make spinner', () => {
    const wrapper = mount(HaLoading, {
      props: {
        manual: true,
      },
    })
    expect(wrapper.isVisible()).toBeTruthy()
    expect(wrapper.find('.spinner').exists()).toBeTruthy()
  })
})

describe(':cover', () => {
  it(':cover make <div class="cover">', () => {
    const wrapper = mount(HaLoading, {
      props: {
        manual: true,
        cover: true,
      },
    })
    expect(wrapper.find('.cover').exists()).toBeTruthy()
  })
})
