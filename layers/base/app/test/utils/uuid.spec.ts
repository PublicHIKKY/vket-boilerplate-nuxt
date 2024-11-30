import { createUuidV4 } from '#base/app/utils/uuid'

describe('createUuidV4', () => {
  test('generates a valid UUIDv4 string', () => {
    const uuidV4 = createUuidV4()
    expect(uuidV4).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
    )
  })

  test('returns unique UUIDv4 strings on different calls', () => {
    const uuidV4_1 = createUuidV4()
    const uuidV4_2 = createUuidV4()
    expect(uuidV4_1).not.toBe(uuidV4_2)
  })
})
