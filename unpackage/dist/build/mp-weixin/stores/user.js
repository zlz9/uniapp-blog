"use strict";const e=require("../common/vendor.js").defineStore("user",{state:()=>({token:""}),actions:{setToken(e){this.token=e}},persist:{enabled:!0}});exports.useUserStore=e;
