<template>
  <div
    :class="['hm-auto-carousel', `-${props.orientation}`]"
    role="presentation"
    :style="{
      '--direction': direction,
      '--duration': `${props.duration}s`,
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
const props = withDefaults(
  defineProps<{
    orientation?: 'horizontal-left' | 'horizontal-right' | 'vertical-top' | 'vertical-bottom'
    duration?: number
  }>(),
  {
    orientation: 'horizontal-left',
    duration: 30,
  },
)

const direction = computed(() => {
  return ['horizontal-left', 'vertical-top'].includes(props.orientation) ? -1 : 1
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;
@use '#base/app/assets/styles/mixins' as m;

.hm-auto-carousel {
  position: relative;
  overflow: clip;
  display: flex;

  &.-horizontal-left,
  &.-horizontal-right{
    flex-direction:row;

    >.list {
    transform:translateX(-100%);

    display: flex;
    flex-shrink: 0;

    width: max-content;

    animation: horizontal var(--duration) linear infinite;
    }
  }

  &.-vertical-top,
  &.-vertical-bottom{
    flex-direction:column;

    >.list {
    transform:translateY(-100%);

    display: flex;
    flex-direction:column;
    flex-shrink: 0;

    height: max-content;

    animation: vertical var(--duration) linear infinite;
    }
  }
}

@keyframes horizontal {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(calc(-100% + (100% * var(--direction))));
  }
}

@keyframes vertical {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(calc(-100% + (100% * var(--direction))));
  }
}
</style>
