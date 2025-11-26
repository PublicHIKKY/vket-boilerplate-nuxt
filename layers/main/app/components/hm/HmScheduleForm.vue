<i18n lang="yaml">
ja:
  title: タイトル
  titlePlaceholder: 予定のタイトルを入力
  description: メモ
  descriptionPlaceholder: メモを入力（任意）
  date: 日付
  startTime: 開始時刻
  endTime: 終了時刻
  color: 色
  save: 保存
  cancel: キャンセル
  addSchedule: 予定を追加
  editSchedule: 予定を編集
  titleRequired: タイトルは必須です
en:
  title: Title
  titlePlaceholder: Enter schedule title
  description: Notes
  descriptionPlaceholder: Enter notes (optional)
  date: Date
  startTime: Start time
  endTime: End time
  color: Color
  save: Save
  cancel: Cancel
  addSchedule: Add Schedule
  editSchedule: Edit Schedule
  titleRequired: Title is required
</i18n>

<template>
  <form
    class="hm-schedule-form"
    @submit.prevent="handleSubmit"
  >
    <h3 class="hm-schedule-form__title">
      {{ isEditing ? t('editSchedule') : t('addSchedule') }}
    </h3>

    <div class="hm-schedule-form__field">
      <label
        for="schedule-title"
        class="hm-schedule-form__label"
      >
        {{ t('title') }} <span class="required">*</span>
      </label>
      <input
        id="schedule-title"
        v-model="formData.title"
        type="text"
        class="hm-schedule-form__input"
        :class="{ 'hm-schedule-form__input--error': errors.title }"
        :placeholder="t('titlePlaceholder')"
        required
      />
      <span
        v-if="errors.title"
        class="hm-schedule-form__error"
      >
        {{ t('titleRequired') }}
      </span>
    </div>

    <div class="hm-schedule-form__field">
      <label
        for="schedule-description"
        class="hm-schedule-form__label"
      >
        {{ t('description') }}
      </label>
      <textarea
        id="schedule-description"
        v-model="formData.description"
        class="hm-schedule-form__textarea"
        :placeholder="t('descriptionPlaceholder')"
        rows="3"
      />
    </div>

    <div class="hm-schedule-form__field">
      <label
        for="schedule-date"
        class="hm-schedule-form__label"
      >
        {{ t('date') }} <span class="required">*</span>
      </label>
      <input
        id="schedule-date"
        v-model="formData.date"
        type="date"
        class="hm-schedule-form__input"
        required
      />
    </div>

    <div class="hm-schedule-form__row">
      <div class="hm-schedule-form__field">
        <label
          for="schedule-start-time"
          class="hm-schedule-form__label"
        >
          {{ t('startTime') }}
        </label>
        <input
          id="schedule-start-time"
          v-model="formData.startTime"
          type="time"
          class="hm-schedule-form__input"
        />
      </div>

      <div class="hm-schedule-form__field">
        <label
          for="schedule-end-time"
          class="hm-schedule-form__label"
        >
          {{ t('endTime') }}
        </label>
        <input
          id="schedule-end-time"
          v-model="formData.endTime"
          type="time"
          class="hm-schedule-form__input"
        />
      </div>
    </div>

    <div class="hm-schedule-form__field">
      <label class="hm-schedule-form__label">{{ t('color') }}</label>
      <div class="hm-schedule-form__colors">
        <button
          v-for="color in colorOptions"
          :key="color"
          type="button"
          class="hm-schedule-form__color-btn"
          :class="{ 'hm-schedule-form__color-btn--active': formData.color === color }"
          :style="{ backgroundColor: color }"
          @click="formData.color = color"
        >
          <span class="visually-hidden">{{ color }}</span>
        </button>
      </div>
    </div>

    <div class="hm-schedule-form__actions">
      <button
        type="button"
        class="hm-schedule-form__btn hm-schedule-form__btn--cancel"
        @click="$emit('cancel')"
      >
        {{ t('cancel') }}
      </button>
      <button
        type="submit"
        class="hm-schedule-form__btn hm-schedule-form__btn--save"
      >
        {{ t('save') }}
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import type { Schedule, ScheduleFormData } from '@/models/schedule'

const { t } = useI18n()

const props = defineProps<{
  schedule?: Schedule | null
  selectedDate: string
}>()

const emit = defineEmits<{
  submit: [data: ScheduleFormData]
  cancel: []
}>()

const isEditing = computed(() => !!props.schedule)

const colorOptions = [
  '#ff8500', // orange
  '#3ff', // blue
  '#ff4e8e', // pink
  '#69b756', // green
  '#b760eb', // violet
  '#ffba00', // yellow
]

const formData = reactive<ScheduleFormData>({
  title: '',
  description: '',
  date: props.selectedDate,
  startTime: '',
  endTime: '',
  color: '#ff8500',
  completed: false,
})

const errors = reactive({
  title: false,
})

watch(
  () => props.schedule,
  (schedule) => {
    if (schedule) {
      formData.title = schedule.title
      formData.description = schedule.description || ''
      formData.date = schedule.date
      formData.startTime = schedule.startTime || ''
      formData.endTime = schedule.endTime || ''
      formData.color = schedule.color
      formData.completed = schedule.completed
    } else {
      resetForm()
    }
  },
  { immediate: true },
)

watch(
  () => props.selectedDate,
  (date) => {
    if (!isEditing.value) {
      formData.date = date
    }
  },
)

function resetForm() {
  formData.title = ''
  formData.description = ''
  formData.date = props.selectedDate
  formData.startTime = ''
  formData.endTime = ''
  formData.color = '#ff8500'
  formData.completed = false
  errors.title = false
}

function handleSubmit() {
  errors.title = !formData.title.trim()

  if (errors.title) return

  emit('submit', { ...formData })
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/mixins' as m;

.hm-schedule-form {
  display: flex;
  flex-direction: column;
  gap: v.space(4);

  padding: v.space(4);
  border-radius: 8px;

  background: v.$navy;

  &__title {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: v.$white;
  }

  &__field {
    display: flex;
    flex-direction: column;
    gap: v.space(1);
  }

  &__row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: v.space(3);

    @include m.sp {
      grid-template-columns: 1fr;
    }
  }

  &__label {
    font-size: 14px;
    font-weight: 500;
    color: v.$white-1;

    .required {
      color: v.$red;
    }
  }

  &__input,
  &__textarea {
    padding: v.space(2) v.space(3);
    border: 1px solid v.$navy-2;
    border-radius: 4px;

    font-size: 14px;
    color: v.$white;

    background: v.$black;

    transition: border-color 0.2s ease;

    &::placeholder {
      color: v.$text-note;
    }

    &:focus {
      border-color: v.$green-2;
      outline: none;
    }

    &--error {
      border-color: v.$red;
    }
  }

  &__textarea {
    resize: vertical;
    min-height: 80px;
  }

  &__error {
    font-size: 12px;
    color: v.$red;
  }

  &__colors {
    display: flex;
    flex-wrap: wrap;
    gap: v.space(2);
  }

  &__color-btn {
    cursor: pointer;

    width: 32px;
    height: 32px;
    padding: 0;
    border: 2px solid transparent;
    border-radius: 50%;

    transition: all 0.2s ease;

    &--active {
      transform: scale(1.1);
      border-color: v.$white;
    }

    @include m.hover {
      transform: scale(1.1);
    }
  }

  &__actions {
    display: flex;
    gap: v.space(2);
    justify-content: flex-end;
    margin-top: v.space(2);
  }

  &__btn {
    cursor: pointer;

    padding: v.space(2) v.space(4);
    border: none;
    border-radius: 4px;

    font-size: 14px;
    font-weight: 500;

    transition: all 0.2s ease;

    &--cancel {
      color: v.$white;
      background: v.$gray;

      @include m.hover {
        background: v.$gray-2;
      }
    }

    &--save {
      color: v.$white;
      background: v.$orange;

      @include m.hover {
        background: v.$yellow;
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
