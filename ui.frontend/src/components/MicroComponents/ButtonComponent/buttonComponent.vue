<template>
  <button :style="{'font-family': typeFont}">{{ buttonMsg }}</button>
</template>

<script>
export default {
  name: 'buttonComponent',
  props: {
    buttonMsg: {
      type: String,
      default: 'Back to homepage'
    },
    typeFont: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Montserrat:wght@500;700&family=Space+Mono:wght@400;700&display=swap');
@import './buttonComponent.scss';
</style>
