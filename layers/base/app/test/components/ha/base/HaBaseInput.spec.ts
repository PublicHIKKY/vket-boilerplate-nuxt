import { mount } from '@vue/test-utils'
import HaBaseInput from '#base/app/components/ha/base/HaBaseInput.vue'

test('ref component', () => {
  expect(HaBaseInput).toBeTruthy()
})

test('mount component', () => {
  const wrapper = mount(HaBaseInput, {
    props: {
      type: 'text',
    },
  })
  expect(wrapper.getCurrentComponent()).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()
})
describe('props', () => {
  describe(':type', () => {
    it('pass prop', () => {
      const wrapper = mount(HaBaseInput, { props: { type: 'text' } })
      expect((wrapper.element as HTMLInputElement).type).toBe('text')
    })
  })

  describe(':accept', () => {
    it('default is undefined (for safe)', () => {
      const wrapper = mount(HaBaseInput, { props: { type: 'text' } })
      expect((wrapper.element as HTMLInputElement).accept).toBeFalsy()
    })

    it('pass prop', () => {
      const wrapper = mount(HaBaseInput, {
        props: {
          type: 'text',
          accept: 'image/*',
        },
      })
      expect((wrapper.element as HTMLInputElement).accept).toBe('image/*')
    })
  })

  describe(':autocomplete', () => {
    it('default is undefined (for safe)', () => {
      const wrapper = mount(HaBaseInput, { props: { type: 'text' } })
      expect((wrapper.element as HTMLInputElement).autocomplete).toBeFalsy()
    })

    it('pass prop', () => {
      const wrapper = mount(HaBaseInput, {
        props: {
          type: 'text',
          autocomplete: 'name',
        },
      })
      expect((wrapper.element as HTMLInputElement).autocomplete).toBe('name')
    })
  })

  describe(':autofocus', () => {
    it('default is false', () => {
      const wrapper = mount(HaBaseInput, { props: { type: 'text' } })
      expect((wrapper.element as HTMLInputElement).autofocus).toBeFalsy()
    })

    it('pass prop', () => {
      const wrapper = mount(HaBaseInput, {
        props: { type: 'text', autofocus: true },
      })
      expect((wrapper.element as HTMLInputElement).autofocus).toBeTruthy()
    })
  })

  describe(':capture', () => {
    it('default is undefined', () => {
      const wrapper = mount(HaBaseInput, { props: { type: 'file' } })
      expect((wrapper.element as HTMLInputElement).capture).toBeFalsy()
    })
    it('pass prop: user', () => {
      const wrapper = mount(HaBaseInput, {
        props: { type: 'file', capture: 'user' },
      })
      expect(wrapper.attributes('capture')).toBe('user')
    })
    it('pass prop: environment', () => {
      const wrapper = mount(HaBaseInput, {
        props: { type: 'file', capture: 'environment' },
      })
      expect(wrapper.attributes('capture')).toBe('environment')
    })
  })

  describe(':checked', () => {
    it('default is false', () => {
      const wrapper = mount(HaBaseInput, { props: { type: 'radio' } })
      expect((wrapper.element as HTMLInputElement).checked).toBeFalsy()
    })

    it('pass prop', () => {
      const wrapper = mount(HaBaseInput, {
        props: { type: 'radio', checked: true },
      })
      expect((wrapper.element as HTMLInputElement).checked).toBeTruthy()
    })
  })

  describe(':disabled', () => {
    it('default is false', () => {
      const wrapper = mount(HaBaseInput, { props: { type: 'text' } })
      expect((wrapper.element as HTMLInputElement).disabled).toBeFalsy()
    })

    it('pass prop', () => {
      const wrapper = mount(HaBaseInput, {
        props: { type: 'text', disabled: true },
      })
      expect((wrapper.element as HTMLInputElement).disabled).toBeTruthy()
    })
  })

  describe(':id', () => {
    it('default is false', () => {
      const wrapper = mount(HaBaseInput, { props: { type: 'text' } })
      expect((wrapper.element as HTMLInputElement).id).toBeFalsy()
    })

    it('pass prop', () => {
      const wrapper = mount(HaBaseInput, {
        props: { type: 'text', id: 'testId' },
      })
      expect((wrapper.element as HTMLInputElement).id).toBe('testId')
    })
  })

  describe(':list', () => {
    it('default is false', () => {
      const wrapper = mount(HaBaseInput, { props: { type: 'text' } })
      expect((wrapper.element as HTMLInputElement).list).toBeFalsy()
    })

    it('pass prop', () => {
      const wrapper = mount(HaBaseInput, {
        props: { type: 'text', list: 'testDataListId' },
      })
      expect(wrapper.attributes('list')).toBe('testDataListId')
    })
  })

  describe(':max', () => {
    it('default is undefined (for safe)', () => {
      const wrapper = mount(HaBaseInput, { props: { type: 'text' } })
      expect((wrapper.element as HTMLInputElement).max).toBeFalsy()
    })

    it('pass prop', () => {
      const wrapper = mount(HaBaseInput, {
        props: {
          type: 'text',
          max: 10,
        },
      })
      expect((wrapper.element as HTMLInputElement).max).toBe('10')
    })
  })

  describe(':maxLength', () => {
    it('pass prop', () => {
      const wrapper = mount(HaBaseInput, {
        props: {
          type: 'text',
          maxLength: 10,
        },
      })
      expect((wrapper.element as HTMLInputElement).maxLength).toBe(10)
    })
  })

  describe(':min', () => {
    it('default is undefined (for safe)', () => {
      const wrapper = mount(HaBaseInput, { props: { type: 'text' } })
      expect((wrapper.element as HTMLInputElement).min).toBeFalsy()
    })

    it('pass prop', () => {
      const wrapper = mount(HaBaseInput, {
        props: {
          type: 'text',
          min: 10,
        },
      })
      expect((wrapper.element as HTMLInputElement).min).toBe('10')
    })
  })

  describe(':minLength', () => {
    it('default is undefined (for safe)', () => {
      const wrapper = mount(HaBaseInput, { props: { type: 'text' } })
      expect((wrapper.element as HTMLInputElement).minLength).toBe(-1)
    })

    it('pass prop', () => {
      const wrapper = mount(HaBaseInput, {
        props: {
          type: 'text',
          minLength: 10,
        },
      })
      expect((wrapper.element as HTMLInputElement).minLength).toBe(10)
    })
  })

  describe(':multiple', () => {
    it('default is false', () => {
      const wrapper = mount(HaBaseInput, { props: { type: 'text' } })
      expect((wrapper.element as HTMLInputElement).multiple).toBeFalsy()
    })

    it('pass prop', () => {
      const wrapper = mount(HaBaseInput, {
        props: { type: 'text', multiple: true },
      })
      expect((wrapper.element as HTMLInputElement).multiple).toBeTruthy()
    })
  })

  describe(':name', () => {
    it('default is undefined (for safe)', () => {
      const wrapper = mount(HaBaseInput, { props: { type: 'text' } })
      expect((wrapper.element as HTMLInputElement).name).toBeFalsy()
    })

    it('pass prop', () => {
      const wrapper = mount(HaBaseInput, {
        props: {
          type: 'text',
          name: 'sample',
        },
      })
      expect((wrapper.element as HTMLInputElement).name).toBe('sample')
    })
  })

  describe(':placeholder', () => {
    it('default is undefined (for safe)', () => {
      const wrapper = mount(HaBaseInput, { props: { type: 'text' } })
      expect((wrapper.element as HTMLInputElement).placeholder).toBeFalsy()
    })

    it('pass prop', () => {
      const wrapper = mount(HaBaseInput, {
        props: {
          type: 'text',
          placeholder: 'sample',
        },
      })
      expect((wrapper.element as HTMLInputElement).placeholder).toBe('sample')
    })
  })

  describe(':readonly', () => {
    it('default is false', () => {
      const wrapper = mount(HaBaseInput, { props: { type: 'text' } })
      expect((wrapper.element as HTMLInputElement).readOnly).toBeFalsy()
    })

    it('pass prop', () => {
      const wrapper = mount(HaBaseInput, {
        props: { type: 'text', readonly: true },
      })
      expect((wrapper.element as HTMLInputElement).readOnly).toBeTruthy()
    })
  })

  describe(':required', () => {
    it('default is false', () => {
      const wrapper = mount(HaBaseInput, { props: { type: 'text' } })
      expect((wrapper.element as HTMLInputElement).required).toBeFalsy()
    })

    it('pass prop', () => {
      const wrapper = mount(HaBaseInput, {
        props: { type: 'text', required: true },
      })
      expect((wrapper.element as HTMLInputElement).required).toBeTruthy()
    })
  })

  describe(':size', () => {
    it('default is 20', () => {
      const wrapper = mount(HaBaseInput, { props: { type: 'text' } })
      expect((wrapper.element as HTMLInputElement).size).toBe(20)
    })

    it('pass prop', () => {
      const wrapper = mount(HaBaseInput, {
        props: {
          type: 'text',
          size: 10,
        },
      })
      expect((wrapper.element as HTMLInputElement).size).toBe(10)
    })
  })

  describe(':value', () => {
    it('default is undefined (for safe)', () => {
      const wrapper = mount(HaBaseInput, { props: { type: 'text' } })
      expect(wrapper.props('value')).toBeFalsy()
    })

    it('pass prop: string', () => {
      const wrapper = mount(HaBaseInput, {
        props: {
          type: 'text',
          value: 'string test',
        },
      })
      expect(wrapper.props('value')).toBe('string test')
    })

    it('pass prop: number', () => {
      const wrapper = mount(HaBaseInput, {
        props: {
          type: 'text',
          value: 1,
        },
      })
      expect(wrapper.props('value')).toBe(1)
    })

    it('pass prop: boolean', () => {
      const wrapper = mount(HaBaseInput, {
        props: {
          type: 'text',
          value: true,
        },
      })
      expect(wrapper.props('value')).toBe(true)
    })
  })
  describe(':modelValue', () => {
    it('default is undefined (for safe)', () => {
      const wrapper = mount(HaBaseInput, { props: { type: 'text' } })
      expect(wrapper.props('modelValue')).toBeFalsy()
    })

    it('pass prop: string', () => {
      const wrapper = mount(HaBaseInput, {
        props: {
          type: 'text',
          modelValue: 'string test',
        },
      })
      expect(wrapper.props('modelValue')).toBe('string test')
    })

    it('pass prop: number', () => {
      const wrapper = mount(HaBaseInput, {
        props: {
          type: 'text',
          modelValue: 1,
        },
      })
      expect(wrapper.props('modelValue')).toBe(1)
    })

    it('pass prop: boolean', () => {
      const wrapper = mount(HaBaseInput, {
        props: {
          type: 'text',
          modelValue: true,
        },
      })
      expect(wrapper.props('modelValue')).toBe(true)
    })
  })
  describe(':files', () => {
    it('default is undefined (for safe)', () => {
      const wrapper = mount(HaBaseInput, { props: { type: 'text' } })
      expect(wrapper.attributes('files')).toBeFalsy()
    })

    // TODO: propsのfilelistが正しくセットされるかテストを行うが下記問題でコメントアウト中
    it('pass prop', () => {
      // 下準備としてFileList型のダミーを作成する
      const _createDummyFileList = (files: File[]) => {
        return {
          length: files.length,
          item(index: number) {
            return files[index] || null
          },
        }
      }
      const _file = new File([''], 'test.png')
      const _file2 = new File([''], 'test2.png')
      /*
       * TODO: fileListは使用されておらず、ESlintのErrorに引っかかったのでコメントアウトしてます。 by saga
       * const fileList: FileList = createDummyFileList([file, file2])
       * FileListダミー作成ここまで
       */

      /*
       * NOTE: 問題点、上記で作成したfileListをセットするとテストも通り、yarn devやvs codeでエラーも出ないが、yarn test:watchを表示しているターミナルで
       * [Vue warn]: Failed setting prop "files" on <input>: value [object Object] is invalid. TypeError: Failed to set the 'files' property on 'HTMLInputElement': The provided value is not of type 'FileList'.
       * が白文字で表示されるのでコメントアウトなどを以下の一部の行で行っている。
       */

      const _wrapper = mount(HaBaseInput, {
        props: {
          type: 'file',
          multiple: true,
          /*
           * NOTE: 下記にてfilesにfilelistを設定すると、テストはとおるが[Vue warn]が表示される
           * files: fileList,
           */
        },
      })
      /*
       * NOTE: 上記mount時ではなく、下記にてfilesにfilelistを設定すると、テストはとおるが[Vue warn]が表示される
       * await wrapper.setProps({ files: fileList })
       */

      /*
       * NOTE: 下記にてfilesにfilelistを設定すると、セットされないのかテストに落ちる。
       * Object.defineProperty(wrapper, 'files', {
       *   value: fileList,
       * })
       * https://blog.unsweets.net/entries/set-filelist-to-htmlinputelement-files/
       * 上記参照サイトでObject.definePropertyを使うことで
       * 「TypeError: Failed to set the 'files' property on 'HTMLInputElement': The provided value is not of type 'FileList
       * が発生しないと記載されているが、本件ではfileListがセットされずそもそも通らない
       */

      /*
       * NOTE: fileListをセットしてテストすると下記が通るが、[Vue warn]がターミナルに白文字で出るのでコメントアウト。
       * expect(wrapper.props('files')).toStrictEqual(fileList)
       */
    })
  })
})
describe('emits', () => {
  it(':update:modelValue', async () => {
    const wrapper = mount(HaBaseInput, {
      props: {
        type: 'text',
      },
    })
    await wrapper.setValue('test', 'modelValue')
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    expect(wrapper.emitted()['update:modelValue']).toHaveLength(1)
    expect(wrapper.emitted()['update:modelValue']).toEqual([['test']])
  })
  it(':update:value', async () => {
    const wrapper = mount(HaBaseInput, {
      props: {
        type: 'text',
      },
    })
    await wrapper.setValue('test', 'value')
    expect(wrapper.emitted()['update:value']).toBeTruthy()
    expect(wrapper.emitted()).toHaveProperty('update:value')
    expect(wrapper.emitted()['update:value']).toHaveLength(1)
    expect(wrapper.emitted()['update:value']).toEqual([['test']])
  })
  it(':input', async () => {
    const wrapper = mount(HaBaseInput, {
      props: {
        type: 'text',
      },
    })
    // onInput発火
    await wrapper.trigger('input')
    expect(wrapper.emitted()).toHaveProperty('input')
    expect(wrapper.emitted()['input']).toHaveLength(1)
  })
  it(':change', async () => {
    const wrapper = mount(HaBaseInput, {
      props: {
        type: 'text',
      },
    })
    // onChange発火
    await wrapper.trigger('change')
    expect(wrapper.emitted()).toHaveProperty('change')
    expect(wrapper.emitted()['change']).toHaveLength(1)
  })
  describe(':input[type]', () => {
    it(':input[type:text]', async () => {
      const wrapper = mount(HaBaseInput, {
        props: {
          type: 'text',
        },
      })
      /*
       * NOTE: setValueではupdate:modelValueのみ更新されupdate:valueにfalseが入るので、文字列をupdate:valueでもテストしたいのであれば、setPropsしtriggerで発火する
       * await wrapper.setValue('test')
       */
      await wrapper.setProps({ modelValue: 'test' })
      // onInput発火
      await wrapper.trigger('input')
      // TEST: update:modelValue
      expect(wrapper.emitted()).toHaveProperty('update:modelValue')
      expect(wrapper.emitted()['update:modelValue']).toHaveLength(1)
      expect(wrapper.emitted()['update:modelValue']).toEqual([['test']])
      // TEST: update:value
      expect(wrapper.emitted()['update:value']).toBeTruthy()
      expect(wrapper.emitted()).toHaveProperty('update:value')
      expect(wrapper.emitted()['update:value']).toHaveLength(1)
      expect(wrapper.emitted()['update:value']).toEqual([['test']])
      // TEST: input
      expect(wrapper.emitted()).toHaveProperty('input')
      expect(wrapper.emitted()['input']).toHaveLength(1)
    })
    it(':input[type:checkbox]', async () => {
      const wrapper = mount(HaBaseInput, {
        props: {
          type: 'checkbox',
          checked: false,
        },
      })
      // チェックボックスをクリックすることでChaekedにする
      await wrapper.trigger('click')
      // onInput発火
      await wrapper.trigger('input')
      // TEST: update:modelValue
      expect(wrapper.emitted()).toHaveProperty('update:modelValue')
      expect(wrapper.emitted()['update:modelValue']).toHaveLength(1)
      expect(wrapper.emitted()['update:modelValue']).toEqual([[true]])
      // TEST: update:value
      expect(wrapper.emitted()['update:value']).toBeTruthy()
      expect(wrapper.emitted()).toHaveProperty('update:value')
      expect(wrapper.emitted()['update:value']).toHaveLength(1)
      expect(wrapper.emitted()['update:value']).toEqual([[true]])
      // TEST: input
      expect(wrapper.emitted()).toHaveProperty('input')
      expect(wrapper.emitted()['input']).toHaveLength(1)
    })
    it(':input[type:radio]', async () => {
      const wrapper = mount(HaBaseInput, {
        props: {
          type: 'radio',
          value: 1,
          checked: false,
        },
      })
      // 単一のチェックボックスト違い、ラジオボタンなのでラジオボタンのグループのmodelValueを設定する。
      await wrapper.setProps({ modelValue: 1 })
      // onInput発火
      await wrapper.trigger('input')
      // TEST: update:modelValue
      expect(wrapper.emitted()).toHaveProperty('update:modelValue')
      expect(wrapper.emitted()['update:modelValue']).toHaveLength(1)
      expect(wrapper.emitted()['update:modelValue']).toEqual([[1]])
      // TEST: update:value
      expect(wrapper.emitted()['update:value']).toBeTruthy()
      expect(wrapper.emitted()).toHaveProperty('update:value')
      expect(wrapper.emitted()['update:value']).toHaveLength(1)
      expect(wrapper.emitted()['update:value']).toEqual([[1]])
      // TEST: input
      expect(wrapper.emitted()).toHaveProperty('input')
      expect(wrapper.emitted()['input']).toHaveLength(1)
    })
  })
})
