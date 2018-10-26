<template>
  <div class="bglogin" v-show="islogin">
    <div class="bgBox">
      <h3>管理员登陆</h3>
      <ul>
        <li><span>账号：</span><input type="text" v-model="user"></li>
        <li><span>密码：</span><input type="password" v-model="pd"></li>
        <li><button @click="toBgLogin">确认</button></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      islogin: true,
      user: "nathan102",
      pd: "11211121"
    };
  },
  methods: {
    toBgLogin() {
      let requestParam = JSON.stringify({
        username: this.user,
        password: this.pd
      });
      this.$http.post("http://111.231.207.167.167:3000/bglogin", requestParam).then(res => {
        if (res.data.status == "1") {
          this.islogin = false;
          localStorage.setItem("bgloginStatus", res.data.data.loginStatus);
        }else {
          console.log(res.data.msg);
        }
      })
      .catch(error => {
        console.log(error);
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.bglogin {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  & .bgBox {
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 300px;
    height: 400px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 3px 16px -5px #070707;
    & h3 {
      margin: 20px 0;
    }
    & ul {
      & li {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 12px 0;
        & input {
          border: none;
          border-bottom: 1px solid #ddd;
          height: 24px;
        }
        & button {
          font-size: 16px;
          height: 32px;
          width: 100%;
          background: rgba(198, 47, 47, 0.9);
          border-radius: 16px;
          margin-top: 22px;
          color: #fff;
        }
      }
    }
  }
}
</style>

