import { VueWrapper } from '@vue/test-utils'

// NOTE: もっといい方法を募集中。
/**
 * .vmにアクセスするためのVueWrapper。
 *
 * ```typescript
 * const wrapper: AnyVueWrapper = mount(HaLoading)
 * wrapper.vm.start()
 * ```
 *
 * https://stackoverflow.com/questions/74516449/vue-test-utils-typescript-type-for-wrapper-vm
 */
export type AnyVueWrapper = VueWrapper<any> // eslint-disable-line @typescript-eslint/no-explicit-any
