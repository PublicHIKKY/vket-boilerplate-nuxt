<i18n lang="yaml">
ja:
  hoge: ほげ
en:
  hoge: hoge
</i18n>

<template>
  <div class="ht-top" />
</template>

<script setup lang="ts">
//
</script>

<style lang="scss" scoped>
@use '#derived-main/app/assets/styles/variables' as v;
@use '#derived-main/app/assets/styles/mixins' as m;

.ht-top {
  width: 100%;
  height: 100%;
}
</style>
