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
      <span class="text">{{
        i18n.locale.value === 'ja' ? 'ダイアログを開く' : 'Open the dialog'
      }}</span>
    </slot>
  </component>
  <!-- ダイアログ -->
  <template v-if="isActive">
    <HaDialogElement
      ref="dialog"
      :closeButtonHtmlTag="props.closeButtonHtmlTag"
      :closedby="props.closedby"
    >
      <template
        v-if="$slots.close"
        #close
      >
        <slot name="close"></slot>
      </template>
      <template #inner>
        <slot name="inner"></slot>
      </template>
    </HaDialogElement>
  </template>
</template>

<script lang="ts" setup>
import HaDialogElement from '#base/app/components/ha/HaDialogElement.vue'
// import RiCloseLine from '~icons/ri/close-line'

export type Props = {
  openButtonHtmlTag?: string
  closeButtonHtmlTag?: string
  closedby?: 'any' | 'closerequest' | 'none' | undefined
}
const props = withDefaults(defineProps<Props>(), {
  openButtonHtmlTag: 'button',
  closeButtonHtmlTag: 'button',
  closedby: 'any',
})

// aria-label用のi18n
const i18n = useI18n()

// dialog要素をrefにする
const dialog = ref<InstanceType<typeof HaDialogElement>>()
const isActive = ref(false)

// dialogを開く関数
const openDialog = async () => {
  isActive.value = true
  await nextTick()
  if (!dialog.value) {
    throw new Error('dialogコンポーネントはnull (HmDialogElement openDialog)')
  }
  dialog.value.openDialog()
}

// dialogを閉じる関数
const closeDialog = () => {
  if (!dialog.value) {
    throw new Error('dialogコンポーネントはnull (HmDialogElement closeDialog)')
  }
  dialog.value.closeDialog()
  isActive.value = false
}

defineExpose({
  openDialog,
  closeDialog,
  isActive,
})
</script>

<style lang="scss" scoped>
.open {
  cursor: pointer;
}
</style>
