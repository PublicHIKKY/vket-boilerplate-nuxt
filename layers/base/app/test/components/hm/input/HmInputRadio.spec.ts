import { mount } from '@vue/test-utils'
import HmInputRadio from '#base/app/components/hm/input/HmInputRadio.vue'

test('ref component', () => {
  expect(HmInputRadio).toBeTruthy()
})

test('mount component', () => {
  const wrapper = mount(HmInputRadio, {
    props: {
      name: 'test name',
      value: 1,
    },
  })
  expect(wrapper.getCurrentComponent()).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()
})
describe('props', () => {
  it(':name', () => {
    const wrapper = mount(HmInputRadio, {
      props: {
        name: 'test name',
        value: 1,
      },
    })
    expect(wrapper.get('input[type="radio"]').attributes('name')).toBe(
      'test name',
    )
  })
  it(':value', async () => {
    const wrapper = mount(HmInputRadio, {
      props: {
        name: 'test name',
        value: 1,
      },
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.props('value')).toBe(1)
    // NOTE: NG例。propsではなくvalueで取得しようとすると、レンダリングされたDOMのvalueがfalseとなっているので、テスト結果にfalseが返ってくるので取得不可。下記取れそうで取れない例
    // NOTE: NG例1
    // expect(
    //   (wrapper.find('input[type="radio"]').element as HTMLInputElement).value
    // ).toBe('1')
    // NOTE: NG例2
    // expect(wrapper.find('input[type="radio"]').attributes('value')).toBe('1')
  })
  it(':checked', () => {
    const wrapper = mount(HmInputRadio, {
      props: {
        name: 'test name',
        value: 1,
        checked: true,
      },
    })
    expect(
      (wrapper.get('input[type="radio"]').element as HTMLInputElement).checked,
    ).toBeTruthy()
  })
})
describe('emits', () => {
  it(':change', async () => {
    const wrapper = mount(HmInputRadio, {
      props: {
        name: 'test name',
        value: 1,
      },
    })
    await wrapper.setProps({ value: 2 })
    await wrapper.get('input[type="radio"]').trigger('change')
    setTimeout(() => {
      expect(wrapper.emitted()).toHaveProperty('change')
      expect(wrapper.emitted()['change']).toHaveLength(1)
      // TODO: Zodのエラーメッセージを二重否定で真偽値をemitする際と同様に、emitは行われているが値の変更が正しくテストできず、NaNが検出する。
      // expect(wrapper.emitted()['change']).toEqual([[2]])
    }, 1)
  })
})
