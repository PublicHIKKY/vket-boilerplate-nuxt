/**
 * @group For Developers
 * @category Repositories
 * @module Auth (Vket SSO)
 * @remarks Vket SSO Repository
 * @ref https://hikky.atlassian.net/wiki/spaces/ACCOUNT/pages/462258411/JS+ID
 */
import { z } from 'zod'
import { ssoUserSchema } from '#vket-sso/app/models/vketSso'
import { api } from '#base/app/utils/api'
import { raiseError } from '#base/app/utils/error'

const fetchSsoProfileResponseSchema = z.object({
  user: ssoUserSchema,
})
const fetchSsoTokenResponseSchema = z.object({
  jwt: z.string(),
})
const fetchSsoJwkResponseSchema = z.object({
  d: z.string(),
  dp: z.string(),
  dq: z.string(),
  e: z.string(),
  kid: z.string(),
  kty: z.string(),
  n: z.string(),
  p: z.string(),
  q: z.string(),
  qi: z.string(),
})

export const vketSsoRepository = {
  get: {
    /**
     * @remarks VketSSO: 自分のプロフィールを取得する
     * @ref https://hikky.atlassian.net/wiki/spaces/BKS/pages/668240004/VketSSO
     */
    async fetchSsoProfile() {
      const config = useRuntimeConfig()
      const domain
        = config?.public?.ssoDomain || raiseError('undefined ssoDomain')
      if (typeof domain !== 'string') raiseError('not string ssoDomain')
      const result = await api.get(`${domain}/profile/me`, {
        credentials: 'include',
      })
      return requireValueOf(fetchSsoProfileResponseSchema, result)
    },
    /**
     * @remarks VketSSO: 自分のトークンを取得する
     * @ref https://hikky.atlassian.net/wiki/spaces/BKS/pages/668240004/VketSSO
     */
    async fetchSsoToken(origin = '') {
      const config = useRuntimeConfig()
      const domain
        = config?.public?.ssoDomain || raiseError('undefined ssoDomain')
      if (typeof domain !== 'string') raiseError('not string ssoDomain')
      const audience
        = origin || (window ? window.location.origin : config?.public?.url)
      if (!audience) raiseError('undefined audience')
      const result = await api.get(
        `${domain}/auth/token?audience=${audience}`,
        {
          credentials: 'include',
        },
      )
      return requireValueOf(fetchSsoTokenResponseSchema, result)
    },
    /**
     * @remarks VketSSO: 自分のJWKを取得する
     * @ref https://hikky.atlassian.net/wiki/spaces/BKS/pages/668240004/VketSSO
     */
    async fetchSsoJwk() {
      const config = useRuntimeConfig()
      const domain
        = config?.public?.ssoDomain || raiseError('undefined ssoDomain')
      if (typeof domain !== 'string') raiseError('not string ssoDomain')
      const result = await api.get(`${domain}/auth/discovery/keys`)
      return requireValueOf(fetchSsoJwkResponseSchema, result)
    },
  },
}

