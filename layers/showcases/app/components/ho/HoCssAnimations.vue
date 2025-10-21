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
