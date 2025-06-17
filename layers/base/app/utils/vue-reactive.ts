import type { DeepReadonly, Reactive } from 'vue'
import { writableClone } from './object'

/**
 * 深いリアクティブユーティリティ
 * ネストされたオブジェクトの完全なtoRaw変換とreadonly解除機能
 */

/**
 * オブジェクトかどうかを判定する型ガード
 */
function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value) && !(value instanceof Date) && !(value instanceof RegExp)
}

/**
 * ネストされたオブジェクトの完全なtoRaw変換
 * リアクティブプロキシを完全に除去
 */
export const toRawDeep = <T>(refValue: T): T => {
  const raw = toRaw(refValue)

  if (raw === null || raw === undefined) {
    return raw
  }

  if (typeof raw === 'string' || typeof raw === 'number' || typeof raw === 'boolean') {
    return raw
  }

  if (raw instanceof Date || raw instanceof RegExp) {
    return raw
  }

  if (Array.isArray(raw)) {
    const mappedArray = raw.map(item => toRawDeep(item))
    return mappedArray as unknown as T
  }

  if (isRecord(raw)) {
    const result: Record<string, unknown> = {}
    for (const key in raw) {
      if (Object.prototype.hasOwnProperty.call(raw, key)) {
        result[key] = toRawDeep(raw[key])
      }
    }
    return result as unknown as T
  }

  return raw
}

/**
 * readonly オブジェクトを書き込み可能にする
 * DeepReadonly<T> → WritableDeep<T> の変換
 */
export const unreadonly = <T>(immutable: DeepReadonly<T>): unknown =>
  writableClone(toRawDeep(immutable))

/**
 * リアクティブオブジェクトの完全な複製
 * 元のオブジェクトのリアクティブ性を保持しつつ、新しいインスタンスを作成
 */
export const deepCloneReactive = <T>(reactiveObj: T): T => {
  const raw = toRawDeep(reactiveObj)
  const cloned = writableClone(raw)
  return ref(cloned).value
}

/**
 * 条件付きリアクティブ変換
 * 条件がtrueの場合のみリアクティブにする
 */
export const conditionalReactive = <T extends object>(value: T, condition: boolean): T | Reactive<T> => {
  return condition ? reactive(value) : value
}
