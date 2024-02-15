<script setup lang="ts">
import SpaceItem from '../ui/space-item.vue'

const spaces = [
  { id: '1', name: 'name', description: 'desc', img: '/public/stock-imgs/spaces/space1.jpg' },
  { id: '2', name: 'name', description: 'desc', img: '/public/stock-imgs/spaces/space2.jpg' },
  { id: '3', name: 'name', description: 'desc', img: '/public/stock-imgs/spaces/space3.jpg' },
  { id: '4', name: 'name', description: 'desc', img: '/public/stock-imgs/spaces/space4.jpg' },
  { id: '5', name: 'name', description: 'desc', img: '/public/stock-imgs/spaces/space5.jpg' }
]
</script>

<template>
  <v-row class="align-content-start">
    <v-col cols="md-4" v-for="space in spaces" :key="space.id">
      <SpaceItem height="40vh" :space="space"></SpaceItem>
    </v-col>
  </v-row>
</template>
