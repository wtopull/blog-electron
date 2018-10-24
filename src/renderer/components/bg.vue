<template>
  <div class="bg">
    <div class="content">
      <bglogin v-show="isBgLogin"></bglogin>
      <div class="bgTitle">
        <div class="issue"><button @click="showIssue">文章发布</button></div>
        <ul>
          <li :class="listNum == index? 'active':''" v-for="(item,index) in doclist" :key="index" @click="listNavBall(item,index)">{{item.type}}</li>
        </ul>
      </div>
      <hr>
      <listBox :listNum='listNum'></listBox>
      <issue ref="showboxs"></issue>
    </div>
  </div>
</template>
<script>
import bglogin from "./bg/bglogin.vue";
import listBox from "./bg/list.vue";
import issue from "./bg/issue.vue";
// import {list} from  '@/assets/js/list'
export default {
  data() {
    return {
      isBgLogin: true,
      title: null,
      doclist: null,
      listNum: 0,
    };
  },
  mounted() {
    this.doc();
    // this.list();
    //管理员登陆判断
    if (localStorage.getItem("bgloginStatus") === "false") {
      this.isBgLogin = false;
    }
  },
  methods: {
    // list(){
    //   let listarr = [];
    //   list.forEach((item,k) => {
    //     if(! listarr[item.type]){
    //       listarr[item.type]=[];
    //     }
    //     listarr[item.type].push(item);
    //   });
    //   console.log("listarr:",listarr);
    // },
    doc(){
      this.$http.get("http://111.231.207.167:3000/list").then(res => {
        this.doclist = res.data.data;    
        // console.log(this.doclist);
      })
    },
    showIssue(){
      this.$refs.showboxs.showboxs();
    },
    listNavBall(item, index) {
      this.listNum = index;
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

