import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import {
  configureLogger,
  configureLoggerForEnvironment,
  debug,
  info,
  warn,
  error,
  table,
  log,
  logIf,
  timeStart,
  timeEnd,
  group,
  groupEnd,
  getLoggerConfig,
  withLogging,
} from '#base/app/utils/console'

describe('console.ts', () => {
  const originalConsole = {
    debug: console.debug,
    info: console.info,
    warn: console.warn,
    error: console.error,
    table: console.table,
    time: console.time,
    timeEnd: console.timeEnd,
    group: console.group,
    groupCollapsed: console.groupCollapsed,
    groupEnd: console.groupEnd,
    trace: console.trace,
  }

  beforeEach(() => {
    vi.clearAllMocks()
    console.debug = vi.fn()
    console.info = vi.fn()
    console.warn = vi.fn()
    console.error = vi.fn()
    console.table = vi.fn()
    console.time = vi.fn()
    console.timeEnd = vi.fn()
    console.group = vi.fn()
    console.groupCollapsed = vi.fn()
    console.groupEnd = vi.fn()
    console.trace = vi.fn()

    // デフォルト設定にリセット
    configureLogger({
      enabled: true,
      level: 'info',
      timestamp: true,
      stackTrace: false,
    })
  })

  afterEach(() => {
    Object.assign(console, originalConsole)
  })

  describe('configureLogger', () => {
    it('ログ設定を更新する', () => {
      configureLogger({
        enabled: false,
        level: 'error',
      })

      const config = getLoggerConfig()
      expect(config.enabled).toBe(false)
      expect(config.level).toBe('error')
    })

    it('部分的な設定更新が可能', () => {
      configureLogger({ level: 'debug' })
      const config = getLoggerConfig()
      expect(config.level).toBe('debug')
      expect(config.enabled).toBe(true)
    })
  })

  describe('configureLoggerForEnvironment', () => {
    it('production環境でログを無効化', () => {
      const originalEnv = process.env.NODE_ENV
      process.env.NODE_ENV = 'production'

      configureLoggerForEnvironment()
      const config = getLoggerConfig()

      expect(config.enabled).toBe(false)
      expect(config.level).toBe('error')

      process.env.NODE_ENV = originalEnv
    })

    it('development環境でデバッグログを有効化', () => {
      const originalEnv = process.env.NODE_ENV
      process.env.NODE_ENV = 'development'

      configureLoggerForEnvironment()
      const config = getLoggerConfig()

      expect(config.enabled).toBe(true)
      expect(config.level).toBe('debug')
      expect(config.stackTrace).toBe(true)

      process.env.NODE_ENV = originalEnv
    })
  })

  describe('ログレベル制御', () => {
    it('設定されたレベル以上のログのみ出力', () => {
      configureLogger({ level: 'warn' })

      debug('debug message')
      info('info message')
      warn('warn message')
      error('error message')

      expect(console.debug).not.toHaveBeenCalled()
      expect(console.info).not.toHaveBeenCalled()
      expect(console.warn).toHaveBeenCalled()
      expect(console.error).toHaveBeenCalled()
    })

    it('ログが無効の場合は何も出力しない', () => {
      configureLogger({ enabled: false })

      error('error message')

      expect(console.error).not.toHaveBeenCalled()
    })
  })

  describe('ログフォーマット', () => {
    it('タイムスタンプを含む', () => {
      configureLogger({ timestamp: true })
      const dateSpy = vi.spyOn(Date.prototype, 'toISOString').mockReturnValue('2024-01-01T00:00:00.000Z')

      info('test message')

      expect(console.info).toHaveBeenCalledWith(
        expect.stringContaining('[2024-01-01T00:00:00.000Z]'),
      )

      dateSpy.mockRestore()
    })

    it('プレフィックスを含む', () => {
      configureLogger({ prefix: 'APP' })

      info('test message')

      expect(console.info).toHaveBeenCalledWith(
        expect.stringContaining('[APP]'),
      )
    })

    it('ログレベルを含む', () => {
      info('test message')

      expect(console.info).toHaveBeenCalledWith(
        expect.stringContaining('[INFO]'),
      )
    })
  })

  describe('エラーログ', () => {
    it('スタックトレースを出力', () => {
      configureLogger({ stackTrace: true })

      error('error message')

      expect(console.error).toHaveBeenCalled()
      expect(console.trace).toHaveBeenCalled()
    })
  })

  describe('table', () => {
    it('テーブル形式でデータを出力', () => {
      const data = [{ id: 1, name: 'test' }]

      table(data)

      expect(console.table).toHaveBeenCalledWith(data, undefined)
    })

    it('プロパティを指定してテーブル出力', () => {
      const data = [{ id: 1, name: 'test', age: 20 }]
      const properties = ['id', 'name']

      table(data, properties)

      expect(console.table).toHaveBeenCalledWith(data, properties)
    })
  })

  describe('log', () => {
    it('値をログ出力して返す', () => {
      const value = { test: 'data' }

      const result = log(value, 'Debug value')

      expect(result).toBe(value)
      expect(console.info).toHaveBeenCalledWith(
        expect.stringContaining('[INFO]'),
        value,
      )
    })

    it('メソッドを指定してログ出力', () => {
      const value = 'error value'

      log(value, 'Error occurred', 'error')

      expect(console.error).toHaveBeenCalledWith(
        expect.stringContaining('[ERROR]'),
        value,
      )
    })
  })

  describe('logIf', () => {
    it('条件がtrueの場合のみログ出力', () => {
      logIf(true, 'info', 'Condition met')
      logIf(false, 'info', 'Condition not met')

      expect(console.info).toHaveBeenCalledTimes(1)
      expect(console.info).toHaveBeenCalledWith(
        expect.stringContaining('Condition met'),
      )
    })
  })

  describe('パフォーマンス測定', () => {
    it('timeStart/timeEndでパフォーマンス測定', () => {
      configureLogger({ level: 'debug' })

      timeStart('operation')
      timeEnd('operation')

      expect(console.time).toHaveBeenCalledWith('operation')
      expect(console.timeEnd).toHaveBeenCalledWith('operation')
    })

    it('debugレベル以外では測定しない', () => {
      configureLogger({ level: 'info' })

      timeStart('operation')
      timeEnd('operation')

      expect(console.time).not.toHaveBeenCalled()
      expect(console.timeEnd).not.toHaveBeenCalled()
    })
  })

  describe('グループ化', () => {
    it('ログをグループ化', () => {
      group('Group Label')

      expect(console.group).toHaveBeenCalledWith(
        expect.stringContaining('Group Label'),
      )
    })

    it('折りたたまれたグループを作成', () => {
      group('Collapsed Group', true)

      expect(console.groupCollapsed).toHaveBeenCalledWith(
        expect.stringContaining('Collapsed Group'),
      )
    })

    it('グループを終了', () => {
      groupEnd()

      expect(console.groupEnd).toHaveBeenCalled()
    })
  })

  describe('withLogging', () => {
    it('関数の実行をログ付きでラップ', () => {
      configureLogger({ level: 'debug' })
      const fn = vi.fn((a: number, b: number) => a + b)
      const wrapped = withLogging(fn as (...args: unknown[]) => unknown, 'add')

      const result = wrapped(1, 2)

      expect(result).toBe(3)
      expect(console.debug).toHaveBeenCalledWith(
        expect.stringContaining('Calling function: add'),
        [1, 2],
      )
      expect(console.debug).toHaveBeenCalledWith(
        expect.stringContaining('Function add returned'),
        3,
      )
    })

    it('エラーをログ出力して再スロー', () => {
      configureLogger({ level: 'debug' })
      const fn = vi.fn(() => {
        throw new Error('Test error')
      })
      const wrapped = withLogging(fn)

      expect(() => wrapped()).toThrow('Test error')
      expect(console.error).toHaveBeenCalledWith(
        expect.stringContaining('threw error'),
        expect.any(Error),
      )
    })

    it('Promise関数をラップ', async () => {
      configureLogger({ level: 'debug' })
      const fn = vi.fn(async () => {
        await Promise.resolve()
        return 'async result'
      })
      const wrapped = withLogging(fn)

      const result = await wrapped()

      expect(result).toBe('async result')
      expect(console.debug).toHaveBeenCalledWith(
        expect.stringContaining('resolved'),
        'async result',
      )
    })

    it('Promise rejectionをログ出力', async () => {
      configureLogger({ level: 'debug' })
      const fn = vi.fn(async () => {
        await Promise.resolve()
        throw new Error('Async error')
      })
      const wrapped = withLogging(fn)

      await expect(wrapped()).rejects.toThrow('Async error')
      expect(console.error).toHaveBeenCalledWith(
        expect.stringContaining('rejected'),
        expect.any(Error),
      )
    })
  })
})
