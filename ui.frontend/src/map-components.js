import CustomClasses from './components/CustomClasses/CustomClasses'
import Text from './components/Text/Text'
import AppPage from './components/Page/AppPage'
import CheckBox from './components/Checkbox/Checkbox'
import Select from './components/Select/Select'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Image from './components/Image/Image'
import Main from './components/Main/Main'
import headerComponent from './components/ContainerComponents/HeaderComponent/headerComponent.vue'
import mainComponent from './components/ContainerComponents/MainComponent/mainComponent.vue'
import footerComponent from './components/ContainerComponents/FooterComponent/footerComponent.vue'
import textComponent from './components/MicroComponents/TextComponent/textComponent.vue'
import titleComponent from './components/MicroComponents/TitleComponent/titleComponent.vue'
import buttonComponent from './components/MicroComponents/ButtonComponent/buttonComponent.vue'
import imageComponent from './components/MicroComponents/ImageComponent/imageComponent.vue'
import {
  withComponentMappingContext,
  AllowedComponentsContainer,
  MapTo
} from '@mavice/aem-vue-editable-components'

MapTo('vue/components/page')(withComponentMappingContext(AppPage))

// Custom EditConfig for General New Vue Components
const EditConfig = {
  emptyLabel: 'Empty',

  isEmpty: function (props) {
    return !props
  }
}
/** *******************************************************************
              ↓  NEW COMPONENTS MAPPING COME HERE  ↓
**********************************************************************/

MapTo('vue/components/customclasses')(CustomClasses, EditConfig)

// footerComponent mapping
MapTo('vue/components/footer-component')(footerComponent)

// headerComponent mapping
MapTo('vue/components/header-component')(headerComponent)

// mainComponent mapping
MapTo('vue/components/main-component')(mainComponent)

// mainComponent2 mapping
MapTo('vue/components/main-component2')(mainComponent)

// textComponent mapping
MapTo('vue/components/text-component')(textComponent)

// titleComponent mapping
MapTo('vue/components/title-component')(titleComponent)

// buttonComponent mapping
MapTo('vue/components/button-component')(buttonComponent)

// imageComponent mapping
MapTo('vue/components/image-component')(imageComponent)

// Select Component Mapping
MapTo('vue/components/select')(Select, EditConfig)

// Checkbox Component Mapping
MapTo('vue/components/checkbox')(CheckBox, EditConfig)

// Header Component Mapping
MapTo('vue/components/header')(Header, EditConfig)

// Header Component Mapping
MapTo('vue/components/main')(Main, EditConfig)

// Footer Component Mapping
MapTo('vue/components/footer')(Footer, EditConfig)

// Image Component Mapping
MapTo('vue/components/image')(Image, {
  emptyLabel: 'Image',
  isEmpty: function (props) {
    return !props || !props.src || props.src.trim().length < 1
  },
  resourceType: 'vue/components/image'
})

// Text Component Mapping
MapTo('vue/components/text')(Text, {
  emptyLabel: 'Text',

  isEmpty: function (props) {
    return !props || !props.text || props.text.trim().length < 1
  }
})

// Container Component Mapping
MapTo('vue/components/container')(
  withComponentMappingContext(AllowedComponentsContainer),
  {
    emptyLabel: 'Container',

    isEmpty: function (props) {
      return !props || !props.cqItemsOrder || props.cqItemsOrder.length === 0
    }
  }
)
