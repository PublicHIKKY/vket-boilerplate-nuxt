<template>
  <div
    class="ha-humberger-button"
    :class="{ ['-open']: isOpen }"
    @click="onClick"
  >
    <div class="line" />
  </div>
</template>

<script setup lang="ts">
type Props = {
  isOpen: boolean
}

type Emits = {
  (emit: 'click'): void
}

defineProps<Props>()

const emits = defineEmits<Emits>()

const onClick = () => emits('click')
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;
@use '#base/app/assets/styles/mixins' as m;

.ha-humberger-button {
  cursor: pointer;
  height: 20px;
  position: relative;
  width: 30px;

  $height: 2px;

  .line,
  &::before,
  &::after {
    background: v.$white;
    content: '';
    display: block;
    height: $height;
    position: absolute;
    transition: transform ease 0.1s;
    width: 100%;
  }

  .line {
    top: 50%;
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }

  &.-open {
    .line {
      display: none;
    }

    &::before {
      top: 50%;
      transform: rotateZ(45deg);
    }

    &::after {
      top: 50%;
      transform: rotateZ(-45deg);
    }
  }
}
</style>
