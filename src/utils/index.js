import Cookie from 'js-cookie'
const tokenKey = 'token'

// 获取屏幕宽度
export function getWinWidth() {
  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
}

// 获取屏幕高度
export function getWinHeight() {
  return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
}

// 获取两个数之间随机整数
export function getBetweenRandom(min, max = 0) {
  let range = max
  let sub_num = 0
  if (min < 0 || min > 0) {
    range = max - min
    sub_num = min
  }
  return Math.floor(Math.random() * range) + 1 + sub_num;
}

// 获取token
export function getToken() {
  return Cookie.get(tokenKey)
}

// 设置token
export function setToken(token) {
  return Cookie.set(tokenKey, token)
}

// 时间戳处理
export function formatTime(time, option) {
  if (!time) return
  // 如果是日期格式，转换成时间戳
  if (isNaN(time)) {
    time = new Date(time).getTime()
  }

  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else {
    return Math.ceil(diff / 3600 / 24) + '天前'
  }
}

// 原生获取dom元素的某个样式值
export function getStyle(dom, attr) {
  if (window.document.currentStyle) {
    return dom.currentStyle[attr]
  } else {
    return getComputedStyle(dom, false)[attr]
  }
}