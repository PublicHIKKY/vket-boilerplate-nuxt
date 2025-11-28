---
name: nuxt4-models
description: Generates standardized Nuxt4 model definitions with Zod schemas for type-safe validation. Use when creating or modifying files in layers/*/app/models/. Provides patterns for constant/enum definitions, Zod object schemas, OpenAPI type extensions, and helper functions (display converters, factories, filters). Enforces consistent naming conventions and best practices for the model layer.
---

# Model Creator

## 概要

このスキルは、Model層の実装における標準的なパターンとテンプレートを提供します。Model層は、アプリケーション全体で使用する型定義とZodスキーマを管理し、型安全性とバリデーションの基盤を提供する重要な層です。

## このスキルを使用する場面

以下のような場合にこのスキルを使用してください：

1. **新規Modelの作成**
   - `layers/[layer-name]/app/models/` 配下に新しいModelファイルを作成する
   - 新しいドメインエンティティの型定義が必要

2. **既存Modelの修正・拡張**
   - 既存のModelに新しいスキーマやEnumを追加
   - OpenAPI型定義の更新に伴う修正
   - バックエンド仕様変更に対応する型拡張

3. **Model実装パターンの確認**
   - プロジェクトの標準パターンに従った実装方法の確認
   - 定数定義やZodスキーマの書き方の参照

## コア機能

### 1. 標準ガイドラインの提供

`reference.md` には、Model層の実装における詳細なガイドラインが記載されています：

- **ファイル構成と命名規則**: プロジェクト内での一貫した構造
- **インポート構成**: 標準的なインポート順序と必須インポート
- **定数（Enum）定義パターン**: `CONST_NAME` + Zodスキーマの標準形式
- **Zodスキーマパターン**: オブジェクト、配列、ネストの定義方法
- **OpenAPI型拡張**: `.extend()` を使用した一時的な型拡張
- **デフォルト値定義**: 初期値オブジェクトの作成方法
- **ヘルパー関数**: 変換関数、ファクトリー関数、フィルタリング関数
- **ベストプラクティス**: 型の再利用、命名規則、コメント規約

### 2. テンプレートファイルの提供

`template.ts` は、新規Model作成時の出発点として使用できる完全なテンプレートです：

- セクション別に整理されたコード構造
- 各パターンの実装例
- コメント付きでカスタマイズポイントを明示
- 必要に応じてコメントアウトを解除して使用できる代替実装

## 実装ワークフロー

### ステップ1: 要件の確認

新しいModelを実装する前に、以下を確認：

1. **ドメインエンティティの仕様**
   - エンティティのフィールド構成
   - 各フィールドの型（文字列、数値、日付など）
   - 必須/オプショナルの区別
   - Enumや定数の必要性

2. **OpenAPI定義の有無**
   - `#open-api/app/models/` に対応する型が存在するか確認
   - 既存の型を再利用できるか、拡張が必要かを判断

### ステップ2: ガイドラインの参照

実装を開始する前に、`reference.md` を参照：

```typescript
// ガイドラインを読み込む
Read: reference.md
```

特に以下のセクションを確認：
- セクション2: インポート構成
- セクション3: 定数（Enum）定義
- セクション4: Zodスキーマパターン
- セクション5: OpenAPI型拡張
- セクション10: チェックリスト

### ステップ3: テンプレートの活用

新規作成の場合は、テンプレートファイルを活用：

```typescript
// テンプレートを読み込む
Read: template.ts
```

テンプレートから開始して、以下をカスタマイズ：

1. **インポートセクション**
   - 必要なOpenAPI型をインポート（ある場合）
   - 他のモデルからの型インポート

2. **定数セクション**
   - ドメイン固有のEnumを定義
   - `as const` アサーションを使用

3. **スキーマセクション**
   - エンティティのZodスキーマを定義
   - 型エイリアスを生成

### ステップ4: 実装

以下のパターンに従って実装：

#### パターンA: 基本的なEnum定義

```typescript
export const STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  PENDING: 'pending',
} as const
export const status = z.enum([
  STATUS.ACTIVE,
  STATUS.INACTIVE,
  STATUS.PENDING,
])
export type Status = z.infer<typeof status>
```

#### パターンB: エンティティスキーマ定義

```typescript
export const resourceData = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullable(),
  status: status,
  createdAt: z.string(),
  updatedAt: z.string(),
})
export type ResourceData = z.infer<typeof resourceData>
```

#### パターンC: OpenAPI型の拡張

```typescript
// TODO: swagger修正後extend削除
export const resourceDetail = resourceDetailSchema.extend({
  additionalField: z.string().nullable(),
})
export type ResourceDetail = z.infer<typeof resourceDetail>
```

#### パターンD: ヘルパー関数

```typescript
// 変換関数 - Enum値を表示用文字列に変換
export const toStatusDisplayName = (value: Status): string => {
  const displayNames: Record<Status, string> = {
    [STATUS.ACTIVE]: 'アクティブ',
    [STATUS.INACTIVE]: '非アクティブ',
    [STATUS.PENDING]: '保留中',
  }
  return displayNames[value]
}

// ファクトリー関数 - 部分的なデータからエンティティを生成
export const createResource = (
  partial: Partial<ResourceData>,
): ResourceData => ({
  ...defaultResource,
  ...partial,
})

// フィルタリング関数 - 条件に合うエンティティを抽出
export const filterByStatus = (
  items: ResourceData[],
  targetStatus: Status,
): ResourceData[] => items.filter((item) => item.status === targetStatus)
```

### ステップ5: 検証

実装後、以下を確認：

1. **命名の一貫性**
   - スキーマ名はcamelCase
   - 型エイリアスはPascalCase
   - 定数オブジェクトはUPPER_SNAKE_CASE

2. **型の整合性**
   - すべてのスキーマに対応する型エイリアスが存在
   - `z.infer<typeof schema>` を使用

3. **インポート**
   - `import { z } from 'zod/v3'` が存在
   - 必要なOpenAPI型が適切にインポートされている

4. **コード品質**
   - チェックリスト（ガイドライン セクション10）に従っている
   - 不要なコメントが削除されている

## よくある実装例

### 例1: シンプルなエンティティ

```typescript
import { z } from 'zod/v3'

export const iconResponse = z.object({
  url: z.string().nullable(),
})
export type IconResponse = z.infer<typeof iconResponse>
```

### 例2: 複数のEnumを持つエンティティ

```typescript
import { z } from 'zod/v3'

// Enum定義
export const CATEGORY = {
  AVATAR: 'avatar',
  FURNITURE: 'furniture',
} as const
export const category = z.enum([CATEGORY.AVATAR, CATEGORY.FURNITURE])

export const STATUS = {
  DRAFT: 'draft',
  PUBLISHED: 'published',
} as const
export const status = z.enum([STATUS.DRAFT, STATUS.PUBLISHED])

// エンティティ
export const itemData = z.object({
  id: z.number(),
  name: z.string(),
  category,
  status,
  createdAt: z.string(),
})
export type ItemData = z.infer<typeof itemData>
```

### 例3: 他のモデルを参照するエンティティ

```typescript
import { z } from 'zod/v3'
import { iconResponse } from '@/models/file'
import { categoryType } from '@/models/category'

export const userData = z.object({
  id: z.number(),
  name: z.string(),
  icon: iconResponse,
  categoryType: categoryType.optional(),
})
export type UserData = z.infer<typeof userData>
```

### 例4: OpenAPI型の拡張

```typescript
import { z } from 'zod/v3'
import {
  eventSchema,
  eventdetailSchema,
} from '#open-api/app/models/resourceApi'

export const event = eventSchema
export type Event = z.infer<typeof event>

// TODO: APIチームに修正を依頼
export const eventDetail = eventdetailSchema.extend({
  positionChannelId: z.string().nullable(),
})
export type EventDetail = z.infer<typeof eventDetail>
```

### 例5: デフォルト値の定義

```typescript
import { z } from 'zod/v3'

export const userData = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
})
export type UserData = z.infer<typeof userData>

export const defaultUser: UserData = {
  id: 0,
  name: '',
  email: '',
}
```

### 例6: ヘルパー関数を持つ完全なModel

```typescript
import { z } from 'zod/v3'

// Enum定義
export const USER_ROLE = {
  OWNER: 'owner',
  DEVELOPER: 'developer',
  MEMBER: 'member',
} as const
export const userRole = z.enum([
  USER_ROLE.OWNER,
  USER_ROLE.DEVELOPER,
  USER_ROLE.MEMBER,
])
export type UserRole = z.infer<typeof userRole>

// エンティティ
export const memberData = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  role: userRole,
})
export type MemberData = z.infer<typeof memberData>

// デフォルト値
export const defaultMember: MemberData = {
  id: 0,
  name: '',
  email: '',
  role: USER_ROLE.MEMBER,
}

// ============================================================================
// ヘルパー関数
// ============================================================================

// 変換関数: 権限の表示名を取得
export const toRoleDisplayName = (role: UserRole): string => {
  const displayNames: Record<UserRole, string> = {
    [USER_ROLE.OWNER]: 'オーナー',
    [USER_ROLE.DEVELOPER]: '開発者',
    [USER_ROLE.MEMBER]: 'メンバー',
  }
  return displayNames[role]
}

// ファクトリー関数: 部分的なデータからメンバーを生成
export const createMember = (partial: Partial<MemberData>): MemberData => ({
  ...defaultMember,
  ...partial,
})

// フィルタリング関数: 権限でメンバーを抽出
export const filterMembersByRole = (
  members: MemberData[],
  role: UserRole,
): MemberData[] => members.filter((member) => member.role === role)

// フィルタリング関数: 複数の権限でメンバーを抽出
export const filterMembersByRoles = (
  members: MemberData[],
  roles: UserRole[],
): MemberData[] => members.filter((member) => roles.includes(member.role))
```

## トラブルシューティング

### 問題: OpenAPI型が期待と異なる

**解決策**: `.extend()` を使用して一時的に型を拡張し、TODOコメントを追加

```typescript
// TODO: swagger修正後extend削除
export const resourceSchema = openApiResourceSchema.extend({
  missingField: z.string().nullable(),
})
```

### 問題: 循環参照が発生する

**解決策**: 共通の型を別ファイルに抽出するか、`z.lazy()` を使用

```typescript
// 共通型を file.ts に配置
export const iconResponse = z.object({ url: z.string().nullable() })

// 各モデルからインポート
import { iconResponse } from '@/models/file'
```

### 問題: 型の再利用 vs 独自定義の判断

**解決策**:
1. OpenAPI型が完全に一致する → そのまま使用
2. 一部フィールドのみ必要 → `Pick<>` または `Omit<>` を使用
3. 追加フィールドが必要 → `.extend()` を使用
4. 完全に異なる → 独自に定義

## リソース

このスキルには以下のファイルが含まれています：

### reference.md
Model層実装の完全なガイドライン：
- ファイル構成と命名規則
- インポート構成
- 定数（Enum）定義パターン
- Zodスキーマパターン
- OpenAPI型拡張
- デフォルト値定義
- ヘルパー関数（変換、ファクトリー、フィルタリング）
- ベストプラクティス
- チェックリスト

### template.ts
新規Model作成用のテンプレート：
- セクション別に整理されたコード構造
- 各パターンの実装例
- コメント付きカスタマイズポイント

これらのリソースは、必要に応じてClaudeが読み込んで参照します。
