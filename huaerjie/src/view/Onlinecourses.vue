<template>
  <div class="Onlinecourses">
    <div class="top">
      <div class="btn_now">立即免费体验</div>
    </div>
    <div class="scroll c1181">
      <ul class="floors" :style="{position:isfixed?'fixed':'absolute',left:isfixed?'0':'-84px'}" ref="floor">
        <li class="active" @click="select(0)">关于在线优选课程</li>
        <li @click="select(1)">在线优选课程体验</li>
        <li @click="select(2)">我们的教学方法</li>
        <li @click="select(3)">你的收获</li>
        <li @click="select(4)">开始学习之旅</li>
        <li @click="select(5)">马上报名</li>
      </ul>
      <div style="width:258px;flex:0 0 278px"></div>
      <div class="screen">
        <div class="title">Prime在线优选课程</div>
        <div class="dis">华尔街英语基于“多元法”学习体系开发的在线英语课程，引入精彩纷呈的多媒体互动课，配备专业的外教师资和学习顾问进行巩固和应用，辅以内容丰富的华尔街英语频道，为尊贵的您提供优质的线上英语学习体验。</div>
        <div class="subs">
          <div class="subs_item">
            <div>
              <p class="item_bg"></p>
            <p class="item_title">灵活有效的在线英语课程</p>
            </div>
            
            <ul class="item_ul">
              <li>独特的“多元法®”学习体系</li>
              <li>内容多样的华尔街英语频道</li>
              <li>支持任意电子设备上课</li>
            </ul>
          </div>
          <div class="subs_item">
            <p class="item_bg" style="background-position: -578px -680px"></p>
            <p class="item_title">专业的外教师资和学习顾问</p>
            <ul class="item_ul">
              <li>配备优质的在线外教师资</li>
              <li>专属的学习顾问跟踪服务</li>
              <li>督促指导学员英语稳步提升</li>
            </ul>
          </div>
          <div class="subs_item">
            <p class="item_bg" style="background-position: -672px -680px"></p>
            <p class="item_title">丰富的线上练习和交友体验</p>
            <ul class="item_ul">
              <li>精彩纷呈的多媒体互动课练习</li>
              <li>通过网络与您的同学成为好友</li>
              <li>受邀参加中心的各种特色主题派对</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isfixed: false,
      floorSetTop:null, // 楼层元素距离顶部的距离
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.floorSetTop = this.$refs.floor.offsetTop;
  },
  methods: {
    select(i) {
      console.log(i);
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      console.log(scrollTop);
      if(scrollTop>628){
        this.isfixed = true;
      }else{
        this.isfixed = false
      }
      
    }
  }
};
</script>

<style scoped lang='scss'>
.top {
  width: 100%;
  height: 500px;
  background: url(https://wse.com.cn/_ui/responsive/theme-alpha/img/primecourse/prime-banner.jpg)
    top center no-repeat;
  position: relative;
  .btn_now {
    width: 264px;
    height: 53px;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 600;
    line-height: 53px;
    text-align: center;
    color: #fff;
    background: #da4148;
    position: absolute;
    bottom: 100px;
    right: 300px;
  }
  .btn_now:hover {
    cursor: pointer;
  }
}

.scroll {
  margin-top: 30px;
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  // overflow: hidden;
  .floors {
    // position: absolute;
    top: 0;
    // left: -80px;
    font-size: 16px;
    li {
      padding: 5px 0;
      transition: 3s;
      &.active {
        color: #da4148;
        // font-size: 18px;
      }
      &.active::before {
        display: inline-block;
        content: "";
        width: 80px;
        height: 2px;
        background: #da4148;
        vertical-align: middle;
        margin-right: 20px;
      }
    }
    li:before {
      display: inline-block;
      content: "";
      width: 80px;
      height: 2px;
      background: transparent;
      vertical-align: middle;
      margin-right: 20px;
    }
  }
  .screen{
    flex: 0 0 1;
    .title{
      font-size: 40px;
      color: #043458;
      font-weight: bold;
    }
    .dis{
      font-size: 16px;
    }
    .subs{
      // margin-top:10px;
      display: flex;
      .subs_item{
        width: 33%;
        // text-align: center;
        .item_bg{
          width:71px;
          height:66px;
          transform: translateX(75%);
          margin: 30px 0;
          background: url(https://wse.com.cn/_ui/responsive/theme-alpha/img/sprites_img.png);
          background-position: -1111px -414px;
        }
        .item_title{
          color: #043458;
          font-size: 18px;
          font-weight: bold;
          margin: 10px 0;
        }
        .item_ul{
          list-style-type: disc;
          text-align: left;
          font-size: 16px;
          font-weight: bold;
          line-height: 30px;
        }
      }
    }
  }
}
</style>