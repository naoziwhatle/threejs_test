<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const Cesium = (window as any).Cesium

const containerRef = ref<HTMLDivElement | null>(null)
const errorMessage = ref('')
let viewer: any = null

const initCesium = async () => {
  await nextTick()
  
  if (!containerRef.value) {
    errorMessage.value = '地图容器未找到'
    return
  }

  if (!Cesium) {
    errorMessage.value = 'Cesium 库未加载'
    return
  }

  try {
    const osmImageryProvider = new Cesium.UrlTemplateImageryProvider({
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      credit: '© OpenStreetMap contributors'
    })

    viewer = new Cesium.Viewer(containerRef.value, {
      animation: false,
      timeline: false,
      baseLayerPicker: false,
      fullscreenButton: false,
      geocoder: false,
      homeButton: true,
      sceneModePicker: false,
      navigationHelpButton: false,
      navigationInstructionsInitiallyVisible: false,
      terrainProvider: new Cesium.EllipsoidTerrainProvider()
    })

    viewer.imageryLayers.addImageryProvider(osmImageryProvider)
    viewer.scene.globe.enableLighting = true
    
    const center = Cesium.Cartesian3.fromDegrees(116.4074, 39.9042, 5000000)
    viewer.camera.flyTo({
      destination: center,
      orientation: {
        heading: Cesium.Math.toRadians(0),
        pitch: Cesium.Math.toRadians(-60),
        roll: 0.0
      },
      duration: 2.0
    })

    const devicePositions = [
      { lng: 116.4074, lat: 39.9042, name: '北京' },
      { lng: 121.4737, lat: 31.2304, name: '上海' },
      { lng: 104.0668, lat: 30.5728, name: '成都' },
      { lng: 113.2644, lat: 23.1291, name: '广州' },
      { lng: 108.9481, lat: 34.2619, name: '西安' }
    ]

    devicePositions.forEach(pos => {
      const position = Cesium.Cartesian3.fromDegrees(pos.lng, pos.lat, 100000)
      viewer?.entities.add({
        name: pos.name,
        position: position,
        ellipsoid: {
          radii: new Cesium.Cartesian3(30000, 30000, 30000),
          material: Cesium.Color.RED.withAlpha(0.8),
          outline: true,
          outlineColor: Cesium.Color.WHITE
        },
        label: {
          text: pos.name,
          font: '16px sans-serif',
          style: Cesium.LabelStyle.FILL_AND_OUTLINE,
          outlineWidth: 2,
          verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
          pixelOffset: new Cesium.Cartesian2(0, -40)
        }
      })
    })

    console.log('Cesium initialized successfully')
  } catch (error: any) {
    console.error('Cesium initialization error:', error)
    errorMessage.value = error.message || '地图初始化失败，请检查浏览器是否支持 WebGL'
  }
}

defineExpose({
  initCesium
})

onMounted(() => {
  initCesium()
})

onUnmounted(() => {
  if (viewer) {
    viewer.destroy()
    viewer = null
  }
})
</script>

<template>
  <div class="cesium-wrapper">
    <div v-if="errorMessage" class="error-overlay">
      <div class="error-content">
        <div class="error-icon">🗺️</div>
        <h3>地图加载失败</h3>
        <p>{{ errorMessage }}</p>
        <p class="error-hint">请尝试使用 Chrome 或 Firefox 浏览器，确保已启用 GPU 加速</p>
      </div>
    </div>
    <div ref="containerRef" class="cesium-container"></div>
  </div>
</template>

<style scoped>
.cesium-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.cesium-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.error-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.error-content {
  text-align: center;
  color: white;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  max-width: 400px;
}

.error-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.error-content h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
}

.error-content p {
  margin: 0 0 0.5rem 0;
  color: rgba(255, 255, 255, 0.8);
}

.error-hint {
  font-size: 0.85rem !important;
  color: rgba(255, 255, 255, 0.6) !important;
}
</style>
