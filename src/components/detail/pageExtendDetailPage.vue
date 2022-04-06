<template>
    <div>
        <detailPage imgSrc="../../imgs/zhouguanyu2.png" imgAlt="这是周冠宇2图片" />
        <extendComponent imgSrc="../../imgs/zhouguanyu3.png" imgAlt="this is zhou guanyu 3 png" />
        <span >{{'从基类获得的信息是：' + info}}</span>
        <input v-model="info"  />
    </div>
</template>
<script>
import detailPage from './detailPage.vue' 
function makeHappy() {
    alert('yes, im happy', arguments)
    console.log('yes, im happy', arguments[0])
}
const extendComponent = {
    name: 'extendComponent',
    extends: detailPage,
    methods: {
        showThisInfo(data) {
            // alert('this img alt is: ' + data + '加新的')
            // let copy = CommonTools.deepCopy(this)
            extendPage.methods.pleaseGiveMeInfoFromThis(extendPage, this.detailPageInfo)
        },
        // showMe(){
        //     console.log('this extendComponent: ', this);
        //     console.log('this detailPageInfo: ', this.detailPageInfo);
        //     extendPage.methods.pleaseGiveMeInfoFromThis(extendPage, this.detailPageInfo)
        //     // makeHappy(this.detailPageInfo)
        // }
    }
}
const extendPage = {
    extends: detailPage,
    name: 'extendPage',
    el: 'extendEl',
    data () {
        return {
            info: '我是继承的'
        }
    },
    components: {
        extendComponent,
        detailPage
    },
    mounted: {
        
    },
    methods: {
        pleaseGiveMeInfoFromThis(zis, inf){
            console.log('啊哈，我收到基类传来的信息了：', inf)
            console.log('现在的this是：', zis);
            zis.info = inf
            this.LogInfo(inf)
        },
        LogInfo(data) {
            alert('this new info is, 我是从这传来的: ' + data);
        }
    }
}
export default extendPage
</script>
<style lang="less" scoped>
div {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    :first-child, :last-child {
        margin-right: 5vw;
        height: 60vw;
    }
}
// is(button, img) :hover {
//     border: 2px solid lightcoral;
// }
</style>