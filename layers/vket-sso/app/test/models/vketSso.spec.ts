import { describe, it, expect } from 'vitest'
import { ssoUserSchema, ssoJwtSchema, resultSchema } from '#vket-sso/app/models/vketSso'

describe('ssoUserSchema', () => {
  it('should validate a correct SSO user object', () => {
    const validUser = {
      id: 1,
      sub: 'sub123',
      vketId: 'vket123',
      vketDetaId: null,
      email: 'test@example.com',
      nameJa: 'テスト',
      nameEn: 'Test',
      pictureUrl: 'http://example.com/picture.jpg',
      createdAt: '2023-01-01T00:00:00Z',
      updatedAt: '2023-01-01T00:00:00Z',
    }
    expect(ssoUserSchema.parse(validUser)).toEqual(validUser)
  })

  it('should fail validation for an incorrect SSO user object', () => {
    const invalidUser = {
      id: 'not-a-number',
      sub: 'sub123',
      vketId: 'vket123',
      createdAt: '2023-01-01T00:00:00Z',
      updatedAt: '2023-01-01T00:00:00Z',
    }
    expect(() => ssoUserSchema.parse(invalidUser)).toThrow()
  })
})

describe('ssoJwtSchema', () => {
  it('should validate a correct JWT object', () => {
    const validJwt = {
      exp: 1234567890,
      iat: 1234567890,
    }
    expect(ssoJwtSchema.parse(validJwt)).toEqual(validJwt)
  })

  it('should fail validation for an incorrect JWT object', () => {
    const invalidJwt = {
      exp: 'not-a-number',
      iat: 1234567890,
    }
    expect(() => ssoJwtSchema.parse(invalidJwt)).toThrow()
  })
})

describe('resultSchema', () => {
  it('should validate a correct result object', () => {
    const validResult = {
      success: true,
    }
    expect(resultSchema.parse(validResult)).toEqual(validResult)
  })

  it('should fail validation for an incorrect result object', () => {
    const invalidResult = {
      success: 'not-a-boolean',
    }
    expect(() => resultSchema.parse(invalidResult)).toThrow()
  })
})
