<script setup lang="ts">
import PlacesList from '../features/places-list/pub/places-list.vue'
import SpaceList from '../features/space-list/pub/space-list.vue'
import OrderList from '../features/order-list/pub/order-list.vue'
import CreateOrderForm from '@/features/order-list/pub/create-order-form.vue'
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <v-card
          variant="flat"
          rounded="xl"
          class="pa-6"
          style="
            background:
              linear-gradient(rgba(219, 223, 255, 0.5), rgba(255, 255, 255, 0)),
              center center;
          "
        >
          <h2>Hello</h2>
          <p>Select space</p>
          <SpaceList />
          <v-card rounded="xl" class="pa-4">
            <PlacesList />
          </v-card>
        </v-card>
      </v-col>
      <v-col class="flex-grow-1">
        <div>
          <CreateOrderForm />
          <h3>My schedule</h3>
          <OrderList />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
