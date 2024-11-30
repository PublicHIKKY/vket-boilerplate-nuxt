import { mount } from '@vue/test-utils'
import HmNoteList from '#base/app/components/hm/HmNoteList.vue'

test('ref component', () => {
  expect(HmNoteList).toBeTruthy()
})

test('mount component', () => {
  const wrapper = mount(HmNoteList, {
    props: {
      list: [],
    },
  })
  expect(wrapper.getCurrentComponent()).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()
})

describe('props', () => {
  test(':list', () => {
    const wrapper = mount(HmNoteList, {
      props: {
        list: ['list1', 'list2'],
      },
    })
    expect(wrapper.findAll('.item')[0]?.text()).toBe('list1')
    expect(wrapper.findAll('.item')[1]?.text()).toBe('list2')
  })
})
