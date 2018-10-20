<template>
  <div class="headNav theme">
    <div class="topLeft" @click="backhome">Nathan</div>
    <div class="topCenter">待续......</div>
    <div class="topRight">
      <div class="buddha">
        <img src="@/assets/img/3.jpg" alt="">
      </div>
      <div class="nicname"><span>胖子叔叔</span><i class="iconfont icon-triangledownfill"></i></div>
      <div class="skin"><i class="iconfont icon-settings" @click="toBg"></i></div>
      <div class="BrowserClick"><i class="iconfont icon-move" @click="minimize"></i><i class="iconfont icon-close_light" @click="windowOpen"></i></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    toBg(){
      this.$router.push('/bg');
    },
    backhome(){
      this.$router.push('/home');
    },
    //确认关闭窗口
    windowOpen() {
      localStorage.clear();
      this.$electron.ipcRenderer.send("close");
    },
    //最小化
    minimize() {
      this.$electron.ipcRenderer.send("minimize");
    }
  }
};
</script>
<style lang="scss" scoped>
.headNav{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 52px;
  width: 100%;
  -webkit-app-region: drag;
  cursor: pointer;
}
.topLeft{
  display: flex;
  align-items: center;
  width: 300px;
  height: 100%;
  margin-left: 8px;
  cursor: pointer;
  -webkit-app-region: no-drag;
}
.topCenter{
  display: flex;
  align-items: center;
  width: calc(100% - 580px);
  height: 100%;
  cursor: pointer;
  -webkit-app-region: drag;
}
.topRight{
  display: flex;
  align-items: center;
  width: 280px;
  height: 100%;
  -webkit-app-region: no-drag;
  & .buddha{
    width: 42px;
    height: 42px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
    & img{
      width: 42px;
      height: 42px;
    }
  }
  & .nicname{
    font-size: 14px;
    color: rgb(225, 225, 226);
    cursor: pointer;
    & span{
      margin:0 8px;
    }
  }
  & .nicname:hover span,.nicname:hover i{
    color:#FFF;
  }
  & .skin{
    color: rgb(225, 225, 226);
    margin:0 20px;
    cursor: pointer;
    & i{
      font-size: 24px;
    }
  }
  & .skin:hover{
    color:#FFF;
  }
  & .BrowserClick{
    color: rgb(225, 225, 226);
    height: 100%;
    display: flex;
    align-items: center;
    & i{
      font-size: 24px;
      cursor: pointer;
      margin: 0px 8px;
    }
  }
  & .BrowserClick:hover{
    color: #FFF;
  }
}
</style>

