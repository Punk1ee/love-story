<template>
  <div class="icon-container">
    <span
      v-for="(cpt, idx) in cpts"
      :key="idx"
      class="icon"
      :class="cpt.style.animationName"
      :style="cpt.style"
    />
  </div>
</template>

<script>
import { getWinWidth, getWinHeight, getBetweenRandom} from '@/utils'

export default {
  name: 'Icon',
  props: {
    cptInfos: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      win_w: 0,
      win_h: 0,
      cpts: [],
      style: {
        width: '16px',
        height: '16px',
        // 如果位置随机，则left和top必须是两个值的数组；否则位置默认固定，固定时值为'center'的话则居中
        position: {
          // random: true,
          // left: ['0%', '100%'],
          // top: ['0%', '50%']
          random: false,
          left: 'center',
          top: 'center'
        },
        backgroundImage: `url(${this.cptInfos.source})`,
        backgroundSize: '16px',
        animation: {
          name: null,
          duration: '3s',
          delay: '0s',
          iterationCount: 1
        },
        transform: null
      }
    }
  },
  created() {
    this.initData()
    this.createIcons()
  },
  methods: {
    initData() {
      this.win_w = getWinWidth()
      this.win_h = getWinHeight()
    },
    getPosition() {
      let _position = {}
      const position = this.cptInfos.style && this.cptInfos.style.position || this.style.position
      if (position.random) {
        _position = this.getRandomPosition(position)
      } else {
        const { width, height } = this.cptInfos.style || this.style
        if (position.left === 'center') {
          _position.left = '50%'
          _position.marginLeft = `-${parseInt(width, 10) / 2}px`
        } else {
          _position.left = position.left
        }
        if (position.top === 'center') {
          _position.top = '50%'
          _position.marginTop = `-${parseInt(height, 10) / 2}px`
        } else {
          _position.top = position.top
        }
      }
      return _position
    },
    getRandomPosition(position) {
      const leftRange = position && position.left
      const topRange = position && position.top
      if (!Array.isArray(leftRange) || !Array.isArray(topRange)) {
        throw new Error(`type error: prop 'left' or 'top' must be an Array`)
      } else if (leftRange.length < 2 || topRange.length < 2) {
        throw new Error(`arguments error: the value's length of 'left' or 'top' is error `)
      }
      const _position = {
        left: 0,
        top: 0
      }
      let min = 0
      let max = 1
      let unit = ''
      
      min = parseInt(leftRange[0], 10)
      max = parseInt(leftRange[1], 10)
      unit = this.getPosUnit(leftRange[0])
      _position.left = getBetweenRandom(min, max) + unit

      min = parseInt(topRange[0], 10)
      max = parseInt(topRange[1], 10)
      unit = this.getPosUnit(topRange[0])
      _position.top = getBetweenRandom(min, max) + unit
      return _position
    },
    getPosUnit(pos) {
      let unit = '%'
      if (pos.includes('px')) {
        unit = 'px'
      } else {
        unit = '%'
      }
      return unit
    },
    createIcons() {
      let number = this.cptInfos.number
      if (Array.isArray(number)) {
        number = getBetweenRandom(number[0], number[1])
      }
      for (let i = 0; i < number; i++) {
        const style = this.cptInfos.style
        const { name, duration, delay, iterationCount } = style.animation || this.style.animation
        const position = this.getPosition()
        this.cpts.push({
          idx: i,
          style: {
            width: style.width || this.style.width,
            height: style.height || this.style.height,
            left: position.left,
            top: position.top,
            marginLeft: position.marginLeft,
            marginTop: position.marginTop,
            backgroundImage: this.style.backgroundImage,
            backgroundSize: style.background.size || this.style.backgroundSize,
            animationName: name,
            animationDuration: duration,
            animationDelay: parseInt(delay.val, 10) + i * delay.rate + 's',
            animationIterationCount: iterationCount
          }
        })
      }
    }
  }
}
</script>

<style scoped>
  @keyframes _scale {
    0% {
      transform: scale(1.5);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.5);
    }
  }
  @keyframes _opacity {
		0% {
			opacity: 0.4;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 0.4;
		}
	}
  .icon-container {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .icon {
    position: absolute;
  }
  ._scale {
    animation-name: _scale !important;
  }
  ._opacity {
    opacity: 0.4;
    animation-name: _opacity !important;
  }
</style>