"use strict";var e=require("../../common/vendor.js"),t=require("../../api/index.js");require("../../api/request.js"),require("../../stores/user.js");const i={data:()=>({articleList:[]}),onLoad(){this.getArticleList(),e.index.showLoading({title:"加载中"})},methods:{getArticleList(){t.articleApi.getArticleList().then((t=>{200===t.code&&(this.articleList=t.data.data,e.index.hideLoading())}))},goArticleInfo(t){e.index.navigateTo({url:"/pages/article_info/article_info?id="+t})}}};if(!Array){(e.resolveComponent("uni-dateformat")+e.resolveComponent("uni-icons"))()}Math||((()=>"../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js")+(()=>"../../uni_modules/uni-icons/components/uni-icons/uni-icons.js"))();var a=e._export_sfc(i,[["render",function(t,i,a,o,r,n){return{a:e.f(r.articleList,((t,i,a)=>({a:e.t(t.title),b:"339a6f99-0-"+a,c:e.p({date:t.createTime,format:"yyyy/MM/dd"}),d:e.t(t.summary),e:e.f(t.tags,((t,i,a)=>({a:e.t(t.tagName),b:t.tagId}))),f:"339a6f99-1-"+a,g:e.t(t.viewCount),h:t.id,i:e.o((e=>n.goArticleInfo(t.id)),t.id)}))),b:e.p({type:"eye",size:"20"})}}]]);wx.createPage(a);
