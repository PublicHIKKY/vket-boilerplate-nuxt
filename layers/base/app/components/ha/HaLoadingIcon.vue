<template>
  <div class="ha-loading-icon" />
</template>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;

.ha-loading-icon {
  animation: ha-loading-icon 0.7s infinite linear;
  border: 2px solid v.$white;
  border-bottom-color: transparent;
  border-radius: 9999px;
  height: 36px;
  inset: 0;
  margin: auto;
  position: absolute;
  width: 36px;
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
