// 区分开发环境和生产环境
	var baseUrl
	// 	if (process.env.NODE_ENV === 'development') {
	// 	baseUrl = 'https://www.test.com'
	// 	} else {
	// 		baseUrl = 'https://www.baidu.com'
	// 	}
	import { useUserStore } from '@/stores/user.js'
	const userStore = useUserStore()
	baseUrl = 'https://blog.zhoulizheng.cn:6816'
	export function request(config) {
		// 请求时间	 超出时间抛出错误
		config.timeout = 20000
		//  
	
		config.header = {
			'content-type': 'application/json',
			'token':uni.getStorageSync('token')||''
		}
		config.url = baseUrl + config.url
		let promise = new Promise(function(resolve, reject) {
			uni.request(config).then(res => {
				
				if (res.data.code === 401) {
					uni.navigateTo({ url:'/pages/login/login' })
					uni.clearStorageSync()
					return uni.showToast({
						title: '验证失败，请重新登录',
						icon: 'none'
					})
					resolve(res.data)
				} else {
					let data = res.data // 如果返回的结果是data.data的，嫌麻烦可以用这个，return res,这样只返回一个data
					if (data.code === 200) {
						resolve(data)
					} else {
						resolve(data)
					}
					uni.hideLoading()
				}

			}).catch(error => {
				uni.hideLoading()
				reject(error)


			})
		})

		return promise
	}
