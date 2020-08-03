<template>
  <transition name="fade-transform" mode="out-in">
    <swiper ref="swiper" id="swiper-container" :options="swiperOption">
      <swiper-slide
        v-for="(stage, idx) in stages"
        :key="idx"
        :style="stage.style"
        class="stage-page"
        ref="swiper"
      >
        <template v-if="loadStage(idx)">
          <div v-for="(cpt, key) in stage.content" :key="key">
            <component
              :is="cpt.name"
              :cpt-infos="cpt"
            />
          </div>
        </template>
      </swiper-slide>
    </swiper>
  </transition>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper"
import stages from '@/utils/config'

export default {
  name: "index",
  components: {
    Swiper,
    SwiperSlide,
    Album: () => import('@/components/Album'),
    Words: () => import('@/components/SingleWordDisplay'),
    FlowStar: () => import('@/components/FlowStar'),
    Icons: () => import('@/components/Icons')
  },
  data() {
    return {
      stages,
      activeIndex: 0,
      swiperOption: {
        direction: "vertical", //水平方向移动
        grabCursor: true, //鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
        on: {
          //监听滑动切换事件，返回swiper对象
          slideChange: this.slideChange
        }
      }
    };
  },
  computed: {
    loadStage(idx) {
      return function(idx) {
        return this.activeIndex === idx
      }
    }
  },
  methods: {
    slideChange(evt) {
      this.activeIndex = evt.activeIndex
    }
  }
};
</script>
<style scoped>
#swiper-container {
  width: 100%;
  height: 100%;
}
.stage-page {
  position: relative;
}
</style>
