<template>
  <span class="hm-icon-user">
    <HaImage
      class="image"
      :src="props.src"
      no-image="https://via.placeholder.com/150"
      :draggable="false"
    />
  </span>
</template>

<script lang="ts" setup>
type Props = {
  src: string
}

const props = defineProps<Props>()
</script>

<style lang="scss" scoped>
// NOTE:
// 汎用性を持たせるためにサイズについては、srcに設定した画像サイズを可能な範囲で反映するように作成しています。
// プロジェクトの要件などで「設定した画像のサイズに関わらず固定の値を設定したい」場合は適宜CSSを変更してください。
.hm-icon-user {
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  display: inline-block;
  min-width: 24px;
  overflow: hidden;
  user-select: none;

  > .image {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
}
</style>
