<template>
  <div class="bg">
    <div class="content">
      <bglogin v-show="isBgLogin"></bglogin>
      <div class="bgTitle">
        <ul>
          <li :class="listNum == index? 'active':''" v-for="(item,index) in doclist" :key="index" @click="listNavBall(item,index)">{{item.id}}</li>
        </ul>
      </div>
      <hr>
      <listBox :listNum='listNum'></listBox>
    </div>
  </div>
</template>
<script>
import bglogin from "./bg/bglogin.vue";
import listBox from "./bg/list.vue";
import { doclist } from "@/assets/js/doclist.js";
export default {
  data() {
    return {
      isBgLogin: true,
      title: null,
      doclist: doclist,
      listNum:0
    };
  },
  mounted() {
    //管理员登陆判断
    if (localStorage.getItem("bg") === "false") {
      this.isBgLogin = false;
    }
  },
  methods: {
    listNavBall(item,index){
      this.listNum = index;
      console.log(item);
      
    }
  },
  components: {
    bglogin,
    listBox
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
    & .bgTitle{
      & ul{
        display: flex;
        margin-left: 66px;
        & li{
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 48px;
          // margin: 0 24px;
          padding: 0 24px;
          min-width: 66px;
          cursor: pointer;
        }
        & li.active{
          background: #ddd;
        }
      }
    }
  }
}
</style>

