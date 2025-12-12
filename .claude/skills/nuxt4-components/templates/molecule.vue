<i18n lang="yaml">
ja:
  title: タイトル
  description: 説明
en:
  title: Title
  description: Description
</i18n>

<template>
  <div class="hm-component-name">
    <div class="title">
      {{ i18n.t('title') }}
    </div>
    <div class="description">
      {{ i18n.t('description') }}
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
const i18n = useI18n()

type Props = {
  // Define your props here
}

type Emits = {
  (e: 'event-name'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()
</script>

<style scoped lang="scss">
@use '@/assets/styles/custom/variables_new' as v;
@use '@/assets/styles/mixins' as m;

.hm-component-name {
  padding: v.space(4);

  > .title {
    font-size: v.size-per-vw(24);
    font-weight: 700;
    margin-bottom: v.space(2);
  }

  > .description {
    font-size: v.size-per-vw(16);
    color: v.$secondary-color-3;
  }

  @include m.sp {
    padding: v.space(2);
  }
}
</style>
