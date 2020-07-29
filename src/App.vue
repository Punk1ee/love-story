<template>
  <div id="app" @touchstart.stop="playMusic">
    <router-view/>
    <player ref="player" :source="playerSrc" />
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
      $app: null
    }
  },
  methods: {
    playMusic () {
      const player = this.$refs.player.$el
      // player.play()
    }
  }
}
</script>

