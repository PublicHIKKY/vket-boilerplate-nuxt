<!--
HaDialogとの違いとして、HaDialogElementは別階層の別要素のz-indexの影響により、それよりも下に表示されてしまう
と言った現象が起きません(dialog要素は常に最前面に表示される)。
 -->
<template>
  <!-- ダイアログを開くボタン -->
  <button
    class="open"
    aria-expanded="false"
    @click="openDialog"
  >
    <slot name="open">
      <span class="text">ダイアログを開く</span>
    </slot>
  </button>
  <!-- ダイアログ -->
  <dialog
    ref="dialog"
    class="ha-dialog-element"
  >
    <button
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
    </button>
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
// aria-label用のi18n
const i18n = useI18n()

// dialog要素をrefにする
const dialog = ref<HTMLDialogElement>()

// dialogを開く関数
const openDialog = () => {
  if (!dialog.value) {
    throw new Error('dialog要素はnull')
  }
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
}

// ダイアログ内のフォーカスを制御する
const close = ref<HTMLElement>()
const handleEndFocus = () => {
  close.value?.focus()
}

onMounted(() => {
  // ダイアログが開いている状態でESCキーを押すとダイアログを閉じる
  window.addEventListener('keydown', (e) => {
    if (!dialog.value) {
      throw new Error('dialog要素はnull')
    }
    else if (dialog.value.open && e.key === 'Escape') {
      closeDialog()
    }
  })
  // dialogのbackdropをクリックしたらダイアログを閉じる
  dialog.value?.addEventListener('click', (e) => {
    if (!dialog.value) {
      throw new Error('dialog要素はnull')
    }
    else if (e.target === dialog.value) {
      closeDialog()
    }
  })
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;
@use '#base/app/assets/styles/mixins' as m;

.open {
  cursor: pointer;
}

.ha-dialog-element {
  background-color: rgb(
    0 0 0 / 0%
  ); // dialogにデフォルトで指定される白の背景色を透明にする

  height: 95%;
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
    height: 100%;
    overflow-y: auto;
    width: 100%;
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
