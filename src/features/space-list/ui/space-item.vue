<script setup lang="ts">
import type { SpaceListElement } from '../model/types'

defineProps<{
  space: SpaceListElement
}>()


</script>

<template>
  <v-card theme="dark" rounded="lg" class="ma-1" min-width="204" variant="text">
    <v-img cover :src="space.img" class="text-white fill-height">
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
