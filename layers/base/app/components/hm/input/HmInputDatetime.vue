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
    <p
      class="error-container"
      :class="{ '-hide': hideDetails }"
    >
      <template v-if="errorMessage">
        <span class="error">{{ errorMessage }}</span>
      </template>
    </p>
  </div>
</template>

<script lang="ts">
import { useField } from 'vee-validate'
import { ZodEffects, ZodType, ZodTypeDef } from 'zod/v3'

export default defineComponent({
  name: 'HmInputDatetime',
})

export type Props = {
  type?: 'datetime-local' | 'date' | 'time'
  validatorName?: string
  validatorRules?:
    | ZodType<string, ZodTypeDef, string>
    | ZodEffects<ZodType<string, ZodTypeDef, string>>
  required?: boolean
  modelValue?: string
  disabled?: boolean
  // FIXME: 型定義をstringからyyyy-mm-ddなどinput type=dateが許容している物にする
  min?: number | string
  // FIXME: 型定義をstringからyyyy-mm-ddなどinput type=dateが許容している物にする
  max?: number | string
  keyupEnter?: boolean
  validateOnMount?: boolean
  hideDetails?: boolean
  error?: string | undefined
}
</script>

<script setup lang="ts">
const props = withDefaults(
  defineProps<Props>(),
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

const { value: fieldValue, errorMessage: _errorMessage } = useField(
  toRef(props, 'validatorName'),
  props.validatorRules,
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

const errorMessage = computed(() => {
  if (props.error) return props.error
  return _errorMessage.value
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
    position: relative;

    display: block;

    width: 100%;
    height: 44px;
    padding: 9px 12px 11px;
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
    position: absolute;
    top: -18px;
    right: 0;

    display: block;

    font-size: 11px;
    text-align: right;
  }

  &__input {
    width: 100%;
    font-size: 16px;
    line-height: 24px;

    &::placeholder {
      color: v.$gray-1;
    }

    &::selection {
      color: v.$white;
      background-color: v.$primary-color;
    }
  }
}

.error-container {
  display: block;
  min-height: 20px;
  margin-top: 8px;

  &.-hide {
    display: none;
  }

  > .error {
    display: block;

    width: fit-content;

    font-size: 12px;
    font-weight: 400;
    color: v.$red;
  }
}
</style>
