/**
 * ブランデッド型によるエラー処理システム
 * 型レベルでエラーメッセージの安全性を保証
 */

const errorMessageSymbol = Symbol('ErrorMessage')

/**
 * エラーメッセージのブランデッド型
 * 通常の文字列と区別して、エラーメッセージであることを型レベルで保証
 */
export type ErrorMessage<ActualMessage extends string = string> = ActualMessage & {
  readonly [errorMessageSymbol]: unknown
}

/**
 * エラーメッセージを作成
 * 文字列をエラーメッセージ型に変換
 */
export const makeErrorMessage = <ActualMessage extends string>(
  actualMessage: ActualMessage,
): ErrorMessage<ActualMessage> =>
  actualMessage as ErrorMessage<ActualMessage>

/**
 * エラーメッセージを通常の文字列に変換
 */
export const extractErrorMessage = <T extends string>(
  errorMessage: ErrorMessage<T>,
): T => errorMessage as T

/**
 * エラーメッセージかどうかを判定
 */
export const isErrorMessage = (value: unknown): value is ErrorMessage => {
  if (typeof value !== 'string') return false
  // ブランデッド型の判定は実際には実行時にはできないため、文字列であることのみをチェック
  return true
}

/**
 * よく使用されるエラーメッセージの定数
 */
export const CommonErrors = {
  UNAUTHORIZED: makeErrorMessage('認証が必要です'),
  FORBIDDEN: makeErrorMessage('アクセス権限がありません'),
  NOT_FOUND: makeErrorMessage('リソースが見つかりません'),
  VALIDATION_ERROR: makeErrorMessage('入力値が正しくありません'),
  NETWORK_ERROR: makeErrorMessage('ネットワークエラーが発生しました'),
  SERVER_ERROR: makeErrorMessage('サーバーエラーが発生しました'),
  TIMEOUT: makeErrorMessage('タイムアウトしました'),
  UNKNOWN: makeErrorMessage('不明なエラーが発生しました'),
} as const

/**
 * HTTP ステータスコードからエラーメッセージを生成
 */
export const createHttpErrorMessage = (status: number): ErrorMessage => {
  switch (status) {
    case 400:
      return makeErrorMessage('リクエストが正しくありません')
    case 401:
      return CommonErrors.UNAUTHORIZED
    case 403:
      return CommonErrors.FORBIDDEN
    case 404:
      return CommonErrors.NOT_FOUND
    case 408:
      return CommonErrors.TIMEOUT
    case 422:
      return CommonErrors.VALIDATION_ERROR
    case 500:
      return CommonErrors.SERVER_ERROR
    case 502:
    case 503:
    case 504:
      return makeErrorMessage('サーバーが一時的に利用できません')
    default:
      return makeErrorMessage(`HTTPエラー (${status})`)
  }
}

/**
 * エラー型の詳細情報を含むエラークラス
 */
export class TypedError<T extends string = string> extends Error {
  readonly errorMessage: ErrorMessage<T>
  readonly code?: string
  readonly statusCode?: number
  readonly details?: Record<string, unknown>

  constructor(
    errorMessage: ErrorMessage<T>,
    options?: {
      code?: string
      statusCode?: number
      details?: Record<string, unknown>
      cause?: Error
    },
  ) {
    super(extractErrorMessage(errorMessage))
    this.name = 'TypedError'
    this.errorMessage = errorMessage
    this.code = options?.code
    this.statusCode = options?.statusCode
    this.details = options?.details

    if (options?.cause) {
      this.cause = options.cause
    }
  }
}

/**
 * 結果型 - 成功またはエラーを表現
 */
export type Result<T, E extends string = string>
  = | { success: true, data: T }
    | { success: false, error: ErrorMessage<E> }

/**
 * 成功結果を作成
 */
export const createSuccess = <T>(data: T): Result<T, never> => ({
  success: true,
  data,
})

/**
 * エラー結果を作成
 */
export const createError = <E extends string>(
  error: ErrorMessage<E>,
): Result<never, E> => ({
  success: false,
  error,
})

/**
 * 非同期関数を安全に実行し、Result型で結果を返す
 */
export const safeAsync = async <T, E extends string = string>(
  fn: () => Promise<T>,
  errorMapper?: (error: unknown) => ErrorMessage<E>,
): Promise<Result<T, E>> => {
  try {
    const data = await fn()
    return createSuccess(data)
  } catch (error) {
    const errorMessage = errorMapper
      ? errorMapper(error)
      : makeErrorMessage('予期しないエラーが発生しました') as ErrorMessage<E>
    return createError(errorMessage)
  }
}

/**
 * 同期関数を安全に実行し、Result型で結果を返す
 */
export const safeSync = <T, E extends string = string>(
  fn: () => T,
  errorMapper?: (error: unknown) => ErrorMessage<E>,
): Result<T, E> => {
  try {
    const data = fn()
    return createSuccess(data)
  } catch (error) {
    const errorMessage = errorMapper
      ? errorMapper(error)
      : makeErrorMessage('予期しないエラーが発生しました') as ErrorMessage<E>
    return createError(errorMessage)
  }
}
