<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const drawer = ref(false)
const menu = [
  { name: 'home', path: '/' },
  { name: 'statistics', path: '/statistics' },
  { name: 'dashboard', path: '/dashboard' },
  { name: 'admin', path: '/admin' },
  { name: 'report', path: '/report' },
  { name: 'message', path: '/message' }
]
</script>

<script lang="ts">
  export default {
    data: () => ({ drawer: false }),
  }
</script>

<template>
  <v-layout>
    <v-navigation-drawer v-model="drawer">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <v-list nav>
        <v-list-item v-for="item in menu" :key="item.name">
          <RouterLink :to="item.path">
            {{ item.name }}
          </RouterLink>
        </v-list-item>
        <RouterLink to="/about">About</RouterLink>
      </v-list>
    </v-navigation-drawer>
    <v-btn @click="drawer = !drawer"></v-btn>
    <RouterView />
  </v-layout>
</template>
