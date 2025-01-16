import { sleep } from '#base/app/utils/sleep'

describe('sleep test', () => {
  it('diff of start time and end time', async () => {
    const startTime = Date.now()
    await sleep(100)
    const endTime = Date.now()
    const diffTime = endTime - startTime
    /**
     * @privateRemarks
     * startTimeから100ミリ秒離してendTimeを測って
     * 100ミリ秒差をテスト判定基準としているが、
     * setTimeout自体が処理の重さなど環境で変わる不安定なため、
     * 100ミリ秒より一割余裕をみて90ミリ秒でテストする
     * https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
     * 「この API は、タイマーがスケジュールどおりに正確に実行されることを保証しません。CPU 負荷や他のタスクなどによる遅延が予想されます。」
     */
    expect(diffTime).toBeGreaterThanOrEqual(90)
  })
})
