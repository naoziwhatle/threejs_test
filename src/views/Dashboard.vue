<script setup lang="ts">
import { ref } from 'vue'
import StatCard from '@/components/StatCard.vue'

const stats = ref([
  { label: 'Users', value: '1,234', change: '+12%', icon: '👥', color: '#3B82F6' },
  { label: 'Revenue', value: '$45,678', change: '+8%', icon: '💰', color: '#10B981' },
  { label: 'Orders', value: '789', change: '-2%', icon: '📦', color: '#F59E0B' },
  { label: 'Conversion', value: '3.2%', change: '+5%', icon: '📈', color: '#EF4444' }
])
</script>

<template>
  <div class="dashboard">
    <h1 class="page-title">Dashboard</h1>
    <p class="page-description">Welcome to your dashboard. Here's an overview of your data.</p>
    
    <div class="stats-grid">
      <StatCard 
        v-for="stat in stats" 
        :key="stat.label"
        :label="stat.label"
        :value="stat.value"
        :change="stat.change"
        :icon="stat.icon"
        :color="stat.color"
      />
    </div>
    
    <div class="dashboard-content">
      <div class="panel">
        <h2>Recent Activity</h2>
        <div class="activity-list">
          <div class="activity-item">
            <span class="activity-dot" style="background: #10B981"></span>
            <div class="activity-content">
              <p class="activity-title">New user registered</p>
              <p class="activity-time">2 minutes ago</p>
            </div>
          </div>
          <div class="activity-item">
            <span class="activity-dot" style="background: #3B82F6"></span>
            <div class="activity-content">
              <p class="activity-title">Order #1234 completed</p>
              <p class="activity-time">15 minutes ago</p>
            </div>
          </div>
          <div class="activity-item">
            <span class="activity-dot" style="background: #F59E0B"></span>
            <div class="activity-content">
              <p class="activity-title">Payment received</p>
              <p class="activity-time">1 hour ago</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="panel">
        <h2>Quick Actions</h2>
        <div class="action-buttons">
          <button class="action-btn">📝 Create New</button>
          <button class="action-btn">📊 View Reports</button>
          <button class="action-btn">⚙️ Settings</button>
          <button class="action-btn">📤 Export Data</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  max-width: 1200px;
  margin: 0 auto;
}

.page-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.page-description {
  color: #666;
  margin-bottom: 2rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.dashboard-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .dashboard-content {
    grid-template-columns: 1fr;
  }
}

.panel {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.panel h2 {
  color: #333;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.activity-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.activity-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-top: 4px;
  flex-shrink: 0;
}

.activity-content {
  flex: 1;
}

.activity-title {
  margin: 0 0 0.25rem 0;
  color: #333;
  font-weight: 500;
}

.activity-time {
  margin: 0;
  color: #888;
  font-size: 0.85rem;
}

.action-buttons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.action-btn {
  padding: 1rem;
  border: none;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.action-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}
</style>