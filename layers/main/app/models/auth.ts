import { z } from 'zod/v3'

/*
 * ============================================================================
 * User Schema
 * ============================================================================
 */

export const userData = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string(),
})
export type UserData = z.infer<typeof userData>

export const defaultUser: UserData = {
  id: '',
  email: '',
  name: '',
}

/*
 * ============================================================================
 * Login Request/Response
 * ============================================================================
 */

export const loginRequest = z.object({
  email: z.string().email(),
  password: z.string().min(1),
  rememberMe: z.boolean().optional(),
})
export type LoginRequest = z.infer<typeof loginRequest>

export const loginResponse = z.object({
  success: z.boolean(),
  data: z.object({
    user: userData,
    token: z.string(),
  }),
  message: z.string(),
})
export type LoginResponse = z.infer<typeof loginResponse>

/*
 * ============================================================================
 * Default Values
 * ============================================================================
 */

export const defaultLoginRequest: LoginRequest = {
  email: '',
  password: '',
  rememberMe: false,
}
