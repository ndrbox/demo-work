<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import UserProfile from '@/widgets/UserProfile.vue'

const drawer = ref(false)
const menu = [
  { name: 'home', path: '/', icon:'mdi-home' },
  { name: 'order', path: '/order', icon: 'mdi-desk' },
  { name: 'about', path: '/about', icon: 'mdi-ticket' }
]
</script>

<script lang="ts">
export default {
  data: () => ({ drawer: false })
}
</script>

<template>
  <v-layout>
    <v-navigation-drawer floating v-model="drawer">
      <h1 class="text-center text-h4 my-16 font-weight-black">Workspace</h1>
      <UserProfile />

      <v-list nav>
        <v-list-item rounded="xl" v-for="item in menu" :key="item.name" :to="item.path">
          <v-icon class="mx-2">
            {{ item.icon }}
          </v-icon>
          
          {{ item.name }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-btn
        v-show="!drawer"
        variant="flat"
        icon="mdi-menu"
        density="compact"
        @click="drawer = !drawer"
      >
      </v-btn>
      <RouterView />
    </v-main>
  </v-layout>
</template>
