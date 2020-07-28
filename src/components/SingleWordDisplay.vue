<template>
  <div class="single-word-display-container">
    <span v-for="(word, idx) in wordsArr" :key="idx" class="word" :style="{ 'color': word.color}">{{ word.val }}</span>
  </div>
</template>

<script>
export default {
  name: 'SingleWordDisplay',
  props: {
    cptInfos: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      wordsArr: [],
      curIdx: 0,
      interval: null
    }
  },
  created() {
    this.resetWordAndIdx()
  },
  mounted() {
    this.intervalInputwords2SingleWord()
  },
  destroyed() {
    clearInterval(this.interval)
  },
  methods: {
    resetWordAndIdx() {
      const word = this.cptInfos.source.slice(this.curIdx, this.curIdx + 1)
      this.wordsArr.push({
        'val': word,
        'color': this.getRandomColor()
      })
      this.curIdx++
    },
    intervalInputwords2SingleWord() {
      const vm = this
      this.interval = setInterval(() => {
        if (vm.curIdx === vm.cptInfos.source.length) {
          clearInterval(vm.interval)
          return
        }
        vm.resetWordAndIdx()
      }, this.cptInfos.rate)
    },
    getRandomColor() {
      return '#' + Math.floor(Math.random()*16777215).toString(16);
    }
  }
}
</script>

<style scoped>
  .single-word-display-container {
    font-size: 20px;
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
