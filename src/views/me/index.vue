<template>
  <van-swipe class="swipe-container" vertical :show-indicators="showIndicators">
    <van-swipe-item
      v-for="(stage, idx) in stages"
      :key="idx"
      :style="stage.style"
      class="stage-page"
    >
      <div v-for="(cpt, key) in stage.content" :key="key">
        <component
          :is="cpt.name"
          :cpt-infos="cpt"
        />
      </div>
    </van-swipe-item>
  </van-swipe>
</template>
<script>
import stages from '@/utils/config'

export default {
  name: "index",
  components: {
    Album: () => import('@/components/Album'),
    Words: () => import('@/components/SingleWordDisplay'),
    FlowStar: () => import('@/components/FlowStar'),
    Icons: () => import('@/components/Icons')
  },
  data() {
    return {
      stages,
      showIndicators: false
    }
  }
};
</script>
<style scoped>
.swipe-container {
  width: 100%;
  height: 100%;
}
.stage-page {
  position: relative;
}
</style>
