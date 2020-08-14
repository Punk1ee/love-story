<template>
  <div id="app" @touchstart.stop="playMusic" @click.stop="playMusic">
    <router-view />
    <player ref="player" :source="playerSrc" loop />
  </div>
</template>

<script>
import Player from '@/components/Player'
export default {
  name: 'App',
  components: {
    Player
  },
  data() {
    return {
      playerSrc: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_98941&response=res&type=convert_url&',
      player: null
    }
  },
  mounted() {
    this.player = this.$refs.player.$el
  },
  methods: {
    playMusic () {
      if (!this.player.paused) return
      // this.player.play()
    }
  }
}
</script>

