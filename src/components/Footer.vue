<template>
  <div class="footer_container">
    <div class="top">
      <!-- 二维码区域 -->
      <div class="qr_code">
         <img src="../assets/img/code.jpg" alt="">
         微信公众号
       </div>
       <!-- 正文区域 -->
       <div class="content">
          <!-- 正文上方的标题区域 -->
          <div class="titles">
            <div 
              class="titleItem" v-for="(item, index) in footerList.data" 
              :key="item.id"
              @click="seclectTitle(index)"
              :class="{active: index === selectTabIndex}"
            >
              {{item.name}}
              <div class="active_line" v-if="index === selectTabIndex ? true : false"></div>
            </div>
          </div>
          <!-- 下方的正文部分 -->
          <tab-item :item="titleProps"></tab-item>
       </div>
    </div>  
    <!-- 下半部分 -->
    <div class="bottom">
      <div class="line"></div>
      <div class="top_info">
        <div>联系我们</div>
        <div class="middle">网站地址</div>
        <div>网站声明</div>
      </div>
      <div class="bottom_info">
        <div>国家能源投资集团有限责任公司(神话巴彦卓尔公司)</div>
        <div>内容管理: 新闻传媒公司</div>
        <div>技术管理： 信息化部</div>
        <div>京公网安备110401300070号</div>
        <div>京ICP备10032362号</div>
      </div>
    </div>
  </div>
</template>
<script>
import { footerList } from '../data/local'
import TabItem from '../components/TabItem.vue'
export default {
  name: 'Footer',
  created() {
    this.footerList = footerList  
    this.titleProps = footerList.data[0]
  },
  components: {
    TabItem  
  },
  data() {
    return {
      footerList: null,
      selectTabIndex: 0,
      titleProps: null,  
    }
  },
  methods: {
    seclectTitle(index) {
      this.selectTabIndex = index  
      this.titleProps = footerList.data[index]
    }
  },
}
</script>

<style lang="less" scoped>
  .footer_container {
    width: 100%;
    height: 500px;
    .top {
      display: flex;
      width: 100%;
      height: 340px;
      padding: 30px 0;
      box-sizing: border-box;
      .qr_code {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 350px;
        height: 100%;
        border-right: 2px solid #ccc;
        img {
          width: 180px;
          height: 170px;
          margin: 40px 0;
        }
      }
      .content {
        flex: 1;
        height: 100%;
        padding: 20px;
        box-sizing: border-box;
        .titles {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          height: 40px;
          padding-left: 70px;
          box-sizing: border-box;
          .titleItem {
            position: relative;
            margin-right: 90px;
            cursor: pointer;
            .active_line {
              position: absolute;
              top: 26px;
              width: 100%;
              height: 4px;
              background-color: #b02b2a;
            }
          }
        }
        .active {
          color: #b02b2a;
        }
      }
    }

    .bottom {
      width: 100%;
      height: 160px;
      padding: 0 190px;
      box-sizing: border-box;
      .line {
        width: 100%;
        height: 2px;
        background-color: #ccc;
      }
      .top_info {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50%;
        div {
          width: 100px;
          height: 20px;
          line-height: 20px;
          text-align: center;
        }
        .middle {
          border-left: 2px solid #ccc;
          border-right: 2px solid #ccc;
        }
      }

      .bottom_info {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 50%;
        div {
          height: 80px;
          line-height: 80px;
        }
      }
    }

    
  }
</style>