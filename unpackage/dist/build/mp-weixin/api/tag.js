"use strict";var t=require("./request.js");var e=new class{async getTags(){return await t.request({method:"get",url:"/api/tagList"})}async getArticleList(e){return await t.request({method:"get",url:`/api/tag/articles?id=${e}`})}};exports.tagApi=e;