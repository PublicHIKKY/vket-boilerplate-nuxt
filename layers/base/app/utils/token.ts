/**
 * JWTのデコード
 */
export const decodeJwt = (jwt: string): unknown => {
  try {
    const base64Url = jwt.split('.')[1]
    const base64 = base64Url?.replace(/-/g, '+').replace(/_/g, '/')
    if (!base64) throw new Error('Failed to decode base64')
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        })
        .join(''),
    )
    return JSON.parse(jsonPayload)
  } catch (e) {
    console.error(`${e}`)
    return null
  }
}
