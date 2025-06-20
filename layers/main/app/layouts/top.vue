<template>
  <div class="layout -top">
    <HoTheHeader />
    <slot />
    <HoTheFooter />
  </div>
</template>

<style lang="scss" scoped>
.layout.-top {
  overflow-x: hidden;
}
</style>
