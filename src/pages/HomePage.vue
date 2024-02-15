<script setup lang="ts">
import PlacesList from '../features/places-list/pub/places-list.vue'
import SpaceList from '../features/space-list/pub/space-list.vue'
import OrderList from '../features/order-list/pub/order-list.vue'
</script>

<template>
  <v-container>
      <v-card
        variant="flat"
        rounded="xl"
        class="pa-4"
        style="
          background:
            linear-gradient(rgba(219, 223, 255, 0.5), rgba(255, 255, 255, 0)),
            center center;
        "
      >
        <SpaceList />
        <PlacesList />
        <OrderList />
      </v-card>
  </v-container>
</template>
