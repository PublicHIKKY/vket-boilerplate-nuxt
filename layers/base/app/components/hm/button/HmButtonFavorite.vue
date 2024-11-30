<template>
  <div
    class="hm-button-favorite"
    :class="{ '-disabled': disabled }"
  >
    <div
      class="button"
      @click="onClick"
    >
      <IconFavorite
        class="favorite-icon"
        :class="{ '-active': value, '-disabled': disabled }"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconFavorite from '#base/app/assets/icons/icon-heart.svg?component'

const props = withDefaults(
  defineProps<{
    value: boolean
    disabled?: boolean
  }>(),
  {
    disabled: false,
  },
)
const emit = defineEmits<{
  (event: 'input', value: boolean): void
}>()

const onClick = () => {
  if (props.disabled) return
  emit('input', !props.value)
}
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;

.hm-button-favorite {
  > .button {
    cursor: pointer;
    height: 24px;
    width: 24px;
  }

  &.-disabled {
    > .button {
      cursor: not-allowed;
    }
  }

  .button:deep(.body) {
    fill: none;
  }

  .button:deep(.border) {
    fill: #f5f5f5;
  }
}

.favorite-icon:not(.-disabled) {
  filter: drop-shadow(0 0 3px rgba(#fff, 0.75));

  .body {
    fill: #fff;
    transition: fill 0.1s ease-in;
  }

  &.-active,
  &:hover {
    .border,
    .body {
      fill: #f2509c;
    }
  }
}

.favorite-icon.-disabled {
  .body {
    fill: v.$gray-3;
    transition: fill 0.1s ease-in;
  }
}
</style>
