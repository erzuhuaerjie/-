<template>
  <div class="footer">
    <div class="fbg">
      <img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/bg_footer.png" alt />
    </div>
    <div class="fbc">
      <div class="c1181">
        <div class="left">
          <img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/logo_wse_footer.png" alt />
        </div>
        <ul class="right">
          <li>
            <dl>
              <dt>企业</dt>
              <dd>关于华尔街英语</dd>
              <dd>公司新闻</dd>
              <dd>精彩活动</dd>
              <dd>华尔街英语在中国</dd>
              <dd>职业生涯</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>教学资源</dt>
              <dd>VIP课程</dd>
              <dd>豪华课程</dd>
              <dd>优选课程</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>企业客户</dt>
              <dd>为职业发展</dd>
              <dd>为旅行</dd>
              <dd>为自己的成长</dd>
              <dd>尊享服务</dd>
              <dd>为孩子</dd>
              <dd>学习之旅</dd>
              <dd>教学团队</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>课程</dt>
              <dd>为职业发展</dd>
              <dd>为旅行</dd>
              <dd>教学团队</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>服务支持</dt>
              <dd>联系我们</dd>
              <dd>常见问题解答</dd>
              <dd>学员通道</dd>
              <dd>免费体验</dd>
            </dl>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      msg: "Footer"
    };
  }
};
</script>

<style lang="scss" scoped>
.footer {
  .fbg {
    img {
      width: 100%;
      display: block;
    }
  }
  .fbc {
    width: 100%;
    height: 400px;
    background: #043458;
    .c1181 {
			box-sizing: border-box;
      color: #fff;
			display: flex;
			padding: 50px 100px 30px;
      .left {
        img {
					margin-right: 100px;
        }
      }
      .right {
        display: flex;
        li {
					margin-right: 50px;
					dl{
						dt{
							font-weight: bold;
							font-size: 20px;
							margin-bottom: 10px;
						}
						dd{
							font-size: 14px;
							margin-bottom: 6px;
						}
					}
        }
      }
    }
  }
}
</style>
