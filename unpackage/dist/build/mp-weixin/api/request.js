"use strict";var e=require("../common/vendor.js");require("../stores/user.js").useUserStore(),exports.request=function(n){return n.timeout=2e4,n.header={"content-type":"application/json",token:e.index.getStorageSync("token")||""},n.url="https://blog.zhoulizheng.cn:6816"+n.url,new Promise((function(t,o){e.index.request(n).then((n=>{if(401===n.data.code)return e.index.navigateTo({url:"/pages/login/login"}),e.index.clearStorageSync(),e.index.showToast({title:"验证失败，请重新登录",icon:"none"});{let o=n.data;o.code,t(o),e.index.hideLoading()}})).catch((n=>{e.index.hideLoading(),o(n)}))}))};
