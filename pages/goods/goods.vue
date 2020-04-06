<template>
	<view class="goods_list">
		<goods-list @goodsItemClick="goGoodsDetail" :goods="goods"></goods-list>
		<view class="isOver" v-if="flag">
			-----我是有底线的-----
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		data() {
			return {
				pageindex: 1,
				goods: [],
				flag: false
			}
		},
		onLoad() {
			this.getGoodsList()
		},
		methods: {
			async getGoodsList(callback) {
				const res = await this.$myRequest({
					url: '/api/getgoods?pageindex=' + this.pageindex
				})
				this.goods = [...this.goods,...res.data.message]
				// 有回调函数时才调用
				callback && callback()
			},
			
			// 点击跳转到商品详情页
			goGoodsDetail(id) {
				uni.navigateTo({
					url: '/pages/goods-detail/goods-detail?id=' + id
				})
			},
		},
		
		// 上拉刷新 (生命周期中)
		onPullDownRefresh() {
			this.pageindex = 1
			this.goods = []
			this.flag = false
			setTimeout(()=> {
				this.getGoodsList(()=> {
					uni.stopPullDownRefresh()     // 回调函数中 停止上拉刷新
				})
			}, 1000)
		},
		
		
		components: {
			goodsList
		}
	}
</script>

<style>
.goods_list {
	background: #eee;
}

.isOver {
	width: 100%;
	height: 50px;
	line-height: 50px;
	text-align: center;
	font-size: 28rpx;
	}
</style>
