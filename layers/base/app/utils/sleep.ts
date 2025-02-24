import { nextTick } from 'vue'

/**
 * @desc 特定のミリ秒処理を止める。testなどでDOM改変などの非同期に使用
 * @param { number } ms
 */
export const sleep = (ms: number): Promise<void> =>
  new Promise<void>(resolve =>
    setTimeout(() => {
      resolve()
    }, ms),
  )

// NOTE: どうしてこれで直っているのかは不明
/**
 * `await wrapper.get('input[type="text"]').setValue('12345678901')`
 * などのアクションを待った時に、後続の`expect()`が失敗する場合に使う関数。
 * ```ts
 * await wrapper.get('input[type="text"]').setValue('12345678901')
 * await waitEffect()
 * expect(wrapper.get('p[class="error-container"]')).toBeTruthy()
 * ```
 * https://github.com/vuejs/vue-test-utils/issues/1406
 */
export const waitEffect = async () => {
  await nextTick()
  await new Promise(resolve =>
    requestAnimationFrame(resolve),
  )
}
