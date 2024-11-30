/**
 * ここには到達しない。
 * 適切に switch 文などが書かれているか型レベルでチェックする。
 */
export const unreachable = (_: never): never => {
  throw new Error('unreachable.')
}

/**
 * throw構文を式として使いたい人向けの関数。
 */
export function raiseError(message: string): never {
  throw new Error(message)
}
