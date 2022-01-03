<template>
  <div class="detail_container">
    <div class="left" @mouseleave="leaveLeft">
      <div 
        class="titleItem" 
        v-for="(item, index) in companyTitle.data" 
        :key="item.index"
        @mouseover="overTitle(index)"
        :class="{activeTitle: titleIndex === index}">
        <i class="iconfont icon-xinwen_o" v-if="titleIndex === index ? true : false"></i>
        <span>{{item.name}}</span>
      </div>
    </div> 
    <div class="right">
      <div class="top_breadcrumb">
        <i class="iconfont icon-shouye"></i>
        <span>首页 /公司要闻/ 把握新形势贯彻新要求 开创新局面实现新突破---掀起学习贯彻党的十九届六中全会精神热潮</span>
      </div>
      <div class="content">
         <!--标题部分  -->
         <div class="title">
           把握新形势贯彻新要求 开创新局面实现新突破---掀起学习贯彻党的十九届六中全会精神热潮  
         </div>
         <!-- 信息部分 -->
         <div class="info">
           <div class="info_left">
             <span>发布单位: 党建工作部</span>   
             <span>神话巴彦卓尔能源有限责任公司</span>
           </div>
           <div class="info_right">
            <span>发布时间: 2021-11-25 10:40</span> 
            <span>游览量: 11699</span>
          </div>
         </div>
         <!-- 下面的新闻详细信息 -->
         <div class="news_detail">
           <div class="heard_text">
             &nbsp;&nbsp;&nbsp;&nbsp;重党的百年奋斗重大成就和历史经验中汲取智慧力量, 扎实推动巴彦卓尔公司迈上新征程建功新时代，全会提振了每个党员干事创业的信心和决心，我们将牢牢扭住巴彦卓尔公司工作总目标，聚焦岗位职责使命，坚持稳中求进工作总目标，准确把握新发展理念，积极融入新发展格局，积极融入新发展格局，积极推动高质量发展，以牛的'干劲' '韧劲' '闯劲'勇当先锋，走在前列，争做表率。
           </div>
           <img src="../assets/img/s3.png" alt="">
           <!-- 中间的文字 -->
           <div class="middle_text">
             &nbsp;&nbsp;&nbsp;&nbsp;11月18日，巴彦卓尔公司召开党委理论中心组学习(扩大)会，传达学习党的十九届六中全会精神，对公司各级党委组织学习宣贯工作进行安排部署。
           </div>
           <img src="../assets/img/s3.png" alt="">
           <!-- 底部文字 -->
           <div class="bottom_text">
             &nbsp;&nbsp;&nbsp;&nbsp;会上，学习《中国共产党第十九届中央委员会第六次全体会议公报》。会议认为，党的十九届六中全会是我们党百年华诞的重要时刻，在“两个一百年”奋斗目标历史交汇关键节点上召开的一次具有划时代，里程碑意义的重要会议，公司各级党组织要自觉把学习贯彻党的十九届六中全会作为当前党史学习教育和干部教育培训的重点，迅速在全公司掀起学习宣传贯彻落实全会精神热潮，推动全会精神进厂区，进车间，进班组。切实用全会精神武装头脑，指导实践，把力量凝聚到推动公司各项工作高质量发展的职责使命上来，为实现第二个百年奋斗目标贡献智慧和力量。
           </div>
           <div class="next_chapter">
             下一篇： 品牌的力量 | 党员“网格化”管理
           </div>
         </div>
      </div>
    </div>   
  </div>
</template>

<script>
import { companyTitle } from '../data/local'
export default {
  name: 'Detail',
  created() {
    this.companyTitle =  companyTitle  
  },
  data() {
    return {
      companyTitle: null,
      titleIndex: 0,    
    }
  }, 
  methods: {
    overTitle(index) {
      console.log(index);  
      this.titleIndex = index
    },
    leaveLeft() {
      this.titleIndex = 0
    }
  }, 
}
</script>

<style lang="less" scoped>
  .detail_container {
    display: flex;
    align-items: flex-start;
    width: 100%;
    padding: 30px 66px;
    box-sizing: border-box;

    .left {
      width: 276px;
      display: block;
      box-shadow:  2px 4px 8px #ccc;
      &:nth-child(1) {
        border-top: 1px solid #ececec;    
      }
      .titleItem  {
        position: relative;
        width: 100%;
        height: 86px;
        line-height: 86px;
        font-size: 20px;
        border-bottom: 1px solid #ececec;
        border-right: 1px solid #ececec;
        border-left: 1px solid #ececec;
        span {
         display: inline-block;
         position: absolute;
         left: 55px;
        }
        .iconfont {
          font-size: 27px;
          margin-left: 22px;
        }
      }
      .activeTitle {
        background-color: #b21f1f;
        color: #ffffff;
      }
      .titleItem:hover {
        cursor: pointer;
      }
    }

    .right {
      flex: 1;  
      margin-left: 10px;

      .top_breadcrumb {
        width: 100%;
        height: 46px;
        line-height: 46px;
        padding-left: 10px;
        box-sizing: border-box;
        background-color: #f5f5f5;
        .iconfont {
          margin-right: 10px;
        }
      }

      .content {
        width: 100%;
        padding: 0 64px 0 52px;
        box-sizing: border-box;
        .title {
          width: 100%;
          height: 90px;
          text-align: center;
          line-height: 90px;
          font-size: 18px;
          font-weight: 900;
        }
        .info {
          width: 100%;
          display: flex;
          justify-content: space-around;
          padding: 0 100px;
          box-sizing: border-box;
          width: 100%;
          height: 50px;
          line-height: 50px;
          .info_left,
          .info_right
          {
            display: flex;
            justify-content: space-around;
            width: 450px;
            height: 100%;
          }
        }

      }

      .news_detail {
        width: 100%;
        margin-top: 20px;
        font-size: 18px;
        font-weight: 800px;
        .heard_text {
          width: 100%;
          line-height: 32px;
        }
        img {
          position: relative;
          left: 50%;
          margin: 20px 0;
          transform: translateX(-348px);
          width: 696px;
          height: 370px;
        }
        .middle_text {
          width: 100%;
          line-height: 32px;
        }
        .bottom_text {
          width: 100%;
          line-height: 32px;
          margin-bottom: 60px;
        }
        .next_chapter {
          color: #000000;
        }
      }
    }
  }
</style>