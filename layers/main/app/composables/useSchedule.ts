import type { Schedule, ScheduleFormData } from '@/models/schedule'

const STORAGE_KEY = 'hikky-schedules'

export function useSchedule() {
  const schedules = useState<Schedule[]>('schedules', () => [])

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

  function generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
  }

  function addSchedule(data: ScheduleFormData): Schedule {
    const now = new Date().toISOString()
    const newSchedule: Schedule = {
      id: generateId(),
      ...data,
      createdAt: now,
      updatedAt: now,
    }
    schedules.value.push(newSchedule)
    saveSchedulesToStorage()
    return newSchedule
  }

  function updateSchedule(id: string, data: Partial<ScheduleFormData>): Schedule | null {
    const existing = schedules.value.find(s => s.id === id)
    if (!existing) return null

    const now = new Date().toISOString()
    const updated: Schedule = {
      id: existing.id,
      title: data.title ?? existing.title,
      description: data.description ?? existing.description,
      date: data.date ?? existing.date,
      startTime: data.startTime ?? existing.startTime,
      endTime: data.endTime ?? existing.endTime,
      color: data.color ?? existing.color,
      completed: data.completed ?? existing.completed,
      createdAt: existing.createdAt,
      updatedAt: now,
    }

    const index = schedules.value.findIndex(s => s.id === id)
    schedules.value[index] = updated
    saveSchedulesToStorage()
    return updated
  }

  function deleteSchedule(id: string): boolean {
    const index = schedules.value.findIndex(s => s.id === id)
    if (index === -1) return false

    schedules.value.splice(index, 1)
    saveSchedulesToStorage()
    return true
  }

  function toggleSchedule(id: string): boolean {
    const schedule = schedules.value.find(s => s.id === id)
    if (!schedule) return false

    schedule.completed = !schedule.completed
    schedule.updatedAt = new Date().toISOString()
    saveSchedulesToStorage()
    return true
  }

  function getSchedulesByDate(date: string): Schedule[] {
    return schedules.value.filter(s => s.date === date)
  }

  function getScheduleById(id: string): Schedule | undefined {
    return schedules.value.find(s => s.id === id)
  }

  return {
    schedules: readonly(schedules),
    loadSchedules,
    addSchedule,
    updateSchedule,
    deleteSchedule,
    toggleSchedule,
    getSchedulesByDate,
    getScheduleById,
  }
}
