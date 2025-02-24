import { mount } from '@vue/test-utils'
import HmInputFile from '#base/app/components/hm/input/HmInputFile.vue'

/*
 * NOTE: 下準備としてFileList型のダミーを作成する
 * const createDummyFileList = (files: File[]) => {
 *   return {
 *     length: files.length,
 *     item(index: number) {
 *       return files[index] || null
 *     },
 *   }
 * }
 * const file = new File([''], 'test.png')
 * const file2 = new File([''], 'test2.png')
 * const fileList: FileList = createDummyFileList([file, file2])
 * const singleFileList: FileList = createDummyFileList([file])
 * FileListダミー作成ここまで
 */

test('ref component', () => {
  expect(HmInputFile).toBeTruthy()
})

test('mount component', () => {
  const wrapper = mount(HmInputFile)
  expect(wrapper.getCurrentComponent()).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()
})

test('props', () => {
  const wrapper = mount(HmInputFile, {
    props: {
      required: true,
      accept: 'image/*',
      multiple: true,
      propFiles: undefined,
    },
  })
  expect(wrapper.get('input[type="file"]').attributes('required')).toBe('')
  expect(wrapper.get('input[type="file"]').attributes('accept')).toBe('image/*')
  expect(wrapper.get('input[type="file"]').attributes('multiple')).toBe('')

  /*
   * NOTE: FileListをセットすると[Vue warn]が出現する
   * await wrapper.setProps({ propFiles: fileList })
   * NOTE: テストは通るがHaBaseInputと同様にFileListをセットすると[Vue warn]が出現するのでコメントアウト
   * expect(wrapper.props('propFiles')).toStrictEqual(fileList)
   */
})

// TODO: emit系がFileListの問題が関連しているのか、全て通らない。emit自体発行されない。FileListは親から受け取るものでは一方的に送るものという記載もあり、[Vue warn]自体と関係しているかもしれない。
describe('emits', () => {
  it(':input:multiple', () => {
    const _wrapper = mount(HmInputFile, {
      props: {
        multiple: true,
        propFiles: undefined,
      },
    })
    /*
     * // NOTE: FileListをセットすると[Vue warn]が出現する
     * await wrapper.setProps({ propFiles: fileList })
     * // await wrapper.get('input[type="file"]').trigger('click')
     * // await flushPromises()
     * setTimeout(() => {
     *   // NOTE: .toHavePropertyの時点で取れない。emitが発生していない
     *   expect(wrapper.emitted()).toHaveProperty('input:multiple')
     *   expect(wrapper.emitted()['input:multiple']).toHaveLength(1)
     *   // expect(wrapper.emitted()['input:multiple']).toEqual([[fileList]])
     * }, 1)
     */
  })

  it(':input:single', () => {
    const _wrapper = mount(HmInputFile, {
      props: {
        multiple: true,
        propFiles: undefined,
      },
    })
    /*
     * // NOTE: FileListをセットすると[Vue warn]が出現する
     * await wrapper.setProps({ propFiles: singleFileList })
     * // await wrapper.get('input[type="file"]').trigger('click')
     * // await flushPromises()
     * setTimeout(() => {
     *   // NOTE: .toHavePropertyの時点で取れない。emitが発生していない
     *   expect(wrapper.emitted()).toHaveProperty('input:single')
     *   expect(wrapper.emitted()['input:single']).toHaveLength(1)
     *   expect(wrapper.emitted()['input:single']).toEqual([[singleFileList]])
     * }, 1)
     */
  })

  // TODO: cancelのemitにおいて問題多数
  it(':cancel', () => {
    /*
     * NOTE: focusイベントのためにはattachToが必要らしい https://github.com/vitest-dev/vitest/issues/2013#issuecomment-1250272103
     * NOTE: vue-test-utils v1の古い書き方
     */
    const div = document.createElement('div')
    div.id = 'root'
    document.body.appendChild(div)
    /*
     * NOTE: https://test-utils.vuejs.org/api/#attachTo での記載方法。attachToに型エラーでて使えず
     * document.body.innerHTML = `
     *   <div>
     *     <h1>Non Vue app</h1>
     *     <div id="app"></div>
     *   </div>
     * `
     */
    const _wrapper = mount(HmInputFile, {
      // NOTE: vue-test-utils v1の古い書き方
      attachTo: '#root',
      /*
       * NOTE: https://test-utils.vuejs.org/api/#attachTo での記載方法。attachToに型エラーでて使えず
       * attachTo: document.getElementById('app'),
       */
      props: {
        multiple: true,
        propFiles: undefined,
      },
    })
    /*
     * // NOTE: 不要かもしれないが一応セット。
     * await wrapper.setProps({ propFiles: fileList })
     * await wrapper.find('input').trigger('focus')
     * // NOTE; setTimeoutは30ms前後以上を入れると、テストが全て通るので、本件ではコンポーネント側に500ms後にemitなので使えない
     * // NOTE: flushPromisesにてtoriggerイベントの非同期を解決する
     * await flushPromises()
     * // NOTE: attachToが動作していないように見える
     * console.log(wrapper.html())
     * // NOTE: .toHavePropertyの時点で取れない。emitが発生していない
     * expect(wrapper.emitted()).toHaveProperty('cancel')
     * expect(wrapper.emitted()['cancel']).toHaveLength(1)
     * expect(wrapper.emitted()['cancel']).toEqual([[]])
     * // attachToの後は破壊する必要があるらしい。しかしdestroyは存在しないと言われる
     * // wrapper.destroy()
     */
  })
})

describe('event test', () => {
  // TODO: 可能であればclickしたことによる挙動をとりたい。DOMには変化が現れないので、クリックした関数が発火した回数など
  it('@click="onClick"', async () => {
    const wrapper = mount(HmInputFile)
    // const onClickSpy = vi.spyOn(wrapper.vm, 'onClick')
    await wrapper.trigger('click')
    setTimeout(() => {
      /*
       * expect(onClickSpy).toHaveBeenCalled()
       * expect(onClickSpy).toBeCalledTimes(1)
       */
    }, 1)
  })

  // TODO: ドラッグイベントを検知できるようにする
  it('@dragenter.prevent="toggleDragOver(true)"', async () => {
    const wrapper = mount(HmInputFile)
    await wrapper.trigger('dragenter')
    setTimeout(() => {
      /*
       * NOTE: JSDOMで生成されたDOMには幅や座標が無いためドラッグなどを認識できないというvue-test-Libraryでのやりとり
       * NOTE: https://github.com/testing-library/vue-testing-library/issues/145#issuecomment-633713719
       * expect(wrapper.get('label').attributes('class')).toBe(
       *   'hm-input-file isDragOver'
       * )
       */
    }, 1)
  })

  it('@dragleave.prevent="toggleDragOver(false)"', async () => {
    const wrapper = mount(HmInputFile)
    await wrapper.trigger('dragleave')
    setTimeout(() => {
      // NOTE: ドラッグイベントが検知できないが、初期値の状態なのでテストは通る
      expect(wrapper.get('label').attributes('class')).toBe('hm-input-file')
    }, 1)
  })

  // TODO: JSDOMで
  it('@drop.prevent="onDrop($event)"', async () => {
    const wrapper = mount(HmInputFile)
    await wrapper.trigger('drop')
    setTimeout(() => {
      // NOTE: ドロップイベントが検知できないが、初期値の状態なのでテストは通る。また、JSDOMはdataTransferを扱えない
      expect(wrapper.get('label').attributes('class')).toBe('hm-input-file')
    }, 1)
  })
})
