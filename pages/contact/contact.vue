<template>
	<view class="contact">
		<image class="img" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg" mode=""></image>
		<view class="info">
			<view @click="phone">联系电话：400-618-9090 ( 点击拨打 )</view>
			<view>通讯地址：江西省吉安市白鹭洲公园</view>
		</view>
		<map class="map" :longitude="longitude" :latitude="latitude" :scale="scale" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude: 114.999364,
				latitude: 27.122042,
				scale: 15,
				markers: [{
					longitude: 114.999364,
					latitude: 27.122042,
					iconPath: '../../static/logo.jpg',
					width: 30,
					height: 30
				}
				]
			}
		},
		methods: {
			phone() {
				uni.makePhoneCall({
					phoneNumber: '400-618-9090'
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact {
		.img {
			width: 750rpx;
			height: 320rpx;
		}

		.info {
			padding: 10rpx 20rpx;
			font-size: 30rpx;

			view {
				line-height: 80rpx;
				border-bottom: 1px solid #eee;
			}
		}
		.map  {
			width: 750rpx;
			height: 750rpx;
		}
	}
</style>
