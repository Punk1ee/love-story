export function getWinWidth() {
  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
}

export function getWinHeight() {
  return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
}

export function getBetweenRandom(min, max = 0) {
  let range = max
  let sub_num = 0
  if (min < 0 || min > 0) {
    range = max - min
    sub_num = min
  }
  return Math.floor(Math.random() * range) + 1 + sub_num;
}