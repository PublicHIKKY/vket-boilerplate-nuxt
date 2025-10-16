import type { Ref } from 'vue'
import { scaleUp, scaleUpSequence } from '~/utils/animation'
import type { ScaleUpOptions } from '~/utils/animation'

export interface UseScaleUpAnimationOptions extends ScaleUpOptions {
  /**
   * アニメーションを自動的に開始するかどうか
   * @default false
   */
  autoplay?: boolean
}

/**
 * Scale-upアニメーションを制御するcomposable
 *
 * @example
 * ```vue
 * <script setup>
 * const boxRef = ref<HTMLElement>()
 * const { play, animation } = useScaleUpAnimation(boxRef, {
 *   variant: 'center',
 *   duration: 500,
 * })
 *
 * // アニメーションを再生
 * const handleClick = async () => {
 *   await play()
 *   console.log('Animation finished!')
 * }
 * </script>
 *
 * <template>
 *   <div ref="boxRef" @click="handleClick">
 *     Click me
 *   </div>
 * </template>
 * ```
 */
export const useScaleUpAnimation = (
  elementRef: Ref<Element | undefined | null>,
  options: UseScaleUpAnimationOptions = {},
) => {
  const animation = ref<Animation>()
  const isPlaying = ref(false)

  const play = async () => {
    if (!elementRef.value)
      return

    isPlaying.value = true
    animation.value = scaleUp(elementRef.value, options)

    try {
      await animation.value.finished
    } finally {
      isPlaying.value = false
    }
  }

  const pause = () => {
    animation.value?.pause()
    isPlaying.value = false
  }

  const cancel = () => {
    animation.value?.cancel()
    isPlaying.value = false
  }

  const replay = async () => {
    cancel()
    await nextTick()
    await play()
  }

  // autoplayオプションが有効な場合、マウント時に自動再生
  onMounted(() => {
    if (options.autoplay) {
      void play()
    }
  })

  return {
    animation: readonly(animation),
    isPlaying: readonly(isPlaying),
    play,
    pause,
    cancel,
    replay,
  }
}

/**
 * 複数要素のScale-upアニメーションを制御するcomposable
 *
 * @example
 * ```vue
 * <script setup>
 * const itemsRef = ref<HTMLElement[]>([])
 * const { playSequence } = useScaleUpSequence(itemsRef, {
 *   variant: 'bottom',
 *   stagger: 100, // 100msずつずらす
 * })
 * </script>
 *
 * <template>
 *   <div
 *     v-for="item in items"
 *     :key="item.id"
 *     :ref="el => itemsRef.push(el as HTMLElement)"
 *   >
 *     {{ item.text }}
 *   </div>
 * </template>
 * ```
 */
export const useScaleUpSequence = (
  elementsRef: Ref<Element[] | undefined | null>,
  options: UseScaleUpAnimationOptions & { stagger?: number } = {},
) => {
  const animations = ref<Animation[]>([])
  const isPlaying = ref(false)

  const playSequence = async () => {
    if (!elementsRef.value || elementsRef.value.length === 0)
      return

    isPlaying.value = true
    animations.value = scaleUpSequence(elementsRef.value, options)

    try {
      await Promise.all(animations.value.map(a => a.finished))
    } finally {
      isPlaying.value = false
    }
  }

  const cancelAll = () => {
    animations.value.forEach(a => a.cancel())
    isPlaying.value = false
  }

  const replaySequence = async () => {
    cancelAll()
    await nextTick()
    await playSequence()
  }

  // autoplayオプションが有効な場合、マウント時に自動再生
  onMounted(() => {
    if (options.autoplay) {
      void playSequence()
    }
  })

  return {
    animations: readonly(animations),
    isPlaying: readonly(isPlaying),
    playSequence,
    cancelAll,
    replaySequence,
  }
}
