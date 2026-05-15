<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <Navbar />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  padding: 2rem;
}
</style>