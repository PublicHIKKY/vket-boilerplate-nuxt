<template>
  <HaDialog
    class="hm-popup"
    @closeDialog="closeDislog"
  >
    <template v-if="title">
      <span class="hm-popup-title">
        {{ title }}
      </span>
    </template>
    <template v-if="description">
      <p class="hm-popup-description">
        {{ description }}
      </p>
    </template>
    <template v-if="cancelText || confirmText">
      <div class="hm-popup-wrapper">
        <template v-if="cancelText">
          <div class="hm-popup-button">
            <HmButton
              color="warning"
              class="item"
              @click="onCancel"
            >
              {{ cancelText }}
            </HmButton>
          </div>
        </template>
        <template v-if="confirmText">
          <div class="hm-popup-button">
            <HmButton
              class="item"
              @click="onConfirm"
            >
              {{ confirmText }}
            </HmButton>
          </div>
        </template>
      </div>
    </template>
  </HaDialog>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
    description?: string
    cancelText?: string
    confirmText?: string
  }>(),
  {
    title: '',
    description: '',
    cancelText: '',
    confirmText: '',
  },
)

const emits = defineEmits<{
  (e: 'close' | 'cancel' | 'confirm'): void
}>()

const closeDislog = () => {
  emits('close')
}
const onCancel = () => {
  emits('cancel')
}
const onConfirm = () => {
  emits('confirm')
}
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/variables' as v;

.hm-popup {
  &:deep(.dialog-window) {
    width: fit-content;
    max-width: 90%;
    height: auto;
  }
}

.hm-popup-title {
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;
  color: v.$black-1;
  letter-spacing: 0.01em;
}

.hm-popup-description {
  width: 100%;
  height: fit-content;
  margin-top: 32px;

  font-size: 16px;
  font-weight: 400;
  line-height: 125%;
  color: v.$black-1;
}

.hm-popup-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin-top: 32px;
}

.hm-popup-button {
  width: fit-content;
  margin: 0 12px;
}
</style>
