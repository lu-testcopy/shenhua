<template>
  <div class="new_item_container">
   <div v-if="newItem.imgUrl&&newItem.imgUrl !== ''" class="contain_img_item">
     <div class="top">
       <div class="title">{{newItem.title}}</div> 
       <div class="time">{{newItem.time}}</div>
     </div>
     <div class="bottom">
       <!-- 图片区域 -->
       <div class="cover">
          <img :src="newItem.imgUrl" alt="">
       </div>
       <!-- 介绍区域 -->
       <div class="introduce">
         <span>&nbsp;&nbsp;&nbsp;&nbsp;{{newItem.description}}</span>
       </div>
     </div>
   </div>   
   <div class="text_item" v-else>
     <div class="left">
       <div class="cricle"></div>
       <div class="title">{{newItem.title}}</div>
     </div>
     <div class="time">{{newItem.time}}</div>
   </div>
  </div>
</template>
<script>
export default {
  name: 'NewItem',
  props: {
    newItem: {
      require: true,
      type: Object
    }
  }   
}
</script>
<style lang="less" scoped>
  .new_item_container {
    .contain_img_item {
      width: 100%;
      // margin-bottom: 10px;
      .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 40px;
        padding: 0 10px;
        box-sizing: border-box;
      }

      .bottom {
        display: flex;
        padding: 0 10px;
        width: 100%;
        height: 120px;
        .cover {
          width: 180px;
          height: 120px;
          img {
            width: 100%;
            height: 100%;
          }
        }

        .introduce {
          flex: 1;
          display: flex;
          align-items: center;
          padding: 0 10px;
          box-sizing: border-box;
          color: #ababab;
        }
      }
    } 

    .text_item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      box-sizing: border-box;
      width: 100%;
      height: 50px;
      line-height: 50px;
      .left {
        display: flex;
        align-items: center;
        .cricle {
          width: 6px;
          height: 6px;
          background-color: red;
          border-radius: 50%;
          margin-right: 20px;
        }
        title {
          
        }
      }
    }
    
    .time {
      font-size: 14px;
      color: #ababab;
    }
    .title {
      font-size: 18px;
      font-weight: 800;
    }
    
  }
</style>