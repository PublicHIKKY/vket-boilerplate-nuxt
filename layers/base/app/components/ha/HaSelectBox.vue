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
import { useField } from 'vee-validate'
import { ZodEffects, ZodType, ZodTypeDef } from 'zod/v3'

export type Option = {
  value: number | string | null
  text: string
  disabled?: boolean
}

type FieldInput = string | number | null

export type Props = {
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
}

export default defineComponent({
  name: 'HaSelectBox',
})
</script>

<script setup lang="ts">
const props = withDefaults(
  defineProps<Props>(),
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

const { value: fieldValue, errorMessage } = useField(
  toRef(props, 'validatorName'),
  props.validatorRules,
  {
    initialValue: props.modelValue,
    keepValueOnUnmount: props.keepValueOnUnmount,
    syncVModel: true,
  },
)

const innerValue = computed({
  get(): number | string | null {
    return fieldValue.value
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
    cursor: pointer;

    width: 100%;
    height: 44px;
    padding: 8px 16px;
    border: 1px solid v.$primary-color;
    border-radius: 4px;

    font-size: 15px;
    line-height: 1;
    color: v.$black;
    text-overflow: ellipsis;

    background-color: v.$white;
    outline: none;

    &::placeholder {
      color: v.$gray;
    }

    &:disabled {
      border-color: rgb(0 0 0 / 12%);
      color: v.$gray;
      opacity: 0.5;
      background-color: v.$gray-2;
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
    display: block;

    width: fit-content;
    min-height: 20px;
    margin-top: 8px;

    font-size: 10px;
    font-weight: 400;
    color: v.$red;
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
