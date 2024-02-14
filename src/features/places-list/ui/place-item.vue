<script setup lang="ts">
import { PlaceListElement } from '../model/types'

defineProps<{
  place: PlaceListElement
}>()
</script>

<template>
  <v-card class="mx-auto" max-width="344" variant="flat">
    <v-card-item>
      <div>
        <div class="text-overline mb-1">
          {{ place.name }}
        </div>
        <div class="text-h6 mb-1">
          {{ place.name }}
        </div>
        <div class="text-caption">{{ place.description }}</div>
      </div>
    </v-card-item>

    <v-card-actions>
      <v-btn @click="$emit('onDelete')"> Delete </v-btn>
    </v-card-actions>
  </v-card>
</template>
