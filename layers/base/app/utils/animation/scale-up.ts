/**
 * Scale-up animation utility using Web Animations API
 * Based on Animista (http://animista.net)
 * Licensed under FreeBSD License
 */

export type ScaleUpVariant
  = | 'center'
    | 'top'
    | 'tr'
    | 'right'
    | 'br'
    | 'bottom'
    | 'bl'
    | 'left'
    | 'tl'
    | 'hor-center'
    | 'hor-left'
    | 'hor-right'
    | 'ver-center'
    | 'ver-top'
    | 'ver-bottom'

export interface ScaleUpOptions {
  /**
   * アニメーションの起点となる方向
   * @default 'center'
   */
  variant?: ScaleUpVariant
  /**
   * アニメーションの実行時間（ミリ秒）
   * @default 400
   */
  duration?: number
  /**
   * アニメーションの遅延時間（ミリ秒）
   * @default 0
   */
  delay?: number
  /**
   * アニメーションのイージング関数
   * @default 'cubic-bezier(0.390, 0.575, 0.565, 1.000)'
   */
  easing?: string
  /**
   * アニメーションの反復回数
   * @default 1
   */
  iterations?: number
  /**
   * アニメーション終了後の状態
   * @default 'both'
   */
  fill?: FillMode
}

interface AnimationConfig {
  keyframes: Keyframe[]
  options: KeyframeAnimationOptions
}

/**
 * バリアントごとのアニメーション設定を取得
 */
const getAnimationConfig = (
  variant: ScaleUpVariant,
  options: Required<Omit<ScaleUpOptions, 'variant'>>,
): AnimationConfig => {
  const { duration, delay, easing, iterations, fill } = options

  const baseOptions: KeyframeAnimationOptions = {
    duration,
    delay,
    easing,
    iterations,
    fill,
  }

  // Transform origin mappings
  const originMap: Record<ScaleUpVariant, string | undefined> = {
    'center': undefined,
    'top': '50% 0%',
    'tr': '100% 0%',
    'right': '100% 50%',
    'br': '100% 100%',
    'bottom': '50% 100%',
    'bl': '0% 100%',
    'left': '0% 50%',
    'tl': '0% 0%',
    'hor-center': undefined,
    'hor-left': '0% 0%',
    'hor-right': '100% 100%',
    'ver-center': undefined,
    'ver-top': '0% 0%',
    'ver-bottom': '100% 100%',
  }

  // Scale type mappings
  const scaleTypeMap: Record<ScaleUpVariant, 'scale' | 'scaleX' | 'scaleY'> = {
    'center': 'scale',
    'top': 'scale',
    'tr': 'scale',
    'right': 'scale',
    'br': 'scale',
    'bottom': 'scale',
    'bl': 'scale',
    'left': 'scale',
    'tl': 'scale',
    'hor-center': 'scaleX',
    'hor-left': 'scaleX',
    'hor-right': 'scaleX',
    'ver-center': 'scaleY',
    'ver-top': 'scaleY',
    'ver-bottom': 'scaleY',
  }

  const origin = originMap[variant]
  const scaleType = scaleTypeMap[variant]
  const initialScale = scaleType === 'scale' ? 0.5 : 0.4

  const keyframes: Keyframe[] = [
    {
      transform: `${scaleType}(${initialScale})`,
      ...(origin && { transformOrigin: origin }),
    },
    {
      transform: `${scaleType}(1)`,
      ...(origin && { transformOrigin: origin }),
    },
  ]

  return {
    keyframes,
    options: baseOptions,
  }
}

/**
 * 要素にscale-upアニメーションを適用
 *
 * @example
 * ```ts
 * const element = document.querySelector('.box')
 * const animation = scaleUp(element, { variant: 'center', duration: 500 })
 *
 * // アニメーション終了を待つ
 * await animation.finished
 * ```
 */
export const scaleUp = (
  element: Element,
  options: ScaleUpOptions = {},
): Animation => {
  const {
    variant = 'center',
    duration = 400,
    delay = 0,
    easing = 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
    iterations = 1,
    fill = 'both',
  } = options

  const config = getAnimationConfig(variant, {
    duration,
    delay,
    easing,
    iterations,
    fill,
  })

  return element.animate(config.keyframes, config.options)
}

/**
 * 複数の要素に順番にアニメーションを適用
 *
 * @example
 * ```ts
 * const elements = document.querySelectorAll('.item')
 * const animations = scaleUpSequence(elements, {
 *   variant: 'center',
 *   stagger: 100, // 100msずつずらす
 * })
 *
 * // 全てのアニメーション終了を待つ
 * await Promise.all(animations.map(a => a.finished))
 * ```
 */
export const scaleUpSequence = (
  elements: Element[] | NodeListOf<Element>,
  options: ScaleUpOptions & { stagger?: number } = {},
): Animation[] => {
  const { stagger = 0, ...animationOptions } = options
  const elementArray = Array.from(elements)

  return elementArray.map((element, index) => {
    const delay = (animationOptions.delay ?? 0) + index * stagger
    return scaleUp(element, { ...animationOptions, delay })
  })
}
