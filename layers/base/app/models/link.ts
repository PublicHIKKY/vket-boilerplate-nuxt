export type IsExternalLinkTestFunction = (to: string) => boolean

export const isExternalLinkInjectionKey: InjectionKey<IsExternalLinkTestFunction>
  = Symbol('HaLink#isExternalLinkTestFunction')
