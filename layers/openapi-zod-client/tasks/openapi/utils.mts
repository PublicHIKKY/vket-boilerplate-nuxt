import { promises as fs } from 'fs'
import path from 'path'

/**
 * カレントディレクトリから最も近い、zod-config.jsonを持つディレクトリの絶対パスを返します。
 */
export const findConfigDirectory = async (currenetDir: string = path.resolve('.')): Promise<string> => {
  if (currenetDir === '/') {
    throw new Error('zod-config.json is not found.')
  }

  try {
    // if zod-config.json exists
    await fs.access(`${currenetDir}/zod-config.json`, fs.constants.F_OK)
    return currenetDir
  } catch (_) {
    // else, find the parent directory
    return findConfigDirectory(path.resolve(currenetDir, '..'))
  }
}

/**
 * プロジェクトのzod-config.jsonを探します。
 */
export const findConfigPath = async (currenetDir: string = path.resolve('.')): Promise<string | null> => {
  try {
    return `${await findConfigDirectory(currenetDir)}/zod-config.json`
  } catch (_) {
    return null
  }
}
