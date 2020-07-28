<template>
  <audio :src="source" loop></audio>
</template>

<script>
export default {
  name: 'Player',
  props: {
    source: {
      type: String,
      default: ''
    }
  }
}
</script>
