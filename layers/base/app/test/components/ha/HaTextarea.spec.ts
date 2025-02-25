import { mount } from '@vue/test-utils'
import { z } from 'zod'
import HaTextarea from '#base/app/components/ha/HaTextarea.vue'
import { waitEffect } from '#base/app/utils/sleep'

test('ref component', () => {
  expect(HaTextarea).toBeTruthy()
})

test('mount component', () => {
  const wrapper = mount(HaTextarea, {
    props: {
      placeholder: 'Input Text',
      type: 'text',
      validatorName: 'FileInput',
      validatorRules: undefined,
      required: false,
      modelValue: '',
      disabled: false,
      rows: 5,
      counter: false,
    },
  })
  expect(wrapper.getCurrentComponent()).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()
})

test('props', () => {
  // it(':placeholder', () => {
  const testValidatorRules = z.string()
  const wrapper = mount(HaTextarea, {
    props: {
      placeholder: 'Input Text',
      type: 'text',
      validatorName: 'validatorName',
      validatorRules: testValidatorRules,
      required: true,
      modelValue: '1234567890',
      disabled: true,
      rows: 5,
      counter: true,
      hideDetails: true,
      keepValueOnUnmount: true,
    },
  })
  // NOTE: placeholder
  expect(wrapper.get('textarea').attributes('placeholder')).toBe('Input Text')
  // NOTE: type
  expect(wrapper.get('textarea').attributes('type')).toBe('text')
  // NOTE: validatorName
  expect(wrapper.props('validatorName')).toBe('validatorName')
  // NOTE: validatorRules
  expect(wrapper.props('validatorRules')).toStrictEqual(testValidatorRules)
  // NOTE: required
  expect(wrapper.get('textarea').attributes('required')).toBe('')
  // NOTE: modelValue
  expect(wrapper.props('modelValue')).toBe('1234567890')
  // NOTE: disabled
  expect(wrapper.get('textarea').attributes('disabled')).toBe('')
  // NOTE: rows
  expect(wrapper.get('textarea').attributes('rows')).toBe('5')
  // NOTE: counter
  expect(wrapper.get('span[class="counter"]').text()).toBe('10')
  // NOTE: hideDetails
  expect(wrapper.get('p').attributes('class')).toBe('error-container -hide')
  // NOTE: keepValueOnUnmount
  expect(wrapper.props().keepValueOnUnmount).toBe(true)
})

describe('emit', () => {
  it(':update:modelValue, :input', async () => {
    const wrapper = mount(HaTextarea, {
      props: {
        placeholder: 'Input Text',
        type: 'text',
        validatorName: 'validatorName',
        validatorRules: undefined,
        required: false,
        modelValue: '',
        disabled: false,
        rows: 5,
        counter: false,
      },
    })
    /*
     * wrapper.vm.$emit('update:modelValue', 'testModelValue')
     * await wrapper.setValue('testModelValue', 'modelValue')
     */
    await wrapper.find('textarea').setValue('1234567890')
    // NOTE: update:modelValue
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    expect(wrapper.emitted()['update:modelValue']).toHaveLength(1)
    expect(wrapper.emitted()['update:modelValue']).toEqual([['1234567890']])
    // NOTE: input
    expect(wrapper.emitted()).toHaveProperty('input')
    expect(wrapper.emitted()['input']).toHaveLength(1)
    expect(wrapper.emitted()['input']).toEqual([['1234567890']])
  })
  it(':validate', async () => {
    const maxRule = (maximum: number) => {
      return z.coerce.string().max(maximum, {
        message: 'error max ' + maximum + ' strings',
      })
    }
    const wrapper = mount(HaTextarea, {
      props: {
        placeholder: 'Input Text',
        type: 'text',
        validatorName: 'validatorName',
        validatorRules: maxRule(10),
        required: false,
        modelValue: '',
        disabled: false,
        rows: 5,
        counter: false,
      },
    })
    await wrapper.find('textarea').setValue('12345678901')
    expect(wrapper.emitted()).toHaveProperty('validate')
    expect(wrapper.emitted()['validate']).toHaveLength(1)
    /*
     * TODO: emitでcomputedで処理される送信値を正しく取得できないのでコメントアウト
     * expect(wrapper.emitted()['validate']).toEqual([[true]])
     */
  })
})

test('error display', async () => {
  const maxRule = (maximum: number) => {
    return z.coerce.string().max(maximum, {
      message: 'error max ' + maximum + ' strings',
    })
  }
  const stringsMaxLength = 10
  const wrapper = mount(HaTextarea, {
    props: {
      placeholder: 'Input Text',
      type: 'text',
      validatorName: 'validatorName',
      validatorRules: maxRule(stringsMaxLength),
      required: false,
      modelValue: '',
      disabled: false,
      rows: 5,
      counter: false,
    },
  })
  await wrapper.find('textarea').setValue('12345678901')
  await waitEffect()
  expect(wrapper.get('label').attributes('class')).toBe(`label -error`)
  expect(wrapper.get('span[class="error"]').text()).toBe(
    `error max ${stringsMaxLength} strings`,
  )
})
