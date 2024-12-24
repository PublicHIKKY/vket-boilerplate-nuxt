# layer/openapi-zod-client

[openapi-zod-client](https://github.com/astahmer/openapi-zod-client)を利用し、[OpenAPI-Specification](https://github.com/OAI/OpenAPI-Specification)からzodスキーマ及び型定義を出力する、bunワークスペースです。

## Not Supported

[openapi-zod-client](https://github.com/astahmer/openapi-zod-client)は[zodios](https://github.com/ecyrbe/zodios)を出力しますが、このワークスペースはzodiosの出力を現在はサポートしていません。
zodスキーマと型定義の出力のみサポートします。

## 用語

ここでの用語を定義します。

- モデル: zodスキーマとその型定義

## リポジトリの追加

1. OpenAPI-Specificationのyamlを含むリポジトリを、submodulesディレクトリに、git-submoduleとして追加します

```shell-session
$ git submodule add https://github.com/foo/foo-api submodules/foo-api
```

- Hint
    - 同じオーガニゼーションにあるリポジトリをsubmoduleとして追加する場合、`../`を使って追加することができます
    - 前述の`git submodule add`コマンドの場合は実のところ、gitのcredential情報sshで保存しているしている人が`git submodule update`をする場合にうまくいきませんが、`../`を使う場合にはcredential情報をhttpsまたはsshのどちらに保存していても成功します
    - ディレクトリ相対パスの`../`と混同しないでください

```shell-session
$ git submodule add ../foo-api submodules/foo-api
```

1. zod-config.jsonにendpointを追加します

```shell-session
$ vim zod-config.json  # 好きなエディタで開いてください
```

zod-config.json:
```json
{
  "endpoints": [
    {
      "name": "foo-api",
      "path": "./submodules/foo-api/reference/openapi.yaml",
      "output": "./app/models/openapi/foo.ts"
    }
  ],
  "prettierConfig": "./prettierrc",
  "template": "./openapi/template.hbs"
}
```

`"endpoints"`には`foo-api`と同様の、複数のリポジトリを追加することができます。

## モデルの出力

1. `bun build`を実行します

それぞれの`endpoints`に書かれている`.output`通りの`.ts`に、モデルが出力されます。
