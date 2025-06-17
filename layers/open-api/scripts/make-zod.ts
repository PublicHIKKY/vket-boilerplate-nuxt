#!/usr/bin/env bun
/**
 * OpenAPI から Zod スキーマと型安全なAPIクライアントを自動生成
 */

import { execSync } from 'child_process'
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import path from 'path'
import yaml from 'js-yaml'

/**
 * エンドポイント設定
 */
interface Endpoint {
  name: string
  path: string
  output: string
}

/**
 * 設定
 */
const endpoints: Endpoint[] = [
  {
    name: 'example',
    path: './openapi/example.yml',
    output: './app/models/openapi/example.ts',
  },
  // 追加のエンドポイントをここに定義
]

const template = './scripts/template.hbs'

/**
 * コマンドを実行
 */
const runCommand = (command: string): void => {
  console.info(`Executing: ${command}`)
  try {
    execSync(command, { stdio: 'inherit' })
  } catch (error) {
    console.error(`Command failed: ${command}`)
    throw error
  }
}

/**
 * YAMLファイルをマージ
 */
const mergeYamlFiles = (openapiPath: string, name: string): string => {
  const baseDir = path.dirname(openapiPath)
  const mergedPath = path.join(baseDir, `${name}-merged.yml`)
  
  if (!existsSync(openapiPath)) {
    console.warn(`OpenAPI file not found: ${openapiPath}`)
    return openapiPath
  }
  
  try {
    const content = readFileSync(openapiPath, 'utf8')
    const parsed = yaml.load(content) as any
    
    // ここで必要に応じてYAMLファイルのマージ処理を実装
    // 現在は単純にそのまま書き出し
    writeFileSync(mergedPath, yaml.dump(parsed))
    
    return mergedPath
  } catch (error) {
    console.error(`Failed to merge YAML files: ${error}`)
    return openapiPath
  }
}

/**
 * Zodクライアントをビルド
 */
const buildZodClient = ({ name, path: openapiPath, output }: Endpoint): void => {
  console.info(`Building Zod client for ${name}...`)
  
  // 出力ディレクトリを作成
  const outputDir = path.dirname(output)
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true })
  }
  
  // YAMLファイルをマージ
  const mergeFilePath = mergeYamlFiles(openapiPath, name)
  
  // OpenAPI-Zod-Client でコード生成
  const command = `bunx openapi-zod-client ${mergeFilePath} -o ${output} -t ${template}`
  runCommand(command)
  
  console.info(`✅ Generated ${output}`)
}

/**
 * テンプレートファイルが存在しない場合は作成
 */
const ensureTemplate = (): void => {
  if (!existsSync(template)) {
    const templateContent = `{{#each operations}}
{{#each responses}}
{{#if content}}
export const {{toCamelCase ../operationId}}ResponseSchema = z.object({
{{#each content}}
  {{#each schema.properties}}
  {{toCamelCase @key}}: {{{zodType this}}},
  {{/each}}
});
export type {{toCamelCase ../operationId}}ResponseType = z.infer<typeof {{toCamelCase ../operationId}}ResponseSchema>;

{{/each}}
{{/if}}
{{/each}}

{{#if requestBody}}
export const {{toCamelCase operationId}}RequestSchema = z.object({
{{#each requestBody.content}}
  {{#each schema.properties}}
  {{toCamelCase @key}}: {{{zodType this}}},
  {{/each}}
{{/each}}
});
export type {{toCamelCase operationId}}RequestType = z.infer<typeof {{toCamelCase operationId}}RequestSchema>;

{{/if}}
{{/each}}`
    
    const templateDir = path.dirname(template)
    if (!existsSync(templateDir)) {
      mkdirSync(templateDir, { recursive: true })
    }
    
    writeFileSync(template, templateContent)
    console.info(`Created template file: ${template}`)
  }
}

/**
 * メイン処理
 */
const main = (): void => {
  console.info('🚀 Starting OpenAPI Zod client generation...')
  
  // テンプレートファイルを確認・作成
  ensureTemplate()
  
  // 各エンドポイントに対してZodクライアントを生成
  for (const endpoint of endpoints) {
    try {
      buildZodClient(endpoint)
    } catch (error) {
      console.error(`Failed to build client for ${endpoint.name}:`, error)
      process.exit(1)
    }
  }
  
  console.info('✅ OpenAPI Zod client generation completed!')
}

// スクリプトとして実行された場合のみメイン処理を実行
if (import.meta.main) {
  main()
}