<template>
  <div class="new_container">
    <div class="top_title">
      <div class="title">{{item.name}}</div>
    </div>   
    <div class="line">
      <div class="activeLine"></div>
    </div>
    <!-- 如果是一列一列新闻显示 -->
    <div v-if="item.type === 'text'" class="text_type">
      <new-item 
        v-for="(newItem, index) in item.newTitles"  
        :key="newItem.id" 
        :newItem="newItem">
      </new-item>
    </div>
    <!-- 如果是图片显示 -->
    <div v-if="item.type === 'img'" class="cover">
        <img :src="item.imgUrl" alt="">
    </div>
    <!-- 如果是视频显示 -->
    <div></div>
  </div>
</template>

<script>
import NewItem from './NewItem.vue'
export default {
  name: 'NewBox',
  props: {
    item: {
      require: true,
      type: Object
    }
  },
  components: {
    NewItem  
  }  
}
</script>

<style lang="less" scoped>
  .new_container {
    position: relative;
    width: 33%;
    padding: 0 24px;
    box-sizing: border-box;
    // background-color: pink;
    box-shadow: 0px 0px 6px #ccc;
    margin-bottom: 20px;
    .top_title {
      width: 100%;
      height: 60px;
      line-height: 60px;
      font-size: 20px;
      font-weight: 900;
      color: #b02b2a;
    }

    .line {
      position: relative;
      margin-top: 6px;
      width: 100%;
      height: 2px;
      background-color: #d8d6d7;
      .activeLine {
        position: absolute;
        top: -4px;
        left: 12px;
        width: 80px;
        height: 6px;
        background-color: #b02b2a;
      }
    }

    .text_type {
      
    }

    .cover {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 540px;
      height: 280px;
      background-color: pink;
      transform: translate(-50%, -40%);

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>