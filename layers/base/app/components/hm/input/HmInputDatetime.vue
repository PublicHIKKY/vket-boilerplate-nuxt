<template>
  <div
    :name="validatorName"
    class="hm-input-datetime"
  >
    <label
      :class="[
        errorMessage
          ? 'hm-input-datetime__label --error'
          : 'hm-input-datetime__label',
      ]"
    >
      <HaBaseInput
        v-model="date"
        :type="type"
        :disabled="disabled"
        :required="required"
        :min="min"
        :max="max"
        class="hm-input-datetime__input"
        @keyup.enter="enter"
      />
    </label>
    <p class="error-container">
      <template v-if="errorMessage">
        <span class="error">{{ errorMessage }}</span>
      </template>
    </p>
  </div>
</template>

<script lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useField } from 'vee-validate'
import { z, ZodEffects, ZodType, ZodTypeDef } from 'zod'

export default defineComponent({
  name: 'HmInputDatetime',
})
</script>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type?: 'datetime-local' | 'date' | 'time'
    validatorName?: string
    validatorRules?:
      | ZodType<string, ZodTypeDef, string>
      | ZodEffects<ZodType<string, ZodTypeDef, string>>
    required?: boolean
    modelValue?: string
    disabled?: boolean
    min?: number
    max?: number
    keyupEnter?: boolean
    validateOnMount?: boolean
  }>(),
  {
    type: 'datetime-local',
    validatorName: 'dateLocal',
    validatorRules: undefined,
    required: false,
    modelValue: '',
    disabled: false,
    min: undefined,
    max: undefined,
    keyupEnter: false,
    validateOnMount: false,
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue' | 'input', value: string): void
  (e: 'validation', isValid: boolean): void
  (e: 'enter'): void
}>()

const { value: fieldValue, errorMessage } = useField<string>(
  toRef(props, 'validatorName'),
  props.validatorRules
    ? toTypedSchema(props.validatorRules)
    : toTypedSchema(z.unknown()),
  { initialValue: props.modelValue, validateOnMount: props.validateOnMount },
)

const date = computed({
  get: () => {
    if (props.modelValue === undefined) return ''
    if (props.type === 'datetime-local')
      return formatDate('YYYY-MM-DD HH:mm', props.modelValue)
    if (props.type === 'date') return formatDate('YYYY-MM-DD', props.modelValue)
    if (props.type === 'time')
      return formatDate('HH:mm', `1970-00-00 ${props.modelValue}`)
    return ''
  },
  set: (date: string) => {
    emit('update:modelValue', date)
    emit('input', date)
    fieldValue.value = date
    emit('validation', !!errorMessage.value)
  },
})

const enter = () => {
  if (props.keyupEnter) {
    emit('enter')
  }
}
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;

.hm-input-datetime {
  &__label {
    background-color: v.$white;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    display: block;
    height: 44px;
    padding: 9px 12px 11px;
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

      .hm-input-datetime {
        &__input {
          caret-color: v.$primary-color;
        }
      }
    }

    &.--error {
      border-color: v.$red;

      .hm-input-datetime {
        &__input {
          caret-color: v.$red;
        }
      }
    }
  }

  &__counter {
    display: block;
    font-size: 11px;
    position: absolute;
    right: 0;
    text-align: right;
    top: -18px;
  }

  &__input {
    font-size: 16px;
    line-height: 24px;
    width: 100%;

    &::placeholder {
      color: v.$gray-1;
    }

    &::selection {
      background-color: v.$primary-color;
      color: v.$white;
    }
  }
}

.error-container {
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
}
</style>
