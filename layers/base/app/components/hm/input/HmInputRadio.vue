<template>
  <label class="hm-input-radio">
    <HaBaseInput
      type="radio"
      class="button"
      :value="value"
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
  align-items: center;
  cursor: pointer;
  display: inline-flex;

  > .button {
    display: none;
  }

  > .content {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-left: 34px;
    position: relative;
    width: 100%;

    &::before,
    &::after {
      border-radius: 50%;
      content: '';
      position: absolute;
      top: 50%;
    }

    &::before {
      background-color: v.$white;
      border: 2px solid v.$blue;
      height: 24px;
      left: 0;
      transform: translateY(-50%);
      width: 24px;
    }

    &::after {
      background-color: v.$primary-color;
      display: none;
      height: 14px;
      left: 12px;
      transform: translate(-50%, -50%);
      width: 14px;
    }
  }

  > .button:checked + .content::after {
    display: block;
  }
}
</style>
