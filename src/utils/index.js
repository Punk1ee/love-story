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
  return sessionStorage.getItem(tokenKey)
}

// 设置token
export function setToken(token) {
  return sessionStorage.setItem(tokenKey, token)
}

// 时间戳处理
export function formatTime(time) {
  if (!time) return
  // 如果是日期格式，转换成时间戳
  if (isNaN(time)) {
    // 解决ios浏览器不能将2020-08-07转换的bug，需要先将-转换成/
    time = time.replace(/-/g, '/')
    time = new Date(time).getTime()
  }

  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  }

  const now = Date.now()
  const diff = (now - time) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
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