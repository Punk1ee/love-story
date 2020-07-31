<template>
  <div class="app-container">
    <app-main />
    <app-footer />
  </div>
</template>

<script>
import AppMain from './components/AppMain'
import AppFooter from './components/AppFooter'

export default {
  name: 'AppContainer',
  components: {
    AppMain, AppFooter
  }
}
</script>
