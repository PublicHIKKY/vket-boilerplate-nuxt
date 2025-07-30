<template>
  <label class="hm-input-radio">
    <HaBaseInput
      type="radio"
      class="button"
      :modelValue="value"
      :name="name"
      :checked="checked"
      @change="onChange"
    />
    <div class="content">
      <slot />
    </div>
  </label>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    name: string
    value: string | number
    checked?: boolean
  }>(),
  {
    checked: false,
  },
)
const emit = defineEmits<{
  (e: 'change', value: number): void
}>()
function onChange(e: Event): void {
  if (e.target instanceof HTMLInputElement) {
    emit('change', Number(e.target.value))
  }
}
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;

.hm-input-radio {
  cursor: pointer;
  display: inline-flex;
  align-items: center;

  > .button {
    display: none;
  }

  > .content {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    padding-left: 34px;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      border-radius: 50%;
    }

    &::before {
      left: 0;
      transform: translateY(-50%);

      width: 24px;
      height: 24px;
      border: 2px solid v.$blue;

      background-color: v.$white;
    }

    &::after {
      left: 12px;
      transform: translate(-50%, -50%);

      display: none;

      width: 14px;
      height: 14px;

      background-color: v.$primary-color;
    }
  }

  > .button:checked + .content::after {
    display: block;
  }
}
</style>
