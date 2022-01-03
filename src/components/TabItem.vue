<template>
  <div class="tab_container">
    <div class="title" v-for="(item, index) in item.items" :key="item.id">
      <div class="dot"></div>
      {{item.name}}   
    </div>    
  </div>
</template>
<script>
export default {
  name: 'TabItem',
  props: {
    item: {
      require :true,
      type: Object,
      default: {},
    }
  }    
}
</script>
<style lang="less" scoped>
  .tab_container {
    display: flex;
    flex-wrap: wrap;
    padding-left: 56px;
    box-sizing: border-box;
    width: 100%;
    .title {
      display: flex;
      align-items: center;
      width: 310px;
      height: 50px;
      .dot {
        width: 4px;
        height: 4px;
        background-color: red;
        margin-right: 8px;
      }
    }
  }
</style>