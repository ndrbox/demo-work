<script setup lang="ts">
import { SpaceListElement } from '../model/types'

defineProps<{
  space: SpaceListElement
}>()
</script>

<template>
  <v-card class="mx-auto" max-width="344" variant="flat">
    <v-img cover :src="`https://cdn.vuetifyjs.com/images/cards/house.jpg`" class="align-end">
      <v-card-item>
        <v-card-title>
          {{ space.name }}
        </v-card-title>
        <v-card-subtitle>
          {{ space.description }}
        </v-card-subtitle>
      </v-card-item>
    </v-img>
  </v-card>
</template>
