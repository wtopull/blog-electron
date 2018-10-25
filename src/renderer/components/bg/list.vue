<template>
  <div class="list">
    <ul>
      <li v-for="(item,index) in listNum" :key="index">
        <div class="lists">
          <p>{{item.title}}<small>------ {{item.date}}</small></p>
          <div>
            <button @click="delRead(item,index)">删除</button>
            <button @click="eidtRead(item)">编辑</button>
          </div>
        </div>
      </li>
    </ul>
    <editpop ref="showpop"></editpop>
  </div>
</template>
<script>
import editpop from "./editpop.vue";
export default {
  data() {
    return {
      doclist: null,
    };
  },
  props:{
    listNum:Array
  },
  methods: {
    //删除
    delRead(item, index) {
      let requestParam = JSON.stringify({title: item.title});
      this.$http.post("http://127.0.0.1:3000/list", requestParam).then(res => {
        console.log(res);
        this.$parent.doc();
      });
    },
    //编辑
    eidtRead(ball) {
      this.$refs.showpop.showEditPopBll();
      this.showEditPop = !this.showEditPop;
    },
  },
  components: {
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
      padding: 0 168px;
      & div.lists {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 46px;
        width: 100%;
        border-bottom: 1px dashed #ddd;
        & p {
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          & small {
            font-size: 10;
            color: #999;
            margin-left: 20px;
          }
        }
        & button {
          height: 46px;
          line-height: 46px;
          padding: 0px 12px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>

