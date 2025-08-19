<template>
  <div class="layout -default">
    <HoTheHeader />
    <slot />
    <HoTheFooter />
  </div>
</template>

<style lang="scss" scoped>
.layout.-default {
  overflow-x: hidden;
}
</style>
