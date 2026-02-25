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
- Only files matching these patterns are included: layers/showcases/app/components/ho/animista/HoAnimistaRotate90.vue
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
            HoAnimistaRotate90.vue
```

# Files

## File: layers/showcases/app/components/ho/animista/HoAnimistaRotate90.vue
```vue
<template>
  <div class="ho-animista-rotate-90">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Rotate 90° Animations
    </h1>

    <p class="demo-description">
      22種類の90度回転アニメーションのデモ。SCSS mixinで実装されています。
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
      <div class="animation-section">
        <h2 class="section-title">
          Center Rotation (2 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-cw', { 'is-animating': activeVariants.has('cw') }]">
                cw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-ccw', { 'is-animating': activeVariants.has('ccw') }]">
                ccw
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Corner Rotation (8 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr-cw', { 'is-animating': activeVariants.has('tr-cw') }]">
                tr-cw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tr-ccw', { 'is-animating': activeVariants.has('tr-ccw') }]">
                tr-ccw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br-cw', { 'is-animating': activeVariants.has('br-cw') }]">
                br-cw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-br-ccw', { 'is-animating': activeVariants.has('br-ccw') }]">
                br-ccw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl-cw', { 'is-animating': activeVariants.has('bl-cw') }]">
                bl-cw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bl-ccw', { 'is-animating': activeVariants.has('bl-ccw') }]">
                bl-ccw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl-cw', { 'is-animating': activeVariants.has('tl-cw') }]">
                tl-cw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-tl-ccw', { 'is-animating': activeVariants.has('tl-ccw') }]">
                tl-ccw
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          Edge Rotation (8 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top-cw', { 'is-animating': activeVariants.has('top-cw') }]">
                top-cw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-top-ccw', { 'is-animating': activeVariants.has('top-ccw') }]">
                top-ccw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right-cw', { 'is-animating': activeVariants.has('right-cw') }]">
                right-cw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-right-ccw', { 'is-animating': activeVariants.has('right-ccw') }]">
                right-ccw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom-cw', { 'is-animating': activeVariants.has('bottom-cw') }]">
                bottom-cw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-bottom-ccw', { 'is-animating': activeVariants.has('bottom-ccw') }]">
                bottom-ccw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left-cw', { 'is-animating': activeVariants.has('left-cw') }]">
                left-cw
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'variant-left-ccw', { 'is-animating': activeVariants.has('left-ccw') }]">
                left-ccw
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animation-section">
        <h2 class="section-title">
          3D Rotation (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'cube-3d', 'variant-horizontal-fwd', { 'is-animating': activeVariants.has('horizontal-fwd') }]">
                <div class="cube-face cube-front">
                  hor-fwd
                </div>
                <div class="cube-face cube-back">
                  hor-fwd
                </div>
                <div class="cube-face cube-right">
                  hor-fwd
                </div>
                <div class="cube-face cube-left">
                  hor-fwd
                </div>
                <div class="cube-face cube-top">
                  hor-fwd
                </div>
                <div class="cube-face cube-bottom">
                  hor-fwd
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'cube-3d', 'variant-horizontal-bck', { 'is-animating': activeVariants.has('horizontal-bck') }]">
                <div class="cube-face cube-front">
                  hor-bck
                </div>
                <div class="cube-face cube-back">
                  hor-bck
                </div>
                <div class="cube-face cube-right">
                  hor-bck
                </div>
                <div class="cube-face cube-left">
                  hor-bck
                </div>
                <div class="cube-face cube-top">
                  hor-bck
                </div>
                <div class="cube-face cube-bottom">
                  hor-bck
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'cube-3d', 'variant-vertical-fwd', { 'is-animating': activeVariants.has('vertical-fwd') }]">
                <div class="cube-face cube-front">
                  ver-fwd
                </div>
                <div class="cube-face cube-back">
                  ver-fwd
                </div>
                <div class="cube-face cube-right">
                  ver-fwd
                </div>
                <div class="cube-face cube-left">
                  ver-fwd
                </div>
                <div class="cube-face cube-top">
                  ver-fwd
                </div>
                <div class="cube-face cube-bottom">
                  ver-fwd
                </div>
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-box', 'cube-3d', 'variant-vertical-bck', { 'is-animating': activeVariants.has('vertical-bck') }]">
                <div class="cube-face cube-front">
                  ver-bck
                </div>
                <div class="cube-face cube-back">
                  ver-bck
                </div>
                <div class="cube-face cube-right">
                  ver-bck
                </div>
                <div class="cube-face cube-left">
                  ver-bck
                </div>
                <div class="cube-face cube-top">
                  ver-bck
                </div>
                <div class="cube-face cube-bottom">
                  ver-bck
                </div>
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

type Rotate90Variant
  = 'cw' | 'ccw'
    | 'tr-cw' | 'tr-ccw' | 'br-cw' | 'br-ccw' | 'bl-cw' | 'bl-ccw' | 'tl-cw' | 'tl-ccw'
    | 'top-cw' | 'top-ccw' | 'right-cw' | 'right-ccw' | 'bottom-cw' | 'bottom-ccw' | 'left-cw' | 'left-ccw'
    | 'horizontal-fwd' | 'horizontal-bck' | 'vertical-fwd' | 'vertical-bck'

const allVariants: Rotate90Variant[] = [
  'cw', 'ccw',
  'tr-cw', 'tr-ccw', 'br-cw', 'br-ccw', 'bl-cw', 'bl-ccw', 'tl-cw', 'tl-ccw',
  'top-cw', 'top-ccw', 'right-cw', 'right-ccw', 'bottom-cw', 'bottom-ccw', 'left-cw', 'left-ccw',
  'horizontal-fwd', 'horizontal-bck', 'vertical-fwd', 'vertical-bck',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<Rotate90Variant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 100)
  }
}

watch(isHoverMode, (newValue) => {
  if (newValue) {
    activeVariants.value.clear()
  }
})

onMounted(() => {
  setTimeout(() => {
    void replayAll()
  }, 500)
})
</script>

<style lang="scss" scoped>
@use '#base/app/assets/styles/animations/animista' as anim;

// ============================================
// Animation Variants
// ============================================

// ホバーモード用のスタイル - ラッパーでホバーを検知、子要素にアニメーション適用
.hover-wrapper.hover-mode:hover {
  .demo-box.variant-cw { @include anim.rotate-90('cw', 0.4s); }
  .demo-box.variant-ccw { @include anim.rotate-90('ccw', 0.4s); }
  .demo-box.variant-tr-cw { @include anim.rotate-90('tr-cw', 0.4s); }
  .demo-box.variant-tr-ccw { @include anim.rotate-90('tr-ccw', 0.4s); }
  .demo-box.variant-br-cw { @include anim.rotate-90('br-cw', 0.4s); }
  .demo-box.variant-br-ccw { @include anim.rotate-90('br-ccw', 0.4s); }
  .demo-box.variant-bl-cw { @include anim.rotate-90('bl-cw', 0.4s); }
  .demo-box.variant-bl-ccw { @include anim.rotate-90('bl-ccw', 0.4s); }
  .demo-box.variant-tl-cw { @include anim.rotate-90('tl-cw', 0.4s); }
  .demo-box.variant-tl-ccw { @include anim.rotate-90('tl-ccw', 0.4s); }
  .demo-box.variant-top-cw { @include anim.rotate-90('top-cw', 0.4s); }
  .demo-box.variant-top-ccw { @include anim.rotate-90('top-ccw', 0.4s); }
  .demo-box.variant-right-cw { @include anim.rotate-90('right-cw', 0.4s); }
  .demo-box.variant-right-ccw { @include anim.rotate-90('right-ccw', 0.4s); }
  .demo-box.variant-bottom-cw { @include anim.rotate-90('bottom-cw', 0.4s); }
  .demo-box.variant-bottom-ccw { @include anim.rotate-90('bottom-ccw', 0.4s); }
  .demo-box.variant-left-cw { @include anim.rotate-90('left-cw', 0.4s); }
  .demo-box.variant-left-ccw { @include anim.rotate-90('left-ccw', 0.4s); }
  .demo-box.cube-3d.variant-horizontal-fwd { @include anim.rotate-90('horizontal-fwd', 0.4s); }
  .demo-box.cube-3d.variant-horizontal-bck { @include anim.rotate-90('horizontal-bck', 0.4s); }
  .demo-box.cube-3d.variant-vertical-fwd { @include anim.rotate-90('vertical-fwd', 0.4s); }
  .demo-box.cube-3d.variant-vertical-bck { @include anim.rotate-90('vertical-bck', 0.4s); }
}

// 通常モード（Auto Play）時のアニメーション
// Center Rotation (2 patterns)
.variant-cw.is-animating { @include anim.rotate-90('cw', 0.4s); }
.variant-ccw.is-animating { @include anim.rotate-90('ccw', 0.4s); }

// Corner Rotation (8 patterns)
.variant-tr-cw.is-animating { @include anim.rotate-90('tr-cw', 0.4s); }
.variant-tr-ccw.is-animating { @include anim.rotate-90('tr-ccw', 0.4s); }
.variant-br-cw.is-animating { @include anim.rotate-90('br-cw', 0.4s); }
.variant-br-ccw.is-animating { @include anim.rotate-90('br-ccw', 0.4s); }
.variant-bl-cw.is-animating { @include anim.rotate-90('bl-cw', 0.4s); }
.variant-bl-ccw.is-animating { @include anim.rotate-90('bl-ccw', 0.4s); }
.variant-tl-cw.is-animating { @include anim.rotate-90('tl-cw', 0.4s); }
.variant-tl-ccw.is-animating { @include anim.rotate-90('tl-ccw', 0.4s); }

// Edge Rotation (8 patterns)
.variant-top-cw.is-animating { @include anim.rotate-90('top-cw', 0.4s); }
.variant-top-ccw.is-animating { @include anim.rotate-90('top-ccw', 0.4s); }
.variant-right-cw.is-animating { @include anim.rotate-90('right-cw', 0.4s); }
.variant-right-ccw.is-animating { @include anim.rotate-90('right-ccw', 0.4s); }
.variant-bottom-cw.is-animating { @include anim.rotate-90('bottom-cw', 0.4s); }
.variant-bottom-ccw.is-animating { @include anim.rotate-90('bottom-ccw', 0.4s); }
.variant-left-cw.is-animating { @include anim.rotate-90('left-cw', 0.4s); }
.variant-left-ccw.is-animating { @include anim.rotate-90('left-ccw', 0.4s); }

// 3D Rotation (4 patterns) - 3D Cube Effect
.variant-horizontal-fwd.is-animating { @include anim.rotate-90('horizontal-fwd', 0.4s); }
.variant-horizontal-bck.is-animating { @include anim.rotate-90('horizontal-bck', 0.4s); }
.variant-vertical-fwd.is-animating { @include anim.rotate-90('vertical-fwd', 0.4s); }
.variant-vertical-bck.is-animating { @include anim.rotate-90('vertical-bck', 0.4s); }

// 3D Cube Container
.demo-box.cube-3d {
  position: relative;
  transform-style: preserve-3d;

  display: block;

  padding: 0;

  background: none;
}

// Cube Face Styles
.cube-face {
  position: absolute;
  top: 0;
  left: 0;

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

  backface-visibility: visible;
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

// Cube Face Positioning & Colors (3D space)
.cube-front {
  transform: translateZ(50px);
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
}

.cube-back {
  transform: translateZ(-50px) rotateY(180deg);
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
}

.cube-right {
  transform: rotateY(90deg) translateZ(50px);
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
}

.cube-left {
  transform: rotateY(-90deg) translateZ(50px);
  background: linear-gradient(135deg, #f472b6 0%, #ec4899 100%);
}

.cube-top {
  transform: rotateX(90deg) translateZ(50px);
  background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
}

.cube-bottom {
  transform: rotateX(-90deg) translateZ(50px);
  background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
}

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-rotate-90 {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.header-controls { margin-bottom: 24px; }

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

  &:active { transform: translateY(0); }
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

  background: linear-gradient(135deg, #818cf8 0%, #6366f1 100%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}
</style>
```
