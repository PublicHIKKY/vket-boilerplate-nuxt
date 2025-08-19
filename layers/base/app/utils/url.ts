/**
 * 型安全なルータークエリ処理ユーティリティ
 * Vue Routerのクエリパラメータを安全に取得・変換する
 */

/**
 * 数値クエリパラメータを安全に取得
 * クエリが存在しない場合はundefined、数値に変換できない場合はエラーを投げる
 */
export const getNumberRouteQuery = (
  query: ReturnType<typeof useRoute>['query'],
  name: string,
): number | undefined => {
  const value = query[name]
  if (value === undefined) return undefined

  const stringValue = Array.isArray(value) ? value[0] : value
  if (stringValue === undefined) return undefined

  const numberOrNaN = Number(stringValue)
  if (isNaN(numberOrNaN)) {
    throw new Error(`query '${name}' is neither a number nor undefined: ${stringValue}`)
  }
  return numberOrNaN
}

/**
 * route.queryから、stringのクエリを取得します。
 * この関数は対象の名前のクエリが存在しないか、対象の名前のクエリが複数ある場合は、エラーを投げます。
 * クエリが存在しない場合にエラーを投げたい場合は、getAltValueでエラーを投げてください。
 *
 * @example
 * ```ts
 * const route = useRoute() // http://example.com?page=1
 * const page = requireRouteQuery(route.query, 'page', () => '100', 'Invalid URL') // 1
 * ```
 *
 * @example
 * ```ts
 * const route = useRoute() // http://example.com
 * const page = requireRouteQuery(route.query, 'page', () => '1', 'Invalid URL') // 1
 * ```
 *
 * @example
 * ```ts
 * const route = useRoute() // http://example.com?page=1
 * const page = requireRouteQuery(route.query, 'page', () => raiseError('page query is not specified'), '') // throws Error
 * ```
 *
 * @see テスト
 */
export const requireRouteQuery = (
  query: ReturnType<typeof useRoute>['query'],
  name: string,
  getAltValue: () => string,
  errorMessage: string,
): string => {
  const value = query[name] ?? getAltValue()
  if (typeof value !== 'string') {
    throw new Error(errorMessage)
  }
  return value
}

/**
 * NOTE: getAltValueが戻り値をnumberでなくstring要求しているのが気になるが、今はそのままにしておく。（TODOという程でもないのでNOTE。）
 */
export const requireNumberRouteQuery = (
  query: ReturnType<typeof useRoute>['query'],
  name: string,
  getAltValue: () => string,
  errorMessage: string,
  errorMessageIfNotNumber: string = errorMessage,
): number => {
  const value = requireRouteQuery(query, name, getAltValue, errorMessage)
  const number = Number(value)
  if (isNaN(number)) {
    throw new Error(errorMessageIfNotNumber)
  }
  return number
}

/**
 * 文字列クエリパラメータを安全に取得
 * 配列の場合は最初の要素を返す
 */
export const getStringRouteQuery = (
  query: ReturnType<typeof useRoute>['query'],
  name: string,
): string | undefined => {
  const value = query[name]
  if (value === undefined) return undefined

  return Array.isArray(value) ? value[0] ?? undefined : value ?? undefined
}

/**
 * ブール値クエリパラメータを安全に取得
 * 'true', '1', 'yes', 'on' を true として扱う
 */
export const getBooleanRouteQuery = (
  query: ReturnType<typeof useRoute>['query'],
  name: string,
): boolean | undefined => {
  const value = query[name]
  if (value === undefined) return undefined

  const stringValue = Array.isArray(value) ? value[0] : value
  if (stringValue === undefined || stringValue === null) return undefined

  const lowerValue = stringValue.toLowerCase()
  return lowerValue === 'true' || lowerValue === '1' || lowerValue === 'yes' || lowerValue === 'on'
}

/**
 * 配列クエリパラメータを安全に取得
 * 単一値の場合は配列に変換、存在しない場合は空配列を返す
 */
export const getArrayRouteQuery = (
  query: ReturnType<typeof useRoute>['query'],
  name: string,
): string[] => {
  const value = query[name]
  if (value === undefined) return []

  return Array.isArray(value) ? value.filter(v => v !== undefined && v !== null) : value ? [value] : []
}

/**
 * 日付クエリパラメータを安全に取得
 * ISO文字列またはタイムスタンプから Date オブジェクトを作成
 */
export const getDateRouteQuery = (
  query: ReturnType<typeof useRoute>['query'],
  name: string,
): Date | undefined => {
  const value = query[name]
  if (value === undefined) return undefined

  const stringValue = Array.isArray(value) ? value[0] : value
  if (stringValue === undefined || stringValue === null) return undefined

  const date = new Date(stringValue)
  if (isNaN(date.getTime())) {
    throw new Error(`query '${name}' is not a valid date: ${stringValue}`)
  }
  return date
}

/**
 * 列挙型クエリパラメータを安全に取得
 * 指定された値の配列に含まれる場合のみ返す
 */
export const getEnumRouteQuery = <T extends string>(
  query: ReturnType<typeof useRoute>['query'],
  name: string,
  allowedValues: readonly T[],
): T | undefined => {
  const value = query[name]
  if (value === undefined) return undefined

  const stringValue = Array.isArray(value) ? value[0] : value
  if (stringValue === undefined || stringValue === null) return undefined

  if (!allowedValues.includes(stringValue as T)) {
    throw new Error(`query '${name}' must be one of [${allowedValues.join(', ')}], but got: ${stringValue}`)
  }
  return stringValue as T
}

/**
 * 複数のクエリパラメータを一度に取得
 * 型安全なクエリオブジェクトを返す
 */
export const getRouteQueries = <T extends Record<string, unknown>>(
  query: ReturnType<typeof useRoute>['query'],
  schema: {
    [K in keyof T]: {
      type: 'string' | 'number' | 'boolean' | 'array' | 'date' | 'enum'
      required?: boolean
      allowedValues?: readonly string[]
    }
  },
): Partial<T> => {
  const result: Partial<T> = {}

  for (const [key, config] of Object.entries(schema)) {
    try {
      let value: string | number | boolean | string[] | Date | undefined

      switch (config.type) {
        case 'string':
          value = getStringRouteQuery(query, key)
          break
        case 'number':
          value = getNumberRouteQuery(query, key)
          break
        case 'boolean':
          value = getBooleanRouteQuery(query, key)
          break
        case 'array':
          value = getArrayRouteQuery(query, key)
          break
        case 'date':
          value = getDateRouteQuery(query, key)
          break
        case 'enum':
          if (!config.allowedValues) {
            throw new Error(`enum type requires allowedValues for key: ${key}`)
          }
          value = getEnumRouteQuery(query, key, config.allowedValues)
          break
        default:
          throw new Error(`unknown query type: ${config.type}`)
      }

      if (value !== undefined) {
        result[key as keyof T] = value as T[keyof T]
      } else if (config.required) {
        throw new Error(`required query parameter '${key}' is missing`)
      }
    } catch (error) {
      if (config.required) {
        throw error
      }
      // 必須でない場合はエラーを無視してundefinedのまま
    }
  }

  return result
}
