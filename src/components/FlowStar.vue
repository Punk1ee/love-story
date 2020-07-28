<template>
  <div class="flow-star-container">
    <span
      v-for="(star, idx) in stars"
      :key="idx"
      class="flow-star"
      :style="{ 'left': star.left, 'top': star.top, 'animation-delay': star.animationDelay }"
    />
  </div>
</template>

<script>
import { getWinWidth, getBetweenRandom} from '@/utils'

export default {
  name: 'FlowStar',
  data() {
    return {
      win_w: 0,
      stars: [],
      animationDelay: {
        val: 0,
        rate: 0.2
      }
    }
  },
  created() {
    this.initData()
    this.createStars()
  },
  methods: {
    initData() {
      this.win_w = getWinWidth()
    },
    createStars() {
      const count = getBetweenRandom(4, 6)
      for (let i = 0; i < count; i++) {
        const left = getBetweenRandom(0, this.win_w)
        this.stars.push({
          left: left + 'px',
          top: '0px',
          animationDelay: i % 6 == 0 ? this.animationDelay.val + 's' : i * (this.animationDelay.val + this.animationDelay.rate) + 's'
        })
      }
    }
  }
}
</script>

<style scoped>
  @keyframes flow-star {
    0% {
      opacity: 0;
      transform: scale(0.5) translate3d(0, 0, 0);
      -webkit-transform: scale(0.5) translate3d(0, 0, 0);
      -moz-transform: scale(0.5) translate3d(0, 0, 0);
    }
    50% {
      opacity: 1;
      transform: translate3d(-100px, 100px, 0);
    }
    100% {
      opacity: 0;
      transform: scale(1.2) translate3d(-200px, 200px, 0);
    }
  }
  .flow-star-container {
    position: absolute;
  }
  .flow-star {
    width: 1px;
    display: block;
    background: transparent;
    position: relative;
    opacity: 0;
    /*过渡动画*/ 
    animation: flow-star 3s linear infinite;
    -webkit-animation: flow-star 3s linear infinite;
    -moz-animation: flow-star 3s linear infinite;
  }
  .flow-star:after {
    content: '';
    display: block;
    border: 0px solid #fff;
    border-width: 0px 90px 2px 90px;
    border-color: transparent transparent transparent rgba(255, 255, 255, .5);
    box-shadow: 0 0 1px 0 rgba(255, 255, 255, .1);
    /*变形*/       
    transform: rotate(-45deg) translate3d(1px, 3px, 0);
    -webkit-transform: rotate(-45deg) translate3d(1px, 3px, 0);
    -moz-transform: rotate(-45deg) translate3d(1px, 3px, 0);
    transform-origin: 0% 100%;
    -webkit-transform-origin: 0% 100%;
    -moz-transform-origin: 0% 100%;
  }
  
</style>