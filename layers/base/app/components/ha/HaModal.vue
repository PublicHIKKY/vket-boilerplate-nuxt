<template>
  <!-- モーダルを開くボタン -->
  <button
    class="open"
    type="button"
    :aria-controls="'popup' + props.index.toString()"
    aria-expanded="false"
    @click="togglePopup"
  >
    <slot name="button">
      <span class="text">モーダルを開く</span>
    </slot>
  </button>
  <!-- モーダル -->
  <section
    :id="'popup' + props.index.toString()"
    class="ha-modal"
    :aria-hidden="popupVisibility"
  >
    <button
      ref="close"
      class="close"
      type="button"
      :aria-label="
        i18n.locale.value === 'ja' ? `モーダルを閉じる` : `Close the dialog`
      "
      @click="togglePopup"
    >
      <!-- 閉じるボタンのアイコン -->
      <slot name="close">
        <RiCloseLine class="icon" />
      </slot>
    </button>
    <div
      class="inner"
      role="presentation"
    >
      <!-- モーダルの背景 -->
      <div
        class="background"
        aria-hidden="true"
        @click="togglePopup"
      ></div>
      <div
        class="modal"
        role="presentation"
      >
        <slot name="inner">
          <div>モーダルの中身</div>
        </slot>
      </div>
    </div>
    <div
      tabindex="0"
      class="modal-end"
      @focus="handleEndFocus"
    ></div>
  </section>
</template>

<script lang="ts" setup>
import RiCloseLine from '~icons/ri/close-line'

type Props = {
  index: string
}
const props = defineProps<Props>()
const i18n = useI18n()

/* ポップアップの開閉はrefで制御 */
const popupVisibility = ref(true)
const togglePopup = () => {
  // html要素とbody要素の両方にoverflowを記述
  if (popupVisibility.value) {
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
    document.documentElement.style.overflow = ''
  }
  popupVisibility.value = !popupVisibility.value
}
/* フォーカスを制御する要素を定義 */
const close = ref<HTMLElement | null>(null)
// modal-endにフォーカスが当たったらcloseにフォーカスを移す(ポップアップを開いている最中にポップアップの外にアクセスさせない)
const handleEndFocus = () => {
  if (!close.value) {
    throw new Error('close要素はnull')
  }
  close.value.focus()
}

/* モーダルが開いている状態でESCキーを押すとモーダルを閉じる */
onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if (popupVisibility.value === false && e.key === 'Escape') {
      popupVisibility.value = true
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  })
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;
@use '#base/app/assets/styles/mixins' as m;

.open {
  display: block;
  max-width: 100%;
  width: max-content;
}

.ha-modal {
  inset: 0;
  position: fixed;
  z-index: 2147483647;

  &[aria-hidden='true'] {
    opacity: 0;
    transition: visibility 0.4s, opacity 0.4s;
    visibility: hidden;
  }

  &[aria-hidden='false'] {
    opacity: 1;
    transition: visibility 0.4s, opacity 0.4s;
    visibility: visible;
  }

  > .inner {
    inset: 0;
    position: absolute;

    > .background {
      inset: 0;
      position: absolute;
    }

    > .modal {
      height: 90vh;
      left: 50%;
      overflow-y: auto; /* モーダルの中身はスクロール可能に */
      position: absolute;
      top: 50%;
      translate: -50% -50%;
      width: 90%;
    }
  }

  > .close {
    aspect-ratio: 1/1;
    position: absolute;
    right: 2%;
    top: 2%;
    z-index: 2;

    > .icon {
      font-size: 24px;

      &:deep(path) {
        fill: v.$white;
      }
    }
  }
}
</style>
