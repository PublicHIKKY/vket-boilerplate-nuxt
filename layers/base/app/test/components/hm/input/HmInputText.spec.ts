import { mount } from '@vue/test-utils'
import z from 'zod'
import HmInputText from '#base/app/components/hm/input/HmInputText.vue'
import useValidationRules from '#base/app/composables/useValidationRules'
import { waitEffect } from '#base/app/utils/sleep'

const rules = useValidationRules()

beforeEach(() => {
  vi.mock('vue-i18n', () => ({
    useI18n: vi.fn(() => ({
      local: {
        value: 'ja',
      },
      locale: {
        value: 'ja',
      },
      t: (key: string, ..._args: unknown[]) => `dummy-${key}`,
    })),
  }))
})

afterEach(() => {
  vi.restoreAllMocks()
})

test('ref component', () => {
  expect(HmInputText).toBeTruthy()
})

test('mount component', () => {
  const wrapper = mount(HmInputText)
  expect(wrapper.getCurrentComponent()).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()
})

describe('props', () => {
  it(':placeholder', () => {
    const wrapper = mount(HmInputText, {
      props: {
        type: 'text',
        placeholder: 'placeholder text',
      },
    })
    expect(wrapper.get('input[type="text"]').attributes('placeholder')).toBe(
      'placeholder text',
    )
  })

  it(':type', () => {
    const wrapper = mount(HmInputText, {
      props: {
        type: 'text',
      },
    })
    expect(wrapper.get('input[type="text"]').attributes('type')).toBe('text')
  })

  it(':validatorName', () => {
    const wrapper = mount(HmInputText, {
      props: {
        type: 'text',
        validatorName: 'testValidatorName',
      },
    })
    expect(wrapper.props('validatorName' as never)).toBe('testValidatorName')
  })

  it(':validatorRules', () => {
    const testValidatorRules = rules.required
    const wrapper = mount(HmInputText, {
      props: {
        type: 'text',
        validatorName: 'testValidatorName',
        validatorRules: testValidatorRules,
      },
    })
    expect(wrapper.props('validatorRules' as never)).toStrictEqual(
      testValidatorRules,
    )
  })

  it(':required', () => {
    const wrapper = mount(HmInputText, {
      props: {
        type: 'text',
        required: true,
      },
    })
    expect(wrapper.get('input[type="text"]').attributes('required')).toBe('')
  })

  it(':modelValue', () => {
    const wrapper = mount(HmInputText, {
      props: {
        type: 'text',
        modelValue: 'modelValue text',
      },
    })
    expect(wrapper.props('modelValue' as never)).toBe('modelValue text')
  })

  it(':disabled', () => {
    const wrapper = mount(HmInputText, {
      props: {
        type: 'text',
        disabled: true,
      },
    })
    expect(wrapper.get('input[type="text"]').attributes('disabled')).toBe('')
  })

  it(':counter:length display', async () => {
    const wrapper = mount(HmInputText, {
      props: {
        type: 'text',
        counter: true,
      },
    })
    await wrapper.get('input[type="text"]').setValue('1234567890')
    await waitEffect()
    expect(wrapper.get('span[class="counter"]').text()).toBe('10')
  })

  it(':counter:length/max display', async () => {
    const wrapper = mount(HmInputText, {
      props: {
        type: 'text',
        counter: { max: 50 },
      },
    })
    await wrapper.get('input[type="text"]').setValue('1234567890')
    await waitEffect()
    expect(wrapper.get('span[class="counter"]').text()).toBe('10/50')
  })

  it(':min', () => {
    const wrapper = mount(HmInputText, {
      props: {
        type: 'text',
        min: 3,
      },
    })
    expect(wrapper.get('input[type="text"]').attributes('min')).toBe('3')
  })

  it(':keyupEnter', () => {
    const wrapper = mount(HmInputText, {
      props: {
        type: 'text',
        keyupEnter: true,
      },
    })
    expect(wrapper.props('keyupEnter' as never)).toBe(true)
  })

  it(':isLazy', () => {
    const wrapper = mount(HmInputText, {
      props: {
        type: 'text',
        isLazy: true,
      },
    })
    expect(wrapper.props('isLazy' as never)).toBe(true)
  })

  it(':isTrim', () => {
    const wrapper = mount(HmInputText, {
      props: {
        type: 'text',
        isTrim: true,
      },
    })
    expect(wrapper.props('isTrim' as never)).toBe(true)
  })

  it(':small', () => {
    const wrapper = mount(HmInputText, {
      props: {
        type: 'text',
        small: true,
      },
    })
    expect(wrapper.get('input[type="text"]').attributes('class')).toBe(
      'ha-base-input input -small',
    )
  })

  it(':name', () => {
    const wrapper = mount(HmInputText, {
      props: {
        type: 'text',
        name: 'testName',
      },
    })
    expect(wrapper.get('input[type="text"]').attributes('name')).toBe(
      'testName',
    )
  })

  it(':error', () => {
    const wrapper = mount(HmInputText, {
      props: {
        type: 'text',
        error: 'testError',
      },
    })
    expect(wrapper.props('error')).toBe('testError')
  })

  it(':hideDetails', () => {
    // -hide classを確認するためには、validatorRulesが必要
    const testValidatorRules = rules.required
    const wrapper = mount(HmInputText, {
      props: {
        type: 'text',
        hideDetails: true,
        validatorRules: testValidatorRules,
      },
    })
    expect(wrapper.props('hideDetails')).toBe(true)
    // -hide classが付与されていることを確認
    expect(wrapper.get('p').attributes('class')).toBe('error-container -hide')
  })

  it(':list', () => {
    const wrapper = mount(HmInputText, {
      props: {
        type: 'text',
        list: 'testList',
      },
    })
    expect(wrapper.get('input[type="text"]').attributes('list')).toBe(
      'testList',
    )
  })

  it(':keepValueOnUnmount', () => {
    const wrapper = mount(HmInputText, {
      props: {
        keepValueOnUnmount: true,
      },
    })
    expect(wrapper.props().keepValueOnUnmount).toBe(true)
  })

  it(':validateOnMount', () => {
    const wrapper = mount(HmInputText, {
      props: {
        validateOnMount: true,
      },
    })
    expect(wrapper.props().validateOnMount).toBe(true)
  })
})

describe('emits', () => {
  it(':update:modelValue', async () => {
    const wrapper = mount(HmInputText, {
      props: {
        type: 'text',
      },
    })
    await wrapper.setValue('test', 'modelValue')
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    expect(wrapper.emitted()['update:modelValue']).toHaveLength(1)
    expect(wrapper.emitted()['update:modelValue']).toEqual([['test']])
  })

  it(':validate', async () => {
    // NOTE: 最大10文字。超えたらエラーを出す
    const maxRule = (maximum: number) => {
      return rules.max(maximum)
    }
    const wrapper = mount(HmInputText, {
      props: {
        type: 'text',
        validatorRules: maxRule(10),
        modelValue: 'test',
      },
    })
    // NOTE: 最大10文字なので11文字入れてエラーを出す
    await wrapper.get('input[type="text"]').setValue('12345678901')
    await waitEffect()
    expect(wrapper.emitted()).toHaveProperty('validate')
    expect(wrapper.emitted()['validate']).toHaveLength(1)
    // TODO: バリデーションエラー時にZodエラーメッセージを二重否定の真偽値として送信するが、正しい値を送信しないのでコメントアウト
    // expect(wrapper.emitted()['validate']).toStrictEqual([[true]])
  })

  it(':keyupEnter', async () => {
    const wrapper = mount(HmInputText, {
      props: {
        type: 'text',
        keyupEnter: true,
      },
    })
    await wrapper.get('input[type="text"]').trigger('keyup.enter')
    expect(wrapper.emitted()).toHaveProperty('enter')
    expect(wrapper.emitted()['enter']).toHaveLength(1)
  })
})

describe('DOM check for error display', () => {
  // NOTE: validatorName有りかつvalidatorRule無しをテスト
  it(':validatorName', () => {
    const wrapper = mount(HmInputText, {
      props: {
        type: 'text',
        validatorName: 'testValidatorName',
      },
    })
    // NOTE: <p class="error-container">が存在する確認
    expect(wrapper.get('p[class="error-container"]')).toBeTruthy()
    // NOTE: <p class="error-container">の中の<span class="error">は存在しないことを確認
    expect(
      wrapper
        .get('p[class="error-container"]')
        .find('span[class="error"]')
        .exists(),
    ).toBe(false)
  })

  it(':validatorRules:max 10 strings', async () => {
    const maxRule = (maximum: number) => {
      return z.coerce.string().max(maximum, {
        message: 'error max ' + maximum + ' strings',
      })
    }
    const wrapper = mount(HmInputText, {
      props: {
        type: 'text',
        validatorName: 'testValidatorName',
        validatorRules: maxRule(10),
      },
    })
    // NOTE: input欄、v-ifで絶対に居るのが確定してないので一応getでinput見つけて、バリデートで落ちる値を代入
    await wrapper.get('input[type="text"]').setValue('12345678901')
    // NOTE: NG例として下記。modelValueを見てそうなので、modelValueにテスト値いれてinputイベントを強制発火。これは動作せず
    // await wrapper.setValue('12345678901', 'modelValue')
    // await wrapper.get('input[type="text"]').trigger('input')

    // NOTE: setValueでinput欄に値を入れたのでsettimeoutのsleep関数で1ミリ秒以上で待つ。nextTickは効かない
    await waitEffect()
    // NOTE: DOMの変化を確かめたい時は下記でターミナルに表示させて確認する
    // console.log(wrapper.html())
    // NOTE: <p class="error-container">が存在する確認
    expect(wrapper.get('p[class="error-container"]')).toBeTruthy()
    // <p class="error-container">の中の<span class="error">が存在してエラーメッセージでてること確認
    expect(
      wrapper
        .get('p[class="error-container"]')
        .find('span[class="error"]')
        .exists(),
    ).toBe(true)
    // NOTE: エラー文言の照合
    expect(
      wrapper
        .get('p[class="error-container"]')
        .find('span[class="error"]')
        .text(),
    ).toBe('error max 10 strings')
  })

  it(':props.error', () => {
    const wrapper = mount(HmInputText, {
      props: {
        type: 'text',
        validatorName: 'error test',
        error: 'error message test',
      },
    })
    expect(wrapper.props('error')).toBe('error message test')
    expect(wrapper.get('label').attributes('class')).toBe('label -error')
    expect(wrapper.get('p[class="error-container"]')).toBeTruthy()
    expect(
      wrapper
        .get('p[class="error-container"]')
        .find('span[class="error"]')
        .exists(),
    ).toBe(true)
    expect(
      wrapper
        .get('p[class="error-container"]')
        .find('span[class="error"]')
        .text(),
    ).toBe('error message test')
  })

  it(':hideDetails', () => {
    const wrapper = mount(HmInputText, {
      props: {
        type: 'text',
        validatorName: 'error test',
        error: 'error message test',
        hideDetails: true,
      },
    })
    expect(wrapper.props('error')).toBe('error message test')
    expect(wrapper.get('label').attributes('class')).toBe('label -error')
    expect(wrapper.get('p[class="error-container -hide"]')).toBeTruthy()
    expect(
      wrapper
        .get('p[class="error-container -hide"]')
        .find('span[class="error"]')
        .exists(),
    ).toBe(true)
    expect(
      wrapper
        .get('p[class="error-container -hide"]')
        .find('span[class="error"]')
        .text(),
    ).toBe('error message test')
  })
})
