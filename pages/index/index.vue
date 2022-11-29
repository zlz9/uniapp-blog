<template>
	<!-- 首页模块 -->
	<view class="content">
		<view class="notice">
			<!-- <uni-notice-bar scrollable="true" single="true" text="本项目仅提供基础演示,更多请访问www.zhoulizheng.cn"></uni-notice-bar> -->
		</view>
		<view v-for="item in articleList" :key="item.id" class="articles"  @click="goArticleInfo(item.id)">
			<!-- 标题 -->
			<view class="title">{{item.title}}</view>
			<!-- 时间 -->
			<view class="time">
				<uni-dateformat :date="item.createTime" format="yyyy/MM/dd"></uni-dateformat>
			</view>
			<!-- 摘要 -->
			<view class="suammary">
				{{item.summary}}
			</view>
			<view class="foot">
				<!-- 标签 -->
				<view v-for="tag in item.tags" :key="tag.tagId" class="tag">
					{{tag.tagName}}
				</view>
				<!-- 阅读数 -->
				<view class="view'" style="flex: 1;text-align: right;">
					<uni-icons type="eye" size="20"></uni-icons>{{item.viewCount}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import articleApi from '@/api/index.js'
	export default {
		data() {
			return { articleList: [] }
		},
		onLoad() {
			this.getArticleList()
			uni.showLoading({ title: '加载中' })
		},
	  	methods: {
			getArticleList() {
				articleApi.getArticleList().then(res => {
					if (res.code === 200) {
						 this.articleList = res.data.data
						 uni.hideLoading()
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
	.articles {
		width: 90%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 20rpx;
		background: antiquewhite;
		padding: 20rpx;
		font-family: $font-family;

		.title {
			font-size: 50rpx;

		}

		.time {
			font-size: $font-size-time;
		}
		.suammary {
			font-size: 30rpx;
		}
        .tag{
			font-size: $font-size-tag;
		}
		.foot {
			display: flex;
			width: 100%;
			justify-content: space-around;
          
		}
	}
</style>
