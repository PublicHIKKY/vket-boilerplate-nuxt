<template>
  <div class="ha-loading-icon" />
</template>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;

.ha-loading-icon {
  position: absolute;
  inset: 0;

  width: 36px;
  height: 36px;
  margin: auto;
  border: 2px solid v.$white;
  border-bottom-color: transparent;
  border-radius: 9999px;

  animation: ha-loading-icon 0.7s infinite linear;
}

@keyframes ha-loading-icon {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
