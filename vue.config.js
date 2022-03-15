const { defineConfig } = require('@vue/cli-service')
// const { resolve } = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack:{
    resolve:{
        alias:{
            assets:"@/assets",
            common:"@/common",
            cs:"@/components",
            network:"@/network",
            views:"@/views"
        }
    }
  }
  // alias: {
  //   '@': resolve(__dirname, 'src'),
  //   'cs': resolve(__dirname, 'src/components')
  // }
})
