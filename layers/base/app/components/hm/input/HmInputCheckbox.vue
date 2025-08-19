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
import { useField } from 'vee-validate'
import { ZodEffects, ZodType, ZodTypeDef } from 'zod/v3'

const props = withDefaults(
  defineProps<{
    validatorName?: string
    validatorRules?:
      | ZodType<boolean, ZodTypeDef, boolean>
      | ZodEffects<ZodType<boolean, ZodTypeDef, boolean>>
    name: string
    modelValue?: boolean
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

const { value: fieldValue, errorMessage } = useField(
  toRef(props, 'validatorName'),
  props.validatorRules,
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
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  &.-disabled {
    cursor: default;
    color: v.$gray-1;
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
    display: block;

    width: 100%;
    margin-top: 8px;

    font-size: 10px;
    font-weight: 400;
    color: v.$red;
  }

  > .content {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    padding-left: 34px;

    &::before {
      content: '';

      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);

      width: 24px;
      height: 24px;
      border: 1px solid v.$primary-color;
      border-radius: 20%;

      background-color: v.$white;
    }

    &::after {
      content: '';

      position: absolute;
      top: 50%;
      left: 11px;
      transform: translate(-50%, -50%) rotate(-140deg);

      display: none;

      width: 10px;
      height: 14px;
      border-top: 4px solid v.$primary-color;
      border-left: 4px solid v.$primary-color;
    }
  }

  &.-disabled > .content {
    &::before {
      border: 1px solid v.$gray-1;
    }

    &::after {
      border-top: 4px solid v.$gray-1;
      border-left: 4px solid v.$gray-1;
    }
  }

  // ヘッダー検索窓用設定
  &.-search {
    > .content {
      padding-left: 28px;

      &::before {
        width: 20px;
        height: 20px;
        border: 3px solid v.$gray-2;
        background-color: transparent;
      }

      &::after {
        top: 45%;
        left: 10px;
      }
    }

    > .error {
      display: none;
    }
  }
}
</style>
