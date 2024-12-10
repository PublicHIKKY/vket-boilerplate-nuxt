<template>
  <nav class="sidebar">
    <div class="sticky-nav">
      <h2 class="nav-title">
        Contents
      </h2>
      <ul class="nav-list">
        <li
          v-for="section in sections"
          :key="section.id"
        >
          <a
            :class="['nav-link', { active: activeSection === section.id }]"
            @click="$emit('select-section', section.id)"
          >
            {{ section.title }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  sections: Section[]
  activeSection: string
}>()

defineEmits<{
  (e: 'select-section', id: string): void
}>()
</script>

<style lang="scss" scoped>
.sidebar {
  background-color: #2d3748;
  border-radius: 0.5rem;
  padding: 1rem;

  .sticky-nav {
    position: sticky;
    top: 1rem;
  }

  .nav-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .nav-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .nav-link {
    display: block;
    padding: 0.5rem 0.75rem;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #4a5568;
    }

    &.active {
      background-color: #4a5568;
      color: #ffffff;
    }
  }
}
</style>
