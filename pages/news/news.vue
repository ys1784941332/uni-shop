<template>
	<view>
		<news-item :newsList="newsList" @itemClick="goDetail"></news-item>
	</view>
</template>

<script>
	import newsItem from '../../components/news-item/news-item.vue'
	export default {
		data() {
			return {
				newsList: []
			}
		},
		onLoad() {
			this.getNews()
		},
		methods: {
			async getNews() {
				const res = await this.$myRequest({
					url: '/api/getnewslist'
				})
				this.newsList = res.data.message
			},

			goDetail(id) {
				uni.navigateTo({
					url: '/pages/news-detail/news-detail?id=' + id
				})
			}
		},
		components: {
			newsItem
		}
	}
</script>

<style lang="scss">

</style>
