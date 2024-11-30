import dayjs, { ManipulateType } from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import isBetween from 'dayjs/plugin/isBetween'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import localeData from 'dayjs/plugin/localeData'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

dayjs.locale('ja')

dayjs.extend(localizedFormat)
dayjs.extend(timezone)
dayjs.extend(utc)
dayjs.extend(isBetween)
dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)
dayjs.tz.setDefault('Asia/Tokyo')
dayjs.extend(localeData)
dayjs.extend(customParseFormat)

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
  return formatDate('YYYY/MM/DD h:mm A', date)
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
