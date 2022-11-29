//标签模块
import { request } from '@/api/request.js'
class tagApi{
	// 获取文章
	async getTags() {
		const res = await request({
			method: 'get', // 请求方式
			url: '/api/tagList', // 请求url
		})
	
		return res
	};
	// 根据标签id查找文章
	async getArticleList(id) {
		const res = await request({
			method: 'get', // 请求方式
			url: `/api/tag/articles?id=${id}`, // 请求url
		})
	
		return res
	}
}
export default new tagApi()