import { mount } from '@vue/test-utils'
import HmInputRadioChangeable from '#base/app/components/hm/input/HmInputRadioChangeable.vue'

test('ref component', () => {
  expect(HmInputRadioChangeable).toBeTruthy()
})

test('mount component', () => {
  const wrapper = mount(HmInputRadioChangeable, {
    props: {
      name: 'testName',
      options: [
        {
          label: 'testLabel',
          value: 'testValue',
        },
      ],
    },
  })
  expect(wrapper.getCurrentComponent()).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()
})

describe('props', () => {
  it(':name, :value', () => {
    const wrapper = mount(HmInputRadioChangeable, {
      props: {
        name: 'testName',
        options: [
          {
            label: 'testLabel',
            value: 'testValue',
          },
        ],
      },
    })
    expect(wrapper.find('input[type="radio"]').attributes('name')).toBe(
      'testName',
    )
    expect(wrapper.find('label.label').attributes('for')).toBe(
      'testValue',
    )
    expect(wrapper.find('label.label').text()).toBe('testLabel')
  })

  it(':checked', () => {
    const wrapper = mount(HmInputRadioChangeable, {
      props: {
        name: 'testName',
        options: [
          {
            label: 'testLabel',
            value: 'testValue',
            checked: true,
          },
        ],
      },
    })
    expect(
      (wrapper.find('input[type="radio"]').element as HTMLInputElement).checked,
    ).toBeTruthy()
  })

  it(':disabled', () => {
    const wrapper = mount(HmInputRadioChangeable, {
      props: {
        name: 'testName',
        options: [
          {
            label: 'testLabel',
            value: 'testValue',
            checked: true,
            disabled: true,
          },
        ],
      },
    })
    expect(
      (wrapper.find('input[type="radio"]').element as HTMLInputElement).disabled,
    ).toBeTruthy()
  })
})

describe('emits', () => {
  it(':change', async () => {
    const wrapper = mount(HmInputRadioChangeable, {
      props: {
        name: 'testName',
        options: [
          {
            label: 'testLabel',
            value: 'testValue',
            checked: true,
          },
        ],
      },
    })
    await wrapper.find('input[type="radio"]').trigger('change')
    setTimeout(() => {
      expect(wrapper.emitted()).toHaveProperty('change')
      expect(wrapper.emitted()['change']).toHaveLength(1)
      expect(wrapper.emitted()['change']).toEqual([['testValue']])
    }, 1)
  })
})

// NOTE: 「props.optionsを監視し、親コンポーネントでの変更をラジオボタンに反映する」というコンポーネント内のwatchの動作をテスト
describe('DOM check', () => {
  it(':Change radio button based on parent props', async () => {
    const wrapper = mount(HmInputRadioChangeable, {
      props: {
        name: 'testName',
        options: [
          {
            label: 'testLabel1',
            value: 'testValue1',
            checked: true,
          },
          {
            label: 'testLabel2',
            value: 'testValue2',
            checked: false,
          },
          {
            label: 'testLabel3',
            value: 'testValue3',
            checked: false,
          },
        ],
      },
    })
    expect(
      (wrapper.find('input[id="testValue1"]').element as HTMLInputElement)
        .checked,
    ).toBeTruthy()
    expect(
      (wrapper.find('input[id="testValue2"]').element as HTMLInputElement)
        .checked,
    ).toBeFalsy()
    expect(
      (wrapper.find('input[id="testValue3"]').element as HTMLInputElement)
        .checked,
    ).toBeFalsy()
    // NOTE: props,optionsを変えてcheckedを再確認
    await wrapper.setProps({
      options: [
        {
          label: 'testLabel1',
          value: 'testValue1',
          checked: false,
        },
        {
          label: 'testLabel2',
          value: 'testValue2',
          checked: true,
        },
        {
          label: 'testLabel3',
          value: 'testValue3',
          checked: false,
        },
      ],
    })
    expect(
      (wrapper.find('input[id="testValue1"]').element as HTMLInputElement)
        .checked,
    ).toBeFalsy()
    expect(
      (wrapper.find('input[id="testValue2"]').element as HTMLInputElement)
        .checked,
    ).toBeTruthy()
    expect(
      (wrapper.find('input[id="testValue3"]').element as HTMLInputElement)
        .checked,
    ).toBeFalsy()
  })
})
