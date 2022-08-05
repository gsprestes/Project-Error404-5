<template>
  <img :src="srcImage" />
</template>

<script>
export default {
  name: 'imageComponent',
  props: {
    srcImage: {
      type: String
    }
  }
}
</script>

<style scoped>
img {
  max-width: 40vw;
}
</style>
