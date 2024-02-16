<script setup lang="ts">
import SignOutBtn from '../features/auth/ui/SignOutBtn.vue'

const user = {
  name: 'name',
  email: 'email@mail.com'
}
</script>

<template>
  <div class="mx-auto text-center">
    <v-avatar color="red" size="84">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />
    </v-avatar>
    <h4 class="mt-2">{{ user.name }}</h4>
    <p class="text-caption">
      {{ user.email }}
    </p>
  </div>
  <SignOutBtn class="mt-4"/>
</template>
