<script setup lang="ts">
import SpaceItem from '../ui/space-item.vue'

const spaces = [
  { id: '1', name: 'name', description: 'desc' },
  { id: '1', name: 'name', description: 'desc' },
  { id: '1', name: 'name', description: 'desc' }
]
</script>

<template>
  <div>
    <SpaceItem v-for="space in spaces" :key="space.id" :space="space"></SpaceItem>
  </div>
</template>
