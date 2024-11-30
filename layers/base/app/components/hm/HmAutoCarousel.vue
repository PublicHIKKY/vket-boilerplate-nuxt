<template>
  <div
    class="auto-carousel"
    role="presentation"
    :style="{
      '--direction': props.direction === 'right' ? 1 : -1,
      '--duration': props.duration,
    }"
  >
    <ul
      class="list -before"
      aria-hidden="true"
    >
      <slot />
    </ul>
    <ul class="list">
      <slot />
    </ul>
    <ul
      class="list -after"
      aria-hidden="true"
    >
      <slot />
    </ul>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  direction: 'right' | 'left'
  duration: string
}>()
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;
@use '#base/app/assets/styles/mixins' as m;

.auto-carousel {
  display: flex;
  overflow: clip;
  position: relative;
  width: 100%;

  > .list {
    animation: slide var(--duration) linear infinite;
    display: flex;
    flex-shrink: 0;
    translate: -100% 0;
    width: max-content;
  }
}

@keyframes slide {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(calc(100% * var(--direction)));
  }
}
</style>
