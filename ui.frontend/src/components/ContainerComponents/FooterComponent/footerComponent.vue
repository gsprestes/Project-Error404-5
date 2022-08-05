<template>
  <footer id="containerFooter">
    <span :style="{'font-family': typeFont}"> created by {{textSpan}} - devChallenges.io</span>
  </footer>
</template>

<script>
export default {
  name: 'footerComponent',
  props: {
    textSpan: {
      type: String
    },
    typeFont: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Montserrat:wght@500;700&family=Space+Mono:wght@400;700&display=swap');
@import './footerComponent.scss';
</style>
