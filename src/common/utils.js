/* 封装防抖函数*/
export function debounce(func, delayTime) {
  let timer = null
  return function() {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this)
    }, delayTime)
  }
}

export function formatDate(date,fmt){
  /* 格式化年份部分*/
  if(/(y+)/.test(fmt)){
    fmt = fmt.replace(RegExp.$1,(date.getFullYear()+'').substr(4-RegExp.$1.length))
  }
  /* 格式化其他日期部分*/
  let obj = {
    'M+':date.getMonth()+1,
    'd+':date.getDate(),
    'h+':date.getHours()+1,
    'm+':date.getMinutes()+1,
    's+':date.getSeconds()+1
  }
  for(let key in obj){
    let str = obj[key]+''
    let reg = new RegExp(`(${key})`)
    if(reg.test(fmt)){
      fmt = fmt.replace(RegExp.$1,RegExp.$1.length==1?str:addLeftZero(str))
    }
  }
  return fmt
}

function addLeftZero(str){
  return ('00'+str).substr(str.length)
}
