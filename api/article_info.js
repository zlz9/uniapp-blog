//文章详情
import { request } from '@/api/request.js'
class articleInfo{
	// 获取文章
	async getArticleInfo(id) {
		const res = await request({
			method: 'get', // 请求方式
			url: `/api/article/${id}`, // 请求url
		})
		return res
	}
}
export default new articleInfo()