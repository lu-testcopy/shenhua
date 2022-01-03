<template>
  <div class="main_container">
    <div class="main_area">
      <!-- 头条区域 -->
      <div class="head_news">
        <div class="title">神华巴彦卓尔公司能源有限责任公司: 生产不停,质量不降</div>
        <!-- 文字介绍区域 -->
        <div class="text_introduce">
          <span>
            日前，记者在神华巴彦淖尔能源有限责任公司的生产现场看到，出焦生产线正开足马力进行生产。在岗员工实行轮流  倒班，24小时不间断生产，赶时间、抢进度，一天生产2300多吨焦炭。 新冠肺炎疫情发生后，该公司积极做好疫情  防控工作，加强办公区域通风、消杀工作，为职工配备防护用品，还通过张贴标语、播放新闻报道等方式，提高员工  的防疫意识，密切关注职工思想动态...
          </span>
        </div>
        <!-- 显示详情区域 -->
        <div class="detail">
          <span>显示详情...</span>
          <img src="../assets/img/3.jpg" alt="">
        </div>
        <div class="head_logo">
          头条新闻
        </div>
      </div>
       <!-- 公司要闻区域 -->
      <div class="company_important">
        <!-- 轮播图区域 -->
        <div class="carousel">
          <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="(item, index) in picList" :key="index">
               <img :src="item.url" alt="">
            </el-carousel-item>
          </el-carousel>
        </div>
        <!-- 新闻区域 -->
        <div class="news">
          <div class="title">
            <div class="bar"></div>
            <span class="text">公司要闻</span>
          </div>
          <!-- 新闻置顶区域 -->
          <div class="top_news">
            <div class="title"><span>中央全面深化改革委员会第十三次会议</span></div>
            <!-- 头条新闻详情 -->
            <div class="news_detail">&nbsp;&nbsp;&nbsp;中共中央总书记、国家主席、中央军委主席、中央全面深化改革委员会主任习近平4月27日下午主持召开中央全面深化改革委员会第十三次会议并发表重要讲话。他强调，我国疫情 防控和复工复产之所以能够有力推进，根本原因是党的领导和我国社会主义制度的优势发挥了无可比拟的重要作用。<span>… 【详情】</span></div>
          </div>
          <!-- 其余新闻区域 -->
          <div class="other_news">
            <div class="other_news_item" v-for="(item, index) in otherNewsList.data" :key="index">
              <div class="left">
                <div class="cricle"></div>
                <div class="title">{{item.title}}</div>
              </div>
              <div class="right">{{item.time}}</div>  
            </div>  
          </div>
        </div>
      </div>
      <!-- 新闻中心的logo -->
      <div class="new_center_logo">
        <div class="center_logo">
         <img src="../assets/img/5.jpg" alt="">
         <div class="text">新闻中心</div>
         <img src="../assets/img/4.jpg" alt="">
        </div>
      </div>
      <div class="frist_news">
        <new-box v-for="(item, index) in firstNewList.data" :key="item.id" :item="item"></new-box>
      </div>
      <!-- 第二个logo -->
      <div class="second_logo">
        <img src="../assets/img/middle.png" alt="">
      </div>
      <div class="middle_news">
        <new-box v-for="(item, index) in middleNews.data" :key="item.id" :item="item"></new-box>
      </div>
      <!-- 图说新闻放置轮播图区域 -->
      <div class="new_swiper">
        <!-- 在里面放一个轮播图组件 -->
        <swiper-container></swiper-container>
      </div>
      <!-- 下方的新闻区域 -->
      <div class="bottom_news">
        <new-box v-for="(item, index) in bottomNews.data" :key="index" :item="item"></new-box>
      </div>
    </div>    
  </div>
</template>
<script>
import { otherNewsList, firstNews, middleNews, bottomNews } from '../data/local'
import NewBox from '../components/NewBox.vue'
import SwiperContainer from '../components/SwiperContainer.vue'
export default {
  components: {
    NewBox,
    SwiperContainer
  },
   created() {
    this.otherNewsList = otherNewsList 
    this.firstNewList =  firstNews
    this.middleNews = middleNews
    this.bottomNews = bottomNews
  },
  data() {
    return {
      picList: [
        {url: require("../assets/img/s1.png")},
        {url: require("../assets/img/s2.png")},
        {url: require("../assets/img/s3.png")},
        {url: require("../assets/img/s4.png")},
        {url: require("../assets/img/s5.png")}
      ],
      otherNewsList: null,
      firstNewList: null,
      middleNews: null,
      bottomNews: null    
    }
  }, 
}
</script>
<style lang="less" scoped>
  .main_container {
    .main_area {
      width: 1794px;
      margin: auto;
      .head_news {
        position: relative;
        margin-top: 20px;
        width: 100%;
        height: 214px;
        background-color: #fbf9f7;
        overflow: hidden;
        .title {
          width: 100%;
          height: 100px;
          line-height: 100px;
          text-align: center;
          font-size: 30px;
          font-weight: 900;
          color: #3c0808;
        }
        .text_introduce {
          width: 100%;
          padding: 0 80px;
          line-height: 30px;
          box-sizing: border-box;
          font-size: 18px;
          font-weight: 600;
          color: #bcbbba;
        }
        .detail {
          display: flex;
          justify-content: end;
          padding: 0 34px;
          box-sizing: border-box;
          margin-top: 20px; 
          font-size: 18px;
          color: #bcbbba;
          img {
            position: relative;
            top: 3px;
            width: 18px;
            height: 18px;
            vertical-align: middle;
            margin-left: 10px;
          }
        }
        .head_logo {
          position: absolute;
          width: 150px;
          height: 40px;
          text-align: center;
          line-height: 40px;
          font-size: 18px;
          font-weight: 900;
          color: #ffffff;
          background-color: #b02b2a;
          top: 14px;
          left: 1680px;
          transform: rotate(40deg);
        }
      }

      .company_important {
        display: flex;
        margin-top: 20px;
        width: 100%;
        height: 500px;
        .carousel {
          width: 50%;
          /deep/ .el-carousel__container {
            height: 500px;
            img {
              width: 100%;
              height: 500px;
            }
          }
        }
        .news {
          width: 50%;
          .title {
            display: flex;
            width: 100%;
            height: 40px;
            line-height: 40px;
            .bar {
              position: relative;
              top: 14px;
              margin: 0 18px;
              width: 6px;
              height: 22px;
              border-radius: 5px;
              background-color: #b02b2a;
            }
            .text {
              font-size: 22px;
              font-weight: 900;
              color: #b02b2a;
            }
          }

          .top_news {
            width: 100%;
            height: 194px;
            background-color: #f7f7f7;
            .title {
              display: block;
              width: 100%;
              height: 68px;
              line-height: 68px;
              text-align: center;
              font-size: 22px;
              font-weight: 900;
              color: #b02b2a;
            }
            .news_detail {
              width: 100%;
              padding: 0 34px;
              box-sizing: border-box;
              line-height: 28px;
              span {
                color: red;
                cursor: pointer;
              }
            }
          }

          .other_news {
            margin-top: 15px;
            width: 100%;
            padding: 0 32px;
            box-sizing: border-box;
            height: calc(500px - 244px);
            color: #3f3f3f;
            font-size: 18px;
            .other_news_item {
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 100%;
              height: 60px;
              .left {
                display: flex;
                align-items: center;
                .cricle {
                  width: 6px;
                  height: 6px;
                  background-color: #b02b2a;
                  border-radius: 50%;
                  margin-right: 15px;
                }
              }
            }
          }
        }
      }

      .new_center_logo {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 90px;
        .center_logo {
          display: flex;
          align-items: center;
          height: 40px;
          font-size: 30px;
          color: #b02b2a;
          .text {
            padding: 0 20px;
          }
          img {
            width: 540px;
            height: 20px;
          }
        }
      }
      
      .frist_news {
        display: flex;
        justify-content: space-between;
      }

      .second_logo {
        width: 100%;
        height: 156px;
       margin-bottom: 20px;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .middle_news {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }

      .new_swiper {
        width: 100%;
        height: 318px;
      }

      .bottom_news {
        margin-top: 20px;
        width: 100%; 
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    }
  } 
</style>