import { nextTick } from 'vue'

/**
 * @desc 特定のミリ秒処理を止める。testなどでDOM改変などの非同期に使用
 * @param { number } ms
 */
export const sleep = (ms: number) =>
  new Promise<void>(resolve => setTimeout(() => resolve(), ms))

export const waitEffect = async () => {
  await nextTick()
  await new Promise(resolve => requestAnimationFrame(resolve))
}
