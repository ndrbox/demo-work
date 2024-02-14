<script setup lang="ts">
import { SpaceListElement } from '../model/types'

defineProps<{
  space: SpaceListElement
}>()
</script>

<template>
  <v-card class="mx-auto" max-width="344" variant="flat">
    <v-card-item>
      <v-img
        :src="`https://cdn.vuetifyjs.com/images/cards/house.jpg`"
        class="align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="200px"
        cover
      />
      <div>
        <div class="text-overline mb-1">
          {{ space.name }}
        </div>
        <div class="text-h6 mb-1">
          {{ space.name }}
        </div>
        <div class="text-caption">{{ space.description }}</div>
      </div>
    </v-card-item>
  </v-card>
</template>
