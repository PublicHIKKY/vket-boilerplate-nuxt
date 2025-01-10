import { describe, it, expect } from 'vitest'
import { getRestrictedRecord } from '#vket-sso/app/utils/record'

describe('getRestrictedRecord', () => {
  it('should remove undefined values from the record', () => {
    const input = {
      key1: 'value1',
      key2: undefined,
      key3: 'value3',
    }
    const expectedOutput = {
      key1: 'value1',
      key3: 'value3',
    }
    expect(getRestrictedRecord(input)).toEqual(expectedOutput)
  })

  it('should return an empty object if all values are undefined', () => {
    const input = {
      key1: undefined,
      key2: undefined,
    }
    const expectedOutput = {}
    expect(getRestrictedRecord(input)).toEqual(expectedOutput)
  })

  it('should return the same object if no values are undefined', () => {
    const input = {
      key1: 'value1',
      key2: 'value2',
    }
    const expectedOutput = {
      key1: 'value1',
      key2: 'value2',
    }
    expect(getRestrictedRecord(input)).toEqual(expectedOutput)
  })

  it('should handle an empty input object', () => {
    const input = {}
    const expectedOutput = {}
    expect(getRestrictedRecord(input)).toEqual(expectedOutput)
  })
})
