<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import UserProfile from '@/widgets/UserProfile.vue'

const drawer = ref(false)
const menu = [
  { name: 'home', path: '/' },
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
    <v-navigation-drawer floating v-model="drawer">
      <h1 class="text-center text-h4 my-16 font-weight-black">Workspace</h1>
      <UserProfile />

      <v-list nav>
        <v-list-item rounded="lg" v-for="item in menu" :key="item.name" :to="item.path">
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
