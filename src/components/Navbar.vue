<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Dashboard', path: '/dashboard' }
]

const isActive = (path: string) => route.path === path
</script>

<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <span class="logo">Vue Project</span>
    </div>
    <ul class="navbar-nav">
      <li v-for="item in navItems" :key="item.path">
        <button 
          class="nav-link"
          :class="{ active: isActive(item.path) }"
          @click="router.push(item.path)"
        >
          {{ item.name }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}

.navbar-nav {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1rem;
}

.nav-link {
  padding: 0.5rem 1rem;
  border: none;
  background: none;
  color: white;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.2);
}

.nav-link.active {
  background: rgba(255, 255, 255, 0.3);
  font-weight: bold;
}
</style>