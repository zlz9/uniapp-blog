"use strict";var e=require("./request.js");var r=new class{async getCode(r){return await e.request({method:"get",url:"/api/captcha",data:r})}async login(r,a,t){return await e.request({method:"post",url:`/api/user/login?userName=${r}&password=${a}&code=${t}`})}};exports.loginApi=r;
