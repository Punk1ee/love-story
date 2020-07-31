<template>
  <div class="free-icons-wrap">
    <div v-for="row in row_count" :key="row" class="icon-row">
      <i v-for="(item, idx) in iconList" :key="idx" class="icon" :class="item.class" :style="{ 'left': item.left, 'bottom': item.bottom }"></i>
    </div>
  </div>
</template>

<script>
import { getWinWidth, getWinHeight, getBetweenRandom} from '@/utils'

export default {
  name: "FreeIcons",
  data() {
    return {
      win_w: 0,
      win_h: 0,
      iconList: [],
      row_count: 5,
      interval: null
    }
  },
  created() {
    this.initData()
    this.createIconList()
  },
  mounted() {
    this.intervalRiseIcon()
  },
  methods: {
    initData() {
      this.win_w = getWinWidth()
      this.win_h = getWinHeight()
    },
    getCount(num) {
      return Math.floor(num / 8)
    },
    getPositionLeft() {
      let random = getBetweenRandom(0, this.win_w)
      if (random < 20) {
        random = 20
      } else if ((this.win_w - random) < 100) {
        random = this.win_w - 80
      }
      return random + 'px'
    },
    createIconList() {
      const count = this.getCount(this.win_w)
      for (let i = 0; i < count; i++) {
        const idx = getBetweenRandom(0, 4)
        const bottom = getBetweenRandom(0, 64) + 'px'
        const left = this.getPositionLeft()
        this.iconList.push({
          left,
          bottom,
          class: 'icon_' + idx
        })
      }
    },
    intervalRiseIcon() {
      this.interval = setInterval(() => {
        this.iconList.map(icon => {
          let _bottom = parseInt(icon.bottom, 10)
          if (_bottom > this.win_h) {
            _bottom = -32
          }
          icon.bottom = _bottom + 32 + 'px'
        })
      }, 2000)
    }
  }
};
</script>

<style lang="less" scoped>
@keyframes swaying_1{
  0% {
    transform: rotateZ(-30deg);
  }
  50% {
    transform: rotateZ(30deg);
  }
  100% {
    transform: rotateZ(-30deg);
  }
}
@keyframes swaying_2{
  0% {
    transform: rotateZ(30deg);
  }
  50% {
    transform: rotateZ(-30deg);
  }
  100% {
    transform: rotateZ(30deg);
  }
}
.free-icons-wrap {
  position: absolute;
  width: 100%;
  height: 100%;
}
.icon {
  display: inline-block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 32px;
  height: 32px;
  transition: bottom 2s linear;
}
.icon_1 {
  background: url(~@/assets/icon_1.svg);
  animation: swaying_1 4s infinite linear;
  -webkit-animation: swaying_1 4s infinite linear;
  -moz-animation: swaying_1 4s infinite linear;
}
.icon_2 {
  background: url(~@/assets/icon_2.svg);
  animation: swaying_2 4s infinite linear;
  -webkit-animation: swaying_2 4s infinite linear;
  -moz-animation: swaying_2 4s infinite linear;
}
.icon_3 {
  background: url(~@/assets/icon_3.svg);
  animation: swaying_1 4s infinite linear;
  -webkit-animation: swaying_1 4s infinite linear;
  -moz-animation: swaying_1 4s infinite linear;
}
.icon_4 {
  background: url(~@/assets/icon_4.svg);
  animation: swaying_2 4s infinite linear;
  -webkit-animation: swaying_2 4s infinite linear;
  -moz-animation: swaying_2 4s infinite linear;
}
</style>