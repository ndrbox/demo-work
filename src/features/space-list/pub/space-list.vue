<script setup lang="ts">
import SpaceItem from '../ui/space-item.vue'

const spaces = [
  { id: '1', name: 'name', description: 'desc', img:'/public/stock-imgs/spaces/space1.jpg' },
  { id: '2', name: 'name', description: 'desc', img:'/public/stock-imgs/spaces/space2.jpg' },
  { id: '3', name: 'name', description: 'desc', img:'/public/stock-imgs/spaces/space3.jpg' },
  { id: '4', name: 'name', description: 'desc', img:'/public/stock-imgs/spaces/space4.jpg' },
  { id: '5', name: 'name', description: 'desc', img:'/public/stock-imgs/spaces/space5.jpg' },
]


</script>

<template>
  <v-col>
    <v-row class="align-content-start">
      <SpaceItem v-for="space in spaces" :key="space.id" :space="space"></SpaceItem>
    </v-row>
  </v-col>
</template>
