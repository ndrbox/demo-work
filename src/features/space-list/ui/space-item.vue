<script setup lang="ts">
import type { SpaceListElement } from '../model/types'
import { ROUTES } from '@/shared/constants/routes'


defineProps<{
  space: SpaceListElement
}>()


</script>

<template>
  <v-card @click="$router.push(`${ROUTES.SPACE}/${space.id}`)" theme="dark" rounded="lg" variant="text">
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
