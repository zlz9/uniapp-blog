//标签模块
import { request } from '@/api/request.js'
class userApi{
	// 用户信息
	async getUserInfo() {
		const res = await request({
			method: 'get', // 请求方式
			url: '/api/user/info', // 请求url
		})
		return res
	};
	async logout() {
		const res = await request({
			method: 'post', // 请求方式
			url: '/api/user/logout', // 请求url
		})
		return res
	};
	
}
export default new userApi()