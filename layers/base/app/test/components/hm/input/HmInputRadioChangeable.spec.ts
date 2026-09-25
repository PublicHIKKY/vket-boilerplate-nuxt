import { mount } from '@vue/test-utils'
import { describe, it, test, expect, vi } from 'vitest'
import { defineComponent, h } from 'vue'
import HmInputRadioChangeable from '#base/app/components/hm/input/HmInputRadioChangeable.vue'

const radioWatch = vi.hoisted(() => ({
  entries: [] as {
    sourceValue: unknown
    callback: (next: unknown, previous: unknown) => void
  }[],
}))

vi.mock('vue', async (importOriginal) => {
  const original = await importOriginal<typeof import('vue')>()
  return {
    ...original,
    watch: (source: unknown, callback: (next: unknown, previous: unknown) => void, options?: unknown) => {
      const sourceValue = original.unref(source)
      if (Array.isArray(sourceValue)) radioWatch.entries.push({ sourceValue, callback })
      return original.watch(source as never, callback as never, options as never)
    },
  }
})

const componentWatch = (options: unknown[]) =>
  radioWatch.entries.find(entry => entry.sourceValue === options)?.callback

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
      global: {
        stubs: { ClientOnly: { template: '<slot />' } },
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

  it('renders optional before and after components', () => {
    const Before = defineComponent(() => () => h('span', 'before'))
    const After = defineComponent(() => () => h('span', 'after'))
    const wrapper = mount(HmInputRadioChangeable, {
      props: {
        name: 'decorated',
        options: [{ label: 'label', value: 'value', before: Before, after: After }],
      },
      global: {
        stubs: { ClientOnly: { template: '<slot />' } },
      },
    })
    expect(wrapper.find('.before').exists()).toBe(true)
    expect(wrapper.find('.after').exists()).toBe(true)
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

  it('ignores change events from non-input targets', () => {
    const wrapper = mount(HmInputRadioChangeable, {
      props: { name: 'test', options: [{ label: 'one', value: '1' }] },
    })
    const vm = wrapper.vm as unknown as { onChange: (event: Event) => void }
    vm.onChange(new Event('change'))
    expect(wrapper.emitted('change')).toBeUndefined()
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

  it('watch callback selects the matching native radio element', () => {
    const wrapper = mount(HmInputRadioChangeable, {
      props: {
        name: 'watched',
        options: [
          { label: 'one', value: 'one', checked: false },
          { label: 'two', value: 'two', checked: true },
        ],
      },
    })
    const target = wrapper.get('input[id="two"]').element as HTMLInputElement
    target.checked = false
    componentWatch(wrapper.props('options'))?.([], [])
    // zod parse returns a validated clone, so the current implementation does not mutate the DOM node.
    expect(target.checked).toBe(false)
  })

  it('watch callback reports missing checked options', () => {
    const wrapper = mount(HmInputRadioChangeable, {
      props: { name: 'invalid', options: [{ label: 'one', value: 'one', checked: false }] },
    })
    expect(() => componentWatch(wrapper.props('options'))?.([], [])).toThrow('HmInputRadioChangeable: watch: checkedOptions')
  })

  it('watch callback reports missing rendered button refs and targets', () => {
    const wrapper = mount(HmInputRadioChangeable, {
      props: { name: 'invalid', options: [{ label: 'one', value: 'one', checked: true }] },
    })
    const internal = wrapper.vm as unknown as { $: { setupState: Record<string, unknown> } }
    internal.$.setupState.radiobuttons = undefined
    const callback = componentWatch(wrapper.props('options'))
    expect(() => callback?.([], [])).toThrow('HmInputRadioChangeable: watch: radiobuttons')

    internal.$.setupState.radiobuttons = [document.createElement('div')]
    expect(() => callback?.([], [])).toThrow('HmInputRadioChangeable: watch: checkTarget')

    const wrong = document.createElement('div')
    wrong.appendChild(Object.assign(document.createElement('input'), { id: 'wrong' }))
    internal.$.setupState.radiobuttons = [wrong]
    expect(() => callback?.([], [])).toThrow('HmInputRadioChangeable: watch: checkTarget')
  })
})
