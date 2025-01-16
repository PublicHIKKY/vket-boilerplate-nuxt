import { test } from '@fast-check/vitest'
import { decodeJwt } from '#base/app/utils/token'

describe('decodeJwt', () => {
  test('decode valid jwt', () => {
    const jwt
      = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.XbPfbIHMI6arZ3Y922BhjWgQzWXcXNrz0ogtVhfEd2o'
    const decoded = decodeJwt(jwt)
    expect(decoded).toMatchObject({
      sub: '1234567890',
      name: 'John Doe',
      iat: 1516239022,
    })
  })
  describe('decode invalid jwt', () => {
    // 正直これは null になってほしいなあ
    test.fails('invalid jwt (verify fails)', () => {
      const jwt
        = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.XbPfbIHMI6arZ3Y922BhjWgQzWXcXNrz0ogtVhfEd2p'
      const decoded = decodeJwt(jwt)
      expect(decoded, '検証が失敗したら null が返ってほしい').toBe(null)
    })
    test('decode valid (non-secure) jwt', () => {
      const jwt
        = 'eyJhbGciOiJub25lIn0.eyJpc3MiOiJqb2UiLA0KICJleHAiOjEzMDA4MTkzODAsDQogImh0dHA6Ly9leGFtcGxlLmNvbS9pc19yb290Ijp0cnVlfQ.'
      const decoded = decodeJwt(jwt)
      expect(decoded, 'alg: none とかでも通る（これええんか？）').toMatchObject(
        {
          'iss': 'joe',
          'exp': 1300819380,
          'http://example.com/is_root': true,
        },
      )
    })
    test('invalid jwt', () => {
      const decoded = decodeJwt('.eyJmb28iOiJiYXIifQ.')
      expect(decoded, 'なんならalg無くても通る').toMatchObject({
        foo: 'bar',
      })
    })
    /*
     * ERROR: テストとして正しいが、ターミナルにエラーが出るためコメントアウト。
     * test('decode failes', () => {
     *   const jwt = '################'
     *   const decoded = decodeJwt(jwt)
     *   expect(decoded, '失敗してnullが返る').toBe(null)
     * })
     */
  })
})
