<script setup lang="ts">
// @ts-ignore
import CesiumMap from '@/components/CesiumMap.vue'

const deviceData = [
  { id: 'device1', name: '设备A', lng: 116.4074, lat: 39.9042, status: 'online' },
  { id: 'device2', name: '设备B', lng: 121.4737, lat: 31.2304, status: 'online' },
  { id: 'device3', name: '设备C', lng: 104.0668, lat: 30.5728, status: 'offline' },
  { id: 'device4', name: '设备D', lng: 113.2644, lat: 23.1291, status: 'online' },
  { id: 'device5', name: '设备E', lng: 108.9481, lat: 34.2619, status: 'warning' }
]

const getStatusText = (status: string) => {
  if (status === 'online') return '在线'
  if (status === 'warning') return '警告'
  return '离线'
}
</script>

<template>
  <div class="map-container">
    <div class="map-header">
      <h1>中国地图三维场景</h1>
      <p class="subtitle">设备位置可视化展示</p>
    </div>

    <div class="map-wrapper">
      <CesiumMap :devices="deviceData" />
    </div>

    <div class="device-list">
      <h3>设备列表</h3>
      <div v-for="device in deviceData" :key="device.id" class="device-item">
        <span class="status-dot" :class="device.status"></span>
        <span class="device-name">{{ device.name }}</span>
        <span class="device-coord">{{ device.lng.toFixed(4) }}, {{ device.lat.toFixed(4) }}</span>
        <span class="device-status">{{ getStatusText(device.status) }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 你的样式不变，我保留了 */
.map-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background: #000000;
  overflow: hidden;
}

.map-header {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #16213e 0%, #0f3460 100%);
  color: white;
  flex-shrink: 0;
}

.map-header h1 {
  margin: 0 0 0.25rem 0;
  font-size: 1.5rem;
}

.subtitle {
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

.map-wrapper {
  flex: 1;
  position: relative;
}

.device-list {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 1rem;
  min-width: 280px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.device-list h3 {
  margin: 0 0 1rem 0;
  color: #333;
  font-size: 1rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
}

.device-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #f0f0f0;
}

.device-item:last-child {
  border-bottom: none;
}

.status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}

.status-dot.online {
  background: #10B981;
  box-shadow: 0 0 6px #10B981;
}

.status-dot.warning {
  background: #F59E0B;
  box-shadow: 0 0 6px #F59E0B;
}

.status-dot.offline {
  background: #6B7280;
}

.device-name {
  font-weight: 600;
  color: #333;
  flex: 1;
}

.device-coord {
  font-size: 0.8rem;
  color: #888;
  font-family: monospace;
}

.device-status {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background: #f0f0f0;
  color: #666;
}
</style>