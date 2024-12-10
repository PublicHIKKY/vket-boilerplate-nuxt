<template>
  <div class="vim-fern-help">
    <Header />
    <div class="container main-content">
      <div class="content-grid">
        <Sidebar
          :sections="sections"
          :active-section="activeSection"
          @select-section="scrollToSection"
        />
        <MainContent :sections="sections" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useVimFernDocs } from '@/composables/useVimFernDocs'

const { sections, activeSection, scrollToSection } = useVimFernDocs()
</script>

<style lang="scss" scoped>
.vim-fern-help {
  min-height: 100vh;
  background-color: #1a202c;
  color: #f7fafc;

  .main-content {
    margin: 0 auto;
    padding: 1.5rem;
  }

  .content-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;

    @media (min-width: 1024px) {
      grid-template-columns: 1fr 3fr;
    }
  }
}
</style>
