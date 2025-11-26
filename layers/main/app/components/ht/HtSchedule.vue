<i18n lang="yaml">
ja:
  pageTitle: スケジュール管理
  addNew: 新規追加
  selectedDate: '選択日: {date}'
  confirmDelete: この予定を削除してもよろしいですか？
en:
  pageTitle: Schedule Manager
  addNew: Add New
  selectedDate: 'Selected: {date}'
  confirmDelete: Are you sure you want to delete this schedule?
</i18n>

<template>
  <div class="ht-schedule">
    <header class="ht-schedule__header">
      <h1 class="ht-schedule__title">
        {{ t('pageTitle') }}
      </h1>
    </header>

    <div class="ht-schedule__content">
      <div class="ht-schedule__main">
        <HoScheduleCalendar
          v-model:selectedDate="selectedDate"
          :schedules="schedules"
        />

        <div class="ht-schedule__day-view">
          <div class="ht-schedule__day-header">
            <h2 class="ht-schedule__day-title">
              {{ formatDisplayDate(selectedDate) }}
            </h2>
            <button
              type="button"
              class="ht-schedule__add-btn"
              @click="openAddForm"
            >
              {{ t('addNew') }}
            </button>
          </div>

          <HmScheduleList
            :schedules="schedulesForSelectedDate"
            @toggle="toggleSchedule"
            @edit="openEditForm"
            @delete="deleteSchedule"
          />
        </div>
      </div>

      <Transition name="slide">
        <aside
          v-if="isFormOpen"
          class="ht-schedule__sidebar"
        >
          <HmScheduleForm
            :schedule="editingSchedule"
            :selectedDate="selectedDate"
            @submit="saveSchedule"
            @cancel="closeForm"
          />
        </aside>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Schedule, ScheduleFormData } from '@/models/schedule'

const { t, locale } = useI18n()

const schedules = ref<Schedule[]>([])
const selectedDate = ref(formatDate(new Date()))
const isFormOpen = ref(false)
const editingSchedule = ref<Schedule | null>(null)

const STORAGE_KEY = 'hikky-schedules'

onMounted(() => {
  loadSchedules()
})

const schedulesForSelectedDate = computed(() => {
  return schedules.value.filter(s => s.date === selectedDate.value)
})

function formatDate(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function formatDisplayDate(dateStr: string): string {
  const date = new Date(dateStr)
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'short',
  }
  return date.toLocaleDateString(locale.value === 'ja' ? 'ja-JP' : 'en-US', options)
}

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
}

function loadSchedules() {
  if (import.meta.client) {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      schedules.value = JSON.parse(saved)
    }
  }
}

function saveSchedulesToStorage() {
  if (import.meta.client) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(schedules.value))
  }
}

function openAddForm() {
  editingSchedule.value = null
  isFormOpen.value = true
}

function openEditForm(schedule: Schedule) {
  editingSchedule.value = schedule
  isFormOpen.value = true
}

function closeForm() {
  editingSchedule.value = null
  isFormOpen.value = false
}

function saveSchedule(data: ScheduleFormData) {
  const now = new Date().toISOString()

  if (editingSchedule.value) {
    const index = schedules.value.findIndex(s => s.id === editingSchedule.value!.id)
    if (index !== -1) {
      schedules.value[index] = {
        ...editingSchedule.value,
        ...data,
        updatedAt: now,
      }
    }
  } else {
    const newSchedule: Schedule = {
      id: generateId(),
      ...data,
      createdAt: now,
      updatedAt: now,
    }
    schedules.value.push(newSchedule)
  }

  saveSchedulesToStorage()
  closeForm()
}

function toggleSchedule(id: string) {
  const schedule = schedules.value.find(s => s.id === id)
  if (schedule) {
    schedule.completed = !schedule.completed
    schedule.updatedAt = new Date().toISOString()
    saveSchedulesToStorage()
  }
}

function deleteSchedule(id: string) {
  if (confirm(t('confirmDelete'))) {
    const index = schedules.value.findIndex(s => s.id === id)
    if (index !== -1) {
      schedules.value.splice(index, 1)
      saveSchedulesToStorage()
    }
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/mixins' as m;

.ht-schedule {
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  padding: v.space(4);

  background: v.$black;

  @include m.sp {
    padding: v.space(2);
  }

  &__header {
    margin-bottom: v.space(4);
  }

  &__title {
    margin: 0;
    font-size: 28px;
    font-weight: 700;
    color: v.$white;

    @include m.sp {
      font-size: 22px;
    }
  }

  &__content {
    display: flex;
    flex: 1;
    gap: v.space(4);

    @include m.sp {
      flex-direction: column;
    }
  }

  &__main {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: v.space(4);

    max-width: 800px;

    @include m.sp {
      max-width: 100%;
    }
  }

  &__day-view {
    display: flex;
    flex-direction: column;
    gap: v.space(3);

    padding: v.space(4);
    border-radius: 8px;

    background: v.$navy;
  }

  &__day-header {
    display: flex;
    gap: v.space(2);
    align-items: center;
    justify-content: space-between;
  }

  &__day-title {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: v.$white;
  }

  &__add-btn {
    cursor: pointer;

    padding: v.space(2) v.space(3);
    border: none;
    border-radius: 4px;

    font-size: 14px;
    font-weight: 500;
    color: v.$white;

    background: v.$orange;

    transition: all 0.2s ease;

    @include m.hover {
      background: v.$yellow;
    }
  }

  &__sidebar {
    flex-shrink: 0;
    width: 400px;

    @include m.sp {
      position: fixed;
      z-index: v.$zindex-dialog;
      top: 0;
      right: 0;
      bottom: 0;

      overflow-y: auto;

      width: 100%;
      max-width: 400px;

      box-shadow: -4px 0 20px rgb(0 0 0 / 50%);
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
