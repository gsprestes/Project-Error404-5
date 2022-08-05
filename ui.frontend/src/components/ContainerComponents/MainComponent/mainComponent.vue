<template>
  <main id="containerMain">
    <div class="containerLeft">
        <imageComponent :srcImage="srcImage"/>
    </div>
    <div class="containerRight">
        <titleComponent :typeFont="titleFont" :titleStyle="titleStyle" :titleMsg="titleMsg"/>
        <textComponent :typeFont="textFont" :textStyle="textStyle" :textMsg="textMsg"/>
        <buttonComponent :typeFont="buttonFont" :buttonStyle="buttonStyle" :buttonMsg="buttonMsg"/>
    </div>
  </main>
</template>

<script>
import imageComponent from '@/components/MicroComponents/ImageComponent/imageComponent.vue'
import titleComponent from '@/components/MicroComponents/TitleComponent/titleComponent.vue'
import textComponent from '@/components/MicroComponents/TextComponent/textComponent.vue'
import buttonComponent from '@/components/MicroComponents/ButtonComponent/buttonComponent.vue'
export default {
  name: 'mainComponent',
  components: {
    imageComponent,
    titleComponent,
    textComponent,
    buttonComponent
  },
  props: {
    srcImage: {
      type: String
    },
    titleMsg: {
      type: String
    },
    titleFont: {
      type: String
    },
    titleStyle: {
      type: String
    },
    textFont: {
      type: String
    },
    textStyle: {
      type: String
    },
    textMsg: {
      type: String
    },
    buttonFont: {
      type: String
    },
    buttonStyle: {
      type: String
    },
    buttonMsg: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import './mainComponent.scss';
</style>
