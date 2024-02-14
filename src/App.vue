<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import UserProfile from '@/widgets/UserProfile.vue'

const drawer = ref(false)
const menu = [
  { name: 'home', path: '/' },
  // { name: 'statistics', path: '/statistics' },
  // { name: 'dashboard', path: '/dashboard' },
  // { name: 'admin', path: '/admin' },
  // { name: 'report', path: '/report' },
  // { name: 'message', path: '/message' },
  { name: 'order', path: '/order' },
  { name: 'about', path: '/about' }
]
</script>

<script lang="ts">
export default {
  data: () => ({ drawer: false })
}
</script>

<template>
  <v-layout>
    <v-navigation-drawer v-model="drawer">
      <UserProfile />

      <v-list nav>
        <v-list-item v-for="item in menu" :key="item.name" :to="item.path">
          {{ item.name }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-btn icon @click="drawer = !drawer"></v-btn>
      <RouterView />
    </v-main>
  </v-layout>
</template>
