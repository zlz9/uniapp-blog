<template>
	<view>
		<view class="user">
			<!-- 用户页面 -->
			<img :src="user.avator" alt="" srcset="" class="avatar">
			<view class="box" style="    display: flex;
    justify-content: space-around;
    position: relative;
    margin: 20rpx;
    align-items: center;">
				<view class="user_info">
					<view class="nickName">
						{{user.nickName}}
					</view>
					<view class="age">
						{{user.age}}
					</view>
				</view>
				<view class="motto">
					motto:{{user.motto}}
				</view>
			</view>
			<view class="role">
				{{user.role}}
			</view>
		</view>
		<button @click="logout">退出登录</button>
	</view>
</template>

<script>
	import userApi from '@/api/user.js'
import login from '../../api/login'
	export default {
		data() {
			return { user: {} }
		},
		onLoad() {
			this.getUseDetails()
		},
		methods: {
			getUseDetails() {
				userApi.getUserInfo().then(res => {
					this.user = res.data
					console.log(this.user)
				})
			},
			logout(){
				userApi.logout().then(res=>{
					if (res.code ===200) {
						uni.showToast({ title:'用户退出' })
						// 清除token
						uni.clearStorageSync()
						setTimeout(()=>{
							uni.navigateTo({ url:'/pages/login/login' })
						},800)
					}
				})
			}
		},
		
	}
</script>

<style lang="scss">
	.user {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-family: $font-family;

		.avatar {
			border-radius: 50%;

		}

		.nickName {}

		.user_info {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 40%;
		}

		.age {}

		.motto {
			width: 40%;
		}

		.role {
			font-size: 45rpx;
			color: indianred;
		}
	}
</style>
