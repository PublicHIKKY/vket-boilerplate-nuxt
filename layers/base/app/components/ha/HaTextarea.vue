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
import { useField } from 'vee-validate'
import { ZodEffects, ZodType, ZodTypeDef } from 'zod/v3'

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

const fieldOptions = {
  initialValue: props.modelValue,
  keepValueOnUnmount: props.keepValueOnUnmount,
}

const { value: fieldValue, errorMessage } = useField(
  toRef(props, 'validatorName'), props.validatorRules, fieldOptions,
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
    position: relative;

    display: block;

    width: 100%;
    border: 1px solid #d5d5d5;
    border-radius: 3px;

    background-color: v.$white;

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
    position: absolute;
    top: -18px;
    right: 0;

    display: block;

    font-size: 11px;
    text-align: right;
  }

  > .label > .input {
    width: 100%;
    padding: 9px 12px 11px;

    font-size: 16px;
    line-height: 24px;
    color: v.$black;

    &::placeholder {
      color: v.$gray-1;
    }

    &::selection {
      color: v.$white;
      background-color: v.$primary-color;
    }
  }

  > .error-container {
    display: block;
    min-height: 20px;
    margin-top: 8px;

    > .error {
      display: block;

      width: fit-content;

      font-size: 12px;
      font-weight: 400;
      color: v.$red;
    }

    &.-hide {
      display: none;
      min-height: auto;
      margin-top: 0;
    }
  }
}
</style>
