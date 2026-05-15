const { defineConfig } = require('vite')
const vue = require('@vitejs/plugin-vue')
const cesium = require('vite-plugin-cesium').default
const { resolve } = require('path')

module.exports = defineConfig({
  plugins: [
    vue(),
    cesium()  // 插件自动处理一切，不用你管依赖
  ],
  
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },

  optimizeDeps: {
    include: ['cesium']
  }
})