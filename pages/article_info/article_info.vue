<template>
	<view class="box">
		<view class="article">
			<!-- 用户模块 -->
			<view class="user">
				<img :src="articleInfo.userVo.avator" alt="" srcset="" class="avator">
				<view class="user_info">
					<view class="nickName">
						{{articleInfo.userVo.nickName}}
					</view>
					<view class="motto">
						{{articleInfo.userVo.motto}}
					</view>
				</view>
			</view>
			<!-- 文章详情模块 -->
			<view class="article_info">
				<view class="title">
					{{articleInfo.title}}
				</view>
				<view class="time">
					<uni-dateformat :date="articleInfo.createTime" format="yyyy/MM/dd"></uni-dateformat>
				</view>
				<view class="suammary">
					{{articleInfo.summary}}
				</view>
			</view>
			<view class="article_content">
				<rich-text :nodes="articleInfo.htmlBody"></rich-text>
			</view>
		</view>
	</view>
</template>

<script>
	import articleInfo from '@/api/article_info.js'
	export default {
		data() {
			return {
				articleInfo: {
					userVo: {
						avator: '',
						motto: '',
						nickName: '',
					}
				}
			}
		},
		onLoad(option) {
			let id = option.id
			this.getArticleInfo(id)
		},
		methods: {
			async getArticleInfo(id) {
				let res = await articleInfo.getArticleInfo(id)
				this.articleInfo = res.data,
					this.articleInfo.userVo = res.data.userVo
			}
		}
	}
</script>

<style lang="scss">
	.article {
		font-family: $font-family;
		background-color: $background;
		.user {
			display: flex;
			align-items: center;
			justify-content: space-around;
			margin: 10rpx;
			padding: 10rpx;
			.avator {
				    width: 200rpx;
				    height: 200rpx;
			}

			.user_info {
				width: 200px;
				.nickName {
					text-align: center;
				}

				.motto {
					text-indent: 2em;
				}
			}
		}

		.article_info {
			    display: flex;
			    flex-direction: column;
			    align-items: center;
			    margin: 50rpx;
			.title {
				font-size: 50rpx;
			}

			.time {
				font-size: $font-size-time;
			}

			.suammary {
				font-size: 30rpx;
			}
		}

		.article_content {
			text-indent: 2em;
		}
	}
</style>
