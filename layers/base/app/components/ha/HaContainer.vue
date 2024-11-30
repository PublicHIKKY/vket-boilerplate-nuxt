<template>
  <div class="ha-container">
    <slot />
  </div>
</template>

<style lang="scss">
@use '#base/app/assets/styles/variables' as v;
@use '#base/app/assets/styles/mixins' as m;

.ha-container {
  margin: 0 auto;
  max-width: v.$pc-content-max-width;
  min-width: v.$pc-content-min-width;
  padding: 0 40px;

  @include m.sp {
    margin: 0;
    max-width: 100%;
    min-width: 100%;
    padding: 0;
    width: 100%;
  }
}
</style>
