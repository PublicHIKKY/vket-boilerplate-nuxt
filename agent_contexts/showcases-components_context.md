This file is a merged representation of a subset of the codebase, containing specifically included files and files not matching ignore patterns, combined into a single document by Repomix.

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
- Only files matching these patterns are included: layers/showcases/app/components/ha/**/*, layers/showcases/app/components/hm/**/*, layers/showcases/app/components/ht/**/*, layers/showcases/app/components/ho/*
- Files matching these patterns are excluded: layers/showcases/app/components/ho/animista/**/*
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
layers/
  showcases/
    app/
      components/
        ha/
          .gitkeep
        hm/
          .gitkeep
        ho/
          .gitkeep
          HoCssAnimations.vue
        ht/
          HtTop.vue
```

# Files

## File: layers/showcases/app/components/ha/.gitkeep
```

```

## File: layers/showcases/app/components/hm/.gitkeep
```

```

## File: layers/showcases/app/components/ho/.gitkeep
```

```

## File: layers/showcases/app/components/ho/HoCssAnimations.vue
```vue
<i18n lang="yaml">
ja:
  title: CSSアニメーション
  description: 各種ソースのCSSアニメーション集
  sources:
    title: アニメーションソース
    animista:
      name: Animations
      description: Animista由来のアニメーション（15パターン）
en:
  title: CSS Animations
  description: CSS animations from various sources
  sources:
    title: Animation Sources
    animista:
      name: Animations
      description: Animations from Animista (15 patterns)
</i18n>

<template>
  <div class="ho-css-animations">
    <!-- アニメーションソース一覧 -->
    <div
      v-if="currentView === 'list'"
      class="container"
    >
      <div class="header-controls">
        <button
          class="back-button"
          @click="emit('back')"
        >
          ← Back
        </button>
      </div>

      <header class="header">
        <h1 class="title">
          {{ t('title') }}
        </h1>
        <p class="description">
          {{ t('description') }}
        </p>
      </header>

      <section class="section">
        <h2 class="section-title">
          {{ t('sources.title') }}
        </h2>

        <div class="source-list">
          <button
            class="source-card"
            @click="handleSelectSource('animations')"
          >
            <div class="card-icon">
              🎬
            </div>
            <div class="card-content">
              <h3 class="card-title">
                {{ t('sources.animista.name') }}
              </h3>
              <p class="card-description">
                {{ t('sources.animista.description') }}
              </p>
            </div>
            <div class="card-arrow">
              →
            </div>
          </button>

          <!-- 今後、他のソースを追加可能 -->
        </div>
      </section>
    </div>

    <!-- Animista Animations -->
    <HoAnimista
      v-else-if="currentView === 'animations'"
      @back="handleBackToList"
    />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const emit = defineEmits<{
  back: []
}>()

type ViewType = 'list' | 'animations'

const currentView = ref<ViewType>('list')

const handleSelectSource = (source: string) => {
  if (source === 'animations') {
    currentView.value = 'animations'
  }
}

const handleBackToList = () => {
  currentView.value = 'list'
}
</script>

<style lang="scss" scoped>
.ho-css-animations {
  width: 100%;
  min-height: 100vh;
  padding: 40px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
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

.header {
  margin-bottom: 60px;
  text-align: center;
}

.title {
  margin-bottom: 16px;

  font-size: 48px;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.description {
  font-size: 20px;
  color: rgb(255 255 255 / 90%);
}

.section {
  margin-bottom: 60px;
}

.section-title {
  margin-bottom: 32px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
}

.source-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

.source-card {
  cursor: pointer;

  display: flex;
  gap: 20px;
  align-items: center;

  width: 100%;
  padding: 24px;
  border: none;
  border-radius: 16px;

  font-family: inherit;
  color: inherit;
  text-align: left;
  text-decoration: none;

  background: white;
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgb(0 0 0 / 25%);
  }
}

.card-icon {
  flex-shrink: 0;
  font-size: 40px;
}

.card-content {
  flex: 1;
}

.card-title {
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: bold;
  color: #374151;
}

.card-description {
  font-size: 14px;
  color: #6b7280;
}

.card-arrow {
  flex-shrink: 0;
  font-size: 24px;
  color: #9ca3af;
  transition: transform 0.3s ease;

  .source-card:hover & {
    transform: translateX(4px);
  }
}
</style>
```

## File: layers/showcases/app/components/ht/HtTop.vue
```vue
<i18n lang="yaml">
ja:
  title: Showcase
  description: コンポーネント・ユーティリティのデモ集
  categories:
    title: カテゴリ
    cssAnimations:
      name: CSSアニメーション
      description: CSSアニメーションのデモ集
    components:
      name: Components
      description: UIコンポーネントのデモ集（準備中）
    utils:
      name: Utils
      description: ユーティリティ関数のデモ集（準備中）
en:
  title: Showcase
  description: Collection of component and utility demos
  categories:
    title: Categories
    cssAnimations:
      name: CSS Animations
      description: CSS animation demos
    components:
      name: Components
      description: UI component demos (Coming soon)
    utils:
      name: Utils
      description: Utility function demos (Coming soon)
</i18n>

<template>
  <div class="ht-top">
    <!-- カテゴリ一覧 -->
    <div
      v-if="currentView === 'top'"
      class="container"
    >
      <header class="header">
        <h1 class="title">
          {{ t('title') }}
        </h1>
        <p class="description">
          {{ t('description') }}
        </p>
      </header>

      <section class="section">
        <h2 class="section-title">
          {{ t('categories.title') }}
        </h2>

        <div class="category-list">
          <button
            class="category-card"
            @click="handleSelectCategory('css-animations')"
          >
            <div class="card-icon">
              ✨
            </div>
            <div class="card-content">
              <h3 class="card-title">
                {{ t('categories.cssAnimations.name') }}
              </h3>
              <p class="card-description">
                {{ t('categories.cssAnimations.description') }}
              </p>
            </div>
            <div class="card-arrow">
              →
            </div>
          </button>

          <button
            class="category-card"
            disabled
          >
            <div class="card-icon">
              🧩
            </div>
            <div class="card-content">
              <h3 class="card-title">
                {{ t('categories.components.name') }}
              </h3>
              <p class="card-description">
                {{ t('categories.components.description') }}
              </p>
            </div>
          </button>

          <button
            class="category-card"
            disabled
          >
            <div class="card-icon">
              🛠️
            </div>
            <div class="card-content">
              <h3 class="card-title">
                {{ t('categories.utils.name') }}
              </h3>
              <p class="card-description">
                {{ t('categories.utils.description') }}
              </p>
            </div>
          </button>
        </div>
      </section>
    </div>

    <!-- CSSアニメーション -->
    <HoCssAnimations
      v-else-if="currentView === 'css-animations'"
      @back="handleBack"
    />
  </div>
</template>

<script setup lang="ts">
import HoCssAnimations from '../ho/HoCssAnimations.vue'

const { t } = useI18n()

type ViewType = 'top' | 'css-animations'

const currentView = ref<ViewType>('top')

const handleSelectCategory = (category: string) => {
  if (category === 'css-animations') {
    currentView.value = 'css-animations'
  }
}

const handleBack = () => {
  currentView.value = 'top'
}
</script>

<style lang="scss" scoped>
@use '#showcases/app/assets/styles/variables' as v;
@use '#showcases/app/assets/styles/mixins' as m;

.ht-top {
  width: 100%;
  min-height: 100vh;
  padding: 40px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  margin-bottom: 60px;
  text-align: center;
}

.title {
  margin-bottom: 16px;

  font-size: 48px;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 30%);
}

.description {
  font-size: 20px;
  color: rgb(255 255 255 / 90%);
}

.section {
  margin-bottom: 60px;
}

.section-title {
  margin-bottom: 32px;

  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
}

.category-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

.category-card {
  cursor: pointer;

  display: flex;
  gap: 20px;
  align-items: center;

  width: 100%;
  padding: 24px;
  border: none;
  border-radius: 16px;

  font-family: inherit;
  color: inherit;
  text-align: left;
  text-decoration: none;

  background: white;
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);

  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgb(0 0 0 / 25%);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}

.card-icon {
  flex-shrink: 0;
  font-size: 40px;
}

.card-content {
  flex: 1;
}

.card-title {
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: bold;
  color: #374151;
}

.card-description {
  font-size: 14px;
  color: #6b7280;
}

.card-arrow {
  flex-shrink: 0;
  font-size: 24px;
  color: #9ca3af;
  transition: transform 0.3s ease;

  .category-card:hover:not(:disabled) & {
    transform: translateX(4px);
  }
}
</style>
```
