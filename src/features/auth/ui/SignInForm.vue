<script setup lang="ts">
import { ROUTES } from '@/shared/constants/routes';
import { reactive } from 'vue'

const initialState = {
  name: '',
  email: ''
}

const state = reactive({
  ...initialState
})

const submit = () => {}
</script>

<template>
  <form>
    <v-form validate-on="submit lazy" @submit.prevent="submit">
      <v-text-field v-model="state.name" label="User name"></v-text-field>
      <v-text-field required v-model="state.email" label="User email"></v-text-field>

      <v-btn type="submit">Sign in</v-btn>
      <v-btn @click="$router.push(ROUTES.SIGN_UP)">sign up</v-btn>
    </v-form>
  </form>
</template>
