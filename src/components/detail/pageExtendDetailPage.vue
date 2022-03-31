<template>
    <div>
        <detailPage imgSrc="../../imgs/zhouguanyu2.png" imgAlt="这是周冠宇2图片" />
        <extendComponent imgSrc="../../imgs/zhouguanyu3.png" imgAlt="this is zhou guanyu 3 png" />
    </div>
</template>
<script>
import detailPage from './detailPage.vue' 
function makeHappy() {
    alert('yes, im happy', arguments)
    console.log('yes, im happy', arguments[0])
}
var extendComponent = {
        name: 'extendComponent',
        extends: detailPage,
        methods: {
            showMe(){
                console.log('this extendComponent: ', this);
                console.log('this detailPageInfo: ', this.detailPageInfo);
                extendPage.methods.pleaseGiveMeInfoFromThis(this.detailPageInfo)
                makeHappy(this.detailPageInfo)
            }
        }
    }
const extendPage = {
    extends: detailPage,
    name: 'extendPage',
    el: 'extendEl',
    data () {
        return {
            
        }
    },
    components: {
        extendComponent,
        detailPage
    },
    mounted: {
        
    },
    methods: {
        pleaseGiveMeInfoFromThis(info){
            console.log('啊哈，我收到基类传来的信息了：', info)
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
</style>