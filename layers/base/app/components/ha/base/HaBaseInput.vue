<template>
  <input
    :id="props.id"
    v-bind="valueProp"
    class="ha-base-input"
    :type="props.type"
    :accept="props.accept"
    :autocomplete="props.autocomplete"
    :autofocus="props.autofocus"
    :capture="capture_"
    :checked="props.checked"
    :disabled="props.disabled"
    :list="props.list"
    :max="props.max"
    :maxLength="props.maxLength"
    :min="props.min"
    :minLength="props.minLength"
    :multiple="props.multiple"
    :name="props.name"
    :placeholder="props.placeholder"
    :readonly="props.readonly"
    :required="props.required"
    :size="props.size"
    :files="props.files"
    @input="onInput"
    @change="onChange"
  />
</template>

<script setup lang="ts">
export type InputType =
  | 'button'
  | 'checkbox'
  | 'email'
  | 'file'
  | 'number'
  | 'password'
  | 'radio'
  | 'search'
  | 'tel'
  | 'text'
  | 'url'
  | 'date'
  | 'datetime-local'
  | 'time'

type Props = {
  type: InputType
  accept?: string
  autocomplete?: string
  autofocus?: boolean
  capture?: boolean | 'user' | 'environment'
  checked?: boolean
  disabled?: boolean
  id?: string
  list?: string
  max?: number | string
  maxLength?: number
  min?: number | string
  minLength?: number
  multiple?: boolean
  name?: string
  placeholder?: string
  readonly?: boolean
  required?: boolean
  size?: number
  value?: string | number | boolean
  modelValue?: string | number | boolean
  files?: FileList | undefined
}
type Emits = {
  (
    e: 'update:modelValue' | 'update:value',
    eventValue: string | number | boolean
  ): void
  (e: 'input' | 'change', event: Event): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const typeofInputValue = () => {
  if (props.type === 'checkbox') return 'boolean'

  if (props.type === 'radio' && typeof props.value === 'number') return 'number'

  return 'string'
}

const onInput = (event: Event) => {
  emit('input', event)
  if (event.target instanceof HTMLInputElement) {
    const returnType = typeofInputValue()

    const checked = event.target.checked
    if (returnType === 'boolean') {
      emit('update:modelValue', checked)
      emit('update:value', checked)
      return
    }

    const value = event.target.value
    if (returnType === 'number') {
      emit('update:modelValue', Number(value))
      emit('update:value', Number(value))
      return
    }

    emit('update:modelValue', value)
    emit('update:value', value)
  }
}

const onChange = (event: Event) => {
  emit('change', event)
}

const valueProp = computed(() => {
  /*
   * props.value の型にbooleanが含まれているからかflagとして解釈されている？
   * 指定しない時のデフォルト値がundefinedでなくfalseになってつらいので対処
   */
  if (props.type === 'file' && props.value === false) return {}
  if (props.modelValue !== undefined) return { value: props.modelValue }
  return {
    value: props.value,
  }
})

/**
 * https://developer.mozilla.org/ja/docs/Web/HTML/Attributes/capture
 * capture属性はどうも論理属性でなくなっていて？  falseでもカメラが起動するので対応
 */
const capture_ = computed<'user' | 'environment' | true | undefined>(() => {
  switch (props.capture) {
    case false:
      return undefined
    default:
      return props.capture
  }
})
</script>

<style lang="scss" scoped>
.ha-base-input {
  display: block;
  max-height: 100%;
  max-width: 100%;
}
</style>
