<template>
  <div
    class="slider-wrap"
    :style="{
      '--slide-amount': props.amount,
      '--width-pc': props.widthPc,
      '--width-sp': props.widthSp,
    }"
    role="presentation"
  >
    <div
      class="slider-body"
      role="presentation"
    >
      <div
        ref="slider"
        class="slider-inner"
        role="presentation"
        :style="{
          '--gap-pc': props.gapPc,
          '--gap-sp': props.gapSp,
        }"
        @touchstart="startDragging"
        @touchmove="inDragging"
        @touchend="endDragging"
        @mousedown="startDragging"
        @mousemove="inDragging"
        @mouseup="endDragging"
        @mouseleave="endDragging"
      >
        <template v-if="props.loop">
          <div
            ref="clonedSlideBefore"
            class="slider -before"
            :class="{
              '-center': props.center ? true : false,
            }"
            role="presentation"
            inert
          >
            <slot name="item"></slot>
          </div>
        </template>
        <div
          :id="props.slidename"
          class="slider"
          :class="{
            '-center': props.center,
          }"
          role="presentation"
        >
          <slot name="item"></slot>
        </div>
        <template v-if="props.loop">
          <div
            ref="clonedSlideAfter"
            class="slider -after"
            :class="{
              '-center': props.center,
            }"
            role="presentation"
            inert
          >
            <slot name="item"></slot>
          </div>
        </template>
      </div>
    </div>
    <template v-if="props.pagination">
      <ol
        class="slider-pagination"
        role="tablist"
      >
        <li
          v-for="index in props.amount"
          :key="index"
          class="slider-pagination-item"
          role="presentation"
        >
          <button
            :aria-label="
              i18n.locale.value === 'ja'
                ? `スライド${index}枚目を表示する`
                : `Display slide ${index}`
            "
            :aria-controls="props.itemsId[index - 1]"
            :aria-selected="index === Math.abs(currentSlide) + 1"
            role="tab"
            class="slider-pagination-button"
            type="button"
            @click="jumpSlider(index - 1), stopAutoPlay()"
          >
            <slot name="pagination"></slot>
          </button>
        </li>
      </ol>
    </template>
    <template v-if="props.arrow">
      <button
        class="slider-arrow button--previous"
        :aria-label="
          i18n.locale.value === 'ja'
            ? `スライドを1枚戻す`
            : `Show previous slide`
        "
        :aria-controls="props.slidename"
        :disabled="!props.loop && disabledPrevious"
        type="button"
        @click="moveSlider('previous'), stopAutoPlay()"
      >
        <slot name="navigationprevious"></slot>
      </button>
      <button
        class="slider-arrow button--next"
        :aria-label="
          i18n.locale.value === 'ja' ? `スライドを1枚進める` : `Show next slide`
        "
        :aria-controls="props.slidename"
        :disabled="!props.loop && disabledNext"
        type="button"
        @click="moveSlider('next'), stopAutoPlay()"
      >
        <slot name="navigationnext"></slot>
      </button>
    </template>
    <template v-if="props.page">
      <p
        class="slider-page"
        aria-valuemin="1"
        :aria-valuemax="props.amount"
        :aria-valuenow="Math.abs(currentSlide) + 1"
      >
        <span
          class="slider-page-start"
          role="presentation"
        >{{
          Math.abs(currentSlide) + 1
        }}</span>
        <span
          class="slider-page-total"
          role="presentation"
        >{{
          props.amount
        }}</span>
      </p>
    </template>
    <template v-if="props.autoplay">
      <button
        type="button"
        :aria-controls="props.slidename"
        :aria-label="
          i18n.locale.value === 'ja'
            ? `スライドの自動再生を開始する`
            : `Start automatic playback of slides`
        "
        @click="startAutoPlay"
      >
        <slot name="autoplaystart"></slot>
      </button>
      <button
        type="button"
        :aria-controls="props.slidename"
        :aria-label="
          i18n.locale.value === 'ja'
            ? `スライドの自動再生を停止する`
            : `Stop automatic playback of slides`
        "
        @click="stopAutoPlay"
      >
        <slot name="autoplaystop"></slot>
      </button>
    </template>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  slidename: string
  itemsId: string[]
  arrow: boolean
  pagination: boolean
  amount: number
  loop: boolean
  center: boolean
  page: boolean
  autoplay: boolean
  interval: number
  gapPc: string
  gapSp: string
  widthPc: string
  widthSp: string
  duration: number
  easing: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear'
}>()
const i18n = useI18n()
const slider = ref<HTMLElement | null>(null) // スライド直上の親要素
const currentSlide = ref(0) // 現在のスライド番号
const disabledNext = ref(false) // ループしない場合に次へボタンをdisabledにするフラグ
const disabledPrevious = ref(false) // ループしない場合に前へボタンをdisabledにするフラグ
const previousX = ref(0) // アニメーションタイムラインのスライド開始位置
const nextX = ref(0) // アニメーションタイムラインのスライド終了位置
const clonedSlideBefore = ref<HTMLElement | null>(null) // ループする場合の前のスライド
const clonedSlideAfter = ref<HTMLElement | null>(null) // ループする場合の後のスライド

// 矢印でスライドを移動させる関数
const moveSlider = async (direction: 'previous' | 'next') => {
  if (!slider.value) {
    throw new Error('slider要素はnull')
  }
  if (direction === 'previous') {
    updateCurrentSlide('previous')
  } else if (direction === 'next') {
    updateCurrentSlide('next')
  }
  // loopがfalseのとき、currentIndex次第でボタンのdisabledを制御する
  if (!props.loop) {
    controlButton()
  }
  await slideX(slider.value, previousX.value, nextX.value)
  // アクティブなスライドを更新
  setActiveSlide()
}

// スライドアニメーション
const slideX = (target: HTMLElement | null, from: number, to: number) => {
  return target?.animate(
    [
      { transform: `translateX(${from}%)` },
      { transform: `translateX(${to}%)` },
    ],
    {
      duration: props.duration,
      iterations: 1,
      easing: props.easing,
      fill: 'both',
    },
  ).finished
}

// loopがfalseな場合にボタンのdisabledを制御する関数
const controlButton = () => {
  if (!slider.value) {
    throw new Error('slider要素はnull')
  }
  if (currentSlide.value === 0) {
    // 1枚目表示中は戻るボタンをdisabledにする
    disabledNext.value = false
    disabledPrevious.value = true
  } else if (currentSlide.value * -1 === props.amount - 1) {
    // 最後のスライド表示中は進むボタンをdisabledにする
    disabledNext.value = true
    disabledPrevious.value = false
  } else {
    // それ以外はdisabledを解除する
    disabledNext.value = false
    disabledPrevious.value = false
  }
}

// ページネーションでスライドを移動させる関数
const jumpSlider = async (index: number) => {
  if (!slider.value) {
    throw new Error('slider要素はnull')
  }
  updateCurrentSlide('pagination', index)
  controlButton()
  await slideX(slider.value, previousX.value, nextX.value)
  // アクティブなスライドを更新
  setActiveSlide()
}

// currentSlideを更新する関数
const updateCurrentSlide = (
  type: 'next' | 'previous' | 'pagination',
  index?: number,
) => {
  const backToFirstSlideNoLoop = () => {
    previousX.value = ((100 / props.amount) * props.amount - 1) * -1
    currentSlide.value = 0
    nextX.value = 0
  }

  const slideNextByArrowNoLoop = () => {
    previousX.value = (100 / props.amount) * currentSlide.value
    currentSlide.value -= 1
    nextX.value = (100 / props.amount) * currentSlide.value
  }

  const slideNextByArrowLoop = () => {
    if (currentSlide.value * -1 === props.amount - 1) {
      previousX.value = 100 / props.amount
      currentSlide.value = 0
      nextX.value = 0
    } else {
      previousX.value = (100 / props.amount) * currentSlide.value
      currentSlide.value -= 1
      nextX.value = (100 / props.amount) * currentSlide.value
    }
  }

  const slideBackByArrowNoLoop = () => {
    previousX.value = (100 / props.amount) * currentSlide.value
    currentSlide.value += 1
    nextX.value = (100 / props.amount) * currentSlide.value
  }

  const slideBackByArrowLoop = () => {
    if (currentSlide.value === 0) {
      previousX.value = (100 / props.amount) * props.amount * -1
      currentSlide.value = props.amount * -1 + 1
      nextX.value = (100 / props.amount) * currentSlide.value
    } else {
      previousX.value = (100 / props.amount) * currentSlide.value
      currentSlide.value += 1
      nextX.value = (100 / props.amount) * currentSlide.value
    }
  }

  const slideJumpByPagination = () => {
    previousX.value = (100 / props.amount) * currentSlide.value
    if (index === undefined) return
    currentSlide.value = index * -1
    nextX.value = (100 / props.amount) * currentSlide.value
  }

  // ループがfalseで最後のスライドの場合、最初に戻す(自動再生時のみこの条件に一致する)
  if (
    type === 'next'
    && props.loop === false
    && Math.abs(currentSlide.value) === props.amount - 1
  ) {
    return backToFirstSlideNoLoop()
  }

  // 矢印による次に進む操作かつループがfalseの場合
  if (type === 'next' && props.loop === false) {
    return slideNextByArrowNoLoop()
  }

  // 矢印による次に進む操作かつループがtrueの場合
  if (type === 'next' && props.loop) {
    return slideNextByArrowLoop()
  }

  // 矢印による前に戻る操作かつループがfalseの場合
  if (type === 'previous' && props.loop === false) {
    return slideBackByArrowNoLoop()
  }

  // 矢印による前に戻る操作かつループがtrueの場合
  if (type === 'previous' && props.loop) {
    return slideBackByArrowLoop()
  }

  // ページネーションによるスライド移動の場合
  if (type === 'pagination' && index !== undefined) {
    return slideJumpByPagination()
  }
}

// アクティブなスライドに-activeクラスを付与し、それ以外のスライドをアクセシビリティツリーから除外する関数
const setActiveSlide = () => {
  const sliderItems = document.querySelectorAll('.slider-item')
  const normalization = props.loop ? props.amount : 0
  sliderItems.forEach((item, index) => {
    if (index === Math.abs(currentSlide.value) + normalization) {
      item.classList.add('-active')
      item.removeAttribute('inert')
    } else {
      item.classList.remove('-active')
      item.setAttribute('inert', 'inert')
    }
  })
}

// 複製されたスライドからid属性を除去する関数
const removeId = () => {
  if (!clonedSlideBefore.value) {
    throw new Error('clonedSlideBefore要素はnull')
  }
  if (!clonedSlideAfter.value) {
    throw new Error('clonedSlideAfter要素はnull')
  }
  if (props.loop) {
    // clonedSlideBefore.valueの子要素の,slider-item全てからid属性を除去する
    const clonedSlideBeforeItems
      = clonedSlideBefore.value.querySelectorAll('.slider-item')
    clonedSlideBeforeItems.forEach((item) => {
      item.removeAttribute('id')
    })
    // clonedSlideBefore.valueの子要素の.slider-item全てからid属性を除去する
    const clonedSlideAfterItems
      = clonedSlideAfter.value.querySelectorAll('.slider-item')
    clonedSlideAfterItems.forEach((item) => {
      item.removeAttribute('id')
    })
  }
}

// ドラッグとスワイプでスライドを移動させる関数
let startX = 0
let moveX = 0
let isDragging = false
let movingRight = false

// ドラッグとスワイプ開始時の処理
const startDragging = (event: MouseEvent | TouchEvent) => {
  event.preventDefault()
  // ドラッグ開始地点を保存
  if (event instanceof MouseEvent) {
    startX = event.pageX
  } else if (event instanceof TouchEvent && event.touches[0]) {
    startX = event.touches[0].pageX
  } else {
    return
  }
  isDragging = true
}

// ドラッグ中の処理
const inDragging = (event: MouseEvent | TouchEvent) => {
  if (!isDragging) return
  event.preventDefault()
  // 移動距離を計算
  if (event instanceof MouseEvent) {
    moveX = (startX - event.pageX) * -1
  } else if (event instanceof TouchEvent && event.touches[0]) {
    moveX = (startX - event.touches[0].pageX) * -1
  } else {
    // 未知のイベント型に対するエラー処理
    return
  }
  // 左右どちらに移動しているか判別
  movingRight = moveX < 0
  if (!slider.value) {
    throw new Error('slider要素はnull')
  }
  slider.value.style.translate = `${moveX * 0.3}px`
}

// ドラッグ終了時の処理
const endDragging = async (event: MouseEvent | TouchEvent) => {
  if (!isDragging) return
  event.preventDefault()
  isDragging = false

  if (movingRight && moveX < -50) {
    // 現在のスライドが最後のスライドの場合はreturn
    if (!props.loop && Math.abs(currentSlide.value) === props.amount - 1) {
      if (!slider.value) {
        throw new Error('slider要素はnull')
      }
      slider.value.style.translate = '0px'
      return
    }
    await moveSlider('next')
  } else if (movingRight === false && moveX > 50) {
    // 現在のスライドが最初のスライドの場合はreturn
    if (props.loop === false && currentSlide.value === 0) {
      if (!slider.value) {
        throw new Error('slider要素はnull')
      }
      slider.value.style.translate = '0px'
      return
    }
    await moveSlider('previous')
  }

  if (!slider.value) {
    throw new Error('slider要素はnull')
  }
  slider.value.style.translate = '0px'

  stopAutoPlay()
  moveX = 0
}

// スライダーを自動再生する関数
let timer: number | undefined
const startAutoPlay = () => {
  timer = window.setInterval(() => {
    void moveSlider('next')
  }, props.interval)
}

// スライダーの自動再生を停止する関数
const stopAutoPlay = () => {
  if (!props.autoplay) return
  clearInterval(timer)
}

// スライダーを初期化
onMounted(() => {
  setActiveSlide()
  removeId()
  controlButton()

  if (props.autoplay) {
    startAutoPlay()
  }
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;
@use '#base/app/assets/styles/mixins' as m;

.slider-wrap {
  --slide-item-width: var(--width-pc);
  --slide-amount: var(--slide-amount);

  height: 100%;
  width: 100%;

  @include m.sp {
    --slide-item-width: var(--width-sp);
  }

  .slider-body {
    container-type: inline-size;
    height: 100%;
    overflow: clip;
    position: relative;
    width: 100%;

    .slider-inner {
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: calc(var(--slide-item-width) * var(--slide-amount) * 1%);

      .slider {
        display: flex;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        transform: translateX(0%);
        width: calc(var(--slide-item-width) * var(--slide-amount) * 1cqi);

        &.-center {
          translate: calc((100 - var(--slide-item-width)) / 2 * 1cqi);
        }

        &.-before {
          transform: translateX(-100%);
        }

        &.-after {
          transform: translateX(100%);
        }
      }

      :deep(.slider-item) {
        flex-shrink: 0;
        height: 100%;
        padding-inline: calc(var(--gap-pc) * 0.5);
        width: calc(100% / var(--slide-amount));

        @include m.sp {
          padding-inline: calc(var(--gap-sp) * 0.5);
        }

        .slider-content {
          height: 100%;
          width: 100%;
        }
      }
    }
  }
}
</style>
