<template>
  <header>
    <h2 :id="idHeader" :style="{'font-family': typeFont}">{{ headerMsg }}</h2>
  </header>
</template>

<script>
export default {
  name: 'headerComponent',
  props: {
    headerMsg: {
      type: String,
      default: '404 NOT FOUND'
    },
    typeFont: {
      type: String
    },
    idHeader: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Montserrat:wght@500;700&family=Space+Mono:wght@400;700&display=swap');
@import './headerComponent.scss';
</style>
