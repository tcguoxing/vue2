<template>
    <div calss="wrapper">
        <div>
            <button @click="returnBack">返回</button>
        </div>
        <span>{{name}}，欢迎来到登录页面</span>
    </div>
</template>
<script>
export default {
    name: 'welcomePage',
    data() {
        return {}
    },
    computed: {
        name() {
            return this.$route.query.id
        }
    },
    methods: {
        returnBack() {
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="less" scoped>
    .wrapper {
        width: 100%;
        height: 100%;
        background: gray;
    }
</style>
