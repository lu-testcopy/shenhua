<template>
   <div class="swiper_container">
     <div class="top">
       <div class="title">图说新闻</div>
       <div class="line">
         <div class="active_line"></div>
       </div>
     </div>
     <div class="swiper_arear">
       <swiper :options="swiperOption" class="swiper">
         <swiper-slide>
           <img src="../assets/img/s1.png" alt="">
         </swiper-slide>
         <swiper-slide>
           <img src="../assets/img/s1.png" alt="">
         </swiper-slide>
         <swiper-slide>
           <img src="../assets/img/s1.png" alt="">
         </swiper-slide>
         <swiper-slide>
           <img src="../assets/img/s1.png" alt="">
         </swiper-slide>
         <swiper-slide>
           <img src="../assets/img/s1.png" alt="">
         </swiper-slide>
         <swiper-slide>
           <img src="../assets/img/s1.png" alt="">
         </swiper-slide>
         <div class="swiper-button-prev" slot="button-prev"></div>
         <div class="swiper-button-next" slot="button-next"></div>
       </swiper>  
      </div> 
   </div>
</template>

<script>
export default {
  name: 'SwiperContainer',
  data() {
    return {
      swiperOption: {
        slidesPerView: 5,
        // spaceBetween: 10,
        loop: true,
        autoplay: {
          delay: 15000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }   
    }
  },   
}
</script>
<style lang="less" scoped>
  .swiper_container {
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 6px #ccc;
    .top {
      width: 100%;
      height: 64px;
      line-height: 64px;
      padding: 0 16px;
      box-sizing: border-box;
      font-size: 20px;
      font-weight: 800;
      color: #b02b2a;
    }
    .line {
      position: relative;
      width: 100%;
      height: 2px;
      margin-top: 10px;
      padding: 0 15px;
      box-sizing: border-box;
      background-color: #ccc;
      .active_line {
        position: absolute;
        top: -5px;
        left: 6px;
        width: 70px;
        height: 6px;
        background-color: #b02b2a;
      }
    }
    .swiper_arear{
      margin-top: 40px;
      width: 100%;
      .swiper {
        width: 100%;
        // padding: 0 30px;
        box-sizing: border-box;
        .swiper-slide {
        // width: 320px !important;
          padding: 0 45px;
          box-sizing: border-box;
          img {
           width: 100%;
          }
        }
        .swiper-button-prev {
          width: 28px;
          height: 62px;
          background-color: #d2d2d2;
        }
        .swiper-button-next {
          width: 28px;
          height: 62px;
          background-color: #d2d2d2;
        }
      }
    }
    
  }
</style>