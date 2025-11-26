<i18n lang="yaml">
ja:
  noSchedules: この日の予定はありません
  scheduleCount: '{count}件の予定'
en:
  noSchedules: No schedules for this day
  scheduleCount: '{count} schedule(s)'
</i18n>

<template>
  <div class="hm-schedule-list">
    <div
      v-if="schedules.length === 0"
      class="hm-schedule-list__empty"
    >
      {{ t('noSchedules') }}
    </div>
    <TransitionGroup
      v-else
      name="list"
      tag="div"
      class="hm-schedule-list__items"
    >
      <HaScheduleItem
        v-for="schedule in sortedSchedules"
        :key="schedule.id"
        :schedule="schedule"
        @toggle="$emit('toggle', $event)"
        @edit="$emit('edit', $event)"
        @delete="$emit('delete', $event)"
      />
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import type { Schedule } from '@/models/schedule'

const { t } = useI18n()

const props = defineProps<{
  schedules: Schedule[]
}>()

defineEmits<{
  toggle: [id: string]
  edit: [schedule: Schedule]
  delete: [id: string]
}>()

const sortedSchedules = computed(() => {
  return [...props.schedules].sort((a, b) => {
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1
    }
    if (!a.startTime && !b.startTime) return 0
    if (!a.startTime) return 1
    if (!b.startTime) return -1
    return a.startTime.localeCompare(b.startTime)
  })
})
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/mixins' as m;

.hm-schedule-list {
  display: flex;
  flex-direction: column;
  gap: v.space(2);

  &__empty {
    padding: v.space(4);
    font-size: 14px;
    color: v.$text-note;
    text-align: center;
  }

  &__items {
    display: flex;
    flex-direction: column;
    gap: v.space(2);
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

.list-move {
  transition: transform 0.3s ease;
}
</style>
