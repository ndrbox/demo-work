<script setup lang="ts">
import SignOutBtn from '../features/auth/ui/SignOutBtn.vue'

const user = {
  name: 'name',
  email: 'email@mail.com'
}
</script>

<template>
  <div>
    <v-avatar color="primary">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />
    </v-avatar>
    <h3>{{ user.name }}</h3>
    <p class="text-caption mt-1">
      {{ user.email }}
    </p>

    <SignOutBtn />
  </div>
</template>
