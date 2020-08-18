<template>
  <div class="app-main-wrap" @dblclick.stop="toggleMusic">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key"></router-view>
    </transition>
    <player ref="player" :source="playerSrc" :loop="loop" :controls="controls" />
  </div>
</template>

<script>
import Player from '@/components/Player'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'AppMain',
  components: {
    Player
  },
  data() {
    return {
      playerSrc: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_98941&response=res&type=convert_url&',
      player: null,
      loop: true,
      controls: false
    }
  },
  computed: {
    key() { return this.$route.path },
    ...mapGetters([
      'curView'
    ])
  },
  mounted() {
    this.player = this.$refs.player.$el
  },
  methods: {
    toggleMusic() {
      if (this.player.paused) {
        this.player.play()
        this.$toast.success('音乐播放')
      } else {
        this.player.pause()
        this.$toast.fail('音乐暂停')
      }
    }
  }
}
</script>
