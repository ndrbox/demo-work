<script setup lang="ts">
import { signOut } from '../model/useSignInForm';
</script>

<template>
  <v-btn prepend-icon="mdi-exit-to-app" @click="signOut"> Sign out </v-btn>
</template>
