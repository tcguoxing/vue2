<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      这是一个拥有elmentUi的页面，目的是想检测elmentUi是否那么好使。<br>
    </p>
    <h3>Element按钮</h3>
    <ul>
      <li>
        <el-button @click="showConfirmDialog">这是个elButton</el-button>
        <el-button @click="showMessage">这是个showMessage</el-button>
      </li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
// import { ElMessageBoxOptions } from '@/../element-ui/types/message-box'

export default {
  name: 'homePage',
  props: {
    msg: String
  },
  methods: {
  showConfirmDialog(){
    let thisConfirm = this.$confirm("请问是否要确定？","注意", {
     confirmButtonText: "确定啦",
    //  confirmButtonLoading: false,
     callback: (action, instance) => {
       instance.confirmButtonLoading = true
       setTimeout(() => {
         instance.confirmButtonLoading = false
       }, 2000)
       console.log('this callback action', action)
       console.log('this callback instance', instance)
     },
    //  beforeClose: (action, instance, _) => {
    //   //  instance.confirmButtonLoading = true
    //    console.log('this beforeClass action', action)
    //    console.log('this beforeClass instance', instance)
    //  }
    })
    thisConfirm.then((val) => {
      console.log('thisConfirmThen:', val)
    })
    console.log('thisConfirm type: ', thisConfirm)
    },
    showMessage() {
      this.$Message("这个内容是","", {text: "内容", type: "warn", onClose: ()=> {console.log('我关了哟')}})
    },
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
