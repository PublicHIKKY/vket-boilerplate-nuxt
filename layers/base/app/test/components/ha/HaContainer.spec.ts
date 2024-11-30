import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import HaContainer from '#base/app/components/ha/HaContainer.vue'

test('slot', () => {
  const wrapper = mount(HaContainer, {
    slots: {
      default: '<div>slot content.</div>',
    },
  })
  expect(wrapper.text()).toContain('slot content.')
})
