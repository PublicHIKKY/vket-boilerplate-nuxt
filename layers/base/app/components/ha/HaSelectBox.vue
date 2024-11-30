<template>
  <div class="ha-select-box">
    <select
      v-model="innerValue"
      :name="validatorName"
      :disabled="disabled"
      :required="required"
      class="select"
      :class="[{ '-error': !!errorMessage }, { '-small': small }]"
    >
      <option
        :disabled="disabledPlaceholder"
        :value="null"
      >
        {{ placeholder }}
      </option>
      <option
        v-for="(option, index) in options"
        :key="index"
        :disabled="option.disabled"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
    <span
      v-if="validatorRules && errorMessage"
      class="error"
    >{{
      errorMessage
    }}</span>
  </div>
</template>

<script lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useField } from 'vee-validate'
import { z, ZodEffects, ZodType, ZodTypeDef } from 'zod'

export type Option = {
  value: number | string | null
  text: string
  disabled?: boolean
}

export default defineComponent({
  name: 'HaSelectBox',
})
</script>

<script setup lang="ts">
type FieldInput = string | number | null

const props = withDefaults(
  defineProps<{
    modelValue?: number | string | null
    validatorName: string
    validatorRules?:
      | ZodType<string, ZodTypeDef, FieldInput>
      | ZodEffects<ZodType<string, ZodTypeDef, FieldInput>>
    options: readonly Option[]
    placeholder?: string
    disabledPlaceholder?: boolean
    disabled?: boolean
    required?: boolean
    small?: boolean
    keepValueOnUnmount?: boolean
  }>(),
  {
    modelValue: null,
    validatorRules: undefined,
    placeholder: '---Select---',
    disabledPlaceholder: false,
    disabled: false,
    required: false,
    small: false,
    keepValueOnUnmount: false,
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue' | 'input', value: number | string | null): void
}>()

const { value: fieldValue, errorMessage } = useField<FieldInput>(
  toRef(props, 'validatorName'),
  props.validatorRules
    ? toTypedSchema(props.validatorRules)
    : toTypedSchema(z.unknown()),
  {
    initialValue: props.modelValue,
    keepValueOnUnmount: props.keepValueOnUnmount,
  },
)

const innerValue = computed({
  get(): number | string | null {
    return props.modelValue
  },
  set(value: number | string | null): void {
    emit('update:modelValue', value)
    fieldValue.value = value
    emit('input', value)
  },
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;
@use '#base/app/assets/styles/mixins' as m;

.ha-select-box {
  position: relative;

  > .select {
    background-color: v.$white;
    border: 1px solid v.$primary-color;
    border-radius: 4px;
    color: v.$black;
    cursor: pointer;
    font-size: 15px;
    height: 44px;
    line-height: 1;
    outline: none;
    padding: 8px 16px;
    text-overflow: ellipsis;
    width: 100%;

    &::placeholder {
      color: v.$gray;
    }

    &:disabled {
      background-color: v.$gray-2;
      border-color: rgb(0 0 0 / 12%);
      color: v.$gray;
      opacity: 0.5;
    }

    &:focus {
      border-color: v.$primary-color;
    }

    &.-error {
      border: 2px solid v.$red;

      &:focus {
        border: 2px solid v.$red;
      }
    }

    &.-small {
      height: 30px;
      padding: 0 10px;
    }
  }

  > .error {
    color: v.$red;
    display: block;
    font-size: 10px;
    font-weight: 400;
    margin-top: 8px;
    min-height: 20px;
    width: fit-content;
  }

  @include m.sp {
    > .select {
      font-size: v.$base-font-size;
    }
  }

  // ヘッダー検索窓用設定
  &.-search {
    > .select {
      border-color: v.$gray-2;
    }

    > .error {
      display: none;
    }
  }
}
</style>
