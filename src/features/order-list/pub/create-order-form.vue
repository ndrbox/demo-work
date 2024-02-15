<script setup lang="ts">
const state = {
  
}
</script>

<template>
  <form>
    <p>{{ state.title }}</p>
    <v-text-field v-model="state.title" label="title" required></v-text-field>
    <v-row justify="space-around">
      <v-date-picker flat v-model="state.start" elevation="24"></v-date-picker>
    </v-row>
    <v-btn>Create order</v-btn>
  </form>
</template>
