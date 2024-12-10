<template>
  <main class="main-area">
    <div class="prose">
      <Section
        v-for="section in sections"
        :key="section.id"
        :section="section"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
defineProps<{
  sections: Section[]
}>()
</script>

<style lang="scss" scoped>
.main-area {
  background-color: #2d3748;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.prose {
  max-width: none;
}
</style>
