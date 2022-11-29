// 登录模块接口
import {request} from "@/api/request.js"
class loginApi{
	// 获取验证码
	async getCode(data) {
		const res = await request({
			method: "get", // 请求方式
			url: '/api/captcha', // 请求url
			data: data// 参数
		})
	
		return res
	}
	// 登录接口
	async login(userName,password,code) {
		const res = await request({
			method: "post", // 请求方式
			url: `/api/user/login?userName=${userName}&password=${password}&code=${code}`, // 请求url
		})
	
		return res
	}
}
export default new loginApi()