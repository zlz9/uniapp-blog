<template>
	<view>
		<view class="category">
			<uni-grid :column="3" :showBorder="false" :square="false">
				<view v-for="item in tagList" :key="item.id" @click="goArticleList(item.tagId)">
					<uni-grid-item>
						<view class="grid_item">
							<img :src="item.tagCover" alt="" class="cover">
							<text class="text">{{item.tagName}}</text>
						</view>

					</uni-grid-item>
				</view>
			</uni-grid>
		</view>
	</view>
</template>

<script>
	import tagApi from '@/api/tag.js'
	export default {
		data() {
			return { tagList: [] }
		},
		onLoad() {
			this.getTagList()

		},
		methods: {
			getTagList() {
				tagApi.getTags().then(res => {
					this.tagList = res.data
				})
			},
			goArticleList(id){
				uni.navigateTo({ url:'/pages/article_list/article_list?id='+id })
			}
		}
	}
</script>

<style lang="scss">
	.grid_item {
		margin: 20rpx;
		display: flex;
		flex-direction: column;
		align-items: center;

		.cover {
		 width: 100%;
			height: 180rpx;
		}

		.text {
			font-family: $font-family;
		}
	}
</style>
