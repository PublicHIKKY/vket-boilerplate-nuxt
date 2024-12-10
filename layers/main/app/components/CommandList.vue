<template>
  <div class="commands">
    <h3 class="commands-title">
      Commands
    </h3>
    <div class="commands-list">
      <div
        v-for="(command, idx) in commands"
        :key="idx"
        class="command-item"
      >
        <code class="command-name">{{ command.name }}</code>
        <span class="command-description">{{ command.description }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  commands: Command[]
}>()
</script>

<style lang="scss" scoped>
.commands {
  margin-top: 1rem;

  .commands-title {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .commands-list {
    background-color: #1a202c;
    border-radius: 0.5rem;
    padding: 1rem;
    font-family: monospace;
  }

  .command-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 0.5rem 0;
  }

  .command-name {
    color: #68d391;
  }

  .command-description {
    color: #a0aec0;
  }
}
</style>
