<template>
    <div class="mainBackgroud">
        <div id="leftPart">
            <img src="../../img/zhouguanyu.png" alt="从Instagram上爬取的图片">
        </div>
        <div id="rightPart">
            <div class="commonClass">
                <span class="registerSpan">账号</span>
                <input id="idInput" v-model="id" />
            </div>
            <div class="commonClass">
                <span class="registerSpan">密码</span>
                <input id="password" v-model="password" />
            </div>
            <div class="commonClass">
                <button @click="login">登录</button>
                <button @click="register">注册</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'loginPage',
    data() {
        return {
            id: 'tcguoxing',
            password: '********'
        }
    },
    methods: {
        login() {
            // console.log('typeof lazyLog: ', typeof this.$log());
            this.$log(this)
            this.$router.push({
                path: 'loginWelcome', 
                query: {id: this.id}
            })
        },
        register() {
            this.$router.push({
                path: 'register',
                query: {name: 'register'}
            })
            // alert('no use')
        },
    }
}
</script>
<style lang="less" scoped>
.mainBackground {
    height: 100%;
    width: 100%;
    // background: lightgray;
    background: blue !important;
    display: inline-block;
    flex-direction: row;
    // line-height: 60%;
    align-items:center;
    justify-content: center;
}
#leftPart {
    display: inline-block;
    margin-left: 20% !important;
    width: 25%;
    height: 60%;
    img {
        border: 2px solid lightgrey;
        border-radius: 10px;
        width: 100%;
        height: 100%;
    }
}
#rightPart{
    display: inline-block;
    flex-direction: column;
    justify-content: space-around;
    margin-right: 20% !important;
    width: 25%;
    height: 60%;
    line-height: 60% !important;
    background: gray;
    #commonClass {
        padding: 5px 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        .registerSpan {
            width:30%;
            display: inline-flex;
        }
        input {
            width: 60%;
            display: inline-flex;
        }
        button {
            width: 30%;
            height: 10px;
        }
    }
}
</style>
