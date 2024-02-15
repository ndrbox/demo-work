<script setup lang="ts">
import OrderItem from '../ui/order-item.vue'

const orders = [
  {
    id: '1',
    title: 'test',
    start: new Date(),
    end: new Date(),
    place: '1',
    space: '1'
  },
  {
    id: '2',
    title: 'test',
    start: new Date(),
    end: new Date(),
    place: '1',
    space: '1'
  },
  {
    id: '3',
    title: 'test',
    start: new Date(),
    end: new Date(),
    place: '1',
    space: '1'
  }
]
</script>

<template>
  <OrderItem v-for="order in orders" :key="order.id" :order="order"> </OrderItem>
</template>
