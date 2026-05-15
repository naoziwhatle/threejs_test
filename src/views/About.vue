<script setup lang="ts">
const aboutItems = [
  {
    title: 'Vue 3',
    description: 'Latest version of Vue.js with Composition API'
  },
  {
    title: 'TypeScript',
    description: 'Strongly typed programming language'
  },
  {
    title: 'Vite',
    description: 'Next generation frontend build tool'
  },
  {
    title: 'Vue Router',
    description: 'Official router for Vue.js applications'
  }
]
</script>

<template>
  <div class="about">
    <h1 class="page-title">About This Project</h1>
    <p class="page-description">
      This is a modern Vue 3 + TypeScript project template, designed to provide a solid foundation for building web applications.
    </p>
    
    <div class="about-content">
      <div class="about-section">
        <h2>Technology Stack</h2>
        <div class="tech-grid">
          <div v-for="item in aboutItems" :key="item.title" class="tech-card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
      
      <div class="about-section">
        <h2>Features</h2>
        <ul class="feature-list">
          <li>✅ Modular component architecture</li>
          <li>✅ Type-safe development with TypeScript</li>
          <li>✅ Easy routing with Vue Router</li>
          <li>✅ Fast development with Vite</li>
          <li>✅ Modern CSS styling</li>
          <li>✅ Responsive design</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
}

.page-description {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.about-section {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.about-section h2 {
  color: #333;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.tech-card {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
}

.tech-card h3 {
  color: #333;
  margin-bottom: 0.5rem;
}

.tech-card p {
  color: #666;
  font-size: 0.9rem;
}

.feature-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0.75rem;
}

.feature-list li {
  padding: 0.75rem 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  color: #444;
}
</style>