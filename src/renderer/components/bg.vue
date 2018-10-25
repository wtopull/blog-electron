<template>
  <div class="bg">
    <div class="content">
      <bglogin v-show="isBgLogin"></bglogin>
      <div class="bgTitle">
        <div class="issue"><button @click="showIssue">文章发布</button></div>
        <ul>
          <li :class="listNum == index? 'active':''" v-for="(item,index) in navList" :key="index" @click="listNavBall(item,index)">{{item}}</li>
        </ul>
      </div>
      <hr>
      <listBox :listNum='list'></listBox>
      <issue ref="showboxs"></issue>
    </div>
  </div>
</template>
<script>
import bglogin from "./bg/bglogin.vue";
import listBox from "./bg/list.vue";
import issue from "./bg/issue.vue";
import { doclist } from "@/assets/js/doclist.js";
import { join } from "path";
export default {
  data() {
    return {
      isBgLogin: true,
      title: null,
      doclist: doclist,
      listNum: 0,
      navList: [],
      list: []
    };
  },
  mounted() {
    this.doc();
    //管理员登陆判断
    if (localStorage.getItem("bgloginStatus") === "false") {
      this.isBgLogin = false;
    }
  },
  methods: {
    doc() {
      this.$http.get("http://127.0.0.1:3000/list").then(res => {
        localStorage.setItem("readlist", JSON.stringify(res.data.data));
        this.doclist = JSON.parse(localStorage.getItem("readlist"));
        this.doclist.forEach(item => {
          this.navList.push(item.type);
          if (item.type === this.navList[this.listNum]) {
            this.list.push(item);
          }
        });
        this.navList = [...new Set(this.navList)];
      });
    },
    showIssue() {
      this.$refs.showboxs.showboxs();
    },
    listNavBall(item, index) {
      this.list = [];
      this.listNum = index;
      this.doclist.forEach(item => {
        if (item.type === this.navList[this.listNum]) {
          this.list.push(item);
        }
      });
    }
  },
  components: {
    bglogin,
    listBox,
    issue
  }
};
</script>
<style lang="scss" scoped>
.bg {
  width: 100%;
  height: calc(100% - 52px);
  & .content {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    & .bgTitle {
      display: flex;
      align-items: center;
      position: relative;
      & .issue {
        position: relative;
        top: 24px;
        display: flex;
        background: rgb(55, 167, 115);
        margin-left: 46px;
        height: 48px;
        padding: 0px 18px;
        & button {
          cursor: pointer;
          color: #fff;
          font-size: 18px;
        }
      }
      & ul {
        display: flex;
        margin-left: 6px;
        & li {
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 48px;
          // margin: 0 24px;
          padding: 0 24px;
          min-width: 66px;
          cursor: pointer;
        }
        & li.active {
          background: #ddd;
        }
      }
    }
  }
}
</style>

