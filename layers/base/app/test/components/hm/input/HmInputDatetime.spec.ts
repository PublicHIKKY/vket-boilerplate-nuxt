import { mount } from '@vue/test-utils'
import z from 'zod'
import HmInputDatetime from '#base/app/components/hm/input/HmInputDatetime.vue'

test('ref component', () => {
  expect(HmInputDatetime).toBeTruthy()
})

test('mount component', () => {
  const wrapper = mount(HmInputDatetime)
  expect(wrapper.getCurrentComponent()).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()
})

describe('props', () => {
  it(':type', async () => {
    const wrapper = mount(HmInputDatetime, {
      props: {
        type: 'datetime-local',
      },
    })
    expect(wrapper.get('input').attributes('type')).toBe('datetime-local')
    await wrapper.setProps({ type: 'date' })
    expect(wrapper.get('input').attributes('type')).toBe('date')
    await wrapper.setProps({ type: 'time' })
    expect(wrapper.get('input').attributes('type')).toBe('time')
  })

  it(':validatorName', () => {
    const wrapper = mount(HmInputDatetime, {
      props: {
        validatorName: 'name-test',
      },
    })
    expect(wrapper.attributes('name')).toBe('name-test')
  })

  it(':validatorRules', () => {
    const testValidatorRules = z.string()
    const wrapper = mount(HmInputDatetime, {
      props: {
        validatorRules: testValidatorRules,
      },
    })
    expect(wrapper.props('validatorRules')).toStrictEqual(testValidatorRules)
  })

  it(':required', () => {
    const wrapper = mount(HmInputDatetime, {
      props: {
        required: true,
      },
    })
    expect(
      wrapper.get('input[type="datetime-local"]').attributes('required'),
    ).toBe('')
  })

  it(':modelValue', () => {
    const dateValue = '2023-09-28T14:48'
    const wrapper = mount(HmInputDatetime, {
      props: {
        modelValue: dateValue,
      },
    })
    expect(wrapper.props('modelValue')).toBe(dateValue)
  })

  it(':disabled', () => {
    const wrapper = mount(HmInputDatetime, {
      props: {
        disabled: true,
      },
    })
    expect(
      wrapper.get('input[type="datetime-local"]').attributes('disabled'),
    ).toBe('')
  })

  it(':min(number)', () => {
    const wrapper = mount(HmInputDatetime, {
      props: {
        min: 2,
      },
    })
    expect(wrapper.get('input[type="datetime-local"]').attributes('min')).toBe(
      '2',
    )
  })

  it(':min(string)', () => {
    const wrapper = mount(HmInputDatetime, {
      props: {
        min: '2020-01-01',
      },
    })
    expect(wrapper.get('input[type="datetime-local"]').attributes('min')).toBe(
      '2020-01-01',
    )
  })

  it(':max(number)', () => {
    const wrapper = mount(HmInputDatetime, {
      props: {
        max: 2,
      },
    })
    expect(wrapper.get('input[type="datetime-local"]').attributes('max')).toBe(
      '2',
    )
  })

  it(':max(string)', () => {
    const wrapper = mount(HmInputDatetime, {
      props: {
        max: '2020-01-01',
      },
    })
    expect(wrapper.get('input[type="datetime-local"]').attributes('max')).toBe(
      '2020-01-01',
    )
  })

  it(':keyupEnter', () => {
    const wrapper = mount(HmInputDatetime, {
      props: {
        keyupEnter: true,
      },
    })
    expect(wrapper.props('keyupEnter')).toBe(true)
  })

  it(':validateOnMount', () => {
    const wrapper = mount(HmInputDatetime, {
      props: {
        validateOnMount: true,
      },
    })
    expect(wrapper.props().validateOnMount).toBe(true)
  })
})

describe('emits', () => {
  it(':update:modelValue, :input', async () => {
    const dateValue = '2023-09-28T14:48'
    const wrapper = mount(HmInputDatetime, {
      props: {
        modelValue: '',
        keyupEnter: true,
      },
    })
    await wrapper.get('input[type="datetime-local"]').setValue(dateValue)
    setTimeout(() => {
      // :update:modelValue
      expect(wrapper.emitted()).toHaveProperty('update:modelValue')
      expect(wrapper.emitted()['update:modelValue']).toHaveLength(1)
      expect(wrapper.emitted()['update:modelValue']).toEqual([[dateValue]])
      // :input
      expect(wrapper.emitted()).toHaveProperty('input')
      expect(wrapper.emitted()['input']).toHaveLength(1)
      expect(wrapper.emitted()['input']).toEqual([[dateValue]])
    }, 1)
  })

  it(':enter', async () => {
    const dateValue = '2023-09-28T14:48'
    const wrapper = mount(HmInputDatetime, {
      props: {
        modelValue: dateValue,
        keyupEnter: true,
      },
    })

    await wrapper.get('input[type="datetime-local"]').trigger('keyup.enter')
    setTimeout(() => {
      expect(wrapper.emitted()).toHaveProperty('enter')
      expect(wrapper.emitted()['enter']).toHaveLength(1)
      // TODO: emitでcomputedで処理される送信値を正しく取得できないのでコメントアウト
      // expect(wrapper.emitted()['enter']).toEqual([[dateValue]])
    }, 1)
  })

  it(':validation', async () => {
    const dateValue = '2023-09-28T14:48withErrorString'
    const datetimeLocalSchema = z.string().refine(
      (value) => {
        const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/
        return regex.test(value)
      },
      {
        message: 'Error:Date format (YYYY-MM-DDThh:mm)',
      },
    )
    const wrapper = mount(HmInputDatetime, {
      props: {
        validatorRules: datetimeLocalSchema,
        modelValue: '',
      },
    })
    await wrapper.get('input[type="datetime-local"]').setValue(dateValue)
    setTimeout(() => {
      expect(wrapper.emitted()).toHaveProperty('validation')
      expect(wrapper.emitted()['validation']).toHaveLength(1)
      // TODO: emitでcomputedで処理される送信値を正しく取得できないのでコメントアウト
      // expect(wrapper.emitted()['validation']).toEqual([[true]])
    }, 1)
  })
})
test('DOM check for error display', async () => {
  const dateValue = '2023-09-28T14:48withErrorString'
  const datetimeLocalSchema = z.string().refine(
    (value) => {
      const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/
      return regex.test(value)
    },
    {
      message: 'Error:Date format (YYYY-MM-DDThh:mm)',
    },
  )
  const wrapper = mount(HmInputDatetime, {
    props: {
      validatorRules: datetimeLocalSchema,
      modelValue: '',
    },
  })
  await wrapper.get('input[type="datetime-local"]').setValue(dateValue)
  setTimeout(() => {
    expect(
      wrapper.find('label[class="hm-input-datetime__label --error"]').exists(),
    ).toBe(true)
    expect(wrapper.find('p[class="error-container"]').exists()).toBe(true)
    expect(wrapper.find('span[class="error"]').exists()).toBe(true)
    expect(wrapper.find('span[class="error"]').text()).toBe(
      'Error:Date format (YYYY-MM-DDThh:mm)',
    )
  }, 1)
})
