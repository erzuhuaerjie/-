<template>
  <div class="Onlinecourses">
    <div class="top">
      <div class="btn_now">立即免费体验</div>
    </div>
    <div class="scroll c1181">
      <ul
        class="floors"
        :style="{position:isfixed?'fixed':'absolute',left:isfixed?'0':'-84px'}"
        ref="floor"
      >
        <li :class="index==0?'active':''" @click="select(0)" >关于在线优选课程</li>
        <li :class="index==1?'active':''" @click="select(1)">在线优选课程体验</li>
        <li :class="index==2?'active':''" @click="select(2)">我们的教学方法</li>
        <li :class="index==3?'active':''" @click="select(3)">你的收获</li>
        <li :class="index==4?'active':''" @click="select(4)">开始学习之旅</li>
        <li :class="index==5?'active':''" @click="select(5)">马上报名</li>
      </ul>
      <div style="width:258px;flex:0 0 278px"></div>
      <div class="screen" ref="screen">
        <!-- 第一屏 -->
        <div class="page_1">
          <div class="title">Prime在线优选课程</div>
          <div
            class="dis"
          >华尔街英语基于“多元法”学习体系开发的在线英语课程，引入精彩纷呈的多媒体互动课，配备专业的外教师资和学习顾问进行巩固和应用，辅以内容丰富的华尔街英语频道，为尊贵的您提供优质的线上英语学习体验。</div>
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
        <!-- 第二屏 -->
        <div class="page_2">
          <div class="red_radius">
            <p class="title">在线优选课程体验</p>
            <div class="dis">行之有效的华尔街学习体系让英语学习更加灵活便捷让你随时随地锻炼英语。我们的在线学习环境和互动工具助你熟练掌握英语技能提升英语水平。</div>
          </div>
          <div class="right_radius"></div>
          <div class="author">
            <img
              src="https://wse.com.cn/_ui/responsive/theme-alpha/img/primecourse/8796463824926.png"
              alt
            />
          </div>
        </div>
        <!-- 第三屏 -->
        <div class="page_3">
          <div class="page_3_bg"></div>
          <div class="page_3_content">
            <p class="title">华尔街英语浸入式母语教学法</p>
            <div class="dis">
              拥有优质上课体验的同时，我们不断改良并实行了超过45年的成功学习模式，以小班课的形式将其运用于在线课堂。
              华尔街英语的“多元法®”教学为您提供高度专业的沉浸式英语环境，让您有机会借助高资质的英语母语外教学习英语。我们的首要目标是，全面提高您在社会、商务、学术等方面的英语流畅交流能力。
            </div>
          </div>
          <div class="page_3_item pos_1">
            <p class="title">在线外教小班课</p>
            <p class="dis">
              在电脑上学好3个课程后
              <br />来中心 参与平均4人的
              <br />资深英语外教小班课
              <br />
            </p>
          </div>
          <div class="page_3_item pos_2">
            <p class="title">听</p>
            <p class="dis">
              听，是语言学习的第一步
              <br />看视频，听录音，材料阅读。
              <br />
            </p>
          </div>
          <div class="page_3_item pos_3">
            <p class="title">发音</p>
            <p class="dis">
              开口发声吧！反复练习直到
              <br />发音标准，并在此过程中逐
              <br />步建立自信心。
              <br />
            </p>
          </div>
          <div class="page_3_item pos_4">
            <p class="title">读&写</p>
            <p class="dis">
              进行读写练习， 用填空
              <br />匹配、看图识字
              <br />作文等不同形式反复练习
              <br />
            </p>
          </div>
          <div class="page_3_item pos_5">
            <p class="title">小测试</p>
            <p class="dis">
              当你自信的掌握所学后
              <br />可以 参加小测试确认掌握程度
              <br />发现问题，答题解惑
              <br />
            </p>
          </div>
          <div class="page_3_item pos_6">
            <p class="title">对话</p>
            <p class="dis">
              系统会分配你一个剧中角色，
              <br />以此身份和剧中人物练习对话，
              <br />模拟实战
              <br />
            </p>
          </div>
          <div class="page_3_item pos_7">
            <p class="title">技巧练习</p>
            <p class="dis">
              接下来，你将在阅读、 听力、
              <br />小测试或其他互动练习中继续
              <br />磨练所学。
              <br />
            </p>
          </div>
        </div>
        <!-- 第四屏 -->
        <div class="page_4">
          <div class="border"></div>
          <div class="page_box">
            <p class="title">在华尔街英语的成长与收获</p>
            <ul class="page_item">
              <li>
                <img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/primecourse/collect_goods-img01.png" alt="">
                <p>自信流利的</p>
                <p>英语口语表达</p>
              </li>
              <li>
                <img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/primecourse/collect_goods-img02.png" alt="">
                <p>自信流利的</p>
                <p>英语口语表达</p>
              </li>
              <li>
                <img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/primecourse/collect_goods-img03.png" alt="">
                <p>自信流利的</p>
                <p>英语口语表达</p>
              </li>
              <li>
                <img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/primecourse/collect_goods-img04.png" alt="">
                <p>自信流利的</p>
                <p>英语口语表达</p>
              </li>
              <li>
                <img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/primecourse/collect_goods-img05.png" alt="">
                <p>自信流利的</p>
                <p>英语口语表达</p>
              </li>
              <li>
                <img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/primecourse/collect_goods-img06.png" alt="">
                <p>自信流利的</p>
                <p>英语口语表达</p>
              </li>
             
            </ul>
          </div>
        </div>
        <!-- 第五屏 -->
        <div class="page_5">

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
      floorSetTop: null, // 楼层元素距离顶部的距离
      index:0,
      scrollArr:[],
    };
  },
  // created()
  mounted() {
    this.handleIndex();
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
      // console.log(scrollTop);
      if (scrollTop > 628) {
        this.isfixed = true;
      } else {
        this.isfixed = false;
      };
      for(var i=0;i<this.scrollArr.length;i++){
        if(scrollTop>=this.scrollArr[i]&&scrollTop<this.scrollArr[i+1]){
          this.index=i;
        }
      }
    },
    handleIndex(scrollTop){
      var screen = this.$refs.screen.children;
      for(var i=0;i<screen.length;i++){
        this.scrollArr.push(screen[i].offsetTop + screen[i].offsetHeight);
        // console.log()
        
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
  .screen {
    flex: 0 0 1;
    & > div {
      padding: 20px 0;
    }
    // 第一屏
    .page_1 {
      .title {
        font-size: 40px;
        color: #043458;
        font-weight: bold;
      }
      .dis {
        font-size: 16px;
      }
      .subs {
        // margin-top:10px;
        display: flex;
        .subs_item {
          width: 33%;
          // text-align: center;
          .item_bg {
            width: 71px;
            height: 66px;
            transform: translateX(75%);
            margin: 30px 0;
            background: url(https://wse.com.cn/_ui/responsive/theme-alpha/img/sprites_img.png);
            background-position: -1111px -414px;
          }
          .item_title {
            color: #043458;
            font-size: 18px;
            font-weight: bold;
            margin: 10px 0;
          }
          .item_ul {
            list-style-type: disc;
            text-align: left;
            font-size: 16px;
            font-weight: bold;
            line-height: 30px;
          }
        }
      }
    }

    // 第二屏
    .page_2 {
      min-height: 625px;
      position: relative;
      .red_radius {
        width: 400px;
        height: 400px;
        background: #ee2d42;
        border-radius: 50%;
        color: #fff;
        overflow: hidden;
        position: absolute;
        left: 135px;
        right: 0;
        .title {
          margin-top: 90px;
          font-size: 24px;
          font-weight: bold;
          text-align: center;
        }
        .dis {
          width: 50%;
          font-size: 16px;
          // margin-left:50px;
          margin: 20px auto 0;
        }
      }
      .right_radius {
        width: 500px;
        height: 500px;
        border: 2px #ee2d42 solid;
        border-radius: 50%;
        position: absolute;
        right: -70px;
        top: 80px;
      }
      .author {
        width: 245px;
        height: 245px;
        border-radius: 50%;
        position: absolute;
        bottom: 0;
        left: 300px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    // 第三屏
    .page_3 {
      height: 900px;
      position: relative;
      .page_3_bg {
        width: 1349px;
        position: absolute;
        left: -363px;
        top: 0;
        height: 900px;
        background: url(https://wse.com.cn/_ui/responsive/theme-alpha/img/primecourse/language_process.png)
          no-repeat;
      }
      .page_3_content {
        margin-top: 50px;
        .title {
          font-size: 24px;
          color: #043458;
          font-weight: bold;
          text-align: center;
        }
        .dis {
          margin-top: 10px;
          font-size: 16px;
          line-height: 28px;
        }
      }
      .page_3_item {
        position: absolute;
        .title {
          font-size: 22px;
          color: #043458;
          font-weight: bold;
        }
        .dis {
          font-size: 16px;
        }
      }
      .pos_7 {
        /* right: 300px;
        bottom: 0; */
        right: 130px;
        bottom: 150px;
      }
      .pos_6 {
        /* left: 0;
        bottom: 0; */
        right: 285px;
        bottom: 0;
      }
      .pos_5 {
        left: 0;
        bottom: 0;
      }
      .pos_4 {
        left: -150px;
        bottom: 290px;
      }
      .pos_3 {
        right: 120px;
        bottom: 350px;
      }
      .pos_2 {
        right: 210px;
        bottom: 510px;
      }
      .pos_1 {
        left: -100px;
        bottom: 500px;
      }
      .pos_4,
      .pos_5 .title {
        text-align: center;
      }
    }
    // 第四屏
    .page_4 {
      height: 660px;
      position: relative;
      overflow: hidden;
      .border {
        width: 1500px;
        height: 1500px;
        border-radius: 50%;
        border: 3px #ee2d42 solid;
        position: absolute;
        z-index: 1;
      }
      .page_box {
        position: absolute;
        z-index: 9;
        width: 100%;
        .title {
          font-size: 28px;
          color: #043458;
          font-weight: bold;
          text-align: center;
        }
        .page_item{
          margin-top: 80px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          li{
            width: 33%;
            margin-bottom: 10px;
            img{
              margin: 0 auto 10px;
              width: 182px;
              height:182px;
              display: block;
            }
            p{
              text-align: center;
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}
</style>