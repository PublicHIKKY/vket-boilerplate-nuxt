/**
 * Showcases layer test example
 * This is a basic test to ensure the test environment is working
 */

import { describe, expect, it } from 'vitest'

describe('Showcases Layer Tests', () => {
  it('should have working test environment', () => {
    expect(true).toBe(true)
  })

  it('should be able to test basic JavaScript functionality', () => {
    const add = (a: number, b: number) => a + b
    expect(add(2, 3)).toBe(5)
  })
})
