<template>
  <div class="header">
    <div class="c1181">
      <ul class="left">
        <li class="active">
          <a href="javascript:;">会员/学员</a>
        </li>
        <li>
          <a href="javascript:;">企业合作</a>
        </li>
        <li>
          <a href="javascript:;">职业生涯</a>
        </li>
        <li>
          <a href="javascript:;">渠道合作</a>
        </li>
      </ul>
      <ul class="right">
        <li>
          <img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/icon-search.png" alt />
          <a href="javascript:;">学习中心</a>
        </li>
        <li>
          <a href="javascript:;">关于华尔街英语</a>
        </li>
        <li class="active">
          <a href="javascript:;">新会员</a>
        </li>
        <li>
          <a href="javascript:;">会员登陆</a>
        </li>
        <li>
          <a href="javascript:;">学员通道</a>
        </li>
        <li>
          <a href="javascript:;">中 | EN</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      msg: "Header"
    };
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 40px;
  background: #f2f1f1;
  display: flex;
  align-items: center;
  font-size: 14px;
  .c1181 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul {
      display: flex;
      li {
        height: 40px;
        padding: 0 24px;
        line-height: 40px;
        display: flex;
        align-items: center;
        img {
          margin-right: 10px;
        }
      }
    }
    .right {
      font-size: 12px;
      font-weight: 600;
    }
    .left li.active {
      font-weight: bold;
      background: #fff;
    }
    .right li.active {
      background: #043458;
      a {
        color: #fff;
      }
    }
  }
}
</style>
