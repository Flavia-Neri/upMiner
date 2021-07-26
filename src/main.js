import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import{
  faBriefcase, 
  faGlobe, 
  faUniversity,
  faTree,
  faGavel,
  faBan,
  faGlobeAmericas,
  faGem,
  faMale,
  faPiggyBank} from '@fortawesome/free-solid-svg-icons'


library
.add(
  faBriefcase, 
  faGlobe, 
  faUniversity,
  faTree,
  faGavel,
  faBan,
  faGlobeAmericas,
  faGem,
  faMale,
  faPiggyBank)


  createApp(App)
  .use(router)
  .component( 'font-awesome-icon' ,  FontAwesomeIcon )
  .mount('#app')


