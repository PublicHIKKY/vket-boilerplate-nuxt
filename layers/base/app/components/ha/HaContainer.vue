<template>
  <div class="ha-container">
    <slot />
  </div>
</template>

<style lang="scss">
@use '#base/app/assets/styles/variables' as v;
@use '#base/app/assets/styles/mixins' as m;

.ha-container {
  min-width: v.$pc-content-min-width;
  max-width: v.$pc-content-max-width;
  margin: 0 auto;
  padding: 0 40px;

  @include m.sp {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 0;
  }
}
</style>
