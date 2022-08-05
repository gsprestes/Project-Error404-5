<template>
  <p :style="{'font-family': typeFont}" :id="textStyle">{{ textMsg }}</p>
</template>

<script>
export default {
  name: "textComponent",
  props: {
    textMsg: {
      type: String
    },
    textStyle: {
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
@import './textComponent.scss';
</style>