<script setup lang="ts">
import PlaceItem from '../ui/place-item.vue'

const places = [{ id: '1', name: 'name', description: 'desc' }]

const handleDeleteAction = (id) => {
  console.log(id)
}
</script>
<template>
  <div>
    <PlaceItem
      v-for="place in places"
      :key="place.id"
      :place="place"
      @onDelete="handleDeleteAction(place.id)"
    ></PlaceItem>
  </div>
</template>
