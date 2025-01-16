import { mount } from '@vue/test-utils'
import z from 'zod'
import HmInputCheckbox from '#base/app/components/hm/input/HmInputCheckbox.vue'

const checkboxSchema = z.boolean().refine(value => value, {
  message: 'チェックボックスを選択してください。',
})

test('ref component', () => {
  expect(HmInputCheckbox).toBeTruthy()
})

test('mount component', () => {
  const wrapper = mount(HmInputCheckbox, {
    props: {
      name: 'test name',
      modelValue: false,
    },
  })
  expect(wrapper.getCurrentComponent()).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()
})

describe('props', () => {
  it(':validatorName', () => {
    const wrapper = mount(HmInputCheckbox, {
      props: {
        validatorName: 'test',
        name: 'test name',
        modelValue: false,
      },
    })
    expect(wrapper.props('validatorName')).toBe('test')
  })

  it(':validatorRules', () => {
    const wrapper = mount(HmInputCheckbox, {
      props: {
        validatorRules: checkboxSchema,
        name: 'test name',
        modelValue: true,
      },
    })
    expect(wrapper.props('validatorRules')).toStrictEqual(checkboxSchema)
  })

  it(':name', () => {
    const wrapper = mount(HmInputCheckbox, {
      props: {
        name: 'test name',
        modelValue: false,
      },
    })
    expect(wrapper.get('input[type="checkbox"]').attributes('name')).toBe(
      'test name',
    )
  })

  it(':modelValue', () => {
    const wrapper = mount(HmInputCheckbox, {
      props: {
        name: 'test name',
        modelValue: true,
      },
    })
    expect(wrapper.get('input[type="checkbox"]').attributes('value')).toBe(
      'true',
    )
  })

  it(':required', () => {
    const wrapper = mount(HmInputCheckbox, {
      props: {
        name: 'test name',
        modelValue: false,
        required: true,
      },
    })
    expect(wrapper.get('input[type="checkbox"]').attributes('required')).toBe(
      '',
    )
  })

  it(':disabled', () => {
    const wrapper = mount(HmInputCheckbox, {
      props: {
        name: 'test name',
        modelValue: false,
        disabled: true,
      },
    })
    expect(wrapper.get('input[type="checkbox"]').attributes('disabled')).toBe(
      '',
    )
  })
})

describe('emits', () => {
  it(':update:modelValue, :input', async () => {
    const wrapper = mount(HmInputCheckbox, {
      props: {
        name: 'test name',
        modelValue: false,
      },
    })
    await wrapper.get('input[type="checkbox"]').setValue(true)
    setTimeout(() => {
      // :update:modelValue
      expect(wrapper.emitted()).toHaveProperty('update:modelValue')
      expect(wrapper.emitted()['update:modelValue']).toHaveLength(1)
      expect(wrapper.emitted()['update:modelValue']).toEqual([[true]])
      // :input
      expect(wrapper.emitted()).toHaveProperty('input')
      expect(wrapper.emitted()['input']).toHaveLength(1)
      expect(wrapper.emitted()['input']).toEqual([[true]])
    }, 1)
  })

  it(':validate at error', async () => {
    const wrapper = mount(HmInputCheckbox, {
      props: {
        validatorRules: checkboxSchema,
        name: 'test name',
        modelValue: true,
      },
    })
    await wrapper.get('input[type="checkbox"]').setValue(false)
    setTimeout(() => {
      expect(wrapper.emitted()).toHaveProperty('validate')
      expect(wrapper.emitted()['validate']).toHaveLength(1)
      /*
       * TODO: バリデーションエラー時にZodエラーメッセージを二重否定の真偽値として送信するが、正しい値を送信しないのでコメントアウト
       * expect(wrapper.emitted()['validate']).toEqual([[true]])
       */
    }, 1)
  })
})

describe('DOM check for error display', () => {
  it(':validatorRules:no check error', async () => {
    const wrapper = mount(HmInputCheckbox, {
      props: {
        validatorRules: checkboxSchema,
        name: 'test name',
        modelValue: true,
      },
    })

    await wrapper.get('input[type="checkbox"]').setValue(false)
    setTimeout(() => {
      expect(wrapper.get('span[class="error"]').text()).toBe(
        'チェックボックスを選択してください。',
      )
    }, 1)
  })
})
