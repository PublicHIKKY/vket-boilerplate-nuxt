# open api

## Abstract

## Description

- openapi-zod-client を使って zod ファイルを生成するための生成元と生成する際の script 等を管理
- CI で git submodule を扱のが難しかったため、zod ファイルは差分が出たら都度コミットする

## Rules

- openapi の取得先が増えた場合以下の作業を行う
  1. `git submodule add ../{リポジトリID} ./openapi/submodule/{ディレクトリ名}` を実行する  
     カレントディレクトリがすでに「./openapi/submodule」の場合「ディレクトリ名」だけで良い
  2. zod-config.jsonを編集  
     endpointsに以下の情報を追加してください。
  ```json
  {
    "name": "{1.で設定したディレクトリ名}",
    "path": "{submodule内にあるopenApi定義のpath（例：./openapi/submodule/cloud-store-api/openapi/cloud-store/reference/CloudStoreAPI.yaml）}",
    "output": "./src/models/{ディレクトリ名をローキャメルケース}Api.ts"
  },
  ```
