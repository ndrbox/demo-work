<script setup lang="ts">
import type { OrderListElement } from '../model/types'

defineProps<{
  order: OrderListElement
}>()
</script>

<template>
  <v-card class="mx-auto" max-width="344" variant="flat">
    <v-card-item>
      <v-card-title>
        {{ order.title }}
      </v-card-title>
      <v-card-subtitle>
        {{ order.place }}
        {{ order.space }}
      </v-card-subtitle>
      {{ order.start.toDateString() }} - {{ order.end.toDateString() }}
    </v-card-item>
  </v-card>
</template>
