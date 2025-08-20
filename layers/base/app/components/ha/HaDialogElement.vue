<!--
HaDialogとの違いとして、HaDialogElementは別階層の別要素のz-indexの影響により、それよりも下に表示されてしまう
と言った現象が起きません(dialog要素は常に最前面に表示される)。
-->
<template>
  <dialog
    ref="dialog"
    class="ha-dialog-element"
    :closedby
    @click.stop
  >
    <component
      :is="props.closeButtonHtmlTag"
      ref="close"
      class="close"
      :aria-label="
        i18n.locale.value === 'ja' ? `ダイアログを閉じる` : `Close the dialog`
      "
      @click="closeDialog"
    >
      <slot name="close">
        <RiCloseLine class="icon" />
      </slot>
    </component>
    <div
      tabindex="0"
      class="inner"
      role="presentation"
    >
      <slot name="inner" />
    </div>
    <div
      tabindex="0"
      @focus="handleEndFocus"
    ></div>
  </dialog>
</template>

<script lang="ts" setup>
import RiCloseLine from '~icons/ri/close-line'

export type Props = {
  closeButtonHtmlTag?: string
  closedby: 'any' | 'closerequest' | 'none' | undefined
}
const props = withDefaults(defineProps<Props>(), {
  closeButtonHtmlTag: 'button',
})

// aria-label用のi18n
const i18n = useI18n()

// dialog要素をrefにする
const dialog = ref<HTMLDialogElement>()
const isActive = ref(false)

const emit = defineEmits<{
  (e: 'open' | 'close'): void
}>()

// dialogを開く関数
const openDialog = () => {
  isActive.value = true
  if (!dialog.value) {
    throw new Error('dialog要素はnull (HaDialogElement openDialog)')
  }
  dialog.value.addEventListener('keydown', (e) => {
    if (dialog.value?.open && e.key === 'Escape') {
      e.stopPropagation()
      closeDialog()
    }
  })
  if (typeof dialog.value.showModal === 'function') {
    dialog.value.showModal()
  } else {
    console.error('dialog要素はHTMLDialogElementではありません (HaDialogElement openDialog)')
  }
  dialog.value.addEventListener('close', resetPageScrolling)
  onOpen()
}

// dialogを閉じる関数
const closeDialog = () => {
  if (!dialog.value) {
    throw new Error('dialog要素はnull (HaDialogElement closeDialog)')
  }
  dialog.value.close()
  onClose()
  isActive.value = false
}

const stopPageScrolling = () => {
  // html要素とbody要素の両方にoverflowを記述
  document.body.style.overflow = 'hidden'
  document.documentElement.style.overflow = 'hidden'
}

const resetPageScrolling = () => {
  // html要素とbody要素の両方のoverflowを元に戻す
  document.body.style.overflow = ''
  document.documentElement.style.overflow = ''
}

const onOpen = () => {
  stopPageScrolling()
  emit('open')
}

const onClose = () => {
  resetPageScrolling()
  emit('close')
}

// ダイアログ内のフォーカスを制御する
const close = ref<HTMLElement>()
const handleEndFocus = () => {
  close.value?.focus()
}

onBeforeUnmount(resetPageScrolling)

defineExpose({
  openDialog,
  closeDialog,
  isActive,
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;
@use '#base/app/assets/styles/mixins' as m;

.open {
  cursor: pointer;
}

.ha-dialog-element {
  position: fixed;
  top: 50%;
  left: 50%;
  translate: -50% -50%;

  width: 90%;
  max-width: initial; // dialogのデフォルトのmax-widthをリセット
  height: max-content; // autoにすると、十分に画面縦幅がある場合でもダイアログに縦スクロールが生まれる場合がある
  max-height: initial; // dialogのデフォルトのmax-heightをリセット
  padding: 0; // dialogのデフォルトのpaddingをリセット

  opacity: 0;
  background-color: rgb(
    0 0 0 / 0%
  ); // dialogにデフォルトで指定される白の背景色を透明にする

  &::backdrop {
    cursor: pointer;
    background-color: rgb(0 0 0 / 80%);
  }

  &[open] {
    animation: fade-in 0.3s forwards;
  }

  > .inner {
    overflow-y: auto;

    width: 100%;
    height: max-content;
    max-height: 100vh; // 先祖要素にmax-contentを指定した場合、その子孫要素の単位に%を使うとwebkitで値が0になる場合があるためvhを使用

    background-color: #fff;

    &:focus-visible {
      outline: none;
    }
  }

  > .close {
    cursor: pointer;

    position: absolute;
    top: 2%;
    right: 2%;

    aspect-ratio: 1;
    width: 20px;

    > .icon {
      font-size: 24px;

      &:deep(path) {
        fill: v.$black;
      }
    }
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
