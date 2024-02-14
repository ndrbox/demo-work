<script setup lang="ts">
import { signOut } from '../model/useSignInForm';
</script>

<template>
  <v-btn prepend-icon="fas-exit" @click="signOut"> Sign out </v-btn>
</template>
