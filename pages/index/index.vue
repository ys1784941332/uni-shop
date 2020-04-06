<template>
	<view class="home">
		<swiper indicator-dots autoplay>
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.img"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item" v-for="item in navs" :Key="item" @click="navGo(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="tit">推荐商品</view>
			<goods-list @goodsItemClick="goGoodsDetail" :goods="goods"></goods-list>
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		data() {
			return {
				swipers: [{
						id: 0,
						img: '//gw.alicdn.com/imgextra/i3/13/O1CN01I4U9oK1Bxzk2aOSbV_!!13-0-lubanu.jpg'
					},
					{
						id: 1,
						img: 'https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg'
					},
					{
						id: 2,
						img: '//gw.alicdn.com/imgextra/i1/4/O1CN015RWo7M1BtsAyDAqVw_!!4-0-lubanu.jpg'
					},
				],
				goods: [],
				navs: [{
						icon: 'iconfont icon-ziyuan',
						title: '小白超市',
						path: '/pages/goods/goods'
					},
					{
						icon: 'iconfont icon-guanyuwomen',
						title: '联系我们',
						path: '/pages/contact/contact'
					},
					{
						icon: 'iconfont icon-tupian',
						title: '社区图片',
						path: '/pages/pics/pics'
					},
					{
						icon: 'iconfont icon-shipin',
						title: '学习视频',
						path: '/pages/videos/videos'
					},
				]
			}
		},
		onLoad() {
			// this.getSwiper()
			this.getHotGoods()
		},
		methods: {
			// 获取轮播图的数据
			// async getSwiper() {
			// 	const res = await this.$myRequest({
			// 		url: '/api/getlunbo',
			// 	})
			// 	this.swipers = res.data.message
			// },

			// 获取热门商品数据
			async getHotGoods() {
				const res = await this.$myRequest({
					url: '/api/getgoods?pageindex=1',
				})
				this.goods = res.data.message;
			},

			// 点击导航跳转
			navGo(url) {
				uni.navigateTo({
					url
				})
			},

			// 点击跳转到商品详情页
			goGoodsDetail(id) {
				uni.navigateTo({
					url: '/pages/goods-detail/goods-detail?id=' + id
				})
			}
		},
		components: {
			goodsList
		}
	}
</script>

<style lang="scss">
	// 轮播图数据
	swiper {
		width: 750rpx;
		height: 380rpx;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.nav {
		display: flex;

		.nav_item {
			flex: 1;
			text-align: center;

			view {
				width: 120rpx;
				height: 120rpx;
				line-height: 120rpx;
				background: #b50e03;
				border-radius: 60rpx;
				margin: 10rpx auto;
				font-size: 50rpx;
				color: #fff;
			}

			.icon-tupian {
				font-size: 45rpx;
			}

			text {
				font-size: 30rpx;
			}
		}
	}

	// 商品列表
	.hot_goods {
		background: #eee;
		overflow: hidden;
		margin-top: 10rpx;

		.tit {
			height: 100rpx;
			line-height: 100rpx;
			color: $shop-color;
			letter-spacing: 40rpx;
			text-align: center;
			background: #fff;
			margin: 7rpx 0;
		}

	}
</style>
