<template>
  <div class="issue" v-show="showIssue">
    <ul>
      <li><span>类别：</span><input type="text" v-model="type"></li>
      <li><span>标题：</span><input type="text" v-model="title"></li>
      <li><span>副标题：</span><input type="text" v-model="subtitle"></li>
      <li><span>编辑时间：</span><input type="text" v-model="date"></li>
      <li><span>图片地址：</span><input type="text" v-model="img"></li>
      <li class="content"><span>内容：</span><textarea v-model="contents" cols="30" rows="10"></textarea></li>
    </ul>
    <div class="issueBall">
      <button @click="showbox">取消</button>
      <button @click="fileRead">确定</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showIssue: false,
      type: "",
      title: "",
      date: "",
      img: "",
      subtitle: "",
      contents: ""
    };
  },
  methods: {
    fileRead() {
      let reqParam = JSON.stringify({
        type:this.type,
        title:this.title,
        date:this.date,
        img:this.img,
        subtitle:this.subtitle,
        contents:this.contents
      });
      this.$http.post("http://111.231.207.167:3000/list/insert", reqParam).then(res => {
        console.log(res);
      });
    },
    showboxs() {
      this.showIssue = true;
    },
    showbox() {
      this.showIssue = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.issue {
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
  border-radius: 3px;
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
    & li.content {
      margin-top: 4px;
      & textarea {
        width: 578px;
        height: 300px;
        resize: none;
      }
    }
  }
}
.issueBall {
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
