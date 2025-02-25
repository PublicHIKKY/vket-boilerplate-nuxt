const defaultOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1,
}

const doObserve = (
  targets: {
    element: HTMLElement
    once?: boolean
    delay?: number
    inAction?: () => void
    outAction?: () => void
    intersectingClass?: string
  }[],
  options: IntersectionObserverInit = defaultOptions,
) =>
  targets.forEach(
    (
      { element, once, delay, inAction, outAction, intersectingClass },
      index,
    ) => {
      const observer = new IntersectionObserver((items) => {
        items.forEach((item) => {
          if (item.isIntersecting) {
            const delayParam = (delay ?? 300) * index
            setTimeout(() => {
              inAction?.()
              item.target.classList.add(intersectingClass || '-intersecting')
            }, delayParam)
          } else {
            outAction?.()
            item.target.classList.remove(intersectingClass || '-intersecting')
          }

          if (item.isIntersecting && once) {
            observer.unobserve(element)
          }
        })
      }, options)

      observer.observe(element)
    },
  )

export default () => ({ doObserve })
