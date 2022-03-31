<template>
    <div class="mainBackground">
        <div class="head" >
            <span> 这就是周冠宇了</span>
        </div>
        <div class="body" >
            <div id="leftPart">
                <img src="../../imgs/zhouguanyu.png" alt="从Instagram上爬取的图片">
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
.body {
    width: 100%;
    height: 100%;
    line-height: 100%;
    background: beige !important;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.head{
    width: auto;
    display: flex;
    justify-content: center;
    margin: 0 2vw;
    span {
        font-size: xx-large;
        font-weight: 700;
        margin: 2vw 0;
    }
}
#leftPart {
    display: inline-block;
    margin-right: 5%;
    width: 25%;
    height: 100%;
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
    margin-left: 5%;
    width: 25%;
    height: 60%;
    background: gray;
    .commonClass {
        padding: 5px 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
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
            height: 10%;
            margin: 0 1vw;
        }
    }
}
</style>
