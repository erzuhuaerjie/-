<template>
	<div class="home">
		<router-link :to="{path:'/'}">首页</router-link>
		<router-link :to="{path:'/course'}">课程</router-link>
		<router-link :to="{path:'/Onlinecourses'}">在线课程</router-link>
		<router-link :to="{path:'/Learn'}">学习之旅</router-link>
		<router-link :to="{path:'/Teachers'}">优质师资</router-link>
		<router-link :to="{path:'/News'}">优质师资</router-link>
		<router-link :to="{path:'/contact'}">联系我们</router-link>
    	<router-view/>
	</div>
</template>
<script>
	export default{
		
	}
</script>
<style scoped="scoped" lang="scss">
	
</style>