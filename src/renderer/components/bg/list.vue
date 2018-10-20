<template>
  <div class="list">
    <ul>
      <li v-for="(item,index) in doclist" :key="index" v-if="index == listNum">
        <div class="lists" v-for="(ball,ballist) in item.childers">
          <p>{{ball.title}}<small>------ {{ball.date}}</small></p>
          <div>
            <button @click="delRead(item,ballist)">删除</button>
            <button @click="eidtRead(ball)">编辑</button>
          </div>
        </div>
      </li>
    </ul>
    <editpop ref="showpop"></editpop>
  </div>
</template>
<script>
import { doclist } from "@/assets/js/doclist.js";
import editpop from './editpop.vue'
export default {
  data() {
    return {
      doclist: doclist,
    };
  },
  props: {
    listNum: Number
  },
  mounted() {},
  methods: {
    //删除
    delRead(item,ballist){
      // console.log(item,ballist);
      console.log(doclist);
    },
    //编辑
    eidtRead(ball){
      this.$refs.showpop.showEditPopBll();
      this.showEditPop = !this.showEditPop;
    },
    toread(ball) {
      localStorage.setItem("itemRead", JSON.stringify(ball));
      console.log(ball);
    }
  },
  components:{
    editpop
  }
};
</script>
<style lang="scss" scoped>
.list {
  & ul {
    display: flex;
    flex-direction: column;
    margin-top: 22px;
    & li {
      display: flex;
      flex-direction: column;
      padding:0 168px;
      & div.lists {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 46px;
        width: 100%;
        border-bottom: 1px dashed #ddd;
        & p{
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          & small{
            font-size: 10;
            color: #999;
            margin-left: 20px;
          }
        }
        & button {
          height: 46px;
          line-height: 46px;
          padding:0px 12px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>

