/**
 * 制御可能なログシステム
 * 環境に応じたログレベル管理と構造化ログ出力
 */

/* eslint-disable no-console */

/**
 * ログレベルの定義
 */
export type LogLevel = 'debug' | 'info' | 'warn' | 'error'

/**
 * コンソールメソッドの型定義
 */
export type ConsoleMethod = 'info' | 'error' | 'warn' | 'debug' | 'table'

/**
 * ログ設定
 */
interface LogConfig {
  enabled: boolean
  level: LogLevel
  prefix?: string
  timestamp?: boolean
  stackTrace?: boolean
}

/**
 * デフォルトのログ設定
 */
const defaultConfig: LogConfig = {
  enabled: true,
  level: 'info',
  timestamp: true,
  stackTrace: false,
}

/**
 * 現在のログ設定
 */
let currentConfig: LogConfig = { ...defaultConfig }

/**
 * ログレベルの重要度
 */
const logLevels: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
}

/**
 * ログ設定を更新
 */
export const configureLogger = (config: Partial<LogConfig>): void => {
  currentConfig = { ...currentConfig, ...config }
}

/**
 * 環境に基づいて自動的にログ設定を調整
 */
export const configureLoggerForEnvironment = (): void => {
  const isDevelopment = process.env.NODE_ENV === 'development'
  const isProduction = process.env.NODE_ENV === 'production'

  if (isProduction) {
    configureLogger({
      enabled: false,
      level: 'error',
      timestamp: false,
      stackTrace: false,
    })
  } else if (isDevelopment) {
    configureLogger({
      enabled: true,
      level: 'debug',
      timestamp: true,
      stackTrace: true,
    })
  }
}

/**
 * ログを出力すべきかどうかを判定
 */
const shouldLog = (level: LogLevel): boolean => {
  return currentConfig.enabled && logLevels[level] >= logLevels[currentConfig.level]
}

/**
 * タイムスタンプを生成
 */
const generateTimestamp = (): string => {
  return new Date().toISOString()
}

/**
 * ログメッセージをフォーマット
 */
const formatMessage = (level: LogLevel, message: string): string => {
  const parts: string[] = []

  if (currentConfig.timestamp) {
    parts.push(`[${generateTimestamp()}]`)
  }

  if (currentConfig.prefix) {
    parts.push(`[${currentConfig.prefix}]`)
  }

  parts.push(`[${level.toUpperCase()}]`)
  parts.push(message)

  return parts.join(' ')
}

/**
 * 基本的なログ出力関数
 */
const logMessage = (level: LogLevel, method: ConsoleMethod, message: string, ...args: unknown[]): void => {
  if (!shouldLog(level)) return

  const formattedMessage = formatMessage(level, message)
  console[method](formattedMessage, ...args)

  if (currentConfig.stackTrace && level === 'error') {
    console.trace()
  }
}

/**
 * デバッグログ
 */
export const debug = (message: string, ...args: unknown[]): void => {
  logMessage('debug', 'debug', message, ...args)
}

/**
 * 情報ログ
 */
export const info = (message: string, ...args: unknown[]): void => {
  logMessage('info', 'info', message, ...args)
}

/**
 * 警告ログ
 */
export const warn = (message: string, ...args: unknown[]): void => {
  logMessage('warn', 'warn', message, ...args)
}

/**
 * エラーログ
 */
export const error = (message: string, ...args: unknown[]): void => {
  logMessage('error', 'error', message, ...args)
}

/**
 * テーブル形式でのログ出力
 */
export const table = (data: unknown, properties?: string[]): void => {
  if (!shouldLog('info')) return

  console.table(data, properties)
}

/**
 * 値をログ出力してそのまま返す（デバッグ用）
 */
export const log = <T>(
  value: T,
  message: string,
  method: ConsoleMethod = 'info',
): T => {
  const level: LogLevel = method === 'error' ? 'error' : method === 'warn' ? 'warn' : 'info'

  if (shouldLog(level)) {
    console[method](formatMessage(level, message), value)
  }

  return value
}

/**
 * 条件付きログ出力
 */
export const logIf = (
  condition: boolean,
  level: LogLevel,
  message: string,
  ...args: unknown[]
): void => {
  if (!condition) return

  const method: ConsoleMethod = level === 'error' ? 'error' : level === 'warn' ? 'warn' : 'info'
  logMessage(level, method, message, ...args)
}

/**
 * パフォーマンス測定用のログ
 */
export const timeStart = (label: string): void => {
  if (shouldLog('debug')) {
    console.time(label)
  }
}

/**
 * パフォーマンス測定終了
 */
export const timeEnd = (label: string): void => {
  if (shouldLog('debug')) {
    console.timeEnd(label)
  }
}

/**
 * グループ化されたログ
 */
export const group = (label: string, collapsed = false): void => {
  if (!shouldLog('info')) return

  if (collapsed) {
    console.groupCollapsed(formatMessage('info', label))
  } else {
    console.group(formatMessage('info', label))
  }
}

/**
 * ロググループ終了
 */
export const groupEnd = (): void => {
  if (shouldLog('info')) {
    console.groupEnd()
  }
}

/**
 * 現在のログ設定を取得
 */
export const getLoggerConfig = (): LogConfig => {
  return { ...currentConfig }
}

/**
 * 関数の実行をログ付きで行う
 */
export const withLogging = <T extends (...args: unknown[]) => unknown>(
  fn: T,
  functionName?: string,
): T => {
  return ((...args: unknown[]) => {
    const name = functionName || fn.name || 'anonymous'

    debug(`Calling function: ${name}`, args)
    timeStart(name)

    try {
      const result = fn(...args)

      if (result instanceof Promise) {
        return result
          .then((value) => {
            debug(`Function ${name} resolved`, value)
            timeEnd(name)
            return value
          })
          .catch((err) => {
            error(`Function ${name} rejected`, err)
            timeEnd(name)
            throw err
          })
      } else {
        debug(`Function ${name} returned`, result)
        timeEnd(name)
        return result
      }
    } catch (err) {
      error(`Function ${name} threw error`, err)
      timeEnd(name)
      throw err
    }
  }) as T
}

// 環境に基づく自動設定
if (typeof window === 'undefined') {
  // Server-side
  configureLoggerForEnvironment()
}
