<template>
  <div class="nav">
    <div class="c1181">
      <img
        title="Wall Street English"
        alt="Wall Street English"
        src="https://wse.com.cn/medias/sys_master/images/images/h4b/h68/8796466446366/logo-wse.jpg"
      />
      <router-link :to="{path:'/'}">你选择华尔街英语是因为</router-link>
      <span>|</span>
      <router-link :to="{path:'/course'}">课程</router-link>
      <span>|</span>
      <router-link :to="{path:'/Onlinecourses'}">在线课程</router-link>
      <span>|</span>
      <router-link :to="{path:'/Learn'}">学习之旅</router-link>
      <span>|</span>
      <router-link :to="{path:'/Teachers'}">优质师资</router-link>
      <span>|</span>
      <router-link :to="{path:'/News'}">最新消息</router-link>
      <span>|</span>
      <router-link :to="{path:'/contact'}">联系我们</router-link>
    </div>
		<router-view />
  </div>
</template>
<script>
export default {};
</script>
<style scoped="scoped" lang="scss">
.nav {
  width: 100%;
  height: 70px;
  .c1181 {
    height: 70px;
    display: -webkit-box;
    align-items: center;
    a {
			display: block;
      font-size: 16px;
			font-weight: bold;
			padding: 0 10px;
    }
    img {
      width: 60px;
			height: 50px;
			margin-right: 20px;
    }
    span {
      margin: 0 10px;
    }
  }
}
.router-link-exact-active{
	color: red;
}
</style>