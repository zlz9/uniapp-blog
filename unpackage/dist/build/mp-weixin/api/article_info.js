"use strict";var e=require("./request.js");var r=new class{async getArticleInfo(r){return await e.request({method:"get",url:`/api/article/${r}`})}};exports.articleInfo=r;
