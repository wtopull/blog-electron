<template>
  <div class="editpop" v-show="showEditPop">
    <ul>
      <li><span>类别：</span><input type="text" value="Vue" disabled></li>
      <li><span>标题：</span><input type="text" value="Vue"></li>
      <li><span>副标题：</span><input type="text" value="Vue"></li>
      <li><span>编辑时间：</span><input type="text" value="Vue"></li>
      <li class="content"><span>内容：</span><textarea name="" id="" cols="30" rows="10"></textarea></li>
    </ul>
    <div class="editBall">
      <button @click="showEditPopBlls">取消</button>
      <button @click="fileRead">确定</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showEditPop: false,
      username:'huiyuan101',
      password:'11211121'
    };
  },
  methods: {
    //编辑
    fileRead() {
      let requestParam = JSON.stringify({
        username: this.username,
        password: this.password,
      });
      this.$http.post("http://111.231.207.167:3000/bglogin", requestParam).then(res => {
        if (res.data.status == "1") {
          localStorage.setItem("loginStatus", res.data.data.loginStatus);
        }else {
          console.log(res.data.msg);
        }
      })
      .catch(error => {
        console.log(error);
      });
    },
    //取消
    showEditPopBlls() {
      this.showEditPop = false;
    },
    showEditPopBll() {
      this.showEditPop = true;
    }
  }
};
</script>
<style lang="scss">
.editpop {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 666px;
  height: 600px;
  margin-left: -333px;
  margin-top: -300px;
  border: 1px solid #ddd;
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 3px 16px -5px #070707;
  & ul {
    & li {
      display: flex;
      min-height: 42px;
      & span {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 88px;
      }
      & input {
        width: 578px;
        border-bottom: 1px solid #ddd;
      }
    }
    & li.content{
      margin-top: 4px;
      & textarea {
        width: 578px;
        height: 300px;
        resize: none;
      }
    }
  }
}
.editBall {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  margin-top: 32px;
  & button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 88px;
    font-size: 18px;
    font-weight: 700;
    background: #ddd;
    border-radius: 16px;
    margin-left: 22px;
    cursor: pointer;
  }
}
</style>


