import { z } from 'zod/v3'

export const scheduleSchema = z.object({
  id: z.string(),
  title: z.string().min(1),
  description: z.string().optional(),
  date: z.string(), // YYYY-MM-DD format
  startTime: z.string().optional(), // HH:mm format
  endTime: z.string().optional(), // HH:mm format
  color: z.string().default('#ff8500'),
  completed: z.boolean().default(false),
  createdAt: z.string(),
  updatedAt: z.string(),
})

export type Schedule = z.infer<typeof scheduleSchema>

export type ScheduleFormData = Omit<Schedule, 'id' | 'createdAt' | 'updatedAt'>
