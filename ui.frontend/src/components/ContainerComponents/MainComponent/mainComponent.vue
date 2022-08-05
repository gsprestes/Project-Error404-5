<template>
  <main id="containerMain">
    <div class="containerLeft">
        <imageComponent :srcImage="srcImage"/>
    </div>
    <div class="containerRight">
        <titleComponent :typeFont="titleFont" :titleMsg="titleMsg"/>
        <textComponent :typeFont="textFont" :textMsg="textMsg"/>
        <buttonComponent :typeFont="buttonFont" :buttonMsg="buttonMsg"/>
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
      type: String,
      default: '/content/dam/vue/espantalho.png'
    },
    titleMsg: {
      type: String,
      default: 'I have bad news for you'
    },
    titleFont: {
      type: String
    },
    textFont: {
      type: String
    },
    textMsg: {
      type: String,
      default: 'The page you are looking for might be removed or is temporarily unavailable'
    },
    buttonFont: {
      type: String
    },
    buttonMsg: {
      type: String,
      default: 'BACK TO HOME PAGE'
    }
  }
}
</script>

<style lang="scss" scoped>
@import './mainComponent.scss';
</style>
