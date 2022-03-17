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
        <el-button @click="changeValueFormat">这个可以更改valueFormat</el-button>
        <el-button @click="giveTime">点击出时间</el-button>
      </li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>datePicker</h3>
    <ul>
      <el-date-picker
      v-model="value2"
      align="right"
      type="month"
      :format="format"
      value-format="yyyy-MM-dd"
      placeholder="选择日期"
      :picker-options="pickerOptions">
    </el-date-picker>
    </ul>
    <h3>table</h3>
    <ul>
      <el-table
      :data="tableData"
      cell-style="height: 50px;"
      header-cell-style="height: 100px;"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
// import { ElMessageBoxOptions } from '@/../element-ui/types/message-box'

export default {
  name: 'homePage',
  data () {
    return {
      value2: '2021-03-05',
      format: 'yyyy-MM-dd',
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
        }]
      },
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  watch: {
    value2: {
      handler(val) {
        console.log('now the real value is: ', val)
      }
    }
  },
  props: {
    msg: String
  },
  methods: {
  giveTime () {
    console.log('date picker is: ', this.value2);
  },
  changeValueFormat() {
    this.format = this.format === 'yyyy-MM-dd' ? 'yyyy-MM' : 'yyyy-MM-dd'
    console.log('this format is :', this.format)
    // return newFormat
  },
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
