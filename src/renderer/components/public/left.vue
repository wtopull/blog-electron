<template>
  <div class="left">
    <div class="leftBox">
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
.left {
  overflow-y: scroll;
  width: 292px;
  height: 100%;
  & .leftBox {
  }
}
</style>

