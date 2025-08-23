import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import dayjs from 'dayjs'
import {
  formatDate,
  formatEnglishDate,
  formatJapaneseDate,
  formatEnglishDateTime,
  formatJapaneseDateTime,
  formatTimestamp,
  timestampToDate,
  dateToTimestamp,
  isAfter,
  isBefore,
  isBetweenDates,
  isSameOrAfterDate,
  isSameOrBeforeDate,
  isSame,
  getNow,
  getNowWithFormat,
  getTomorrow,
  getTomorrowWithFormat,
  getRelativeTime,
  addDate,
  subtractDate,
  getStartOfDay,
  getEndOfDay,
  getStartOfMonth,
  getEndOfMonth,
  getStartOfYear,
  getEndOfYear,
  getDiff,
  getDuration,
  getWeekday,
  getMonth,
  getQuarter,
  formatCustom,
} from '#base/app/utils/date-control'

describe('date-control.ts', () => {
  const testDate = new Date('2024-01-15T10:30:00')
  const _testDateString = '2024-01-15T10:30:00'
  const testTimestamp = 1705299000000

  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(testDate)
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  describe('formatDate', () => {
    it('指定されたフォーマットで日付を整形', () => {
      expect(formatDate('YYYY-MM-DD', testDate)).toBe('2024-01-15')
      expect(formatDate('YYYY/MM/DD HH:mm', testDate)).toBe('2024/01/15 10:30')
    })

    it('現在日時をデフォルトで使用', () => {
      expect(formatDate('YYYY-MM-DD')).toBe('2024-01-15')
    })
  })

  describe('formatEnglishDate', () => {
    it('英語形式の日付を返す', () => {
      const result = formatEnglishDate(testDate)
      expect(result).toMatch(/January 15, 2024/)
    })
  })

  describe('formatJapaneseDate', () => {
    it('日本語形式の日付を返す', () => {
      expect(formatJapaneseDate(testDate)).toBe('2024/01/15')
    })
  })

  describe('formatEnglishDateTime', () => {
    it('英語形式の日時を返す', () => {
      const result = formatEnglishDateTime(testDate)
      expect(result).toMatch(/January 15, 2024/)
      expect(result).toMatch(/10:30/)
    })
  })

  describe('formatJapaneseDateTime', () => {
    it('日本語形式の日時を返す', () => {
      expect(formatJapaneseDateTime(testDate)).toBe('2024/01/15 10:30')
    })
  })

  describe('formatTimestamp', () => {
    it('タイムスタンプを指定フォーマットに変換', () => {
      expect(formatTimestamp(testTimestamp, 'YYYY-MM-DD')).toBe('2024-01-15')
    })
  })

  describe('timestampToDate', () => {
    it('タイムスタンプをDateオブジェクトに変換', () => {
      const result = timestampToDate(testTimestamp)
      expect(result).toBeInstanceOf(Date)
      expect(result.getFullYear()).toBe(2024)
    })
  })

  describe('dateToTimestamp', () => {
    it('DateオブジェクトをUNIXタイムスタンプに変換', () => {
      const result = dateToTimestamp(testDate)
      expect(typeof result).toBe('number')
      // Check that it's a valid timestamp (should be close to test date)
      expect(result).toBeGreaterThan(1705000000000) // Around the expected time
      expect(result).toBeLessThan(1706000000000) // Within reasonable range
    })
  })

  describe('日付比較関数', () => {
    const date1 = new Date('2024-01-10')
    const date2 = new Date('2024-01-15')
    const date3 = new Date('2024-01-20')

    it('isAfter - 後の日付かチェック', () => {
      expect(isAfter(date2, date1)).toBe(true)
      expect(isAfter(date1, date2)).toBe(false)
    })

    it('isBefore - 前の日付かチェック', () => {
      expect(isBefore(date1, date2)).toBe(true)
      expect(isBefore(date2, date1)).toBe(false)
    })

    it('isBetween - 期間内かチェック', () => {
      expect(isBetweenDates(date2, date1, date3)).toBe(true)
      expect(isBetweenDates(date1, date2, date3)).toBe(false)
    })

    it('isSameOrAfter - 同じか後の日付かチェック', () => {
      expect(isSameOrAfterDate(date2, date1)).toBe(true)
      expect(isSameOrAfterDate(date2, date2)).toBe(true)
      expect(isSameOrAfterDate(date1, date2)).toBe(false)
    })

    it('isSameOrBefore - 同じか前の日付かチェック', () => {
      expect(isSameOrBeforeDate(date1, date2)).toBe(true)
      expect(isSameOrBeforeDate(date2, date2)).toBe(true)
      expect(isSameOrBeforeDate(date3, date2)).toBe(false)
    })

    it('isSame - 同じ日付かチェック', () => {
      expect(isSame(date2, date2)).toBe(true)
      expect(isSame(date1, date2)).toBe(false)
    })
  })

  describe('getNow', () => {
    it('現在日時を取得', () => {
      const result = getNow()
      expect(typeof result.format).toBe('function')
      expect(result.format('YYYY-MM-DD')).toBe('2024-01-15')
    })
  })

  describe('getNowWithFormat', () => {
    it('現在日時を指定フォーマットで取得', () => {
      expect(getNowWithFormat('YYYY/MM/DD')).toBe('2024/01/15')
    })
  })

  describe('getTomorrow', () => {
    it('明日の日付を取得', () => {
      const result = getTomorrow()
      expect(result.format('YYYY-MM-DD')).toBe('2024-01-16')
    })
  })

  describe('getTomorrowWithFormat', () => {
    it('明日の日付を指定フォーマットで取得', () => {
      expect(getTomorrowWithFormat('YYYY/MM/DD')).toBe('2024/01/16')
    })
  })

  describe('getRelativeTime', () => {
    it('相対時間を取得', () => {
      const pastDate = new Date('2024-01-14T10:30:00')
      const result = getRelativeTime(pastDate)
      expect(result).toMatch(/ago|day/)
    })
  })

  describe('addDate', () => {
    it('日付を加算', () => {
      const result = addDate(testDate, 5, 'day')
      expect(dayjs(result).format('YYYY-MM-DD')).toBe('2024-01-20')
    })

    it('月を加算', () => {
      const result = addDate(testDate, 2, 'month')
      expect(dayjs(result).format('YYYY-MM-DD')).toBe('2024-03-15')
    })
  })

  describe('subtractDate', () => {
    it('日付を減算', () => {
      const result = subtractDate(testDate, 5, 'day')
      expect(dayjs(result).format('YYYY-MM-DD')).toBe('2024-01-10')
    })

    it('月を減算', () => {
      const result = subtractDate(testDate, 2, 'month')
      expect(dayjs(result).format('YYYY-MM-DD')).toBe('2023-11-15')
    })
  })

  describe('getStartOfDay', () => {
    it('日の開始時刻を取得', () => {
      const result = getStartOfDay(testDate)
      expect(dayjs(result).format('YYYY-MM-DD HH:mm:ss')).toBe('2024-01-15 00:00:00')
    })
  })

  describe('getEndOfDay', () => {
    it('日の終了時刻を取得', () => {
      const result = getEndOfDay(testDate)
      expect(dayjs(result).format('YYYY-MM-DD HH:mm:ss')).toBe('2024-01-15 23:59:59')
    })
  })

  describe('getStartOfMonth', () => {
    it('月の開始日を取得', () => {
      const result = getStartOfMonth(testDate)
      expect(dayjs(result).format('YYYY-MM-DD')).toBe('2024-01-01')
    })
  })

  describe('getEndOfMonth', () => {
    it('月の終了日を取得', () => {
      const result = getEndOfMonth(testDate)
      expect(dayjs(result).format('YYYY-MM-DD')).toBe('2024-01-31')
    })
  })

  describe('getStartOfYear', () => {
    it('年の開始日を取得', () => {
      const result = getStartOfYear(testDate)
      expect(dayjs(result).format('YYYY-MM-DD')).toBe('2024-01-01')
    })
  })

  describe('getEndOfYear', () => {
    it('年の終了日を取得', () => {
      const result = getEndOfYear(testDate)
      expect(dayjs(result).format('YYYY-MM-DD')).toBe('2024-12-31')
    })
  })

  describe('getDiff', () => {
    it('日付の差分を取得', () => {
      const date1 = new Date('2024-01-10')
      const date2 = new Date('2024-01-15')
      expect(getDiff(date2, date1, 'day')).toBe(5)
    })
  })

  describe('getDuration', () => {
    it('期間を取得', () => {
      const date1 = new Date('2024-01-10')
      const date2 = new Date('2024-01-15')
      const result = getDuration(date1, date2)
      expect(result).toBeInstanceOf(Object)
      expect(result.days()).toBe(5)
    })
  })

  describe('getWeekday', () => {
    it('曜日を取得', () => {
      const result = getWeekday(testDate)
      expect(typeof result).toBe('number')
      expect(result).toBeGreaterThanOrEqual(0)
      expect(result).toBeLessThanOrEqual(6)
    })
  })

  describe('getMonth', () => {
    it('月を取得', () => {
      const result = getMonth(testDate)
      expect(result).toBe(0) // 0-indexed (January = 0)
    })
  })

  describe('getQuarter', () => {
    it('四半期を取得', () => {
      const result = getQuarter(testDate)
      expect(result).toBe(1)
    })
  })

  describe('formatCustom', () => {
    it('カスタムフォーマットで日付を整形', () => {
      const result = formatCustom(testDate, 'YYYY年MM月DD日')
      expect(result).toBe('2024年01月15日')
    })
  })
})
