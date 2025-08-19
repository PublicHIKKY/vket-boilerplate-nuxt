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
  $height: 2px;

  cursor: pointer;
  position: relative;
  width: 30px;
  height: 20px;

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }

  .line,
  &::before,
  &::after {
    content: '';

    position: absolute;

    display: block;

    width: 100%;
    height: $height;

    background: v.$white;

    transition: transform ease 0.1s;
  }

  .line {
    top: 50%;
  }

  &.-open {
    &::before {
      top: 50%;
      transform: rotateZ(45deg);
    }

    &::after {
      top: 50%;
      transform: rotateZ(-45deg);
    }

    .line {
      display: none;
    }
  }
}
</style>
