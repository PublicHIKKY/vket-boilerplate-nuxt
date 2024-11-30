/**
 * 型関数を定義するモジュール。
 *
 * それ以外の特定の型や、なんらかの種類（type・kind）を定義するモジュールではないです。
 */

/**
 * 一部をnullableにする
 */
export type Nullable<T, V extends keyof T> = {
  [K in keyof T]: K extends V ? T[K] | null : T[K]
}

export type ValueOf<T> = T[keyof T]

/**
 * 型を上書き
 */
export type Overwrite<T, U extends { [Key in keyof T]?: unknown }> = Omit<
  T,
  keyof U
> &
U
