This file is a merged representation of a subset of the codebase, containing specifically included files, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of a subset of the repository's contents that is considered the most important context.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Only files matching these patterns are included: layers/open-api/**/*
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
layers/
  open-api/
    app/
      models/
        openapi/
          .gitkeep
    openapi/
      example-merged.yml
      example.yml
    scripts/
      make-zod.ts
      template.hbs
    package.json
    tsconfig.json
```

# Files

## File: layers/open-api/app/models/openapi/.gitkeep
```
# This directory will contain generated API clients
# Files in this directory are automatically generated and should not be edited manually
```

## File: layers/open-api/openapi/example-merged.yml
```yaml
openapi: 3.0.3
info:
  title: Example API
  description: Example API for demonstrating OpenAPI integration
  version: 1.0.0
servers:
  - url: https://api.example.com/v1
    description: Production server
  - url: https://staging-api.example.com/v1
    description: Staging server
paths:
  /users:
    get:
      operationId: getUsers
      summary: Get all users
      description: Retrieve a list of all users
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
                properties:
                  users:
                    type: array
                    items:
                      $ref: '#/components/schemas/User'
                  total:
                    type: number
                    description: Total number of users
    post:
      operationId: createUser
      summary: Create a new user
      description: Create a new user with the provided information
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateUserRequest'
      responses:
        '201':
          description: User created successfully
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
  /users/{id}:
    get:
      operationId: getUserById
      summary: Get user by ID
      description: Retrieve a specific user by their ID
      parameters:
        - name: id
          in: path
          required: true
          description: User ID
          schema:
            type: string
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
        '404':
          description: User not found
components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: string
          description: Unique user identifier
        email:
          type: string
          format: email
          description: User email address
        name:
          type: string
          description: User full name
        createdAt:
          type: string
          format: date-time
          description: Account creation timestamp
        updatedAt:
          type: string
          format: date-time
          description: Last update timestamp
      required:
        - id
        - email
        - name
        - createdAt
        - updatedAt
    CreateUserRequest:
      type: object
      properties:
        email:
          type: string
          format: email
          description: User email address
        name:
          type: string
          description: User full name
        password:
          type: string
          minLength: 8
          description: User password (minimum 8 characters)
      required:
        - email
        - name
        - password
```

## File: layers/open-api/openapi/example.yml
```yaml
openapi: 3.0.3
info:
  title: Example API
  description: Example API for demonstrating OpenAPI integration
  version: 1.0.0
servers:
  - url: https://api.example.com/v1
    description: Production server
  - url: https://staging-api.example.com/v1
    description: Staging server

paths:
  /users:
    get:
      operationId: getUsers
      summary: Get all users
      description: Retrieve a list of all users
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
                properties:
                  users:
                    type: array
                    items:
                      $ref: '#/components/schemas/User'
                  total:
                    type: number
                    description: Total number of users
    post:
      operationId: createUser
      summary: Create a new user
      description: Create a new user with the provided information
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateUserRequest'
      responses:
        '201':
          description: User created successfully
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'

  /users/{id}:
    get:
      operationId: getUserById
      summary: Get user by ID
      description: Retrieve a specific user by their ID
      parameters:
        - name: id
          in: path
          required: true
          description: User ID
          schema:
            type: string
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
        '404':
          description: User not found

components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: string
          description: Unique user identifier
        email:
          type: string
          format: email
          description: User email address
        name:
          type: string
          description: User full name
        createdAt:
          type: string
          format: date-time
          description: Account creation timestamp
        updatedAt:
          type: string
          format: date-time
          description: Last update timestamp
      required:
        - id
        - email
        - name
        - createdAt
        - updatedAt

    CreateUserRequest:
      type: object
      properties:
        email:
          type: string
          format: email
          description: User email address
        name:
          type: string
          description: User full name
        password:
          type: string
          minLength: 8
          description: User password (minimum 8 characters)
      required:
        - email
        - name
        - password
```

## File: layers/open-api/scripts/make-zod.ts
```typescript
#!/usr/bin/env bun
/**
 * OpenAPI から Zod スキーマと型安全なAPIクライアントを自動生成
 */

import { execSync } from 'child_process'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import yaml from 'js-yaml'
import path from 'path'

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
if (process.argv[1] === import.meta.url) {
  main()
}
```

## File: layers/open-api/scripts/template.hbs
```handlebars
{{!-- OpenAPI から Zod スキーマ生成用テンプレート --}}
import { z } from 'zod/v3'

{{#each operations}}
{{#each responses}}
{{#if content}}
/**
 * {{../summary}}
 * {{../description}}
 */
export const {{toCamelCase ../operationId}}ResponseSchema = z.object({
{{#each content}}
  {{#each schema.properties}}
  {{toCamelCase @key}}: {{{zodType this}}},{{#if description}} // {{description}}{{/if}}
  {{/each}}
{{/each}}
})

export type {{toCamelCase ../operationId}}ResponseType = z.infer<typeof {{toCamelCase ../operationId}}ResponseSchema>

{{/each}}
{{/if}}
{{/each}}

{{#if requestBody}}
/**
 * Request schema for {{summary}}
 */
export const {{toCamelCase operationId}}RequestSchema = z.object({
{{#each requestBody.content}}
  {{#each schema.properties}}
  {{toCamelCase @key}}: {{{zodType this}}},{{#if description}} // {{description}}{{/if}}
  {{/each}}
{{/each}}
})

export type {{toCamelCase operationId}}RequestType = z.infer<typeof {{toCamelCase operationId}}RequestSchema>

{{/if}}

{{#if parameters}}
/**
 * Parameters schema for {{summary}}
 */
export const {{toCamelCase operationId}}ParametersSchema = z.object({
{{#each parameters}}
  {{toCamelCase name}}: {{{zodType schema}}},{{#if description}} // {{description}}{{/if}}
{{/each}}
})

export type {{toCamelCase operationId}}ParametersType = z.infer<typeof {{toCamelCase operationId}}ParametersSchema>

{{/if}}
{{/each}}

/**
 * API client functions
 */
{{#each operations}}
export const {{toCamelCase operationId}} = async (
{{#if requestBody}}
  data: {{toCamelCase operationId}}RequestType,
{{/if}}
{{#if parameters}}
  params: {{toCamelCase operationId}}ParametersType,
{{/if}}
) => {
  // TODO: Implement API call logic using fetcher from api-enhanced.ts
  throw new Error('API call not implemented yet')
}

{{/each}}
```

## File: layers/open-api/tsconfig.json
```json
{
  "compilerOptions": {
    "lib": [
      "ESNext",
      "DOM"
    ],
    "module": "esnext",
    "target": "esnext",
    "moduleResolution": "bundler",
    "moduleDetection": "force",
    "allowImportingTsExtensions": true,
    "noEmit": true,
    "composite": true,
    "strict": true,
    "downlevelIteration": true,
    "skipLibCheck": true,
    "jsx": "preserve",
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "allowJs": true,
    "types": [
      "bun-types",
      "node"
    ]
  },
  "include": [
    "scripts/**/*"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

## File: layers/open-api/package.json
```json
{
  "name": "vket-boilerplate-nuxt-open-api",
  "private": true,
  "type": "module",
  "version": "0.1.0",
  "scripts": {
    "generate": "bun run scripts/make-zod.ts",
    "clean": "rm -rf app/models/openapi/*",
    "package-update": "bunx npm-check-updates -i",
    "clean-install": "bun run ../../scripts/clean_install.js",
    "allclean-install": "bun run ../../scripts/clean_install.js all"
  },
  "dependencies": {
    "zod": "^4.4.3"
  },
  "devDependencies": {
    "openapi-zod-client": "^1.18.3",
    "js-yaml": "^5.2.1",
    "@types/js-yaml": "^4.0.9",
    "@types/node": "^26.1.0"
  }
}
```
