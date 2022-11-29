<template>
	<view>
		<view v-for="item in articleList" :key="item.id">
			<view class="box" @click="goArticleInfo(item.id)">
				<view class="title">
					{{item.title}}
				</view>
				<view class="time">
					<uni-dateformat :date="item.createTime" format="yyyy/MM/dd"></uni-dateformat>
				</view>
				<view class="summary">
					{{item.summary}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import tagApi from '@/api/tag.js'
	export default {
		data() {
			return { articleList: [] }
		},
		onLoad(option) {
			let id = option.id
			this.getArticleLsit(id)
		},
		methods: {
			getArticleLsit(id) {
				tagApi.getArticleList(id).then(res => {
					this.articleList = res.data
					if(this.articleList.length===0){
						uni.showToast({
							title: '暂无文章',
							icon: 'none'
						})
					}
				})
			},
			goArticleInfo(id){
				uni.navigateTo({ url:'/pages/article_info/article_info?id='+id })
			}
		}
	}
</script>

<style lang="scss">
	.box {
		font-family: $font-family;
		display: flex;
		flex-direction: column;
		align-items: center;
    margin: 30rpx;
		padding: 10rpx;
		background-color: antiquewhite;	
		.title {
			font-size: 40rpx;

		}

		.time {}

		.summary {}
	}
</style>
