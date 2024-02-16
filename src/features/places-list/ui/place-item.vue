<script setup lang="ts">
import type { PlaceListElement } from '../model/types'
import { ROUTES } from '@/shared/constants/routes'


defineProps<{
  place: PlaceListElement
}>()
</script>

<template>
  <v-card @click="$router.push( `${ROUTES.PLACE}/:id`)" class="py-2" max-width="424" variant="flat">
    <div class="d-flex flex-no-wrap">
      <v-img cover :src="place.img" rounded="lg" height="168" max-width="168"></v-img>

      <div>
        <v-card-title> {{ place.name }}</v-card-title>
        <v-card-text>
          <v-row class="mx-0">
            <v-rating
              :value="place.rating"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text ms-4">{{ place.rating }} (413)</div>
          </v-row>

          <div class="my-4 text-subtitle-1">${{ place.price }}/day</div>

          <div>
            {{ place.description }}
          </div>
        </v-card-text>
      </div>
    </div>
  </v-card>
</template>
