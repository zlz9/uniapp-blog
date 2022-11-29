// 首页模块
import { request } from '@/api/request.js'
class articleApi{
	// 获取文章
	async getArticleList() {
		const res = await request({
			method: 'get', // 请求方式
			url: '/api/article', // 请求url
		})
		return res
	}
	// 文章评论
	async comment() {
		const res = await request({
			method: 'get', // 请求方式
			url: '/api/article/comment', // 请求url
		})
		return res
	}
	//查询文章 
	async getArticleByTitle(query) {
		const res = await request({
			method: 'get', // 请求方式
			url: `/api/article?query=${query}`, // 请求url
		})
		return res
	}
}
export default new articleApi()