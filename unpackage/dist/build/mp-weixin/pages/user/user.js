"use strict";var e=require("../../common/vendor.js"),t=require("../../api/user.js");require("../../api/request.js"),require("../../stores/user.js");const r={data:()=>({user:{}}),onLoad(){this.getUseDetails()},methods:{getUseDetails(){t.userApi.getUserInfo().then((e=>{this.user=e.data,console.log(this.user)}))},logout(){t.userApi.logout().then((t=>{200===t.code&&(e.index.showToast({title:"用户退出"}),e.index.clearStorageSync(),setTimeout((()=>{e.index.navigateTo({url:"/pages/login/login"})}),800))}))}}};var s=e._export_sfc(r,[["render",function(t,r,s,o,u,a){return{a:u.user.avator,b:e.t(u.user.nickName),c:e.t(u.user.age),d:e.t(u.user.motto),e:e.t(u.user.role),f:e.o(((...e)=>a.logout&&a.logout(...e)))}}]]);wx.createPage(s);
