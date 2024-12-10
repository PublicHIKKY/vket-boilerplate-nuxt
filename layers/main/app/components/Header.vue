<template>
  <header class="header">
    <div class="container">
      <h1 class="title">
        <FileTreeIcon />
        Vim-Fern Documentation
      </h1>
    </div>
  </header>
</template>

<script setup lang="ts">
// FileTreeIcon is auto-imported by Nuxt
</script>

<style lang="scss" scoped>
.header {
  background-color: #2d3748;
  border-bottom: 1px solid #4a5568;
  padding: 1rem;

  .container {
    margin: 0 auto;
  }

  .title {
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
}
</style>
