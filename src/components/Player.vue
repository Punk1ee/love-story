<template>
  <audio :src="source" :loop="loop" :controls="controls"></audio>
</template>

<script>
export default {
  name: 'Player',
  props: {
    source: {
      type: String,
      default: ''
    },
    loop: {
      type: Boolean,
      default: true
    },
    controls: {
      type: Boolean,
      default: false
    }
  }
}
</script>
