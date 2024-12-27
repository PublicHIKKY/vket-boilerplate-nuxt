/**
 * 値がundefinedな要素を削除する。
 */
export function getRestrictedRecord(
  unrestricted: Record<string, string | undefined>,
): Record<string, string> {
  const result: Record<string, string> = {}

  for (const [key, value] of Object.entries(unrestricted)) {
    if (value === undefined) {
      continue
    }
    result[key] = value
  }

  return result
}
