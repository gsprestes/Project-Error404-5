<template>
  <h1 :style="{'font-family': typeFont}" :id="titleStyle">{{ titleMsg }}</h1>
</template>

<script>
export default {
    name: "titleComponent",
    props: {
        titleMsg: {
            type: String,
            default: "I have bad news for you"
        },
        titleStyle: {
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
@import './titleComponent.scss';
</style>