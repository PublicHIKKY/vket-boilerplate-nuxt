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
- Only files matching these patterns are included: layers/showcases/app/components/ho/animista/HoAnimistaScaleUp.vue
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
layers/
  showcases/
    app/
      components/
        ho/
          animista/
            HoAnimistaScaleUp.vue
```

# Files

## File: layers/showcases/app/components/ho/animista/HoAnimistaScaleUp.vue
```vue
<template>
  <div class="ho-animista-scale-up">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Scale Up Animations
    </h1>

    <p class="demo-description">
      15種類のスケールアップアニメーションのデモ。SCSS mixinで実装されています。
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label class="control-label">Animation Trigger:</label>
        <div class="toggle-buttons">
          <button
            :class="['toggle-button', { active: !isHoverMode }]"
            @click="isHoverMode = false"
          >
            Auto Play
          </button>
          <button
            :class="['toggle-button', { active: isHoverMode }]"
            @click="isHoverMode = true"
          >
            On Hover
          </button>
        </div>
      </div>
      <button
        v-if="!isHoverMode"
        class="replay-button"
        @click="replayAll"
      >
        🔄 Replay All
      </button>
    </div>

    <div class="animation-grid">
      <!-- Basic Directions -->
      <div class="animation-section">
        <h2 class="section-title">
          Basic Directions (9 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-center', { 'is-animating': activeVariants.has('center') }]">
                center
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top', { 'is-animating': activeVariants.has('top') }]">
                top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr', { 'is-animating': activeVariants.has('tr') }]">
                tr
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right', { 'is-animating': activeVariants.has('right') }]">
                right
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br', { 'is-animating': activeVariants.has('br') }]">
                br
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom', { 'is-animating': activeVariants.has('bottom') }]">
                bottom
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl', { 'is-animating': activeVariants.has('bl') }]">
                bl
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left', { 'is-animating': activeVariants.has('left') }]">
                left
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl', { 'is-animating': activeVariants.has('tl') }]">
                tl
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Horizontal Scaling -->
      <div class="animation-section">
        <h2 class="section-title">
          Horizontal Scaling (3 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-hor-center', { 'is-animating': activeVariants.has('hor-center') }]">
                hor-center
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-hor-left', { 'is-animating': activeVariants.has('hor-left') }]">
                hor-left
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-hor-right', { 'is-animating': activeVariants.has('hor-right') }]">
                hor-right
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Vertical Scaling -->
      <div class="animation-section">
        <h2 class="section-title">
          Vertical Scaling (3 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-ver-center', { 'is-animating': activeVariants.has('ver-center') }]">
                ver-center
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-ver-top', { 'is-animating': activeVariants.has('ver-top') }]">
                ver-top
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-ver-bottom', { 'is-animating': activeVariants.has('ver-bottom') }]">
                ver-bottom
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>()

type ScaleUpVariant
  = | 'center'
    | 'top'
    | 'tr'
    | 'right'
    | 'br'
    | 'bottom'
    | 'bl'
    | 'left'
    | 'tl'
    | 'hor-center'
    | 'hor-left'
    | 'hor-right'
    | 'ver-center'
    | 'ver-top'
    | 'ver-bottom'

const basicVariants: ScaleUpVariant[] = [
  'center',
  'top',
  'tr',
  'right',
  'br',
  'bottom',
  'bl',
  'left',
  'tl',
]

const horizontalVariants: ScaleUpVariant[] = [
  'hor-center',
  'hor-left',
  'hor-right',
]

const verticalVariants: ScaleUpVariant[] = [
  'ver-center',
  'ver-top',
  'ver-bottom',
]

// アニメーションモード（通常 or ホバー）
const isHoverMode = ref(false)

// アニメーション中のバリアントを管理
const activeVariants = ref<Set<ScaleUpVariant>>(new Set())

const replayAll = async () => {
  // 一旦全てクリア
  activeVariants.value.clear()

  await nextTick()

  const allVariants: ScaleUpVariant[] = [
    ...basicVariants,
    ...horizontalVariants,
    ...verticalVariants,
  ]

  // 各要素を順番にアニメーション
  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

// ホバーモードに切り替えた時にアニメーション状態をクリア
watch(isHoverMode, (newValue) => {
  if (newValue) {
    // ホバーモードに切り替えた時は全てのアニメーション状態をクリア
    activeVariants.value.clear()
  }
})

// 初回表示時に全てアニメーション
onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// アニメーションクラス
// 使い方：
// 1. DOMに variant-center などのクラスを付与
// 2. アニメーション開始時に is-animating クラスを追加
// 3. SCSS側で各バリアントごとにアニメーションを定義
// ============================================

// ホバーモード用のスタイル - ラッパーでホバーを検知、子要素にアニメーション適用
.hover-wrapper.hover-mode:hover {
  .demo-box.variant-center {
    @include anim.scale-up('center', 0.4s);
  }

  .demo-box.variant-top {
    @include anim.scale-up('top', 0.4s);
  }

  .demo-box.variant-tr {
    @include anim.scale-up('tr', 0.4s);
  }

  .demo-box.variant-right {
    @include anim.scale-up('right', 0.4s);
  }

  .demo-box.variant-br {
    @include anim.scale-up('br', 0.4s);
  }

  .demo-box.variant-bottom {
    @include anim.scale-up('bottom', 0.4s);
  }

  .demo-box.variant-bl {
    @include anim.scale-up('bl', 0.4s);
  }

  .demo-box.variant-left {
    @include anim.scale-up('left', 0.4s);
  }

  .demo-box.variant-tl {
    @include anim.scale-up('tl', 0.4s);
  }

  .demo-box.variant-hor-center {
    @include anim.scale-up('hor-center', 0.4s);
  }

  .demo-box.variant-hor-left {
    @include anim.scale-up('hor-left', 0.4s);
  }

  .demo-box.variant-hor-right {
    @include anim.scale-up('hor-right', 0.4s);
  }

  .demo-box.variant-ver-center {
    @include anim.scale-up('ver-center', 0.4s);
  }

  .demo-box.variant-ver-top {
    @include anim.scale-up('ver-top', 0.4s);
  }

  .demo-box.variant-ver-bottom {
    @include anim.scale-up('ver-bottom', 0.4s);
  }
}

// Basic Directions (9種類)
// 通常モード（Auto Play）時のアニメーション
.variant-center.is-animating {
  @include anim.scale-up('center', 0.5s);
}

.variant-top.is-animating {
  @include anim.scale-up('top', 0.5s);
}

.variant-tr.is-animating {
  @include anim.scale-up('tr', 0.5s);
}

.variant-right.is-animating {
  @include anim.scale-up('right', 0.5s);
}

.variant-br.is-animating {
  @include anim.scale-up('br', 0.5s);
}

.variant-bottom.is-animating {
  @include anim.scale-up('bottom', 0.5s);
}

.variant-bl.is-animating {
  @include anim.scale-up('bl', 0.5s);
}

.variant-left.is-animating {
  @include anim.scale-up('left', 0.5s);
}

.variant-tl.is-animating {
  @include anim.scale-up('tl', 0.5s);
}

// Horizontal (3種類)
.variant-hor-center.is-animating {
  @include anim.scale-up('hor-center', 0.5s);
}

.variant-hor-left.is-animating {
  @include anim.scale-up('hor-left', 0.5s);
}

.variant-hor-right.is-animating {
  @include anim.scale-up('hor-right', 0.5s);
}

// Vertical (3種類)
.variant-ver-center.is-animating {
  @include anim.scale-up('ver-center', 0.5s);
}

.variant-ver-top.is-animating {
  @include anim.scale-up('ver-top', 0.5s);
}

.variant-ver-bottom.is-animating {
  @include anim.scale-up('ver-bottom', 0.5s);
}

// =====================ページ用のスタイル=======================
.ho-animista-scale-up {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.header-controls {
  margin-bottom: 24px;
}

.back-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: #667eea;
    background: white;
  }
}

.demo-title {
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.demo-description {
  margin-bottom: 32px;
  font-size: 16px;
  color: rgb(255 255 255 / 90%);
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
}

.control-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.control-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.toggle-buttons {
  display: flex;
  gap: 8px;

  padding: 4px;
  border-radius: 8px;

  background: rgb(255 255 255 / 10%);
}

.toggle-button {
  cursor: pointer;

  padding: 8px 20px;
  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);

  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: rgb(255 255 255 / 10%);
  }

  &.active {
    border-color: white;
    color: #667eea;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  }
}

.replay-button {
  cursor: pointer;

  padding: 12px 32px;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: bold;
  color: white;

  background: rgb(99 102 241);
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgb(79 70 229);
    box-shadow: 0 6px 12px rgb(0 0 0 / 30%);
  }

  &:active {
    transform: translateY(0);
  }
}

.animation-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.animation-section {
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
}

.section-title {
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.animation-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.hover-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
}

.demo-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 100px;
  padding: 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-wrap: break-word;

  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}
</style>
```
