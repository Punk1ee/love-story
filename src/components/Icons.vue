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
        opacity: 1
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
          _position.marginLeft = -(this.unit2px(width, 'width') / 2).toFixed(2) + 'px'
        } else if (position.left) {
          _position.left = position.left
        }
        if (position.right === 'center') {
          _position.right = '50%'
          _position.marginRight = -(this.unit2px(width, 'width') / 2).toFixed(2) + 'px'
        } else if (position.right) {
          _position.right = position.right
        }
        if (position.bottom === 'center') {
          _position.bottom = '50%'
          _position.marginBottom = -(this.unit2px(height, 'height') / 2).toFixed(2) + 'px'
        } else {
          _position.bottom = position.bottom
        }
        if (position.top === 'center') {
          _position.top = '50%'
          _position.marginTop = -(this.unit2px(height, 'height') / 2).toFixed(2) + 'px'
        } else {
          _position.top = position.top
        }
      }
      return _position
    },
    unit2px(val, type) {
      const full_px = type === 'width' ? this.win_w : type === 'height' ? this.win_h : val
      if (val.includes('%')) {
        val = full_px * parseInt(val) / 100
      } else {
        val = parseInt(val)
      }
      return val
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
        const position = this.getPosition()
        let _style = {
          width: style.width || this.style.width,
          height: style.height || this.style.height,
          left: position.left,
          top: position.top,
          right: position.right,
          bottom: position.bottom,
          marginLeft: position.marginLeft,
          marginTop: position.marginTop,
          backgroundImage: this.style.backgroundImage,
          backgroundSize: style.background.size || this.style.backgroundSize,
          opacity: style.opacity || this.style.opacity
        }
        let animation_style = {}
        if (style.animation) {
          const { name, duration, delay, iterationCount } = style.animation
          animation_style = {
            animationName: name,
            animationDuration: duration,
            animationDelay: parseInt(delay.val, 10) + i * delay.rate + 's',
            animationIterationCount: iterationCount
          }
        }
        _style = { ..._style, ...animation_style }

        this.cpts.push({
          idx: i,
          style: _style
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
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
  @keyframes _rise {
		0% {
			transform: translateY(0px) scale(0.2);
		}
		100% {
			transform: translateY(-500px) scale(1);
		}
	}
  .icon-container {
    position: absolute;
    width: 100%;
    height: 100%;
    color: @themeColor;
  }
  .icon {
    position: absolute;
  }
  ._scale {
    animation-name: _scale !important;
  }
  ._opacity {
    animation-name: _opacity !important;
  }
  ._rise {
    transform: translateY(0px) scale(0.2);
    animation-name: _rise !important;
  }
</style>