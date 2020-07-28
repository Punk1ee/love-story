<template>
  <div class="wrap" :longtap="playMusic">
    <div class="cube">
      <div v-for="(img, key) in cptInfos.source" :key="key" :class="classList(key)">
        <img :src="img" :class="[ `${key}_img` ]" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Album',
  props: {
    cptInfos: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      isScale: false,
      interval: null
    }
  },
  computed: {
    classList(key) {
      let classList = []
      return function(key) {
        if (key.includes('out') && this.isScale) {
          classList = [key, key + '_scale']
        } else {
          classList = [key]
        }
        return classList
      }
    }
  },
  mounted() {
    this.autoScale()
  },
  destroyed() {
    clearInterval(this.interval)
  },
  methods: {
    autoScale() {
      const vm = this
      this.interval = setInterval(() => {
        vm.isScale = !vm.isScale
      }, 3000)
    },
    playMusic() {
      this.$refs.audio.play()
    }
  }
}
</script>

<style scoped>
/*最外层容器样式*/
.wrap {
  position: relative;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 200px;
  height: 200px;
  margin: auto;
  z-index: 9999;
  /*改变左右上下,图片方块移动*/
}
/*包裹所有容器样式*/
.cube {
  width: 200px;
  height: 200px;
  margin: 0 auto;
  transform-style: preserve-3d;
  transform: rotateX(-30deg) rotateY(-80deg);
  -webkit-animation: rotate 20s infinite;
  /*匀速*/
  animation-timing-function: linear;
}
@-webkit-keyframes rotate {
  from {
    transform: rotateX(0deg) rotateY(0deg);
  }
  to {
    transform: rotateX(360deg) rotateY(360deg);
  }
}

.cube div[class*='out'] {
  position: absolute;
  width: 200px;
  height: 200px;
  opacity: 0.8;
  transition: all 0.4s;
}
/*定义所有图片样式*/
img[class*='out'] {
  width: 200px;
  height: 200px;
}
.cube .out_front {
  transform: rotateY(0deg) translateZ(100px);
}
.cube .out_back {
  transform: translateZ(-100px) rotateY(180deg);
}
.cube .out_left {
  transform: rotateY(90deg) translateZ(100px);
}
.cube .out_right {
  transform: rotateY(-90deg) translateZ(100px);
}
.cube .out_top {
  transform: rotateX(90deg) translateZ(100px);
}
.cube .out_bottom {
  transform: rotateX(-90deg) translateZ(100px);
}
/*定义小正方体样式*/
.cube div[class*='in'] {
  display: block;
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50px;
  left: 50px;
}
img[class*='in'] {
  width: 100px;
  height: 100px;
}
.cube .in_front {
  transform: rotateY(0deg) translateZ(50px);
}
.cube .in_back {
  transform: translateZ(-50px) rotateY(180deg);
}
.cube .in_left {
  transform: rotateY(90deg) translateZ(50px);
}
.cube .in_right {
  transform: rotateY(-90deg) translateZ(50px);
}
.cube .in_top {
  transform: rotateX(90deg) translateZ(50px);
}
.cube .in_bottom {
  transform: rotateX(-90deg) translateZ(50px);
}
/*鼠标移入后样式*/
.out_front_scale {
  transform: rotateY(0deg) translateZ(200px) !important;
}
.out_back_scale {
  transform: translateZ(-200px) rotateY(180deg) !important;
}
.out_left_scale {
  transform: rotateY(90deg) translateZ(200px) !important;
}
.out_right_scale {
  transform: rotateY(-90deg) translateZ(200px) !important;
}
.out_top_scale {
  transform: rotateX(90deg) translateZ(200px) !important;
}
.out_bottom_scale {
  transform: rotateX(-90deg) translateZ(200px) !important;
}
</style>
