<i18n lang="yaml">
ja:
  today: 今日
  sun: 日
  mon: 月
  tue: 火
  wed: 水
  thu: 木
  fri: 金
  sat: 土
  prevMonth: 前月
  nextMonth: 翌月
en:
  today: Today
  sun: Sun
  mon: Mon
  tue: Tue
  wed: Wed
  thu: Thu
  fri: Fri
  sat: Sat
  prevMonth: Previous month
  nextMonth: Next month
</i18n>

<template>
  <div class="ho-schedule-calendar">
    <div class="ho-schedule-calendar__header">
      <button
        type="button"
        class="ho-schedule-calendar__nav-btn"
        :aria-label="t('prevMonth')"
        @click="prevMonth"
      >
        ◀
      </button>
      <h2 class="ho-schedule-calendar__title">
        {{ currentYear }}年 {{ currentMonth + 1 }}月
      </h2>
      <button
        type="button"
        class="ho-schedule-calendar__nav-btn"
        :aria-label="t('nextMonth')"
        @click="nextMonth"
      >
        ▶
      </button>
      <button
        type="button"
        class="ho-schedule-calendar__today-btn"
        @click="goToToday"
      >
        {{ t('today') }}
      </button>
    </div>

    <div class="ho-schedule-calendar__weekdays">
      <div
        v-for="(day, index) in weekdays"
        :key="day"
        class="ho-schedule-calendar__weekday"
        :class="{
          'ho-schedule-calendar__weekday--sun': index === 0,
          'ho-schedule-calendar__weekday--sat': index === 6,
        }"
      >
        {{ t(day) }}
      </div>
    </div>

    <div class="ho-schedule-calendar__days">
      <button
        v-for="day in calendarDays"
        :key="day.date"
        type="button"
        class="ho-schedule-calendar__day"
        :class="{
          'ho-schedule-calendar__day--other-month': !day.isCurrentMonth,
          'ho-schedule-calendar__day--today': day.isToday,
          'ho-schedule-calendar__day--selected': day.date === selectedDate,
          'ho-schedule-calendar__day--sun': day.dayOfWeek === 0,
          'ho-schedule-calendar__day--sat': day.dayOfWeek === 6,
        }"
        @click="selectDate(day.date)"
      >
        <span class="ho-schedule-calendar__day-number">{{ day.dayNumber }}</span>
        <div
          v-if="getSchedulesForDate(day.date).length > 0"
          class="ho-schedule-calendar__day-dots"
        >
          <span
            v-for="(schedule, i) in getSchedulesForDate(day.date).slice(0, 3)"
            :key="i"
            class="ho-schedule-calendar__day-dot"
            :style="{ backgroundColor: schedule.color }"
          />
        </div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Schedule } from '@/models/schedule'

const { t } = useI18n()

const props = defineProps<{
  schedules: Schedule[]
  selectedDate: string
}>()

const emit = defineEmits<{
  'update:selectedDate': [date: string]
}>()

const weekdays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'] as const

const today = new Date()
const currentYear = ref(today.getFullYear())
const currentMonth = ref(today.getMonth())

interface CalendarDay {
  date: string
  dayNumber: number
  dayOfWeek: number
  isCurrentMonth: boolean
  isToday: boolean
}

const calendarDays = computed<CalendarDay[]>(() => {
  const days: CalendarDay[] = []
  const firstDay = new Date(currentYear.value, currentMonth.value, 1)
  const lastDay = new Date(currentYear.value, currentMonth.value + 1, 0)
  const startDayOfWeek = firstDay.getDay()
  const prevMonthLastDay = new Date(currentYear.value, currentMonth.value, 0).getDate()

  // Previous month days
  for (let i = startDayOfWeek - 1; i >= 0; i--) {
    const dayNumber = prevMonthLastDay - i
    const date = new Date(currentYear.value, currentMonth.value - 1, dayNumber)
    days.push(createCalendarDay(date, dayNumber, false))
  }

  // Current month days
  for (let i = 1; i <= lastDay.getDate(); i++) {
    const date = new Date(currentYear.value, currentMonth.value, i)
    days.push(createCalendarDay(date, i, true))
  }

  // Next month days
  const remainingDays = 42 - days.length
  for (let i = 1; i <= remainingDays; i++) {
    const date = new Date(currentYear.value, currentMonth.value + 1, i)
    days.push(createCalendarDay(date, i, false))
  }

  return days
})

function createCalendarDay(date: Date, dayNumber: number, isCurrentMonth: boolean): CalendarDay {
  const todayStr = formatDate(today)
  const dateStr = formatDate(date)

  return {
    date: dateStr,
    dayNumber,
    dayOfWeek: date.getDay(),
    isCurrentMonth,
    isToday: dateStr === todayStr,
  }
}

function formatDate(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function getSchedulesForDate(date: string): Schedule[] {
  return props.schedules.filter(s => s.date === date)
}

function selectDate(date: string) {
  emit('update:selectedDate', date)
}

function prevMonth() {
  if (currentMonth.value === 0) {
    currentMonth.value = 11
    currentYear.value--
  } else {
    currentMonth.value--
  }
}

function nextMonth() {
  if (currentMonth.value === 11) {
    currentMonth.value = 0
    currentYear.value++
  } else {
    currentMonth.value++
  }
}

function goToToday() {
  currentYear.value = today.getFullYear()
  currentMonth.value = today.getMonth()
  selectDate(formatDate(today))
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/mixins' as m;

.ho-schedule-calendar {
  padding: v.space(4);
  border-radius: 8px;
  background: v.$navy;

  &__header {
    display: flex;
    gap: v.space(2);
    align-items: center;
    margin-bottom: v.space(4);
  }

  &__title {
    flex: 1;

    margin: 0;

    font-size: 20px;
    font-weight: 600;
    color: v.$white;
    text-align: center;
  }

  &__nav-btn {
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 36px;
    height: 36px;
    padding: 0;
    border: none;
    border-radius: 50%;

    font-size: 14px;
    color: v.$white;

    background: v.$navy-1;

    transition: all 0.2s ease;

    @include m.hover {
      background: v.$navy-2;
    }
  }

  &__today-btn {
    cursor: pointer;

    padding: v.space(1) v.space(3);
    border: 1px solid v.$navy-2;
    border-radius: 4px;

    font-size: 12px;
    color: v.$white;

    background: transparent;

    transition: all 0.2s ease;

    @include m.hover {
      border-color: v.$orange;
      background: v.$orange;
    }
  }

  &__weekdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    margin-bottom: v.space(2);
  }

  &__weekday {
    padding: v.space(2);

    font-size: 12px;
    font-weight: 600;
    color: v.$text-note;
    text-align: center;

    &--sun {
      color: v.$red;
    }

    &--sat {
      color: v.$blue;
    }
  }

  &__days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px;
  }

  &__day {
    cursor: pointer;

    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    aspect-ratio: 1;
    min-height: 48px;
    padding: v.space(1);
    border: none;
    border-radius: 4px;

    background: v.$navy-1;

    transition: all 0.2s ease;

    @include m.hover {
      background: v.$navy-2;
    }

    &--other-month {
      opacity: 0.4;
    }

    &--today {
      .ho-schedule-calendar__day-number {
        width: 28px;
        height: 28px;
        border-radius: 50%;

        line-height: 28px;
        color: v.$white;

        background: v.$orange;
      }
    }

    &--selected {
      border: 2px solid v.$orange;
      background: rgba(v.$orange, 0.1);
    }

    &--sun {
      .ho-schedule-calendar__day-number {
        color: v.$red;
      }
    }

    &--sat {
      .ho-schedule-calendar__day-number {
        color: v.$blue;
      }
    }
  }

  &__day-number {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 14px;
    font-weight: 500;
    color: v.$white;
    text-align: center;
  }

  &__day-dots {
    display: flex;
    gap: 2px;
    margin-top: v.space(1);
  }

  &__day-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }
}
</style>
