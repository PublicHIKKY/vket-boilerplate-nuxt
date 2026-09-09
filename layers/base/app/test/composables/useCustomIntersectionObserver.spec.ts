import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import useCustomIntersectionObserver from '#base/app/composables/useCustomIntersectionObserver'

type ObserverCallback = ConstructorParameters<typeof IntersectionObserver>[0]

const callbacks: ObserverCallback[] = []
const observe = vi.fn()
const unobserve = vi.fn()
const IntersectionObserverMock = vi.fn(class {
  disconnect = vi.fn()
  observe = observe
  takeRecords = vi.fn()
  unobserve = unobserve

  constructor(callback: ObserverCallback) {
    callbacks.push(callback)
  }
})

const entry = (target: Element, isIntersecting: boolean) => ({
  target,
  isIntersecting,
}) as IntersectionObserverEntry

beforeEach(() => {
  callbacks.length = 0
  observe.mockClear()
  unobserve.mockClear()
  IntersectionObserverMock.mockClear()
  vi.useFakeTimers()
  vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)
})

afterEach(() => {
  vi.useRealTimers()
  vi.unstubAllGlobals()
})

describe('doObserve', () => {
  it('observes with defaults and performs the default delayed in action', () => {
    const element = document.createElement('div')
    const inAction = vi.fn()

    useCustomIntersectionObserver().doObserve([{ element, inAction }])
    callbacks[0]?.([entry(element, true)], {} as IntersectionObserver)

    expect(IntersectionObserverMock).toHaveBeenCalledWith(
      expect.any(Function),
      { root: null, rootMargin: '0px', threshold: 0.1 },
    )
    expect(observe).toHaveBeenCalledWith(element)
    expect(inAction).not.toHaveBeenCalled()
    vi.advanceTimersByTime(300)
    expect(inAction).toHaveBeenCalledOnce()
    expect(element.classList.contains('-intersecting')).toBe(true)
    expect(unobserve).not.toHaveBeenCalled()
  })

  it('supports custom options, staggered delay, class, once, and exit action', () => {
    const first = document.createElement('div')
    const second = document.createElement('div')
    const firstIn = vi.fn()
    const secondIn = vi.fn()
    const outAction = vi.fn()
    const options = { root: first, rootMargin: '2px', threshold: 1 }

    useCustomIntersectionObserver().doObserve([
      { element: first, once: true, delay: 0, inAction: firstIn },
      {
        element: second,
        once: true,
        delay: 20,
        inAction: secondIn,
        outAction,
        intersectingClass: 'visible',
      },
    ], options)

    callbacks[0]?.([entry(first, true)], {} as IntersectionObserver)
    callbacks[1]?.([entry(second, true)], {} as IntersectionObserver)
    vi.advanceTimersByTime(0)
    expect(firstIn).toHaveBeenCalledOnce()
    expect(unobserve).toHaveBeenCalledWith(first)
    expect(secondIn).not.toHaveBeenCalled()
    vi.advanceTimersByTime(20)
    expect(secondIn).toHaveBeenCalledOnce()
    expect(second.classList.contains('visible')).toBe(true)
    expect(unobserve).toHaveBeenCalledWith(second)

    callbacks[1]?.([entry(second, false)], {} as IntersectionObserver)
    expect(outAction).toHaveBeenCalledOnce()
    expect(second.classList.contains('visible')).toBe(false)
  })

  it('allows omitted actions when leaving the viewport', () => {
    const element = document.createElement('div')
    element.classList.add('-intersecting')
    useCustomIntersectionObserver().doObserve([{ element }])

    callbacks[0]?.([entry(element, false)], {} as IntersectionObserver)

    expect(element.classList.contains('-intersecting')).toBe(false)
  })
})
