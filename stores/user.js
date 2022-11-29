// stores/counter.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
	state: () => {
		return { 
			token:''
		};
	},
	// 也可以这样定义
	// state: () => ({ count: 0 })
	actions: {
		setToken(value){
			this.token = value
		}
	},
	 persist: {
	    enabled: true,
	  },
});
