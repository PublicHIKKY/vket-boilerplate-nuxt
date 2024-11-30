import { nextTick } from 'vue'

/**
 * @desc 特定のミリ秒処理を止める。testなどでDOM改変などの非同期に使用
 * @param { number } ms
 */
export const sleep = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(() => resolve(), ms))

// NOTE: 参考: https://github.com/DevHIKKY/vketapp_front/pull/554/files#r1551786989
// NOTE: どうしてこれで直っているのかは不明。だれかわかる人は参考URLのコメントで教えてください。そしてこのコメントを削除してください
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
  await new Promise((resolve) => requestAnimationFrame(resolve))
}
