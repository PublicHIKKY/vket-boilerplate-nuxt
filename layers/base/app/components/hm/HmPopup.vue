<template>
  <HaDialog
    class="hm-popup"
    @close-dialog="closeDislog"
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
    height: auto;
    max-width: 90%;
    width: fit-content;
  }
}

.hm-popup-title {
  color: v.$black-1;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.01em;
  line-height: 150%;
}

.hm-popup-description {
  color: v.$black-1;
  font-size: 16px;
  font-weight: 400;
  height: fit-content;
  line-height: 125%;
  margin-top: 32px;
  width: 100%;
}

.hm-popup-wrapper {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 32px;
  width: 100%;
}

.hm-popup-button {
  margin: 0 12px;
  width: fit-content;
}
</style>
