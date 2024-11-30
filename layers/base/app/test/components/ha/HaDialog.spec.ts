import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import HaDialog from '#base/app/components/ha/HaDialog.vue'

test('ref component', () => {
  expect(HaDialog).toBeTruthy()
})

test('mount component', () => {
  const wrapper = mount(HaDialog, {})
  expect(wrapper.getCurrentComponent()).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()
})

test('slot', () => {
  const wrapper = mount(HaDialog, {
    slots: {
      default: '<div>slot content.</div>',
    },
  })
  expect(wrapper.text()).toContain('slot content.')
})

describe('event', () => {
  it('click backdrop emits close-dialog event', async () => {
    const wrapper = mount(HaDialog)
    await wrapper.get('.ha-dialog').trigger('click')
    expect(wrapper.emitted('close')).toBeTruthy()
  })
})
