<script setup lang="ts">
const state = {
  title: 'test',
  start: new Date()
}
</script>

<template>
  <form>
    <p>{{ state.title }}</p>
    <v-date-picker v-model="state.start"></v-date-picker>
    <v-btn>Create order</v-btn>
  </form>
</template>
