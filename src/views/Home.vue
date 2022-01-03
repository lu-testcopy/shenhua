<template>
  <div class="home_container" ref="homeRef">
    <top-info></top-info>
    <div class="search">
      <!-- 公司logo区域 -->
      <div class="log">
        <img src="../assets/img/1.jpg" alt="">
        <span>神华巴彦卓尔公司</span>
      </div>
      <!-- 搜索框 -->
      <el-input  placeholder="请输入内容">
        <template slot="append"><i class="el-icon-search"></i></template>
      </el-input>
    </div>
    <!-- 宣传图 -->
    <div class="advertising_map">
      <img src="../assets/img/2.png" alt="">
    </div>
    <!-- tabs选项栏 -->
    <div class="tabs" ref="tabsRef">
        <!-- 居中显示的tab栏 -->
      <div class="tabs_center">
        <div 
          class="tab_item"
          v-for="(item, index) in tabsList" 
          :key="item.id" 
          @mouseover="mouseOver(index)"
          @mouseleave="mouseLeave"
          @click="clickHome(index)"
        >
            <span>{{item.name}}</span>
            <div :class="{activeTab: index === tabIndex}"></div>
            <div class="active_title_box" v-if="(dropBoxShow && list[index].id === item.id&&index === tabIndex)">
              <div class="title_item" 
                v-for="(item1, index1) in list[index].title" 
                :key="item1.pid"
                @click="pushDetail(item1.pid)">
               {{item1.name}} 
              </div>
            </div>
        </div>
      </div>
    </div>
    <!-- roter-view区域 -->
    <router-view></router-view>
    <!-- 显示在下方的分割线 -->
    <div class="bottom_division_line"></div>
    <!-- <Main></Main> -->
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '../components/Footer.vue'
import Main from './Main.vue'
import TopInfo from '../components/TopInfo.vue'
export default {
  name: 'Home',
  data() {
    return {
      tabsList: [
        {
          id: '0',
          name: '首页'
        },
        {
          id: '1',
          name: '生产单位'
        },
        {
          id: '2',
          name: '职能部门'
        },
        {
          id: '3',
          name: '分中心'
        },
        {
          id: '4',
          name: '煤焦化公司'
        },
        {
          id: '5',
          name: 'OA系统'
        },
        {
          id: '6',
          name: '关于我们'
        }
      ],
      tabIndex: null,
      list: [
        {},
        {
          id: '1',
          title: [{pid: '0', name: '焦化厂'}, {pid: '1', name: '甲醇厂'}, {pid: '2', name: '水务厂'}, {pid: '3', name: '港务公司'}]
        },
        {
          id: '2',
          title: [{pid: '0', name: '党建工作部'}, {pid: '1', name: '纪委办公室'}, {pid: '2', name: '环保监察部'}, {pid: '3', name: '生产技术部'}, {pid: '4', name: '组织人事部'}, {pid: '5', name: '财务部'}, {pid: '6', name: '项目部门'}]
        },
        {
          id: '3',
          title: [{pid: '0', name: '质计分中心'}, {pid: '1', name: '物资采购与招投标中心'}, {pid: '2', name: '销售分中心'}, {pid: '3', name: '原料煤采购中心'}]
        },
        {},
        {},
        {}
      ],
      dropBoxShow: false,
      //轮播图的列表
    }
  },
  mounted() {
    this.$refs.homeRef.onscroll = (e) => {
      if(e.target.scrollTop > 658) {
        // 如果向上卷去的距离大于658px
        // 则头部导航栏要固定在最上方
        this.$refs.tabsRef.style.position = "fixed";
        this.$refs.tabsRef.style.top = 0
      } else {
        this.$refs.tabsRef.style.position = "relative"
      }
    }
  },
  components: {
   Footer,
   Main,
   TopInfo
  },
  methods: {
    mouseOver(index) {
      this.tabIndex = index
      this.dropBoxShow = true
    },
    mouseLeave() {
      this.dropBoxShow = false
    },
    clickHome(index) {
      if(index === 0) {
        this.$router.push('/home')
      } else {
        return 
      }
    },
    pushDetail(id) {
      console.log(22);
      console.log(id);
      this.$router.push(`/detail/${id}`)
    }
  },
}
</script>
<style lang="less" scoped>
  .home_container {
    width: 1920px;
    height: 100%;
    overflow-y: scroll;
    .company_hearder {
      width: 100%;
      height: 34px;
      background-color: #eeeeee;
    }

    .search {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 144px;
      box-sizing: border-box;
      width: 100%;
      height: 160px;
      .log {
        img {
         vertical-align: middle;
         margin-right: 18px;
        }
        span {
          font-size: 24px;
          font-weight: 700;
        }
      }
      .el-input {
        width: 304px;
        height: 34px;
        /deep/ .el-input__inner {
          width: 250px;
          border: 1px solid #b02b2a;
        }
        /deep/.el-input-group__append {
          background-color: #b02b2a;
          border: 1px solid #b02b2a;
        }
      }
    }

    .advertising_map {
      width: 100%;
      height: 460px;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .tabs {
      padding: 0 180px;
      width: 100%;
      height: 64px;
      background-color: #b02b2a;
      box-sizing: border-box;
      z-index: 999;
      .tabs_center {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        .tab_item {
          position: relative;
          height: 100%;
          line-height: 64px;
          font-size: 20px;
          color: #eeeeee;
          .activeTab {
            position: absolute;
            bottom: 12px;
            width: 100%;
            height: 2px;
            background-color: #eeeeee;
          }
          .active_title_box {
            position: absolute;
            top: 56px;
            width: 200px;
            z-index: 999;
            .title_item {
              width: 100%;
              height: 40px;
              line-height: 40px;
              text-align: center;
              font-size: 18px;
              background-color: #b02b2a;
            }
            .title_item:hover {
              background-color: pink;
            }
          }
        }
        
        .tab_item:hover {
          cursor: pointer;
        }
      }
    }

    

    .bottom_division_line {
      width: 100%;
      height: 4px;
      background-color: #b02b2a;
    }
  }
</style>
