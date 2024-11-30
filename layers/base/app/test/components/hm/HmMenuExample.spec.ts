import { mount } from '@vue/test-utils'
import HmMenuExample from '#base/app/components/hm/HmMenuExample.vue'

test('ref component', () => {
  expect(HmMenuExample).toBeTruthy()
})

test('mount component', () => {
  const wrapper = mount(HmMenuExample)
  expect(wrapper.getCurrentComponent()).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()
})

describe('rendering test', () => {
  it(':menu', () => {
    const wrapper = mount(HmMenuExample)
    expect(wrapper.find('div[class="menu-container"]').exists()).toBe(true)
  })
  it(':button (open close button)', () => {
    const wrapper = mount(HmMenuExample)
    expect(wrapper.find('button[class="button"]').exists()).toBe(true)
    expect(wrapper.find('button[class="button"]').text()).toBe('Menu')
  })
  it(':menu-items', async () => {
    const wrapper = mount(HmMenuExample)

    // NOTE: クリックするとmenu-listが開かれ出現すること
    await wrapper.get('button[class="button"]').trigger('click')
    expect(wrapper.find('div[class="menu-items"]').exists()).toBe(true)

    // NOTE: 開いたあとにクリックするとmenu-listが閉じて消えること
    await wrapper.get('button[class="button"]').trigger('click')
    expect(wrapper.find('div[class="menu-items"]').exists()).toBe(false)
  })
  it(':item', async () => {
    const wrapper = mount(HmMenuExample)

    // NOTE: クリックするとmenu-listが開かれ出現すること
    await wrapper.get('button[class="button"]').trigger('click')
    expect(wrapper.find('span[class="span item"]').exists()).toBe(true)

    expect(wrapper.find('span[class="span item"]:nth-child(1)').text()).toBe(
      'Hello',
    )
    // NOTE: 上記は下記でもいい（at(n)）
    expect(wrapper.findAll('span[class="span item"]').at(0)?.text()).toBe(
      'Hello',
    )
    // NOTE: 上記は下記でもいい2（配列のn番目インデックス）
    expect(wrapper.findAll('span[class="span item"]')[0]?.text()).toBe('Hello')
    expect(wrapper.find('span[class="span item"]:nth-child(2)').text()).toBe(
      'Howdy!',
    )

    expect(wrapper.find('span[class="span item"]:nth-child(3)').text()).toBe(
      'Yo!',
    )
    expect(
      wrapper.find('span[class="item -disable"]:nth-child(4)').text(),
    ).toBe(':D')

    // NOTE: 開いたあとに子要素をクリックするとmenu-listが閉じて子要素も消えること
    await wrapper.get('button[class="button"]').trigger('click')
    expect(wrapper.find('div[class="menu-items"]').exists()).toBe(false)
    expect(wrapper.find('span[class="span item"]').exists()).toBe(false)
  })
})
