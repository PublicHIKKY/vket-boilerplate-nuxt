# Hikky Components スタイリングガイド

SCSS変数、ミックスイン、命名規則、レスポンシブデザインのガイドライン

## SCSS変数システム

### 変数ファイルのインポート

```scss
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/custom/variables_new' as v;
@use '@/assets/styles/mixins' as m;
```

### スペーシング

**使用方法**: `v.space(n)` - 基本単位の倍数でスペースを指定

```scss
padding: v.space(4);
margin: v.space(2);
gap: v.space(6);
```

**注意**: 具体的な数値は、インポートした変数ファイル（`@/assets/styles/variables` または `@/assets/styles/custom/variables_new`）に定義された値に準ずる。

### カラーシステム

**使用方法**: プロジェクトで定義されたカラー変数を使用

```scss
// プライマリカラー
color: v.$primary-color-1;
color: v.$primary-color-2;
color: v.$primary-color-3;

// セカンダリカラー
color: v.$secondary-color-1;
color: v.$secondary-color-2;
color: v.$secondary-color-3;

// 背景色
background-color: v.$base-background-color;
background-color: v.$secondary-background-color;

// テキストカラー
color: v.$text-color;
color: v.$text-color-light;
```

**注意**: 具体的なカラーコード（HEX/RGB値）は、インポートした変数ファイルに定義された値に準ずる。変数名と実際の色はプロジェクトごとに異なる可能性がある。

### フォントサイズ

**使用方法**: `v.size-per-vw(n)` - ビューポート幅に応じたレスポンシブサイズ

```scss
font-size: v.size-per-vw(20);
font-size: v.size-per-vw(32);
font-size: v.size-per-vw(16);
```

**注意**: 具体的な計算式とサイズは、インポートした変数ファイルに定義された値に準ずる。引数の数値は基準値であり、実際のレンダリングサイズはビューポート幅によって動的に変化する。

## ミックスイン

### レスポンシブデザイン

```scss
.component {
  padding: v.space(6);

  // スマートフォン用スタイル
  @include m.sp {
    padding: v.space(3);
  }

  // タブレット用スタイル（必要に応じて）
  @include m.tablet {
    padding: v.space(4);
  }
}
```

### メディアクエリの使い分け

```scss
// PC優先（デフォルト）
.element {
  width: 100%;

  @include m.sp {
    width: 90%;
  }
}

// モバイルファースト（特定のケース）
.element {
  width: 90%;

  @include m.pc {
    width: 100%;
  }
}
```

## 命名規則

### RSCSS (Reasonable System for CSS Stylesheet Structure)

このプロジェクトではRSCSS命名規則を採用しています。

#### コンポーネント（ルート要素）

コンポーネント名から生成したハイフン区切りのクラス名。**必ずプレフィックス（ha-, hm-, ho-, ht-）を含む。**

```scss
// ✅ コンポーネントルート
.ho-confirm-dialog {
  padding: v.space(6);
  background-color: v.$base-background-color;
}
```

#### 要素（Elements）

コンポーネント内の子要素。**単純な名前のみを使用し、直接の子セレクタ（>）でネスト。**

```scss
.ho-confirm-dialog {
  // 直接の子要素は「>」で指定（優先度を上げる）
  > .title {
    font-weight: 700;
    font-size: v.size-per-vw(32);
  }

  > .message {
    padding: v.space(4);
    color: v.$text-color;
  }

  > .button-wrapper {
    display: flex;
    gap: v.space(4);
  }
}
```

#### バリアント（Variants）

状態やバリエーション。**ハイフン1つで開始（`.-`）。**

```scss
.ho-confirm-dialog {
  // バリアント
  &.-primary {
    background-color: v.$primary-color-1;
  }

  &.-warning {
    border-color: v.$warning-color;
  }

  &.-large {
    width: 80vw;
  }
}
```

### クラス名パターン

```scss
// ✅ 良い例（RSCSS）
.ho-confirm-dialog              // コンポーネントルート
.ho-confirm-dialog > .title     // 要素（直接の子セレクタ）
.ho-confirm-dialog.-warning     // バリアント

// ❌ 悪い例
.confirmDialog                    // キャメルケース不可
.confirm-dialog                   // プレフィックス無し
.HoConfirmDialog                  // パスカルケース不可
.ho-confirm-dialog .title         // 子孫セレクタ（優先度が低い）
.ho-confirm-dialog__title         // BEM形式（使用しない）
.ho-confirm-dialog--warning       // BEM形式（使用しない）
```

### 状態クラス（バリアント）

状態クラスもバリアントの一種として扱います。

```scss
.button {
  // 状態クラスはハイフン1つ
  &.-active {
    background-color: v.$primary-color-1;
  }

  &.-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.-loading {
    pointer-events: none;
  }
}
```

## レイアウトパターン

### Flexbox

```scss
.container {
  display: flex;
  gap: v.space(4);
  justify-content: center;
  align-items: center;

  > .item {
    flex: 1;
  }

  @include m.sp {
    flex-direction: column;
    gap: v.space(2);
  }
}
```

### Grid

```scss
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: v.space(4);

  > .grid-item {
    padding: v.space(2);
  }

  @include m.sp {
    grid-template-columns: 1fr;
    gap: v.space(2);
  }
}
```

### 中央配置

```scss
// 水平中央
.horizontal-center {
  margin: 0 auto;
  width: fit-content;
}

// 垂直・水平中央
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// Absolute中央
.absolute-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

## スコープドスタイル

### :deep()の使用

```scss
.component {
  // 子コンポーネントのスタイルを変更
  :deep(> .dialog-window) {
    width: 40vw;
    border-radius: 14px;

    > .content {
      padding: v.space(6) v.space(10);

      @include m.sp {
        padding: v.space(6) v.space(5);
      }
    }
  }
}
```

### スロットコンテンツのスタイリング

```scss
.component {
  // スロット内のコンテンツ（直接の子セレクタ推奨）
  > ::slotted(.custom-class) {
    color: v.$primary-color-1;
  }
}
```

## アニメーション

### トランジション

```scss
.element {
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
}
```

### キーフレームアニメーション

```scss
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animated-element {
  animation: fadeIn 0.3s ease;
}
```

## ベストプラクティス

### ✅ DO

```scss
// ✅ 変数を使用
padding: v.space(4);
color: v.$primary-color-1;
font-size: v.size-per-vw(20);

// ✅ ミックスインを使用
@include m.sp {
  padding: v.space(2);
}

// ✅ RSCSS命名規則（直接の子セレクタ使用）
.ho-component {
  > .element {
    // 直接の子要素は「>」で指定
  }

  &.-variant {
    // バリアント
  }
}

// ✅ scoped属性
<style lang="scss" scoped>
.component {
  // スタイル
}
</style>
```

### ❌ DON'T

```scss
// ❌ ハードコード値
padding: 16px;
color: #333333;
font-size: 20px;

// ❌ メディアクエリを直接記述
@media (max-width: 768px) {
  padding: 8px;
}

// ❌ グローバルスタイル
<style lang="scss">
.component {
  // グローバルに影響
}
</style>

// ❌ !importantの乱用
.element {
  color: red !important;  // 避けるべき
}
```

## パフォーマンス最適化

### 複雑なセレクタを避ける

```scss
// ❌ 悪い例
.component > div > ul > li > a {
  color: v.$primary-color-1;
}

// ✅ 良い例（RSCSS - 直接の子セレクタ）
.component {
  > .link {
    color: v.$primary-color-1;
  }
}
```

### 適切なネストレベルを保つ

```scss
// ❌ 悪い例（深すぎるネスト）
.component {
  .wrapper {
    .container {
      .item {
        color: v.$text-color;
      }
    }
  }
}

// ✅ 良い例（RSCSS - 直接の子セレクタで適切なネスト）
.component {
  > .wrapper {
    > .item {
      color: v.$text-color;
    }
  }
}

// または、構造を単純化
.component {
  > .item {
    color: v.$text-color;
  }
}
```

## アクセシビリティ

### フォーカススタイル

```scss
.button {
  &:focus {
    outline: 2px solid v.$primary-color-1;
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid v.$primary-color-1;
    outline-offset: 2px;
  }
}
```

### コントラスト比

```scss
// テキストと背景のコントラスト比を確保
.text-on-dark {
  color: #ffffff;  // WCAG AA基準以上のコントラスト
  background-color: v.$primary-color-1;
}

.text-on-light {
  color: v.$text-color;
  background-color: #ffffff;
}
```

## トラブルシューティング

### スタイルが適用されない

1. **scoped属性を確認**
   ```scss
   <style lang="scss" scoped>
   ```

2. **変数のインポートを確認**
   ```scss
   @use '@/assets/styles/variables' as v;
   ```

3. **:deep()の使用を検討**
   ```scss
   :deep(.child-component) {
     // スタイル
   }
   ```

### レスポンシブが効かない

1. **ミックスインの順序を確認**
   ```scss
   // デフォルトスタイルを先に記述
   padding: v.space(6);

   // レスポンシブを後に記述
   @include m.sp {
     padding: v.space(3);
   }
   ```

2. **ビューポートメタタグを確認**
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```
