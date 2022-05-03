import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueScrollTo from 'vue-scrollto'

library.add(fas)
library.add(faLinkedin)
library.add(faGithub)

createApp(App)
.use(VueScrollTo)
.component('fa', FontAwesomeIcon)
.mount('#app')
