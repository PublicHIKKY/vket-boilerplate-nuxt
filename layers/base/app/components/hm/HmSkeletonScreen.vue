<template>
  <div class="hm-skeleton-screen">
    <template v-if="isLoadingContent">
      <div class="skeleton-screen">
        <!-- NOTE: brタグはテキスト1行分の高さを確保している -->
        <br />
      </div>
    </template>
    <template v-else>
      <slot />
    </template>
  </div>
</template>

<script setup lang="ts">
type Props = {
  isLoadingContent: boolean
  borderRadius?: string
}

withDefaults(defineProps<Props>(), {
  borderRadius: '10px',
  height: 'auto',
  width: '100%',
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;
@use '#base/app/assets/styles/mixins' as m;

@keyframes loading {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}

.hm-skeleton-screen {
  width: 100%;
  height: inherit;

  /** @see https://nishinatoshiharu.com/css-skeleton-screen/#CSS の item__detail */
  > .skeleton-screen {
    position: relative;

    overflow: hidden;

    width: 100%;
    height: inherit;
    // stylelint-disable-next-line
    border-radius: v-bind(borderRadius);

    background: v.$gray-1;
  }

  .skeleton-screen::before {
    content: '';

    position: absolute;

    display: block;

    width: 100%;
    height: inherit;

    background: linear-gradient(
      90deg,
      transparent,
      rgb(255 255 255 / 50%),
      transparent
    );

    animation: loading 1s linear infinite;
  }
}
</style>
