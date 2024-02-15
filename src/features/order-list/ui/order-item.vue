<script setup lang="ts">
import type { OrderListElement } from '../model/types'

defineProps<{
  order: OrderListElement
}>()
</script>

<template>
  <v-card class="mt-4 pa-4" variant="outlined" rounded="lg">
    <div class="d-flex flex-no-wrap">

      <v-img cover :src="order.img" rounded height="128" width="128"></v-img>
      <v-card-item>
        <v-card-title>
          {{ order.space }}
        </v-card-title>
        <v-card-subtitle class="mt-4">
          <v-icon>mdi-calendar</v-icon>
          {{ order.start.toDateString() }} - {{ order.end.toDateString() }}
        </v-card-subtitle>
        Workplace #{{ order.place }}
      </v-card-item>
    </div>
  </v-card>
</template>
