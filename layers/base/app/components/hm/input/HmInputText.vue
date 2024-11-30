<template>
  <div
    tag="div"
    class="hm-input-text"
  >
    <label :class="['label', { '-error': error }, { '-small': small }]">
      <template v-if="counter">
        <span class="counter">{{ count }}</span>
      </template>
      <template v-if="isLazy">
        <template v-if="isTrim">
          <HaBaseInput
            v-model.trim.lazy="text"
            :type="type"
            :placeholder="placeholder"
            :disabled="disabled"
            :required="required"
            :min="typeof min === 'boolean' ? undefined : min"
            class="input"
            :class="{ '-small': small }"
            :name="name"
            :list="list"
            @keyup.enter="enter"
          />
        </template>
        <template v-else>
          <HaBaseInput
            v-model.lazy="text"
            :type="type"
            :placeholder="placeholder"
            :disabled="disabled"
            :required="required"
            :min="typeof min === 'boolean' ? undefined : min"
            class="input"
            :class="{ '-small': small }"
            :name="name"
            :list="list"
            @keyup.enter="enter"
          />
        </template>
      </template>
      <template v-else-if="isTrim">
        <HaBaseInput
          v-model.trim="text"
          :type="type"
          :placeholder="placeholder"
          :disabled="disabled"
          :required="required"
          :min="typeof min === 'boolean' ? undefined : min"
          class="input"
          :class="{ '-small': small }"
          :name="name"
          :list="list"
          @keyup.enter="enter"
        />
      </template>
      <template v-else>
        <HaBaseInput
          v-model="text"
          :type="type"
          :placeholder="placeholder"
          :disabled="disabled"
          :required="required"
          :min="typeof min === 'boolean' ? undefined : min"
          class="input"
          :class="{ '-small': small }"
          :name="name"
          :list="list"
          @keyup.enter="enter"
        />
      </template>
    </label>
    <template v-if="!noValidate">
      <p :class="['error-container', { '-hide': hideDetails }]">
        <template v-if="error">
          <span class="error">{{ error }}</span>
        </template>
      </p>
    </template>
  </div>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useField } from 'vee-validate'
import { z, ZodEffects, ZodType, ZodTypeDef } from 'zod'
import { InputType } from '#base/app/components/ha/base/HaBaseInput.vue'

type FieldInput = string | number | null

const props = withDefaults(
  defineProps<{
    placeholder?: string
    type?: InputType
    validatorName?: string
    validatorRules?:
      | ZodType<string, ZodTypeDef, FieldInput>
      | ZodEffects<ZodType<string, ZodTypeDef, FieldInput>>
    required?: boolean
    modelValue?: FieldInput
    disabled?: boolean
    counter?: boolean | { max: number }
    min?: number | boolean
    keyupEnter?: boolean
    isLazy?: boolean
    isTrim?: boolean
    small?: boolean
    name?: string | undefined
    error?: string | undefined
    hideDetails?: boolean
    list?: string | undefined
    keepValueOnUnmount?: boolean
    validateOnMount?: boolean
  }>(),
  {
    placeholder: 'Input Text',
    type: 'text',
    validatorName: 'FileInput',
    validatorRules: undefined,
    required: false,
    modelValue: '',
    disabled: false,
    counter: false,
    min: false,
    keyupEnter: false,
    isLazy: false,
    isTrim: false,
    small: false,
    name: undefined,
    error: undefined,
    hideDetails: false,
    list: undefined,
    keepValueOnUnmount: false,
    validateOnMount: false,
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'validate', isValid: boolean): void
  (e: 'enter'): void
}>()

/**
 * v-if によってフォームが再表示された場合など、
 * レンダリング時にmodelValueがから出ない場合にバリデーションを実行する
 */
const validateOnMount
  = props.validateOnMount
  && typeof props.modelValue?.toString() === 'string'
  && props.modelValue.toString().length > 0

const { value, errorMessage } = useField<FieldInput>(
  toRef(props, 'validatorName'),
  props.validatorRules
    ? toTypedSchema(props.validatorRules)
    : toTypedSchema(z.unknown()),
  { initialValue: props.modelValue, validateOnMount },
)

const text = computed({
  get(): string {
    if (value.value === null) return ''
    return '' + value.value
  },
  set(text: string): void {
    emit('update:modelValue', text)
    value.value = text
    emit('validate', !!errorMessage.value)
  },
})

/** バリデーションがない場合、エラー領域を出さない */
const noValidate = computed(
  () =>
    props.validatorName === 'FileInput' && props.validatorRules === undefined,
)

/** 肩に表示する文字数カウント文字列 */
const count = computed((): string | number => {
  const inputLength = text.value.length
  const max = typeof props.counter === 'object' ? props.counter.max : undefined
  const maxRuleLength = max ?? getMax(props.validatorRules?._def)
  return maxRuleLength ? `${inputLength}/${maxRuleLength}` : inputLength
})

/** 外からエラーメッセージを上書きするパターン用エスケープハッチ */
const error = computed(() => errorMessage.value || props.error)

function enter(): void {
  if (props.keyupEnter) {
    emit('enter')
  }
}
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;

.hm-input-text {
  > .label {
    background-color: v.$white;
    border: 1px solid #d5d5d5;
    border-radius: 4px;
    display: block;
    height: 44px;
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

      .hm-input-text {
        > .input {
          caret-color: v.$primary-color;
        }
      }
    }

    &.-error {
      border-color: v.$red;

      .hm-input-text {
        > .input {
          caret-color: v.$red;
        }
      }
    }

    &.-small {
      height: 30px;
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

    &:disabled {
      background: rgb(0 0 0 / 12.6%);
      height: 100%;
      padding: 0 12px;
    }

    &.-small {
      font-size: 12px;
      line-height: 28px;
      padding: 0 11px;
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
  }

  > .error-container.-hide {
    display: none;
    margin-top: 0;
    min-height: auto;
  }

  // カタログヘッダー検索窓用設定
  &.-search {
    > .label {
      border-color: v.$gray-2;

      > .input {
        padding-right: 72px;
      }
    }
  }
}

// input type=numberの時に出るスピンボタンを消す
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
}
</style>
