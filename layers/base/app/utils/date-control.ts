import dayjs, { ManipulateType } from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import duration from 'dayjs/plugin/duration'
import isBetween from 'dayjs/plugin/isBetween'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import localeData from 'dayjs/plugin/localeData'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import quarterOfYear from 'dayjs/plugin/quarterOfYear'
import relativeTime from 'dayjs/plugin/relativeTime'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

dayjs.locale('ja')

dayjs.extend(customParseFormat)
dayjs.extend(localizedFormat)
dayjs.extend(timezone)
dayjs.extend(utc)
dayjs.extend(isBetween)
dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)
dayjs.extend(localeData)
dayjs.extend(duration)
dayjs.extend(quarterOfYear)
dayjs.extend(relativeTime)
dayjs.tz.setDefault('Asia/Tokyo')

const _locale = {
  0: 'ja',
  1: 'en',
} as const

type LocaleData = (typeof _locale)[keyof typeof _locale]

/**
 * @description 日付取得・フォーマット
 * @returns Result:Date
 */
export function formatDate(
  format: string,
  date: Date | string = new Date(),
): string {
  return dayjs(date).format(format)
}

export function formatEnglishDate(date: Date | string): string {
  return formatDate('LL', date)
}

export function formatJapaneseDate(date: Date | string): string {
  return formatDate('YYYY/MM/DD', date)
}

export function formatEnglishDateTime(date: Date | string): string {
  return formatDate('LL LT', date)
}

export function formatJapaneseDateTime(date: Date | string): string {
  return formatDate('YYYY/MM/DD HH:mm', date)
}

export function formatDateUnixTime(date: Date | string = new Date()): number {
  return dayjs(date).unix()
}

// タイムゾーンをJSTからローカルのタイムゾーンに変更
export function formatJSTtoLocalTimezone(date: string): string {
  const dateJST = dayjs(date).tz('Asia/Tokyo', true)
  const dateUSJ = dayjs(dateJST).tz('UTC').format('YYYY-MM-DDTHH:mm')
  return dayjs(dateUSJ).tz(dayjs.tz.guess()).format('YYYY-MM-DDTHH:mm')
}

// タイムゾーンをローカルのタイムゾーンからJSTに変更
export function formatLocalTimezoneToJST(date: string): string {
  const dateWithTimezone = dayjs(date).tz(dayjs.tz.guess(), true)
  return dayjs(dateWithTimezone).tz('Asia/Tokyo').format('YYYY-MM-DDTHH:mm')
}

export function getCurrentDate(locale: LocaleData = 'ja'): string {
  const date = new Date()
  return locale === 'ja' ? formatJapaneseDate(date) : formatEnglishDate(date)
}

// ユーザのローカルのタイムゾーンを取得
export function getLocalTimezone(): string {
  return 'UTC ' + dayjs().tz(dayjs.tz.guess()).format('Z')
}

// 日付加算されたDateオブジェクトの作成
export function addDateTime(
  value: number,
  unit: ManipulateType = 'day',
  base: Date | string,
) {
  return dayjs(base).add(value, unit).toDate()
}

/**
 * @description 時差対応
 * @returns Result:Date
 */
export function convertTimeToUtc(date: Date | string): string {
  return dayjs(date).utc().format()
}

/**
 * @description 指定日時の比較判定
 * @returns Result:number
 */

export function diffDays(
  to: Date | string,
  from: Date | string | undefined = undefined,
  format: dayjs.UnitType = 'day',
): number {
  const toDate = dayjs(to)
  const fromDate = from ? dayjs(from) : dayjs()
  return fromDate.diff(toDate, format)
}

export function getDiffTimeByUnit(
  to: Date | string,
  from: Date | string | undefined = undefined,
  unitType: dayjs.UnitType = 'day',
): number {
  const millisecond = diffDays(to, from, 'millisecond')
  if (unitType === 'day') {
    return Math.floor(millisecond / 1000 / 60 / 60 / 24)
  }
  if (unitType === 'hour') {
    return Math.floor(millisecond / 1000 / 60 / 60) % 24
  }
  if (unitType === 'minute') {
    return Math.floor(millisecond / 1000 / 60) % 60
  }
  if (unitType === 'second') {
    return Math.floor(millisecond / 1000) % 60
  }
  return -1
}

export function isBeforeTargetDate(date: Date | string): boolean {
  return !!dayjs().isSameOrBefore(dayjs(date))
}

export function isBetweenTargetDates(
  fromDate: Date | string,
  toDate: Date | string,
): boolean {
  return !!dayjs().isBetween(dayjs(fromDate), dayjs(toDate))
}

export function isAfterTargetDate(date: Date | string): boolean {
  return !!dayjs().isSameOrAfter(dayjs(date))
}

// Additional utility functions for tests

export function formatTimestamp(timestamp: number, format: string): string {
  return dayjs(timestamp).format(format)
}

export function timestampToDate(timestamp: number): Date {
  return dayjs(timestamp).toDate()
}

export function dateToTimestamp(date: Date | string): number {
  // Ensure we're working with UTC to match test expectations
  return dayjs.utc(date).valueOf()
}

export function isAfter(date1: Date | string, date2: Date | string): boolean {
  return dayjs(date1).isAfter(dayjs(date2))
}

export function isBefore(date1: Date | string, date2: Date | string): boolean {
  return dayjs(date1).isBefore(dayjs(date2))
}

export function isBetweenDates(date: Date | string, start: Date | string, end: Date | string): boolean {
  const d = dayjs(date)
  const s = dayjs(start)
  const e = dayjs(end)
  return (d.isAfter(s) && d.isBefore(e)) || d.isSame(s) || d.isSame(e)
}

export function isSameOrAfterDate(date1: Date | string, date2: Date | string): boolean {
  const d1 = dayjs(date1)
  const d2 = dayjs(date2)
  return d1.isAfter(d2) || d1.isSame(d2)
}

export function isSameOrBeforeDate(date1: Date | string, date2: Date | string): boolean {
  const d1 = dayjs(date1)
  const d2 = dayjs(date2)
  return d1.isBefore(d2) || d1.isSame(d2)
}

export function isSame(date1: Date | string, date2: Date | string): boolean {
  return dayjs(date1).isSame(dayjs(date2))
}

export function getNow(): dayjs.Dayjs {
  return dayjs()
}

export function getNowWithFormat(format: string): string {
  return dayjs().format(format)
}

export function getTomorrow(): dayjs.Dayjs {
  return dayjs().add(1, 'day')
}

export function getTomorrowWithFormat(format: string): string {
  return dayjs().add(1, 'day').format(format)
}

export function getRelativeTime(date: Date | string): string {
  return dayjs(date).fromNow()
}

export function addDate(date: Date | string, amount: number, unit: dayjs.ManipulateType): Date {
  return dayjs(date).add(amount, unit).toDate()
}

export function subtractDate(date: Date | string, amount: number, unit: dayjs.ManipulateType): Date {
  return dayjs(date).subtract(amount, unit).toDate()
}

export function getStartOfDay(date: Date | string): Date {
  return dayjs(date).startOf('day').toDate()
}

export function getEndOfDay(date: Date | string): Date {
  return dayjs(date).endOf('day').toDate()
}

export function getStartOfMonth(date: Date | string): Date {
  return dayjs(date).startOf('month').toDate()
}

export function getEndOfMonth(date: Date | string): Date {
  return dayjs(date).endOf('month').toDate()
}

export function getStartOfYear(date: Date | string): Date {
  return dayjs(date).startOf('year').toDate()
}

export function getEndOfYear(date: Date | string): Date {
  return dayjs(date).endOf('year').toDate()
}

export function getDiff(date1: Date | string, date2: Date | string, unit: dayjs.UnitType = 'millisecond'): number {
  return dayjs(date1).diff(dayjs(date2), unit)
}

export function getDuration(date1: Date | string, date2: Date | string): ReturnType<typeof dayjs.duration> {
  return dayjs.duration(dayjs(date2).diff(dayjs(date1)))
}

export function getWeekday(date: Date | string): number {
  return dayjs(date).day()
}

export function getMonth(date: Date | string): number {
  return dayjs(date).month()
}

export function getQuarter(date: Date | string): number {
  return dayjs(date).quarter()
}

export function formatCustom(date: Date | string, format: string): string {
  return dayjs(date).format(format)
}
