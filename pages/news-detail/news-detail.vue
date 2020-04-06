<template>
	<view class="news-detail">
		<text class="title">{{detail.title}}</text>
		<view class="info">
			<text>发表时间：{{detail.add_time | dateFormat}}</text>
			<text>浏览：{{detail.click}}</text>
		</view>
		<view class="content">
			<rich-text :nodes="detail.content"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 0,
				detail: {}
			}
		},
		onLoad(options) {
			// 获取传递过来的 id
			this.id = options.id
			this.getNewsDetail()
		},
		methods: {
			async getNewsDetail() {
				const res = await this.$myRequest({
					url: '/api/getnew/'+ this.id
				})
				this.detail = res.data.message[0]
				console.log(this.detail)
			}
		}
	}
</script>

<style lang="scss">
.news-detail {
	font-size: 30rpx;
	padding: 0 20rpx;
	.title {
		text-align: center;
		display: block;
		margin: 20rpx;
	}
	.info {
		display: flex;
		justify-content: space-between;
	}
}
</style>
