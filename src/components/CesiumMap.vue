<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import * as Cesium from 'cesium'

const containerRef = ref<HTMLDivElement | null>(null)
let viewer: Cesium.Viewer | null = null

const initCesium = async () => {
  await nextTick()
  
  if (!containerRef.value) {
    console.error('Cesium container not found')
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
      terrainProvider: new Cesium.EllipsoidTerrainProvider(),
      imageryProvider: osmImageryProvider
    })

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
  } catch (error) {
    console.error('Cesium initialization error:', error)
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
  <div ref="containerRef" class="cesium-container"></div>
</template>

<style scoped>
.cesium-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
</style>