<template>
	<view>
		<view class="notice">
			<!-- <uni-notice-bar scrollable="true" single="true" text=""></uni-notice-bar> -->
		</view>
		<view class="login">
			<view class="box" style="display: flex;
    flex-direction: column;
    align-items: center;
}">

				<image :src="avatar" class="avatar"></image>

				<uni-forms ref="form" :modelValue="formData" :rules="rules">
					<uni-forms-item label="账号" name="name">
						<uni-easyinput type="text" v-model="formData.name" placeholder="请输入账号" />
					</uni-forms-item>
					<uni-forms-item label="密码" name="password">
						<uni-easyinput class="input" type="password" v-model="formData.password" placeholder="请输入密码" />
					</uni-forms-item>
					<uni-forms-item label="验证码" name="code" style="display:flex;align-items: center;">
						<uni-easyinput class="input" type="text" v-model="formData.code" placeholder="请输入验证码" />
						<span class="code" @click="getCaptcha">
							<img :src="captcha" alt="" srcset="" class="capcha">
						</span>
					</uni-forms-item>
				</uni-forms>
				<view class="btn">
					<button @click="submit" style="width: 200rpx;">登录</button>
					<button @click="reset" style="width: 200rpx;">重置</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import loginApi from '@/api/login.js'
	import { useUserStore } from '@/stores/user.js'
	const userStore = useUserStore()
	export default {
		data() {
			return {
				// 验证码
				captcha: 'https://blog.zhoulizheng.cn:6816/api/captcha?',
				// 图片资源
				avatar: 'http://qiniu.zhoulizheng.cn/43507260-9412-4a12-88f4-eddb2c3a858f.jpg',
				// 表单数据
				formData: {
					name: '',
					password: '',
					code: ''
				},
				rules: {
					// 对name字段进行必填验证
					name: {
						rules: [{
								required: true,
								errorMessage: '请输入姓名',
							},
							{
								minLength: 3,
								maxLength: 5,
								errorMessage: '姓名长度在 {minLength} 到 {maxLength} 个字符',
							}
						]
					},
					// 对验证码进行验证
					code: {
						rules: [{
							required: true,
							errorMessage: '请输入验证码',
						}]
					},
					// 对email字段进行必填验证
					password: {
						rules: [{
							required: true,
							errorMessage: '请输入密码',
						}]
					}
				}
			}
		},
		onLoad() {
			this.getCaptcha()
		},
		methods: {
			/**
			 * 复写 binddata 方法，如果只是为了校验，无复杂自定义操作，可忽略此方法
			 * @param {String} name 字段名称
			 * @param {String} value 表单域的值
			 */
			// binddata(name,value){
			// 通过 input 事件设置表单指定 name 的值
			//   this.$refs.form.setValue(name, value)
			// },
			// 触发提交表单
			submit() {
				this.$refs.form.validate().then(res => {
					// 整理参数
					let {
						name,
						password,
						code
					} = res
					// 登录
					loginApi.login(name, password, code).then(result => {
						console.log(result, 'result')
						// 存入pinia
						let token = result.data.token
						console.log(token, 'token')
						userStore.setToken(token)
						uni.setStorageSync('token', token)
						if (result.code === 200) {

							uni.reLaunch({ url: '/pages/index/index' })
							return uni.showToast({
								title: '登录成功！',
								icon: 'none'
							})
						}
						// 做持久化

					})
					console.log('表单数据信息：', res)
				}).catch(err => {
					console.log('表单错误信息：', err)
				})
			},
			// 获取验证码
			getCaptcha() {
				loginApi.getCode().then(res => {
					this.captcha = this.captcha + new Date()
				})
			},
			// 跳转注册页面
			register() {
				uni.navigateTo({ url: '/pages/register/register' })
			},
			//重置
			reset(){
				this.formData.code='',
				this.formData.name='',
				this.formData.password=''
			}
		}
	}
</script>

<style lang="scss">
	:deep(.uni-forms-item__content) {
		display: flex;
		align-items: center;
	}

	.avatar {
		border-radius: 50%;
		margin: 20rpx;
		width: 200rpx;
		height: 200rpx;
	}

	.login {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.code {
		.capcha{
			width: 180rpx;
			margin: 5rpx;
			height: 60rpx;
			text-align: center;
			line-height: 60rpx;
		}
		
	}

	.btn {
		width: 100%;
		display: flex;
	}
</style>
