import fs, { type PathLike } from 'fs'
import { execSync } from 'child_process'
import path from 'path'
import { findConfigDirectory } from './utils/file.mts'
import { Endpoint, configSchema } from './type.mts'
import { ensureValueOf } from '../../../base/app/utils/zod.ts'

const configPath = await findConfigDirectory()
const config: unknown = JSON.parse(fs.readFileSync(configPath, 'utf8'))
ensureValueOf(configSchema, config)

/**
 * Executes a shell command.
 * @param command - The command to run.
 */
const runCommand = (command: string) => {
  console.info(`Running: ${command}`)
  execSync(command, { stdio: 'inherit' })
}

/**
 * Ensures the given directory exists, creating it if necessary.
 * @param dirPath - The path to the directory.
 */
const ensureDirectoryExists = (dirPath: PathLike) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }
}

/**
 * Combines open api files that are split into multiple files
 * @param inputFiles
 * @param outputFileName
 */
const mergeYamlFiles = (inputFiles: string, outputFileName: string) => {
  try {
    console.info(inputFiles)
    const outPutFilePath = path.resolve(
      `./node_modules/.tmp-open-api/${outputFileName}.yaml`,
    )
    const dirPath = path.dirname(outPutFilePath)
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true })
    }

    const command = `bunx redocly bundle ${inputFiles} -o ${outPutFilePath}`
    runCommand(command)
    return outPutFilePath
  } catch (e) {
    console.error('Error merging YAML files:', e)
  }
}

/**
 * Builds the Zod client for the given endpoint.
 * @param endpoint - The endpoint configuration.
 */
const buildZodClient = ({ name, path: openapiPath, output }: Endpoint) => {
  const mergeFilePath = mergeYamlFiles(openapiPath, name)

  const prettierConfig = config.prettierConfig
  const template = config.template
  const command = `yarn dlx openapi-zod-client ${mergeFilePath} -o ${output} -p ${prettierConfig} -t ${template}`

  // Ensure the output directory exists
  ensureDirectoryExists(path.dirname(output))

  runCommand(command)
}

/**
 * Builds Zod clients for all endpoints.
 */
const buildAll = () => {
  config.endpoints.forEach(buildZodClient)
}

buildAll()
