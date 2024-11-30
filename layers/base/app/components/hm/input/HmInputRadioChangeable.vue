<template>
  <div class="hm-input-radio-changeable">
    <div
      v-for="option in props.options"
      :key="option.value"
      ref="radiobuttons"
      class="radio"
    >
      <HaBaseInput
        :id="option.value"
        class="input"
        type="radio"
        :name="props.name"
        :value="option.value"
        :checked="option.checked"
        required
        @change="onChange($event)"
      />
      <label
        :for="option.value"
        class="label"
      >
        {{ option.label }}
      </label>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { z } from 'zod'

type Radio = {
  label: string
  value: string
  checked?: boolean
}

type Props = {
  name: string
  options: Radio[]
}
const props = defineProps<Props>()

const radiobuttons = ref<HTMLDivElement[]>()

/** props.optionsを監視し、親コンポーネントでの変更をラジオボタンに反映する */
watch(props.options, (_next, _prev) => {
  // チェックされているオブジェクトを探す
  const checkedOptions
    = props.options.find(element => element.checked)
    ?? raiseError('HmInputRadioChangeable: watch: checkedOptions')

  // チェック対象を探す
  const buttons
    = radiobuttons.value
    ?? raiseError('HmInputRadioChangeable: watch: radiobuttons')
  const checkTarget
    = buttons.find(
      // チェックされているオブジェクトとidが同じものがチェック対象
      element => element.children[0]?.id === checkedOptions?.value,
    ) ?? raiseError('HmInputRadioChangeable: watch: checkTarget')

  // 探したチェック対象をチェック済にする
  const checkbox = z
    .object({ checked: z.boolean() })
    .parse(checkTarget.children[0])
  checkbox.checked = true
})

type Emits = {
  (e: 'change', value: string): void
}
const emit = defineEmits<Emits>()
const onChange = (e: Event) => {
  if (e.target instanceof HTMLInputElement) {
    emit('change', e.target.value)
  }
}
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;

.hm-input-radio-changeable {
  display: flex;
  width: 100%;

  .radio {
    flex: 1;

    > .label {
      background-color: v.$navy-1;
      border: solid 1px v.$navy-2;
      cursor: pointer;
      display: block;
      height: 100%;
      padding: v.space(2) 0;
      text-align: center;
      user-select: none;

      &:hover {
        background-color: v.$green-4;
      }
    }
  }
}

.input {
  display: none;

  &:checked {
    + .label {
      background-color: v.$green-4;
      border-color: v.$blue;
    }
  }
}
</style>
