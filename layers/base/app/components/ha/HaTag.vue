<template>
  <span
    class="ha-tag"
    :class="[
      `-${category}`,
      {
        '-disabled': disabled,
        '-clickable': clickable,
      },
    ]"
    :disabled="disabled"
    @click="onClick"
  >
    <slot />
  </span>
</template>

<script lang="ts">
import { ValueOf } from '#base/app/utils/types/types'
/**
 * src/components/ha/HaTag.vueにて
 * TAG_TYPEをscript setup内のローカルで宣言するとテストで落ちる。
 * その為、scriptタグを別で設置して宣言する
 * ※このscriptタグにはsetupは付けないこと。prettierで同一scriptタグに整形される為。
 */

const TAG_TYPE = {
  PRIMARY: 'primary',
  PINK: 'pink',
  OUTLINE: 'outline',
  GRAY: 'gray',
  DANGER: 'danger',
} as const
</script>

<script setup lang="ts">
type Props = {
  disabled?: boolean
  category?: ValueOf<typeof TAG_TYPE>
  clickable?: boolean
}

type Emits = {
  (emit: 'click'): void
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  category: TAG_TYPE.PRIMARY,
})

const emits = defineEmits<Emits>()

const onClick = () => {
  if (props.disabled) return false
  return emits('click')
}
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;
@use 'sass:color';

.ha-tag {
  border-radius: 4px;
  display: inline-block;
  font-size: 12px;
  line-height: 1;
  padding: v.space(1) v.space(2);
  transition: color 0.2s ease, background-color 0.2s ease;
  width: fit-content;

  &.-clickable {
    cursor: pointer;
  }

  &.-primary {
    background-color: v.$primary-color;
    color: v.$white;
    font-weight: 600;

    &.-clickable:hover {
      background-color: v.$yellow;
      box-shadow: 0 0 6px v.$yellow;
    }

    &.-disabled {
      background-color: v.$button-disabled-color;
      color: v.$gray-3;
    }
  }

  &.-pink {
    background-color: v.$pink;
    color: v.$white;

    &.-clickable:hover {
      background-color: color.adjust(
        v.$pink,
        $saturation: 10%,
        $lightness: 10%
      );
      box-shadow: 0 0 6px v.$pink;
    }

    &.-disabled {
      background-color: v.$button-disabled-color;
      color: v.$gray-3;
    }
  }

  &.-outline {
    background-color: transparent;
    border: v.$pink 1px solid;
    color: v.$pink;

    &.-clickable:hover {
      background-color: v.$pink;
      color: v.$white;
    }

    &.-disabled {
      background-color: v.$button-disabled-color;
      color: v.$gray-3;
    }
  }

  &.-gray {
    background-color: v.$gray;
    color: v.$white;

    &.-clickable:hover {
      background-color: color.adjust(
        v.$gray,
        $saturation: 10%,
        $lightness: 10%
      );
    }

    &.-disabled {
      background-color: v.$button-disabled-color;
      color: v.$gray-3;
    }
  }

  &.-danger {
    background-color: v.$red;
    color: v.$white;

    &.-clickable:hover {
      background-color: color.adjust(v.$red, $saturation: 10%, $lightness: 10%);
    }

    &.-disabled {
      background-color: v.$button-disabled-color;
      color: v.$gray-3;
    }
  }
}
</style>
