<template>
	<view class="news">
		<view class="news_item" @click="navigate(item.id)" v-for="item in newsList" :key="item.id">
			<image :src="item.img_url" mode=""></image>
			<view class="right">
				<view class="tit">
					{{item.title}}
				</view>
				<view class="info">
					<text>发表时间：{{item.add_time | dateFormat}}</text>
					<text>浏览：{{item.click}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['newsList'],
		data() {
			return {

			}
		},
		//定义过滤器  （去全局定义）
		// filters: {
		// 	dateFormat(date) {
		// 		const newDate = new Date(date)
		// 		const year = newDate.getFullYear()
		// 		const month = newDate.getMonth().toString().padStart(2,0)
		// 		const day = newDate.getDay().toString().padStart(2,0)
		// 		return year + '-' + month + '-' + day
		// 	}
		// },
		methods: {
			navigate(id) {
				// 子组件监听点击事件，传id给 父组件
				this.$emit('itemClick', id)
			}
		}
	}
</script>

<style lang="scss">
	.news {
		.news_item {
			display: flex;
			padding: 10rpx 20rpx;
			border-bottom: 1px solid $shop-color;

			image {
				min-width: 200rpx;
				max-width: 200rpx;
				height: 150rpx;
			}

			.right {
				margin-left: 15rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.tit {
					font-size: 30rpx;
				}

				.info {
					font-size: 24rpx;

					text:nth-child(2) {
						margin-left: 30rpx;
					}
				}
			}
		}

	}
</style>
