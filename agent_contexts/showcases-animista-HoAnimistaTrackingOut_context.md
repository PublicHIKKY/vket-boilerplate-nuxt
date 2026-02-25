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
- Only files matching these patterns are included: layers/showcases/app/components/ho/animista/HoAnimistaTrackingOut.vue
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
            HoAnimistaTrackingOut.vue
```

# Files

## File: layers/showcases/app/components/ho/animista/HoAnimistaTrackingOut.vue
```vue
<template>
  <div class="ho-animista-tracking-out">
    <div class="header-controls">
      <button
        class="back-button"
        @click="emit('back')"
      >
        ← Back
      </button>
    </div>

    <h1 class="demo-title">
      Tracking Out Animations
    </h1>

    <p class="demo-description">
      8種類の文字間隔変化退場アニメーションのデモ。SCSS mixinで実装されています。
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
          Tracking Out Contract (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-contract', { 'is-animating': activeVariants.has('contract') }]">
                CONTRACT
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-contract-bck', { 'is-animating': activeVariants.has('contract-bck') }]">
                CONTRACT BCK
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-contract-bck-top', { 'is-animating': activeVariants.has('contract-bck-top') }]">
                CONTRACT BCK TOP
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-contract-bck-bottom', { 'is-animating': activeVariants.has('contract-bck-bottom') }]">
                CONTRACT BCK BOTTOM
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="animation-section">
        <h2 class="section-title">
          Tracking Out Expand (4 patterns)
        </h2>
        <div class="grid">
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-expand', { 'is-animating': activeVariants.has('expand') }]">
                EXPAND
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-expand-fwd', { 'is-animating': activeVariants.has('expand-fwd') }]">
                EXPAND FWD
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-expand-fwd-top', { 'is-animating': activeVariants.has('expand-fwd-top') }]">
                EXPAND FWD TOP
              </div>
            </div>
          </div>
          <div class="animation-item">
            <div :class="['hover-wrapper', { 'hover-mode': isHoverMode }]">
              <div :class="['demo-text', 'variant-expand-fwd-bottom', { 'is-animating': activeVariants.has('expand-fwd-bottom') }]">
                EXPAND FWD BOTTOM
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

type TrackingOutVariant
  = | 'contract'
    | 'contract-bck'
    | 'contract-bck-top'
    | 'contract-bck-bottom'
    | 'expand'
    | 'expand-fwd'
    | 'expand-fwd-top'
    | 'expand-fwd-bottom'

const allVariants: TrackingOutVariant[] = [
  'contract',
  'contract-bck',
  'contract-bck-top',
  'contract-bck-bottom',
  'expand',
  'expand-fwd',
  'expand-fwd-top',
  'expand-fwd-bottom',
]

const isHoverMode = ref(false)
const activeVariants = ref<Set<TrackingOutVariant>>(new Set())

const replayAll = async () => {
  activeVariants.value.clear()
  await nextTick()

  for (const [index, variant] of allVariants.entries()) {
    setTimeout(() => {
      activeVariants.value = new Set(activeVariants.value).add(variant)
    }, index * 150)
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

.hover-wrapper.hover-mode:hover {
  .demo-text.variant-contract { @include anim.tracking-out('contract', 0.7s); }
  .demo-text.variant-contract-bck { @include anim.tracking-out('contract-bck', 1s); }
  .demo-text.variant-contract-bck-top { @include anim.tracking-out('contract-bck-top', 1s); }
  .demo-text.variant-contract-bck-bottom { @include anim.tracking-out('contract-bck-bottom', 1s); }
  .demo-text.variant-expand { @include anim.tracking-out('expand', 0.7s); }
  .demo-text.variant-expand-fwd { @include anim.tracking-out('expand-fwd', 1s); }
  .demo-text.variant-expand-fwd-top { @include anim.tracking-out('expand-fwd-top', 1s); }
  .demo-text.variant-expand-fwd-bottom { @include anim.tracking-out('expand-fwd-bottom', 1s); }
}

// Tracking Out Contract Variations (4 patterns)
.variant-contract.is-animating { @include anim.tracking-out('contract', 0.7s); }
.variant-contract-bck.is-animating { @include anim.tracking-out('contract-bck', 1s); }
.variant-contract-bck-top.is-animating { @include anim.tracking-out('contract-bck-top', 1s); }
.variant-contract-bck-bottom.is-animating { @include anim.tracking-out('contract-bck-bottom', 1s); }

// Tracking Out Expand Variations (4 patterns)
.variant-expand.is-animating { @include anim.tracking-out('expand', 0.7s); }
.variant-expand-fwd.is-animating { @include anim.tracking-out('expand-fwd', 1s); }
.variant-expand-fwd-top.is-animating { @include anim.tracking-out('expand-fwd-top', 1s); }
.variant-expand-fwd-bottom.is-animating { @include anim.tracking-out('expand-fwd-bottom', 1s); }

// ============================================
// Page Layout Styles
// ============================================

.ho-animista-tracking-out {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;

  background: #1f2937;
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
    color: #1f2937;
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
    color: #1f2937;
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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

  width: 100%;
  min-height: 80px;
}

.demo-text {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 80px;
  padding: 16px;
  border-radius: 12px;

  font-size: 20px;
  font-weight: bold;
  color: #10b981;
  text-align: center;
  letter-spacing: 0;

  background: white;

  &.is-animating {
    pointer-events: none;
  }
}
</style>
```
