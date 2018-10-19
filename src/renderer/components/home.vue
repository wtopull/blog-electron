<template>
  <div class="home">
    <head-nav>header</head-nav>
    <div class="content">
      <div class="left">
        <div class="leftBox">
          <p v-for="item in 100">{{item}}</p>
        </div>
      </div>
      <div class="right">
        <hr>
        <div class="rightleftBox">
          <p v-for="item in 100">{{item}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import headNav from "./public/headers.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    headNav
  }
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  & .content {
    display: flex;
    justify-content: space-between;
    width: calc(100% - 8px);
    height: calc(100% - 52px);
    margin-left: 8px;
    overflow: hidden;
    & .left {
      overflow-y: scroll;
      width: 292px;
      height:100%;
      & .leftBox{

      }
    }
    & .right {
      padding: 0px 24px;
      overflow-y: scroll;
      width: calc(100% - 300px);
      height:100%;
      & hr{
        margin-top: 20px;
      }
      & .rightleftBox{
        // margin: 0px 12px;
      }
    }
  }
}
</style>

