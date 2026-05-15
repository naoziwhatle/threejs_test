<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <div class="home">
    <section class="hero" :class="{ visible: isVisible }">
      <div class="hero-content">
        <h1 class="hero-title">Welcome to Vue Project</h1>
        <p class="hero-subtitle">A modern Vue 3 + TypeScript application with beautiful design</p>
        <div class="hero-buttons">
          <button class="btn btn-primary">Get Started</button>
          <button class="btn btn-secondary">Learn More</button>
        </div>
      </div>
    </section>
    
    <section class="features">
      <div class="feature-card">
        <div class="feature-icon">⚡</div>
        <h3>Fast Performance</h3>
        <p>Built with Vite for lightning-fast development and optimized builds</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🎨</div>
        <h3>Modern Design</h3>
        <p>Beautiful UI with gradient backgrounds and smooth animations</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">📦</div>
        <h3>Type Safe</h3>
        <p>Full TypeScript support for better developer experience</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  min-height: 100%;
}

.hero {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  margin-bottom: 2rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
}

.hero.visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-title {
  font-size: 3rem;
  color: white;
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: white;
  color: #667eea;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.3);
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  color: #333;
  margin-bottom: 0.5rem;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}
</style>