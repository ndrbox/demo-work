<script setup lang="ts">
import PlaceItem from '../ui/place-item.vue'

const places = [
  {
    id: '1',
    name: 'name',
    description: 'desc',
    img: '/public/stock-imgs/places/place1.jpg',
    location: 'city',
    price: 10,
    rating: 5.0
  },
  {
    id: '2',
    name: 'name',
    description: 'desc',
    img: '/public/stock-imgs/places/place2.jpg',
    location: 'city',
    price: 10,
    rating: 5.0
  },
  {
    id: '3',
    name: 'name',
    description: 'desc',
    img: '/public/stock-imgs/places/place3.jpg',
    location: 'city',
    price: 10,
    rating: 5.0
  },
  {
    id: '4',
    name: 'name',
    description: 'desc',
    img: '/public/stock-imgs/places/place4.jpg',
    location: 'city',
    price: 10,
    rating: 5.0
  },
  {
    id: '5',
    name: 'name',
    description: 'desc',
    img: '/public/stock-imgs/places/place5.jpg',
    location: 'city',
    price: 10,
    rating: 5.0
  }
]

const handleDeleteAction = (id: string) => {
  console.log(id)
}
</script>
<template>
  <h3>Top places</h3>
  <p>100+ workspace</p>
  <PlaceItem
    v-for="place in places"
    :key="place.id"
    :place="place"
    @onDelete="handleDeleteAction(place.id)"
  ></PlaceItem>
</template>
