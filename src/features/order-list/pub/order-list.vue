<script setup lang="ts">
import OrderItem from '../ui/order-item.vue'

const orders = [
  {
    id: '1',
    start: new Date(),
    end: new Date(),
    place: '12',
    space: 'City 1, building 3',
    img: '/public/stock-imgs/places/place1.jpg'
  },
  {
    id: '2',
    start: new Date(),
    end: new Date(),
    place: '22',
    space: 'City 4, building 7',
    img: '/public/stock-imgs/places/place1.jpg'
  },
  {
    id: '3',
    start: new Date(),
    end: new Date(),
    place: '14',
    space: 'City 2, building 1',
    img: '/public/stock-imgs/places/place1.jpg'
  }
]
</script>

<template>
  <OrderItem v-for="order in orders" :key="order.id" :order="order"> </OrderItem>
</template>
