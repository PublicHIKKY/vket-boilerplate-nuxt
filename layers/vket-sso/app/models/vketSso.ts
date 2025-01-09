/**
 * @group For Developers
 * @category Type Definitions
 * @module Auth
 */

import { z } from 'zod'

// zod
export const ssoUserSchema = z.object({
  id: z.number(),
  sub: z.string(),
  vketId: z.string(),
  vketDetaId: z.number().nullable().optional(),
  email: z.string().nullable().optional(), // hotfix: あるべきは検討
  nameJa: z.string().nullable().optional(), // hotfix: あるべきは検討
  nameEn: z.string().nullable().optional(), // hotfix: あるべきは検討
  pictureUrl: z.string().nullable().optional(), // hotfix: あるべきは検討
  createdAt: z.string(),
  updatedAt: z.string(),
})

export type SsoUser = z.infer<typeof ssoUserSchema>

export const ssoJwtSchema = z.object({
  exp: z.number(),
  iat: z.number(),
})

export type SsoJwt = z.infer<typeof ssoJwtSchema>

export const resultSchema = z.object({
  success: z.boolean(),
  errorKey: z.string().optional(),
})

export type Result = z.infer<typeof resultSchema>
