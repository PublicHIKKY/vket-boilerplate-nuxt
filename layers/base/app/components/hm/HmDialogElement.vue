<!--
HaDialogとの違いとして、HmDialogElementは別階層の別要素のz-indexの影響により、それよりも下に表示されてしまう
と言った現象が起きません(dialog要素は常に最前面に表示される)。
 -->
<template>
  <!-- ダイアログを開くボタン -->
  <component
    :is="props.openButtonHtmlTag"
    :tabindex="props.openButtonHtmlTag !== 'button' ? 0 : undefined"
    class="open"
    aria-expanded="false"
    @click.stop="openDialog"
  >
    <slot name="open">
      <span class="text">ダイアログを開く</span>
    </slot>
  </component>
  <!-- ダイアログ -->
  <template v-if="isActive">
    <dialog
      ref="dialog"
      class="hm-dialog-element"
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
          <!-- FIXME: アイコンライブラリが使えない。。。 -->
          <!-- <RiCloseLine class="icon" /> -->
          ×
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
</template>

<script lang="ts" setup>
// import RiCloseLine from '~icons/ri/close-line'

type Props = {
  openButtonHtmlTag?: string
  closeButtonHtmlTag?: string
}
const props = withDefaults(defineProps<Props>(), {
  openButtonHtmlTag: 'button',
  closeButtonHtmlTag: 'button',
})

// aria-label用のi18n
const i18n = useI18n()

// dialog要素をrefにする
const dialog = ref<HTMLDialogElement>()
const isActive = ref(false)

// dialogを開く関数
const openDialog = async () => {
  isActive.value = true
  await nextTick()
  if (!dialog.value) {
    throw new Error('dialog要素はnull')
  }
  dialog.value.addEventListener('keydown', (e) => {
    if (dialog.value?.open && e.key === 'Escape') {
      e.stopPropagation()
      closeDialog()
    }
  })
  dialog.value.showModal()
  // html要素とbody要素の両方にoverflowを記述
  document.body.style.overflow = 'hidden'
  document.documentElement.style.overflow = 'hidden'
}

// dialogを閉じる関数
const closeDialog = () => {
  if (!dialog.value) {
    throw new Error('dialog要素はnull')
  }
  dialog.value.close()
  // html要素とbody要素の両方にoverflowを記述
  document.body.style.overflow = ''
  document.documentElement.style.overflow = ''

  isActive.value = false
}

// ダイアログ内のフォーカスを制御する
const close = ref<HTMLElement>()
const handleEndFocus = () => {
  close.value?.focus()
}

defineExpose({
  closeDialog,
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;
@use '#base/app/assets/styles/mixins' as m;

.open {
  cursor: pointer;
}

.hm-dialog-element {
  background-color: rgb(
    0 0 0 / 0%
  ); // dialogにデフォルトで指定される白の背景色を透明にする

  height: max-content; // autoにすると、十分に画面縦幅がある場合でもダイアログに縦スクロールが生まれる場合がある
  left: 50%;
  max-height: initial; // dialogのデフォルトのmax-heightをリセット
  max-width: initial; // dialogのデフォルトのmax-widthをリセット
  opacity: 0;
  padding: 0; // dialogのデフォルトのpaddingをリセット
  position: fixed;
  top: 50%;
  translate: -50% -50%;
  width: 90%;

  &[open] {
    animation: fade-in 0.3s forwards;
  }

  &::backdrop {
    background-color: rgb(0 0 0 / 80%);
    cursor: pointer;
  }

  > .inner {
    background-color: #fff;
    height: max-content;
    max-height: 100vh; // 先祖要素にmax-contentを指定した場合、その子孫要素の単位に%を使うとwebkitで値が0になる場合があるためvhを使用
    overflow-y: auto;
    width: 100%;

    &:focus-visible {
      outline: none;
    }
  }

  > .close {
    aspect-ratio: 1;
    cursor: pointer;
    position: absolute;
    right: 2%;
    top: 2%;
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
