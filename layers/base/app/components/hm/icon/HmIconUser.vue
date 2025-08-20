<template>
  <span class="hm-icon-user">
    <HaImage
      class="image"
      :src="props.src"
      :noImage="noImage"
      :draggable="false"
    />
  </span>
</template>

<script lang="ts" setup>
import noImage from '#base/public/images/no-image_1x1.jpg'

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
  user-select: none;

  overflow: hidden;
  display: inline-block;

  aspect-ratio: 1 / 1;
  min-width: 24px;
  border-radius: 50%;

  > .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
