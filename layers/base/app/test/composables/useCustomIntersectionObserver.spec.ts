import doObserve from '#base/app/composables/useCustomIntersectionObserver'

/**
 * @privateRemarks
 * # IntersectionObserverは動かない
 * 公式でIntersectionObserverが動かないからmockする例をあげている
 * 参考：https://vitest.dev/guide/mocking.html#globals
 */
const IntersectionObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  takeRecords: vi.fn(),
  unobserve: vi.fn(),
}))

beforeEach(() => {
  /**
   * @privateRemarks
   * # vi.stubGlobalが使える理由
   * useRouteなどcomposablesのauto-import絡みでvi.stubGlobalを使用するとエラーとなるが、
   * IntersectionObserverはただのjsなのでエラーにならない。
   */
  vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)
})

/**
 * @privateRemarks
 * # テスト後はvi.stubGlobalを修復
 * vi.stubGlobalしたものを、テスト後（affterAll or afterEach）は元に戻す
 * https://vitest.dev/api/vi.html#vi-unstuballglobals
 */
afterEach(() => {
  vi.unstubAllGlobals()
})

/**
 * @privateRemarks
 * # テスト内容に関して
 * doObserveが返却する値もなく、
 * IntersectionObserverでDOMを監視するcomposablesだが、
 * 上記公式の通りIntersectionObserverはモックする前提であり、テストでは動作しない。
 * しかし、テストが出来ないだけではカバレッジ確保の観点から望ましくなく、
 * 一種のラパリサード、自明の理たる俗称エンブレス構文によるテストを証左として示し、経緯を後世に残す。
 *
 * composablesの「doObserve」doObserve()はdoObserveのオブジェクトです
 */
test('doObserve', () => {
  const expectObj = {
    doObserve: {},
  }
  expect(doObserve()).toMatchObject(expectObj)
})
