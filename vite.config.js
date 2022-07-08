import { defineConfig } from 'vite'
import { createVuePlugin } from "vite-plugin-vue2";
import path from 'path'

export default defineConfig({
  plugins: [
    createVuePlugin()
  ],
  resolve: {
    /* 添加alias规则 */
    alias: 
      {
            '@': path.resolve(__dirname, './src'),
            assets: path.resolve(__dirname, "./src/assets"),
            cs:path.resolve(__dirname, "./src/components"),
            views: path.resolve(__dirname, "./src/views"),
            img:path.resolve(__dirname, './src/imgs')
      },
    /* 暂时先加.vue, .js, .json */
    // extensions: [".vue", ".js", ".json"],
  },
  build: {
    lib: {
        entry: path.resolve(__dirname, 'index.js'),
        name: 'jest-search',
        fileName: 'index'
    },
    rollupOptions: {
        external: [
            'vue',
            'axios',
            'element-ui'
        ],
        output: {
            globals: {
                'vue': 'Vue',
                'axios': 'Axios',
                'element-ui': 'elementUi'
            },
            format: 'es'
        }
    }
  }
//   return:{
//     base:'/'
//   },
//   build: {
//     rollupOptions: {
//       output: { //静态资源分类打包
//         chunkFileNames: 'static/js/[name]-[hash].js',
//         entryFileNames: 'static/js/[name]-[hash].js',
//         assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
//         }
//       }
//   }
})
