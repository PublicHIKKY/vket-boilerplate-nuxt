import fs from 'fs'
import { findConfigPath } from './utils.mts'
import { Config } from './type.mts'

/**
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/replace#%E7%BD%AE%E6%8F%9B%E6%96%87%E5%AD%97%E5%88%97%E3%81%A8%E3%81%97%E3%81%A6%E3%81%AE%E9%96%A2%E6%95%B0%E3%81%AE%E6%8C%87%E5%AE%9A
 */
type Replacer = ((match: string, ...captured: string[]) => string)

type Replacement = {
  before: RegExp
  after: string | Replacer
}

/**
 * openapi-zod-clientだけで対応しきれない部分を置換する
 */
const replacementList: Replacement[] = [
  {
    before:
      /(export const|export type|z\.infer<typeof|generateMock\() (\w+:)+(\w+)/g,
    after: (match, p1) => {
      const beforeString = match.replace(p1, '')
      const stringList = beforeString.split(':')
      return stringList.reduce((string, value, index) =>
        index === 0 ? string + value : string + value.charAt(0).toUpperCase() + value.slice(1)
      , p1)
    },
  },
  {
    before:
      /(export const|export type|z\.infer<typeof|generateMock\() (\w+\.)+(\w+)( =|>;)/g,

    after: (match, p1) => {
      const beforeString = match.replace(p1, '')
      const stringList = beforeString.split('.')
      return stringList.reduce((string, value, index) => {
        if (index === 0) {
          return string + value
        }
        return string + value.charAt(0).toUpperCase() + value.slice(1)
      }, p1)
    },
  },
  {
    before: /\[\]:/g,
    after: ':',
  },
  {
    before: /.passthrough\(\)/g,
    after: '',
  },
  // NOTE: 全てのスネークケースをキャメルケースに変換する
  {
    before: /[a-zA-Z]_[a-zA-Z]/g,
    after: (match) => {
      const beforeUnderScoreChar = match.charAt(0)
      const afterUnderScoreChar = match.charAt(2)
      return beforeUnderScoreChar + afterUnderScoreChar.toUpperCase()
    },
  },
  // NOTE: z.enumがキャメルケースになり、型エラーになるので元に戻す
  {
    before: /z\.enum\(\[([^\]]+)\]\)/g,
    after: match =>
      match.replace(
        /([a-z0-9])([A-Z])/g,
        (_matched: string, p1: string, p2: string) => `${p1}_${p2.toLowerCase()}`,
      ),
  },

  // NOTE: openapi-zod-client時にスキーマにデフォルト値を設定している場合は、undfinedを入力値として許容する事になるので必須項目で型エラーが発生してるために削除する。
  {
    before: /\.default\(true\)|\.default\(false\)|\.default\(\w+\)/g,
    after: '',
  },

  // NOTE: z.lazyを使うと型エラーになるのでmakeRecursiveSchemaに変換する
  {
    before: /const (\w+) = z.lazy\(\(\) =>/g,
    after: 'const $1 = makeRecursiveSchema(($1) =>',
  },
]

const configPath = await findConfigPath()
if (configPath === null) {
  console.error('zod-config.json not found.')
  process.exit(1)
}
const config: Config = JSON.parse(fs.readFileSync(configPath, 'utf8'))

for (const endpoint of config.endpoints) {
  const outputPath = endpoint.output
  if (!fs.existsSync(outputPath)) {
    console.error(`File not found: ${outputPath}`)
    continue
  }

  const fileContent = fs.readFileSync(outputPath, 'utf8')
  const updatedContent = replacementList.reduce(
    (acc, { before, after }) =>
      // 不必要な分岐に見えるが、オーバーロード解決のために必要
      after instanceof Function ? acc.replace(before, after) : acc.replace(before, after),
    fileContent,
  )
  fs.writeFileSync(outputPath, updatedContent, 'utf8')
}
