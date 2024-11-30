<template>
  <div class="ha-textarea">
    <label
      class="label"
      :class="[errorMessage ? '-error' : '']"
    >
      <template v-if="counter">
        <span class="counter">{{ count }}</span>
      </template>
      <textarea
        v-model="text"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :rows="rows"
        class="input"
      />
    </label>
    <p :class="['error-container', { '-hide': hideDetails }]">
      <span
        v-if="errorMessage"
        class="error"
      >{{ errorMessage }}</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useField } from 'vee-validate'
import { z, ZodEffects, ZodType, ZodTypeDef } from 'zod'

type FieldInput = string | number | null

const props = withDefaults(
  defineProps<{
    placeholder?: string
    type?: string
    validatorName?: string
    validatorRules?:
      | ZodType<string, ZodTypeDef, FieldInput>
      | ZodEffects<ZodType<string, ZodTypeDef, FieldInput>>
    required?: boolean
    modelValue?: string | number
    disabled?: boolean
    rows?: number
    counter?: boolean | { max: number }
    hideDetails?: boolean
    keepValueOnUnmount?: boolean
  }>(),
  {
    placeholder: 'Input Text',
    type: 'text',
    validatorName: 'FileInput',
    validatorRules: undefined,
    required: false,
    modelValue: '',
    disabled: false,
    rows: 5,
    counter: false,
    hideDetails: false,
    keepValueOnUnmount: false,
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue' | 'input', text: string): void
  (e: 'validate', isValid: boolean): void
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

const text = computed({
  get(): string {
    if (fieldValue.value === null) {
      return ''
    }
    return '' + fieldValue.value
  },
  set(text: string): void {
    emit('update:modelValue', text)
    emit('input', text)
    fieldValue.value = text
    emit('validate', !!errorMessage.value)
  },
})

/** 肩に表示する文字数カウント文字列 */
const count = computed((): string | number => {
  const inputLength = text.value.length
  const max = typeof props.counter === 'object' ? props.counter.max : undefined
  const maxRuleLength = max ?? getMax(props.validatorRules?._def)
  return maxRuleLength ? `${inputLength}/${maxRuleLength}` : inputLength
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;

.ha-textarea {
  > .label {
    background-color: v.$white;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    display: block;
    position: relative;
    width: 100%;

    &:disabled {
      border-color: rgb(0 0 0 / 12%);
    }

    &:active,
    &:focus,
    &:hover,
    &:focus-within {
      border-color: v.$primary-color;

      .ha-textarea {
        &__input {
          caret-color: v.$primary-color;
        }
      }
    }

    &.-error {
      border-color: v.$red;

      > .input {
        caret-color: v.$red;
      }
    }
  }

  > .label > .counter {
    display: block;
    font-size: 11px;
    position: absolute;
    right: 0;
    text-align: right;
    top: -18px;
  }

  > .label > .input {
    color: v.$black;
    font-size: 16px;
    line-height: 24px;
    padding: 9px 12px 11px;
    width: 100%;

    &::placeholder {
      color: v.$gray-1;
    }

    &::selection {
      background-color: v.$primary-color;
      color: v.$white;
    }
  }

  > .error-container {
    display: block;
    margin-top: 8px;
    min-height: 20px;

    > .error {
      color: v.$red;
      display: block;
      font-size: 12px;
      font-weight: 400;
      width: fit-content;
    }

    &.-hide {
      display: none;
      margin-top: 0;
      min-height: auto;
    }
  }
}
</style>
