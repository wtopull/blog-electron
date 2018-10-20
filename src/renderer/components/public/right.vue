<template>
  <div class="right">
    <hr>
    <div class="rightleftBox">
      <p v-for="item in 100">{{item}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.right {
  padding: 0px 24px;
  overflow-y: scroll;
  width: calc(100% - 300px);
  height: 100%;
  & hr {
    margin-top: 20px;
  }
  & .rightleftBox {
    // margin: 0px 12px;
  }
}
</style>

