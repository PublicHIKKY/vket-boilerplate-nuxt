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
  /** 高さ指定をしない場合、高さはテキスト1行分 */
  height?: string
  width?: string
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

  /** @see https://nishinatoshiharu.com/css-skeleton-screen/#CSS の item__detail */
  > .skeleton-screen {
    background: v.$gray-1;
    // stylelint-disable-next-line
    border-radius: v-bind(borderRadius);
    height: v-bind(height);
    overflow: hidden;
    position: relative;
    width: v-bind(width);
  }

  .skeleton-screen::before {
    animation: loading 1s linear infinite;
    background: linear-gradient(
      90deg,
      transparent,
      rgb(255 255 255 / 50%),
      transparent
    );
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    width: 100%;
  }
}
</style>
