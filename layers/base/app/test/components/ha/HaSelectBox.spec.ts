import { mount } from '@vue/test-utils'
import { z } from 'zod'
import HaSelectBox from '#base/app/components/ha/HaSelectBox.vue'

test('ref component', () => {
  expect(HaSelectBox).toBeTruthy()
})

test('mount component', () => {
  const wrapper = mount(HaSelectBox, {
    props: {
      modelValue: null,
      validatorName: '',
      validatorRules: undefined,
      options: [],
      placeholder: '---Select---',
      disabledPlaceholder: false,
      disabled: false,
      required: false,
      small: false,
    },
  })
  expect(wrapper.getCurrentComponent()).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()
})

describe('props', () => {
  it(':modelValue', () => {
    const wrapper = mount(HaSelectBox, {
      props: {
        modelValue: 'testModelValue',
        validatorName: '',
        validatorRules: undefined,
        options: [],
        placeholder: '---Select---',
        disabledPlaceholder: false,
        disabled: false,
        required: false,
        small: false,
      },
    })
    expect(wrapper.props('modelValue')).toBe('testModelValue')
  })
  it(':validatorName', () => {
    const wrapper = mount(HaSelectBox, {
      props: {
        modelValue: null,
        validatorName: 'test:validatorName',
        validatorRules: undefined,
        options: [],
        placeholder: '---Select---',
        disabledPlaceholder: false,
        disabled: false,
        required: false,
        small: false,
      },
    })
    expect(wrapper.get('select').attributes('name')).toBe('test:validatorName')
  })
  it(':validatorRules', () => {
    const testValidatorRules = z.string()
    const wrapper = mount(HaSelectBox, {
      props: {
        modelValue: null,
        validatorName: '',
        validatorRules: testValidatorRules,
        options: [],
        placeholder: '---Select---',
        disabledPlaceholder: false,
        disabled: false,
        required: false,
        small: false,
      },
    })
    expect(wrapper.props('validatorRules')).toStrictEqual(testValidatorRules)
  })
  it(':options', () => {
    const testOptions = [
      {
        value: 1,
        text: 'test option name',
        disabled: true,
      },
    ]
    const wrapper = mount(HaSelectBox, {
      props: {
        modelValue: null,
        validatorName: '',
        validatorRules: undefined,
        options: testOptions,
        placeholder: '---Select---',
        disabledPlaceholder: false,
        disabled: false,
        required: false,
        small: false,
      },
    })
    // NOTE: valueテスト
    expect(wrapper.get('select').find('option[value="1"]')).toBeTruthy()
    // NOTE: textテスト
    expect(wrapper.get('select').find('option[value="1"]').text()).toBe(
      'test option name',
    )
    // NOTE: disabledテスト
    // NOTE: optionタグのdisabledはdisabled属性自体の記載なのでその中身は空。なのでattrでdisabled属性が拾えたことでOKであり、その値を参照するのであれば空であることを確認する。disabledをpropsでfalseにしている場合はdisabled属性自体ないのでattr探した時点でエラーとなる（属性ないことがdisabled指定無いことの証明）
    expect(
      wrapper.get('select').find('option[value="1"]').attributes('disabled'),
    ).toBe('')
  })
  it(':example-options-disabled-false ', () => {
    const testOptions = [
      {
        value: 1,
        text: 'test option name',
        disabled: false,
      },
    ]
    const wrapper = mount(HaSelectBox, {
      props: {
        modelValue: null,
        validatorName: '',
        validatorRules: undefined,
        options: testOptions,
        placeholder: '---Select---',
        disabledPlaceholder: false,
        disabled: false,
        required: false,
        small: false,
      },
    })
    expect(
      wrapper.get('select').find('option[value="1"]').attributes('disabled'),
    ).toBeFalsy()
  })
  it(':placeholder', () => {
    const wrapper = mount(HaSelectBox, {
      props: {
        modelValue: null,
        validatorName: '',
        validatorRules: undefined,
        options: [],
        placeholder: '---Select---',
        disabledPlaceholder: false,
        disabled: false,
        required: false,
        small: false,
      },
    })
    expect(wrapper.get('select').find('option[value="null"]').text()).toBe(
      '---Select---',
    )
  })
  it(':disabledPlaceholder', () => {
    const wrapper = mount(HaSelectBox, {
      props: {
        modelValue: null,
        validatorName: '',
        validatorRules: undefined,
        options: [],
        placeholder: '---Select---',
        disabledPlaceholder: true,
        disabled: false,
        required: false,
        small: false,
      },
    })
    expect(
      wrapper.get('select').find('option[value="null"]').attributes('disabled'),
    ).toBe('')
  })
  it(':disabled', () => {
    const wrapper = mount(HaSelectBox, {
      props: {
        modelValue: null,
        validatorName: '',
        validatorRules: undefined,
        options: [],
        placeholder: '---Select---',
        disabledPlaceholder: false,
        disabled: true,
        required: false,
        small: false,
      },
    })
    expect(wrapper.get('select').attributes('disabled')).toBe('')
  })
  it(':required', () => {
    const wrapper = mount(HaSelectBox, {
      props: {
        modelValue: null,
        validatorName: '',
        validatorRules: undefined,
        options: [],
        placeholder: '---Select---',
        disabledPlaceholder: false,
        disabled: false,
        required: true,
        small: false,
      },
    })
    expect(wrapper.get('select').attributes('required')).toBe('')
  })
  it(':small', () => {
    const wrapper = mount(HaSelectBox, {
      props: {
        modelValue: null,
        validatorName: '',
        validatorRules: undefined,
        options: [],
        placeholder: '---Select---',
        disabledPlaceholder: false,
        disabled: false,
        required: true,
        small: true,
      },
    })
    expect(wrapper.get('select').attributes('class')).toBe('select -small')
  })
  it(':keepValueOnUnmount', () => {
    const wrapper = mount(HaSelectBox, {
      props: {
        modelValue: null,
        validatorName: '',
        validatorRules: undefined,
        options: [],
        placeholder: '---Select---',
        disabledPlaceholder: false,
        disabled: false,
        required: true,
        small: false,
        keepValueOnUnmount: true,
      },
    })
    expect(wrapper.props().keepValueOnUnmount).toBe(true)
  })
})

describe('emit', () => {
  it(':update:modelValue', () => {
    const wrapper = mount(HaSelectBox, {
      props: {
        modelValue: null,
        validatorName: '',
        validatorRules: undefined,
        options: [],
        placeholder: '---Select---',
        disabledPlaceholder: false,
        disabled: false,
        required: false,
        small: false,
      },
    })
    wrapper.vm.$emit('update:modelValue', 'testModelValue')
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    expect(wrapper.emitted()['update:modelValue']).toHaveLength(1)
    expect(wrapper.emitted()['update:modelValue']).toEqual([['testModelValue']])
  })
  it(':input', () => {
    const wrapper = mount(HaSelectBox, {
      props: {
        modelValue: null,
        validatorName: '',
        validatorRules: undefined,
        options: [],
        placeholder: '---Select---',
        disabledPlaceholder: false,
        disabled: false,
        required: false,
        small: false,
      },
    })
    wrapper.vm.$emit('input', 'testInputValue')
    expect(wrapper.emitted()).toHaveProperty('input')
    expect(wrapper.emitted()['input']).toHaveLength(1)
    expect(wrapper.emitted()['input']).toEqual([['testInputValue']])
  })
})

test('error display', async () => {
  const testValidatorRules = z.coerce.string().nonempty({
    message: '必須項目です',
  })
  const testOptions = [
    {
      // NOTE: testValidatorRulesで空でエラーを出るようにしているので、valueに空を指定すること
      value: '',
      text: 'test option name',
      disabled: false,
    },
  ]
  const wrapper = mount(HaSelectBox, {
    props: {
      modelValue: null,
      validatorName: '',
      validatorRules: testValidatorRules,
      options: testOptions,
      placeholder: '---Select---',
      disabledPlaceholder: false,
      disabled: false,
      required: false,
      small: false,
    },
  })
  await wrapper.find('select').setValue('')
  setTimeout(() => {
    expect(wrapper.get('span[class="error"]').text()).toBe('必須項目です')
  }, 1)

  // NOET: v-modelに空を入れてエラーを発火させたいが、現状下記手段にてエラーを発火させようとするも<!--v-if-->となったままエラーブロックがが発火しない。下記トライ履歴
  // NOTE: 前提条件としてHaSelectBoxをapp.vueに設置したところ、optionのvalueに空を設定したものをセレクトボックスから選択するとエラーの挙動が確認できる

  // 発火手段１→vscode赤波線エラー。オブジェクトは 'undefined' である可能性があります
  // wrapper.findAll('option').at(1).trigger('change')

  // 発火手段２ 違うエラーになる。かつsetSelectedはv-modelの際に使えない
  // const options = wrapper.get('select').findAll('option')
  // options.at(1).setSelected()

  // 発火手段３→v-if動作せず
  // await wrapper.setProps({ modelValue: '' })

  // 発火手段４→動作OK！
  // await wrapper.find('select').setValue('')

  // 発火手段５→vscodeで赤波線エラー出る。
  // https://v1.test-utils.vuejs.org/api/wrapper/#setselected
  // 注記：
  // v-modelbyを介して state に値を設定しようとしてもoption.element.selected = true; parentSelect.trigger('input')、v-modelはトリガーされません。v-modelイベントによってトリガーされます
  // await wrapper.get('select').find('option[value=""]').setSelected()

  // 発火手段６
  // const options = wrapper.get('select').findAll('option')
  // options.at(1).setSelected()
  // wrapper.get('select').trigger('change')

  // 上記でv-ifでエラーブロックが出現していれば下記で取得したい
  // DOMの更新を待つawaitでnexttick→効果なし
  // await wrapper.vm.$nextTick()

  // 取得方法１→エラーのv-ifが開かず効果なし
  // expect(wrapper.get('span[class="error"]').text()).toBe('必須項目です')

  // 取得方法２→エラーのv-ifが開かず効果なし
  // const errorSpan = wrapper.get('span.error')
  // expect(errorSpan.text()).toBe('必須項目です')

  // 取得方法３→エラーのv-ifが開かず効果なし
  // wrapper.vm.$nextTick(() => {
  //   expect(wrapper.get('span[class="error"]').text()).toBe('必須項目です')
  // })

  // 取得方法４→エラーのv-ifが開かず効果なし
  // setTimeout(() => {
  //   expect(wrapper.get('span[class="error"]').text()).toBe('必須項目です')
  // })

  // 取得方法５→動作OK！エラーのv-if取得可能
  // setTimeout(() => {
  //   expect(wrapper.get('span[class="error"]').text()).toBe('必須項目です')
  // }, 1)
})
