module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    '@babel/preset-env', // elementui按需使用引入，同时使用babel/preset-env代替原来的es2015，
  ],
  "plugins": [ 
    [
      "component", // 注意，此处需要放进plugin里面
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
