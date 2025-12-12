# Model層 実装ガイドライン

このドキュメントは、Model層の実装における標準的なパターンと規約を定義します。

## 1. ファイル構成

### 1.1 基本構造
```
layers/[layer-name]/app/models/
├── [resource].ts           # 各リソース用のモデル
├── openapi/                 # OpenAPI生成型（自動生成、編集不可）
└── [subdomain]/             # サブドメイン用のディレクトリ（必要に応じて）
    └── [resource].ts
```

### 1.2 命名規則
- ファイル名: `[リソース名].ts` (camelCase)
  - 例: `category.ts`, `user.ts`, `asset.ts`
- 複合語の場合もcamelCaseを維持
  - 例: `userCategory.ts`, `billingAddress.ts`, `sceneProjects.ts`

## 2. インポート構成

### 2.1 標準的なインポート順序
```typescript
// 1. Zod
import { z } from 'zod/v3'

// 2. 他のモデルからのインポート（必要な場合）
import { iconResponse } from '@/models/file'
import { categoryType } from '@/models/category'

// 3. OpenAPI自動生成型（必要な場合）
import {
  resourceSchema,
  resourceDetailSchema,
} from '#open-api/app/models/[api-name]Api'
```

### 2.2 必須インポート
- `import { z } from 'zod/v3'`: 全てのModelファイルで必須

## 3. 定数（Enum）定義

### 3.1 基本パターン
```typescript
// 定数オブジェクト（UPPER_SNAKE_CASE）
export const STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  PENDING: 'pending',
} as const

// Zodスキーマ（camelCase）
export const status = z.enum([
  STATUS.ACTIVE,
  STATUS.INACTIVE,
  STATUS.PENDING,
])

// 型エイリアス（PascalCase）- オプション
export type Status = z.infer<typeof status>
```

### 3.2 複数値を持つEnum
```typescript
export const PLAN = {
  FREE: 'free',
  BASIC: 'basic',
  BUSINESS: 'business',
  BUSINESS_PLUS: 'business_plus',
  ENTERPRISE: 'enterprise',
} as const

export const plan = z.enum([
  PLAN.FREE,
  PLAN.BASIC,
  PLAN.BUSINESS,
  PLAN.BUSINESS_PLUS,
  PLAN.ENTERPRISE,
])
export type PlanData = z.infer<typeof plan>
```

### 3.3 Enumの命名規則
- 定数オブジェクト: `UPPER_SNAKE_CASE` (例: `OWNER_TYPE`, `CHECK_STATUS`)
- Zodスキーマ: `camelCase` (例: `ownerType`, `checkStatus`)
- 型エイリアス: `PascalCase` (例: `OwnerType`, `CheckStatus`)

## 4. Zodスキーマパターン

### 4.1 基本的なオブジェクトスキーマ
```typescript
export const userData = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
})
export type UserData = z.infer<typeof userData>
```

### 4.2 nullableフィールド
```typescript
export const profileData = z.object({
  id: z.number(),
  name: z.string(),
  bio: z.string().nullable(),           // nullを許可
  avatarUrl: z.string().nullable(),
})
```

### 4.3 optionalフィールド
```typescript
export const resourceData = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().optional(),    // undefinedを許可
  metadata: z.object({}).optional(),
})
```

### 4.4 nullable + optional
```typescript
export const itemData = z.object({
  id: z.number(),
  price: z.number().nullable().optional(), // null と undefined の両方を許可
})
```

### 4.5 ネストしたオブジェクト
```typescript
// 先に子スキーマを定義
export const iconResponse = z.object({
  url: z.string().nullable(),
})

// 親スキーマで参照
export const user = z.object({
  id: z.number(),
  name: z.string(),
  icon: iconResponse,
})
```

### 4.6 配列
```typescript
export const itemList = z.object({
  items: z.array(itemData),
  total: z.number(),
})
```

### 4.7 Union型
```typescript
export const dateOrString = z.union([z.instanceof(Date), z.string()])

export const resourceData = z.object({
  id: z.number(),
  createdAt: dateOrString.nullable(),
})
```

### 4.8 Record型
```typescript
export const imagesRecord = z.record(
  z.string(),
  z.object({
    image: z.instanceof(File).optional(),
    delete: z.boolean(),
  }).partial(),
)
```

## 5. OpenAPI型の拡張

### 5.1 そのまま使用
```typescript
import { eventSchema } from '#open-api/app/models/resourceApi'

export const event = eventSchema
export type Event = z.infer<typeof event>
```

### 5.2 フィールド追加（extend）
```typescript
import { eventdetailSchema } from '#open-api/app/models/resourceApi'

// TODO: APIチームに修正を依頼
export const eventDetail = eventdetailSchema.extend({
  positionChannelId: z.string().nullable(),
})
export type EventDetail = z.infer<typeof eventDetail>
```

### 5.3 複数フィールドの拡張
```typescript
import { assetversionSchema } from '#open-api/app/models/assetUploaderApi'

// TODO: バックエンドチームに修正依頼をする
const assetVersion = assetversionSchema.extend({
  ingameThumbnail: z
    .object({
      url: z.string().nullable(),
      medium: z.object({ url: z.string().nullable() }).partial(),
    })
    .partial(),
  animation: z
    .object({
      url: z.string().nullable(),
    })
    .partial(),
  thumbnail: z
    .object({
      url: z.string().nullable(),
      medium: z.object({ url: z.string().nullable() }).partial(),
    })
    .partial(),
})
```

### 5.4 ネストした拡張
```typescript
import {
  assetSerializerSchema,
  userSchema,
} from '#open-api/app/models/assetUploaderApi'

export const assetSerializer = assetSerializerSchema.extend({
  latestVersion: assetVersion,
  assetVersions: z.array(assetVersion),
  user: userSchema.extend({
    nameJa: z.string().nullable(),
  }),
})
```

## 6. デフォルト値

### 6.1 基本パターン
```typescript
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

### 6.2 複雑なデフォルト値
```typescript
export const defaultUserWithIcon: UserData = {
  id: 0,
  sub: '',
  vketId: '',
  vketBetaId: null,
  email: '',
  nameJa: '',
  nameEn: '',
  pictureUrl: '',
  pictureUpdateAt: '',
  createdAt: null,
  updatedAt: null,
}
```

## 7. 他のモデルの参照

### 7.1 同一レイヤー内の参照
```typescript
import { iconResponse } from '@/models/file'
import { categoryType } from '@/models/category'

export const userData = z.object({
  id: z.number(),
  name: z.string(),
  icon: iconResponse,
  categoryType: categoryType.optional(),
})
```

### 7.2 他レイヤーからの参照
```typescript
import { userSchema } from '#open-api/app/models/resourceApi'
import {
  loggedinmutualrelationshipuserSchema,
  worldportalSchema,
} from '#open-api/app/models/shenron'

export const user = userSchema
export type User = z.infer<typeof user>

export const loggedinMutualRelationshipUser =
  loggedinmutualrelationshipuserSchema.extend({
    worldPortal: worldportalSchema.extend({
      worldSetId: z.number().nullable(),
    }),
  })
```

## 8. コメント規約

### 8.1 TODOコメント
```typescript
// TODO: swagger修正後extend削除
export const resourceSchema = openApiSchema.extend({ ... })

// TODO: APIチームに修正を依頼
export const eventDetail = eventdetailSchema.extend({ ... })

// TODO: バックエンドチームに修正依頼をする
const assetVersion = assetversionSchema.extend({ ... })
```

### 8.2 MEMOコメント
```typescript
// MEMO: 自動生成された型ではidがstring型になっているため、number型に変換
export const resourceId = z.number()
```

### 8.3 セクションコメント
```typescript
// 個人/法人
export const OWNER_TYPE = { ... }

// ラベル使用可能ステータス
export const CHECK_STATUS = { ... }
```

### 8.4 Enum値の説明コメント
```typescript
export const AVAILABLE_PARTICIPANT = {
  /** 誰でも */
  ALL: 'all',
  /** 相互フォローのみ */
  MUTUAL_FOLLOW_ONLY: 'mutual_follow_only',
  /** 一覧に非表示（URLから直接のみ） */
  UNLISTED: 'unlisted',
} as const
```

## 9. ヘルパー関数

### 9.1 変換関数（Display Name変換）
Enum値を表示用の文字列に変換する関数。UIでのラベル表示に使用。

```typescript
export const toStatusDisplayName = (value: Status): string => {
  const displayNames: Record<Status, string> = {
    [STATUS.ACTIVE]: 'アクティブ',
    [STATUS.INACTIVE]: '非アクティブ',
    [STATUS.PENDING]: '保留中',
  }
  return displayNames[value]
}
```

### 9.2 ファクトリー関数
部分的なデータから完全なエンティティを生成する関数。デフォルト値を基に新しいインスタンスを作成。

```typescript
// 基本パターン
export const createResource = (
  partial: Partial<ResourceData>,
): ResourceData => ({
  ...defaultResource,
  ...partial,
})

// 複数のデフォルト値から選択するパターン
export const createResourceWithType = (
  type: ResourceType,
  partial: Partial<ResourceData>,
): ResourceData => {
  const defaults = type === RESOURCE_TYPE.PREMIUM
    ? defaultPremiumResource
    : defaultResource
  return { ...defaults, ...partial }
}
```

### 9.3 フィルタリング関数
条件に合うエンティティを配列から抽出する関数。

```typescript
// 単一条件フィルタ
export const filterByStatus = (
  items: ResourceData[],
  targetStatus: Status,
): ResourceData[] => items.filter((item) => item.status === targetStatus)

// 複数条件フィルタ
export const filterByStatuses = (
  items: ResourceData[],
  statuses: Status[],
): ResourceData[] => items.filter((item) => statuses.includes(item.status))

// 複合条件フィルタ
export const filterActiveByCategory = (
  items: ResourceData[],
  category: Category,
): ResourceData[] =>
  items.filter(
    (item) => item.status === STATUS.ACTIVE && item.category === category,
  )
```

### 9.4 ヘルパー関数の命名規則
- 変換関数: `to[Target]` (例: `toDisplayName`, `toStatusLabel`)
- ファクトリー関数: `create[Entity]` (例: `createUser`, `createResource`)
- フィルタリング関数: `filterBy[Condition]` または `filter[Entity]By[Condition]`
  (例: `filterByStatus`, `filterMembersByRole`)

### 9.5 その他のヘルパー関数
上記の3パターン以外にも、モデルを操作するための関数は必要に応じて実装してください。

```typescript
// 検証関数: 特定の条件を満たすかチェック
export const isActiveResource = (item: ResourceData): boolean =>
  item.status === STATUS.ACTIVE

// 集計関数: 配列から統計情報を取得
export const countByStatus = (
  items: ResourceData[],
): Record<Status, number> => {
  const counts = { [STATUS.ACTIVE]: 0, [STATUS.INACTIVE]: 0, [STATUS.PENDING]: 0 }
  items.forEach((item) => counts[item.status]++)
  return counts
}

// ソート関数: 特定の条件でソート
export const sortByCreatedAt = (
  items: ResourceData[],
  order: 'asc' | 'desc' = 'desc',
): ResourceData[] =>
  [...items].sort((a, b) => {
    const diff = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    return order === 'asc' ? diff : -diff
  })

// マッピング関数: エンティティを別の形式に変換
export const toSelectOptions = (
  items: ResourceData[],
): { value: number; label: string }[] =>
  items.map((item) => ({ value: item.id, label: item.name }))
```

モデルの用途に応じて、適切なヘルパー関数を追加してください。

### 9.6 ヘルパー関数の配置
ヘルパー関数は、関連するスキーマとデフォルト値の後に配置し、セクションコメントで区切る：

```typescript
// スキーマ定義
export const resourceData = z.object({ ... })
export type ResourceData = z.infer<typeof resourceData>

// デフォルト値
export const defaultResource: ResourceData = { ... }

// ============================================================================
// ヘルパー関数
// ============================================================================

export const toStatusDisplayName = (value: Status): string => { ... }
export const createResource = (partial: Partial<ResourceData>): ResourceData => { ... }
export const filterByStatus = (items: ResourceData[], status: Status): ResourceData[] => { ... }
```

## 10. チェックリスト

新しいModelを作成する際のチェックリスト：

- [ ] ファイル名が `[resource].ts` の形式（camelCase）
- [ ] `import { z } from 'zod/v3'` がインポートされている
- [ ] 定数は `UPPER_SNAKE_CASE` で定義
- [ ] Zodスキーマは `camelCase` で定義
- [ ] 型エイリアスは `PascalCase` で定義
- [ ] `as const` が定数オブジェクトに付与されている
- [ ] 全てのスキーマに対応する型エイリアス（`z.infer<typeof schema>`）がある
- [ ] nullableフィールドには `.nullable()` が付与されている
- [ ] optionalフィールドには `.optional()` が付与されている
- [ ] OpenAPI型の拡張にはTODOコメントが付与されている
- [ ] インポート順序が標準に従っている（zod → 他モデル → OpenAPI型）
- [ ] ヘルパー関数は適切な命名規則に従っている（to〜, create〜, filterBy〜）
- [ ] ヘルパー関数はセクションコメントで区切られている

## 11. ベストプラクティス

### 10.1 型の再利用
- OpenAPI型を可能な限り再利用
- 共通の型は別ファイルに抽出（例: `file.ts` に `iconResponse`）
- 一時的な拡張は明示的にTODOコメント

### 10.2 スキーマの分割
- 大きなスキーマは小さなスキーマに分割
- 再利用可能な部分を抽出
- ネストが深くなりすぎないよう注意

### 10.3 命名の一貫性
- エンティティ: `[resource]Data` (例: `userData`, `categoryData`)
- 詳細: `[resource]Detail` (例: `categoryDetail`, `eventDetail`)
- 一覧: `[resource]List` または `[resource]s` (例: `itemList`, `users`)

### 10.4 エクスポート
- 全てのスキーマと型エイリアスを `export`
- デフォルト値は必要な場合のみ `export`
- 内部使用のみの型は `export` しない
