<template>
  <div class="top-container">
    <div class="left">欢迎访问国家能源集团 神华巴彦卓尔公司！</div>   
    <div class="right">
      <div class="time_info">
        <!-- 日期 -->
        <span>{{date}}</span>
        <span class="day" style="margin-left: 15px;">{{day}}</span>
      </div>
      <div class="weather">
        <span>当地天气: {{weartherInfo.nighttemp}}°C~{{weartherInfo.daytemp}}°C</span>
      </div>
      <div class="visitation">
        游览量: 203040
      </div>
    </div> 
  </div>
</template>
<script>
import axios from 'axios'
export default {
name: 'TopInfo',
 created() {
   this.getCityCode()  
 },
  data() {
    return {
      adcode: '',  //城市的编码，
      weartherInfo: {},
      nowDate: new Date()
    }
  },
  computed: {
    date() {
      let year = this.nowDate.getFullYear() + ''
      let month = this.nowDate.getMonth() + 1 + ''
      let date = this.nowDate.getDate() + ''
      return year + '-' + month + '-' + date
    },
    day() {
      let day = this.nowDate.getDay()
      // 对day进行判断
      var today
      switch(day) {
        case 0:
        today = "星期天";
        break;
        case 1:
        today = "星期一";
        break;
        case 2:
        today = "星期二";
         break;
        case 3:
        today ="星期三";
         break;
        case 4:
        today = "星期四";
         break;
        case 5:
        today = "星期五";
         break;
        case 6:
        today = "星期六";
      }
      return today
    }
  },
  methods: {
    // 获取城市天气信息
    getCityCode() {
      axios({
        method: 'get',
        url: 'https://restapi.amap.com/v3/ip?parameters',
        params: {
          key: '8531b8211603e40e20c679fce27618f0'
        }
      }).then(res => {
          this.adcode = res.data.adcode 
          return axios({
              type: 'get',
              url: 'https://restapi.amap.com/v3/weather/weatherInfo',
              params: {
                key: '8531b8211603e40e20c679fce27618f0',
                city: this.adcode,
                extensions: 'all'
              }
            })
        }).then(res => {this.weartherInfo = res.data.forecasts[0].casts[0]})
    },
  },
 }
</script>
<style lang="less" scoped>
  .top-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 34px;
    width: 100%;
    font-size: 16px;
    font-weight: 900;
    padding: 0 110px;
    box-sizing: border-box;
    background-color: #eeeeee;
    .right {
      display: flex;
      .weather {
        margin-left: 30px;
      }
      .visitation {
        margin-left: 60px;
      }
    }
  }
</style>