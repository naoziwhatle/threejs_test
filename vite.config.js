const { defineConfig } = require('vite')
const vue = require('@vitejs/plugin-vue')
const { resolve } = require('path')

module.exports = defineConfig({
  plugins: [
    vue(),
  ],
  
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },

})