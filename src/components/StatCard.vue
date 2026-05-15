<script setup lang="ts">
defineProps<{
  label: string
  value: string
  change: string
  icon: string
  color: string
}>()

const getChangeClass = (change: string) => {
  return change.startsWith('+') ? 'positive' : 'negative'
}
</script>

<template>
  <div class="stat-card">
    <div class="stat-icon" :style="{ background: `${color}20` }">
      <span>{{ icon }}</span>
    </div>
    <div class="stat-content">
      <p class="stat-label">{{ label }}</p>
      <p class="stat-value">{{ value }}</p>
      <p class="stat-change" :class="getChangeClass(change)">
        {{ change }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.stat-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.stat-icon {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  flex-shrink: 0;
}

.stat-content {
  flex: 1;
}

.stat-label {
  margin: 0 0 0.25rem 0;
  color: #888;
  font-size: 0.85rem;
  font-weight: 500;
}

.stat-value {
  margin: 0 0 0.25rem 0;
  font-size: 1.75rem;
  font-weight: 700;
  color: #333;
}

.stat-change {
  margin: 0;
  font-size: 0.85rem;
  font-weight: 600;
}

.stat-change.positive {
  color: #10B981;
}

.stat-change.negative {
  color: #EF4444;
}
</style>