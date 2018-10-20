<template>
  <div class="home">
    <div class="content">
      <left></left>
      <right></right>
    </div>
  </div>
</template>
<script>
import left from "./public/left.vue";
import right from "./public/right.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    left,right
  }
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: calc(100% - 52px);
  & .content {
    display: flex;
    justify-content: space-between;
    width: calc(100% - 8px);
    height:100%;
    margin-left: 8px;
    overflow: hidden;
  }
}
</style>

