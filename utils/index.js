// 防抖  n 秒后在执行该事件，若在 n 秒内被重复触发，则重新计时
function debounce(fn, wait = 500, isImmediate = false) {  
  let timerId = null  
  let flag = true  
  if (isImmediate) {  
    return function() {  
      clearTimeout(timerId)  
      if (flag) {  
        fn.apply(this, arguments)  
        flag = false  
      }  
      timerId = setTimeout(() => {  
        flag = true  
      }, wait)  
    }  
  }  
  return function() {  
    clearTimeout(timerId)  
    timerId = setTimeout(() => {  
      fn.apply(this, arguments)  
    }, wait)  
  }  
}
export default debounce()