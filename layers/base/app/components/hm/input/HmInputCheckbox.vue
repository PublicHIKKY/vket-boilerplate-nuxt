<template>
  <label
    class="hm-input-checkbox"
    :class="{ ['-disabled']: disabled }"
  >
    <HaBaseInput
      v-model="innerValue"
      type="checkbox"
      class="button"
      :name="name"
      :disabled="disabled"
      :required="required"
      :checked="innerValue"
    />
    <div class="content">
      <slot />
    </div>
    <span
      v-if="validatorRules && errorMessage"
      class="error"
    >{{
      errorMessage
    }}</span>
  </label>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useField } from 'vee-validate'
import { z, ZodEffects, ZodType, ZodTypeDef } from 'zod'

const props = withDefaults(
  defineProps<{
    validatorName?: string
    validatorRules?:
      | ZodType<boolean, ZodTypeDef, boolean>
      | ZodEffects<ZodType<boolean, ZodTypeDef, boolean>>
    name: string
    modelValue: boolean
    required?: boolean
    disabled?: boolean
  }>(),
  {
    validatorName: 'checkbox',
    validatorRules: undefined,
    modelValue: false,
    required: false,
    disabled: false,
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue' | 'validate' | 'input', value: boolean): void
}>()

const { value: fieldValue, errorMessage } = useField<boolean>(
  toRef(props, 'validatorName'),
  props.validatorRules
    ? toTypedSchema(props.validatorRules)
    : toTypedSchema(z.unknown()),
  { initialValue: props.modelValue },
)

const innerValue = computed({
  get(): boolean {
    return props.modelValue
  },
  set(value: boolean): void {
    emit('update:modelValue', value)
    emit('input', value)
    fieldValue.value = value
    emit('validate', !!errorMessage.value)
  },
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;

.hm-input-checkbox {
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;

  &.-disabled {
    color: v.$gray-1;
    cursor: default;
  }

  > .button {
    display: none;
  }

  > .button:checked + .content {
    &::after {
      display: block;
    }
  }

  > .error {
    color: v.$red;
    display: block;
    font-size: 10px;
    font-weight: 400;
    margin-top: 8px;
    width: 100%;
  }

  > .content {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-left: 34px;
    position: relative;
    width: 100%;

    &::before {
      background-color: v.$white;
      border: 1px solid v.$primary-color;
      border-radius: 20%;
      content: '';
      height: 24px;
      left: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 24px;
    }

    &::after {
      border-left: 4px solid v.$primary-color;
      border-top: 4px solid v.$primary-color;
      content: '';
      display: none;
      height: 14px;
      left: 11px;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%) rotate(-140deg);
      width: 10px;
    }
  }

  &.-disabled > .content {
    &::before {
      border: 1px solid v.$gray-1;
    }

    &::after {
      border-left: 4px solid v.$gray-1;
      border-top: 4px solid v.$gray-1;
    }
  }

  // ヘッダー検索窓用設定
  &.-search {
    > .content {
      padding-left: 28px;

      &::before {
        background-color: transparent;
        border: 3px solid v.$gray-2;
        height: 20px;
        width: 20px;
      }

      &::after {
        left: 10px;
        top: 45%;
      }
    }

    > .error {
      display: none;
    }
  }
}
</style>
