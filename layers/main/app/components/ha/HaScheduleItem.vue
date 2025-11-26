<i18n lang="yaml">
ja:
  completed: 完了
  incomplete: 未完了
  noTime: 終日
en:
  completed: Completed
  incomplete: Incomplete
  noTime: All day
</i18n>

<template>
  <div
    class="ha-schedule-item"
    :class="{ 'ha-schedule-item--completed': schedule.completed }"
    :style="{ '--schedule-color': schedule.color }"
  >
    <div class="ha-schedule-item__checkbox">
      <input
        :id="`schedule-${schedule.id}`"
        type="checkbox"
        :checked="schedule.completed"
        @change="$emit('toggle', schedule.id)"
      />
    </div>
    <div class="ha-schedule-item__content">
      <span class="ha-schedule-item__title">{{ schedule.title }}</span>
      <span
        v-if="schedule.startTime"
        class="ha-schedule-item__time"
      >
        {{ schedule.startTime }}
        <template v-if="schedule.endTime">- {{ schedule.endTime }}</template>
      </span>
      <span
        v-else
        class="ha-schedule-item__time"
      >{{ t('noTime') }}</span>
    </div>
    <div class="ha-schedule-item__actions">
      <button
        class="ha-schedule-item__action ha-schedule-item__action--edit"
        type="button"
        @click="$emit('edit', schedule)"
      >
        <span class="visually-hidden">Edit</span>
        ✎
      </button>
      <button
        class="ha-schedule-item__action ha-schedule-item__action--delete"
        type="button"
        @click="$emit('delete', schedule.id)"
      >
        <span class="visually-hidden">Delete</span>
        ✕
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Schedule } from '@/models/schedule'

const { t } = useI18n()

defineProps<{
  schedule: Schedule
}>()

defineEmits<{
  toggle: [id: string]
  edit: [schedule: Schedule]
  delete: [id: string]
}>()
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/mixins' as m;

.ha-schedule-item {
  display: flex;
  gap: v.space(2);
  align-items: center;

  padding: v.space(2) v.space(3);
  border-left: 4px solid var(--schedule-color, v.$orange);
  border-radius: 4px;

  background: v.$navy-1;

  transition: opacity 0.2s ease;

  &--completed {
    opacity: 0.6;

    .ha-schedule-item__title {
      text-decoration: line-through;
    }
  }

  &__checkbox {
    flex-shrink: 0;

    input[type='checkbox'] {
      cursor: pointer;
      width: 18px;
      height: 18px;
      accent-color: var(--schedule-color, v.$orange);
    }
  }

  &__content {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: v.space(1);

    min-width: 0;
  }

  &__title {
    overflow: hidden;

    font-size: 14px;
    font-weight: 500;
    color: v.$white;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__time {
    font-size: 12px;
    color: v.$text-note;
  }

  &__actions {
    display: flex;
    flex-shrink: 0;
    gap: v.space(1);
  }

  &__action {
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 28px;
    height: 28px;
    padding: 0;
    border: none;
    border-radius: 4px;

    font-size: 14px;
    color: v.$text-note;

    background: transparent;

    transition: all 0.2s ease;

    @include m.hover {
      color: v.$white;
      background: v.$navy-2;
    }

    &--delete {
      @include m.hover {
        color: v.$white;
        background: v.$red;
      }
    }
  }
}

.visually-hidden {
  position: absolute;

  overflow: hidden;

  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;

  white-space: nowrap;

  clip-path: inset(50%);
}
</style>
