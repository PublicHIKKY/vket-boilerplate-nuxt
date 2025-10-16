# Animation Utilities

Web Animations APIを使用したTypeScriptアニメーションユーティリティです。

## 概要

このユーティリティは、Animista (http://animista.net) のscale-upアニメーションをベースに、Web Animations APIで実装しています。

## 利点

✅ **型安全**: 完全なTypeScriptサポート
✅ **柔軟**: DOMを直接操作可能
✅ **軽量**: CSSに依存しない
✅ **制御可能**: play/pause/cancelなどの制御が可能
✅ **Promise対応**: async/awaitで使える

## 基本的な使い方

### 1. ピュアTypeScript（DOM直接操作）

```ts
import { scaleUp } from '~/utils/animation'

const element = document.querySelector('.box')
const animation = scaleUp(element, {
  variant: 'center',
  duration: 500,
  delay: 0,
})

// アニメーション終了を待つ
await animation.finished
console.log('Animation finished!')

// 制御
animation.pause()  // 一時停止
animation.play()   // 再開
animation.cancel() // キャンセル
```

### 2. Vue Composable（推奨）

```vue
<script setup lang="ts">
const boxRef = ref<HTMLElement>()
const { play, isPlaying, replay } = useScaleUpAnimation(boxRef, {
  variant: 'center',
  duration: 500,
})

const handleClick = async () => {
  await play()
  console.log('Animation finished!')
}
</script>

<template>
  <div
    ref="boxRef"
    @click="handleClick"
  >
    {{ isPlaying ? 'Playing...' : 'Click me' }}
  </div>
</template>
```

### 3. 自動再生

```vue
<script setup lang="ts">
const boxRef = ref<HTMLElement>()

// マウント時に自動的にアニメーション
useScaleUpAnimation(boxRef, {
  variant: 'center',
  autoplay: true,
})
</script>

<template>
  <div ref="boxRef">
    Auto animated!
  </div>
</template>
```

## 複数要素のアニメーション

### 順次アニメーション（stagger）

```ts
import { scaleUpSequence } from '~/utils/animation'

const items = document.querySelectorAll('.item')
const animations = scaleUpSequence(items, {
  variant: 'bottom',
  duration: 500,
  stagger: 100, // 100msずつずらす
})

// 全てのアニメーション終了を待つ
await Promise.all(animations.map(a => a.finished))
```

### Vue Composableで複数要素

```vue
<script setup lang="ts">
const items = ref([
  { id: 1, text: 'Item 1' },
  { id: 2, text: 'Item 2' },
  { id: 3, text: 'Item 3' },
])

const itemRefs = ref<HTMLElement[]>([])
const { playSequence, replaySequence } = useScaleUpSequence(itemRefs, {
  variant: 'bottom',
  stagger: 100,
})

onMounted(async () => {
  await playSequence()
})
</script>

<template>
  <div>
    <button @click="replaySequence">
      Replay
    </button>

    <div
      v-for="item in items"
      :key="item.id"
      :ref="el => itemRefs.push(el as HTMLElement)"
      class="item"
    >
      {{ item.text }}
    </div>
  </div>
</template>
```

## API

### `scaleUp(element, options)`

単一要素にアニメーションを適用

**Parameters:**
- `element: Element` - アニメーション対象の要素
- `options: ScaleUpOptions` - アニメーションオプション

**Returns:** `Animation` - Web Animations API の Animation オブジェクト

### `scaleUpSequence(elements, options)`

複数要素に順次アニメーションを適用

**Parameters:**
- `elements: Element[] | NodeListOf<Element>` - アニメーション対象の要素配列
- `options: ScaleUpOptions & { stagger?: number }` - アニメーションオプション + stagger

**Returns:** `Animation[]` - Animation オブジェクトの配列

### `useScaleUpAnimation(elementRef, options)`

単一要素のアニメーションを制御するcomposable

**Returns:**
```ts
{
  animation: Readonly<Ref<Animation | undefined>>
  isPlaying: Readonly<Ref<boolean>>
  play: () => Promise<void>
  pause: () => void
  cancel: () => void
  replay: () => Promise<void>
}
```

### `useScaleUpSequence(elementsRef, options)`

複数要素のアニメーションを制御するcomposable

**Returns:**
```ts
{
  animations: Readonly<Ref<Animation[]>>
  isPlaying: Readonly<Ref<boolean>>
  playSequence: () => Promise<void>
  cancelAll: () => void
  replaySequence: () => Promise<void>
}
```

## Options

```ts
interface ScaleUpOptions {
  variant?: ScaleUpVariant  // デフォルト: 'center'
  duration?: number         // デフォルト: 400 (ms)
  delay?: number           // デフォルト: 0 (ms)
  easing?: string          // デフォルト: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)'
  iterations?: number      // デフォルト: 1
  fill?: FillMode         // デフォルト: 'both'
}
```

### Variants (15種類)

#### Basic Directions (9種類)
- `center` - 中心から
- `top` - 上から
- `tr` - 右上から
- `right` - 右から
- `br` - 右下から
- `bottom` - 下から
- `bl` - 左下から
- `left` - 左から
- `tl` - 左上から

#### Horizontal (3種類)
- `hor-center` - 水平方向に中心から
- `hor-left` - 水平方向に左から
- `hor-right` - 水平方向に右から

#### Vertical (3種類)
- `ver-center` - 垂直方向に中心から
- `ver-top` - 垂直方向に上から
- `ver-bottom` - 垂直方向に下から

## 実用例

### スクロールで要素を表示

```vue
<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'

const itemRefs = ref<HTMLElement[]>([])
const { playSequence } = useScaleUpSequence(itemRefs, {
  variant: 'bottom',
  stagger: 100,
})

const containerRef = ref<HTMLElement>()

useIntersectionObserver(
  containerRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      void playSequence()
    }
  },
  { threshold: 0.1 }
)
</script>
```

### クリックで個別にアニメーション

```vue
<script setup lang="ts">
const items = ref([...])

const handleItemClick = (event: MouseEvent) => {
  const element = event.currentTarget as HTMLElement
  const animation = scaleUp(element, {
    variant: 'center',
    duration: 300,
  })

  void animation.finished.then(() => {
    console.log('Clicked item animated!')
  })
}
</script>

<template>
  <div
    v-for="item in items"
    :key="item.id"
    @click="handleItemClick"
  >
    {{ item.text }}
  </div>
</template>
```

## ライセンス

アニメーションは Animista (http://animista.net) をベースにしています。
Licensed under FreeBSD License.
