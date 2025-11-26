<!-- NOTE: 既存コンポーネントのため、現在のディレクトリルールに沿ってリファクタリングをする -->
<i18n lang="yaml">
ja:
  title: タイトル
  description: 説明
  confirm: 確認
  cancel: キャンセル
en:
  title: Title
  description: Description
  confirm: Confirm
  cancel: Cancel
</i18n>

<template>
  <div class="ho-component-name">
    <template v-if="title">
      <div class="title">
        {{ title }}
      </div>
    </template>
    <template v-if="description">
      <p class="description">
        {{ description }}
      </p>
    </template>

    <slot />

    <div class="button-wrapper">
      <HoButton
        category="outline"
        @click="onCancel"
      >
        <span class="text">{{ i18n.t('cancel') }}</span>
      </HoButton>
      <HoButton
        category="primary"
        @click="onConfirm"
      >
        <span class="text">{{ i18n.t('confirm') }}</span>
      </HoButton>
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  title?: string
  description?: string
}

type Emits = {
  (emit: 'confirm' | 'cancel'): void
}

const i18n = useI18n()
const props = defineProps<Props>()
const emits = defineEmits<Emits>()

const onConfirm = () => {
  emits('confirm')
}

const onCancel = () => {
  emits('cancel')
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/mixins' as m;

.ho-component-name {
  padding: v.space(6);
  background-color: v.$base-background-color;
  border-radius: 14px;

  > .title {
    margin-bottom: v.space(4);
    font-size: v.size-per-vw(32);
    font-weight: 700;
    text-align: center;
  }

  > .description {
    margin-bottom: v.space(6);
    font-size: v.size-per-vw(20);
    text-align: center;
    white-space: pre-wrap;
  }

  > .button-wrapper {
    display: flex;
    gap: v.space(4);
    justify-content: center;

    > .text {
      font-size: v.size-per-vw(20);
      font-weight: bold;
    }
  }

  @include m.sp {
    padding: v.space(4);
  }
}
</style>
