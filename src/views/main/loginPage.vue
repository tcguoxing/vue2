<template>
  <div class="main">
    <div class="body">
      <div class="leftPart">
        <img src="../../imgs/zhouguanyu.png" alt="从Instagram上爬取的图片" />
      </div>
      <div class="rightPart">
        <div class="upper">
          <img src="../../assets/Photoshow.png" />
          <div class="acountClass roundClass">
            <label>手机号、账号或邮箱</label>
            <input id="idInput" type="text" v-model="id" />
          </div>
          <div class="pwdClass roundClass">
            <div>
              <label>密码</label>
              <input type="password" v-model="password" />
            </div>
            <span @click="showPwd">显示</span>
          </div>
          <button @click="login">登录</button>
          <span>----------------或------------------</span>
        </div>
        <div class="middle"></div>
        <div class="download"></div>
      </div>
    </div>
    <div class="footer">
      <div class="buttons">
        <span @click="mentionInfo">Xdxn</span>
        <span @click="mentionInfo">关于</span>
        <span @click="mentionInfo">博客</span>
        <span @click="mentionInfo">工作</span>
        <span @click="mentionInfo">帮助</span>
        <span @click="mentionInfo">API</span>
        <span @click="mentionInfo">隐私</span>
        <span @click="mentionInfo">条款</span>
        <span @click="mentionInfo">热门账户</span>
        <span @click="mentionInfo">话题标签</span>
        <span @click="mentionInfo">地点</span>
        <span @click="mentionInfo">Photoshow Life</span>
        <span @click="mentionInfo">舞蹈</span>
        <span @click="mentionInfo">美食靓饮</span>
        <span @click="mentionInfo">家居园艺</span>
        <span @click="mentionInfo">音乐</span>
        <span @click="mentionInfo">视觉艺术</span>
      </div>
      <div>
        <select name="language">
          <option value="zh">中文（简体）</option>
          <option value="cht">中文（繁体）</option>
          <option value="en">English</option>
        </select>
        <span>2022Photoshow from Xdxn</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "loginPage",
  data() {
    return {
      id: "tcguoxing",
      password: "********",
    };
  },
  methods: {
    login() {
      // console.log('typeof lazyLog: ', typeof this.$log());
      this.$log(this);
      this.$router.push({
        path: "loginWelcome",
        query: { id: this.id },
      });
    },
    register() {
      this.$router.push({
        path: "register",
        query: { name: "register" },
      });
      // alert('no use')
    },
    mentionInfo() {
      alert("comming soon");
    },
    showPwd() {
      alert("show the password");
    },
  },
};
</script>
<style lang="less" scoped>
.main {
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: aqua;
  width: 60vw;
  height: 90vh;
}
.body {
  width: 40vw;
  height: 55vh;
  margin-top: 10vh;
  align-self: center;
  background: beige !important;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.leftPart {
  display: inline-block;
  width: 45%;
  height: 100%;
  img {
    border: 2px solid lightgrey;
    border-radius: 1vh;
    width: 100%;
    height: 100%;
  }
}
input {
  border-width: 0;
  background: transparent;
}
.roundClass {
  font-size: x-small;
  width: 14vw;
  display: flex;
  background: rgb(232, 240, 254);
  border: 1px solid rgb(129, 129, 129);
  border-radius: 3px;
  padding: 2px 0;
}
.rightPart {
  width: 45%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .upper {
    width: 100%;
    background: white;
    border: 1px solid lightgray;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    img {
      width: 10vw;
      height: auto;
    }
    label,
      input {
        margin-left: 0.3vw;
        height: 2vh;
      }
    .acountClass {
      flex-direction: column;
    }
    .pwdClass {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      div {
        display: flex;
        flex-direction: column;
      }
      span {
        font-size: 1.5vh;
        font-weight: 700;
        width: 2vw;
        height: 100%;
        background-color: blueviolet;
        cursor: pointer;
        align-content: stretch;
        // align-self: center;
        background: rgb(250, 250, 250);
      }
    }

    .commonClass {
      padding: 5px 20px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      .registerSpan {
        width: 30%;
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
}
.footer {
  font-size: smaller;
  color: rgb(129, 129, 129);
  height: 8vh;
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 4vh;
    span {
      margin: 0 0.5vw;
      cursor: pointer;
    }
  }
  div:last-child {
    width: 16vw;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    select {
      border-width: 0;
      background: transparent;
      color: rgb(129, 129, 129);
    }
  }
}
</style>
