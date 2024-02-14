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
  <v-sheet class="bg-deep-purple pa-12" rounded>
    <v-card class="mx-auto px-6 py-8" max-width="344">
      <form>
        <v-form validate-on="submit lazy" @submit.prevent="submit">
          <v-text-field outlined v-model="state.name" label="User name"></v-text-field>
          <v-text-field outlined required v-model="state.email" label="User email"></v-text-field>

          <v-btn type="submit">Sign up</v-btn>
          <v-btn @click="$router.push(ROUTES.SIGN_IN)">sign in</v-btn>
        </v-form>
      </form>
    </v-card>
  </v-sheet>
</template>
