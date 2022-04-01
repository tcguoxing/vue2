<template>
    <div>
        <img :src="imgSrc" :alt="imgAlt"/>
        <button @click="showMe">click me</button>
        <button @click="showMe2">click me 2</button>
    </div>
</template>
<script>
export default {
    name: 'detailPage',
    el: 'detailEl',
    props:{
        imgSrc: {
            default: ''
        },
        imgAlt: {
            default: ''
        }
    },
    data() {
        return {
            detailPageInfo: 'this info from detailPage',
            detailInfo: 'detailInfo'
        }
    },
    methods: {
        showMe() {
            this.showThisInfo(this.detailInfo)
        },
        showThisInfo(data) {
            debugger
            alert('this img alt is: ' + data)
        },
        showMe2() {
            console.log('this detailPage Component:', this);
        }

    }
}
</script>
<style lang="less" scoped>
div {
    min-width: 30vw;
    min-height: 50vh;
    max-width: 90vw;
    max-height: 80vh;
    display: flex;
    flex-direction: column;
    img {
        flex-grow: 10;
        padding: 1vh;
    }
    button {
        flex-grow: 1;
        margin: 0.5vh;
    }
}
</style>