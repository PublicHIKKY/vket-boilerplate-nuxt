<template>
  <section
    :id="section.id"
    class="section"
  >
    <h2 class="section-title">
      {{ section.title }}
    </h2>
    <div class="section-content">
      <p
        v-for="(content, index) in section.content"
        :key="index"
      >
        {{ content }}
      </p>
      <CommandList
        v-if="section.commands"
        :commands="section.commands"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  section: Section
}>()
</script>

<style lang="scss" scoped>
.section {
  margin-bottom: 2rem;
}

.section-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #4a5568;
  color: #ffffff;
}

.section-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    color: #e2e8f0;
  }
}
</style>
