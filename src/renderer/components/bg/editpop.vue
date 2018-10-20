<template>
  <div class="editpop" v-show="showEditPop">
    <ul>
      <li><span>类别：</span><input type="text" value="Vue" disabled></li>
      <li><span>标题：</span><input type="text" value="Vue"></li>
      <li><span>副标题：</span><input type="text" value="Vue"></li>
      <li><span>编辑时间：</span><input type="text" value="Vue"></li>
      <li><span>内容：</span><input type="text" value="Vue"></li>
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
      showEditPop:false
    };
  },
  methods:{
    //编辑
    fileRead(){
      let fso = new FileReader();
      fso.readAsText('../../assets/js/abc.txt', "gb2312");
    },
    //取消
    showEditPopBlls(){
      this.showEditPop = false;
    },
    showEditPopBll(){
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
  border-radius: 3px;
  & ul {
    & li {
      display: flex;
      height: 42px;
      & span {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 88px;
      }
      & input{
        width: 578px;
        border-bottom: 1px solid #ddd;
      }
    }
  }
}
.editBall{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  margin-top: 32px;
  & button{
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


