<template>
	<div class="home">
		<!--轮播图-->
		 <swiper :options="swiperOption">
            <swiper-slide class="swiper-slide" v-for="(item,index) in bannerImgArr" :key="index" >
            	<img :src="item"/>
            </swiper-slide>
            <!-- 分页器 -->
            <div class="swiper-pagination"  slot="pagination"></div>   
             <!-- 左右箭头 --> 
            <div class="swiper-button-prev" slot="button-prev"></div> 
            <div class="swiper-button-next" slot="button-next"></div> 
        </swiper>
		<!--主要-->
		<div class="i-main">
			<div class="i-m-box">
				<div class="i-m-b-1">
					<h1>改变未来的力量</h1>
					<p class="imb1-p">在华尔街英语，我们相信每个人都拥有改变未来的力量。无论你的目标是什么，我们都会为你提供支持，给你实现梦想的力量。</p>
					<div class="imb-red imb1-red">
						<div>
							<p>
								<span></span> 了解更多
							</p>
						</div>
					</div>
				</div>
				<div class="i-m-b-2">
					<div>
						<img class="imb2-img" src="https://wse.com.cn/_ui/responsive/theme-alpha/img/images_content/T1/Desktop/T1_01.png" alt="">
						<div class="imb2-big">
							<div class="imb2-Btop">
								<h2>行之有效的方法</h2>
								<p>
									所有的课程都是基于有效的“多元法
									<sup>®</sup> ”学习体系，让你能够随时随地学习英语。无论你的工作或生活有多么繁忙，在这里，你都会找到适合你的课程。
								</p>
							</div>
							<div class="imb2-Bbottom">
								<!-- <div class="imb2bbTop"> -->
								<ul>
									<li class="imb2-li">
										<a href="#">VVIP课程</a>
									</li>
									<li>
										<a href="#">VIP课程</a>
									</li>
									<li>
										<a href="#">豪华课程</a>
									</li>
									<li>
										<a href="#">优选课程</a>
									</li>
								</ul>
								<!-- </div> -->
								<div class="imb2bbBottom">
									<div>

										<img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/images_content/T1/Desktop/CN_Desktop_VVIP.gif" alt="">
									</div>
									<p>量身定制高端VVIP教程，专属外教及学习顾问为您提供一对一上门教学服务</p>
								</div>
							</div>
						</div>
						<div class="imb-red imb2-red">
							<div>
								<p>
									<span></span> 了解更多
								</p>

							</div>
						</div>
					</div>
				</div>
				<div class="i-m-b-3">
					<div class="i-m-b-3-box">
						<div class="imb3-top">
							<h2>
								经验丰富的<br>教育团队
							</h2>
							<p>我们的英语母语外教和学习顾问个个经验丰富，拥有专业教学资质。他们很乐意在你的英语学习过程中全力提供帮助。</p>
						</div>
						<div class="imb3-bottom">
							<swiper ref="mySwiper" autoplay :options="swiperOptions2">
								<swiper-slide>
									<div class="imb3bs-tet">
										<h3>Karen  Burger  美国人</h3>
										<p>在华尔街英语，我把探索新文化和鼓励学生学习的热情相融合。很荣幸有这种与学生们交换生活体验、参与他们英语学习之旅的机会。</p>
										<div>
											<div>
												<span>很荣幸能参与学生们的英语学习之旅。</span>
											</div>
										</div>
									</div>
									<img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/images_content/T1/Desktop/T1_02a.png" alt="">
								</swiper-slide>
								<swiper-slide>
									<div class="imb3bs-tet">
										<h3>Stephan Buys  南非人</h3>
										<p>我是华尔街英语的一名外教。华尔街英语有着世界一流的教学团队和令人耳目一新的学习氛围，让我每一天的工作都非常享受。</p>
										<div>
											<div>
												<span>每一天的工作都非常享受。</span>
											</div>
										</div>
									</div>
									<img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/images_content/T1/Desktop/T1_02b.png" alt="">
								</swiper-slide>
								<swiper-slide>
									<div class="imb3bs-tet">
										<h3>David Jackson 美国人</h3>
										<p>我来自美国，有4年英语教学经验。华尔街英语独特的教学方法让学生有效学习。我喜欢在这里教学，因为我能帮学生们实现学习目标。</p>
										<div>
											<div>
												<span>我喜欢在这里教学，因为能帮学生实现学习目标。</span>
											</div>
										</div>
									</div>
									<img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/images_content/T1/Desktop/T1_02c.png" alt="">
								</swiper-slide>
							</swiper>
							<div class="swiper-button-prev"></div>
							<div class="swiper-button-next"></div>
						</div>
						<div class="imb-red imb3-red">
							<div>
								<p>
									<span></span> 来认识我们的教学团队
								</p>

							</div>
						</div>
					</div>
				</div>
				<div class="i-m-b-4">
					<div class="imb4-left">
						<h2>行之有效的<br>学习方法</h2>
						<p class="imb4l-P">
							使用华尔街英语独创的“多元法
							<sup>®</sup> ”，你可以像学习母语一样自然而然地学习英语。
						</p>
						<div class="imb-red imb4-red">
							<div>
								<p>
									<span></span> 了解更多
								</p>

							</div>
						</div>
					</div>
					<div class="imb4-right">
						<img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/images_content/T1/Desktop/T1_03.png" alt="">
					</div>
				</div>
			</div>
		</div>
		<!--团队-->
		<div class="team">
			<div class="border">
				<h2>经验丰富的<br>教学团队</h2>
				<p>我们的英语母语外教和学习顾问个个经验丰富，拥有专<br>
				业教学资质。他们很乐意在你的英语学习过程中全力提<br>
				供帮助。</p>
				<div class="bgRed">
					<h2>Stephan Buys南非人</h2>
					<p>
					我是华尔街英语的一名外教。华尔街英语有着世界<br>
					流的教学团队和令人耳目一新的学习氛围，让我<br>
					每天的工作都非常享受。
					</p>
					<img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/images_content/T1/Desktop/T1_02b.png" alt="" /><img src="" alt="" />
					<img class="textImg" src="../../static/bgRed.png"/>
					<div><p>来认识我们的</p><br><p>教学团队</p></div>
				</div>
			</div>
		</div>
		<!--学习-->
		<div class="learn">
			<div>
				<h2>行之有效的<br>学习方法</h2>
				<p>使用华尔街英语独创的"多元法⑧”，你可<br>
				以像学习母语-样自然而然地学习英语。
				</p>
				<span>了解更多</span>
			</div>
			<img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/images_content/T1/Desktop/T1_03.png"/>
		</div>
		<!--社区-->
		<div class="community">
			<div >
				<h2>成为我们<br>社区的一员</h2>
				<p>华尔街英语不仅是学习英语的地方，它更结伴寻<br>友、了解全球文化的地方。</p>
				<p>全球已经有超过200万人通过我们的帮助，提高了英<br>语交际能力。</p>
				<p>当你开启华尔街英语的学习之旅，你同时也打开了通<br>往新世界的大门。</p>
				<span>最近学习中心</span>
			</div>
			<img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/images_content/T1/Desktop/T1_04.png"/>
		</div>
		<!--课程-->
		<div class="course">
			<div class="border">
				<div>
					<h2>免费课程体验</h2>
					<p>试着体验-下在华尔街英语学 习的感觉。你可以试学我们功<br>能强大的多媒体课件，或上一堂一对一在线外教课。</p>
				</div>
				<h2>英语测试</h2>
				<p>为帮助你更快地达成学习目标，我们会精<br>确定位你的英语起始级别。现在来参加在<br>线测试，了解你的英语水平吧。</p>
				<img src="https://wse.com.cn/_ui/responsive/theme-alpha/img/images_content/T1/Desktop/T1_05.png"/>
				<span>联系我们</span>
				<span>了解更多</span>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				bannerImgArr:['https://wse.com.cn/medias/sys_master/images/images/hc7/h14/8816308289566/prime-banner-1-.jpg','https://wse.com.cn/medias/sys_master/images/images/h39/ha5/8810592108574/campaign-homepage-banner-1920x500.jpg',"https://wse.com.cn/medias/sys_master/images/images/h74/h81/8812939051038/banner-004.jpg","https://wse.com.cn/medias/sys_master/images/images/had/h84/8827848425502/Web-banner-1.jpg"],
				swiperOption: {
					//显示分页
					pagination: {
						el: '.swiper-pagination'
					},
					//设置点击箭头
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					},
					//开启循环模式
					loop: true
				}
			}
		},
		mounted() {
			var mySwiper = new Swiper('.swiper-container', {})
		}
	};
</script>
<style scoped="scoped" lang="scss">
	.home {
		min-height: 186px;
	}
	
	.swiper-container {
		width: 100%;
		height: 500px;
	}
	/*课程*/
	.course{
		width:1400px;
		height:1200px;
		margin:0 auto;
		overflow:hidden ;
		.border{
			border:2px solid #043458;
			height:1500px;
			width:1500px;
			border-radius: 50%;
			margin:100px 0 0 -275px;
			position: relative;
			>div{
				width:727px;
				height:727px;
				border-radius: 50%;
				background: #043458;
				color:#FFF;
				margin-top:-100px;
				margin-left:582px;
				overflow: hidden;
				h2{
					font-size:50px;
					color:#fff;
					margin-left:200px;
					margin-top:150px;
				}
				p{
					font-size:16px;
					margin:10px 0 10px 30px;
					margin-left:220px;
				}
			}
			h2{
				font-size:50px;
				margin-left:900px;
				margin-top:50px;
				height:100px;
			}
			p{
				font-size:16px;
				margin:10px 0 10px 30px;
				margin-left:1000px;
			}
			img{
				position: absolute;
				left:300px;
				top:300px;
			}
			span{
				position: absolute;
				right: 0;
			}
			>span:nth-child(5){
				display: inline-block;
				width:200px;
				height:200px;
				line-height:200px;
				text-align: center;
				border-radius: 50%;
				background: #EE2D42;
				color:#FFF;
				font-size:16px;
				top:500px;
				right:686px;
			}
			>span:nth-child(6){
				display: inline-block;
				width:150px;
				height:150px;
				line-height:150px;
				text-align: center;
				border-radius: 50%;
				background: #043458;
				color:#FFF;
				font-size:16px;
				top:900px;
				right:-50px;
			}
		}
	}
	/*社区*/
	.community{
		width:1400px;
		height:900px;
		margin:100px auto 0;
		position: relative;
		overflow: hidden;
		>div{
			border:2px solid #EE2D42;
			position: absolute;
			right:-100px;
			border-radius: 50%;
			width:800px;
			height:800px;
			padding:0 30px;
			h2{
				font-size:50px;
				color:#EE2D42;
				margin-left:200px;
				margin-top:150px;
			}
			p{
				font-size:16px;
				margin:10px 0 10px 30px;
				margin-left:220px;
			}
			span{
				display: inline-block;
				width:140px;
				height:140px;
				line-height:140px;
				text-align: center;
				border-radius: 50%;
				background: #EE2D42;
				color:#FFF;
				font-size:16px;
				margin-top:229px;
				margin-left:437px;
			}
		}
		>img{
			position: absolute;
			left:170px;
			top:140px;
		}
	}
	/*学习*/
	.learn{
		width:1400px;
		height:500px;
		margin:0 auto;
		display: flex;
		align-items: center;
		justify-content: space-around;
		>div{
			display: flex;
			flex-direction: column;
			h2{
				font-size:50px;
				color:#043458;
			}
			p{
				font-size:16px;
				margin:10px 0 10px 30px;
			}
			span{
				display: inline-block;
				width:140px;
				height:140px;
				line-height:140px;
				text-align: center;
				border-radius: 50%;
				background: #043458;
				color:#FFF;
				font-size:16px;
			}
		}
		img{
			margin-top:100px;
		}
	}
	/*团队*/
	.team{
		width:1500px;
		height:1330px;
		overflow: hidden;
		margin-left:100px;
		.border{
			width:1300px;
			height:1300px;
			border:2px solid red;
			border-radius: 50%;
			margin-left:-100px;
			>h2{
				color:red;
				font-size:50px;
				margin-left:380px;
				margin-top:100px;
			}
			>p{
				margin-left:480px;
				font-size:22px;
			}
			.bgRed{
				width:900px;
				height: 900px;
				border-radius: 50%;
				background: #EE2D42;
				margin-left:300px;
				text-align: center;
				color:#fff;
				padding-top:100px;
				position: relative;
				h2{
					font-size:40px;
				}
				>p{
					font-size:14px;
					margin-top:10px;
				}
				img:nth-child(3){
					position: absolute;
					right:-260px;
					top:0px;
				}
				.textImg{
					width:470px;
					height:200px;
					margin-top:100px;
				}
				>div{
					width:150px;
					height:150px;
					color:#fff;
					border-radius: 50%;
					background: #043458;
					display: flex;justify-content: center;
					align-content: center;
					flex-direction: column;
				}
			}
		}
	}
	/*主要*/
	
	.i-main {
		max-width: 1500px;
		height: 1200px;
		margin: 0 auto;
		overflow: hidden;
		.i-m-box {
			.i-m-b-1 {
				width: 1180px;
				margin: 0 auto;
				margin-top: 40px;
				h1 {
					font-size: 60px;
					line-height: 70px;
					width: 45%;
					margin-top: 25px;
					margin-bottom: 30px;
					margin-left: 60px;
					color: #ee2d42;
				}
				.imb1-p {
					width: 30%;
					font-size: 18px;
					margin-left: 108px;
					margin-bottom: 43px;
					line-height: 24px;
					color: #575757;
				}
				.imb1-red {
					margin-left: 100px;
					margin-top:-30px;
					p{
						height:100px;
						width:100px;
						border-radius: 50%;
						background: red;
						line-height:100px;
						text-align: center;
						color:#fff;
					}
				}
			}
			.i-m-b-2 {
				width: 1400px;
				height: 991px;
				position: relative;
				margin-top: -140px;
				margin-left:600px;
				.imb2-img {
					position: absolute;
					z-index: 1;
					right: 1240px;
					top: 337px;
				}
				.imb2-big {
					position: absolute;
					width: 991px;
					height: 991px;
					min-height: 0px;
					float: right;
					display: table;
					vertical-align: middle;
					margin-right: -72px;
					border-radius: 50%;
					background: #043458;
					.imb2-Btop {
						height: 483px;
						color: #fff;
						h2 {
							padding-left: 110px;
							padding-top: 180px;
							width: 90%;
							line-height: 70px;
							font-size: 60px;
							position: relative;
							font-weight: bold;
						}
						p {
							box-sizing: border-box;
							position: relative;
							font-size: 16px;
							line-height: 24px;
							padding-left: 170px;
							margin-top: 25px;
							width: 80%;
							max-width: 560px;
						}
					}
					.imb2-Bbottom {
						position: relative;
						font-size: 16px;
						line-height: 24px;
						width: 90%;
						padding-left: 160px;
						padding-right: 10px;
						ul {
							display: flex;
							border-bottom: 0;
							padding-bottom: 50px;
							margin-left: -20px;
							li {
								float: left;
								display: inline-block;
								padding-left: 5px;
								padding-right: 5px;
								position: relative;
								a {
									font-weight: bold;
									font-size: 16px;
									line-height: 24px;
									padding: 8px 25px;
									color: #fff;
								}
							}
							.imb2-li {
								a {
									color: #ee2d42;
								}
								a::after {
									content: '';
									border-style: solid;
									border-width: 6px;
									border-color: transparent;
									border-top-width: 0;
									border-bottom: 12px solid #ee2d42;
									width: 0;
									height: 0;
									font-size: 0;
									line-height: 0;
									position: absolute;
									top: 100%;
									left: 50%;
									margin-left: -6px;
									margin-top: 6px;
									display: none;
								}
							}
						}
						.imb2bbBottom {
							width: 741px;
							margin-top: 30px;
							div {
								width: 48%;
								float: left;
							}
							p {
								float: left;
								width: 30%;
								margin-top: 0px;
								text-align: left;
								color: #fff;
							}
						}
					}
				}
				.imb2-red {
					position: absolute;
					bottom: 58px;
					left: 589px;
					z-index: 1;
				}
			}
			.i-m-b-3 {
				width: 1410px;
				height: 1410px;
				border-radius: 50%;
				border: 2px solid #ee2d42;
				position: relative;
				top: 40px;
				margin-left: -200px;
				z-index: -1;
				.i-m-b-3-box {
					margin-left: 400px;
					margin-top: 88px;
					.imb3-top {
						margin-right: 300px;
						margin-left: 40px;
						height: 301px;
						h2 {
							margin-bottom: 25px;
							font-size: 60px;
							line-height: 70px;
							margin-left: 60px;
							color: #ee2d42;
							font-weight: bold;
						}
						p {
							margin-left: 130px;
							font-size: 16px;
							line-height: 24px;
							width: 60%;
							margin-bottom: 43px;
							color: #575757;
						}
					}
					.imb3-bottom {
						width: 900px;
						height: 900px;
						border-radius: 50%;
						background: #ee2d42;
						.swiper-container {
							top: -100px;
						}
						.swiper-container,
						.swiper-slide,
						.swiper-slide {
							width: 1080px;
							height: 825px;
							margin-top: -100px;
						}
						.swiper-slide {
							position: relative;
							.imb3bs-tet {
								color: #fff;
								width: 530px;
								height: 530px;
								position: absolute;
								top 270px left 200px h3 {
									font-size: 40px;
									line-height: 50px;
									font-weight: bold;
									margin-bottom: 20px;
								}
								p {
									font-size: 16px;
									line-height: 24px;
									margin-left: 70px;
									width: 50%;
									margin-bottom: 110px;
								}
								div {
									position: relative;
									padding-top: 20px;
									font-weight: bold;
									font-size: 30px;
									line-height: 36px;
									margin-bottom: 180px;
									span {
										position: relative;
										display: block;
										margin-left: 70px;
										margin-right: 100px;
									}
									span::before {
										display: block;
										position: absolute;
										content: '';
										/*background-image: url(../assets/mengze/sprites_img.png);*/
										background-position: -1521px -414px;
										width: 73px;
										height: 62px;
										left: -110px;
										top: -45px;
									}
									span::after {
										display: block;
										position: absolute;
										content: '';
										/*background-image: url(../assets/mengze/sprites_img.png);*/
										background-position: -1624px -414px;
										width: 73px;
										height: 62px;
										right: -100px;
										bottom: -55px;
									}
								}
							}
							img {
								width: 468px;
								height: 468px;
								position: absolute;
								top: 0px;
								right: 0px;
							}
						}
						.swiper-button-prev,
						.swiper-button-next {
							top: 59%;
							color: #fff;
						}
						.swiper-button-prev {
							left: 430px;
							width: 50px;
							height: 50px;
						}
						.swiper-button-next {
							top: 65%;
							right: 137px;
							width: 30px;
							height: 30px;
						}
					}
					.imb3-red::after,
					.imb3-red::before {
						border: 1px solid rgba(4, 52, 88, 0.15);
					}
					.imb3-red {
						position: relative;
						top: -164px;
						left: 39px;
						width: 143px;
						height: 143px;
						background: #043458;
						box-shadow: 0px 18px 25px 10px rgba(4, 52, 88, 0.58);
						div {
							p {
								height: 90px;
								width: 100px;
								text-align: center;
								span {
									/*display block background: url(../assets/mengze/sprites_img.png) no-repeat -1768px -323px;*/
									width: 46px;
									height: 34px;
								}
							}
						}
					}
				}
			}
			.i-m-b-4 {
				width: 1181px;
				height: 200px;
				background: #000000;
				margin: 150px auto;
				.imb4-left {
					position: relative;
					margin-bottom: 63px;
					float: left;
					width: 50%;
					h2 {
						color: #043458;
						font-size: 60px;
						line-height: 70px;
						margin-top: 0;
						margin-left: 110px;
						width: 75%;
						margin-bottom: 40px;
						font-weight: bold;
					}
					.imb4l-P {
						margin-left: 185px;
						width: 53%;
						margin-bottom: 32px;
						font-size: 16px;
						line-height: 24px;
						color: #575757;
					}
					.imb4-red::after,
					.imb4-red::before {
						border: 1px solid rgba(4, 52, 88, 0.15);
					}
					.imb4-red {
						position: relative;
						top: 0;
						left: 160px;
						width: 143px;
						height: 143px;
						background: #043458;
						box-shadow: 0px 18px 25px 10px rgba(4, 52, 88, 0.58);
					}
				}
			}
		}
	}
</style>